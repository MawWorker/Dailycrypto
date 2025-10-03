"use client"

import { AnimatedIndicatorNavbar } from "@/components/navbars/animated-indicator-navbar";
import HeroNewsSection from "@/components/crypto/hero-news-section";
import MarketTicker from "@/components/crypto/market-ticker";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";
import { ModernNewsGrid } from "@/components/home/modern-news-grid";
import { MarketInsightsSection } from "@/components/home/market-insights-section";
import { NewsletterCTASection } from "@/components/home/newsletter-cta-section";
import { TrendingTopicsSection } from "@/components/home/trending-topics-section";
import { QuickStatsSection } from "@/components/home/quick-stats-section";
import { useCryptoPrices } from "@/hooks/use-crypto-prices";

interface ClientHomePageProps {
  featuredArticles: any[];
  allArticles: any[];
}

export default function ClientHomePage({ featuredArticles, allArticles }: ClientHomePageProps) {
  const { data: priceTickers } = useCryptoPrices();

  const transformedFeaturedArticle = featuredArticles[0] ? {
    id: featuredArticles[0]._id,
    title: featuredArticles[0].title,
    excerpt: featuredArticles[0].excerpt || featuredArticles[0].description,
    author: featuredArticles[0].author?.name || 'Unknown',
    publishedAt: featuredArticles[0].datePublished,
    category: featuredArticles[0].category || 'News',
    imageUrl: featuredArticles[0].coverImage,
    slug: featuredArticles[0].slug?.current || featuredArticles[0].slug
  } : null;

  const secondaryArticles = featuredArticles.slice(1, 4).map(article => ({
    id: article._id,
    title: article.title,
    excerpt: article.excerpt || article.description,
    author: article.author?.name || 'Unknown',
    publishedAt: article.datePublished,
    category: article.category || 'News',
    imageUrl: article.coverImage,
    slug: article.slug?.current || article.slug
  }));

  // Transform crypto data to match hero section format
  const heroTickers = priceTickers.slice(0, 6).map((ticker) => ({
    symbol: ticker.symbol,
    name: ticker.name,
    price: ticker.price,
    change: ticker.change24h,
    changePercent: ticker.changePercent24h,
  }));

  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      {/* Navigation */}
      <AnimatedIndicatorNavbar />
      
      {/* Full-width Price Ticker */}
      <MarketTicker />
      
      {/* Hero News Section with Enhanced Spacing */}
      <section className="w-full bg-gradient-to-b from-[var(--color-background-site)] to-[var(--color-surface)] py-4">
        {transformedFeaturedArticle && (
          <HeroNewsSection
            featuredArticle={transformedFeaturedArticle}
            secondaryArticles={secondaryArticles}
            priceTickers={heroTickers}
          />
        )}
      </section>
      
      {/* Quick Market Stats */}
      <section className="w-full bg-[var(--color-surface)] py-8">
        <QuickStatsSection />
      </section>
      
      {/* Trending Topics */}
      <section className="w-full bg-[var(--color-background-site)] py-12">
        <TrendingTopicsSection />
      </section>
      
      {/* Modern News Grid */}
      <section className="w-full bg-[var(--color-surface)] py-16">
        <ModernNewsGrid />
      </section>
      
      {/* Market Analysis & Insights */}
      <section className="w-full bg-[var(--color-background-site)] py-16">
        <MarketInsightsSection />
      </section>
      
      {/* Newsletter CTA */}
      <section className="w-full bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-purple-500/5 py-16">
        <NewsletterCTASection />
      </section>
      
      {/* Footer - Full Width */}
      <div className="w-full">
        <NewsletterFooter />
      </div>
    </div>
  );
}