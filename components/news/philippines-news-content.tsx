"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Flag, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Zap, 
  Star, 
  Calendar, 
  Tag, 
  ChevronRight, 
  RefreshCw, 
  Flame, 
  Newspaper,
  Building2,
  Shield,
  Banknote,
  Smartphone,
  Users,
  Globe
} from 'lucide-react';
import { formatRelativeTime, formatDateTime } from '@/lib/format';
import { mockNewsPosts, latestCryptoNewsArticles } from '@/lib/content.mock';
import { latestNewsData } from '@/lib/latest-news-data';
import { cn } from '@/lib/utils';

// Philippines-specific news articles
const philippinesNewsArticles = [
  {
    id: 'ph-1',
    slug: 'bsp-digital-peso-pilot-program-launch',
    title: 'BSP Officially Launches Digital Peso Pilot Program with 50,000 Users',
    description: 'The Bangko Sentral ng Pilipinas begins comprehensive testing of its central bank digital currency with selected users across Metro Manila, marking a historic milestone for Philippine financial innovation.',
    excerpt: 'The Bangko Sentral ng Pilipinas begins comprehensive testing of its central bank digital currency with selected users across Metro Manila.',
    coverImage: 'https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      name: 'Maria Santos',
      bio: 'Senior crypto journalist covering Philippine blockchain and fintech developments.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'BSP & Regulation',
    datePublished: '2024-12-20T08:30:00Z',
    readingTime: 6,
    featured: true,
    tags: ['BSP', 'CBDC', 'Digital Peso', 'Pilot Program']
  },
  {
    id: 'ph-2',
    slug: 'gcash-maya-crypto-trading-integration',
    title: 'GCash and Maya Expand Crypto Trading Features for 100M+ Filipino Users',
    description: 'Popular e-wallets enhance cryptocurrency services with new trading pairs, lower fees, and improved user interfaces, making crypto more accessible to everyday Filipinos.',
    excerpt: 'Popular e-wallets enhance cryptocurrency services with new trading pairs, lower fees, and improved user interfaces.',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Juan Dela Cruz',
      bio: 'Cryptocurrency analyst and educator focused on helping Filipinos navigate the digital asset space.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Fintech & Mobile',
    datePublished: '2024-12-20T07:15:00Z',
    readingTime: 5,
    featured: true,
    tags: ['GCash', 'Maya', 'Mobile Trading', 'Fintech']
  },
  {
    id: 'ph-3',
    slug: 'philippine-banks-blockchain-remittance-pilot',
    title: 'Major Philippine Banks Launch Blockchain Remittance Pilot for OFWs',
    description: 'BDO, BPI, and Metrobank collaborate on revolutionary blockchain-powered remittance system that could reduce costs by 60% for overseas Filipino workers.',
    excerpt: 'BDO, BPI, and Metrobank collaborate on revolutionary blockchain-powered remittance system.',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Anna Reyes',
      bio: 'Blockchain technology specialist covering Southeast Asian cryptocurrency markets.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Banking & Remittance',
    datePublished: '2024-12-20T06:45:00Z',
    readingTime: 7,
    tags: ['Banks', 'Remittance', 'OFW', 'Blockchain']
  },
  {
    id: 'ph-4',
    slug: 'philippine-crypto-exchanges-security-upgrade',
    title: 'Philippine Crypto Exchanges Implement Enhanced Security Measures',
    description: 'Coins.ph, PDAX, and other local exchanges roll out advanced security protocols and insurance coverage to protect Filipino investors following global security concerns.',
    excerpt: 'Coins.ph, PDAX, and other local exchanges roll out advanced security protocols and insurance coverage.',
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Carlos Mendoza',
      bio: 'Market analyst specializing in Philippine cryptocurrency trading volumes and institutional adoption trends.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Security & Exchanges',
    datePublished: '2024-12-20T05:30:00Z',
    readingTime: 5,
    tags: ['Security', 'Exchanges', 'Coins.ph', 'PDAX']
  },
  {
    id: 'ph-5',
    slug: 'bir-crypto-tax-guidelines-2025',
    title: 'BIR Releases Updated Cryptocurrency Tax Guidelines for 2025',
    description: 'Bureau of Internal Revenue provides comprehensive framework for crypto taxation, offering clarity for Filipino traders and investors on compliance requirements.',
    excerpt: 'Bureau of Internal Revenue provides comprehensive framework for crypto taxation.',
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Maria Santos',
      bio: 'Senior crypto journalist covering Philippine blockchain and fintech developments.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Tax & Compliance',
    datePublished: '2024-12-20T04:00:00Z',
    readingTime: 8,
    tags: ['BIR', 'Taxation', 'Compliance', 'Guidelines']
  },
  {
    id: 'ph-6',
    slug: 'philippine-blockchain-week-2025-speakers',
    title: 'Philippine Blockchain Week 2025 Announces International Speaker Lineup',
    description: 'Industry leaders from Coinbase, Binance, and major local exchanges confirmed for Manila\'s premier blockchain conference, highlighting Philippines as regional crypto hub.',
    excerpt: 'Industry leaders from Coinbase, Binance, and major local exchanges confirmed for Manila\'s premier blockchain conference.',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Juan Dela Cruz',
      bio: 'Cryptocurrency analyst and educator focused on helping Filipinos navigate the digital asset space.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Events & Community',
    datePublished: '2024-12-20T03:15:00Z',
    readingTime: 4,
    tags: ['Blockchain Week', 'Conference', 'Manila', 'Events']
  },
  {
    id: 'ph-7',
    slug: 'philippine-smes-bitcoin-adoption',
    title: 'Philippine SMEs Increasingly Adopt Bitcoin for Cross-Border Payments',
    description: 'Small and medium enterprises across the Philippines leverage cryptocurrency to reduce remittance costs and speed up international business transactions.',
    excerpt: 'Small and medium enterprises across the Philippines leverage cryptocurrency to reduce remittance costs.',
    coverImage: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Anna Reyes',
      bio: 'Blockchain technology specialist covering Southeast Asian cryptocurrency markets.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Business & SME',
    datePublished: '2024-12-20T02:45:00Z',
    readingTime: 6,
    tags: ['SME', 'Bitcoin', 'Business', 'Payments']
  },
  {
    id: 'ph-8',
    slug: 'filipino-artists-solana-nft-marketplace',
    title: 'Filipino Artists Embrace Solana NFTs as Digital Art Market Expands',
    description: 'Local creators increasingly turn to Solana blockchain for minting and selling digital art collections, with several Filipino artists gaining international recognition.',
    excerpt: 'Local creators increasingly turn to Solana blockchain for minting and selling digital art collections.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Carlos Mendoza',
      bio: 'Market analyst specializing in Philippine cryptocurrency trading volumes and institutional adoption trends.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'NFT & Digital Art',
    datePublished: '2024-12-20T01:30:00Z',
    readingTime: 5,
    tags: ['NFT', 'Solana', 'Filipino Artists', 'Digital Art']
  },
  {
    id: 'ph-9',
    slug: 'philippine-crypto-trading-volume-record',
    title: 'Philippine Crypto Market Reaches Record High Trading Volume',
    description: 'Local cryptocurrency exchanges report unprecedented trading activity as retail and institutional investors increase their digital asset allocations amid regulatory clarity.',
    excerpt: 'Local cryptocurrency exchanges report unprecedented trading activity as retail and institutional investors increase allocations.',
    coverImage: 'https://images.unsplash.com/photo-1627686981794-b6505f51024f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: {
      name: 'Maria Santos',
      bio: 'Senior crypto journalist covering Philippine blockchain and fintech developments.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Market & Trading',
    datePublished: '2024-12-20T00:15:00Z',
    readingTime: 6,
    tags: ['Trading Volume', 'Market', 'Exchanges', 'Philippines']
  },
  {
    id: 'ph-10',
    slug: 'cardano-philippine-universities-partnership',
    title: 'Cardano Foundation Partners with Philippine Universities for Blockchain Education',
    description: 'Major blockchain education initiative aims to train the next generation of Filipino developers and entrepreneurs in decentralized technology.',
    excerpt: 'Major blockchain education initiative aims to train the next generation of Filipino developers and entrepreneurs.',
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Juan Dela Cruz',
      bio: 'Cryptocurrency analyst and educator focused on helping Filipinos navigate the digital asset space.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Education & Development',
    datePublished: '2024-12-19T23:00:00Z',
    readingTime: 5,
    tags: ['Cardano', 'Education', 'Universities', 'Blockchain']
  },
  {
    id: 'ph-11',
    slug: 'philippine-peso-stablecoin-pilot-testing',
    title: 'Philippine Peso Stablecoin Pilot Begins Testing Phase',
    description: 'Local consortium launches PHP-pegged digital currency for domestic e-commerce use, potentially transforming digital payments in the Philippines.',
    excerpt: 'Local consortium launches PHP-pegged digital currency for domestic e-commerce use.',
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Anna Reyes',
      bio: 'Blockchain technology specialist covering Southeast Asian cryptocurrency markets.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Innovation & Fintech',
    datePublished: '2024-12-19T22:30:00Z',
    readingTime: 4,
    tags: ['Stablecoin', 'PHP', 'E-commerce', 'Digital Currency']
  },
  {
    id: 'ph-12',
    slug: 'lightning-network-adoption-philippine-merchants',
    title: 'Lightning Network Adoption Grows Among Philippine Merchants',
    description: 'Local businesses increasingly accept Bitcoin payments via Lightning Network for faster transactions, reducing costs and improving customer experience.',
    excerpt: 'Local businesses increasingly accept Bitcoin payments via Lightning Network for faster transactions.',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Carlos Mendoza',
      bio: 'Market analyst specializing in Philippine cryptocurrency trading volumes and institutional adoption trends.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Payments & Adoption',
    datePublished: '2024-12-19T21:45:00Z',
    readingTime: 4,
    tags: ['Lightning Network', 'Bitcoin', 'Merchants', 'Payments']
  }
];

