"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Filter, Grid3x3 as Grid3X3, List, Search, Clock, User, Eye, Heart, MessageCircle, Share2, Bookmark, TrendingUp, TrendingDown, Zap, Star, Tag, ChevronRight, RefreshCw, Flame, Newspaper } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ClientRelativeTime } from '@/components/ui/client-relative-time';
import { ClientStaticDateFormatter } from '@/components/ui/client-static-date-formatter';

interface LatestNewsContentProps {
  articles: any[];
}

type ViewMode = 'magazine' | 'grid' | 'list';

interface ArticleEngagement {
  views: string;
  likes: string;
  shares: string;
  comments: string;
  trending?: boolean;
}

// Enhanced engagement data for articles
const articleEngagementData: Record<string, ArticleEngagement> = {
  'feat-1': { views: '45.2K', likes: '3.8K', shares: '2.1K', comments: '892', trending: true },
  'feat-2': { views: '38.7K', likes: '2.9K', shares: '1.8K', comments: '567', trending: true },
  'feat-3': { views: '29.1K', likes: '2.3K', shares: '1.4K', comments: '445' },
  'small-1': { views: '22.4K', likes: '1.9K', shares: '1.1K', comments: '334' },
  'small-2': { views: '31.8K', likes: '2.7K', shares: '1.6K', comments: '678', trending: true },
  'small-3': { views: '26.3K', likes: '2.1K', shares: '1.3K', comments: '423' },
  'small-4': { views: '19.7K', likes: '1.6K', shares: '0.9K', comments: '289' },
  'small-5': { views: '24.1K', likes: '2.0K', shares: '1.2K', comments: '356' },
  'small-6': { views: '18.9K', likes: '1.5K', shares: '0.8K', comments: '267' },
  'small-7': { views: '21.3K', likes: '1.8K', shares: '1.0K', comments: '312' },
  'small-8': { views: '17.6K', likes: '1.4K', shares: '0.7K', comments: '234' },
  'small-9': { views: '23.5K', likes: '1.9K', shares: '1.1K', comments: '378' },
  'small-10': { views: '20.8K', likes: '1.7K', shares: '0.9K', comments: '298' },
  'small-11': { views: '25.2K', likes: '2.1K', shares: '1.3K', comments: '401' },
  'small-12': { views: '19.4K', likes: '1.6K', shares: '0.8K', comments: '276' },
  'small-13': { views: '22.7K', likes: '1.8K', shares: '1.0K', comments: '345' },
  'small-14': { views: '27.3K', likes: '2.2K', shares: '1.4K', comments: '456' },
  'small-15': { views: '18.1K', likes: '1.5K', shares: '0.7K', comments: '223' },
  'small-16': { views: '21.9K', likes: '1.8K', shares: '1.0K', comments: '334' }
};

