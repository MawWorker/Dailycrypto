"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import { 
  Search, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Filter,
  Grid3X3,
  List,
  RefreshCw
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
}

export function SearchResultsContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  useEffect(() => {
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);
    if (searchQuery) {
      performSearch(searchQuery);
    }
  }, [searchParams]);

  const performSearch = async (searchQuery: string) => {
    setIsLoading(true);
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const searchResults: SearchResult[] = [];
    const searchTerm = searchQuery.toLowerCase();
    
    // Search through news articles
    mockNewsPosts.forEach(post => {
      if (
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        post.category.toLowerCase().includes(searchTerm)
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
          tags: post.tags
        });
      }
    });
    
    // Search through guides
    mockGuides.forEach(guide => {
      if (
        guide.title.toLowerCase().includes(searchTerm) ||
        guide.description.toLowerCase().includes(searchTerm) ||
        guide.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        guide.category.toLowerCase().includes(searchTerm)
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
          tags: guide.tags
        });
      }
    });
    
    // Add static pages
    const staticPages = [
      { 
        title: 'Live Crypto Prices', 
        description: 'Real-time cryptocurrency prices and market data for top 100 coins', 
        url: '/prices', 
        type: 'page' as const,
        category: 'Market Data',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Market Overview', 
        description: 'Comprehensive cryptocurrency market analysis and trends', 
        url: '/markets/overview', 
        type: 'page' as const,
        category: 'Market Analysis',
        image: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Philippines Crypto Exchanges', 
        description: 'Complete guide to cryptocurrency exchanges in the Philippines', 
        url: '/exchanges/philippines', 
        type: 'page' as const,
        category: 'Exchanges',
        image: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Hardware Wallets Guide', 
        description: 'Best cryptocurrency hardware wallets for security', 
        url: '/wallets/hardware', 
        type: 'page' as const,
        category: 'Security',
        image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      { 
        title: 'Newsletter Subscription', 
        description: 'Subscribe to daily crypto news updates and market insights', 
        url: '/newsletter', 
        type: 'page' as const,
        category: 'Newsletter',
        image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400'
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
    
    // Sort results by relevance
    searchResults.sort((a, b) => {
      const aExact = a.title.toLowerCase().includes(searchTerm) ? 1 : 0;
      const bExact = b.title.toLowerCase().includes(searchTerm) ? 1 : 0;
      return bExact - aExact;
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

  // Filter results by type
  const filteredResults = selectedType === 'all' 
    ? results 
    : results.filter(result => result.type === selectedType);

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

  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 pb-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] mb-4">
            Search Results
          </h1>
          
          {/* Search Form */}
          <form onSubmit={handleNewSearch} className="mb-6">
            <div className="flex items-center space-x-2 border rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all bg-[var(--color-surface)]">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles, guides, prices, and more..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border-0 shadow-none focus-visible:ring-0 px-0 text-base"
              />
              <Button type="submit" size="sm" className="rounded-lg">
                Search
              </Button>
            </div>
          </form>

          {/* Filters and View Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-1 rounded-lg border border-[var(--color-muted-subtle)] bg-[var(--color-surface)] text-[var(--color-text-primary)] text-sm"
                >
                  <option value="all">All Results</option>
                  <option value="article">Articles</option>
                  <option value="guide">Guides</option>
                  <option value="page">Pages</option>
                </select>
              </div>
              
              {query && (
                <p className="text-sm text-muted-foreground">
                  {isLoading ? 'Searching...' : `${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''} for "${query}"`}
                </p>
              )}
            </div>

            <div className="flex bg-[var(--color-muted-subtle)] rounded-lg p-1">
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-md px-3"
              >
                <List className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-md px-3"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="rounded-xl animate-pulse">
                <CardContent className="p-6">
                  <div className="flex space-x-4">
                    <div className="w-20 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredResults.length === 0 && query ? (
          <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)]">
            <CardContent className="p-12 text-center space-y-4">
              <Search className="h-12 w-12 mx-auto text-muted-foreground/50" />
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">No Results Found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We couldn't find any results for "{query}". Try searching for different keywords like Bitcoin, Ethereum, guides, or news topics.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Bitcoin', 'Ethereum', 'BSP', 'DeFi', 'Guides', 'News'].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setQuery(suggestion);
                      performSearch(suggestion);
                    }}
                    className="rounded-lg"
                  >
                    Try "{suggestion}"
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Results Display */}
            {viewMode === 'list' ? (
              <div className="space-y-4">
                {filteredResults.map((result, index) => (
                  <Link key={index} href={result.url}>
                    <Card className="group rounded-xl bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 border border-[var(--color-muted-subtle)]">
                      <CardContent className="p-6">
                        <div className="flex space-x-4">
                          {/* Result Image */}
                          {result.image && (
                            <div className="relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                              <Image
                                src={result.image}
                                alt={result.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="80px"
                              />
                            </div>
                          )}
                          
                          {/* Result Content */}
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">{getTypeIcon(result.type)}</span>
                              <Badge className={cn("text-xs", getTypeColor(result.type))}>
                                {result.type}
                              </Badge>
                              {result.category && (
                                <Badge variant="outline" className="text-xs">
                                  {result.category}
                                </Badge>
                              )}
                            </div>
                            
                            <h3 className="font-bold text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)]">
                              {result.title}
                            </h3>
                            
                            <p className="text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                              {result.description}
                            </p>
                            
                            {/* Meta Information */}
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
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
                            </div>
                            
                            {/* Tags */}
                            {result.tags && result.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {result.tags.slice(0, 4).map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant="outline" className="text-xs">
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
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResults.map((result, index) => (
                  <Link key={index} href={result.url}>
                    <Card className="group rounded-xl bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[var(--color-muted-subtle)] h-full">
                      {result.image && (
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={result.image}
                            alt={result.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className={cn("shadow-lg text-xs", getTypeColor(result.type))}>
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
                        
                        <div className="space-y-2">
                          {(result.author || result.publishedAt) && (
                            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
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
                            </div>
                          )}
                          
                          {result.category && (
                            <Badge variant="outline" className="text-xs">
                              {result.category}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* No Query State */}
        {!query && (
          <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)]">
            <CardContent className="p-12 text-center space-y-6">
              <Search className="h-16 w-16 mx-auto text-muted-foreground/50" />
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                Search DailyCrypto
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Find articles, guides, market data, and more. Try searching for topics like Bitcoin, Ethereum, trading guides, or Philippine crypto news.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Popular Searches</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    'Bitcoin Philippines',
                    'How to buy crypto',
                    'BSP regulations',
                    'Ethereum guide',
                    'Crypto wallets',
                    'DeFi explained',
                    'NFT Philippines',
                    'Crypto taxes'
                  ].map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setQuery(suggestion);
                        performSearch(suggestion);
                        window.history.pushState({}, '', `/search?q=${encodeURIComponent(suggestion)}`);
                      }}
                      className="rounded-lg hover:bg-[var(--color-primary-brand)] hover:text-white hover:border-[var(--color-primary-brand)]"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <NewsletterFooter />
    </div>
  );
}