'use client';
import { useCallback, useEffect, useState } from 'react';

interface CoinData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  changePercent24h: number;
}

type PriceRow = { id: string; symbol: string; price: number; change24h?: number };

interface UseCryptoPricesReturn {
  data: CoinData[];
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  refetch: () => void;
}

export const COIN_IDS = [
  'bitcoin',
  'ethereum',
  'binancecoin',
  'cardano',
  'solana',
  'ripple',
  'polkadot',
  'avalanche-2',
  'matic-network',
  'chainlink'
];

const COIN_SYMBOLS: { [key: string]: string } = {
  'bitcoin': 'BTC',
  'ethereum': 'ETH',
  'binancecoin': 'BNB',
  'cardano': 'ADA',
  'solana': 'SOL',
  'ripple': 'XRP',
  'polkadot': 'DOT',
  'avalanche-2': 'AVAX',
  'matic-network': 'MATIC',
  'chainlink': 'LINK'
};

const COIN_NAMES: { [key: string]: string } = {
  'bitcoin': 'Bitcoin',
  'ethereum': 'Ethereum',
  'binancecoin': 'BNB',
  'cardano': 'Cardano',
  'solana': 'Solana',
  'ripple': 'XRP',
  'polkadot': 'Polkadot',
  'avalanche-2': 'Avalanche',
  'matic-network': 'Polygon',
  'chainlink': 'Chainlink'
};

const UPDATE_INTERVAL = 60000; // 1 minute (60 seconds)

// Mock fallback data matching new API format
const MOCK: PriceRow[] = [
  { id:'bitcoin',  symbol:'BTC', price:2451000, change24h:45600 },
  { id:'ethereum', symbol:'ETH', price:162000,  change24h:-3420 },
  { id:'binancecoin', symbol:'BNB', price:38500, change24h:1200 },
  { id:'cardano', symbol:'ADA', price:51.30, change24h:-2.10 },
  { id:'solana',   symbol:'SOL', price:12540,   change24h:340 },
  { id:'ripple', symbol:'XRP', price:34.20, change24h:0.85 },
  { id:'polkadot', symbol:'DOT', price:399, change24h:-12 },
  { id:'avalanche-2', symbol:'AVAX', price:2280, change24h:95 },
  { id:'matic-network', symbol:'MATIC', price:25.65, change24h:-0.95 },
  { id:'chainlink', symbol:'LINK', price:798, change24h:23 }
];

export const useCryptoPrices = (): UseCryptoPricesReturn => {
  const [data, setData] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPrices = useCallback(async () => {
    // Return mock data if live prices are disabled
    if (process.env.NEXT_PUBLIC_USE_LIVE_PRICES !== "true") {
      const fallbackData: CoinData[] = MOCK.map((item: PriceRow) => {
        const priceChangePercent = item.price && item.change24h 
          ? (item.change24h / (item.price - item.change24h)) * 100 
          : 0;

        return {
          symbol: COIN_SYMBOLS[item.id] || item.symbol,
          name: COIN_NAMES[item.id] || item.id,
          price: Math.round(item.price * 100) / 100,
          change24h: Math.round((item.change24h || 0) * 100) / 100,
          changePercent24h: Math.round(priceChangePercent * 100) / 100
        };
      });
      
      setData(fallbackData);
      setLastUpdated(new Date());
      setLoading(false);
      return;
    }

    setError(null);
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 15000); // Increased to 15 second timeout

    try {
      const coinIdsParam = COIN_IDS.join(',');
      const q = new URLSearchParams({
        ids: coinIdsParam, 
        vs: 'php', 
        include24h: 'true' 
      }).toString();
      
      // Call our internal API route instead of CoinGecko directly
      const res = await fetch(`/api/prices?${q}`, {
        signal: controller.signal, 
        cache: 'no-store',
        headers: {
          'Accept': 'application/json',
        }
      });
      
      clearTimeout(t);
      
      if (!res.ok) {
        const errorText = await res.text().catch(() => 'Unknown error');
        throw new Error(`api_${res.status}: ${errorText}`);
      }
      
      const json = await res.json();
      
      if (Array.isArray(json)) {
        // Transform API data to match existing interface
        const transformedData: CoinData[] = json.map((item: PriceRow) => {
          const priceChangePercent = item.price && item.change24h 
            ? (item.change24h / (item.price - item.change24h)) * 100 
            : 0;

          return {
            symbol: COIN_SYMBOLS[item.id] || item.symbol,
            name: COIN_NAMES[item.id] || item.id,
            price: Math.round(item.price * 100) / 100,
            change24h: Math.round((item.change24h || 0) * 100) / 100,
            changePercent24h: Math.round(priceChangePercent * 100) / 100
          };
        });

        setData(transformedData);
        setLastUpdated(new Date());
      } else {
        throw new Error('Invalid response format');
      }
      
      setLoading(false);
      
    } catch (e: any) {
      console.warn('API prices failed, using fallback:', e?.message || e);
      
      // Set more specific error messages
      if (e.name === 'AbortError') {
        setError('timeout');
      } else if (e.message?.includes('fetch')) {
        setError('network_error');
      } else {
        setError('unavailable');
      }
      
      // Transform mock data to match interface
      const fallbackData: CoinData[] = MOCK.map((item: PriceRow) => {
        const priceChangePercent = item.price && item.change24h 
          ? (item.change24h / (item.price - item.change24h)) * 100 
          : 0;

        return {
          symbol: COIN_SYMBOLS[item.id] || item.symbol,
          name: COIN_NAMES[item.id] || item.id,
          price: Math.round(item.price * 100) / 100,
          change24h: Math.round((item.change24h || 0) * 100) / 100,
          changePercent24h: Math.round(priceChangePercent * 100) / 100
        };
      });
      
      setData(fallbackData);
      setLoading(false);
    }
  }, []);

  const refetch = useCallback(() => {
    setLoading(true);
    fetchPrices();
  }, [fetchPrices]);

  useEffect(() => {
    // Initial fetch
    fetchPrices();

    // Set up interval for periodic updates
    const interval = setInterval(fetchPrices, UPDATE_INTERVAL);

    // Cleanup
    return () => clearInterval(interval);
  }, [fetchPrices]);

  // Handle visibility change to pause/resume updates when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Tab became visible, fetch fresh data
        fetchPrices();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fetchPrices]);

  // Handle online/offline events
  useEffect(() => {
    const handleOnline = () => {
      fetchPrices();
    };

    const handleOffline = () => {
      setError('No internet connection');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [fetchPrices]);

  return {
    data,
    loading,
    error,
    lastUpdated,
    refetch
  };
};