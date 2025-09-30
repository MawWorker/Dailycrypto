import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { BlockchainBasicsContent } from '@/components/learn/blockchain-basics-content';

export const metadata: Metadata = {
  title: "Blockchain Basics - Understanding Blockchain Technology | DailyCrypto",
  description: "Learn the fundamentals of blockchain technology in simple terms. Perfect for beginners with zero technical knowledge about distributed ledgers and decentralized systems.",
  openGraph: {
    title: "Blockchain Basics - Understanding Blockchain Technology",
    description: "Learn the fundamentals of blockchain technology in simple terms. Perfect for beginners with zero technical knowledge about distributed ledgers and decentralized systems.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blockchain Basics - Understanding Blockchain Technology",
    description: "Learn the fundamentals of blockchain technology in simple terms. Perfect for beginners with zero technical knowledge about distributed ledgers and decentralized systems.",
  }
};

export default function BlockchainBasicsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-4xl pt-8 pb-8">
        <BlockchainBasicsContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}