export function LatestNewsContent({ articles }: LatestNewsContentProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('magazine');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Set lastUpdated only on client side to avoid hydration mismatch
  useEffect(() => {
    setLastUpdated(new Date());
  }, []);

  const transformedArticles = articles.map(article => ({
    id: article._id,
    title: article.title,
    slug: article.slug?.current || article.slug,
    excerpt: article.excerpt || article.description,
    coverImage: article.coverImage,
    author: { name: article.author?.name || 'Unknown' },
    datePublished: article.datePublished,
    category: article.category || 'News',
    readingTime: article.readingTime || 3
  }));

  const filteredAndSortedArticles = transformedArticles.sort((a, b) =>
    new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  const handleRefresh = () => {
    setIsRefreshing(true);
    setLastUpdated(new Date());
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'bitcoin news':
      case 'market news':
      case 'price analysis':
        return TrendingUp;
      case 'technology':
      case 'defi':
        return Zap;
      case 'live updates':
        return Clock;
      default:
        return Tag;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'bitcoin news':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'altcoin news':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'market news':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'technology':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'defi':
        return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
      case 'live updates':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'gaming':
        return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300';
      case 'mining':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'security':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Enhanced Header with Live Stats */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Latest Crypto News
          </h1>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[var(--color-primary-brand)]">
              LIVE
            </span>
            <Badge variant="secondary" className="rounded-xl">
              {articles.length} stories
            </Badge>
          </div>
        </div>
        
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
          
          <span className="text-xs text-[var(--color-text-secondary)]">
            Updated: {lastUpdated ? (
              <ClientStaticDateFormatter date={lastUpdated} format="time" />
            ) : (
              'Loading...'
            )}
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="space-y-8">
        {/* Magazine View */}
        {viewMode === 'magazine' && (
          <div className="space-y-8">
            {/* Hero Article */}
            {filteredAndSortedArticles.length > 0 && (
              <Link href={`/news/${filteredAndSortedArticles[0].slug}`}>
                <Card className="group overflow-hidden rounded-3xl bg-[var(--color-surface)] hover:shadow-2xl transition-all duration-500 border border-[var(--color-muted-subtle)]">
                  <div className="relative aspect-[21/9] overflow-hidden">
                    <Image
                      src={filteredAndSortedArticles[0].coverImage}
                      alt={filteredAndSortedArticles[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-6 left-6 flex items-center space-x-3">
                      <Badge className="bg-[var(--color-primary-brand)] text-white shadow-lg">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <Badge className={cn("shadow-lg", getCategoryColor(filteredAndSortedArticles[0].category))}>
                        {filteredAndSortedArticles[0].category}
                      </Badge>
                      {articleEngagementData[filteredAndSortedArticles[0].id]?.trending && (
                        <Badge className="bg-red-500 text-white animate-pulse shadow-lg">
                          🔥 Trending
                        </Badge>
                      )}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-[var(--font-display)] leading-tight">
                        {filteredAndSortedArticles[0].title}
                      </h1>
                      <p className="text-white/90 text-lg mb-6 line-clamp-2 leading-relaxed">
                        {filteredAndSortedArticles[0].excerpt}
                      </p>
                      
                      {/* Article Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-white/80">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span className="text-sm font-medium">{filteredAndSortedArticles[0].author.name}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">
                              <ClientRelativeTime date={filteredAndSortedArticles[0].datePublished} />
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm">{filteredAndSortedArticles[0].readingTime} min read</span>
                          </div>
                        </div>
                        
                        {/* Engagement Stats */}
                        {articleEngagementData[filteredAndSortedArticles[0].id] && (
                          <div className="flex items-center space-x-4 text-white/80">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span className="text-sm">{articleEngagementData[filteredAndSortedArticles[0].id].views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span className="text-sm">{articleEngagementData[filteredAndSortedArticles[0].id].likes}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )}

            {/* Secondary Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedArticles.slice(1, 7).map((article) => (
                <Link key={article.id} href={`/news/${article.slug}`}>
                  <Card className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--color-muted-subtle)] h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className={cn("shadow-lg text-xs", getCategoryColor(article.category))}>
                          {article.category}
                        </Badge>
                      </div>

                      {/* Trending Indicator */}
                      {articleEngagementData[article.id]?.trending && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-red-500 text-white animate-pulse shadow-lg text-xs">
                            🔥
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)] leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
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
                              <ClientRelativeTime date={article.datePublished} />
                            </div>
                          </div>
                          <span className="font-medium">{article.readingTime} min</span>
                        </div>

                        {/* Engagement Metrics */}
                        {articleEngagementData[article.id] && (
                          <div className="flex items-center justify-between p-2 bg-[var(--color-muted-subtle)] rounded-lg">
                            <div className="flex items-center space-x-3 text-xs text-[var(--color-text-secondary)]">
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{articleEngagementData[article.id].views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="h-3 w-3" />
                                <span>{articleEngagementData[article.id].likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="h-3 w-3" />
                                <span>{articleEngagementData[article.id].comments}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Bookmark className="h-3 w-3" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Remaining Articles in Compact Format */}
            <div className="space-y-4">
              <Separator />
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
                <Newspaper className="h-6 w-6 text-[var(--color-primary-brand)]" />
                <span>More Stories</span>
              </h2>
              
              <div className="grid gap-4">
                {filteredAndSortedArticles.slice(7).map((article) => (
                  <Link key={article.id} href={`/news/${article.slug}`}>
                    <Card className="group overflow-hidden rounded-xl bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 border border-[var(--color-muted-subtle)]">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          {/* Thumbnail */}
                          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl">
                            <Image
                              src={article.coverImage}
                              alt={article.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              sizes="80px"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center space-x-2">
                              <Badge className={cn("text-xs", getCategoryColor(article.category))}>
                                {article.category}
                              </Badge>
                              {articleEngagementData[article.id]?.trending && (
                                <Badge className="bg-red-500 text-white text-xs animate-pulse">
                                  🔥 Trending
                                </Badge>
                              )}
                            </div>
                            
                            <h3 className="font-semibold text-base text-[var(--color-text-primary)] line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)]">
                              {article.title}
                            </h3>
                            
                            <p className="text-[var(--color-text-secondary)] text-sm line-clamp-1">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3 text-xs text-[var(--color-text-secondary)]">
                                <span>{article.author.name}</span>
                                <span>•</span>
                                <span>
                                  <ClientRelativeTime date={article.datePublished} />
                                </span>
                                <span>•</span>
                                <span>{article.readingTime} min</span>
                              </div>
                              
                              {articleEngagementData[article.id] && (
                                <div className="flex items-center space-x-2 text-xs text-[var(--color-text-secondary)]">
                                  <div className="flex items-center space-x-1">
                                    <Eye className="h-3 w-3" />
                                    <span>{articleEngagementData[article.id].views}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Heart className="h-3 w-3" />
                                    <span>{articleEngagementData[article.id].likes}</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.slug}`}>
                <Card className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--color-muted-subtle)] h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center space-x-2">
                      <Badge className={cn("shadow-lg text-xs", getCategoryColor(article.category))}>
                        {article.category}
                      </Badge>
                      {articleEngagementData[article.id]?.trending && (
                        <Badge className="bg-red-500 text-white animate-pulse shadow-lg text-xs">
                          🔥
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)] leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2 leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                        <div className="flex items-center space-x-3">
                          <span>{article.author.name}</span>
                          <span>•</span>
                          <span>
                            <ClientRelativeTime date={article.datePublished} />
                          </span>
                        </div>
                        <span className="font-medium">{article.readingTime} min</span>
                      </div>

                      {articleEngagementData[article.id] && (
                        <div className="flex items-center justify-between p-2 bg-[var(--color-muted-subtle)] rounded-lg">
                          <div className="flex items-center space-x-3 text-xs text-[var(--color-text-secondary)]">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{articleEngagementData[article.id].views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="h-3 w-3" />
                              <span>{articleEngagementData[article.id].likes}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Bookmark className="h-3 w-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredAndSortedArticles.map((article, index) => (
              <Link key={article.id} href={`/news/${article.slug}`}>
                <Card className="group overflow-hidden rounded-xl bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 border border-[var(--color-muted-subtle)]">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Article Number & Thumbnail */}
                      <div className="flex items-center space-x-4 flex-shrink-0">
                        <div className="w-8 h-8 bg-[var(--color-primary-brand)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                          <Image
                            src={article.coverImage}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="80px"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-2">
                          <Badge className={cn("text-xs", getCategoryColor(article.category))}>
                            {article.category}
                          </Badge>
                          {articleEngagementData[article.id]?.trending && (
                            <Badge className="bg-red-500 text-white text-xs animate-pulse">
                              🔥 Trending
                            </Badge>
                          )}
                          <span className="text-xs text-[var(--color-text-secondary)]">
                            <ClientRelativeTime date={article.datePublished} />
                          </span>
                        </div>
                        
                        <h3 className="font-bold text-xl text-[var(--color-text-primary)] line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)]">
                          {article.title}
                        </h3>
                        
                        <p className="text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-[var(--color-text-secondary)]">
                            <span>{article.author.name}</span>
                            <span>•</span>
                            <span>{article.readingTime} min read</span>
                          </div>
                          
                          {articleEngagementData[article.id] && (
                            <div className="flex items-center space-x-4 text-xs text-[var(--color-text-secondary)]">
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{articleEngagementData[article.id].views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="h-3 w-3" />
                                <span>{articleEngagementData[article.id].likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Share2 className="h-3 w-3" />
                                <span>{articleEngagementData[article.id].shares}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Load More Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-4">
          <Zap className="h-12 w-12 mx-auto text-[var(--color-primary-brand)]" />
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Stay Updated with More News
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Get the latest cryptocurrency news delivered to your inbox. Join thousands of readers staying informed about the crypto market.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
            >
              Load More Articles
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <Link href="/newsletter">
                Subscribe to Newsletter
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reading Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <div className="w-2 h-2 bg-[var(--color-primary-brand)] rounded-full animate-pulse" />
              <span className="text-[var(--color-text-secondary)]">
                {filteredAndSortedArticles.length} articles • {viewMode} view
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}