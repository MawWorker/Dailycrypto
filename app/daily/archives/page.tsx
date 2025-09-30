import { redirect } from 'next/navigation';

// Daily archives page redirects to main archives
export default function DailyArchivesPage() {
  redirect('/archives');
}