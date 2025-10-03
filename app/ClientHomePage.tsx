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
import { mockNewsPosts } from "@/lib/content.mock";

export default function ClientHomePage() {
  const { data: priceTickers } = useCryptoPrices();

  // Get articles from mock data
  const featuredArticle = mockNewsPosts.find(post => post.slug === "bitcoin-surges-philippine-adoption");
  const ethereumArticle = mockNewsPosts.find(post => post.slug === "ethereum-gas-fees-drop");
  const bspArticle = mockNewsPosts.find(post => post.slug === "bsp-cbdc-guidelines-2025");
  const tradingVolumeArticle = mockNewsPosts.find(post => post.slug === "philippines-crypto-trading-volume-record");

  // Transform articles to match hero section format
  const transformedFeaturedArticle = featuredArticle ? {
    id: featuredArticle.id,
    title: featuredArticle.title,
    excerpt: featuredArticle.description,
    author: featuredArticle.author.name,
    publishedAt: featuredArticle.datePublished,
    category: featuredArticle.category,
    imageUrl: featuredArticle.coverImage,
    slug: featuredArticle.slug
  } : null;

  const secondaryArticles = [bspArticle, ethereumArticle].filter((article): article is NonNullable<typeof article> => Boolean(article)).map(article => ({
    id: article.id,
    title: article.title,
    excerpt: article.description,
    author: article.author.name,
    publishedAt: article.datePublished,
    category: article.category,
    imageUrl: article.coverImage,
    slug: article.slug
  }));

  const transformedThirdArticle = tradingVolumeArticle ? {
    id: tradingVolumeArticle.id,
    title: tradingVolumeArticle.title,
    excerpt: tradingVolumeArticle.description,
    author: tradingVolumeArticle.author.name,
    publishedAt: tradingVolumeArticle.datePublished,
    category: tradingVolumeArticle.category,
    imageUrl: tradingVolumeArticle.coverImage,
    slug: tradingVolumeArticle.slug
  } : null;

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
            secondaryArticles={transformedThirdArticle ? [...secondaryArticles, transformedThirdArticle] : secondaryArticles}
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