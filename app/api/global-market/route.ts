import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  // Return mock data if live prices are disabled
  if (process.env.NEXT_PUBLIC_USE_LIVE_PRICES !== "true") {
    const mockData = {
      data: {
        total_market_cap: { usd: 2500000000000 },
        total_volume: { usd: 80000000000 },
        market_cap_change_percentage_24h_usd: 2.34
      }
    };
    
    return NextResponse.json(mockData, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  }

  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/global',
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 60 } // Cache for 1 minute
      }
    );

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  } catch (error) {
    console.error('Failed to fetch global market data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch global market data' },
      { status: 500 }
    );
  }
}