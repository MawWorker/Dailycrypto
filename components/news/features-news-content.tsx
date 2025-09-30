"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Clock, 
  User, 
  Eye, 
  Heart, 
  MessageCircle, 
  Zap, 
  ChevronRight, 
  Award,
  Crown,
  Sparkles,
  Trophy,
  Target,
  Gem,
  BookOpen,
  Lightbulb,
  Mic,
  Edit3,
  BarChart3
} from 'lucide-react';
import { formatRelativeTime } from '@/lib/format';
import { featuredArticles, contentTypes } from '@/lib/features-news-data';
import { cn } from '@/lib/utils';

export function FeaturesNewsContent() {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [selectedContentType, setSelectedContentType] = useState<string>('all');

  // Set lastUpdated only on client side to avoid hydration mismatch
  useEffect(() => {
    setLastUpdated(new Date());
  }, []);

  // Filter articles by content type
  const filteredArticles = selectedContentType === 'all' 
    ? featuredArticles 
    : featuredArticles.filter(article => article.contentType === selectedContentType);

  const getContentTypeStyle = (contentType: string) => {
    const type = contentTypes.find(t => t.name === contentType);
    return type || contentTypes[0];
  };

  // Helper function to get icon component from string name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return Crown;
      case 'Target': return Target;
      case 'Mic': return Mic;
      case 'BarChart3': return BarChart3;
      case 'Lightbulb': return Lightbulb;
      default: return Star;
    }
  };

  return (
    <div className="space-y-8">
      {/* Premium Header with Golden Accents */}
      <div className="text-center space-y-6">
        {/* Last Updated */}
        <div className="flex items-center justify-center space-x-2 text-sm text-[var(--color-text-secondary)]">
          <Clock className="h-4 w-4" />
          <span>
            Curated content • Updated: {lastUpdated ? lastUpdated.toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila' }) : 'Loading...'} Manila Time
          </span>
        </div>
      </div>


      {/* Hero Featured Article - Magazine Style */}
      {filteredArticles.length > 0 && filteredArticles[0] && (
        <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden">
                <Image
                  src={filteredArticles[0].coverImage}
                  alt={filteredArticles[0].title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Premium Badges */}
                <div className="absolute top-6 left-6 flex items-center space-x-3">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg animate-pulse">
                    <Crown className="h-3 w-3 mr-1" />
                    Premium
                  </Badge>
                  {filteredArticles[0].exclusive && (
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg">
                      <Zap className="h-3 w-3 mr-1" />
                      Exclusive
                    </Badge>
                  )}
                </div>

                {/* Content Type Badge */}
                <div className="absolute bottom-6 left-6">
                  <Badge className={cn("shadow-lg text-xs", getContentTypeStyle(filteredArticles[0].contentType).bgColor.replace('bg-gradient-to-br', 'bg-gradient-to-r'))}>
                    {React.createElement(getIconComponent(getContentTypeStyle(filteredArticles[0].contentType).icon), { className: "h-3 w-3 mr-1" })}
                    {filteredArticles[0].contentType}
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Badge className={cn("text-xs", getContentTypeStyle(filteredArticles[0].contentType).bgColor.replace('bg-gradient-to-br', 'bg-gradient-to-r'))}>
                      {filteredArticles[0].category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "text-xs",
                        filteredArticles[0].impact === 'High' ? 'border-red-500 text-red-700 dark:text-red-300' :
                        'border-yellow-500 text-yellow-700 dark:text-yellow-300'
                      )}
                    >
                      {filteredArticles[0].impact} Impact
                    </Badge>
                  </div>

                  <Link href={`/news/${filteredArticles[0].slug}`}>
                    <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] leading-tight hover:text-[var(--color-primary-brand)] transition-colors">
                      {filteredArticles[0].title}
                    </h1>
                  </Link>

                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    {filteredArticles[0].description}
                  </p>
                </div>

                {/* Author and Meta */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 overflow-hidden rounded-xl">
                      <Image
                        src={filteredArticles[0].author.avatar}
                        alt={filteredArticles[0].author.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--color-text-primary)]">
                        {filteredArticles[0].author.name}
                      </div>
                      <div className="text-sm text-[var(--color-text-secondary)]">
                        {formatRelativeTime(filteredArticles[0].datePublished)} • {filteredArticles[0].readingTime} min read
                      </div>
                    </div>
                  </div>

                  {/* Engagement Stats */}
                  <div className="grid grid-cols-4 gap-4 p-4 bg-[var(--color-muted-subtle)] rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">
                        {filteredArticles[0].engagement.views}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">
                        {filteredArticles[0].engagement.likes}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Likes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">
                        {filteredArticles[0].engagement.shares}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Shares</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">
                        {filteredArticles[0].engagement.comments}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Comments</div>
                    </div>
                  </div>

                  <Button 
                    className="w-full rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white text-lg py-6"
                    asChild
                  >
                    <Link href={`/news/${filteredArticles[0].slug}`}>
                      Read Full Story
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Featured Articles Grid - Unique Masonry-Style Layout */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl shadow-lg">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Premium Featured Stories
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-muted-subtle)] to-transparent" />
          <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-xl">
            {filteredArticles.length - 1} more stories
          </Badge>
        </div>

        {/* Unique Asymmetric Grid Layout */}
        <div className="grid gap-6 lg:grid-cols-12 lg:grid-rows-3">
          {/* Large Feature - Spans 8 columns, 2 rows */}
          {filteredArticles.length > 1 && filteredArticles[1] && (
            <Link href={`/news/${filteredArticles[1]?.slug}`} className="lg:col-span-8 lg:row-span-2">
              <Card className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--color-muted-subtle)] h-full">
                <div className="relative aspect-[16/10] lg:aspect-[2/1] overflow-hidden">
                  <Image
                    src={filteredArticles[1]?.coverImage || ''}
                    alt={filteredArticles[1]?.title || ''}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Premium Indicators */}
                  <div className="absolute top-6 left-6 flex items-center space-x-3">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg">
                      <Crown className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                    <Badge className={cn("shadow-lg text-xs", getContentTypeStyle(filteredArticles[1].contentType).bgColor.replace('bg-gradient-to-br', 'bg-gradient-to-r'))}>
                      {React.createElement(getIconComponent(getContentTypeStyle(filteredArticles[1]?.contentType || '').icon), { className: "h-3 w-3 mr-1" })}
                      {filteredArticles[1]?.contentType}
                    </Badge>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-[var(--font-display)] leading-tight">
                      {filteredArticles[1]?.title}
                    </h2>
                    <p className="text-white/90 text-base mb-6 line-clamp-2 leading-relaxed">
                      {filteredArticles[1]?.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-white/80">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span className="text-sm font-medium">{filteredArticles[1]?.author?.name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{filteredArticles[1]?.datePublished ? formatRelativeTime(filteredArticles[1].datePublished) : ''}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4" />
                          <span className="text-sm">{filteredArticles[1]?.readingTime} min</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-white/80">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">{filteredArticles[1]?.engagement?.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{filteredArticles[1]?.engagement?.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )}

          {/* Medium Features - 4 columns each, 1 row */}
          {filteredArticles.length > 2 && filteredArticles.slice(2, 4).map((article, index) => (
            <Link key={article.id} href={`/news/${article.slug}`} className="lg:col-span-4 lg:row-span-1">
              <Card className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--color-muted-subtle)] h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <Badge className={cn("shadow-lg text-xs", getContentTypeStyle(article.contentType).bgColor.replace('bg-gradient-to-br', 'bg-gradient-to-r'))}>
                      {React.createElement(getIconComponent(getContentTypeStyle(article?.contentType || '').icon), { className: "h-3 w-3 mr-1" })}
                      {article.category}
                    </Badge>
                    {article?.premium && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg text-xs">
                        <Gem className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-2 font-[var(--font-display)] leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-white/80 text-sm">
                      <span>{article?.author?.name}</span>
                      <span>•</span>
                      <span>{article?.datePublished ? formatRelativeTime(article.datePublished) : ''}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}

          {/* Compact Features - 4 columns each, 1 row */}
          {filteredArticles.length > 4 && filteredArticles.slice(4).map((article, index) => (
            <Link key={article.id} href={`/news/${article.slug}`} className="lg:col-span-4 lg:row-span-1">
              <Card className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 border border-[var(--color-muted-subtle)] h-full">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge className={cn("text-xs", getContentTypeStyle(article.contentType).bgColor.replace('bg-gradient-to-br', 'bg-gradient-to-r'))}>
                        {React.createElement(getIconComponent(getContentTypeStyle(article?.contentType || '').icon), { className: "h-3 w-3 mr-1" })}
                        {article.category}
                      </Badge>
                      {article?.premium && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs">
                          <Star className="h-3 w-3 mr-1" />
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-lg text-[var(--color-text-primary)] line-clamp-3 group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)] leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-[var(--color-text-secondary)] text-sm line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                      <div className="flex items-center space-x-2">
                        <span>{article?.author?.name}</span>
                        <span>•</span>
                        <span>{article?.datePublished ? formatRelativeTime(article.datePublished) : ''}</span>
                      </div>
                      <span className="font-medium">{article.readingTime} min</span>
                    </div>

                    {/* Mini Engagement Bar */}
                    <div className="flex items-center space-x-4 text-xs text-[var(--color-text-secondary)] bg-[var(--color-muted-subtle)] rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{article?.engagement?.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{article?.engagement?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{article?.engagement?.comments}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Editorial Picks Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-100 dark:from-purple-950/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800 shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg">
              <Edit3 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)]">
              Editor's Choice
            </h2>
            <Badge className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              Handpicked
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles?.slice(0, 3).map((article, index) => (
              <div key={article.id} className="group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs animate-pulse">
                      <Award className="h-3 w-3 mr-1" />
                      Pick
                    </Badge>
                  </div>
                </div>
                
                <Link href={`/news/${article.slug}`}>
                  <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 group-hover:text-[var(--color-primary-brand)] transition-colors font-[var(--font-display)] leading-tight">
                    {article?.title}
                  </h4>
                </Link>
                
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3 leading-relaxed">
                  {article?.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-purple-600 dark:text-purple-400">
                  <span>{article?.author?.name}</span>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-3 w-3" />
                    <span>{article?.engagement?.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Content Types Showcase */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentTypes?.map((type) => {
          const typeArticles = featuredArticles?.filter(article => article?.contentType === type.name) || [];
          if (typeArticles.length === 0) return null;
          
          return (
            <Card key={type.name} className={cn("rounded-2xl shadow-lg", type.bgColor, type.borderColor)}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white/50 dark:bg-black/20 rounded-xl">
                    {React.createElement(getIconComponent(type.icon), { className: cn("h-5 w-5", type.color) })}
                  </div>
                  <h3 className="font-bold text-lg font-[var(--font-display)]" style={{ color: type.color.includes('yellow') ? '#b45309' : type.color.includes('red') ? '#dc2626' : type.color.includes('purple') ? '#7c3aed' : type.color.includes('blue') ? '#2563eb' : '#059669' }}>
                    {type.name}
                  </h3>
                  <Badge variant="secondary" className="rounded-xl">
                    {typeArticles.length}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  {typeArticles?.slice(0, 2).map((article) => (
                    <Link key={article.id} href={`/news/${article.slug}`}>
                      <div className="group p-3 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-colors">
                        <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors mb-1">
                          {article?.title}
                        </h4>
                        <div className="flex items-center space-x-3 text-xs opacity-75">
                          <span>{article?.author?.name}</span>
                          <span>•</span>
                          <span>{article?.datePublished ? formatRelativeTime(article.datePublished) : ''}</span>
                          <span>•</span>
                          <span>{article?.engagement?.views} views</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {typeArticles.length > 2 && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full mt-4 rounded-xl"
                    onClick={() => setSelectedContentType(type.name)}
                  >
                    View All {type.name}
                    {React.createElement(getIconComponent(type.icon), { className: "h-4 w-4 ml-1" })}
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Premium Content CTA */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Premium Featured Content
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Discover our most impactful stories, exclusive interviews, and in-depth analysis. 
            Premium content crafted by our expert editorial team.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                {featuredArticles?.length || 0}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Featured Stories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                {featuredArticles?.filter(a => a?.exclusive).length || 0}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Exclusives</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                {featuredArticles?.filter(a => a?.premium).length || 0}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Premium</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                15+
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Min Read Avg</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/news">
                All News
              </Link>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <Link href="/newsletter">
                Subscribe for Features
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
              <Crown className="h-4 w-4 text-yellow-500" />
              <span className="text-[var(--color-text-secondary)]">
                Featured • {filteredArticles?.length || 0} premium stories
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}