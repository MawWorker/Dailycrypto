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
  Target, 
  BarChart3, 
  Zap, 
  AlertTriangle, 
  Clock, 
  Calendar, 
  Eye, 
  Star, 
  ChevronRight, 
  RefreshCw,
  Telescope,
  Brain,
  Lightbulb,
  Shield,
  Globe,
  Users,
  DollarSign,
  Activity,
  Gauge,
  PieChart,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  Flame,
  Award,
  Sparkles,
  Compass,
  Map,
  Crosshair,
  Radar,
  Binoculars
} from 'lucide-react';
import { formatPHP, formatPercentage, formatRelativeTime } from '@/lib/format';
import { useCryptoPrices } from '@/hooks/use-crypto-prices';
import { cn } from '@/lib/utils';

interface MarketPrediction {
  asset: string;
  symbol: string;
  currentPrice: number;
  targetPrice: number;
  timeframe: string;
  confidence: number;
  reasoning: string;
  analyst: string;
  direction: 'bullish' | 'bearish' | 'neutral';
  riskLevel: 'Low' | 'Medium' | 'High';
}

interface MarketTrend {
  title: string;
  description: string;
  impact: 'Positive' | 'Negative' | 'Neutral';
  timeframe: string;
  probability: number;
  category: string;
}

interface TechnicalIndicator {
  name: string;
  value: string;
  signal: 'Buy' | 'Sell' | 'Hold';
  strength: number;
  description: string;
}

