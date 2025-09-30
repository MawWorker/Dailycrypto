import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET(request: Request) {
  // Return mock data if live prices are disabled
  if (process.env.NEXT_PUBLIC_USE_LIVE_PRICES !== "true") {
    const mockData = [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
        current_price: 50000,
        market_cap: 1000000000000,
        market_cap_rank: 1,
        price_change_24h: 1200,
        price_change_percentage_24h: 2.45,
        total_volume: 30000000000,
        last_updated: new Date().toISOString()
      },
      {
        id: 'ethereum',
        symbol: 'eth',
        name: 'Ethereum',
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
        current_price: 3200,
        market_cap: 400000000000,
        market_cap_rank: 2,
        price_change_24h: -50,
        price_change_percentage_24h: -1.23,
        total_volume: 15000000000,
        last_updated: new Date().toISOString()
      }
    ];
    
    return NextResponse.json(mockData, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    });
  }

  try {
    const { searchParams } = new URL(request.url);
    
    // Build CoinGecko API URL with parameters
    const params = new URLSearchParams({
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '100',
      page: '1',
      sparkline: 'false',
      price_change_percentage: '24h'
    });

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?${params}`,
      {
        headers: {
          'Accept': 'application/json',
        }
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
    console.error('Failed to fetch coins market data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch market data' },
      { status: 500 }
    );
  }
}