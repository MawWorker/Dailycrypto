import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { ArchivesContent } from '@/components/archives/archives-content';

export const metadata: Metadata = {
  title: "Archives - Complete News & Summary Archive | DailyCrypto",
  description: "Browse our complete archive of daily recaps, weekly summaries, market analysis, and cryptocurrency news from the Philippines and worldwide.",
  openGraph: {
    title: "Archives - Complete News & Summary Archive",
    description: "Browse our complete archive of daily recaps, weekly summaries, market analysis, and cryptocurrency news from the Philippines and worldwide.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Archives - Complete News & Summary Archive",
    description: "Browse our complete archive of daily recaps, weekly summaries, market analysis, and cryptocurrency news from the Philippines and worldwide.",
  }
};

export default function ArchivesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <ArchivesContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}