import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { GlobalExchangesContent } from '@/components/exchanges/global-exchanges-content';

export const metadata: Metadata = {
  title: "Global Crypto Exchanges - Complete Guide | DailyCrypto",
  description: "Comprehensive guide to major global cryptocurrency exchanges including Binance, Coinbase, Kraken, KuCoin, and more. Step-by-step tutorials and platform comparisons.",
  openGraph: {
    title: "Global Crypto Exchanges - Complete Guide",
    description: "Comprehensive guide to major global cryptocurrency exchanges including Binance, Coinbase, Kraken, KuCoin, and more. Step-by-step tutorials and platform comparisons.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Global Crypto Exchanges - Complete Guide",
    description: "Comprehensive guide to major global cryptocurrency exchanges including Binance, Coinbase, Kraken, KuCoin, and more. Step-by-step tutorials and platform comparisons.",
  }
};

export default function GlobalExchangesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <GlobalExchangesContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}