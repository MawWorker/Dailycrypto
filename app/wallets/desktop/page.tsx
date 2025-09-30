import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { DesktopWalletsContent } from '@/components/wallets/desktop-wallets-content';

export const metadata: Metadata = {
  title: "Desktop Wallets Guide - Best Crypto Desktop Wallets | DailyCrypto",
  description: "Complete guide to cryptocurrency desktop wallets. Learn about the top desktop wallets, setup guides, security best practices, and expert reviews for safe crypto storage on your computer.",
  openGraph: {
    title: "Desktop Wallets Guide - Best Crypto Desktop Wallets",
    description: "Complete guide to cryptocurrency desktop wallets. Learn about the top desktop wallets, setup guides, security best practices, and expert reviews for safe crypto storage on your computer.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Desktop Wallets Guide - Best Crypto Desktop Wallets",
    description: "Complete guide to cryptocurrency desktop wallets. Learn about the top desktop wallets, setup guides, security best practices, and expert reviews for safe crypto storage on your computer.",
  }
};

export default function DesktopWalletsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <DesktopWalletsContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}