"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Clock, TrendingUp, Mail, ArrowRight, BookOpen } from 'lucide-react';
import { formatRelativeTime } from '@/lib/format';

const recommendedArticles = [
  {
    id: 'rec-1',
    title: 'Bitcoin ETFs Now Hold Over 1.47 Million BTC, 7% of Total Supply',
    slug: 'bitcoin-etfs-total-supply',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedAt: '2024-12-20T14:45:00Z',
    category: 'Market Analysis'
  },
  {
    id: 'rec-2',
    title: 'Trump Family\'s Paper Wealth Swells By $6B On WLFI Trading Debut: WSJ',
    slug: 'trump-family-wlfi-trading',
    image: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedAt: '2024-12-20T13:00:00Z',
    category: 'Politics'
  },
  {
    id: 'rec-3',
    title: 'South Korea to Share Crypto Transactions Data Globally – Report',
    slug: 'south-korea-crypto-data-sharing',
    image: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedAt: '2024-12-20T11:30:00Z',
    category: 'Regulation'
  },
  {
    id: 'rec-4',
    title: 'Trump Family-Linked Crypto Token World Liberty Financial Tumbles Over 15% At Debut',
    slug: 'trump-crypto-token-debut',
    image: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedAt: '2024-12-20T10:15:00Z',
    category: 'Market News'
  },
  {
    id: 'rec-5',
    title: '[LIVE] Crypto News Today: Latest Updates for Sept. 2, 2025',
    slug: 'crypto-news-live-updates',
    image: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedAt: '2024-12-20T09:00:00Z',
    category: 'Live Updates'
  },
  {
    id: 'rec-6',
    title: 'Bitcoin Price Prediction: $11B Whale Move, Metaplanet Hits 20K BTC, $250K in Sight',
    slug: 'bitcoin-price-prediction-whale-move',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=400',
    publishedAt: '2024-12-20T07:30:00Z',
    category: 'Price Analysis'
  }
];

const trendingTopics = [
  'Bitcoin ETF',
  'Trump Crypto',
  'South Korea',
  'DeFi Protocols',
  'Whale Movements',
  'Market Analysis',
  'Regulatory News',
  'Price Predictions'
];

export function RecommendedArticlesSidebar() {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Recommended Articles */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Recommended Articles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendedArticles.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`}>
              <div className="group flex space-x-3 p-3 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors cursor-pointer">
                <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm line-clamp-2 group-hover:text-[var(--color-primary-brand)] transition-colors mb-1 font-[var(--font-display)]">
                    {article.title}
                  </h4>
                  <div className="flex items-center space-x-2 text-xs text-[var(--color-text-secondary)]">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <span>{formatRelativeTime(article.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          <div className="pt-4 border-t border-[var(--color-muted-subtle)]">
            <Button 
              variant="outline" 
              className="w-full rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/news" className="flex items-center justify-center space-x-2">
                <span>Read More Articles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-[var(--color-primary-brand)]" />
            <span>Trending Topics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="text-xs hover:bg-[var(--color-primary-brand)] hover:text-white cursor-pointer transition-colors rounded-xl bg-[var(--color-muted-subtle)] text-[var(--color-text-secondary)]"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="rounded-2xl bg-gradient-to-br from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
            <Mail className="h-5 w-5 text-[var(--color-primary-brand)]" />
            <span>Stay Updated</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Get the latest crypto news and market insights delivered to your inbox daily.
          </p>
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-xl border-[var(--color-muted-subtle)] focus:border-[var(--color-primary-brand)]"
            />
            <Button className="w-full rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white">
              Subscribe Now
            </Button>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] text-center">
            Join 12,000+ readers • No spam, unsubscribe anytime
          </p>
        </CardContent>
      </Card>

      {/* Educational Hub */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-[var(--color-primary-brand)]" />
            <span>Learn Crypto</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-3">
            <Link href="/guides/how-to-buy-bitcoin-philippines-2024" className="block p-3 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group">
              <h4 className="font-medium text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors mb-1">
                How to Buy Bitcoin in Philippines
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Complete beginner's guide to purchasing crypto
              </p>
            </Link>
            
            <Link href="/guides/cryptocurrency-taxes-philippines-guide" className="block p-3 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group">
              <h4 className="font-medium text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors mb-1">
                Crypto Tax Guide Philippines
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Understanding your crypto tax obligations
              </p>
            </Link>
            
            <Link href="/guides/self-custody-crypto-wallet-security" className="block p-3 rounded-xl hover:bg-[var(--color-muted-subtle)] transition-colors group">
              <h4 className="font-medium text-sm text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors mb-1">
                Crypto Security Best Practices
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Keep your digital assets safe and secure
              </p>
            </Link>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full mt-4 rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
            asChild
          >
            <Link href="/guides" className="flex items-center justify-center space-x-2">
              <span>View All Guides</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}