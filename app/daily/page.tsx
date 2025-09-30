import { redirect } from 'next/navigation';

// Daily page redirects to today's recap
export default function DailyPage() {
  redirect('/daily/today');
}