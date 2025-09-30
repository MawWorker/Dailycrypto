"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Star,
  TrendingUp,
  TrendingDown,
  Shield,
  Users,
  Globe,
  Smartphone,
  Building2,
  CreditCard,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Eye,
  Award,
  Target,
  Zap,
  Crown,
  Flag,
  DollarSign,
  Clock,
  Lock,
  Verified,
  TrendingUpIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExchangeReview {
  id: string;
  name: string;
  type: 'philippines' | 'global';
  category: 'exchange' | 'bank-vasp' | 'e-wallet';
  logo: string;
  rating: number;
  totalReviews: number;
  verified: boolean;
  established: string;
  headquarters: string;
  availability: {
    philippines: boolean;
    global: boolean;
  };
  summary: string;
  pros: string[];
  cons: string[];
  fees: {
    trading: string;
    withdrawal: string;
    deposit: string;
  };
  supportedCoins: number;
  dailyVolume: string;
  userBase: string;
  security: {
    score: number;
    features: string[];
  };
  customerSupport: {
    rating: number;
    channels: string[];
    responseTime: string;
  };
  userReviews: {
    positive: number;
    negative: number;
    neutral: number;
  };
  expertReview: {
    score: number;
    summary: string;
    lastUpdated: string;
  };
  quickFacts: string[];
  affiliateLink?: string;
}

