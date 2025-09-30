import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import { ArrowLeft, Globe, ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

// Generate static params for the top cryptocurrencies
export async function generateStaticParams() {
  // Common cryptocurrency IDs that should be pre-generated
  const commonCoinIds = [
    'bitcoin',
    'ethereum', 
    'binancecoin',
    'cardano',
    'solana',
    'ripple',
    'polkadot',
    'avalanche-2',
    'matic-network',
    'chainlink',
    'litecoin',
    'dogecoin',
    'bitcoin-cash',
    'stellar',
    'vechain',
    'filecoin',
    'tron',
    'ethereum-classic',
    'monero',
    'tezos'
  ];

  return commonCoinIds.map((id) => ({
    id: id
  }));
}

interface CoinDetail {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
  };
  market_cap_rank: number;
  market_data: {
    current_price: {
      usd: number;
    };
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
  };
  description: {
    en: string;
  };
  links: {
    homepage: string[];
    blockchain_site: string[];
  };
  last_updated: string;
}

const formatPrice = (price: number): string => {
  if (price < 0.01) {
    return `$${price.toFixed(6)}`;
  } else if (price < 1) {
    return `$${price.toFixed(4)}`;
  } else {
    return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
};

const formatLargeNumber = (num: number): string => {
  if (num >= 1e12) {
    return `${(num / 1e12).toFixed(2)}T`;
  } else if (num >= 1e9) {
    return `${(num / 1e9).toFixed(2)}B`;
  } else if (num >= 1e6) {
    return `${(num / 1e6).toFixed(2)}M`;
  } else {
    return num.toLocaleString();
  }
};

const formatPercentage = (percentage: number): string => {
  return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(2)}%`;
};

const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>/g, '');
};

// Mock data for static generation
const getMockCoinData = (coinId: string): CoinDetail => {
  const mockData: Record<string, Partial<CoinDetail>> = {
    bitcoin: {
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
      market_cap_rank: 1,
      market_data: {
        current_price: { usd: 50000 },
        price_change_24h: 1200,
        price_change_percentage_24h: 2.45,
        price_change_percentage_7d: 8.12,
        price_change_percentage_30d: 15.67,
        market_cap: { usd: 1000000000000 },
        total_volume: { usd: 30000000000 },
        high_24h: { usd: 51000 },
        low_24h: { usd: 49000 },
        circulating_supply: 19000000,
        total_supply: 19000000,
        max_supply: 21000000
      },
      description: {
        en: 'Bitcoin is the world\'s first cryptocurrency, created in 2009 by an anonymous person or group known as Satoshi Nakamoto.'
      },
      links: {
        homepage: ['https://bitcoin.org'],
        blockchain_site: ['https://blockchair.com/bitcoin']
      }
    },
    ethereum: {
      id: 'ethereum',
      symbol: 'eth',
      name: 'Ethereum',
      market_cap_rank: 2,
      market_data: {
        current_price: { usd: 3200 },
        price_change_24h: -50,
        price_change_percentage_24h: -1.23,
        price_change_percentage_7d: 12.45,
        price_change_percentage_30d: 8.34,
        market_cap: { usd: 400000000000 },
        total_volume: { usd: 15000000000 },
        high_24h: { usd: 3250 },
        low_24h: { usd: 3150 },
        circulating_supply: 120000000,
        total_supply: 120000000,
        max_supply: 0
      },
      description: {
        en: 'Ethereum is a decentralized platform that runs smart contracts and serves as the foundation for thousands of decentralized applications.'
      },
      links: {
        homepage: ['https://ethereum.org'],
        blockchain_site: ['https://etherscan.io']
      }
    }
  };

  const defaultData: CoinDetail = {
    id: coinId,
    symbol: coinId.slice(0, 3).toUpperCase(),
    name: coinId.charAt(0).toUpperCase() + coinId.slice(1),
    image: {
      large: `https://via.placeholder.com/64x64/3B82F6/FFFFFF?text=${coinId.charAt(0).toUpperCase()}`
    },
    market_cap_rank: 999,
    market_data: {
      current_price: { usd: 1 },
      price_change_24h: 0,
      price_change_percentage_24h: 0,
      price_change_percentage_7d: 0,
      price_change_percentage_30d: 0,
      market_cap: { usd: 1000000 },
      total_volume: { usd: 100000 },
      high_24h: { usd: 1.1 },
      low_24h: { usd: 0.9 },
      circulating_supply: 1000000,
      total_supply: 1000000,
      max_supply: 1000000
    },
    description: {
      en: `${coinId.charAt(0).toUpperCase() + coinId.slice(1)} is a cryptocurrency.`
    },
    links: {
      homepage: ['#'],
      blockchain_site: ['#']
    },
    last_updated: new Date().toISOString()
  };

  return { ...defaultData, ...mockData[coinId] } as CoinDetail;
};

