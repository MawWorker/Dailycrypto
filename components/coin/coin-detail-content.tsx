"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { ArrowLeft, TrendingUp, TrendingDown, BarChart3, DollarSign, Users, Globe, ExternalLink, Star, Crown, Zap, Shield, Clock, Calendar, Eye, Heart, MessageCircle, Share2, Bookmark, RefreshCw, AlertTriangle, Info, Target, Activity, PieChart, LineChart, Gauge, Timer, Building2, Smartphone, Award, Flame, Sparkles, ChevronRight, ChevronDown, ChevronUp, Copy, Check, Plus, Minus, Calculator, Percent, TrendingUp as TrendingFlat, Bell } from 'lucide-react';
import { formatPHP, formatLargePHP, formatPercentage, formatRelativeTime } from '@/lib/format';
import { cn } from '@/lib/utils';

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_30d: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
}

interface CoinNews {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  category: string;
  impact: 'High' | 'Medium' | 'Low';
  sentiment: 'Positive' | 'Negative' | 'Neutral';
}

interface CoinDetailContentProps {
  symbol: string;
}

// Mock coin data generator
const generateCoinData = (symbol: string): CoinData => {
  const coinMap: Record<string, Partial<CoinData>> = {
    btc: {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      current_price: 2850000,
      market_cap: 55000000000000,
      market_cap_rank: 1,
      price_change_24h: 45600,
      price_change_percentage_24h: 2.45,
      price_change_percentage_7d: 8.12,
      price_change_percentage_30d: 15.67,
      total_volume: 1500000000000,
      high_24h: 2890000,
      low_24h: 2780000,
      circulating_supply: 19750000,
      total_supply: 19750000,
      max_supply: 21000000,
      ath: 3500000,
      ath_change_percentage: -18.57,
      ath_date: '2021-11-10T14:24:11.849Z',
      atl: 2850,
      atl_change_percentage: 99900.35,
      atl_date: '2013-07-06T00:00:00.000Z'
    },
    eth: {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      current_price: 180000,
      market_cap: 21600000000000,
      market_cap_rank: 2,
      price_change_24h: -3420,
      price_change_percentage_24h: -1.23,
      price_change_percentage_7d: 12.45,
      price_change_percentage_30d: 8.34,
      total_volume: 800000000000,
      high_24h: 185000,
      low_24h: 175000,
      circulating_supply: 120000000,
      total_supply: 120000000,
      max_supply: null,
      ath: 280000,
      ath_change_percentage: -35.71,
      ath_date: '2021-11-10T14:24:19.604Z',
      atl: 2280,
      atl_change_percentage: 7794.74,
      atl_date: '2015-10-20T00:00:00.000Z'
    }
  };

  const defaultData: CoinData = {
    id: symbol,
    symbol: symbol.toUpperCase(),
    name: symbol.charAt(0).toUpperCase() + symbol.slice(1),
    image: `https://via.placeholder.com/64x64/3B82F6/FFFFFF?text=${symbol.charAt(0).toUpperCase()}`,
    current_price: Math.random() * 100000 + 1000,
    market_cap: Math.random() * 1000000000000 + 100000000,
    market_cap_rank: Math.floor(Math.random() * 100) + 1,
    price_change_24h: (Math.random() - 0.5) * 10000,
    price_change_percentage_24h: (Math.random() - 0.5) * 20,
    price_change_percentage_7d: (Math.random() - 0.5) * 30,
    price_change_percentage_30d: (Math.random() - 0.5) * 50,
    total_volume: Math.random() * 100000000000 + 10000000,
    high_24h: 0,
    low_24h: 0,
    circulating_supply: Math.random() * 1000000000 + 1000000,
    total_supply: Math.random() * 1000000000 + 1000000,
    max_supply: Math.random() > 0.5 ? Math.random() * 1000000000 + 1000000 : null,
    ath: 0,
    ath_change_percentage: (Math.random() - 1) * 80,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 0,
    atl_change_percentage: Math.random() * 10000 + 100,
    atl_date: '2020-03-13T02:18:00.000Z',
    last_updated: new Date().toISOString()
  };

  const coinData = { ...defaultData, ...coinMap[symbol.toLowerCase()] };
  
  // Calculate derived values
  coinData.high_24h = coinData.current_price * 1.05;
  coinData.low_24h = coinData.current_price * 0.95;
  coinData.ath = coinData.current_price * 1.5;
  coinData.atl = coinData.current_price * 0.01;

  return coinData;
};

