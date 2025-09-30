import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { FeaturesNewsContent } from '@/components/news/features-news-content';

export const metadata: Metadata = {
  title: "Featured Crypto News - Premium Stories | DailyCrypto",
  description: "Discover our most important and impactful cryptocurrency stories. In-depth analysis, exclusive interviews, and premium content from DailyCrypto's editorial team.",
  openGraph: {
    title: "Featured Crypto News - Premium Stories",
    description: "Discover our most important and impactful cryptocurrency stories. In-depth analysis, exclusive interviews, and premium content from DailyCrypto's editorial team.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Featured Crypto News - Premium Stories",
    description: "Discover our most important and impactful cryptocurrency stories. In-depth analysis, exclusive interviews, and premium content from DailyCrypto's editorial team.",
  }
};

export default function FeaturesNewsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <FeaturesNewsContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}