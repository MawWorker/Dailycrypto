import { Metadata } from 'next';
import { NewsletterPageContent } from '@/components/newsletter/newsletter-page-content';

export const metadata: Metadata = {
  title: "Newsletter - Stay Updated with Crypto News | DailyCrypto",
  description: "Subscribe to DailyCrypto's newsletter for the latest cryptocurrency news, market insights, and educational content delivered to your inbox. Join thousands of Filipino crypto enthusiasts.",
  openGraph: {
    title: "Newsletter - Stay Updated with Crypto News",
    description: "Subscribe to DailyCrypto's newsletter for the latest cryptocurrency news, market insights, and educational content delivered to your inbox. Join thousands of Filipino crypto enthusiasts.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Newsletter - Stay Updated with Crypto News",
    description: "Subscribe to DailyCrypto's newsletter for the latest cryptocurrency news, market insights, and educational content delivered to your inbox. Join thousands of Filipino crypto enthusiasts.",
  }
};

export default function NewsletterPage() {
  return <NewsletterPageContent />;
}