'use client';

import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, Clock, User, Tag } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockNewsPosts, mockGuides } from '@/lib/content.mock';
import { formatRelativeTime } from '@/lib/format';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSearch: (query: string) => void;
}

interface SearchResult {
  type: 'article' | 'guide' | 'page';
  title: string;
  description: string;
  url: string;
  category?: string;
  author?: string;
  publishedAt?: string;
}

export function SearchDialog({ open, onOpenChange, onSearch }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  const handleSearch = async (searchQuery: string) => {
    setIsSearching(true);
    setQuery(searchQuery);
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (searchQuery.length > 0) {
      const results: SearchResult[] = [];
      const searchTerm = searchQuery.toLowerCase();
      
      // Search through news articles
      mockNewsPosts.forEach(post => {
        if (
          post.title.toLowerCase().includes(searchTerm) ||
          post.description.toLowerCase().includes(searchTerm) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
          post.category.toLowerCase().includes(searchTerm)
        ) {
          results.push({
            type: 'article',
            title: post.title,
            description: post.description,
            url: `/news/${post.slug}`,
            category: post.category,
            author: post.author.name,
            publishedAt: post.datePublished
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
          results.push({
            type: 'guide',
            title: guide.title,
            description: guide.description,
            url: `/guides/${guide.slug}`,
            category: guide.category,
            author: guide.author.name,
            publishedAt: guide.datePublished
          });
        }
      });
      
      // Add static pages that might match
      const staticPages = [
        { title: 'Live Crypto Prices', description: 'Real-time cryptocurrency prices and market data', url: '/prices', type: 'page' as const },
        { title: 'Market Overview', description: 'Comprehensive cryptocurrency market analysis', url: '/markets/overview', type: 'page' as const },
        { title: 'Philippines Crypto Exchanges', description: 'Guide to local cryptocurrency exchanges', url: '/exchanges/philippines', type: 'page' as const },
        { title: 'Hardware Wallets', description: 'Best cryptocurrency hardware wallets guide', url: '/wallets/hardware', type: 'page' as const },
        { title: 'Newsletter', description: 'Subscribe to daily crypto news updates', url: '/newsletter', type: 'page' as const }
      ];
      
      staticPages.forEach(page => {
        if (
          page.title.toLowerCase().includes(searchTerm) ||
          page.description.toLowerCase().includes(searchTerm)
        ) {
          results.push(page);
        }
      });
      
      // Sort results by relevance (exact matches first, then partial matches)
      results.sort((a, b) => {
        const aExact = a.title.toLowerCase().includes(searchTerm) ? 1 : 0;
        const bExact = b.title.toLowerCase().includes(searchTerm) ? 1 : 0;
        return bExact - aExact;
      });
      
      setSearchResults(results.slice(0, 8)); // Limit to 8 results
    } else {
      setSearchResults([]);
    }
    
    setIsSearching(false);
  };

  const handleResultClick = (url: string) => {
    onOpenChange(false);
    setQuery('');
    setSearchResults([]);
    window.location.href = url;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      onOpenChange(false);
      setQuery('');
      setSearchResults([]);
    }
  };

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'article': return '📰';
      case 'guide': return '📚';
      case 'page': return '📄';
      default: return '🔍';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-0 max-h-[80vh] overflow-hidden">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="sr-only">Search DailyCrypto</DialogTitle>
        </DialogHeader>

        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles, guides, prices, and more..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="border-0 shadow-none focus-visible:ring-0 px-0"
                autoFocus
              />
              {isSearching && (
                <div className="w-4 h-4 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
              )}
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </form>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {query.length > 0 && (
            <div className="p-4">
              {searchResults.length === 0 ? (
                <div className="text-center py-8">
                  {isSearching ? (
                    <div className="space-y-3">
                      <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto" />
                      <p className="text-sm text-muted-foreground">Searching...</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Search className="h-8 w-8 text-muted-foreground/50 mx-auto" />
                      <p className="text-sm text-muted-foreground">
                        No results found for "{query}"
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Try searching for Bitcoin, Ethereum, guides, or news topics
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-muted-foreground">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{query}"
                    </p>
                    {query.trim() && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          onSearch(query.trim());
                          onOpenChange(false);
                          setQuery('');
                          setSearchResults([]);
                        }}
                        className="text-xs text-blue-600 hover:text-blue-700"
                      >
                        View all results
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    )}
                  </div>
                  
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      onClick={() => handleResultClick(result.url)}
                      className="w-full p-3 text-left hover:bg-muted rounded-lg transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-lg flex-shrink-0 mt-0.5">
                          {getResultIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-sm group-hover:text-blue-600 transition-colors line-clamp-1">
                              {result.title}
                            </h4>
                            <Badge variant="outline" className="text-xs capitalize">
                              {result.type}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                            {result.description}
                          </p>
                          {(result.category || result.author || result.publishedAt) && (
                            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                              {result.category && (
                                <div className="flex items-center space-x-1">
                                  <Tag className="h-3 w-3" />
                                  <span>{result.category}</span>
                                </div>
                              )}
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
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {query.length === 0 && (
            <div className="p-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground">Popular Searches</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Bitcoin', 'Ethereum', 'BSP', 'DeFi', 'NFT', 'Wallet'].map((term) => (
                    <Button
                      key={term}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSearch(term)}
                      className="justify-start text-xs h-8"
                    >
                      <Search className="h-3 w-3 mr-2" />
                      {term}
                    </Button>
                  ))}
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-foreground mb-3">Quick Links</h3>
                  <div className="space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleResultClick('/prices')}
                      className="w-full justify-start text-xs h-8"
                    >
                      📈 Live Crypto Prices
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleResultClick('/news/latest')}
                      className="w-full justify-start text-xs h-8"
                    >
                      📰 Latest News
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleResultClick('/learn/beginner')}
                      className="w-full justify-start text-xs h-8"
                    >
                      🎓 Learn Crypto
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 pt-0 border-t bg-muted/30">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <span>Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">↵</kbd> to search</span>
              <span>Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Esc</kbd> to close</span>
            </div>
            <span>Search powered by DailyCrypto</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}