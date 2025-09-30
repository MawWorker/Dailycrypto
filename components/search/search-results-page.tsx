"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Filter,
  Grid3X3,
  List,
  RefreshCw,
  Sparkles,
  TrendingUp,
  BookOpen,
  FileText,
  Zap,
  Eye,
  Heart,
  MessageCircle,
  Star,
  ChevronRight,
  Target,
  Compass,
  Hash,
  Globe,
  Flame,
  Award
} from 'lucide-react';
import { mockNewsPosts, mockGuides } from '@/lib/content.mock';
import { formatRelativeTime } from '@/lib/format';
import { cn } from '@/lib/utils';

interface SearchResult {
  type: 'article' | 'guide' | 'page';
  title: string;
  description: string;
  url: string;
  category?: string;
  author?: string;
  publishedAt?: string;
  image?: string;
  tags?: string[];
  readingTime?: number;
  featured?: boolean;
}

export function SearchResultsPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);
    if (searchQuery) {
      performSearch(searchQuery);
    }
  }, [searchParams]);

  const performSearch = async (searchQuery: string) => {
    setIsLoading(true);
    
    // Simulate search delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const searchResults: SearchResult[] = [];
    const searchTerm = searchQuery.toLowerCase();
    
    // Search through news articles
    mockNewsPosts.forEach(post => {
      if (
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        post.category.toLowerCase().includes(searchTerm) ||
        post.author.name.toLowerCase().includes(searchTerm)
      ) {
        searchResults.push({
          type: 'article',
          title: post.title,
          description: post.description,
          url: `/news/${post.slug}`,
          category: post.category,
          author: post.author.name,
          publishedAt: post.datePublished,
          image: post.coverImage,
          tags: post.tags,
          readingTime: typeof post.readingTime === 'number' ? post.readingTime : 5,
          featured: post.featured
        });
      }
    });
    
    // Search through guides
    mockGuides.forEach(guide => {
      if (
        guide.title.toLowerCase().includes(searchTerm) ||
        guide.description.toLowerCase().includes(searchTerm) ||
        guide.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        guide.category.toLowerCase().includes(searchTerm) ||
        guide.author.name.toLowerCase().includes(searchTerm)
      ) {
        searchResults.push({
          type: 'guide',
          title: guide.title,
          description: guide.description,
          url: `/guides/${guide.slug}`,
          category: guide.category,
          author: guide.author.name,
          publishedAt: guide.datePublished,
          image: guide.coverImage,
          tags: guide.tags,
          readingTime: parseInt(guide.readingTime.replace(' min read', ''))
        });
      }
    });
    
    // Add static pages that might match
    const staticPages = [
      { 
        title: 'Live Crypto Prices', 
        description: 'Real-time cryptocurrency prices and market data for top 100 coins with advanced filtering and sorting', 
        url: '/prices', 
        type: 'page' as const,
        category: 'Market Data',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Market Overview', 
        description: 'Comprehensive cryptocurrency market analysis, trends, and sector performance data', 
        url: '/markets/overview', 
        type: 'page' as const,
        category: 'Market Analysis',
        image: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Philippines Crypto Exchanges', 
        description: 'Complete guide to cryptocurrency exchanges available in the Philippines with reviews and comparisons', 
        url: '/exchanges/philippines', 
        type: 'page' as const,
        category: 'Exchanges',
        image: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Hardware Wallets Guide', 
        description: 'Best cryptocurrency hardware wallets for security with setup guides and expert reviews', 
        url: '/wallets/hardware', 
        type: 'page' as const,
        category: 'Security',
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Newsletter Subscription', 
        description: 'Subscribe to daily crypto news updates and market insights delivered to your inbox', 
        url: '/newsletter', 
        type: 'page' as const,
        category: 'Newsletter',
        image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Today\'s Crypto Recap', 
        description: 'Comprehensive daily summary of cryptocurrency news and market developments', 
        url: '/daily/today', 
        type: 'page' as const,
        category: 'Daily Summary',
        image: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ];
    
    staticPages.forEach(page => {
      if (
        page.title.toLowerCase().includes(searchTerm) ||
        page.description.toLowerCase().includes(searchTerm) ||
        page.category.toLowerCase().includes(searchTerm)
      ) {
        searchResults.push(page);
      }
    });
    
    // Sort results by relevance (exact title matches first, then partial matches)
    searchResults.sort((a, b) => {
      const aExactTitle = a.title.toLowerCase() === searchTerm ? 3 : 0;
      const bExactTitle = b.title.toLowerCase() === searchTerm ? 3 : 0;
      const aPartialTitle = a.title.toLowerCase().includes(searchTerm) ? 2 : 0;
      const bPartialTitle = b.title.toLowerCase().includes(searchTerm) ? 2 : 0;
      const aFeatured = a.featured ? 1 : 0;
      const bFeatured = b.featured ? 1 : 0;
      
      return (bExactTitle + bPartialTitle + bFeatured) - (aExactTitle + aPartialTitle + aFeatured);
    });
    
    setResults(searchResults);
    setIsLoading(false);
  };

  const handleNewSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch(query.trim());
      // Update URL without page reload
      window.history.pushState({}, '', `/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  // Filter results by type and category
  const filteredResults = results.filter(result => {
    const typeMatch = selectedType === 'all' || result.type === selectedType;
    const categoryMatch = selectedCategory === 'all' || result.category === selectedCategory;
    return typeMatch && categoryMatch;
  });

  // Get unique categories for filter
  const categories = Array.from(new Set(results.map(r => r.category).filter(Boolean)));

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return '📰';
      case 'guide': return '📚';
      case 'page': return '📄';
      default: return '🔍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'guide': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'page': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = [
      'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
      'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
      'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
      'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
    ];
    return colors[category?.length % colors.length] || colors[0];
  };

  return (
    <div className="space-y-8">
      {/* Enhanced Search Header */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--color-primary-brand)]/10 to-purple-500/10 px-6 py-3 rounded-2xl border border-[var(--color-primary-brand)]/20 shadow-lg">
          <Search className="h-5 w-5 text-[var(--color-primary-brand)]" />
          <span className="text-base font-semibold text-[var(--color-primary-brand)]">
            Search DailyCrypto • {results.length} Results Found
          </span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Search Results
        </h1>
        
        {query && (
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {isLoading ? 'Searching for' : 'Results for'} "<span className="font-semibold text-[var(--color-primary-brand)]">{query}</span>"
          </p>
        )}
      </div>

      {/* Enhanced Search Form */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardContent className="p-6">
          <form onSubmit={handleNewSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-secondary)]" />
              <Input
                placeholder="Search articles, guides, market data, and more..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-4 h-14 text-lg rounded-2xl border-[var(--color-muted-subtle)] focus:border-[var(--color-primary-brand)] focus:ring-2 focus:ring-[var(--color-primary-brand)]/20 bg-[var(--color-background-site)]"
              />
              <Button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90"
              >
                Search
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Advanced Filters */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filter Controls */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Content Type Filter */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Content Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-2 rounded-2xl border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] focus:border-[var(--color-primary-brand)] focus:ring-2 focus:ring-[var(--color-primary-brand)]/20"
                >
                  <option value="all">All Content</option>
                  <option value="article">📰 Articles</option>
                  <option value="guide">📚 Guides</option>
                  <option value="page">📄 Pages</option>
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-2xl border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] focus:border-[var(--color-primary-brand)] focus:ring-2 focus:ring-[var(--color-primary-brand)]/20"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                  View Mode
                </label>
                <div className="flex bg-[var(--color-muted-subtle)] rounded-2xl p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="flex-1 rounded-xl"
                  >
                    <Grid3X3 className="h-4 w-4 mr-2" />
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="flex-1 rounded-xl"
                  >
                    <List className="h-4 w-4 mr-2" />
                    List
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                  {filteredResults.length}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">Results</div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                  {filteredResults.filter(r => r.type === 'article').length}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                  {filteredResults.filter(r => r.type === 'guide').length}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">Guides</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      {isLoading ? (
        <div className="space-y-6">
          <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
            <CardContent className="p-12 text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-[var(--color-primary-brand)]/10 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[var(--color-primary-brand)]/30 border-t-[var(--color-primary-brand)] rounded-full animate-spin" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Searching...</h3>
              <p className="text-[var(--color-text-secondary)]">
                Finding the best results for "{query}"
              </p>
            </CardContent>
          </Card>
        </div>
      ) : filteredResults.length === 0 && query ? (
        <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
          <CardContent className="p-12 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">No Results Found</h3>
            <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">
              We couldn't find any results for "<span className="font-semibold">{query}</span>". 
              Try different keywords or browse our popular content below.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">Try These Popular Searches:</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Bitcoin', 'Ethereum', 'BSP', 'DeFi', 'NFT', 'Wallet', 'Trading', 'Philippines'].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setQuery(suggestion);
                      performSearch(suggestion);
                      window.history.pushState({}, '', `/search?q=${encodeURIComponent(suggestion)}`);
                    }}
                    className="rounded-2xl hover:bg-[var(--color-primary-brand)] hover:text-white hover:border-[var(--color-primary-brand)]"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ) : query && !isLoading ? (
        <div className="space-y-8">
          {/* Featured Results */}
          {filteredResults.some(r => r.featured) && (
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                  Featured Results
                </h2>
                <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white animate-pulse">
                  ⭐ Top Match
                </Badge>
              </div>

              <div className="grid gap-6">
                {filteredResults.filter(r => r.featured).slice(0, 2).map((result, index) => (
                  <Link key={`featured-${index}`} href={result.url}>
                    <Card className="group overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-100 dark:from-yellow-950/20 dark:to-amber-900/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-yellow-200 dark:border-yellow-800">
                      <CardContent className="p-0">
                        <div className="grid lg:grid-cols-3 gap-0">
                          {/* Image Section */}
                          {result.image && (
                            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[200px] overflow-hidden">
                              <Image
                                src={result.image}
                                alt={result.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                              
                              <div className="absolute top-3 left-3 flex items-center space-x-2">
                                <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg">
                                  <Star className="h-3 w-3 mr-1" />
                                  Featured
                                </Badge>
                                <Badge className={cn("shadow-lg text-xs", getTypeColor(result.type))}>
                                  {result.type}
                                </Badge>
                              </div>
                            </div>
                          )}

                          {/* Content Section */}
                          <div className={cn("p-6 flex flex-col justify-center", result.image ? "lg:col-span-2" : "lg:col-span-3")}>
                            <div className="space-y-4">
                              <div className="flex items-center space-x-2">
                                <span className="text-2xl">{getTypeIcon(result.type)}</span>
                                {result.category && (
                                  <Badge className={cn("text-xs", getCategoryColor(result.category))}>
                                    {result.category}
                                  </Badge>
                                )}
                              </div>

                              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] leading-tight group-hover:text-[var(--color-primary-brand)] transition-colors">
                                {result.title}
                              </h3>

                              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                                {result.description}
                              </p>

                              {/* Meta Information */}
                              <div className="flex items-center space-x-4 text-sm text-[var(--color-text-secondary)]">
                                {result.author && (
                                  <div className="flex items-center space-x-1">
                                    <User className="h-4 w-4" />
                                    <span>{result.author}</span>
                                  </div>
                                )}
                                {result.publishedAt && (
                                  <div className="flex items-center space-x-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{formatRelativeTime(result.publishedAt)}</span>
                                  </div>
                                )}
                                {result.readingTime && (
                                  <div className="flex items-center space-x-1">
                                    <BookOpen className="h-4 w-4" />
                                    <span>{result.readingTime} min read</span>
                                  </div>
                                )}
                              </div>

                              {/* Tags */}
                              {result.tags && result.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {result.tags.slice(0, 4).map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="outline" className="text-xs rounded-xl">
                                      {tag}
                                    </Badge>
                                  ))}
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
          )}

          {/* Regular Results */}
          {filteredResults.filter(r => !r.featured).length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[var(--color-primary-brand)] rounded-xl">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                    All Results
                  </h2>
                  <Badge variant="secondary" className="rounded-xl">
                    {filteredResults.filter(r => !r.featured).length} items
                  </Badge>
                </div>
              </div>

              {/* Grid View */}
              {viewMode === 'grid' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResults.filter(r => !r.featured).map((result, index) => (
                    <Link key={index} href={result.url}>
                      <Card className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--color-muted-subtle)] h-full">
                        {result.image && (
                          <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                              src={result.image}
                              alt={result.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            
                            <div className="absolute top-3 left-3 flex items-center space-x-2">
                              <Badge className={cn("shadow-lg text-xs", getTypeColor(result.type))}>
                                <span className="mr-1">{getTypeIcon(result.type)}</span>
                                {result.type}
                              </Badge>
                            </div>
                          </div>
                        )}
                        
                        <CardContent className="p-6 flex-1 flex flex-col">
                          {!result.image && (
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="text-2xl">{getTypeIcon(result.type)}</span>
                              <Badge className={cn("text-xs", getTypeColor(result.type))}>
                                {result.type}
                              </Badge>
                            </div>
                          )}
                          
                          <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)] leading-tight">
                            {result.title}
                          </h3>
                          
                          <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                            {result.description}
                          </p>
                          
                          <div className="space-y-3">
                            {/* Meta Information */}
                            {(result.author || result.publishedAt || result.readingTime) && (
                              <div className="flex items-center space-x-3 text-xs text-[var(--color-text-secondary)]">
                                {result.author && (
                                  <div className="flex items-center space-x-1">
                                    <User className="h-3 w-3" />
                                    <span>{result.author}</span>
                                  </div>
                                )}
                                {result.publishedAt && (
                                  <div className="flex items-center space-x-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{formatRelativeTime(result.publishedAt)}</span>
                                  </div>
                                )}
                                {result.readingTime && (
                                  <div className="flex items-center space-x-1">
                                    <BookOpen className="h-3 w-3" />
                                    <span>{result.readingTime} min</span>
                                  </div>
                                )}
                              </div>
                            )}
                            
                            {/* Category and Tags */}
                            <div className="flex items-center justify-between">
                              {result.category && (
                                <Badge className={cn("text-xs", getCategoryColor(result.category))}>
                                  {result.category}
                                </Badge>
                              )}
                              <ChevronRight className="h-4 w-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary-brand)] transition-colors" />
                            </div>
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
                  {filteredResults.filter(r => !r.featured).map((result, index) => (
                    <Link key={index} href={result.url}>
                      <Card className="group rounded-2xl bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 border border-[var(--color-muted-subtle)]">
                        <CardContent className="p-6">
                          <div className="flex space-x-6">
                            {/* Result Image */}
                            {result.image && (
                              <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded-xl">
                                <Image
                                  src={result.image}
                                  alt={result.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                  sizes="96px"
                                />
                              </div>
                            )}
                            
                            {/* Result Content */}
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg">{getTypeIcon(result.type)}</span>
                                <Badge className={cn("text-xs", getTypeColor(result.type))}>
                                  {result.type}
                                </Badge>
                                {result.category && (
                                  <Badge className={cn("text-xs", getCategoryColor(result.category))}>
                                    {result.category}
                                  </Badge>
                                )}
                              </div>
                              
                              <h3 className="font-bold text-xl text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)] line-clamp-2">
                                {result.title}
                              </h3>
                              
                              <p className="text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                                {result.description}
                              </p>
                              
                              {/* Meta Information */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-[var(--color-text-secondary)]">
                                  {result.author && (
                                    <div className="flex items-center space-x-1">
                                      <User className="h-3 w-3" />
                                      <span>{result.author}</span>
                                    </div>
                                  )}
                                  {result.publishedAt && (
                                    <div className="flex items-center space-x-1">
                                      <Clock className="h-3 w-3" />
                                      <span>{formatRelativeTime(result.publishedAt)}</span>
                                    </div>
                                  )}
                                  {result.readingTime && (
                                    <div className="flex items-center space-x-1">
                                      <BookOpen className="h-3 w-3" />
                                      <span>{result.readingTime} min read</span>
                                    </div>
                                  )}
                                </div>
                                
                                <ChevronRight className="h-5 w-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary-brand)] transition-colors" />
                              </div>
                              
                              {/* Tags */}
                              {result.tags && result.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {result.tags.slice(0, 4).map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="outline" className="text-xs rounded-xl">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ) : !query ? (
        /* No Query State - Enhanced Discovery */
        <div className="space-y-8">
          <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
            <CardContent className="p-12 text-center space-y-8">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Search className="h-10 w-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                  Discover DailyCrypto Content
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                  Find articles, guides, market data, and educational content. 
                  Search across our entire library of cryptocurrency resources.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Popular Searches</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    { term: 'Bitcoin Philippines', icon: '₿', color: 'bg-orange-500' },
                    { term: 'How to buy crypto', icon: '💰', color: 'bg-green-500' },
                    { term: 'BSP regulations', icon: '🏛️', color: 'bg-blue-500' },
                    { term: 'Ethereum guide', icon: '⟠', color: 'bg-purple-500' },
                    { term: 'Crypto wallets', icon: '👛', color: 'bg-pink-500' },
                    { term: 'DeFi explained', icon: '🔄', color: 'bg-indigo-500' },
                    { term: 'NFT Philippines', icon: '🎨', color: 'bg-rose-500' },
                    { term: 'Crypto taxes', icon: '📊', color: 'bg-teal-500' }
                  ].map((suggestion) => (
                    <Button
                      key={suggestion.term}
                      variant="outline"
                      onClick={() => {
                        setQuery(suggestion.term);
                        performSearch(suggestion.term);
                        window.history.pushState({}, '', `/search?q=${encodeURIComponent(suggestion.term)}`);
                      }}
                      className="rounded-2xl hover:bg-[var(--color-primary-brand)] hover:text-white hover:border-[var(--color-primary-brand)] transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                    >
                      <span className={cn("w-6 h-6 rounded-lg flex items-center justify-center text-white text-sm", suggestion.color)}>
                        {suggestion.icon}
                      </span>
                      <span>{suggestion.term}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Latest News',
                description: 'Breaking crypto news and market updates',
                href: '/news/latest',
                icon: Flame,
                color: 'text-red-600 dark:text-red-400',
                bgColor: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900',
                count: '50+ articles'
              },
              {
                title: 'Learning Guides',
                description: 'Beginner-friendly crypto education',
                href: '/learn/beginner',
                icon: BookOpen,
                color: 'text-blue-600 dark:text-blue-400',
                bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
                count: '25+ guides'
              },
              {
                title: 'Market Data',
                description: 'Live prices and market analysis',
                href: '/prices',
                icon: TrendingUp,
                color: 'text-green-600 dark:text-green-400',
                bgColor: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900',
                count: '100+ coins'
              },
              {
                title: 'Philippines Focus',
                description: 'Local market news and regulations',
                href: '/news/philippines',
                icon: Globe,
                color: 'text-purple-600 dark:text-purple-400',
                bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
                count: '30+ stories'
              }
            ].map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className={cn("rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0", category.bgColor)}>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-white/80 dark:bg-black/20 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <category.icon className={cn("h-8 w-8", category.color)} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 font-[var(--font-display)]">
                        {category.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                        {category.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {/* Search Tips */}
      {!query && (
        <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Compass className="h-6 w-6 text-[var(--color-primary-brand)]" />
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                Search Tips
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-[var(--color-text-primary)] flex items-center space-x-2">
                  <Target className="h-4 w-4 text-[var(--color-primary-brand)]" />
                  <span>Search by Topic</span>
                </h4>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                  <li>• "Bitcoin" - Find all Bitcoin-related content</li>
                  <li>• "DeFi" - Decentralized finance articles</li>
                  <li>• "Philippines" - Local market news</li>
                  <li>• "Beginner" - Educational content</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-[var(--color-text-primary)] flex items-center space-x-2">
                  <User className="h-4 w-4 text-[var(--color-primary-brand)]" />
                  <span>Search by Author</span>
                </h4>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                  <li>• "Maria Santos" - Senior writer</li>
                  <li>• "Juan Dela Cruz" - Market analyst</li>
                  <li>• "Anna Reyes" - Tech correspondent</li>
                  <li>• "Carlos Mendoza" - Market specialist</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-[var(--color-text-primary)] flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-[var(--color-primary-brand)]" />
                  <span>Search by Category</span>
                </h4>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                  <li>• "Regulation" - Government policies</li>
                  <li>• "Security" - Safety and protection</li>
                  <li>• "Trading" - Market strategies</li>
                  <li>• "Technology" - Blockchain innovations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Search className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                {query ? `"${query}" • ${filteredResults.length} results` : 'Search DailyCrypto'}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}