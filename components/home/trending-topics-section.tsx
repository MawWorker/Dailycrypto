'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Hash, 
  TrendingUp, 
  TrendingDown,
  Flame, 
  Eye, 
  MessageCircle,
  ChevronRight,
  Zap,
  Globe,
  Star,
  BarChart3,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCryptoPrices } from '@/hooks/use-crypto-prices';

// Live Prices Widget Component
const LivePricesWidget = () => {
  const { data: cryptoPrices, loading } = useCryptoPrices();
  
  // Extended mock data for 20 coins
  const extendedPrices = [
    ...cryptoPrices,
    { symbol: 'DOGE', name: 'Dogecoin', price: 4.50, change24h: 0.12, changePercent24h: 2.74 },
    { symbol: 'SHIB', name: 'Shiba Inu', price: 0.0012, change24h: -0.00003, changePercent24h: -2.44 },
    { symbol: 'UNI', name: 'Uniswap', price: 450, change24h: 23, changePercent24h: 5.38 },
    { symbol: 'ATOM', name: 'Cosmos', price: 340, change24h: -8, changePercent24h: -2.30 },
    { symbol: 'FIL', name: 'Filecoin', price: 280, change24h: 15, changePercent24h: 5.66 },
    { symbol: 'NEAR', name: 'NEAR Protocol', price: 180, change24h: 12, changePercent24h: 7.14 },
    { symbol: 'ALGO', name: 'Algorand', price: 8.90, change24h: 0.45, changePercent24h: 5.33 },
    { symbol: 'VET', name: 'VeChain', price: 1.20, change24h: -0.03, changePercent24h: -2.44 },
    { symbol: 'HBAR', name: 'Hedera', price: 3.40, change24h: 0.18, changePercent24h: 5.59 }
  ].slice(0, 20);

  if (loading) {
    return (
      <Card className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded-lg animate-pulse" />
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">Live Prices</h3>
          </div>
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex justify-between items-center p-2 bg-white/50 dark:bg-black/20 rounded-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-200 dark:bg-blue-800 rounded-full" />
                  <div className="w-12 h-3 bg-blue-200 dark:bg-blue-800 rounded" />
                </div>
                <div className="w-16 h-3 bg-blue-200 dark:bg-blue-800 rounded" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
              <TrendingUp className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">Live Prices</h3>
          </div>
          <div className="flex items-center space-x-1 text-xs text-blue-700 dark:text-blue-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Live</span>
          </div>
        </div>
        
        <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-blue-600 scrollbar-track-transparent space-y-1">
          {extendedPrices.map((coin, index) => (
            <Link key={coin.symbol} href={`/prices/${coin.symbol.toLowerCase()}`}>
              <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-black/20 rounded-lg hover:bg-white/80 dark:hover:bg-black/40 transition-colors group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {coin.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm group-hover:text-[var(--color-primary-brand)] transition-colors">
                      {coin.symbol}
                    </div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">
                      {coin.name}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-blue-900 dark:text-blue-100 text-sm">
                    {coin.price >= 1000 ? `₱${(coin.price / 1000).toFixed(1)}K` : 
                     coin.price >= 1 ? `₱${coin.price.toFixed(2)}` : 
                     `₱${coin.price.toFixed(4)}`}
                  </div>
                  <div className={cn(
                    'text-xs font-medium flex items-center space-x-1',
                    coin.changePercent24h >= 0 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  )}>
                    {coin.changePercent24h >= 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span>{coin.changePercent24h >= 0 ? '+' : ''}{coin.changePercent24h.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="pt-3 mt-3 border-t border-blue-200 dark:border-blue-700">
          <Button 
            variant="outline"
            size="sm"
            className="w-full rounded-xl border-blue-500 text-blue-700 dark:text-blue-300 hover:bg-blue-500 hover:text-white"
            asChild
          >
            <Link href="/prices">
              View All Prices
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const trendingTopics = [
  {
    topic: '#DigitalPeso',
    mentions: '67.2K',
    change: '+189%',
    sentiment: 'Positive',
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
  },
  {
    topic: '#BSPRegulations',
    mentions: '45.8K',
    change: '+156%',
    sentiment: 'Positive',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
  },
  {
    topic: '#GCashCrypto',
    mentions: '34.1K',
    change: '+98%',
    sentiment: 'Very Positive',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
  },
  {
    topic: '#OFWRemittance',
    mentions: '28.9K',
    change: '+145%',
    sentiment: 'Positive',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
  },
  {
    topic: '#PhilippineBitcoin',
    mentions: '23.7K',
    change: '+87%',
    sentiment: 'Positive',
    color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300'
  },
  {
    topic: '#CoinsPH',
    mentions: '19.3K',
    change: '+67%',
    sentiment: 'Positive',
    color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
  }
];

const philippinesNewsArticles = [
  {
    id: 1,
    title: 'BSP Launches Digital Peso Pilot with 50,000 Users',
    summary: 'Central bank begins comprehensive CBDC testing across Metro Manila',
    category: 'CBDC',
    timeAgo: '2h ago',
    image: 'https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?q=80&w=735&auto=format&fit=crop',
    categoryColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    link: '/news/bsp-digital-peso-pilot-launch'
  },
  {
    id: 2,
    title: 'GCash & Maya Expand Crypto Trading Features',
    summary: 'Popular e-wallets add new trading pairs and lower fees',
    category: 'Fintech',
    timeAgo: '4h ago',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    categoryColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    link: '/news/gcash-maya-crypto-expansion'
  },
  {
    id: 3,
    title: 'Major PH Banks Test Blockchain Remittance',
    summary: 'BDO, BPI pilot program could reduce OFW transfer costs by 60%',
    category: 'Banking',
    timeAgo: '6h ago',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    categoryColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    link: '/news/philippine-banks-blockchain-remittance'
  },
  {
    id: 4,
    title: 'BIR Updates Crypto Tax Guidelines for 2025',
    summary: 'New framework provides clarity for Filipino crypto traders',
    category: 'Tax',
    timeAgo: '8h ago',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    categoryColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    link: '/news/bir-crypto-tax-guidelines-2025'
  },
  {
    id: 5,
    title: 'PH Exchanges Boost Security Measures',
    summary: 'Coins.ph, PDAX implement advanced protection protocols',
    category: 'Security',
    timeAgo: '10h ago',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    categoryColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    link: '/news/philippine-crypto-exchanges-security'
  },
  {
    id: 6,
    title: 'Filipino Artists Embrace Solana NFTs',
    summary: 'Local creators gain international recognition on blockchain',
    category: 'NFT',
    timeAgo: '12h ago',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    categoryColor: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    link: '/news/filipino-artists-solana-nft'
  },
  {
    id: 7,
    title: 'Philippine SMEs Adopt Bitcoin Payments',
    summary: 'Small businesses leverage crypto for cross-border transactions',
    category: 'Business',
    timeAgo: '14h ago',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80',
    categoryColor: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
    link: '/news/philippine-smes-bitcoin-adoption'
  },
  {
    id: 8,
    title: 'Cardano Partners with PH Universities',
    summary: 'Blockchain education initiative trains Filipino developers',
    category: 'Education',
    timeAgo: '16h ago',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    categoryColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    link: '/news/cardano-philippine-universities'
  }
];

const quickLinks = [
  { name: 'Market Overview', href: '/markets/overview', icon: BarChart3 },
  { name: 'Market Outlook', href: '/daily/outlook', icon: TrendingUp },
  { name: "Today's Recap", href: '/daily/today', icon: Globe },
  { name: 'Weekly Summary', href: '/daily/weekly', icon: Zap }
];

export function TrendingTopicsSection() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Trending Topics */}
        <div className="lg:col-span-2">
          <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                  <Flame className="h-6 w-6 text-white" />
                </div>
                <span>Philippines Crypto News</span>
                <Badge className="bg-red-500 text-white animate-pulse">
                  HOT
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {philippinesNewsArticles.map((article, index) => (
                  <Link key={article.id} href={article.link}>
                    <div className="group flex space-x-4 p-4 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-all duration-200 cursor-pointer hover:shadow-sm">
                      {/* Article Image */}
                      <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        
                        {/* Article Number Badge */}
                        <div className="absolute top-1 left-1">
                          <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-md flex items-center justify-center font-bold text-xs shadow-sm">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge className={`text-xs ${article.categoryColor}`}>
                            {article.category}
                          </Badge>
                          <span className="text-xs text-[var(--color-text-secondary)]">
                            {article.timeAgo}
                          </span>
                        </div>
                        
                        <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors leading-tight">
                          {article.title}
                        </h4>
                        
                        <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-[var(--color-muted-subtle)] text-center">
                <Button 
                  variant="outline" 
                  className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                  asChild
                >
                  <Link href="/news/philippines">
                    View All Philippines Crypto News
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Navigation */}
        <div className="space-y-6">
          {/* Newsletter & Social Section */}
          <Card className="rounded-2xl bg-[var(--color-surface)] shadow-lg transition-all duration-300 hover:shadow-xl border border-slate-100 dark:border-slate-700">
            <CardContent className="p-6 space-y-4">
              {/* Newsletter Subscription */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-8 h-8 bg-[var(--color-primary-brand)] rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs">📧</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                    Stay Updated
                  </h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Get crypto news in your inbox
                </p>
                
                {/* Email Input */}
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-[var(--color-muted-subtle)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-brand)] focus:border-transparent transition-all duration-200"
                  />
                  <button className="px-4 py-2 bg-[var(--color-primary-brand)] text-white text-sm font-medium rounded-xl hover:bg-[var(--color-primary-brand)]/90 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                    Subscribe
                  </button>
                </div>
                
                <p className="text-sm text-[var(--color-text-secondary)]">
                  24.5K+ subscribers • No spam
                </p>
              </div>
              
              {/* Social Media Icons */}
              <div className="pt-4 border-t border-[var(--color-muted-subtle)]">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-sm font-medium text-[var(--color-text-secondary)]">Follow:</span>
                  <div className="flex space-x-2">
                    {/* Facebook */}
                    <a
                      href="https://facebook.com"
                      className="w-7 h-7 bg-[#1877F2] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    
                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      className="w-7 h-7 bg-gradient-to-r from-[#E4405F] to-[#5B51D8] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    
                    {/* TikTok */}
                    <a
                      href="https://tiktok.com"
                      className="w-7 h-7 bg-black dark:bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                    
                    {/* X (Twitter) */}
                    <a
                      href="https://x.com"
                      className="w-7 h-7 bg-black dark:bg-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    
                    {/* Reddit */}
                    <a
                      href="https://reddit.com"
                      className="w-7 h-7 bg-[#FF4500] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                      </svg>
                    </a>
                    
                    {/* Telegram */}
                    <a
                      href="https://telegram.org"
                      className="w-7 h-7 bg-[#0088CC] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                    
                    {/* YouTube */}
                    <a
                      href="https://youtube.com"
                      className="w-7 h-7 bg-[#FF0000] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                    
                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com"
                      className="w-7 h-7 bg-[#0A66C2] rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-[var(--color-surface)] shadow-lg transition-all duration-300 hover:shadow-xl border border-slate-100 dark:border-slate-700">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
                <Zap className="h-5 w-5 text-[var(--color-primary-brand)]" />
                <span>Quick Access</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  className="w-full justify-start rounded-xl hover:bg-[var(--color-primary-brand)]/10 hover:text-[var(--color-primary-brand)] transition-colors"
                  asChild
                >
                  <Link href={link.href} className="flex items-center space-x-3">
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </Link>
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Live Market Status */}
          {/* Live Prices */}
          <LivePricesWidget />
        </div>
      </div>

    </div>
  );
}