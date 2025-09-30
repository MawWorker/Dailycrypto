import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { HistoryOfCryptoContent } from '@/components/learn/history-of-crypto-content';

export const metadata: Metadata = {
  title: "History of Cryptocurrency - From Bitcoin to Today | DailyCrypto",
  description: "Learn the complete history of cryptocurrency from Bitcoin's creation in 2009 to today's digital asset ecosystem. Perfect for beginners with zero knowledge about crypto history.",
  openGraph: {
    title: "History of Cryptocurrency - From Bitcoin to Today",
    description: "Learn the complete history of cryptocurrency from Bitcoin's creation in 2009 to today's digital asset ecosystem. Perfect for beginners with zero knowledge about crypto history.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "History of Cryptocurrency - From Bitcoin to Today",
    description: "Learn the complete history of cryptocurrency from Bitcoin's creation in 2009 to today's digital asset ecosystem. Perfect for beginners with zero knowledge about crypto history.",
  }
};

export default function HistoryOfCryptoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-4xl pt-8 pb-8">
        <HistoryOfCryptoContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}