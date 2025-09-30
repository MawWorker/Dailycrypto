import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { ExchangeReviewsContent } from '@/components/exchanges/exchange-reviews-content';

export const metadata: Metadata = {
  title: "Crypto Exchange Reviews - Philippines & Global | DailyCrypto",
  description: "Comprehensive reviews and ratings of cryptocurrency exchanges in the Philippines and worldwide. Expert analysis, user reviews, and detailed comparisons to help you choose the best platform.",
  openGraph: {
    title: "Crypto Exchange Reviews - Philippines & Global",
    description: "Comprehensive reviews and ratings of cryptocurrency exchanges in the Philippines and worldwide. Expert analysis, user reviews, and detailed comparisons to help you choose the best platform.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Crypto Exchange Reviews - Philippines & Global",
    description: "Comprehensive reviews and ratings of cryptocurrency exchanges in the Philippines and worldwide. Expert analysis, user reviews, and detailed comparisons to help you choose the best platform.",
  }
};

export default function ExchangeReviewsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <ExchangeReviewsContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}