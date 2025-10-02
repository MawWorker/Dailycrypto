import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uiu9mgqs',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'published',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source) return null

  if (source.secure_url) {
    return { url: () => source.secure_url }
  }

  if (source.url) {
    return { url: () => source.url }
  }

  return builder.image(source)
}

export function getImageUrl(source: any, fallback: string = ''): string {
  if (!source) return fallback

  if (source.secure_url) return source.secure_url
  if (source.url) return source.url

  try {
    return builder.image(source).url()
  } catch (error) {
    console.error('Error building image URL:', error)
    return fallback
  }
}

export async function getNewsPosts(limit?: number) {
  const query = `*[_type == "newsPost"] | order(datePublished desc) ${limit ? `[0...${limit}]` : ''} {
    _id,
    title,
    slug,
    description,
    excerpt,
    coverImage,
    "author": author->{
      name,
      bio,
      avatar
    },
    "category": category->name,
    tags,
    tickers,
    datePublished,
    dateModified,
    readingTime,
    featured,
    premium,
    exclusive,
    contentType,
    impact,
    language
  }`

  try {
    const result = await client.fetch(query, {}, { next: { revalidate: 60 } })
    console.log('Sanity fetch successful, posts:', result?.length || 0)
    return result
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return []
  }
}

export async function getNewsPostBySlug(slug: string) {
  const query = `*[_type == "newsPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    excerpt,
    content,
    coverImage,
    "author": author->{
      name,
      bio,
      avatar
    },
    "category": category->name,
    tags,
    tickers,
    datePublished,
    dateModified,
    readingTime,
    featured,
    premium,
    exclusive,
    contentType,
    impact,
    language,
    seo
  }`

  return await client.fetch(query, { slug }, { next: { revalidate: 60 } })
}

export async function getFeaturedNewsPosts(limit: number = 3) {
  const query = `*[_type == "newsPost" && featured == true] | order(datePublished desc) [0...${limit}] {
    _id,
    title,
    slug,
    description,
    excerpt,
    coverImage,
    "author": author->{
      name,
      bio,
      avatar
    },
    "category": category->name,
    tags,
    datePublished,
    readingTime,
    featured
  }`

  return await client.fetch(query, {}, { next: { revalidate: 60 } })
}

export async function getNewsPostsByCategory(categoryName: string, limit?: number) {
  const query = `*[_type == "newsPost" && category->name == $categoryName] | order(datePublished desc) ${limit ? `[0...${limit}]` : ''} {
    _id,
    title,
    slug,
    description,
    excerpt,
    coverImage,
    "author": author->{
      name,
      bio,
      avatar
    },
    "category": category->name,
    tags,
    datePublished,
    readingTime
  }`

  return await client.fetch(query, { categoryName }, { next: { revalidate: 60 } })
}

export async function getAllNewsPostSlugs() {
  const query = `*[_type == "newsPost"] { "slug": slug.current }`
  return await client.fetch(query)
}
