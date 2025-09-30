import { redirect } from 'next/navigation';

// Markets page redirects to market overview page
export default function MarketsPage() {
  redirect('/markets/overview');
}