import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { PhilippinesNewsContent } from '@/components/news/philippines-news-content';

export const metadata: Metadata = {
  title: "Philippines Crypto News - Local Market Updates | DailyCrypto",
  description: "Latest cryptocurrency news, regulations, and market developments specifically for the Philippines. Stay updated with BSP guidelines, local exchanges, and Filipino crypto adoption.",
  openGraph: {
    title: "Philippines Crypto News - Local Market Updates",
    description: "Latest cryptocurrency news, regulations, and market developments specifically for the Philippines. Stay updated with BSP guidelines, local exchanges, and Filipino crypto adoption.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Philippines Crypto News - Local Market Updates",
    description: "Latest cryptocurrency news, regulations, and market developments specifically for the Philippines. Stay updated with BSP guidelines, local exchanges, and Filipino crypto adoption.",
  }
};

export default function PhilippinesNewsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <PhilippinesNewsContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}