import { Metadata } from 'next';
import { Suspense } from 'react';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { SearchResultsPage } from '@/components/search/search-results-page';

export const metadata: Metadata = {
  title: "Search Results - DailyCrypto",
  description: "Search results for cryptocurrency news, guides, and market information on DailyCrypto Philippines.",
  openGraph: {
    title: "Search Results - DailyCrypto",
    description: "Search results for cryptocurrency news, guides, and market information on DailyCrypto Philippines.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Search Results - DailyCrypto",
    description: "Search results for cryptocurrency news, guides, and market information on DailyCrypto Philippines.",
  }
};

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <Suspense fallback={
          <div className="flex items-center justify-center py-12">
            <div className="text-center space-y-4">
              <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto" />
              <p className="text-muted-foreground">Loading search results...</p>
            </div>
          </div>
        }>
          <SearchResultsPage />
        </Suspense>
      </main>
      <NewsletterFooter />
    </div>
  );
}