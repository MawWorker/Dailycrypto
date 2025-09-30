import { Coin } from '@/lib/types';

// Mock exchange rates (1 USD = 56.5 PHP as of example)
const USD_TO_PHP = 56.5;

const mockSparklineData = (trend: 'up' | 'down' | 'sideways'): number[] => {
  const basePoints = Array.from({ length: 7 }, (_, i) => i);
  
  switch (trend) {
    case 'up':
      return basePoints.map((_, i) => 100 + Math.random() * 20 + i * 5);
    case 'down':
      return basePoints.map((_, i) => 120 - Math.random() * 20 - i * 3);
    default:
      return basePoints.map(() => 100 + Math.random() * 10 - 5);
  }
};

export const mockCoins: Coin[] = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    pricePHP: 2850000, // ~$50,000 * 57 PHP
    change24h: 2.45,
    change7d: 8.12,
    marketCapPHP: 55000000000000, // $1T * 55
    volume24hPHP: 1500000000000, // $30B * 55
    sparkline7d: mockSparklineData('up'),
    rank: 1,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'The world\'s first and largest cryptocurrency by market cap.'
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    pricePHP: 180000, // ~$3200 * 56.5
    change24h: -1.23,
    change7d: 12.45,
    marketCapPHP: 21600000000000, // $400B * 54
    volume24hPHP: 800000000000, // $15B * 53.3
    sparkline7d: mockSparklineData('up'),
    rank: 2,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Leading smart contract platform and decentralized application ecosystem.'
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    pricePHP: 8500, // ~$150 * 56.67
    change24h: 5.67,
    change7d: -2.34,
    marketCapPHP: 3400000000000, // $60B * 56.67
    volume24hPHP: 450000000000, // $8B * 56.25
    sparkline7d: mockSparklineData('sideways'),
    rank: 3,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'High-performance blockchain supporting decentralized apps and crypto projects.'
  },
  {
    id: 'ripple',
    symbol: 'XRP',
    name: 'XRP',
    pricePHP: 34, // ~$0.60 * 56.67
    change24h: -3.45,
    change7d: 15.23,
    marketCapPHP: 1800000000000, // $32B * 56.25
    volume24hPHP: 280000000000, // $5B * 56
    sparkline7d: mockSparklineData('up'),
    rank: 4,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Digital payment protocol for fast, low-cost international money transfers.'
  },
  {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    pricePHP: 22, // ~$0.39 * 56.41
    change24h: 1.89,
    change7d: -5.67,
    marketCapPHP: 770000000000, // $13.6B * 56.62
    volume24hPHP: 170000000000, // $3B * 56.67
    sparkline7d: mockSparklineData('down'),
    rank: 5,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Blockchain platform focused on sustainability and academic research.'
  },
  {
    id: 'dogecoin',
    symbol: 'DOGE',
    name: 'Dogecoin',
    pricePHP: 4.5, // ~$0.08 * 56.25
    change24h: 12.34,
    change7d: -8.45,
    marketCapPHP: 650000000000, // $11.5B * 56.52
    volume24hPHP: 140000000000, // $2.5B * 56
    sparkline7d: mockSparklineData('sideways'),
    rank: 6,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Popular meme-based cryptocurrency with strong community support.'
  },
  {
    id: 'binancecoin',
    symbol: 'BNB',
    name: 'BNB',
    pricePHP: 17000, // ~$300 * 56.67
    change24h: -0.89,
    change7d: 3.45,
    marketCapPHP: 2500000000000, // $44B * 56.82
    volume24hPHP: 200000000000, // $3.5B * 57.14
    sparkline7d: mockSparklineData('up'),
    rank: 7,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Native token of Binance exchange and BNB Smart Chain ecosystem.'
  },
  {
    id: 'avalanche-2',
    symbol: 'AVAX',
    name: 'Avalanche',
    pricePHP: 1700, // ~$30 * 56.67
    change24h: 6.78,
    change7d: -12.34,
    marketCapPHP: 680000000000, // $12B * 56.67
    volume24hPHP: 110000000000, // $2B * 55
    sparkline7d: mockSparklineData('down'),
    rank: 8,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Platform for decentralized applications and custom blockchain networks.'
  },
  {
    id: 'matic-network',
    symbol: 'MATIC',
    name: 'Polygon',
    pricePHP: 45, // ~$0.80 * 56.25
    change24h: -2.34,
    change7d: 9.87,
    marketCapPHP: 420000000000, // $7.4B * 56.76
    volume24hPHP: 85000000000, // $1.5B * 56.67
    sparkline7d: mockSparklineData('up'),
    rank: 9,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Ethereum scaling solution providing faster and cheaper transactions.'
  },
  {
    id: 'litecoin',
    symbol: 'LTC',
    name: 'Litecoin',
    pricePHP: 5100, // ~$90 * 56.67
    change24h: 0.45,
    change7d: -3.21,
    marketCapPHP: 380000000000, // $6.7B * 56.72
    volume24hPHP: 120000000000, // $2.1B * 57.14
    sparkline7d: mockSparklineData('sideways'),
    rank: 10,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Peer-to-peer cryptocurrency enabling fast, low-cost payments worldwide.'
  },
  {
    id: 'polkadot',
    symbol: 'DOT',
    name: 'Polkadot',
    pricePHP: 340, // ~$6 * 56.67
    change24h: 4.56,
    change7d: -6.78,
    marketCapPHP: 450000000000, // $8B * 56.25
    volume24hPHP: 95000000000, // $1.7B * 55.88
    sparkline7d: mockSparklineData('down'),
    rank: 11,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Multi-chain protocol enabling cross-blockchain transfers and communication.'
  },
  {
    id: 'bitcoin-cash',
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    pricePHP: 12000, // ~$210 * 57.14
    change24h: -4.23,
    change7d: 7.89,
    marketCapPHP: 240000000000, // $4.2B * 57.14
    volume24hPHP: 75000000000, // $1.3B * 57.69
    sparkline7d: mockSparklineData('up'),
    rank: 12,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Bitcoin fork focused on fast, reliable, and low-fee transactions.'
  }
];

export async function getTopCoinsPHP(limit: number = 12): Promise<Coin[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockCoins.slice(0, limit);
}

export async function getCoinDetailPHP(symbol: string): Promise<Coin | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockCoins.find(coin => coin.symbol.toLowerCase() === symbol.toLowerCase()) || null;
}

export async function getTickerData(): Promise<Coin[]> {
  // Return top 4 coins for ticker
  await new Promise(resolve => setTimeout(resolve, 50));
  return mockCoins.slice(0, 4);
}