const exchangeReviews: ExchangeReview[] = [
  // Philippines Exchanges
  {
    id: 'coins-ph',
    name: 'Coins.ph',
    type: 'philippines',
    category: 'exchange',
    logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.3,
    totalReviews: 12847,
    verified: true,
    established: '2014',
    headquarters: 'Manila, Philippines',
    availability: { philippines: true, global: false },
    summary: 'Leading Philippine cryptocurrency exchange with comprehensive trading and payment services. Known for excellent mobile app and wide acceptance across the Philippines.',
    pros: [
      'Widely accepted across Philippines',
      'Excellent mobile app experience',
      'Multiple funding options (GCash, banks)',
      'Strong local customer support',
      'BSP regulated and compliant'
    ],
    cons: [
      'Higher fees compared to some competitors',
      'Limited advanced trading features',
      'Occasional downtime during high volume',
      'Fewer cryptocurrency options than global exchanges'
    ],
    fees: {
      trading: '0.25% - 1.5%',
      withdrawal: 'Free PHP, varies for crypto',
      deposit: 'Free for most methods'
    },
    supportedCoins: 25,
    dailyVolume: '$45M',
    userBase: '18M+',
    security: {
      score: 8.5,
      features: ['2FA', 'Cold Storage', 'Insurance Fund', 'BSP Compliance']
    },
    customerSupport: {
      rating: 4.2,
      channels: ['Live Chat', 'Email', 'Phone', 'Social Media'],
      responseTime: '< 2 hours'
    },
    userReviews: { positive: 78, negative: 12, neutral: 10 },
    expertReview: {
      score: 8.6,
      summary: 'Excellent choice for Filipino beginners with strong local support and wide acceptance.',
      lastUpdated: '2024-12-15'
    },
    quickFacts: [
      'Most popular in Philippines',
      'BSP licensed since 2017',
      'Supports 25+ cryptocurrencies',
      'Mobile-first platform'
    ]
  },
  {
    id: 'pdax',
    name: 'PDAX',
    type: 'philippines',
    category: 'exchange',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.5,
    totalReviews: 8934,
    verified: true,
    established: '2018',
    headquarters: 'Makati, Philippines',
    availability: { philippines: true, global: false },
    summary: 'Professional digital asset exchange regulated by BSP with advanced trading features and institutional-grade security.',
    pros: [
      'Lowest trading fees in Philippines',
      'Advanced trading interface',
      'Strong security measures',
      'Institutional-grade platform',
      'BSP regulated'
    ],
    cons: [
      'Limited funding options',
      'Steeper learning curve',
      'Smaller cryptocurrency selection',
      'Less marketing presence'
    ],
    fees: {
      trading: '0.10% - 0.50%',
      withdrawal: 'Free PHP withdrawal',
      deposit: 'Free bank transfers'
    },
    supportedCoins: 18,
    dailyVolume: '$28M',
    userBase: '2M+',
    security: {
      score: 9.2,
      features: ['Multi-sig', 'Cold Storage', 'Insurance', 'BSP Compliance', 'Audit Reports']
    },
    customerSupport: {
      rating: 4.0,
      channels: ['Email', 'Live Chat', 'Phone'],
      responseTime: '< 4 hours'
    },
    userReviews: { positive: 82, negative: 8, neutral: 10 },
    expertReview: {
      score: 9.1,
      summary: 'Best choice for serious traders in Philippines with professional features and low fees.',
      lastUpdated: '2024-12-15'
    },
    quickFacts: [
      'Lowest fees in Philippines',
      'Professional trading platform',
      'Institutional grade security',
      'BSP licensed'
    ]
  },
  {
    id: 'maya-philippines',
    name: 'Maya Philippines',
    type: 'philippines',
    category: 'e-wallet',
    logo: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.1,
    totalReviews: 15623,
    verified: true,
    established: '2007',
    headquarters: 'Taguig, Philippines',
    availability: { philippines: true, global: false },
    summary: 'Integrated crypto trading within the popular Maya digital wallet ecosystem, making crypto accessible to millions of Filipino users.',
    pros: [
      'Seamless integration with Maya wallet',
      'Easy access for existing Maya users',
      'Wide network of cash-in options',
      'Good mobile experience'
    ],
    cons: [
      'Higher fees than specialized exchanges',
      'Limited cryptocurrency selection',
      'Basic trading features only',
      'No advanced order types'
    ],
    fees: {
      trading: '0.5% - 1.0%',
      withdrawal: 'Network fees apply',
      deposit: 'Free via Maya wallet'
    },
    supportedCoins: 12,
    dailyVolume: '$15M',
    userBase: '50M+',
    security: {
      score: 8.0,
      features: ['2FA', 'Biometric Auth', 'BSP Compliance', 'Fraud Detection']
    },
    customerSupport: {
      rating: 3.8,
      channels: ['In-app Chat', 'Email', 'Phone'],
      responseTime: '< 6 hours'
    },
    userReviews: { positive: 72, negative: 18, neutral: 10 },
    expertReview: {
      score: 8.2,
      summary: 'Great for Maya users wanting simple crypto access, but limited for serious trading.',
      lastUpdated: '2024-12-15'
    },
    quickFacts: [
      'Integrated with Maya wallet',
      '50M+ user base',
      'Simple crypto access',
      'BSP regulated'
    ]
  },
  {
    id: 'gcash-gcrypto',
    name: 'GCash (GCrypto)',
    type: 'philippines',
    category: 'e-wallet',
    logo: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.0,
    totalReviews: 23456,
    verified: true,
    established: '2004',
    headquarters: 'Taguig, Philippines',
    availability: { philippines: true, global: false },
    summary: 'Cryptocurrency trading integrated into the Philippines\' most popular e-wallet through PDAX partnership, serving 90M+ users.',
    pros: [
      'Largest user base in Philippines',
      'Seamless GCash integration',
      'Easy onboarding process',
      'Trusted brand recognition'
    ],
    cons: [
      'Limited to basic trading',
      'Higher fees than direct exchanges',
      'Fewer cryptocurrency options',
      'No advanced features'
    ],
    fees: {
      trading: '0.75% - 1.25%',
      withdrawal: 'Network fees + service fee',
      deposit: 'Free via GCash'
    },
    supportedCoins: 8,
    dailyVolume: '$35M',
    userBase: '90M+',
    security: {
      score: 8.3,
      features: ['2FA', 'Biometric', 'BSP Compliance', 'PDAX Partnership']
    },
    customerSupport: {
      rating: 3.9,
      channels: ['In-app Chat', 'Email', 'Hotline'],
      responseTime: '< 4 hours'
    },
    userReviews: { positive: 75, negative: 15, neutral: 10 },
    expertReview: {
      score: 8.0,
      summary: 'Perfect for GCash users wanting simple crypto access with trusted brand backing.',
      lastUpdated: '2024-12-15'
    },
    quickFacts: [
      'Largest user base (90M+)',
      'GCash integration',
      'PDAX partnership',
      'BSP regulated'
    ]
  },

  // Global Exchanges
  {
    id: 'binance',
    name: 'Binance',
    type: 'global',
    category: 'exchange',
    logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.6,
    totalReviews: 89234,
    verified: true,
    established: '2017',
    headquarters: 'Global (Multiple Jurisdictions)',
    availability: { philippines: true, global: true },
    summary: 'World\'s largest cryptocurrency exchange by trading volume, offering comprehensive trading features, extensive coin selection, and global accessibility.',
    pros: [
      'Largest trading volume globally',
      'Extensive cryptocurrency selection (600+)',
      'Advanced trading features',
      'Competitive fees',
      'Strong mobile app',
      'Multiple language support'
    ],
    cons: [
      'Complex interface for beginners',
      'Regulatory challenges in some countries',
      'Customer support can be slow',
      'Overwhelming for new users'
    ],
    fees: {
      trading: '0.10% - 0.50%',
      withdrawal: 'Varies by coin',
      deposit: 'Free for crypto'
    },
    supportedCoins: 600,
    dailyVolume: '$15.2B',
    userBase: '170M+',
    security: {
      score: 9.0,
      features: ['SAFU Fund', 'Cold Storage', 'Multi-sig', '2FA', 'Whitelist']
    },
    customerSupport: {
      rating: 3.7,
      channels: ['Live Chat', 'Email', 'Telegram'],
      responseTime: '< 24 hours'
    },
    userReviews: { positive: 73, negative: 17, neutral: 10 },
    expertReview: {
      score: 9.2,
      summary: 'Industry leader with unmatched features and liquidity, but complex for beginners.',
      lastUpdated: '2024-12-15'
    },
    quickFacts: [
      'World\'s largest exchange',
      '600+ cryptocurrencies',
      '$15B+ daily volume',
      'Available in Philippines'
    ]
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    type: 'global',
    category: 'exchange',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.4,
    totalReviews: 67891,
    verified: true,
    established: '2012',
    headquarters: 'San Francisco, USA',
    availability: { philippines: false, global: true },
    summary: 'Leading US-based cryptocurrency exchange known for regulatory compliance, user-friendly interface, and institutional services.',
    pros: [
      'Highly regulated and compliant',
      'User-friendly interface',
      'Strong security track record',
      'Institutional services',
      'Educational resources',
      'Insurance coverage'
    ],
    cons: [
      'Higher fees than competitors',
      'Limited availability (not in Philippines)',
      'Fewer trading pairs',
      'Basic charting tools'
    ],
    fees: {
      trading: '0.50% - 4.00%',
      withdrawal: '$2.99 - $4.99',
      deposit: 'Free for bank transfers'
    },
    supportedCoins: 200,
    dailyVolume: '$3.8B',
    userBase: '110M+',
    security: {
      score: 9.5,
      features: ['FDIC Insurance', 'Cold Storage', '2FA', 'Biometric', 'SOC Compliance']
    },
    customerSupport: {
      rating: 4.1,
      channels: ['Email', 'Phone', 'Live Chat'],
      responseTime: '< 12 hours'
    },
    userReviews: { positive: 76, negative: 14, neutral: 10 },
    expertReview: {
      score: 8.8,
      summary: 'Best for beginners in supported countries, excellent security but higher fees.',
      lastUpdated: '2024-12-15'
    },
    quickFacts: [
      'Publicly traded company',
      'FDIC insured',
      'Beginner-friendly',
      'Not available in Philippines'
    ]
  },
  {
    id: 'kraken',
    name: 'Kraken',
    type: 'global',
    category: 'exchange',
    logo: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.5,
    totalReviews: 45678,
    verified: true,
    established: '2011',
    headquarters: 'San Francisco, USA',
    availability: { philippines: false, global: true },
    summary: 'Veteran cryptocurrency exchange with strong security focus, advanced trading features, and excellent reputation among experienced traders.',
    pros: [
      'Excellent security track record',
      'Advanced trading features',
      'Low fees for high-volume traders',
      'Strong regulatory compliance',
      'Margin trading available',
      'Staking services'
    ],
    cons: [
      'Complex interface for beginners',
      'Limited availability (not in Philippines)',
      'Slower customer support',
      'Higher fees for small trades'
    ],
    fees: {
      trading: '0.16% - 0.26%',
      withdrawal: '$5 - $25',
      deposit: 'Free for crypto'
    },
    supportedCoins: 190,
    dailyVolume: '$1.2B',
    userBase: '9M+',
    security: {
      score: 9.8,
      features: ['Proof of Reserves', 'Cold Storage', 'Multi-sig', '2FA', 'Hardware Security']
    },
    customerSupport: {
      rating: 3.9,
      channels: ['Email', 'Live Chat'],
      responseTime: '< 24 hours'
    },
    userReviews: { positive: 81, negative: 11, neutral: 8 },
    expertReview: {
      score: 9.0,
      summary: 'Top choice for experienced traders prioritizing security and advanced features.',
      lastUpdated: '2024-12-15'
    },
    quickFacts: [
      'Founded in 2011',
      'Excellent security record',
      'Advanced trading tools',
      'Not available in Philippines'
    ]
  },
  {
    id: 'crypto-com',
    name: 'Crypto.com',
    type: 'global',
    category: 'exchange',
    logo: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.2,
    totalReviews: 56789,
    verified: true,
    established: '2016',
    headquarters: 'Singapore',
    availability: { philippines: true, global: true },
    summary: 'Global cryptocurrency platform with strong mobile app, Visa card integration, and comprehensive ecosystem including DeFi and NFTs.',
    pros: [
      'Excellent mobile app',
      'Crypto Visa card with rewards',
      'Wide range of services',
      'Good staking rewards',
      'Available in Philippines',
      'Strong marketing and partnerships'
    ],
    cons: [
      'High withdrawal fees',
      'Complex fee structure',
      'Customer support issues',
      'App can be overwhelming'
    ],
    fees: {
      trading: '0.40% - 0.75%',
      withdrawal: 'High fees',
      deposit: 'Free for crypto'
    },
    supportedCoins: 250,
    dailyVolume: '$2.1B',
    userBase: '80M+',
    security: {
      score: 8.7,
      features: ['Cold Storage', '2FA', 'Insurance', 'Multi-sig', 'Compliance']
    },
    customerSupport: {
      rating: 3.5,
      channels: ['In-app Chat', 'Email'],
      responseTime: '< 48 hours'
    },
    userReviews: { positive: 69, negative: 21, neutral: 10 },
    expertReview: {
      score: 8.4,
      summary: 'Great ecosystem and mobile experience, but watch out for high withdrawal fees.',
      lastUpdated: '2024-12-15'
    },
    quickFacts: [
      'Available in Philippines',
      'Crypto Visa card',
      'Comprehensive ecosystem',
      'Strong mobile app'
    ]
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    type: 'global',
    category: 'exchange',
    logo: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.3,
    totalReviews: 34567,
    verified: true,
    established: '2017',
    headquarters: 'Singapore',
    availability: { philippines: true, global: true },
    summary: 'Popular global exchange known for extensive altcoin selection, competitive fees, and innovative features like futures trading and lending.',
    pros: [
      'Huge selection of altcoins',
      'Competitive trading fees',
      'Advanced trading features',
      'Available in Philippines',
      'Good mobile app',
      'Innovative products'
    ],
    cons: [
      'Complex for beginners',
      'Regulatory uncertainty',
      'Customer support delays',
      'High withdrawal fees for some coins'
    ],
    fees: {
      trading: '0.10% - 0.25%',
      withdrawal: 'Varies by coin',
      deposit: 'Free for crypto'
    },
    supportedCoins: 700,
    dailyVolume: '$1.8B',
    userBase: '30M+',
    security: {
      score: 8.2,
      features: ['Cold Storage', '2FA', 'Multi-sig', 'Insurance Fund']
    },
    customerSupport: {
      rating: 3.6,
      channels: ['Live Chat', 'Email', 'Telegram'],
      responseTime: '< 24 hours'
    },
    userReviews: { positive: 71, negative: 19, neutral: 10 },
    expertReview: {
      score: 8.5,
      summary: 'Excellent for altcoin trading with competitive fees, but complex interface.',
      lastUpdated: '2024-12-15'
    },
    quickFacts: [
      'Available in Philippines',
      '700+ cryptocurrencies',
      'Low trading fees',
      'Advanced features'
    ]
  }
];

