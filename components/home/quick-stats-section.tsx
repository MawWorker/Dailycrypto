import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  Users, 
  Globe,
  Zap,
  Activity
} from 'lucide-react';
import { useCryptoPrices } from '@/hooks/use-crypto-prices';

export function QuickStatsSection() {
  const { data: cryptoPrices } = useCryptoPrices();

  // Calculate market stats from crypto data
  const totalMarketValue = cryptoPrices.reduce((sum, coin) => sum + coin.price, 0);
  const gainers = cryptoPrices.filter(coin => coin.changePercent24h > 0).length;
  const losers = cryptoPrices.filter(coin => coin.changePercent24h < 0).length;
  const avgChange = cryptoPrices.reduce((sum, coin) => sum + coin.changePercent24h, 0) / cryptoPrices.length;

  const stats = [
    {
      icon: DollarSign,
      label: 'Total Market Cap',
      value: '₱142.8T',
      change: '+3.24%',
      positive: true,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30'
    },
    {
      icon: BarChart3,
      label: '24h Volume',
      value: '₱4.2T',
      change: '+12.8%',
      positive: true,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30'
    },
    {
      icon: Activity,
      label: 'Fear & Greed Index',
      value: '78',
      change: 'Extreme Greed',
      positive: true,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30'
    },
    {
      icon: Activity,
      label: 'Market Sentiment',
      value: 'Bullish',
      change: 'Strong Buy Signal',
      positive: true,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30'
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={stat.label}
            className={`rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${stat.bgColor}`}
          >
            <CardContent className="p-4 lg:p-6 text-center">
              <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto mb-3 bg-white/80 dark:bg-black/20 rounded-xl flex items-center justify-center shadow-lg">
                <stat.icon className={`h-6 w-6 lg:h-7 lg:w-7 ${stat.color}`} />
              </div>
              
              <div className="space-y-1">
                <div className="text-xl lg:text-2xl font-bold text-[var(--color-text-primary)]">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm font-medium text-[var(--color-text-secondary)]">
                  {stat.label}
                </div>
                <div className={`text-xs lg:text-sm font-medium flex items-center justify-center space-x-1 ${
                  stat.positive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {stat.positive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}