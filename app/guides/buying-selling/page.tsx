import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { BuyingSellingSryptoContent } from '@/components/guides/buying-selling-crypto-content';

export const metadata: Metadata = {
  title: "How to Buy & Sell Crypto in Philippines - Complete Guide | DailyCrypto",
  description: "Step-by-step guide to buying and selling cryptocurrency in the Philippines. Learn how to use Coins.ph, PDAX, Maya, GCash, and other licensed exchanges safely.",
  openGraph: {
    title: "How to Buy & Sell Crypto in Philippines - Complete Guide",
    description: "Step-by-step guide to buying and selling cryptocurrency in the Philippines. Learn how to use Coins.ph, PDAX, Maya, GCash, and other licensed exchanges safely.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How to Buy & Sell Crypto in Philippines - Complete Guide",
    description: "Step-by-step guide to buying and selling cryptocurrency in the Philippines. Learn how to use Coins.ph, PDAX, Maya, GCash, and other licensed exchanges safely.",
  }
};

export default function BuyingSellingSryptoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 pb-8">
        <BuyingSellingSryptoContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}