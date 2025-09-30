import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { PhilippinesExchangesContent } from '@/components/exchanges/philippines-exchanges-content';

export const metadata: Metadata = {
  title: "Philippines Crypto Exchanges - Complete Guide | DailyCrypto",
  description: "Comprehensive guide to all cryptocurrency exchanges available in the Philippines. Step-by-step tutorials for Coins.ph, PDAX, Maya, GCash, and more licensed platforms.",
  openGraph: {
    title: "Philippines Crypto Exchanges - Complete Guide",
    description: "Comprehensive guide to all cryptocurrency exchanges available in the Philippines. Step-by-step tutorials for Coins.ph, PDAX, Maya, GCash, and more licensed platforms.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Philippines Crypto Exchanges - Complete Guide",
    description: "Comprehensive guide to all cryptocurrency exchanges available in the Philippines. Step-by-step tutorials for Coins.ph, PDAX, Maya, GCash, and more licensed platforms.",
  }
};

export default function PhilippinesExchangesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <PhilippinesExchangesContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}