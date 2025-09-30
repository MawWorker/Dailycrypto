import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const BASE = process.env.COINGECKO_BASE_URL || 'https://api.coingecko.com/api/v3/simple/price';
const KEY  = process.env.COINGECKO_API_KEY; // optional

const MAP: Record<string,string> = {
  btc:'bitcoin', eth:'ethereum', sol:'solana', xrp:'ripple', ada:'cardano',
  bnb:'binancecoin', doge:'dogecoin', link:'chainlink', matic:'matic-network',
  dot:'polkadot', ltc:'litecoin', avax:'avalanche-2'
};

function toIdsParam(raw: string) {
  return raw.split(',').map(s=>s.trim().toLowerCase()).map(s=>MAP[s] || s).join(',');
}

export async function GET(req: Request) {
  // Return mock data if live prices are disabled
  if (process.env.NEXT_PUBLIC_USE_LIVE_PRICES !== "true") {
    const mockData = [
      { id: 'bitcoin', symbol: 'BTC', price: 2451000, change24h: 45600 },
      { id: 'ethereum', symbol: 'ETH', price: 162000, change24h: -3420 },
      { id: 'binancecoin', symbol: 'BNB', price: 38500, change24h: 1200 },
      { id: 'cardano', symbol: 'ADA', price: 51.30, change24h: -2.10 },
      { id: 'solana', symbol: 'SOL', price: 12540, change24h: 340 },
      { id: 'ripple', symbol: 'XRP', price: 34.20, change24h: 0.85 },
      { id: 'polkadot', symbol: 'DOT', price: 399, change24h: -12 },
      { id: 'avalanche-2', symbol: 'AVAX', price: 2280, change24h: 95 },
      { id: 'matic-network', symbol: 'MATIC', price: 25.65, change24h: -0.95 },
      { id: 'chainlink', symbol: 'LINK', price: 798, change24h: 23 }
    ];
    
    return NextResponse.json(mockData, {
      headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=300' }
    });
  }

  const { searchParams } = new URL(req.url);
  const idsRaw  = searchParams.get('ids') || 'bitcoin,ethereum,solana';
  const vs      = (searchParams.get('vs') || 'php').toLowerCase();
  const with24h = (searchParams.get('include24h') || 'true') === 'true';

  const ids = toIdsParam(idsRaw);
  const url = `${BASE}?ids=${encodeURIComponent(ids)}&vs_currencies=${encodeURIComponent(vs)}${with24h ? '&include_24hr_change=true' : ''}`;

  const headers: Record<string,string> = { Accept: 'application/json' };
  if (KEY) headers['x-cg-demo-api-key'] = KEY; // CoinGecko demo/pro headers

  // Retry logic for network errors
  const maxRetries = 3;
  let lastError: any;
  let timeoutId: NodeJS.Timeout | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
  try {
      const controller = new AbortController();
      timeoutId = setTimeout(() => {
        if (controller && typeof controller.abort === 'function') {
          controller.abort();
        }
      }, 10000); // 10 second timeout
      
      const res = await fetch(url, { 
        method: 'GET', 
        headers, 
        next: { revalidate: 300 },
        signal: controller.signal
      });
      
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
    if (!res.ok) return NextResponse.json({ error:`upstream_${res.status}` }, { status:502 });
    const data = await res.json() as Record<string, any>;
    const out = Object.entries(data).map(([id, v]: [string, any]) => ({
      id,
      symbol: id.toUpperCase().slice(0,5),
      price: v[vs],
      change24h: v[`${vs}_24h_change`]
    }));
    return NextResponse.json(out, {
      headers: { 'Cache-Control':'public, s-maxage=300, stale-while-revalidate=300' }
    });
    } catch (error: any) {
      // Clear timeout in catch block as well
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
      lastError = error;
      console.warn(`API attempt ${attempt}/${maxRetries} failed:`, error.message);
      
      // If this isn't the last attempt, wait before retrying
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt)); // Exponential backoff
        continue;
      }
  }
  }

  // All retries failed
  console.error('All API attempts failed:', lastError);
  return NextResponse.json({ error: 'fetch_failed', details: lastError?.message }, { status: 504 });
}