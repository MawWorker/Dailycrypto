import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { TodaysRecapContent } from '@/components/daily/todays-recap-content';

export const metadata: Metadata = {
  title: "Today's Crypto Recap - Daily News Summary | DailyCrypto",
  description: "Comprehensive daily summary of all cryptocurrency news, market updates, and developments from the Philippines and worldwide.",
  openGraph: {
    title: "Today's Crypto Recap - Daily News Summary",
    description: "Comprehensive daily summary of all cryptocurrency news, market updates, and developments from the Philippines and worldwide.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Today's Crypto Recap - Daily News Summary",
    description: "Comprehensive daily summary of all cryptocurrency news, market updates, and developments from the Philippines and worldwide.",
  }
};

export default function TodaysRecapPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 pb-8">
        <TodaysRecapContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}