export function MarketOutlookContent() {
  const { data: cryptoPrices, loading: pricesLoading } = useCryptoPrices();
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1W' | '1M' | '3M' | '6M'>('1M');

  // Set lastUpdated only on client side to avoid hydration mismatch
  useEffect(() => {
    setLastUpdated(new Date());
  }, []);

  // Market predictions data
  const marketPredictions: MarketPrediction[] = [
    {
      asset: 'Bitcoin',
      symbol: 'BTC',
      currentPrice: 2850000,
      targetPrice: 3200000,
      timeframe: '3 months',
      confidence: 78,
      reasoning: 'Institutional adoption accelerating, ETF inflows strong, halving effects materializing',
      analyst: 'Maria Santos',
      direction: 'bullish',
      riskLevel: 'Medium'
    },
    {
      asset: 'Ethereum',
      symbol: 'ETH',
      currentPrice: 180000,
      targetPrice: 220000,
      timeframe: '2 months',
      confidence: 72,
      reasoning: 'Layer 2 scaling solutions gaining traction, DeFi ecosystem expanding, staking rewards attractive',
      analyst: 'Carlos Reyes',
      direction: 'bullish',
      riskLevel: 'Medium'
    },
    {
      asset: 'Solana',
      symbol: 'SOL',
      currentPrice: 8500,
      targetPrice: 12000,
      timeframe: '6 weeks',
      confidence: 65,
      reasoning: 'Mobile integration success, DeFi TVL growth, developer activity increasing',
      analyst: 'Anna Dela Cruz',
      direction: 'bullish',
      riskLevel: 'High'
    },
    {
      asset: 'Cardano',
      symbol: 'ADA',
      currentPrice: 22,
      targetPrice: 18,
      timeframe: '1 month',
      confidence: 58,
      reasoning: 'Development delays, competitive pressure from faster chains, funding concerns',
      analyst: 'Miguel Torres',
      direction: 'bearish',
      riskLevel: 'Medium'
    }
  ];

  // Market trends data
  const marketTrends: MarketTrend[] = [
    {
      title: 'Institutional Bitcoin Adoption Accelerating',
      description: 'Major corporations and pension funds continue adding Bitcoin to treasury reserves',
      impact: 'Positive',
      timeframe: 'Q1 2025',
      probability: 85,
      category: 'Institutional'
    },
    {
      title: 'Central Bank Digital Currencies (CBDCs) Expansion',
      description: 'More countries launching CBDC pilots, potentially affecting crypto adoption',
      impact: 'Neutral',
      timeframe: 'Next 6 months',
      probability: 92,
      category: 'Regulatory'
    },
    {
      title: 'DeFi 2.0 Infrastructure Maturation',
      description: 'Next-generation DeFi protocols with improved security and user experience',
      impact: 'Positive',
      timeframe: 'Q2 2025',
      probability: 78,
      category: 'Technology'
    },
    {
      title: 'Regulatory Clarity in Major Markets',
      description: 'Clear crypto regulations expected in US, EU, and Asia-Pacific regions',
      impact: 'Positive',
      timeframe: 'Next 12 months',
      probability: 71,
      category: 'Regulatory'
    },
    {
      title: 'Web3 Gaming Mainstream Adoption',
      description: 'Traditional gaming companies integrating blockchain and NFT elements',
      impact: 'Positive',
      timeframe: 'Q3 2025',
      probability: 68,
      category: 'Gaming'
    },
    {
      title: 'Energy Efficiency Concerns',
      description: 'Continued focus on sustainable blockchain solutions and green mining',
      impact: 'Neutral',
      timeframe: 'Ongoing',
      probability: 89,
      category: 'Environmental'
    }
  ];

  // Technical indicators data
  const technicalIndicators: TechnicalIndicator[] = [
    {
      name: 'RSI (14)',
      value: '68.4',
      signal: 'Hold',
      strength: 68,
      description: 'Approaching overbought territory but still within normal range'
    },
    {
      name: 'MACD',
      value: 'Bullish',
      signal: 'Buy',
      strength: 75,
      description: 'Signal line crossed above MACD line, indicating upward momentum'
    },
    {
      name: 'Moving Average (50)',
      value: 'Above',
      signal: 'Buy',
      strength: 82,
      description: 'Price trading above 50-day moving average, trend remains positive'
    },
    {
      name: 'Volume Profile',
      value: 'Strong',
      signal: 'Buy',
      strength: 71,
      description: 'Above-average volume supporting current price levels'
    },
    {
      name: 'Support/Resistance',
      value: 'Neutral',
      signal: 'Hold',
      strength: 60,
      description: 'Price consolidating between key support and resistance levels'
    }
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setLastUpdated(new Date());
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const getDirectionColor = (direction: string) => {
    switch (direction) {
      case 'bullish':
        return 'text-green-600 dark:text-green-400';
      case 'bearish':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-yellow-600 dark:text-yellow-400';
    }
  };

  const getDirectionBg = (direction: string) => {
    switch (direction) {
      case 'bullish':
        return 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-green-200 dark:border-green-800';
      case 'bearish':
        return 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900 border-red-200 dark:border-red-800';
      default:
        return 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950 dark:to-amber-900 border-yellow-200 dark:border-yellow-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Positive':
        return 'text-green-600 dark:text-green-400';
      case 'Negative':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-blue-600 dark:text-blue-400';
    }
  };

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case 'Buy':
        return 'bg-green-500 text-white';
      case 'Sell':
        return 'bg-red-500 text-white';
      default:
        return 'bg-yellow-500 text-white';
    }
  };

  return (
    <div className="space-y-8">
      {/* Last Updated */}
      <div className="flex items-center justify-center space-x-2 text-sm text-[var(--color-text-secondary)]">
        <Clock className="h-4 w-4" />
        <span>Analysis updated: {lastUpdated ? lastUpdated.toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila' }) : 'Loading...'} Manila Time</span>
      </div>

      {/* Timeframe Selector */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Compass className="h-5 w-5 text-[var(--color-primary-brand)]" />
              <span className="text-lg font-semibold text-[var(--color-text-primary)]">Market Outlook Timeframe</span>
            </div>
            
            <div className="flex space-x-2">
              {(['1W', '1M', '3M', '6M'] as const).map((timeframe) => (
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
          
          <div className="mt-4 text-center">
            <Badge variant="secondary" className="rounded-xl">
              Analyzing {selectedTimeframe} outlook • {marketPredictions.length} predictions
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Market Sentiment Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-green-200 dark:border-green-800 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
              Bullish
            </h3>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Overall market sentiment remains positive with strong institutional support
            </p>
            <div className="mt-4">
              <div className="text-3xl font-bold text-green-900 dark:text-green-100">
                76%
              </div>
              <div className="text-xs text-green-700 dark:text-green-300">Confidence Level</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-blue-200 dark:border-blue-800 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
              <Gauge className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
              Fear & Greed: 68
            </h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Market showing signs of greed but not yet at extreme levels
            </p>
            <div className="mt-4">
              <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-500" style={{ width: '68%' }}></div>
              </div>
              <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">Greed Territory</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 border-purple-200 dark:border-purple-800 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">
              High Volatility
            </h3>
            <p className="text-purple-700 dark:text-purple-300 text-sm">
              Expect continued price swings as market finds new equilibrium
            </p>
            <div className="mt-4">
              <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">
                ±15%
              </div>
              <div className="text-xs text-purple-700 dark:text-purple-300">Expected Range</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Expert Predictions */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <Brain className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Expert Price Predictions</span>
            <Badge variant="secondary" className="rounded-xl">
              {marketPredictions.length} assets analyzed
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6">
            {marketPredictions.map((prediction, index) => (
              <Card 
                key={prediction.symbol}
                className={cn(
                  "rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
                  getDirectionBg(prediction.direction)
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/50 dark:bg-black/20 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="font-bold text-lg">{prediction.symbol}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                          {prediction.asset}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm">
                          <Badge 
                            variant="secondary"
                            className={cn(
                              "text-xs",
                              prediction.riskLevel === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                              prediction.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                              'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            )}
                          >
                            {prediction.riskLevel} Risk
                          </Badge>
                          <span className="text-[var(--color-text-secondary)]">
                            {prediction.timeframe} outlook
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">
                        {prediction.confidence}%
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Confidence</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-black/20 rounded-xl">
                        <span className="text-sm font-medium">Current Price</span>
                        <span className="font-bold text-[var(--color-text-primary)]">
                          {formatPHP(prediction.currentPrice)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-black/20 rounded-xl">
                        <span className="text-sm font-medium">Target Price</span>
                        <div className="text-right">
                          <div className="font-bold text-[var(--color-text-primary)]">
                            {formatPHP(prediction.targetPrice)}
                          </div>
                          <div className={cn(
                            "text-xs font-medium flex items-center space-x-1",
                            getDirectionColor(prediction.direction)
                          )}>
                            {prediction.direction === 'bullish' ? (
                              <ArrowUpRight className="h-3 w-3" />
                            ) : prediction.direction === 'bearish' ? (
                              <ArrowDownRight className="h-3 w-3" />
                            ) : (
                              <Activity className="h-3 w-3" />
                            )}
                            <span>
                              {formatPercentage(((prediction.targetPrice - prediction.currentPrice) / prediction.currentPrice) * 100)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3 bg-white/50 dark:bg-black/20 rounded-xl">
                        <div className="text-sm font-medium mb-2">Analysis by {prediction.analyst}</div>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {prediction.reasoning}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Badge className={cn("rounded-xl", getDirectionColor(prediction.direction).replace('text-', 'bg-').replace('dark:text-', 'dark:bg-').replace('-600', '-500').replace('-400', '-400') + ' text-white')}>
                          {prediction.direction.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-[var(--color-text-secondary)]">
                          {prediction.timeframe} target
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Trends & Catalysts */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <Radar className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Market Trends & Catalysts</span>
            <Badge variant="secondary" className="rounded-xl">
              {marketTrends.length} trends identified
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {marketTrends.map((trend, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group">
              <div className={cn(
                "w-3 h-3 rounded-full mt-2 flex-shrink-0",
                trend.impact === 'Positive' ? 'bg-green-500' : 
                trend.impact === 'Negative' ? 'bg-red-500' : 'bg-blue-500'
              )} />
              
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors">
                    {trend.title}
                  </h4>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-xs",
                      trend.impact === 'Positive' ? 'border-green-500 text-green-700 dark:text-green-300' :
                      trend.impact === 'Negative' ? 'border-red-500 text-red-700 dark:text-red-300' :
                      'border-blue-500 text-blue-700 dark:text-blue-300'
                    )}
                  >
                    {trend.impact}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {trend.category}
                  </Badge>
                </div>
                
                <p className="text-[var(--color-text-secondary)] text-sm mb-3 leading-relaxed">
                  {trend.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-[var(--color-text-secondary)]">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{trend.timeframe}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="h-3 w-3" />
                      <span>{trend.probability}% probability</span>
                    </div>
                  </div>
                  
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={cn(
                        "h-2 rounded-full transition-all duration-500",
                        trend.impact === 'Positive' ? 'bg-green-500' :
                        trend.impact === 'Negative' ? 'bg-red-500' : 'bg-blue-500'
                      )}
                      style={{ width: `${trend.probability}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Technical Analysis Dashboard */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Technical Indicators */}
        <Card className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900 border-indigo-200 dark:border-indigo-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-indigo-900 dark:text-indigo-100 font-[var(--font-display)] flex items-center space-x-2">
              <LineChart className="h-5 w-5" />
              <span>Technical Indicators</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {technicalIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-colors group">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="font-semibold text-indigo-900 dark:text-indigo-100 group-hover:text-[var(--color-primary-brand)] transition-colors">
                      {indicator.name}
                    </span>
                    <Badge className={cn("text-xs rounded-xl", getSignalColor(indicator.signal))}>
                      {indicator.signal}
                    </Badge>
                  </div>
                  <p className="text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed">
                    {indicator.description}
                  </p>
                </div>
                
                <div className="text-right ml-4">
                  <div className="font-bold text-indigo-900 dark:text-indigo-100">
                    {indicator.value}
                  </div>
                  <div className="w-16 bg-indigo-200 dark:bg-indigo-800 rounded-full h-1 mt-1">
                    <div 
                      className="bg-indigo-600 dark:bg-indigo-400 h-1 rounded-full transition-all duration-500"
                      style={{ width: `${indicator.strength}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-4 border-t border-indigo-200 dark:border-indigo-700">
              <div className="text-center">
                <div className="text-lg font-bold text-indigo-900 dark:text-indigo-100 mb-1">
                  Overall Signal: BULLISH
                </div>
                <div className="text-sm text-indigo-700 dark:text-indigo-300">
                  4 out of 5 indicators suggest upward momentum
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Catalysts */}
        <Card className="rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950 dark:to-yellow-900 border-amber-200 dark:border-amber-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-amber-900 dark:text-amber-100 font-[var(--font-display)] flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Upcoming Catalysts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                event: 'Bitcoin ETF Options Launch',
                date: 'January 2025',
                impact: 'High',
                description: 'Options trading on Bitcoin ETFs could increase institutional participation'
              },
              {
                event: 'Ethereum Cancun-Deneb Upgrade',
                date: 'Q1 2025',
                impact: 'High',
                description: 'Network improvements expected to reduce gas fees significantly'
              },
              {
                event: 'Philippine CBDC Full Launch',
                date: 'Q2 2025',
                impact: 'Medium',
                description: 'Digital peso rollout may influence regional crypto adoption'
              },
              {
                event: 'Major Exchange IPO',
                date: 'Q2 2025',
                impact: 'Medium',
                description: 'Public listing could bring more mainstream attention to crypto'
              }
            ].map((catalyst, index) => (
              <div key={index} className="flex items-start space-x-4 p-3 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-colors group">
                <div className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm text-white shadow-lg",
                  catalyst.impact === 'High' ? 'bg-red-500' :
                  catalyst.impact === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                )}>
                  {index + 1}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 group-hover:text-[var(--color-primary-brand)] transition-colors">
                      {catalyst.event}
                    </h4>
                    <Badge 
                      variant="outline"
                      className={cn(
                        "text-xs",
                        catalyst.impact === 'High' ? 'border-red-500 text-red-700 dark:text-red-300' :
                        catalyst.impact === 'Medium' ? 'border-yellow-500 text-yellow-700 dark:text-yellow-300' :
                        'border-green-500 text-green-700 dark:text-green-300'
                      )}
                    >
                      {catalyst.impact} Impact
                    </Badge>
                  </div>
                  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
                    {catalyst.description}
                  </p>
                  <div className="text-xs text-amber-600 dark:text-amber-400 flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>Expected: {catalyst.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Risk Assessment */}
      <Card className="rounded-2xl bg-gradient-to-r from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900 border-orange-200 dark:border-orange-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-900 dark:text-orange-100 font-[var(--font-display)] flex items-center space-x-3">
            <Shield className="h-6 w-6" />
            <span>Risk Assessment</span>
            <Badge className="bg-orange-500 text-white">
              Medium Risk
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
              <div className="text-lg font-bold text-orange-900 dark:text-orange-100">
                Regulatory
              </div>
              <div className="text-sm text-orange-700 dark:text-orange-300">
                Medium Risk
              </div>
              <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                Policy changes possible
              </div>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <Activity className="h-8 w-8 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
              <div className="text-lg font-bold text-orange-900 dark:text-orange-100">
                Volatility
              </div>
              <div className="text-sm text-orange-700 dark:text-orange-300">
                High Risk
              </div>
              <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                Expect price swings
              </div>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <Globe className="h-8 w-8 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
              <div className="text-lg font-bold text-orange-900 dark:text-orange-100">
                Macro
              </div>
              <div className="text-sm text-orange-700 dark:text-orange-300">
                Low Risk
              </div>
              <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                Stable environment
              </div>
            </div>
          </div>

          <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center space-x-2">
              <Lightbulb className="h-4 w-4" />
              <span>Key Risk Factors to Monitor</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Central bank policy changes and interest rate decisions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Regulatory developments in major markets (US, EU, Asia)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Institutional adoption pace and corporate treasury decisions</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Geopolitical tensions affecting global financial markets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Technology risks including security breaches and network issues</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Market manipulation and whale activity patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Philippine Market Focus */}
      <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/20 dark:to-red-950/20 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="w-8 h-6 rounded-sm overflow-hidden shadow-lg border border-gray-200 dark:border-gray-600">
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="0" y="0" width="24" height="8" fill="#0038A8" />
                <rect x="0" y="8" width="24" height="8" fill="#CE1126" />
                <polygon points="0,0 0,16 12,8" fill="#FFFFFF" />
              </svg>
            </div>
            <span>Philippine Market Outlook</span>
            <Badge className="bg-gradient-to-r from-blue-500 to-red-500 text-white">
              🇵🇭 LOCAL
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-[var(--color-text-primary)] flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span>Positive Factors</span>
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-xl">
                  <div className="font-medium text-green-900 dark:text-green-100 mb-1">BSP Regulatory Clarity</div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Clear guidelines boost investor confidence and institutional adoption
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-xl">
                  <div className="font-medium text-green-900 dark:text-green-100 mb-1">Digital Peso CBDC</div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Government backing of digital currency validates crypto technology
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-xl">
                  <div className="font-medium text-green-900 dark:text-green-100 mb-1">OFW Remittance Adoption</div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Growing use of crypto for overseas worker remittances
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-[var(--color-text-primary)] flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span>Watch Points</span>
              </h4>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl">
                  <div className="font-medium text-yellow-900 dark:text-yellow-100 mb-1">Tax Implementation</div>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    BIR crypto tax guidelines may affect trading behavior
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl">
                  <div className="font-medium text-yellow-900 dark:text-yellow-100 mb-1">Exchange Competition</div>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Increasing competition among local exchanges affecting fees
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl">
                  <div className="font-medium text-yellow-900 dark:text-yellow-100 mb-1">Economic Conditions</div>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Peso strength and inflation rates impact crypto demand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Recommendations */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-purple-500/5 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <Crosshair className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Investment Strategy Recommendations</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Conservative</h4>
              <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                Focus on established cryptocurrencies with strong fundamentals and institutional backing.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Bitcoin (BTC)</span>
                  <span className="font-medium">60%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Ethereum (ETH)</span>
                  <span className="font-medium">30%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Stablecoins</span>
                  <span className="font-medium">10%</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-200 dark:border-blue-800">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Balanced</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                Mix of established and emerging cryptocurrencies with growth potential.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Bitcoin (BTC)</span>
                  <span className="font-medium">40%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Ethereum (ETH)</span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Altcoins</span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Stablecoins</span>
                  <span className="font-medium">10%</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-purple-50 dark:bg-purple-950/20 rounded-2xl border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Aggressive</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
                Higher risk, higher reward strategy focusing on emerging opportunities.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Bitcoin (BTC)</span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Ethereum (ETH)</span>
                  <span className="font-medium">20%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Altcoins</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Stablecoins</span>
                  <span className="font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl border border-orange-300 dark:border-orange-700">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-orange-900 dark:text-orange-100 mb-2">
                  Important Disclaimer
                </h5>
                <p className="text-sm text-orange-700 dark:text-orange-300 leading-relaxed">
                  This market outlook is for educational purposes only and should not be considered financial advice. 
                  Cryptocurrency investments carry significant risks. Always conduct your own research and consult 
                  with qualified financial advisors before making investment decisions. Past performance does not 
                  guarantee future results.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Outlook Summary */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Binoculars className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Market Outlook Summary
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            The cryptocurrency market shows strong bullish momentum driven by institutional adoption and regulatory clarity. 
            While volatility remains high, fundamental factors support continued growth in the medium term. 
            Philippine market benefits from supportive regulations and growing adoption.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                Bullish
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Overall Sentiment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                76%
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Confidence Level</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                3-6M
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Outlook Period</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                Medium
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Risk Level</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/news">
                Read Market News
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/guides">
                Investment Guides
              </Link>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <Link href="/newsletter">
                Get Weekly Outlook
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Market Analysis Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Telescope className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Market Outlook • {selectedTimeframe} analysis
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}