interface CoinDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CoinDetailPage({ params }: CoinDetailPageProps) {
  const { id } = await params;
  
  // For static export, use mock data
  const coin = getMockCoinData(id);
  
  if (!coin) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/prices">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Prices
          </Link>
        </Button>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Image
              src={coin.image.large}
              alt={coin.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold">{coin.name}</h1>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="uppercase">
                  {coin.symbol}
                </Badge>
                <Badge variant="outline">
                  Rank #{coin.market_cap_rank}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <Card className="mb-8 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold mb-2">
                  {formatPrice(coin.market_data.current_price.usd)}
                </div>
                <div className={cn(
                  'flex items-center space-x-2 text-lg font-medium',
                  coin.market_data.price_change_percentage_24h >= 0 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                )}>
                  {coin.market_data.price_change_percentage_24h >= 0 ? (
                    <TrendingUp className="h-5 w-5" />
                  ) : (
                    <TrendingDown className="h-5 w-5" />
                  )}
                  <span>{formatPercentage(coin.market_data.price_change_percentage_24h)}</span>
                  <span className="text-muted-foreground">
                    ({formatPrice(Math.abs(coin.market_data.price_change_24h))})
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">24h Range</div>
                <div className="text-sm">
                  {formatPrice(coin.market_data.low_24h.usd)} - {formatPrice(coin.market_data.high_24h.usd)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Market Cap</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold">
                ${formatLargeNumber(coin.market_data.market_cap.usd)}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">24h Volume</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold">
                ${formatLargeNumber(coin.market_data.total_volume.usd)}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Circulating Supply</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold">
                {formatLargeNumber(coin.market_data.circulating_supply)}
              </div>
              <div className="text-sm text-muted-foreground uppercase">
                {coin.symbol}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Supply</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold">
                {coin.market_data.total_supply ? formatLargeNumber(coin.market_data.total_supply) : 'N/A'}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Max Supply</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold">
                {coin.market_data.max_supply ? formatLargeNumber(coin.market_data.max_supply) : '∞'}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Price Changes</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">7d:</span>
                <span className={cn(
                  'text-sm font-medium',
                  coin.market_data.price_change_percentage_7d >= 0 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                )}>
                  {formatPercentage(coin.market_data.price_change_percentage_7d)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">30d:</span>
                <span className={cn(
                  'text-sm font-medium',
                  coin.market_data.price_change_percentage_30d >= 0 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                )}>
                  {formatPercentage(coin.market_data.price_change_percentage_30d)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Description */}
        {coin.description.en && (
          <Card className="mb-8 rounded-2xl">
            <CardHeader>
              <CardTitle>About {coin.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {stripHtml(coin.description.en).slice(0, 500)}...
              </p>
            </CardContent>
          </Card>
        )}

        {/* Links */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {coin.links.homepage[0] && coin.links.homepage[0] !== '#' && (
                <Button variant="outline" size="sm" asChild>
                  <a href={coin.links.homepage[0]} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 mr-2" />
                    Website
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </Button>
              )}
              {coin.links.blockchain_site.slice(0, 3).map((link, index) => (
                link && link !== '#' && (
                  <Button key={index} variant="outline" size="sm" asChild>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Explorer
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </a>
                  </Button>
                )
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <NewsletterFooter />
    </div>
  );
}