import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function GET() {
  try {
    const config = {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uiu9mgqs',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
      hasToken: !!process.env.SANITY_API_READ_TOKEN,
    };

    const allQuery = '*[_type == "newsPost"]{ _id, title, slug }';
    const publishedQuery = '*[_type == "newsPost" && !(_id in path("drafts.**"))]{ _id, title, slug }';

    const allPosts = await client.fetch(allQuery);
    const publishedPosts = await client.fetch(publishedQuery);

    const authorQuery = '*[_type == "author"]{ _id, name }';
    const categoryQuery = '*[_type == "category"]{ _id, name }';

    const authors = await client.fetch(authorQuery);
    const categories = await client.fetch(categoryQuery);

    return NextResponse.json({
      success: true,
      config,
      counts: {
        allPosts: allPosts?.length || 0,
        publishedPosts: publishedPosts?.length || 0,
        drafts: (allPosts?.length || 0) - (publishedPosts?.length || 0),
        authors: authors?.length || 0,
        categories: categories?.length || 0,
      },
      allPosts: allPosts || [],
      publishedPosts: publishedPosts || [],
      authors: authors || [],
      categories: categories || [],
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack,
      config: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uiu9mgqs',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
        hasToken: !!process.env.SANITY_API_READ_TOKEN,
      },
    }, { status: 500 });
  }
}
