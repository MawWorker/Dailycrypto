import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { WeeklySummaryContent } from '@/components/daily/weekly-summary-content';

export const metadata: Metadata = {
  title: "Weekly Crypto Summary - Complete Week Recap | DailyCrypto",
  description: "Comprehensive weekly summary of all cryptocurrency news, market updates, and developments from the Philippines and worldwide.",
  openGraph: {
    title: "Weekly Crypto Summary - Complete Week Recap",
    description: "Comprehensive weekly summary of all cryptocurrency news, market updates, and developments from the Philippines and worldwide.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Weekly Crypto Summary - Complete Week Recap",
    description: "Comprehensive weekly summary of all cryptocurrency news, market updates, and developments from the Philippines and worldwide.",
  }
};

export default function WeeklySummaryPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 pb-8">
        <WeeklySummaryContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}