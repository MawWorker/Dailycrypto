import { Metadata } from 'next';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { RisksSecurityContent } from '@/components/guides/risks-security-content';

export const metadata: Metadata = {
  title: "Crypto Risks & Security - Complete Safety Guide | DailyCrypto",
  description: "Learn about cryptocurrency risks and security best practices. Understand volatility, scams, hacking threats, and how to protect your digital assets in the Philippines.",
  openGraph: {
    title: "Crypto Risks & Security - Complete Safety Guide",
    description: "Learn about cryptocurrency risks and security best practices. Understand volatility, scams, hacking threats, and how to protect your digital assets in the Philippines.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Crypto Risks & Security - Complete Safety Guide",
    description: "Learn about cryptocurrency risks and security best practices. Understand volatility, scams, hacking threats, and how to protect your digital assets in the Philippines.",
  }
};

export default function RisksSecurityPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-site)]">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 sm:px-6 max-w-6xl pt-8 pb-8">
        <RisksSecurityContent />
      </main>

      <NewsletterFooter />
    </div>
  );
}