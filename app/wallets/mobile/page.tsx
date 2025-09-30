import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { MobileWalletsContent } from '@/components/wallets/mobile-wallets-content';

export const metadata: Metadata = {
  title: "Mobile Wallets Guide - Best Crypto Mobile Wallets | DailyCrypto",
  description: "Complete guide to cryptocurrency mobile wallets. Learn about the top 10 mobile wallets, setup guides, security best practices, and expert reviews for safe crypto storage on your phone.",
  openGraph: {
    title: "Mobile Wallets Guide - Best Crypto Mobile Wallets",
    description: "Complete guide to cryptocurrency mobile wallets. Learn about the top 10 mobile wallets, setup guides, security best practices, and expert reviews for safe crypto storage on your phone.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mobile Wallets Guide - Best Crypto Mobile Wallets",
    description: "Complete guide to cryptocurrency mobile wallets. Learn about the top 10 mobile wallets, setup guides, security best practices, and expert reviews for safe crypto storage on your phone.",
  }
};

export default function MobileWalletsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <MobileWalletsContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}