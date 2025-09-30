import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { MarketOutlookContent } from '@/components/daily/market-outlook-content';

export const metadata: Metadata = {
  title: "Market Outlook - Crypto Market Analysis & Predictions | DailyCrypto",
  description: "Expert cryptocurrency market outlook with price predictions, trend analysis, and investment insights for the Philippines and global markets.",
  openGraph: {
    title: "Market Outlook - Crypto Market Analysis & Predictions",
    description: "Expert cryptocurrency market outlook with price predictions, trend analysis, and investment insights for the Philippines and global markets.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Market Outlook - Crypto Market Analysis & Predictions",
    description: "Expert cryptocurrency market outlook with price predictions, trend analysis, and investment insights for the Philippines and global markets.",
  }
};

export default function MarketOutlookPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <MarketOutlookContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}