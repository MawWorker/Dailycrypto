import Link from 'next/link';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import { LatestNewsContent } from '@/components/news/latest-news-content';
import { RecommendedArticlesSidebar } from '@/components/news/recommended-articles-sidebar';
import MarketTicker from '@/components/crypto/market-ticker';

export const metadata = {
  title: 'Latest Crypto News - All News | DailyCrypto',
  description: 'Browse all the latest cryptocurrency news, market updates, and analysis from DailyCrypto Philippines.',
};

export default function LatestNewsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3">
            <LatestNewsContent />
          </div>
          
          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <RecommendedArticlesSidebar />
          </div>
        </div>
      </main>

      <NewsletterFooter />
    </div>
  );
}