// Generate mock news for the coin
const generateCoinNews = (symbol: string): CoinNews[] => {
  const newsTemplates = [
    {
      title: `${symbol.toUpperCase()} Breaks Key Resistance Level in Strong Rally`,
      summary: `Technical analysis shows ${symbol.toUpperCase()} breaking through major resistance, signaling potential continued upward momentum.`,
      category: 'Technical Analysis',
      impact: 'Medium' as const,
      sentiment: 'Positive' as const
    },
    {
      title: `Major Exchange Lists ${symbol.toUpperCase()} with PHP Trading Pairs`,
      summary: `Philippine cryptocurrency exchange adds ${symbol.toUpperCase()} trading with direct peso pairs, improving accessibility for local investors.`,
      category: 'Exchange Listing',
      impact: 'High' as const,
      sentiment: 'Positive' as const
    },
    {
      title: `${symbol.toUpperCase()} Network Upgrade Improves Transaction Speed`,
      summary: `Latest protocol improvements reduce transaction times and fees, enhancing user experience and network efficiency.`,
      category: 'Technology',
      impact: 'Medium' as const,
      sentiment: 'Positive' as const
    },
    {
      title: `Institutional Interest in ${symbol.toUpperCase()} Grows Among Filipino Investors`,
      summary: `Local investment firms and family offices show increasing interest in ${symbol.toUpperCase()} as digital asset allocation strategy.`,
      category: 'Institutional',
      impact: 'High' as const,
      sentiment: 'Positive' as const
    }
  ];

  return newsTemplates.map((template, index) => ({
    id: `${symbol}-news-${index}`,
    ...template,
    publishedAt: new Date(Date.now() - (index + 1) * 3600000).toISOString()
  }));
};

