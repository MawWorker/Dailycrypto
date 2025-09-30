import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, Eye, ChevronRight, Star, Zap } from 'lucide-react';
import { mockNewsPosts, mockNewsEngagementData } from '@/lib/content.mock';
import { ClientRelativeTime } from '@/components/ui/client-relative-time';

export function ModernNewsGrid() {
  // Get latest 6 articles for the grid
  const latestArticles = mockNewsPosts.slice(0, 6);

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 rounded-xl shadow-lg">
            <Star className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
              Featured Stories
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-1">
              Expert commentary and premium content from our editorial team
            </p>
          </div>
        </div>
        
        <Button 
          variant="outline"
          className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white hidden sm:flex"
          asChild
        >
          <Link href="/news/features">
            View All Featured Stories
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Featured Analysis */}
        {latestArticles.length > 0 && (
          <Link href={`/news/${latestArticles[0].slug}`}>
            <Card className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--color-muted-subtle)] h-full relative">
              <div className="relative h-full min-h-[400px] overflow-hidden">
                <Image
                  src={latestArticles[0].coverImage}
                  alt={latestArticles[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg animate-pulse">
                    <Star className="h-3 w-3 mr-1" />
                    Featured Story
                  </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[var(--color-primary-brand)] text-white shadow-lg">
                    {latestArticles[0].category}
                  </Badge>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 font-[var(--font-display)] leading-tight">
                    {latestArticles[0].title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {latestArticles[0].description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-white/80 text-sm">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{latestArticles[0].author.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{latestArticles[0].readingTime} min</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-white/80 text-sm">
                      <Eye className="h-4 w-4" />
                      <span>{mockNewsEngagementData[latestArticles[0].id]?.views || '25.0K'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Regular Featured Stories */}
        <div className="space-y-6">
          {latestArticles.slice(1, 4).map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`}>
              <Card className="group overflow-hidden rounded-xl bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[var(--color-muted-subtle)]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Author Avatar */}
                    <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-[var(--color-text-secondary)]">
                          <ClientRelativeTime date={article.datePublished} />
                        </span>
                      </div>
                      
                      <h4 className="font-bold text-lg text-[var(--color-text-primary)] line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)] leading-tight">
                        {article.title}
                      </h4>
                      
                      <p className="text-[var(--color-text-secondary)] text-sm line-clamp-2 leading-relaxed">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-xs text-[var(--color-text-secondary)]">
                          <span>{article.author.name}</span>
                          <span>•</span>
                          <span>{article.readingTime} min read</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-xs text-[var(--color-text-secondary)]">
                          <Eye className="h-3 w-3" />
                          <span>{mockNewsEngagementData[article.id]?.views || '25.0K'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile View All Button */}
      <div className="mt-8 text-center sm:hidden">
        <Button 
          variant="outline"
          className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
          asChild
        >
          <Link href="/news/features">
            View All Featured Stories
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}