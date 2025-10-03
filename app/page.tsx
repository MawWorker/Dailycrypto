import ClientHomePage from './ClientHomePage';
import { getFeaturedPublishedArticles, getPublishedArticles } from '@/lib/sanity-queries';

export default async function Home() {
  const [featuredArticles, allArticles] = await Promise.all([
    getFeaturedPublishedArticles(4),
    getPublishedArticles()
  ]);

  return <ClientHomePage featuredArticles={featuredArticles} allArticles={allArticles} />;
}