import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar'
import { NewsletterFooter } from '@/components/footers/newsletter-footer'
import MarketTicker from '@/components/crypto/market-ticker'
import { getNewsPostBySlug, getAllNewsPostSlugs, getNewsPosts, urlFor } from '@/lib/sanity'
import PortableTextRenderer from '@/components/article/PortableTextRenderer'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
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
  const slugs = await getAllNewsPostSlugs()
  return slugs.map((item: any) => ({
    slug: item.slug
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const awaitedParams = await params
  const article = await getNewsPostBySlug(awaitedParams.slug)

  if (!article) {
    return {
      title: 'Article Not Found | DailyCrypto',
      description: 'The requested article could not be found.'
    }
  }

  return {
    title: article.seo?.metaTitle || `${article.title} | DailyCrypto`,
    description: article.seo?.metaDescription || article.excerpt || article.description,
    keywords: article.seo?.keywords,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.description,
      images: [urlFor(article.coverImage).width(1200).height(630).url()],
      type: 'article',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.description,
      images: [urlFor(article.coverImage).width(1200).height(630).url()],
    }
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const awaitedParams = await params
  const article = await getNewsPostBySlug(awaitedParams.slug)

  if (!article) {
    notFound()
  }

  const allPosts = await getNewsPosts(4)
  const relatedArticles = allPosts.filter((post: any) => post.slug.current !== awaitedParams.slug).slice(0, 3)

  const shareUrl = `https://dailycrypto.ph/news/${article.slug.current}`
  const shareTitle = encodeURIComponent(article.title)

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      <MarketTicker />

      <main className="container mx-auto px-4 pt-8 pb-8 max-w-4xl">
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

        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <article className="space-y-8">
          <header className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs font-medium">
                {article.category}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                {article.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {article.excerpt || article.description}
              </p>
            </div>

            <div className="mt-4 mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {article.author.name}</span>
              </div>

              <span>{formatDate(article.datePublished)}</span>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>

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

          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-sm">
            <Image
              src={urlFor(article.coverImage).width(1200).height(675).url()}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <PortableTextRenderer content={article.content} />
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-6 border-t">
              <span className="text-sm font-medium">Tags:</span>
              {article.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </article>

        <Separator className="my-12" />

        <section className="space-y-6">
          <h3 className="text-2xl font-bold">About the Author</h3>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {article.author.avatar && (
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0 shadow-sm">
                    <Image
                      src={urlFor(article.author.avatar).width(64).height(64).url()}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">{article.author.name}</h4>
                  {article.author.bio && (
                    <p className="text-muted-foreground">{article.author.bio}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

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

        {relatedArticles.length > 0 && (
          <>
            <Separator className="my-12" />
            <section className="space-y-6">
              <h3 className="text-2xl font-bold">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle: any) => (
                  <Card key={relatedArticle._id} className="group hover:shadow-md transition-shadow">
                    <div className="relative aspect-video rounded-t-xl overflow-hidden">
                      <Image
                        src={urlFor(relatedArticle.coverImage).width(400).height(225).url()}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <Badge variant="secondary">{relatedArticle.category}</Badge>
                        <span>{formatDate(relatedArticle.datePublished)}</span>
                      </div>
                      <Link href={`/news/${relatedArticle.slug.current}`}>
                        <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h4>
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedArticle.excerpt || relatedArticle.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <NewsletterFooter />
    </div>
  )
}
