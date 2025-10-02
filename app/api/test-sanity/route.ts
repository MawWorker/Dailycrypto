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

    const query = '*[_type == "newsPost"][0...5]{ _id, title, slug }';
    const posts = await client.fetch(query);

    return NextResponse.json({
      success: true,
      config,
      postsCount: posts?.length || 0,
      posts: posts || [],
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
