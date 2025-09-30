import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User, ArrowLeft, Share2, Download, BookOpen, Eye, Heart, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar'
import { NewsletterFooter } from '@/components/footers/newsletter-footer'
import MarketTicker from '@/components/crypto/market-ticker'
import ArticleBody from '@/components/article/ArticleBody'
import { generateArchiveData } from '@/components/archives/archives-content'

// Generate archive data for specific slug
function generateArchiveDataForSlug(slug: string) {
  // Extract date from slug for realistic data
  const dateMatch = slug.match(/(\d{4}-\d{2}-\d{2})/);
  const archiveDate = dateMatch ? new Date(dateMatch[1]) : new Date();
  
  // Determine archive type from slug
  let type = 'daily';
  if (slug.includes('weekly')) type = 'weekly';
  else if (slug.includes('monthly')) type = 'monthly';
  else if (slug.includes('special')) type = 'special';

  const typeLabels = {
    daily: 'Daily Crypto Recap',
    weekly: 'Weekly Crypto Summary', 
    monthly: 'Monthly Crypto Report',
    special: 'Special Report'
  };

  const storyCounts = {
    daily: 15 + Math.floor(Math.random() * 20),
    weekly: 50 + Math.floor(Math.random() * 40),
    monthly: 200 + Math.floor(Math.random() * 100),
    special: 1
  };

  return {
    id: slug,
    title: `${typeLabels[type as keyof typeof typeLabels]} - ${archiveDate.toLocaleDateString('en-PH', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}`,
    slug,
    type,
    excerpt: `Comprehensive ${type} summary featuring ${storyCounts[type as keyof typeof storyCounts]} stories, market updates, and key developments from the Philippines and worldwide.`,
    content: generateArchiveContent(type, archiveDate, storyCounts[type as keyof typeof storyCounts]),
    author: {
      name: 'DailyCrypto Editorial Team',
      bio: 'Our editorial team curates and analyzes the most important cryptocurrency news and developments.',
      avatar: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    publishedAt: archiveDate.toISOString(),
    category: typeLabels[type as keyof typeof typeLabels],
    readingTime: type === 'daily' ? 8 : type === 'weekly' ? 15 : type === 'monthly' ? 25 : 30,
    featuredImage: `https://images.unsplash.com/photo-1751755359997?q=80&w=764&auto=format&fit=crop`,
    tags: [`${type.charAt(0).toUpperCase() + type.slice(1)} Summary`, 'Market Analysis', 'Philippines', 'Global News'],
    storiesCount: storyCounts[type as keyof typeof storyCounts],
    engagement: {
      views: `${(Math.random() * 100 + 20).toFixed(1)}K`,
      likes: `${(Math.random() * 5 + 1).toFixed(1)}K`,
      shares: `${(Math.random() * 3 + 0.5).toFixed(1)}K`,
      comments: `${Math.floor(Math.random() * 500 + 100)}`
    }
  }
}

interface ArchivePageProps {
  params: Promise<{
    slug: string
  }>
}

function generateArchiveContent(type: string, date: Date, storyCount: number): string {
  const dateStr = date.toLocaleDateString('en-PH', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return `
    <h2>Archive Overview</h2>
    <p>Welcome to our comprehensive ${type} archive for ${dateStr}. This collection represents our commitment to documenting the rapidly evolving cryptocurrency landscape in the Philippines and worldwide.</p>

    <h3>What's Included</h3>
    <p>This archive contains ${storyCount} carefully curated ${storyCount === 1 ? 'story' : 'stories'} covering:</p>
    <ul>
      <li><strong>Market Analysis</strong> - Price movements, trading volumes, and market sentiment</li>
      <li><strong>Regulatory Updates</strong> - Government policies and compliance developments</li>
      <li><strong>Technology News</strong> - Blockchain innovations and protocol upgrades</li>
      <li><strong>Philippine Focus</strong> - Local market developments and adoption trends</li>
      <li><strong>Global Perspective</strong> - International developments affecting the crypto space</li>
    </ul>

    <h3>Key Highlights</h3>
    <p>During this period, the cryptocurrency market experienced significant developments that shaped investor sentiment and market dynamics. Our analysis covers both the immediate impacts and longer-term implications of these events.</p>

    <h4>Market Performance</h4>
    <p>The ${type} period saw notable price movements across major cryptocurrencies, with Bitcoin and Ethereum leading market trends. Our comprehensive analysis examines the factors driving these movements and their implications for Filipino investors.</p>

    <h4>Regulatory Landscape</h4>
    <p>Regulatory developments continued to play a crucial role in shaping the cryptocurrency ecosystem. The Bangko Sentral ng Pilipinas (BSP) and other regional authorities made important announcements that affect how Filipinos can participate in the digital asset economy.</p>

    <h3>Philippine Market Focus</h3>
    <p>As the leading cryptocurrency news source in the Philippines, we provide special attention to developments that directly impact Filipino investors, traders, and businesses exploring blockchain technology.</p>

    <h3>Looking Forward</h3>
    <p>The insights and trends identified in this archive continue to influence current market conditions. Understanding these historical developments provides valuable context for making informed decisions in the dynamic cryptocurrency market.</p>

    <p>Thank you for exploring our archives. Stay informed with our latest updates and analysis as we continue to cover the evolving world of cryptocurrency in the Philippines and beyond.</p>
  `;
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
  // Generate archive data for static params (server-side)
  const archives = [];
  const today = new Date('2024-12-20');
  
  // Generate 30 daily recaps
  for (let i = 0; i < 30; i++) {
    const date = new Date(today.getTime() - (i * 24 * 60 * 60 * 1000));
    archives.push({
      slug: `daily-recap-${date.toISOString().split('T')[0]}`
    });
  }
  
  // Generate 8 weekly summaries
  for (let i = 0; i < 8; i++) {
    const date = new Date(today.getTime() - (i * 7 * 24 * 60 * 60 * 1000));
    archives.push({
      slug: `weekly-summary-${date.toISOString().split('T')[0]}`
    });
  }
  
  // Generate 3 monthly reports
  for (let i = 0; i < 3; i++) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    archives.push({
      slug: `monthly-report-${date.toISOString().split('T')[0].substring(0, 7)}`
    });
  }
  
  return archives;
}

export async function generateMetadata({ params }: ArchivePageProps): Promise<Metadata> {
  const awaitedParams = await params
  const archive = generateArchiveDataForSlug(awaitedParams.slug)

  return {
    title: `${archive.title} | DailyCrypto Archives`,
    description: archive.excerpt,
    openGraph: {
      title: archive.title,
      description: archive.excerpt,
      images: [archive.featuredImage],
      type: 'article',
      publishedTime: archive.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: archive.title,
      description: archive.excerpt,
      images: [archive.featuredImage],
    }
  }
}

export default async function ArchivePage({ params }: ArchivePageProps) {
  const awaitedParams = await params
  const archive = generateArchiveDataForSlug(awaitedParams.slug)
  
  if (!archive) {
    notFound()
  }

  const shareUrl = `https://dailycrypto.ph/archives/${archive.slug}`
  const shareTitle = encodeURIComponent(archive.title)

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
          <Link href="/archives" className="hover:text-foreground transition-colors">
            Archives
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{archive.title}</span>
        </nav>

        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/archives">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Archives
          </Link>
        </Button>

        <article className="space-y-8">
          {/* Archive Header */}
          <header className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs font-medium">
                  {archive.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {archive.storiesCount} {archive.storiesCount === 1 ? 'story' : 'stories'}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground font-[var(--font-display)]">
                {archive.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {archive.excerpt}
              </p>
            </div>

            {/* Archive Metadata */}
            <div className="mt-4 mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {archive.author.name}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(archive.publishedAt)}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{archive.readingTime} min read</span>
              </div>

              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{archive.engagement.views} views</span>
              </div>
            </div>

            {/* Engagement Metrics */}
            <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span>{archive.engagement.likes} likes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Share2 className="h-4 w-4" />
                  <span>{archive.engagement.shares} shares</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{archive.engagement.comments} comments</span>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-0 shadow-none"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </a>
                </Button>
                
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-sm">
            <Image
              src={archive.featuredImage}
              alt={archive.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Archive Content */}
          <ArticleBody>
            <div 
              dangerouslySetInnerHTML={{ __html: archive.content }}
            />
          </ArticleBody>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t">
            <span className="text-sm font-medium">Tags:</span>
            {archive.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </article>

        <Separator className="my-12" />

        {/* Archive Navigation */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold">Related Archives</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Previous Daily Recap',
                slug: 'daily-recap-2024-12-19',
                type: 'daily',
                date: '2024-12-19'
              },
              {
                title: 'Latest Weekly Summary',
                slug: 'weekly-summary-2024-12-16',
                type: 'weekly', 
                date: '2024-12-16'
              },
              {
                title: 'Monthly Report December',
                slug: 'monthly-report-2024-12',
                type: 'monthly',
                date: '2024-12-01'
              }
            ].map((relatedArchive) => (
              <Card key={relatedArchive.slug} className="group hover:shadow-md transition-shadow">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <Badge variant="secondary">{relatedArchive.type}</Badge>
                    <span>{formatDate(relatedArchive.date)}</span>
                  </div>
                  <Link href={`/archives/${relatedArchive.slug}`}>
                    <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {relatedArchive.title}
                    </h4>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Newsletter CTA */}
        <section className="space-y-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center space-y-4">
              <BookOpen className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-2xl font-bold">Never Miss an Update</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Subscribe to our newsletter to get the latest archives and summaries delivered to your inbox.
              </p>
              <Button size="lg" className="mt-4">
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <NewsletterFooter />
    </div>
  )
}