import ClientHomePage from './ClientHomePage';
import { getFeaturedPublishedArticles, getPublishedArticles } from '@/lib/sanity-queries';
import { getImageUrl } from '@/lib/sanity';

export default async function Home() {
  const [featuredArticles, allArticles] = await Promise.all([
    getFeaturedPublishedArticles(4),
    getPublishedArticles()
  ]);

  const transformedFeatured = featuredArticles.map(article => ({
    ...article,
    coverImage: getImageUrl(article.coverImage, '/placeholder.jpg')
  }));

  const transformedAll = allArticles.map(article => ({
    ...article,
    coverImage: getImageUrl(article.coverImage, '/placeholder.jpg')
  }));

  return <ClientHomePage featuredArticles={transformedFeatured} allArticles={transformedAll} />;
}