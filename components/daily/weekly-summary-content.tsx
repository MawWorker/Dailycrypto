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
  BarChart3, 
  Building2, 
  Gamepad2, 
  Share2,
  ChevronRight,
  RefreshCw,
  CalendarDays,
  Eye,
  Award,
  Zap,
  Target,
  Trophy,
  Flame,
  Users,
  Globe,
  Share,
  ExternalLink
} from 'lucide-react';
import { formatDateTime } from '@/lib/format';
import { weeklyMockupArticles, weeklyRecapSummary, weeklyArticleEngagementMetrics } from '@/lib/weekly-recap-content';
import { cn } from '@/lib/utils';

export function WeeklySummaryContent() {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Get current week date range
  const today = new Date();
  const startOfWeek = new Date(today.getTime() - (today.getDay() * 24 * 60 * 60 * 1000));

  // Use the enhanced weekly articles
  const weeklyArticles = weeklyMockupArticles;


  const handleRefresh = () => {
    setIsRefreshing(true);
    setLastUpdated(new Date());
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const shareWeeklySummary = () => {
    if (navigator.share) {
      navigator.share({
        title: "Weekly Crypto Summary - DailyCrypto",
        text: "Check out this week's comprehensive cryptocurrency news summary",
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const formatWeekRange = () => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric' 
    };
    
    const start = startOfWeek.toLocaleDateString('en-PH', options);
    const end = new Date(startOfWeek.getTime() + (6 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-PH', options);
    const year = today.getFullYear();
    
    return `${start} - ${end}, ${year}`;
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--color-primary-brand)]/10 to-purple-500/10 px-8 py-4 rounded-2xl border border-[var(--color-primary-brand)]/20 shadow-lg">
          <CalendarDays className="h-5 w-5 text-[var(--color-primary-brand)]" />
          <span className="text-base font-semibold text-[var(--color-primary-brand)]">
            Week of {formatWeekRange()} • {weeklyRecapSummary.totalStories} Stories
          </span>
          <Badge className="bg-[var(--color-primary-brand)] text-white">
            {weeklyRecapSummary.weeklyStats.totalReaders} Readers
          </Badge>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Weekly Crypto Summary
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed">
          {weeklyRecapSummary.weeklyOverview.summary}
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
            onClick={shareWeeklySummary}
            variant="outline"
            className="rounded-xl"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share Summary
          </Button>
          
          <Button 
            className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
            asChild
          >
            <Link href="/newsletter">
              Subscribe for Weekly Updates
            </Link>
          </Button>
        </div>

        {/* Last Updated */}
        <div className="flex items-center justify-center space-x-2 text-sm text-[var(--color-text-secondary)]">
          <Clock className="h-4 w-4" />
          <span>Last updated: {formatDateTime(lastUpdated)}</span>
        </div>
      </div>

      {/* Weekly Overview & Key Themes */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-purple-500/5 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <Zap className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>This Week's Main Theme: {weeklyRecapSummary.weeklyOverview.mainTheme}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            {weeklyRecapSummary.weeklyOverview.keyDevelopments.map((development, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group">
                <div className="w-8 h-8 bg-[var(--color-primary-brand)] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-[var(--color-text-primary)] font-medium group-hover:text-[var(--color-primary-brand)] transition-colors">
                    {development}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Stories of the Week */}
      <Card className="rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950 dark:to-yellow-900 border-amber-200 dark:border-amber-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-amber-900 dark:text-amber-100 font-[var(--font-display)] flex items-center space-x-3">
            <Trophy className="h-6 w-6" />
            <span>Top Stories of the Week</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {weeklyRecapSummary.topStories.map((story, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 dark:bg-black/20 hover:bg-white/80 dark:hover:bg-black/40 transition-colors group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                {story.rank}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2 group-hover:text-[var(--color-primary-brand)] transition-colors">
                  {story.title}
                </h4>
                <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
                  <strong>Impact:</strong> {story.impact}
                </p>
                <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
                  <strong>Significance:</strong> {story.significance}
                </p>
                <div className="flex items-center space-x-4 text-xs text-amber-600 dark:text-amber-400">
                  <span className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{story.engagement}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Editor's Picks */}
      <Card className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 border-purple-200 dark:border-purple-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-3">
            <Trophy className="h-6 w-6" />
            <span>Editor's Picks</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {weeklyRecapSummary.editorsPicks.map((pick, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/50 dark:bg-black/20 hover:bg-white/80 dark:hover:bg-black/40 transition-colors group">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                <Trophy className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-1 group-hover:text-[var(--color-primary-brand)] transition-colors">
                  {pick.title}
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                  <strong>Why we picked it:</strong> {pick.reason}
                </p>
                <div className="flex items-center space-x-3 text-xs text-purple-600 dark:text-purple-400">
                  <span>By {pick.author}</span>
                  <Badge variant="outline" className="text-xs">
                    {pick.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Weekly Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-1">
              {weeklyRecapSummary.weeklyStats.totalReaders}
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-300">Total Readers</div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <CardContent className="p-6 text-center">
            <Eye className="h-8 w-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
            <div className="text-2xl font-bold text-green-900 dark:text-green-100 mb-1">
              {weeklyRecapSummary.weeklyStats.totalPageViews}
            </div>
            <div className="text-sm text-green-700 dark:text-green-300">Page Views</div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6 text-center">
            <Share className="h-8 w-8 mx-auto mb-3 text-purple-600 dark:text-purple-400" />
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-1">
              {weeklyRecapSummary.weeklyStats.socialShares}
            </div>
            <div className="text-sm text-purple-700 dark:text-purple-300">Social Shares</div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800">
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-3 text-orange-600 dark:text-orange-400" />
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-1">
              {weeklyRecapSummary.weeklyStats.avgSessionDuration}
            </div>
            <div className="text-sm text-orange-700 dark:text-orange-300">Avg Session</div>
          </CardContent>
        </Card>
      </div>

      {/* Market Sentiment & Trending Topics */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Market Sentiment */}
        <Card className="rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-950 dark:to-green-900 border-emerald-200 dark:border-emerald-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-emerald-900 dark:text-emerald-100 font-[var(--font-display)] flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Weekly Market Sentiment</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-900 dark:text-emerald-100 mb-1">
                {weeklyRecapSummary.marketSentiment.overall}
              </div>
              <div className="text-sm text-emerald-700 dark:text-emerald-300 mb-4">
                Fear & Greed: {weeklyRecapSummary.marketSentiment.fearGreedIndex} • Weekly Trend: {weeklyRecapSummary.marketSentiment.weeklyTrend}
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 text-sm">Top Weekly Performers</h5>
              {weeklyRecapSummary.marketSentiment.topPerformers.map((performer, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div>
                    <span className="font-mono font-bold text-emerald-900 dark:text-emerald-100">{performer.symbol}</span>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">{performer.reason}</p>
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-bold">{performer.change}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-200 dark:border-emerald-700">
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
                  {weeklyRecapSummary.marketSentiment.weeklyVolume}
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Weekly Volume</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
                  {weeklyRecapSummary.marketSentiment.marketCapGrowth}
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300">Market Cap Growth</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trending Topics */}
        <Card className="rounded-2xl bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-900 border-rose-200 dark:border-rose-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-rose-900 dark:text-rose-100 font-[var(--font-display)] flex items-center space-x-2">
              <Flame className="h-5 w-5" />
              <span>Trending This Week</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {weeklyRecapSummary.trendingTopics.map((topic, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-white/50 dark:bg-black/20 rounded-lg hover:bg-white/80 dark:hover:bg-black/40 transition-colors group">
                <div>
                  <span className="font-semibold text-rose-900 dark:text-rose-100 group-hover:text-[var(--color-primary-brand)] transition-colors">
                    {topic.topic}
                  </span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-rose-700 dark:text-rose-300">{topic.mentions} mentions</span>
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "text-xs",
                        topic.sentiment === 'Extremely Positive' ? 'border-green-500 text-green-700 dark:text-green-300' :
                        topic.sentiment === 'Very Positive' ? 'border-green-400 text-green-600 dark:text-green-400' :
                        topic.sentiment === 'Positive' ? 'border-blue-400 text-blue-600 dark:text-blue-400' :
                        'border-gray-400 text-gray-600 dark:text-gray-400'
                      )}
                    >
                      {topic.sentiment}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-rose-900 dark:text-rose-100">
                    #{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Reader Engagement Insights */}
      <Card className="rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900 border-indigo-200 dark:border-indigo-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-indigo-900 dark:text-indigo-100 font-[var(--font-display)] flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Reader Engagement Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                {weeklyRecapSummary.readerEngagement.averageReadingTime}
              </div>
              <div className="text-xs text-indigo-700 dark:text-indigo-300">Avg Read Time</div>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                {weeklyRecapSummary.readerEngagement.completionRate}
              </div>
              <div className="text-xs text-indigo-700 dark:text-indigo-300">Completion Rate</div>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                {weeklyRecapSummary.weeklyStats.mobileTrafficPercentage}%
              </div>
              <div className="text-xs text-indigo-700 dark:text-indigo-300">Mobile Readers</div>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-xl font-bold text-indigo-900 dark:text-indigo-100">
                {weeklyRecapSummary.weeklyStats.newsletterSignups}
              </div>
              <div className="text-xs text-indigo-700 dark:text-indigo-300">New Subscribers</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h5 className="font-semibold text-indigo-900 dark:text-indigo-100">Most Engaging Content</h5>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-black/20 rounded-lg">
                <span className="text-sm text-indigo-800 dark:text-indigo-200">Most Read:</span>
                <span className="text-sm font-medium text-indigo-900 dark:text-indigo-100">{weeklyRecapSummary.readerEngagement.mostReadArticle}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-black/20 rounded-lg">
                <span className="text-sm text-indigo-800 dark:text-indigo-200">Most Shared:</span>
                <span className="text-sm font-medium text-indigo-900 dark:text-indigo-100">{weeklyRecapSummary.readerEngagement.mostSharedArticle}</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-black/20 rounded-lg">
                <span className="text-sm text-indigo-800 dark:text-indigo-200">Most Discussed:</span>
                <span className="text-sm font-medium text-indigo-900 dark:text-indigo-100">{weeklyRecapSummary.readerEngagement.mostCommentedArticle}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Day-by-Day Breakdown */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-[var(--color-primary-brand)]" />
            <span>Day-by-Day Breakdown</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {Array.from({ length: 7 }, (_, i) => {
              const date = new Date(startOfWeek.getTime() + (i * 24 * 60 * 60 * 1000));
              const dayArticles = weeklyArticles.filter(article => {
                const articleDate = new Date(article.datePublished);
                return articleDate.toDateString() === date.toDateString();
              });
              
              return (
                <div key={i} className="text-center p-4 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors">
                  <div className="text-sm font-medium text-[var(--color-text-primary)] mb-1">
                    {date.toLocaleDateString('en-PH', { weekday: 'short' })}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] mb-2">
                    {date.toLocaleDateString('en-PH', { month: 'short', day: 'numeric' })}
                  </div>
                  <div className="text-lg font-bold text-[var(--color-primary-brand)]">
                    {dayArticles.length}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    {dayArticles.length === 1 ? 'story' : 'stories'}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>


      {/* Next Week Preview */}
      <Card className="rounded-2xl bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 border border-slate-200 dark:border-slate-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <Globe className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Looking Ahead: Next Week</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-[var(--color-primary-brand)]" />
                <span>Upcoming Events</span>
              </h4>
              <div className="space-y-2">
                {weeklyRecapSummary.nextWeekPreview.upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="w-6 h-6 bg-[var(--color-primary-brand)] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-sm text-[var(--color-text-primary)]">{event}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                <Eye className="h-4 w-4 text-[var(--color-primary-brand)]" />
                <span>What to Watch</span>
              </h4>
              <div className="space-y-2">
                {weeklyRecapSummary.nextWeekPreview.watchList.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="w-2 h-2 bg-[var(--color-primary-brand)] rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm text-[var(--color-text-primary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Summary Footer */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <Award className="h-16 w-16 mx-auto text-[var(--color-primary-brand)]" />
          <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            That's a Wrap on This Week!
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Thank you for joining {weeklyRecapSummary.weeklyStats.totalReaders} readers this week. 
            Next week promises even more exciting developments in the cryptocurrency space. 
            Don't miss out on the latest updates!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                {weeklyRecapSummary.totalStories}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Stories Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                {weeklyRecapSummary.weeklyStats.totalReaders}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Total Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                {weeklyRecapSummary.weeklyStats.socialShares}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Social Shares</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                {weeklyRecapSummary.weeklyStats.commentsPosted}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)]">Comments</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="outline"
              className="rounded-xl w-full sm:w-auto border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/news">
                Explore News Archive
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="rounded-xl w-full sm:w-auto border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/daily/today">
                Today's Recap
              </Link>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white w-full sm:w-auto"
              asChild
            >
              <Link href="/newsletter">
                Get Weekly Updates
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <CalendarDays className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Week {Math.ceil((today.getTime() - new Date(today.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000))} • {weeklyRecapSummary.totalStories} stories
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}