export function CoinDetailContent({ symbol }: CoinDetailContentProps) {
  const [coinData, setCoinData] = useState<CoinData | null>(null);
  const [coinNews, setCoinNews] = useState<CoinNews[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'24h' | '7d' | '30d'>('24h');
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  useEffect(() => {
    const fetchCoinData = async () => {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const data = generateCoinData(symbol);
      const news = generateCoinNews(symbol);
      
      setCoinData(data);
      setCoinNews(news);
      setLastUpdated(new Date());
      setIsLoading(false);
    };

    fetchCoinData();
  }, [symbol]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    const data = generateCoinData(symbol);
    setCoinData(data);
    setLastUpdated(new Date());
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${symbol.toUpperCase()} Contract Address`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600 dark:text-green-400';
    if (change < 0) return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return TrendingUp;
    if (change < 0) return TrendingDown;
    return TrendingFlat;
  };

  const formatSupply = (supply: number | null): string => {
    if (!supply) return 'N/A';
    if (supply >= 1e9) return `${(supply / 1e9).toFixed(2)}B`;
    if (supply >= 1e6) return `${(supply / 1e6).toFixed(2)}M`;
    if (supply >= 1e3) return `${(supply / 1e3).toFixed(2)}K`;
    return supply.toLocaleString();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--color-background-site)]">
        <AnimatedIndicatorNavbar />
        <MarketTicker />
        
        <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
          <div className="space-y-8">
            {/* Loading Header */}
            <div className="flex items-center space-x-4 animate-pulse">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
              <div className="space-y-2">
                <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
              </div>
            </div>

            {/* Loading Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="rounded-2xl animate-pulse">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                      <div className="w-32 h-8 bg-gray-200 dark:bg-gray-700 rounded" />
                      <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!coinData) {
    return (
      <div className="min-h-screen bg-[var(--color-background-site)]">
        <AnimatedIndicatorNavbar />
        <MarketTicker />
        
        <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
          <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <AlertTriangle className="h-16 w-16 mx-auto text-red-500" />
              <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
                Cryptocurrency Not Found
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)]">
                The cryptocurrency "{symbol.toUpperCase()}" could not be found or is not supported.
              </p>
              <Button asChild className="rounded-xl">
                <Link href="/prices">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Prices
                </Link>
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  const ChangeIcon = getChangeIcon(coinData.price_change_percentage_24h);

  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        {/* Back Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" className="rounded-xl" asChild>
            <Link href="/prices">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Prices
            </Link>
          </Button>
          
          <div className="flex items-center space-x-3">
            <Button 
              onClick={handleRefresh}
              disabled={isRefreshing}
              variant="outline"
              size="sm"
              className="rounded-xl"
            >
              <RefreshCw className={cn("h-4 w-4 mr-2", isRefreshing && "animate-spin")} />
              Refresh
            </Button>
            
            <Button 
              onClick={toggleFavorite}
              variant="outline"
              size="sm"
              className={cn(
                "rounded-xl",
                isFavorite ? "bg-yellow-100 border-yellow-300 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300" : ""
              )}
            >
              <Star className={cn("h-4 w-4 mr-2", isFavorite && "fill-current")} />
              {isFavorite ? 'Favorited' : 'Add to Favorites'}
            </Button>
          </div>
        </div>

        {/* Coin Header */}
        <Card className="rounded-3xl bg-gradient-to-r from-[var(--color-surface)] to-[var(--color-muted-subtle)] border border-[var(--color-muted-subtle)] shadow-2xl mb-8 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Coin Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-[var(--color-primary-brand)] rounded-2xl flex items-center justify-center shadow-2xl">
                      <span className="text-white font-bold text-2xl">
                        {coinData.symbol.charAt(0)}
                      </span>
                    </div>
                    {coinData.market_cap_rank <= 10 && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                        <Crown className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h1 className="text-4xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                        {coinData.name}
                      </h1>
                      <Badge className="bg-[var(--color-primary-brand)] text-white text-lg px-3 py-1">
                        {coinData.symbol}
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Rank #{coinData.market_cap_rank}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-[var(--color-text-secondary)]">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Updated: {lastUpdated?.toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>24.7K views today</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-4">
                    <div className="text-5xl font-bold text-[var(--color-text-primary)]">
                      {formatPHP(coinData.current_price)}
                    </div>
                    <div className={cn(
                      'flex items-center space-x-2 text-2xl font-bold',
                      getChangeColor(coinData.price_change_percentage_24h)
                    )}>
                      <ChangeIcon className="h-6 w-6" />
                      <span>
                        {coinData.price_change_percentage_24h >= 0 ? '+' : ''}
                        {coinData.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-lg">
                    <div className={cn('font-medium', getChangeColor(coinData.price_change_24h))}>
                      {coinData.price_change_24h >= 0 ? '+' : ''}
                      {formatPHP(Math.abs(coinData.price_change_24h))} (24h)
                    </div>
                    <div className="text-[var(--color-text-secondary)]">
                      24h Range: {formatPHP(coinData.low_24h)} - {formatPHP(coinData.high_24h)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button className="rounded-xl bg-green-600 hover:bg-green-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Buy {coinData.symbol}
                  </Button>
                  <Button variant="outline" className="rounded-xl">
                    <Minus className="h-4 w-4 mr-2" />
                    Sell {coinData.symbol}
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="rounded-xl" onClick={handleCopyAddress}>
                    {copiedAddress ? (
                      <>
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Address
                      </>
                    )}
                  </Button>
                  <Button variant="outline" className="rounded-xl">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>

                <Button variant="outline" className="w-full rounded-xl">
                  <Calculator className="h-4 w-4 mr-2" />
                  Price Calculator
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeframe Selector */}
        <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <LineChart className="h-5 w-5 text-[var(--color-primary-brand)]" />
                <span className="text-lg font-semibold text-[var(--color-text-primary)]">Price Performance</span>
              </div>
              
              <div className="flex space-x-2">
                {(['24h', '7d', '30d'] as const).map((timeframe) => (
                  <Button
                    key={timeframe}
                    variant={selectedTimeframe === timeframe ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={cn(
                      "rounded-xl transition-all duration-200",
                      selectedTimeframe === timeframe 
                        ? "bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 text-white shadow-lg scale-105" 
                        : "hover:scale-105"
                    )}
                  >
                    {timeframe}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-sm text-[var(--color-text-secondary)] mb-1">24h Change</div>
                <div className={cn('text-xl font-bold', getChangeColor(coinData.price_change_percentage_24h))}>
                  {formatPercentage(coinData.price_change_percentage_24h)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-[var(--color-text-secondary)] mb-1">7d Change</div>
                <div className={cn('text-xl font-bold', getChangeColor(coinData.price_change_percentage_7d))}>
                  {formatPercentage(coinData.price_change_percentage_7d)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-[var(--color-text-secondary)] mb-1">30d Change</div>
                <div className={cn('text-xl font-bold', getChangeColor(coinData.price_change_percentage_30d))}>
                  {formatPercentage(coinData.price_change_percentage_30d)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Stats and Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Market Statistics */}
            <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
                  <BarChart3 className="h-6 w-6 text-[var(--color-primary-brand)]" />
                  <span>Market Statistics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl">
                    <DollarSign className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
                    <div className="text-sm text-blue-700 dark:text-blue-300 mb-1">Market Cap</div>
                    <div className="text-lg font-bold text-blue-900 dark:text-blue-100">
                      {formatLargePHP(coinData.market_cap)}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2 text-green-600 dark:text-green-400" />
                    <div className="text-sm text-green-700 dark:text-green-300 mb-1">24h Volume</div>
                    <div className="text-lg font-bold text-green-900 dark:text-green-100">
                      {formatLargePHP(coinData.total_volume)}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl">
                    <Users className="h-8 w-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
                    <div className="text-sm text-purple-700 dark:text-purple-300 mb-1">Circulating</div>
                    <div className="text-lg font-bold text-purple-900 dark:text-purple-100">
                      {formatSupply(coinData.circulating_supply)}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-xl">
                    <Target className="h-8 w-8 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
                    <div className="text-sm text-orange-700 dark:text-orange-300 mb-1">Max Supply</div>
                    <div className="text-lg font-bold text-orange-900 dark:text-orange-100">
                      {coinData.max_supply ? formatSupply(coinData.max_supply) : '∞'}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Levels */}
            <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
                  <Activity className="h-6 w-6 text-[var(--color-primary-brand)]" />
                  <span>Price Levels & History</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* All-Time High */}
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 rounded-2xl border border-green-200 dark:border-green-800">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-900 dark:text-green-100">All-Time High</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          {new Date(coinData.ath_date).toLocaleDateString('en-PH')}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-green-900 dark:text-green-100">
                        {formatPHP(coinData.ath)}
                      </div>
                      <div className={cn('text-sm font-medium', getChangeColor(coinData.ath_change_percentage))}>
                        {formatPercentage(coinData.ath_change_percentage)} from ATH
                      </div>
                    </div>
                  </div>

                  {/* All-Time Low */}
                  <div className="p-6 bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900 rounded-2xl border border-red-200 dark:border-red-800">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingDown className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-red-900 dark:text-red-100">All-Time Low</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          {new Date(coinData.atl_date).toLocaleDateString('en-PH')}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-red-900 dark:text-red-100">
                        {formatPHP(coinData.atl)}
                      </div>
                      <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        +{formatPercentage(coinData.atl_change_percentage)} from ATL
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supply Information */}
            <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
                  <PieChart className="h-6 w-6 text-[var(--color-primary-brand)]" />
                  <span>Supply Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-[var(--color-muted-subtle)] rounded-xl">
                    <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                      {formatSupply(coinData.circulating_supply)}
                    </div>
                    <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                      Circulating Supply
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">
                      Currently in circulation
                    </div>
                  </div>

                  <div className="text-center p-6 bg-[var(--color-muted-subtle)] rounded-xl">
                    <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                      {formatSupply(coinData.total_supply)}
                    </div>
                    <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                      Total Supply
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">
                      Total coins created
                    </div>
                  </div>

                  <div className="text-center p-6 bg-[var(--color-muted-subtle)] rounded-xl">
                    <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                      {coinData.max_supply ? formatSupply(coinData.max_supply) : '∞'}
                    </div>
                    <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-1">
                      Max Supply
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">
                      {coinData.max_supply ? 'Maximum possible' : 'No limit set'}
                    </div>
                  </div>
                </div>

                {/* Supply Progress Bar */}
                {coinData.max_supply && (
                  <div className="mt-6 p-4 bg-[var(--color-muted-subtle)] rounded-xl">
                    <div className="flex justify-between text-sm text-[var(--color-text-secondary)] mb-2">
                      <span>Supply Progress</span>
                      <span>{((coinData.circulating_supply / coinData.max_supply) * 100).toFixed(1)}% mined</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(coinData.circulating_supply / coinData.max_supply) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
                  <Info className="h-6 w-6 text-[var(--color-primary-brand)]" />
                  <span>About {coinData.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {coinData.symbol === 'BTC' 
                      ? "Bitcoin is the world's first cryptocurrency, created in 2009 by an anonymous person or group known as Satoshi Nakamoto. It operates on a decentralized network of computers and uses blockchain technology to enable peer-to-peer transactions without the need for intermediaries like banks."
                      : coinData.symbol === 'ETH'
                      ? "Ethereum is a decentralized platform that runs smart contracts and serves as the foundation for thousands of decentralized applications (DApps). Created by Vitalik Buterin in 2015, Ethereum introduced the concept of programmable money and has become the backbone of the DeFi ecosystem."
                      : `${coinData.name} is a cryptocurrency that operates on blockchain technology, providing users with a decentralized digital asset for various use cases including payments, smart contracts, and decentralized applications.`
                    }
                  </p>
                  
                  {!showFullDescription && (
                    <Button 
                      variant="ghost" 
                      onClick={() => setShowFullDescription(true)}
                      className="text-[var(--color-primary-brand)] hover:text-[var(--color-primary-brand)]/80 p-0"
                    >
                      Read more
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  )}

                  {showFullDescription && (
                    <div className="space-y-4">
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {coinData.symbol === 'BTC' 
                          ? "Bitcoin's revolutionary design eliminates the need for central authorities, making it resistant to censorship and inflation. Its limited supply of 21 million coins creates digital scarcity, often leading to comparisons with gold as a store of value."
                          : coinData.symbol === 'ETH'
                          ? "Ethereum's virtual machine (EVM) allows developers to create complex applications ranging from decentralized exchanges to NFT marketplaces. The network transitioned to Proof of Stake in 2022, significantly reducing its energy consumption while maintaining security."
                          : `${coinData.name} continues to evolve with regular updates and improvements to its protocol, aiming to provide better scalability, security, and user experience for its growing community of users and developers.`
                        }
                      </p>
                      <Button 
                        variant="ghost" 
                        onClick={() => setShowFullDescription(false)}
                        className="text-[var(--color-primary-brand)] hover:text-[var(--color-primary-brand)]/80 p-0"
                      >
                        Show less
                        <ChevronUp className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Related News */}
            <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
                  <Flame className="h-6 w-6 text-[var(--color-primary-brand)]" />
                  <span>{coinData.symbol} News & Updates</span>
                  <Badge variant="secondary" className="rounded-xl">
                    {coinNews.length} articles
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {coinNews.map((news, index) => (
                    <div key={news.id} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group cursor-pointer">
                      <div className={cn(
                        "w-3 h-3 rounded-full mt-2 flex-shrink-0",
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
                          <Badge 
                            className={cn(
                              "text-xs",
                              news.sentiment === 'Positive' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                              news.sentiment === 'Negative' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                              'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
                            )}
                          >
                            {news.sentiment}
                          </Badge>
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
                            <span>{formatRelativeTime(news.publishedAt)}</span>
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
                      <Link href={`/search?q=${coinData.symbol}`}>
                        View All {coinData.symbol} News
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="rounded-2xl bg-gradient-to-br from-[var(--color-primary-brand)]/5 to-purple-500/5 border border-[var(--color-primary-brand)]/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
                  <Gauge className="h-5 w-5 text-[var(--color-primary-brand)]" />
                  <span>Quick Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--color-text-secondary)]">Market Rank</span>
                    <div className="flex items-center space-x-1">
                      {coinData.market_cap_rank <= 10 && <Crown className="h-4 w-4 text-yellow-500" />}
                      <span className="font-bold text-[var(--color-text-primary)]">#{coinData.market_cap_rank}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--color-text-secondary)]">Market Dominance</span>
                    <span className="font-bold text-[var(--color-text-primary)]">
                      {coinData.symbol === 'BTC' ? '54.2%' : coinData.symbol === 'ETH' ? '17.8%' : '2.1%'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--color-text-secondary)]">Volume/Market Cap</span>
                    <span className="font-bold text-[var(--color-text-primary)]">
                      {((coinData.total_volume / coinData.market_cap) * 100).toFixed(2)}%
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--color-text-secondary)]">Fully Diluted Valuation</span>
                    <span className="font-bold text-[var(--color-text-primary)]">
                      {coinData.max_supply 
                        ? formatLargePHP(coinData.current_price * coinData.max_supply)
                        : 'N/A'
                      }
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Alerts */}
            <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-[var(--color-primary-brand)]" />
                  <span>Price Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Get notified when {coinData.symbol} reaches your target price
                </p>
                
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Target price"
                      className="flex-1 px-3 py-2 text-sm bg-[var(--color-background-site)] border border-[var(--color-muted-subtle)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-brand)] focus:border-transparent"
                    />
                    <Button size="sm" className="rounded-xl">
                      Set Alert
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="rounded-xl text-xs">
                      +10% Alert
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl text-xs">
                      -10% Alert
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Sentiment */}
            <Card className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 border border-purple-200 dark:border-purple-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Social Sentiment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-1">
                    78%
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300">Bullish Sentiment</div>
                </div>
                
                <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                  <div className="bg-purple-600 dark:bg-purple-400 h-2 rounded-full transition-all duration-500" style={{ width: '78%' }}></div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">67%</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">Bullish</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-600 dark:text-gray-400">22%</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">Neutral</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-red-600 dark:text-red-400">11%</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">Bearish</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Coins */}
            <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-[var(--color-primary-brand)]" />
                  <span>Related Coins</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['BTC', 'ETH', 'BNB', 'ADA', 'SOL'].filter(s => s !== coinData.symbol).slice(0, 4).map((relatedSymbol, index) => (
                  <Link key={relatedSymbol} href={`/coin/${relatedSymbol.toLowerCase()}`}>
                    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[var(--color-primary-brand)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {relatedSymbol.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors">
                            {relatedSymbol}
                          </div>
                          <div className="text-xs text-[var(--color-text-secondary)]">
                            {relatedSymbol === 'BTC' ? 'Bitcoin' : 
                             relatedSymbol === 'ETH' ? 'Ethereum' :
                             relatedSymbol === 'BNB' ? 'BNB' :
                             relatedSymbol === 'ADA' ? 'Cardano' : 'Solana'}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-[var(--color-text-primary)]">
                          {relatedSymbol === 'BTC' ? '₱2.85M' :
                           relatedSymbol === 'ETH' ? '₱180K' :
                           relatedSymbol === 'BNB' ? '₱38.5K' :
                           relatedSymbol === 'ADA' ? '₱51.30' : '₱12.5K'}
                        </div>
                        <div className={cn(
                          'text-xs font-medium',
                          Math.random() > 0.5 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        )}>
                          {Math.random() > 0.5 ? '+' : ''}{(Math.random() * 10 - 5).toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                  asChild
                >
                  <Link href="/prices">
                    View All Cryptocurrencies
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Trading Tools */}
            <Card className="rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-950 dark:to-cyan-900 border border-teal-200 dark:border-teal-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-teal-900 dark:text-teal-100 font-[var(--font-display)] flex items-center space-x-2">
                  <Calculator className="h-5 w-5" />
                  <span>Trading Tools</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full rounded-xl justify-start">
                  <Calculator className="h-4 w-4 mr-2" />
                  Price Calculator
                </Button>
                <Button variant="outline" className="w-full rounded-xl justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Profit/Loss Calculator
                </Button>
                <Button variant="outline" className="w-full rounded-xl justify-start">
                  <Percent className="h-4 w-4 mr-2" />
                  DCA Calculator
                </Button>
                <Button variant="outline" className="w-full rounded-xl justify-start">
                  <LineChart className="h-4 w-4 mr-2" />
                  Technical Analysis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg mt-12">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
              Start Trading {coinData.symbol}
            </h3>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Ready to buy {coinData.name}? Choose from the best Philippine cryptocurrency exchanges 
              with competitive fees and secure trading.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline"
                className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                asChild
              >
                <Link href="/exchanges/philippines">
                  Philippine Exchanges
                </Link>
              </Button>
              <Button 
                className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                asChild
              >
                <Link href="/guides/buying-selling">
                  How to Buy Crypto
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
            <CardContent className="p-3">
              <div className="flex items-center space-x-2 text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[var(--color-text-secondary)]">
                  {coinData.symbol} • Live Data
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <NewsletterFooter />
    </div>
  );
}