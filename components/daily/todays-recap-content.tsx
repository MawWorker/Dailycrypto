"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  User, 
  TrendingUp, 
  AlertTriangle, 
  Newspaper, 
  BarChart3, 
  Shield, 
  Building2, 
  Gamepad2, 
  Share2,
  ChevronRight,
  RefreshCw,
  Hash,
  Eye,
  ExternalLink,
  Zap,
  Award,
  Target
} from 'lucide-react';
import { formatRelativeTime, formatDateTime } from '@/lib/format';
import { todaysMockupArticles, dailyRecapSummary, articleEngagementMetrics } from '@/lib/daily-recap-content';
import { cn } from '@/lib/utils';

interface NewsSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  articles: any[];
  color: string;
  bgColor: string;
}

export function TodaysRecapContent() {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Get today's date for filtering
  const today = new Date();

  // Use today's engaging articles
  const todaysArticles = todaysMockupArticles;

  // Categorize articles by type
  const breakingNews = todaysArticles.filter(article => 
    article.category === 'Breaking News' || article.featured
  ).slice(0, 3);

  const marketNews = todaysArticles.filter(article => 
    ['Market', 'Market News', 'Price Analysis'].includes(article.category)
  ).slice(0, 4);

  const regulatoryNews = todaysArticles.filter(article => 
    article.category === 'Regulation'
  ).slice(0, 3);

  const techNews = todaysArticles.filter(article => 
    ['Technology', 'DeFi', 'Development'].includes(article.category)
  ).slice(0, 3);

  const businessNews = todaysArticles.filter(article => 
    ['Business', 'Fintech', 'Banking'].includes(article.category)
  ).slice(0, 3);

  const securityNews = todaysArticles.filter(article => 
    ['Security', 'Legal'].includes(article.category)
  ).slice(0, 2);

  const gamingNews = todaysArticles.filter(article => 
    ['Gaming', 'NFTs', 'Metaverse'].includes(article.category)
  ).slice(0, 3);

  const sections: NewsSection[] = [
    {
      title: "Breaking News",
      icon: AlertTriangle,
      articles: breakingNews,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/20"
    },
    {
      title: "Market Updates",
      icon: TrendingUp,
      articles: marketNews,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      title: "Regulatory News",
      icon: Shield,
      articles: regulatoryNews,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      title: "Technology & DeFi",
      icon: BarChart3,
      articles: techNews,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      title: "Business & Fintech",
      icon: Building2,
      articles: businessNews,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-950/20"
    },
    {
      title: "Security & Legal",
      icon: Shield,
      articles: securityNews,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20"
    },
    {
      title: "Gaming & NFTs",
      icon: Gamepad2,
      articles: gamingNews,
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-50 dark:bg-pink-950/20"
    }
  ].filter(section => section.articles.length > 0);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setLastUpdated(new Date());
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const shareRecap = () => {
    if (navigator.share) {
      navigator.share({
        title: "Today's Crypto Recap - DailyCrypto",
        text: "Check out today's comprehensive cryptocurrency news summary",
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-[var(--color-primary-brand)]/10 px-4 py-2 rounded-full">
          <Calendar className="h-4 w-4 text-[var(--color-primary-brand)]" />
          <span className="text-sm font-medium text-[var(--color-primary-brand)]">
            {today.toLocaleDateString('en-PH', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} • {dailyRecapSummary.totalStories} Stories
          </span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Today's Crypto Recap
        </h1>
        
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Your comprehensive daily summary featuring {dailyRecapSummary.totalStories} stories, {dailyRecapSummary.breakingNewsCount} breaking news updates, and key market developments from the Philippines and worldwide.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <Button 
            onClick={handleRefresh}
            disabled={isRefreshing}
            variant="outline"
            className="rounded-xl"
          >
            <RefreshCw className={cn("h-4 w-4 mr-2", isRefreshing && "animate-spin")} />
            Refresh
          </Button>
          
          <Button 
            onClick={shareRecap}
            variant="outline"
            className="rounded-xl"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share Recap
          </Button>
        </div>

        {/* Last Updated */}
        <div className="flex items-center justify-center space-x-2 text-sm text-[var(--color-text-secondary)]">
          <Clock className="h-4 w-4" />
          <span>Last updated: {formatDateTime(lastUpdated)} • {dailyRecapSummary.readingStats.totalReaders} readers today</span>
        </div>
      </div>

      {/* Today's Key Highlights */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-purple-500/5 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <Zap className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Today's Key Highlights</span>
            <Badge variant="secondary" className="bg-[var(--color-primary-brand)] text-white">
              {dailyRecapSummary.keyHighlights.length} highlights
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {dailyRecapSummary.keyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group">
                <div className={cn(
                  "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                  highlight.impact === 'High' ? 'bg-red-500' : 
                  highlight.impact === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                )} />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {highlight.category}
                    </Badge>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "text-xs",
                        highlight.impact === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                        highlight.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      )}
                    >
                      {highlight.impact} Impact
                    </Badge>
                    {highlight.relatedTickers.length > 0 && (
                      <div className="flex space-x-1">
                        {highlight.relatedTickers.map(ticker => (
                          <Badge key={ticker} variant="outline" className="text-xs font-mono">
                            {ticker}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-primary-brand)] transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {highlight.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Sentiment & Trending */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Market Sentiment */}
        <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-green-200 dark:border-green-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Market Sentiment</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-1">
                {dailyRecapSummary.marketSentiment.overall}
              </div>
              <div className="text-sm text-green-700 dark:text-green-300">
                Fear & Greed Index: {dailyRecapSummary.marketSentiment.fearGreedIndex}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Top Gainers</h5>
                <div className="space-y-1">
                  {dailyRecapSummary.marketSentiment.topGainers.map((gainer, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="font-mono">{gainer.symbol}</span>
                      <span className="text-green-600 dark:text-green-400 font-medium">{gainer.change}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm">Top Losers</h5>
                <div className="space-y-1">
                  {dailyRecapSummary.marketSentiment.topLosers.map((loser, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="font-mono">{loser.symbol}</span>
                      <span className="text-red-600 dark:text-red-400 font-medium">{loser.change}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trending Topics */}
        <Card className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 border-purple-200 dark:border-purple-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-2">
              <Hash className="h-5 w-5" />
              <span>Trending Topics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {dailyRecapSummary.trendingTopics.map((topic, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs hover:bg-[var(--color-primary-brand)] hover:text-white cursor-pointer transition-colors rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                >
                  {topic}
                </Badge>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">
                  {dailyRecapSummary.readingStats.totalReaders}
                </div>
                <div className="text-xs text-purple-700 dark:text-purple-300">Total Readers</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">
                  {dailyRecapSummary.readingStats.avgReadTime}
                </div>
                <div className="text-xs text-purple-700 dark:text-purple-300">Avg Read Time</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Navigation */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
            <Hash className="h-5 w-5 text-[var(--color-primary-brand)]" />
            <span>Jump to Section</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sections.map((section) => (
              <Button
                key={section.title}
                variant="ghost"
                size="sm"
                className="justify-start rounded-xl hover:bg-[var(--color-muted-subtle)]"
                onClick={() => {
                  document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <section.icon className={cn("h-4 w-4 mr-2", section.color)} />
                <span className="text-sm">{section.title}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* News Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6 text-center">
            <Newspaper className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              {dailyRecapSummary.totalStories}
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-300">Total Stories</div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600 dark:text-green-400" />
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">
              {dailyRecapSummary.breakingNewsCount}
            </div>
            <div className="text-sm text-green-700 dark:text-green-300">Market Updates</div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6 text-center">
            <Shield className="h-8 w-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
              {dailyRecapSummary.regulatoryUpdatesCount}
            </div>
            <div className="text-sm text-purple-700 dark:text-purple-300">Regulatory News</div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-8 w-8 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">
              {dailyRecapSummary.marketMoversCount}
            </div>
            <div className="text-sm text-orange-700 dark:text-orange-300">Tech & DeFi</div>
          </CardContent>
        </Card>
      </div>

      {/* News Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <section 
            key={section.title}
            id={section.title.toLowerCase().replace(/\s+/g, '-')}
            className="scroll-mt-24"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className={cn("p-2 rounded-xl", section.bgColor)}>
                <section.icon className={cn("h-6 w-6", section.color)} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                {section.title}
              </h2>
              <div className="flex-1 h-px bg-[var(--color-muted-subtle)]" />
              <Badge variant="secondary" className="rounded-xl">
                {section.articles.length} {section.articles.length === 1 ? 'story' : 'stories'}
              </Badge>
            </div>

            <div className="grid gap-6">
              {section.articles.map((article, index) => (
                <Card 
                  key={article.id}
                  className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 border border-[var(--color-muted-subtle)]"
                >
                  <CardContent className="p-0">
                    {/* Enhanced Article Layout with Engagement Metrics */}
                    <div className="flex gap-6 p-6">
                      {/* Article Image */}
                      <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={article.coverImage}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="192px"
                        />
                        <Badge 
                          variant="secondary" 
                          className="absolute top-2 left-2 bg-[var(--color-primary-brand)] text-white text-xs"
                        >
                          {article.category}
                        </Badge>
                        {article.featured && (
                          <Badge 
                            variant="secondary" 
                            className="absolute top-2 right-2 bg-yellow-500 text-white text-xs animate-pulse"
                          >
                            ⭐ Featured
                          </Badge>
                        )}
                      </div>

                      {/* Article Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-2 text-xs text-[var(--color-text-secondary)]">
                          <Clock className="h-3 w-3" />
                          <span>{formatDateTime(article.datePublished)}</span>
                          <span>•</span>
                          <span>{formatRelativeTime(article.datePublished)}</span>
                          {article.readingTime && (
                            <>
                              <span>•</span>
                              <span>{article.readingTime} min read</span>
                            </>
                          )}
                        </div>

                        <Link href={`/news/${article.slug}`}>
                          <h3 className="text-xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors">
                            {article.title}
                          </h3>
                        </Link>

                        <p className="text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                          {article.description || article.excerpt}
                        </p>

                        {/* Engagement Metrics */}
                        {articleEngagementMetrics[article.id as keyof typeof articleEngagementMetrics] && (
                          <div className="flex items-center space-x-4 text-xs text-[var(--color-text-secondary)] bg-[var(--color-muted-subtle)] rounded-lg px-3 py-2">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{articleEngagementMetrics[article.id as keyof typeof articleEngagementMetrics].views}</span>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-sm text-[var(--color-text-secondary)]">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{article.author.name}</span>
                            </div>
                            {article.tags && article.tags.length > 0 && (
                              <div className="flex items-center space-x-1">
                                <span>Tags:</span>
                                <div className="flex space-x-1">
                                  {article.tags.slice(0, 3).map((tag: string) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-[var(--color-primary-brand)] hover:text-[var(--color-primary-brand)]/80"
                            asChild
                          >
                            <Link href={`/news/${article.slug}`}>
                              Read More
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Link>
                          </Button>
                          
                          {/* Quick Share Button */}
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-brand)]"
                            onClick={() => navigator.share?.({ 
                              title: article.title, 
                              url: `/news/${article.slug}` 
                            })}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {index < sections.length - 1 && (
              <Separator className="mt-12" />
            )}
          </section>
        ))}
      </div>

      {/* Daily Summary Footer */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20">
        <CardContent className="p-8 text-center space-y-4">
          <Award className="h-12 w-12 mx-auto text-[var(--color-primary-brand)]" />
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            That's a Wrap!
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            You've reached the end of today's crypto recap. Stay tuned for tomorrow's updates, 
            or explore our comprehensive news archive for more insights.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-[var(--color-text-secondary)]">
            <span>📖 {dailyRecapSummary.readingStats.totalReaders} readers</span>
            <span>⏱️ {dailyRecapSummary.readingStats.avgReadTime} avg read</span>
            <span>🔥 Most shared: {dailyRecapSummary.readingStats.mostSharedStory}</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <Button 
              variant="outline"
              className="rounded-xl"
              asChild
            >
              <Link href="/news">
                Browse All News
              </Link>
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
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm">
              <Eye className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                {dailyRecapSummary.totalStories} stories • {dailyRecapSummary.readingStats.totalReaders} readers
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}