// Enhanced engagement data for Philippines articles
const philippinesEngagementData: Record<string, any> = {
  'ph-1': { views: '52.3K', likes: '4.2K', shares: '2.8K', comments: '1.1K', trending: true },
  'ph-2': { views: '48.7K', likes: '3.9K', shares: '2.4K', comments: '892', trending: true },
  'ph-3': { views: '41.2K', likes: '3.1K', shares: '2.0K', comments: '678' },
  'ph-4': { views: '35.8K', likes: '2.7K', shares: '1.6K', comments: '534' },
  'ph-5': { views: '39.4K', likes: '3.0K', shares: '1.9K', comments: '723' },
  'ph-6': { views: '28.9K', likes: '2.3K', shares: '1.4K', comments: '445' },
  'ph-7': { views: '33.6K', likes: '2.5K', shares: '1.7K', comments: '567' },
  'ph-8': { views: '26.1K', likes: '2.1K', shares: '1.2K', comments: '389' },
  'ph-9': { views: '44.7K', likes: '3.4K', shares: '2.2K', comments: '812' },
  'ph-10': { views: '31.5K', likes: '2.4K', shares: '1.5K', comments: '456' },
  'ph-11': { views: '37.2K', likes: '2.8K', shares: '1.8K', comments: '634' },
  'ph-12': { views: '29.8K', likes: '2.2K', shares: '1.3K', comments: '423' }
};

