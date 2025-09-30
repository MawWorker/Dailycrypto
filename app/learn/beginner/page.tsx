import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { IntroToCryptoContent } from '@/components/learn/intro-to-crypto-content';

export const metadata: Metadata = {
  title: "Introduction to Cryptocurrency - Beginner's Guide | DailyCrypto",
  description: "Learn the basics of cryptocurrency in simple terms. Perfect for beginners with zero knowledge about Bitcoin, blockchain, and digital assets.",
  openGraph: {
    title: "Introduction to Cryptocurrency - Beginner's Guide",
    description: "Learn the basics of cryptocurrency in simple terms. Perfect for beginners with zero knowledge about Bitcoin, blockchain, and digital assets.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Introduction to Cryptocurrency - Beginner's Guide",
    description: "Learn the basics of cryptocurrency in simple terms. Perfect for beginners with zero knowledge about Bitcoin, blockchain, and digital assets.",
  }
};

export default function IntroToCryptoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-4xl pt-8 pb-8">
        <IntroToCryptoContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}