"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Activity, 
  RefreshCw,
  Globe,
  Zap,
  Target,
  AlertTriangle,
  Clock,
  Users,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  PieChart,
  LineChart,
  Calendar,
  Filter,
  Search,
  ExternalLink,
  Flame,
  Star,
  ChevronRight,
  Timer,
  Gauge
} from 'lucide-react';
import { formatPHP, formatLargePHP, formatPercentage, formatRelativeTime } from '@/lib/format';
import { useCryptoPrices } from '@/hooks/use-crypto-prices';
import { mockNewsPosts } from '@/lib/content.mock';
import { cn } from '@/lib/utils';

interface MarketIndicator {
  name: string;
  value: string;
  change: number;
  changePercent: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

interface SectorData {
  name: string;
  marketCap: number;
  change24h: number;
  dominance: number;
  topCoins: string[];
  color: string;
}

interface MarketNews {
  id: string;
  title: string;
  summary: string;
  impact: 'High' | 'Medium' | 'Low';
  timestamp: string;
  category: string;
  tickers: string[];
}

export function MarketOverviewContent() {
  const { data: cryptoPrices, loading: pricesLoading } = useCryptoPrices();
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'24h' | '7d' | '30d'>('24h');

  // Set lastUpdated only on client side to avoid hydration mismatch
  useEffect(() => {
    setLastUpdated(new Date());
  }, []);

  // Mock market indicators
  const marketIndicators: MarketIndicator[] = [
    {
      name: 'Total Market Cap',
      value: '₱142.5T',
      change: 340000000000,
      changePercent: 3.24,
      icon: DollarSign,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900'
    },
    {
      name: '24h Volume',
      value: '₱4.8T',
      change: 120000000000,
      changePercent: 2.56,
      icon: BarChart3,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900'
    },
    {
      name: 'Market Dominance',
      value: 'BTC 54.2%',
      change: 0.8,
      changePercent: 1.48,
      icon: PieChart,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900'
    },
    {
      name: 'Fear & Greed',
      value: '78 (Greed)',
      change: 5,
      changePercent: 6.85,
      icon: Gauge,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900'
    }
  ];

  // Mock sector performance data
  const sectorData: SectorData[] = [
    {
      name: 'Layer 1 Blockchains',
      marketCap: 85600000000000,
      change24h: 4.23,
      dominance: 68.2,
      topCoins: ['BTC', 'ETH', 'SOL', 'ADA'],
      color: 'text-blue-600'
    },
    {
      name: 'DeFi Protocols',
      marketCap: 12400000000000,
      change24h: 8.67,
      dominance: 9.8,
      topCoins: ['UNI', 'AAVE', 'COMP', 'MKR'],
      color: 'text-purple-600'
    },
    {
      name: 'Gaming & NFTs',
      marketCap: 8900000000000,
      change24h: 12.45,
      dominance: 7.1,
      topCoins: ['AXS', 'SAND', 'MANA', 'ENJ'],
      color: 'text-pink-600'
    },
    {
      name: 'Infrastructure',
      marketCap: 6700000000000,
      change24h: 5.89,
      dominance: 5.3,
      topCoins: ['LINK', 'DOT', 'ATOM', 'FIL'],
      color: 'text-green-600'
    },
    {
      name: 'Meme Coins',
      marketCap: 4200000000000,
      change24h: -2.34,
      dominance: 3.3,
      topCoins: ['DOGE', 'SHIB', 'PEPE', 'FLOKI'],
      color: 'text-yellow-600'
    },
    {
      name: 'Stablecoins',
      marketCap: 8100000000000,
      change24h: 0.12,
      dominance: 6.4,
      topCoins: ['USDT', 'USDC', 'BUSD', 'DAI'],
      color: 'text-gray-600'
    }
  ];

  // Mock market news
  const marketNews: MarketNews[] = [
    {
      id: '1',
      title: 'Bitcoin ETFs See Record $2.1B Inflows This Week',
      summary: 'Institutional demand drives unprecedented capital flows into Bitcoin exchange-traded funds.',
      impact: 'High',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      category: 'Institutional',
      tickers: ['BTC']
    },
    {
      id: '2',
      title: 'Ethereum Gas Fees Drop 60% Following Network Upgrade',
      summary: 'Latest protocol improvements significantly reduce transaction costs for users.',
      impact: 'Medium',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      category: 'Technology',
      tickers: ['ETH']
    },
    {
      id: '3',
      title: 'Philippine Crypto Trading Volume Hits Monthly Record',
      summary: 'Local exchanges report 340% increase in trading activity amid regulatory clarity.',
      impact: 'High',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      category: 'Regional',
      tickers: ['BTC', 'ETH']
    },
    {
      id: '4',
      title: 'Major DeFi Protocol Announces $50M Security Fund',
      summary: 'Leading protocol establishes insurance fund to protect user deposits.',
      impact: 'Medium',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      category: 'Security',
      tickers: ['UNI', 'AAVE']
    }
  ];

  // Get top gainers and losers from crypto prices
  const topGainers = cryptoPrices
    .filter(coin => coin.changePercent24h > 0)
    .sort((a, b) => b.changePercent24h - a.changePercent24h)
    .slice(0, 5);

  const topLosers = cryptoPrices
    .filter(coin => coin.changePercent24h < 0)
    .sort((a, b) => a.changePercent24h - b.changePercent24h)
    .slice(0, 5);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setLastUpdated(new Date());
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const formatMarketCap = (value: number): string => {
    if (value >= 1e12) {
      return `₱${(value / 1e12).toFixed(1)}T`;
    } else if (value >= 1e9) {
      return `₱${(value / 1e9).toFixed(1)}B`;
    } else {
      return `₱${(value / 1e6).toFixed(1)}M`;
    }
  };

  return (
    <div className="space-y-8">
      {/* Last Updated */}
      <div className="flex items-center justify-center space-x-2 text-sm text-[var(--color-text-secondary)]">
        <Clock className="h-4 w-4" />
        <span>
          Last updated: {lastUpdated ? lastUpdated.toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila' }) : 'Loading...'} Manila Time
        </span>
      </div>

      {/* Market Indicators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketIndicators.map((indicator, index) => (
          <Card 
            key={indicator.name}
            className={cn(
              "rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
              indicator.bgColor
            )}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={cn("p-3 rounded-xl bg-white/50 dark:bg-black/20", indicator.color)}>
                  <indicator.icon className="h-6 w-6" />
                </div>
                <Badge 
                  variant="secondary"
                  className={cn(
                    "text-xs font-medium",
                    indicator.changePercent >= 0 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                  )}
                >
                  {indicator.changePercent >= 0 ? '+' : ''}{indicator.changePercent.toFixed(2)}%
                </Badge>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[var(--color-text-secondary)]">
                  {indicator.name}
                </h3>
                <div className="text-2xl font-bold text-[var(--color-text-primary)]">
                  {indicator.value}
                </div>
                <div className={cn(
                  'flex items-center space-x-1 text-sm font-medium',
                  indicator.changePercent >= 0 
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                )}>
                  {indicator.changePercent >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span>24h change</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Top Gainers and Losers */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Top Gainers */}
        <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-green-200 dark:border-green-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Top Gainers (24h)</span>
              <Badge className="bg-green-500 text-white">
                {topGainers.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pricesLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg animate-pulse">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-200 dark:bg-green-800 rounded-full" />
                      <div className="space-y-1">
                        <div className="w-16 h-4 bg-green-200 dark:bg-green-800 rounded" />
                        <div className="w-12 h-3 bg-green-200 dark:bg-green-800 rounded" />
                      </div>
                    </div>
                    <div className="w-16 h-4 bg-green-200 dark:bg-green-800 rounded" />
                  </div>
                ))}
              </div>
            ) : (
              topGainers.map((coin, index) => (
                <div key={coin.symbol} className="flex justify-between items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg hover:bg-white/80 dark:hover:bg-black/40 transition-colors group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-green-900 dark:text-green-100 group-hover:text-[var(--color-primary-brand)] transition-colors">
                        {coin.name}
                      </div>
                      <div className="text-xs text-green-700 dark:text-green-300 font-mono">
                        {coin.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-900 dark:text-green-100">
                      {formatPHP(coin.price)}
                    </div>
                    <div className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center space-x-1">
                      <ArrowUpRight className="h-3 w-3" />
                      <span>+{coin.changePercent24h.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Top Losers */}
        <Card className="rounded-2xl bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900 border-red-200 dark:border-red-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-red-900 dark:text-red-100 font-[var(--font-display)] flex items-center space-x-2">
              <TrendingDown className="h-5 w-5" />
              <span>Top Losers (24h)</span>
              <Badge className="bg-red-500 text-white">
                {topLosers.length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {pricesLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg animate-pulse">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-200 dark:bg-red-800 rounded-full" />
                      <div className="space-y-1">
                        <div className="w-16 h-4 bg-red-200 dark:bg-red-800 rounded" />
                        <div className="w-12 h-3 bg-red-200 dark:bg-red-800 rounded" />
                      </div>
                    </div>
                    <div className="w-16 h-4 bg-red-200 dark:bg-red-800 rounded" />
                  </div>
                ))}
              </div>
            ) : (
              topLosers.map((coin, index) => (
                <div key={coin.symbol} className="flex justify-between items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg hover:bg-white/80 dark:hover:bg-black/40 transition-colors group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-red-900 dark:text-red-100 group-hover:text-[var(--color-primary-brand)] transition-colors">
                        {coin.name}
                      </div>
                      <div className="text-xs text-red-700 dark:text-red-300 font-mono">
                        {coin.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-red-900 dark:text-red-100">
                      {formatPHP(coin.price)}
                    </div>
                    <div className="text-sm font-medium text-red-600 dark:text-red-400 flex items-center space-x-1">
                      <ArrowDownRight className="h-3 w-3" />
                      <span>{coin.changePercent24h.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>

      {/* Sector Performance */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <PieChart className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Sector Performance</span>
            <Badge variant="secondary" className="rounded-xl">
              6 sectors
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {sectorData.map((sector, index) => (
              <div key={sector.name} className="flex items-center justify-between p-4 bg-[var(--color-muted-subtle)] rounded-xl hover:bg-[var(--color-muted-subtle)]/80 transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary-brand)] to-purple-600 text-white rounded-xl flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors">
                      {sector.name}
                    </h4>
                    <div className="flex items-center space-x-3 text-sm text-[var(--color-text-secondary)]">
                      <span>Market Cap: {formatMarketCap(sector.marketCap)}</span>
                      <span>•</span>
                      <span>Dominance: {sector.dominance}%</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <span className="text-xs text-[var(--color-text-secondary)]">Top coins:</span>
                      {sector.topCoins.map(coin => (
                        <Badge key={coin} variant="outline" className="text-xs font-mono">
                          {coin}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={cn(
                    'text-lg font-bold flex items-center space-x-1',
                    sector.change24h >= 0 
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  )}>
                    {sector.change24h >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span>{sector.change24h >= 0 ? '+' : ''}{sector.change24h.toFixed(2)}%</span>
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">24h change</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market News & Analysis */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <Flame className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Market-Moving News</span>
            <Badge variant="secondary" className="rounded-xl">
              Live Updates
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {marketNews.map((news, index) => (
            <div key={news.id} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group">
              <div className={cn(
                "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                news.impact === 'High' ? 'bg-red-500 animate-pulse' : 
                news.impact === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
              )} />
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-xs",
                      news.impact === 'High' ? 'border-red-500 text-red-700 dark:text-red-300' :
                      news.impact === 'Medium' ? 'border-yellow-500 text-yellow-700 dark:text-yellow-300' :
                      'border-green-500 text-green-700 dark:text-green-300'
                    )}
                  >
                    {news.impact} Impact
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {news.category}
                  </Badge>
                  <div className="flex space-x-1">
                    {news.tickers.map(ticker => (
                      <Badge key={ticker} variant="outline" className="text-xs font-mono">
                        {ticker}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <h4 className="font-bold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-primary-brand)] transition-colors">
                  {news.title}
                </h4>
                
                <p className="text-sm text-[var(--color-text-secondary)] mb-2 leading-relaxed">
                  {news.summary}
                </p>
                
                <div className="flex items-center space-x-3 text-xs text-[var(--color-text-secondary)]">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatRelativeTime(news.timestamp)}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-[var(--color-primary-brand)] hover:text-[var(--color-primary-brand)]/80 p-0 h-auto"
                  >
                    Read More
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-4 border-t border-[var(--color-muted-subtle)]">
            <Button 
              variant="outline" 
              className="w-full rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/news" className="flex items-center justify-center space-x-2">
                <span>View All Market News</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Market Analysis & Insights */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Trading Volume Analysis */}
        <Card className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900 border-indigo-200 dark:border-indigo-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-indigo-900 dark:text-indigo-100 font-[var(--font-display)] flex items-center space-x-2">
              <BarChart3 className="h-5 w-5" />
              <span>Volume Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-1">
                ₱4.8T
              </div>
              <div className="text-sm text-indigo-700 dark:text-indigo-300">24h Global Volume</div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-800 dark:text-indigo-200">Spot Trading</span>
                <span className="font-semibold text-indigo-900 dark:text-indigo-100">68%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-800 dark:text-indigo-200">Derivatives</span>
                <span className="font-semibold text-indigo-900 dark:text-indigo-100">32%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-800 dark:text-indigo-200">Philippines</span>
                <span className="font-semibold text-indigo-900 dark:text-indigo-100">2.4%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Sentiment */}
        <Card className="rounded-2xl bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950 dark:to-amber-900 border-yellow-200 dark:border-yellow-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-yellow-900 dark:text-yellow-100 font-[var(--font-display)] flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Sentiment</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-900 dark:text-yellow-100 mb-1">
                78
              </div>
              <div className="text-sm text-yellow-700 dark:text-yellow-300">Fear & Greed Index</div>
              <Badge className="bg-yellow-500 text-white mt-2">
                Extreme Greed
              </Badge>
            </div>
            
            <div className="w-full bg-yellow-200 dark:bg-yellow-800 rounded-full h-2">
              <div className="bg-yellow-600 dark:bg-yellow-400 h-2 rounded-full transition-all duration-500" style={{ width: '78%' }}></div>
            </div>
            
            <div className="text-center">
              <div className="text-xs text-yellow-700 dark:text-yellow-300">
                Based on volatility, volume, social media, and surveys
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Traders */}
        <Card className="rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-950 dark:to-cyan-900 border-teal-200 dark:border-teal-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-teal-900 dark:text-teal-100 font-[var(--font-display)] flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Active Traders</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-900 dark:text-teal-100 mb-1">
                2.4M
              </div>
              <div className="text-sm text-teal-700 dark:text-teal-300">24h Active Addresses</div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-teal-800 dark:text-teal-200">New Users</span>
                <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                  <TrendingUp className="h-3 w-3" />
                  <span className="font-semibold">+12.4%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-teal-800 dark:text-teal-200">Philippines</span>
                <span className="font-semibold text-teal-900 dark:text-teal-100">89.2K</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-teal-800 dark:text-teal-200">Avg Session</span>
                <span className="font-semibold text-teal-900 dark:text-teal-100">8.4 min</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeframe Selector */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
            <Timer className="h-5 w-5 text-[var(--color-primary-brand)]" />
            <span>Market Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">Timeframe:</span>
            <div className="flex space-x-2">
              {(['24h', '7d', '30d'] as const).map((timeframe) => (
                <Button
                  key={timeframe}
                  variant={selectedTimeframe === timeframe ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className="rounded-xl"
                >
                  {timeframe}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-[var(--color-muted-subtle)] rounded-xl">
              <div className="text-xl font-bold text-[var(--color-text-primary)]">
                +3.24%
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Market Cap Change</div>
            </div>

            <div className="text-center p-4 bg-[var(--color-muted-subtle)] rounded-xl">
              <div className="text-xl font-bold text-[var(--color-text-primary)]">
                +2.56%
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Volume Change</div>
            </div>

            <div className="text-center p-4 bg-[var(--color-muted-subtle)] rounded-xl">
              <div className="text-xl font-bold text-[var(--color-text-primary)]">
                1,247
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Active Coins</div>
            </div>

            <div className="text-center p-4 bg-[var(--color-muted-subtle)] rounded-xl">
              <div className="text-xl font-bold text-[var(--color-text-primary)]">
                89
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">New Listings</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <Target className="h-12 w-12 mx-auto text-[var(--color-primary-brand)]" />
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Explore Market Data
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Dive deeper into cryptocurrency markets with our comprehensive tools and analysis.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/prices">
                Live Prices
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/news">
                Market News
              </Link>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <Link href="/guides">
                Trading Guides
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Market Status Indicator */}
      <div className="fixed bottom-6 right-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[var(--color-text-secondary)]">
                Markets Open • Live Data
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}