const reviewCategories = [
  { id: 'all', name: 'All Reviews', count: exchangeReviews.length },
  { id: 'philippines', name: 'Philippines', count: exchangeReviews.filter(e => e.type === 'philippines').length },
  { id: 'global', name: 'Global', count: exchangeReviews.filter(e => e.type === 'global').length },
  { id: 'exchange', name: 'Exchanges', count: exchangeReviews.filter(e => e.category === 'exchange').length },
  { id: 'bank-vasp', name: 'Bank VASPs', count: exchangeReviews.filter(e => e.category === 'bank-vasp').length },
  { id: 'e-wallet', name: 'E-Wallets', count: exchangeReviews.filter(e => e.category === 'e-wallet').length }
];

export function ExchangeReviewsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'rating' | 'reviews' | 'name'>('rating');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Set lastUpdated only on client side to avoid hydration mismatch
  useEffect(() => {
    setLastUpdated(new Date());
  }, []);

  // Filter and sort exchanges
  const filteredExchanges = exchangeReviews
    .filter(exchange => {
      const matchesSearch = !searchQuery || 
        exchange.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exchange.summary.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
        exchange.type === selectedCategory || 
        exchange.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.totalReviews - a.totalReviews;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'exchange': return Building2;
      case 'bank-vasp': return Shield;
      case 'e-wallet': return Smartphone;
      default: return Building2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'exchange': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'bank-vasp': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'e-wallet': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getTypeFlag = (type: string) => {
    if (type === 'philippines') {
      return (
        <div className="w-5 h-3 rounded-sm overflow-hidden shadow-sm border border-gray-200 dark:border-gray-600">
          <svg viewBox="0 0 24 16" className="w-full h-full">
            <rect x="0" y="0" width="24" height="8" fill="#0038A8" />
            <rect x="0" y="8" width="24" height="8" fill="#CE1126" />
            <polygon points="0,0 0,16 12,8" fill="#FFFFFF" />
          </svg>
        </div>
      );
    }
    return <Globe className="h-4 w-4 text-blue-500" />;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={cn(
          "h-4 w-4",
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : i < rating
            ? "fill-yellow-200 text-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        )} 
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Exchange Reviews
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Comprehensive reviews and ratings of cryptocurrency exchanges in the Philippines and worldwide. 
          Expert analysis, user reviews, and detailed comparisons to help you choose the best platform.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">{exchangeReviews.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
              {exchangeReviews.reduce((sum, e) => sum + e.totalReviews, 0).toLocaleString()}
            </div>
            <div className="text-sm text-[var(--color-text-secondary)]">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
              {(exchangeReviews.reduce((sum, e) => sum + e.rating, 0) / exchangeReviews.length).toFixed(1)}
            </div>
            <div className="text-sm text-[var(--color-text-secondary)]">Avg Rating</div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex items-center justify-center space-x-2 text-sm text-[var(--color-text-secondary)]">
          <Clock className="h-4 w-4" />
          <span>
            Reviews updated: {lastUpdated ? lastUpdated.toLocaleDateString('en-PH') : 'Loading...'}
          </span>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
              <Input
                placeholder="Search exchanges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl border-[var(--color-muted-subtle)] focus:border-[var(--color-primary-brand)]"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {reviewCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-xl"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-sm font-medium text-[var(--color-text-secondary)]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rating' | 'reviews' | 'name')}
                className="px-3 py-1 rounded-lg border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] text-sm"
              >
                <option value="rating">Highest Rating</option>
                <option value="reviews">Most Reviews</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <Badge variant="secondary" className="rounded-xl">
                {filteredExchanges.length} {filteredExchanges.length === 1 ? 'exchange' : 'exchanges'} found
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Rated Exchanges */}
      <Card className="rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-100 dark:from-yellow-950/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-yellow-900 dark:text-yellow-100 font-[var(--font-display)] flex items-center space-x-3">
            <Crown className="h-6 w-6" />
            <span>Editor's Choice - Top Rated</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {exchangeReviews
              .sort((a, b) => b.expertReview.score - a.expertReview.score)
              .slice(0, 3)
              .map((exchange, index) => (
                <div key={exchange.id} className="relative p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                  {/* Ranking Badge */}
                  <div className="absolute -top-3 -right-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">#{index + 1}</span>
                    </div>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <Building2 className="h-8 w-8 text-[var(--color-primary-brand)]" />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-1">
                        {exchange.name}
                      </h4>
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {renderStars(exchange.rating)}
                        <span className="ml-2 font-semibold text-yellow-800 dark:text-yellow-200">
                          {exchange.rating}
                        </span>
                      </div>
                      <Badge className={cn("text-xs", getCategoryColor(exchange.category))}>
                        {exchange.category.replace('-', ' ').toUpperCase()}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
                      {exchange.expertReview.summary}
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2">
                      {getTypeFlag(exchange.type)}
                      <span className="text-xs text-yellow-600 dark:text-yellow-400">
                        {exchange.type === 'philippines' ? 'Philippines' : 'Global'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Exchange Reviews Grid */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[var(--color-primary-brand)] rounded-xl">
            <Star className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            All Exchange Reviews
          </h2>
          <div className="flex-1 h-px bg-[var(--color-muted-subtle)]" />
          <Badge variant="secondary" className="rounded-xl">
            {filteredExchanges.length} platforms
          </Badge>
        </div>

        <div className="grid gap-6">
          {filteredExchanges.map((exchange) => {
            const CategoryIcon = getCategoryIcon(exchange.category);
            
            return (
              <Card 
                key={exchange.id}
                className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300 border border-[var(--color-muted-subtle)]"
              >
                <CardContent className="p-0">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
                            <CategoryIcon className="h-8 w-8 text-[var(--color-primary-brand)]" />
                          </div>
                          {exchange.verified && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                              {exchange.name}
                            </h3>
                            {getTypeFlag(exchange.type)}
                            <Badge className={cn("text-xs", getCategoryColor(exchange.category))}>
                              <CategoryIcon className="h-3 w-3 mr-1" />
                              {exchange.category.replace('-', ' ').toUpperCase()}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex items-center space-x-1">
                              {renderStars(exchange.rating)}
                              <span className="ml-2 font-bold text-lg">{exchange.rating}</span>
                            </div>
                            <span className="text-sm text-[var(--color-text-secondary)]">
                              ({exchange.totalReviews.toLocaleString()} reviews)
                            </span>
                            <Badge 
                              variant="secondary"
                              className={cn(
                                "text-xs",
                                exchange.availability.philippines 
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                              )}
                            >
                              {exchange.availability.philippines ? '🇵🇭 Available in PH' : '❌ Not in PH'}
                            </Badge>
                          </div>
                          
                          <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            {exchange.summary}
                          </p>
                        </div>
                      </div>

                      {/* Expert Score */}
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary-brand)] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">
                              {exchange.expertReview.score}
                            </div>
                            <div className="text-xs text-white/80">Expert</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                        <div className="text-lg font-bold text-[var(--color-text-primary)]">
                          {exchange.supportedCoins}
                        </div>
                        <div className="text-xs text-[var(--color-text-secondary)]">Coins</div>
                      </div>
                      
                      <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                        <div className="text-lg font-bold text-[var(--color-text-primary)]">
                          {exchange.dailyVolume}
                        </div>
                        <div className="text-xs text-[var(--color-text-secondary)]">Daily Volume</div>
                      </div>
                      
                      <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                        <div className="text-lg font-bold text-[var(--color-text-primary)]">
                          {exchange.userBase}
                        </div>
                        <div className="text-xs text-[var(--color-text-secondary)]">Users</div>
                      </div>
                      
                      <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                        <div className="text-lg font-bold text-[var(--color-text-primary)]">
                          {exchange.security.score}/10
                        </div>
                        <div className="text-xs text-[var(--color-text-secondary)]">Security</div>
                      </div>
                    </div>

                    {/* Detailed Information */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Pros and Cons */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center space-x-2">
                            <ThumbsUp className="h-4 w-4" />
                            <span>Pros</span>
                          </h4>
                          <ul className="space-y-2">
                            {exchange.pros.slice(0, 4).map((pro, index) => (
                              <li key={index} className="text-sm flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--color-text-secondary)]">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center space-x-2">
                            <ThumbsDown className="h-4 w-4" />
                            <span>Cons</span>
                          </h4>
                          <ul className="space-y-2">
                            {exchange.cons.slice(0, 4).map((con, index) => (
                              <li key={index} className="text-sm flex items-start space-x-2">
                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--color-text-secondary)]">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Key Information */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-[var(--color-primary-brand)]" />
                            <span>Fees & Costs</span>
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-[var(--color-text-secondary)]">Trading:</span>
                              <span className="font-medium text-[var(--color-text-primary)]">{exchange.fees.trading}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[var(--color-text-secondary)]">Withdrawal:</span>
                              <span className="font-medium text-[var(--color-text-primary)]">{exchange.fees.withdrawal}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[var(--color-text-secondary)]">Deposit:</span>
                              <span className="font-medium text-[var(--color-text-primary)]">{exchange.fees.deposit}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-[var(--color-primary-brand)]" />
                            <span>Security Features</span>
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {exchange.security.features.map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                            <MessageCircle className="h-4 w-4 text-[var(--color-primary-brand)]" />
                            <span>Customer Support</span>
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-[var(--color-text-secondary)]">Rating:</span>
                              <div className="flex items-center space-x-1">
                                {renderStars(exchange.customerSupport.rating)}
                                <span className="font-medium text-[var(--color-text-primary)]">
                                  {exchange.customerSupport.rating}
                                </span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[var(--color-text-secondary)]">Response:</span>
                              <span className="font-medium text-[var(--color-text-primary)]">
                                {exchange.customerSupport.responseTime}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User Reviews Breakdown */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                        <Users className="h-4 w-4 text-[var(--color-primary-brand)]" />
                        <span>User Reviews Breakdown</span>
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                          <div className="text-xl font-bold text-green-700 dark:text-green-300">
                            {exchange.userReviews.positive}%
                          </div>
                          <div className="text-xs text-green-600 dark:text-green-400">Positive</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 dark:bg-gray-950/30 rounded-lg">
                          <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                            {exchange.userReviews.neutral}%
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Neutral</div>
                        </div>
                        <div className="text-center p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                          <div className="text-xl font-bold text-red-700 dark:text-red-300">
                            {exchange.userReviews.negative}%
                          </div>
                          <div className="text-xs text-red-600 dark:text-red-400">Negative</div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Facts */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-[var(--color-primary-brand)]" />
                        <span>Quick Facts</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exchange.quickFacts.map((fact, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-[var(--color-muted-subtle)] text-[var(--color-text-secondary)]">
                            {fact}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                      <Button 
                        className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                        asChild
                      >
                        <Link href={`/exchanges/${exchange.type}#${exchange.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Full Review
                        </Link>
                      </Button>
                      
                      {exchange.affiliateLink && (
                        <Button 
                          variant="outline"
                          className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                          asChild
                        >
                          <a href={exchange.affiliateLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Exchange
                          </a>
                        </Button>
                      )}
                      
                      <Button 
                        variant="ghost"
                        size="sm"
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-brand)]"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Write Review
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Comparison Table */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <Target className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Quick Comparison</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-muted-subtle)]">
                  <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Exchange</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Rating</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Trading Fees</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Coins</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">PH Available</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Security</th>
                </tr>
              </thead>
              <tbody>
                {filteredExchanges.slice(0, 8).map((exchange) => (
                  <tr key={exchange.id} className="border-b border-[var(--color-muted-subtle)] hover:bg-[var(--color-muted-subtle)] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                          <Building2 className="h-4 w-4 text-[var(--color-primary-brand)]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--color-text-primary)]">{exchange.name}</div>
                          <div className="text-xs text-[var(--color-text-secondary)]">{exchange.type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{exchange.rating}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center font-medium">{exchange.fees.trading}</td>
                    <td className="p-4 text-center font-medium">{exchange.supportedCoins}</td>
                    <td className="p-4 text-center">
                      {exchange.availability.philippines ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <Badge 
                        variant="secondary"
                        className={cn(
                          "text-xs",
                          exchange.security.score >= 9 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                          exchange.security.score >= 8 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                          'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        )}
                      >
                        {exchange.security.score}/10
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Review Methodology */}
      <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-900 dark:text-blue-100 font-[var(--font-display)] flex items-center space-x-3">
            <Award className="h-6 w-6" />
            <span>Our Review Methodology</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
            Our comprehensive review process evaluates exchanges across multiple criteria to provide you with accurate, 
            unbiased assessments that help you make informed decisions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Security (30%)</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Cold storage, insurance, compliance, audit reports
              </p>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Fees (25%)</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Trading, withdrawal, deposit costs and transparency
              </p>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">User Experience (25%)</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Interface design, mobile app, ease of use
              </p>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Support (20%)</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Response time, channel availability, quality
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <Card className="rounded-2xl border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Review Disclaimer & Risk Warning
              </h3>
              <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                <p>
                  <strong>Affiliate Disclosure:</strong> DailyCrypto may receive compensation when you sign up through our affiliate links. 
                  This doesn't affect our reviews or rankings, which are based on objective criteria and user feedback.
                </p>
                <p>
                  <strong>Investment Risk:</strong> Cryptocurrency trading carries significant risks. Always conduct your own research, 
                  start with small amounts, and never invest more than you can afford to lose. Past performance doesn't guarantee future results.
                </p>
                <p>
                  <strong>Review Accuracy:</strong> Reviews are updated regularly but exchange features and fees may change. 
                  Always verify current information directly with the exchange before making decisions.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reading Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Star className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Reviews • {filteredExchanges.length} platforms
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}