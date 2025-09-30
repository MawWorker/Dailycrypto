import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { MarketOverviewContent } from '@/components/markets/market-overview-content';

export const metadata: Metadata = {
  title: "Market Overview - Live Crypto Market Data | DailyCrypto",
  description: "Comprehensive cryptocurrency market overview with real-time prices, market trends, top gainers and losers, and market sentiment analysis for the Philippines.",
  openGraph: {
    title: "Market Overview - Live Crypto Market Data",
    description: "Comprehensive cryptocurrency market overview with real-time prices, market trends, top gainers and losers, and market sentiment analysis for the Philippines.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Market Overview - Live Crypto Market Data",
    description: "Comprehensive cryptocurrency market overview with real-time prices, market trends, top gainers and losers, and market sentiment analysis for the Philippines.",
  }
};

export default function MarketOverviewPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <MarketOverviewContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}