export function PhilippinesNewsContent() {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Set lastUpdated only on client side to avoid hydration mismatch
  useEffect(() => {
    setLastUpdated(new Date());
  }, []);

  const allPhilippinesArticles = philippinesNewsArticles;
  const featuredArticles = allPhilippinesArticles.filter(article => article.featured);
  const regularArticles = allPhilippinesArticles.filter(article => !article.featured);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setLastUpdated(new Date());
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'bsp & regulation':
        return Shield;
      case 'fintech & mobile':
        return Smartphone;
      case 'banking & remittance':
        return Building2;
      case 'security & exchanges':
        return Shield;
      case 'tax & compliance':
        return Banknote;
      case 'events & community':
        return Users;
      case 'business & sme':
        return Building2;
      case 'nft & digital art':
        return Star;
      case 'market & trading':
        return TrendingUp;
      case 'education & development':
        return Globe;
      case 'innovation & fintech':
        return Zap;
      case 'payments & adoption':
        return Banknote;
      default:
        return Tag;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'bsp & regulation':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'fintech & mobile':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'banking & remittance':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'security & exchanges':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'tax & compliance':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'events & community':
        return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300';
      case 'business & sme':
        return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
      case 'nft & digital art':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'market & trading':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300';
      case 'education & development':
        return 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300';
      case 'innovation & fintech':
        return 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300';
      case 'payments & adoption':
        return 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Enhanced Header with Philippine Flag and Live Stats */}
      <div className="text-center space-y-6">
        {/* Last Updated */}
        <div className="flex items-center justify-center space-x-2 text-sm text-[var(--color-text-secondary)]">
          <Clock className="h-4 w-4" />
          <span>
            Last updated: {lastUpdated ? lastUpdated.toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila' }) : 'Loading...'} Manila Time
          </span>
        </div>
      </div>

      {/* Featured Philippines Stories */}
      {featuredArticles.length > 0 && (
        <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/20 dark:to-red-950/20 border border-blue-200 dark:border-blue-800 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-xl">
                <Star className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                Featured Philippines Stories
              </h2>
              <Badge className="bg-gradient-to-r from-blue-500 to-red-500 text-white animate-pulse">
                🇵🇭 FEATURED
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Link key={article.id} href={`/news/${article.slug}`}>
                  <Card className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--color-muted-subtle)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={cn("shadow-lg text-xs", getCategoryColor(article.category))}>
                          {article.category}
                        </Badge>
                      </div>

                      {/* Featured Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg text-xs animate-pulse">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>

                      {/* Philippines Flag Overlay */}
                      <div className="absolute bottom-3 left-3">
                        <div className="w-6 h-4 rounded-sm overflow-hidden shadow-lg border border-white/20">
                          <svg viewBox="0 0 24 16" className="w-full h-full">
                            <rect x="0" y="0" width="24" height="8" fill="#0038A8" />
                            <rect x="0" y="8" width="24" height="8" fill="#CE1126" />
                            <polygon points="0,0 0,16 12,8" fill="#FFFFFF" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-bold text-xl text-[var(--color-text-primary)] line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)] leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-[var(--color-text-secondary)] text-sm line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      {/* Article Footer */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{article.author.name}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{formatRelativeTime(article.datePublished)}</span>
                            </div>
                          </div>
                          <span className="font-medium">{article.readingTime} min</span>
                        </div>

                        {/* Engagement Metrics */}
                        {philippinesEngagementData[article.id] && (
                          <div className="flex items-center justify-between p-2 bg-[var(--color-muted-subtle)] rounded-lg">
                            <div className="flex items-center space-x-3 text-xs text-[var(--color-text-secondary)]">
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{philippinesEngagementData[article.id].views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="h-3 w-3" />
                                <span>{philippinesEngagementData[article.id].likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="h-3 w-3" />
                                <span>{philippinesEngagementData[article.id].comments}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Bookmark className="h-3 w-3" />
                            </Button>
                          </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {article.tags.slice(0, 3).map((tag, tagIndex) => (
                            <Badge key={`${article.id}-tag-${tagIndex}`} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Philippines Articles */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[var(--color-primary-brand)] rounded-xl">
            <Newspaper className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Latest Philippines News
          </h2>
          <div className="flex-1 h-px bg-[var(--color-muted-subtle)]" />
          <Badge variant="secondary" className="rounded-xl">
            {regularArticles.length} articles
          </Badge>
        </div>

        <div className="grid gap-6">
          {allPhilippinesArticles.map((article) => {
            const CategoryIcon = getCategoryIcon(article.category);
            
            return (
              <Link key={article.id} href={`/news/${article.slug}`}>
                <Card className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--color-muted-subtle)]">
                  <CardContent className="p-0">
                    <div className="flex gap-6 p-6">
                      {/* Article Image */}
                      <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-xl shadow-lg">
                        <Image
                          src={article.coverImage}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="192px"
                        />
                        <Badge 
                          className={cn("absolute top-2 left-2 text-xs shadow-lg", getCategoryColor(article.category))}
                        >
                          <CategoryIcon className="h-3 w-3 mr-1" />
                          {article.category}
                        </Badge>
                        
                        {/* Philippines Flag Corner */}
                        <div className="absolute bottom-2 right-2">
                          <div className="w-5 h-3 rounded-sm overflow-hidden shadow-lg border border-white/50">
                            <svg viewBox="0 0 24 16" className="w-full h-full">
                              <rect x="0" y="0" width="24" height="8" fill="#0038A8" />
                              <rect x="0" y="8" width="24" height="8" fill="#CE1126" />
                              <polygon points="0,0 0,16 12,8" fill="#FFFFFF" />
                            </svg>
                          </div>
                        </div>

                        {/* Trending Indicator */}
                        {philippinesEngagementData[article.id]?.trending && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-red-500 text-white text-xs animate-pulse shadow-lg">
                              🔥 Trending
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Article Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-2 text-xs text-[var(--color-text-secondary)]">
                          <Clock className="h-3 w-3" />
                          <span>{formatDateTime(article.datePublished)}</span>
                          <span>•</span>
                          <span>{formatRelativeTime(article.datePublished)}</span>
                          <span>•</span>
                          <span>{article.readingTime} min read</span>
                        </div>

                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                          {article.description}
                        </p>

                        {/* Engagement Metrics */}
                        {philippinesEngagementData[article.id] && (
                          <div className="flex items-center space-x-4 text-xs text-[var(--color-text-secondary)] bg-[var(--color-muted-subtle)] rounded-lg px-3 py-2">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{philippinesEngagementData[article.id].views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="h-3 w-3" />
                              <span>{philippinesEngagementData[article.id].likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-3 w-3" />
                              <span>{philippinesEngagementData[article.id].comments}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Share2 className="h-3 w-3" />
                              <span>{philippinesEngagementData[article.id].shares}</span>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-sm text-[var(--color-text-secondary)]">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{article.author.name}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span>Tags:</span>
                              <div className="flex space-x-1">
                                {article.tags.slice(0, 2).map((tag, tagIndex) => (
                                  <Badge key={`${article.id}-tag-${tagIndex}`} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-[var(--color-primary-brand)] hover:text-[var(--color-primary-brand)]/80"
                          >
                            Read Article
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Philippines Crypto Insights */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-12 mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-600">
            <svg viewBox="0 0 24 16" className="w-full h-full">
              <rect x="0" y="0" width="24" height="8" fill="#0038A8" />
              <rect x="0" y="8" width="24" height="8" fill="#CE1126" />
              <polygon points="0,0 0,16 12,8" fill="#FFFFFF" />
              <g transform="translate(6, 8)">
                <circle cx="0" cy="0" r="1.2" fill="#FECA57" />
                <g stroke="#FECA57" strokeWidth="0.25" fill="#FECA57">
                  <line x1="0" y1="-2.4" x2="0" y2="-1.8" />
                  <line x1="1.7" y1="-1.7" x2="1.2" y2="-1.2" />
                  <line x1="2.4" y1="0" x2="1.8" y2="0" />
                  <line x1="1.7" y1="1.7" x2="1.2" y2="1.2" />
                  <line x1="0" y1="2.4" x2="0" y2="1.8" />
                  <line x1="-1.7" y1="1.7" x2="-1.2" y2="1.2" />
                  <line x1="-2.4" y1="0" x2="-1.8" y2="0" />
                  <line x1="-1.7" y1="-1.7" x2="-1.2" y2="-1.2" />
                </g>
              </g>
              <g fill="#FECA57">
                <polygon points="3.2,3.2 3.4,3.8 4,3.8 3.6,4.2 3.8,4.8 3.2,4.6 2.6,4.8 2.8,4.2 2.4,3.8 3,3.8" transform="scale(0.5)" />
                <polygon points="3.2,12.8 3.4,13.4 4,13.4 3.6,13.8 3.8,14.4 3.2,14.2 2.6,14.4 2.8,13.8 2.4,13.4 3,13.4" transform="scale(0.5)" />
                <polygon points="8,12.8 8.2,13.4 8.8,13.4 8.4,13.8 8.6,14.4 8,14.2 7.4,14.4 7.6,13.8 7.2,13.4 7.8,13.4" transform="scale(0.5)" />
              </g>
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Stay Connected with Philippine Crypto
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Get exclusive insights into the Philippine cryptocurrency market, BSP regulations, 
            and local adoption trends delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/news">
                All Crypto News
              </Link>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <Link href="/newsletter">
                Subscribe for PH Updates
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-sm text-[var(--color-text-secondary)]">
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--color-primary-brand)]">
                {allPhilippinesArticles.length}
              </div>
              <div className="text-xs">PH Stories</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--color-primary-brand)]">
                24/7
              </div>
              <div className="text-xs">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[var(--color-primary-brand)]">
                🇵🇭
              </div>
              <div className="text-xs">Local Focus</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reading Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Flag className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Philippines • {allPhilippinesArticles.length} stories
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}