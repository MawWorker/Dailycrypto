import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { HowToUseCryptoContent } from '@/components/guides/how-to-use-crypto-content';

export const metadata: Metadata = {
  title: "How to Use Cryptocurrency - Complete Usage Guide | DailyCrypto",
  description: "Learn how to use cryptocurrency in real life - from buying to storing in wallets to making payments. Discover where you can spend crypto and how to use it for everyday transactions.",
  openGraph: {
    title: "How to Use Cryptocurrency - Complete Usage Guide",
    description: "Learn how to use cryptocurrency in real life - from buying to storing in wallets to making payments. Discover where you can spend crypto and how to use it for everyday transactions.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How to Use Cryptocurrency - Complete Usage Guide",
    description: "Learn how to use cryptocurrency in real life - from buying to storing in wallets to making payments. Discover where you can spend crypto and how to use it for everyday transactions.",
  }
};

export default function HowToUseCryptoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 pb-8">
        <HowToUseCryptoContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}