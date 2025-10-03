import { client } from './sanity'

export async function getPublishedArticles() {
  const query = `*[_type == "newsPost" && !(_id in path("drafts.**"))] | order(datePublished desc) {
    _id,
    title,
    slug,
    description,
    excerpt,
    coverImage {
      asset->{
        _id,
        url
      }
    },
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
    const result = await client.fetch(query, {}, {
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    return result || []
  } catch (error) {
    console.error('Error fetching published articles:', error)
    return []
  }
}

export async function getPublishedArticleBySlug(slug: string) {
  const query = `*[_type == "newsPost" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    slug,
    description,
    excerpt,
    content,
    coverImage {
      asset->{
        _id,
        url
      }
    },
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

  try {
    const result = await client.fetch(query, { slug }, {
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    return result
  } catch (error) {
    console.error('Error fetching article by slug:', error)
    return null
  }
}

export async function getFeaturedPublishedArticles(limit: number = 3) {
  const query = `*[_type == "newsPost" && featured == true && !(_id in path("drafts.**"))] | order(datePublished desc) [0...${limit}] {
    _id,
    title,
    slug,
    description,
    excerpt,
    coverImage {
      asset->{
        _id,
        url
      }
    },
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

  try {
    const result = await client.fetch(query, {}, {
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    return result || []
  } catch (error) {
    console.error('Error fetching featured articles:', error)
    return []
  }
}

export async function getPublishedArticlesByCategory(categoryName: string, limit?: number) {
  const query = `*[_type == "newsPost" && category->name == $categoryName && !(_id in path("drafts.**"))] | order(datePublished desc) ${limit ? `[0...${limit}]` : ''} {
    _id,
    title,
    slug,
    description,
    excerpt,
    coverImage {
      asset->{
        _id,
        url
      }
    },
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

  try {
    const result = await client.fetch(query, { categoryName }, {
      cache: 'no-store',
      next: { revalidate: 0 }
    })
    return result || []
  } catch (error) {
    console.error('Error fetching articles by category:', error)
    return []
  }
}

export async function getDebugInfo() {
  try {
    const allPostsQuery = '*[_type == "newsPost"]{ _id, title, "isDraft": _id in path("drafts.**") }'
    const publishedPostsQuery = '*[_type == "newsPost" && !(_id in path("drafts.**"))]{ _id, title }'

    const [allPosts, publishedPosts] = await Promise.all([
      client.fetch(allPostsQuery, {}, { cache: 'no-store' }),
      client.fetch(publishedPostsQuery, {}, { cache: 'no-store' })
    ])

    return {
      totalDocuments: allPosts?.length || 0,
      publishedDocuments: publishedPosts?.length || 0,
      draftDocuments: (allPosts?.length || 0) - (publishedPosts?.length || 0),
      sampleDocuments: allPosts?.slice(0, 5).map((p: any) => ({
        id: p._id,
        title: p.title,
        isDraft: p.isDraft
      })) || [],
      config: {
        projectId: client.config().projectId,
        dataset: client.config().dataset,
        apiVersion: client.config().apiVersion,
        perspective: client.config().perspective
      }
    }
  } catch (error) {
    console.error('Error fetching debug info:', error)
    return {
      error: error instanceof Error ? error.message : 'Unknown error',
      totalDocuments: 0,
      publishedDocuments: 0,
      draftDocuments: 0,
      sampleDocuments: [],
      config: {}
    }
  }
}
