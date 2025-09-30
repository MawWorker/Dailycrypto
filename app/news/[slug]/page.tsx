import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, User, ArrowLeft, Share2, MessageCircle, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar'
import { NewsletterFooter } from '@/components/footers/newsletter-footer'
import MarketTicker from '@/components/crypto/market-ticker'
import { mockNewsPosts, latestCryptoNewsArticles } from '@/lib/content.mock'
import { latestNewsData } from '@/lib/latest-news-data'
import ArticleBody from '@/components/article/ArticleBody'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

// Mock article data generator
function generateArticleData(slug: string) {
  // Search in all available article sources
  const allArticles = [
    ...mockNewsPosts,
    ...latestCryptoNewsArticles,
    ...latestNewsData.featuredArticles,
    ...latestNewsData.smallArticles
  ]
  
  const foundArticle = allArticles.find(post => post.slug === slug)
  
  if (!foundArticle) {
    return null
  }
  
  return {
    id: foundArticle.id,
    title: foundArticle.title,
    slug: foundArticle.slug,
    excerpt: foundArticle.description || (foundArticle as any).excerpt || (foundArticle as any).blurb || 'No description available.',
    content: foundArticle.content || foundArticle.description || (foundArticle as any).excerpt || (foundArticle as any).blurb || '<p>Content not available.</p>',
    author: {
      name: foundArticle.author.name,
      bio: foundArticle.author.bio,
      avatar: foundArticle.author.avatar
    },
    publishedAt: foundArticle.datePublished,
    category: foundArticle.category,
    readingTime: typeof foundArticle.readingTime === 'string' 
      ? parseInt(foundArticle.readingTime) 
      : foundArticle.readingTime,
    featuredImage: foundArticle.coverImage,
    tags: foundArticle.tags || []
  }
}

function generateRelatedArticles(currentSlug: string) {
  const allArticles = [
    {
      title: 'GCash Partners with Major Crypto Exchange for Seamless Trading',
      slug: 'gcash-crypto-partnership',
      excerpt: 'Popular mobile wallet introduces direct cryptocurrency trading features.',
      category: 'Technology',
      publishedAt: '2024-01-13T09:15:00+08:00',
      featuredImage: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Philippine Peso Stablecoin Launches on Major Blockchain Networks',
      slug: 'peso-stablecoin-launch',
      excerpt: 'New PHP-backed stablecoin aims to facilitate local and international transactions.',
      category: 'Innovation',
      publishedAt: '2024-01-12T16:45:00+08:00',
      featuredImage: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Crypto Education Program Reaches 1 Million Filipinos',
      slug: 'crypto-education-milestone',
      excerpt: 'Government-backed initiative achieves significant outreach milestone.',
      category: 'Education',
      publishedAt: '2024-01-11T11:30:00+08:00',
      featuredImage: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ].filter(article => article.slug !== currentSlug)

  return allArticles.slice(0, 3)
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-PH', {
    timeZone: 'Asia/Manila',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export async function generateStaticParams() {
  // Use Set to collect unique slugs from all data sources
  const slugs = new Set<string>()
  
  // Add slugs from mockNewsPosts
  mockNewsPosts.forEach(post => slugs.add(post.slug))
  
  // Add slugs from latestCryptoNewsArticles
  latestCryptoNewsArticles.forEach(post => slugs.add(post.slug))
  
  // Add slugs from latestNewsData.featuredArticles
  latestNewsData.featuredArticles.forEach(post => slugs.add(post.slug))
  
  // Add slugs from latestNewsData.smallArticles
  latestNewsData.smallArticles.forEach(post => slugs.add(post.slug))
  
  // Convert Set to array of param objects
  return Array.from(slugs).map((slug) => ({
    slug: slug
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const awaitedParams = await params
  const article = generateArticleData(awaitedParams.slug)

  if (!article) {
    return {
      title: 'Article Not Found | DailyCrypto',
      description: 'The requested article could not be found.'
    }
  }

  return {
    title: `${article.title} | DailyCrypto`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
    }
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const awaitedParams = await params
  const article = generateArticleData(awaitedParams.slug)
  
  if (!article) {
    notFound()
  }
  
  const relatedArticles = generateRelatedArticles(awaitedParams.slug)

  const shareUrl = `https://dailycrypto.ph/news/${article.slug}`
  const shareTitle = encodeURIComponent(article.title)

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 pt-8 pb-8 max-w-4xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/news" className="hover:text-foreground transition-colors">
            News
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{article.title}</span>
        </nav>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <article className="space-y-8">
          {/* Article Header */}
          <header className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs font-medium">
                {article.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                {article.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Article Metadata */}
            <div className="mt-4 mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {article.author.name}</span>
              </div>
              
              <span>{formatDate(article.publishedAt)}</span>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-4 pt-4 border-t">
              <span className="text-sm font-medium">Share:</span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-0 shadow-none"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    X
                  </a>
                </Button>
                
                <Button size="sm" variant="outline" asChild>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-0 shadow-none"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Facebook
                  </a>
                </Button>
                
                <Button size="sm" variant="outline" asChild>
                  <a 
                    href={`https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-0 shadow-none"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Telegram
                  </a>
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-sm">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Article Content */}
          <ArticleBody>
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </ArticleBody>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t">
            <span className="text-sm font-medium">Tags:</span>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </article>

        <Separator className="my-12" />

        {/* Author Bio */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">About the Author</h3>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0 shadow-sm">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">{article.author.name}</h4>
                  <p className="text-muted-foreground">{article.author.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Newsletter CTA */}
        <section className="space-y-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <BookOpen className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-2xl font-bold">Stay Informed</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get the latest news and insights delivered straight to your inbox.
              </p>
              <Button size="lg" className="mt-4">
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Related Articles */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <Card key={relatedArticle.slug} className="group hover:shadow-md transition-shadow">
                <div className="relative aspect-video rounded-t-xl overflow-hidden">
                  <Image
                    src={relatedArticle.featuredImage}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <Badge variant="secondary">{relatedArticle.category}</Badge>
                    <span>{formatDate(relatedArticle.publishedAt)}</span>
                  </div>
                  <Link href={`/news/${relatedArticle.slug}`}>
                    <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Comments Section Placeholder */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Comments
          </h3>
          <Card>
            <CardContent className="p-8 text-center space-y-4">
              <MessageCircle className="w-12 h-12 mx-auto text-muted-foreground/50" />
              <h4 className="font-semibold text-lg">Join the Discussion</h4>
              <p className="text-muted-foreground">
                Comments are coming soon. Share your thoughts on our social media channels.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  Telegram
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <NewsletterFooter />
    </div>
  )
}