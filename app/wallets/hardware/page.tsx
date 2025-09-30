import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { HardwareWalletsContent } from '@/components/wallets/hardware-wallets-content';

export const metadata: Metadata = {
  title: "Hardware Wallets Guide - Best Crypto Security | DailyCrypto",
  description: "Complete guide to hardware wallets for cryptocurrency security. Learn about Ledger, Trezor, and other top hardware wallets. Step-by-step setup guides, reviews, and best practices.",
  openGraph: {
    title: "Hardware Wallets Guide - Best Crypto Security",
    description: "Complete guide to hardware wallets for cryptocurrency security. Learn about Ledger, Trezor, and other top hardware wallets. Step-by-step setup guides, reviews, and best practices.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hardware Wallets Guide - Best Crypto Security",
    description: "Complete guide to hardware wallets for cryptocurrency security. Learn about Ledger, Trezor, and other top hardware wallets. Step-by-step setup guides, reviews, and best practices.",
  }
};

export default function HardwareWalletsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl pt-8 pb-8">
        <HardwareWalletsContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}