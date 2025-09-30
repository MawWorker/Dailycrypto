"use client"

import { Clock, User, Tag, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { LatestCryptoNews } from "./latest-crypto-news"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PriceTicker {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
}

interface Article {
  id: string
  title: string
  excerpt: string
  author: string
  publishedAt: string
  category: string
  imageUrl: string
  slug: string
}

interface HeroNewsSectionProps {
  featuredArticle: Article
  secondaryArticles: Article[]
  priceTickers: PriceTicker[]
}

const formatTimeAgo = (dateString: string) => {
  const now = new Date()
  const publishDate = new Date(dateString)
  const diffInMinutes = Math.floor((now.getTime() - publishDate.getTime()) / (1000 * 60))
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)}h ago`
  } else {
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }
}

const formatManilaTime = (dateString: string) => {
  return new Intl.DateTimeFormat('en-PH', {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(dateString))
}

// YouTube Video Component
const YouTubeVideoCard = () => {
  return (
    <div className="group overflow-hidden rounded-xl bg-[var(--color-surface)] border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer mb-4">
      <div className="relative h-32 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center group-hover:bg-black/80 transition-colors">
            <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          12:34
        </div>
      </div>
      <div className="p-3">
        <h4 className="font-semibold text-sm text-[var(--color-text-primary)] group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
          Bitcoin Technical Analysis: Key Levels to Watch
        </h4>
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
          <span>DailyCrypto</span>
          <span>•</span>
          <span>2 hours ago</span>
        </div>
      </div>
    </div>
  )
}

export default function HeroNewsSection({
  featuredArticle,
  secondaryArticles,
  priceTickers
}: HeroNewsSectionProps) {
  // Small articles section - exactly 3 articles
  const smallArticles = secondaryArticles.slice(0, 3)
  
  // State for currently displayed hero article (index in smallArticles array)
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0)
  
  // Currently displayed hero article
  const currentHeroArticle = smallArticles[selectedHeroIndex]

  // Navigation handlers for arrow buttons
  const handlePrevious = () => {
    setSelectedHeroIndex((prev) => (prev === 0 ? smallArticles.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setSelectedHeroIndex((prev) => (prev === smallArticles.length - 1 ? 0 : prev + 1))
  }

  // Handler for when user clicks on a small article
  const handleSmallArticleSelect = (index: number) => {
    setSelectedHeroIndex(index)
  }

  return (
    <section className="bg-[var(--color-background-site)] pt-8 pb-4 lg:pt-10 lg:pb-6">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Mobile Layout - Stack vertically */}
        <div className="lg:hidden space-y-6">
          {/* 1. Main Hero Article - Mobile */}
          <article className="group overflow-hidden rounded-xl bg-[var(--color-surface)] border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-500 hover:shadow-xl relative">
            <div className="relative">
              <Link href={`/news/${currentHeroArticle.slug}`} className="block">
                <div 
                  className="relative h-64 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${currentHeroArticle.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  
                  {/* Category Badge */}
                  <div className="absolute left-4 top-4">
                    <Badge className="bg-[var(--color-primary-brand)] text-white hover:bg-[var(--color-primary-brand)]/90">
                      <Tag className="mr-1 h-3 w-3" />
                      {currentHeroArticle.category}
                    </Badge>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handlePrevious}
                      className="w-8 h-8 p-0 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white border transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleNext}
                      className="w-8 h-8 p-0 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white border transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Link>

              <div className="p-4 sm:p-6">
                <Link href={`/news/${currentHeroArticle.slug}`}>
                  <h1 className="mb-3 font-[var(--font-display)] text-xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-2xl">
                    {currentHeroArticle.title}
                  </h1>
                  
                  <p className="mb-4 line-clamp-2 text-sm text-[var(--color-text-secondary)] sm:text-base">
                    {currentHeroArticle.excerpt}
                  </p>
                </Link>

                {/* Article Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-secondary)] sm:text-sm">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{currentHeroArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{formatManilaTime(currentHeroArticle.publishedAt)} Manila</span>
                  </div>
                  <div className="text-[var(--color-text-secondary)]/80">
                    {formatTimeAgo(currentHeroArticle.publishedAt)}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* 2. Small Articles - Mobile */}
          <div className="bg-[var(--color-surface)] rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            {smallArticles.map((article, index) => (
              <div key={`small-article-${index}`}>
                <article 
                  onClick={() => {
                    handleSmallArticleSelect(index)
                  }}
                  className="group cursor-pointer relative transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <Link href={`/news/${article.slug}`} className="block">
                    {/* Golden Selection Indicator */}
                    {selectedHeroIndex === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-yellow-400 transition-all duration-300" />
                    )}
                    
                    <div className="p-4 flex gap-3">
                      {/* Thumbnail */}
                      <div 
                        className="w-16 h-16 bg-cover bg-center rounded-xl flex-shrink-0"
                        style={{ backgroundImage: `url(${article.imageUrl})` }}
                      >
                        <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-xl shadow-sm" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <Badge 
                            variant="secondary" 
                            className="text-xs px-2 py-0.5 flex-shrink-0 font-medium transition-colors duration-300 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          >
                            {article.category}
                          </Badge>
                          <span className="text-xs text-[var(--color-text-secondary)] font-medium">
                            {formatTimeAgo(article.publishedAt)}
                          </span>
                        </div>
                      
                        <h3 className={`font-semibold text-xs line-clamp-2 mb-1.5 leading-tight transition-colors duration-300 ${
                          selectedHeroIndex === index 
                            ? 'text-[var(--color-text-primary)]' 
                            : 'text-[var(--color-text-primary)] group-hover:text-blue-600'
                        }`}>
                          {article.title}
                        </h3>
                      
                        <p className="text-xs text-[var(--color-text-secondary)] line-clamp-1 leading-relaxed font-normal">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
                {/* Horizontal separator - hide after last item */}
                {index < 2 && (
                  <div className="border-b border-slate-200 dark:border-slate-700" />
                )}
              </div>
            ))}
          </div>

          {/* 3. Latest Crypto News - Mobile */}
          <div>
            <LatestCryptoNews />
          </div>

          {/* 4. YouTube Video - Mobile */}
          <YouTubeVideoCard />
        </div>

        {/* Desktop Layout - 4 columns (unchanged) */}
        <div className="hidden lg:grid gap-6 lg:grid-cols-4 lg:h-[600px]">
          {/* Latest Crypto News Sidebar - Column 1 */}
          <div className="lg:col-span-1">
            <LatestCryptoNews />
          </div>

          {/* Main Hero Article - Columns 2-3 */}
          <div className="lg:col-span-2">
            <article className="group overflow-hidden rounded-xl bg-[var(--color-surface)] border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-500 hover:shadow-xl h-full relative">
              <div className="relative">
                <Link href={`/news/${currentHeroArticle.slug}`} className="block">
                <div 
                  className="relative h-64 bg-cover bg-center sm:h-80 lg:h-96 transition-all duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${currentHeroArticle.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  
                  {/* Category Badge */}
                  <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                    <Badge className="bg-[var(--color-primary-brand)] text-white hover:bg-[var(--color-primary-brand)]/90">
                      <Tag className="mr-1 h-3 w-3" />
                      {currentHeroArticle.category}
                    </Badge>
                  </div>

                  {/* Navigation Buttons with Fade Animation */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handlePrevious}
                      className="w-8 h-8 p-0 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white border transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleNext}
                      className="w-8 h-8 p-0 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white border transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                </Link>

                <div className="p-4 sm:p-6">
                  <Link href={`/news/${currentHeroArticle.slug}`}>
                  <h1 className="mb-3 font-[var(--font-display)] text-xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-2xl lg:text-3xl">
                    {currentHeroArticle.title}
                  </h1>
                  
                  <p className="mb-4 line-clamp-2 text-sm text-[var(--color-text-secondary)] sm:text-base">
                    {currentHeroArticle.excerpt}
                  </p>
                  </Link>

                  {/* Article Metadata */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-secondary)] sm:text-sm">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{currentHeroArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{formatManilaTime(currentHeroArticle.publishedAt)} Manila</span>
                    </div>
                    <div className="text-[var(--color-text-secondary)]/80">
                      {formatTimeAgo(currentHeroArticle.publishedAt)}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column - YouTube Video + Small Articles - Column 4 */}
          <div className="lg:col-span-1 flex flex-col h-full">
            {/* YouTube Video */}
            <YouTubeVideoCard />

            {/* Small Articles */}
            <div className="flex-1 overflow-hidden bg-[var(--color-surface)] rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              {smallArticles.map((article, index) => (
                <div key={`small-article-${index}`}>
                  <article 
                    onClick={() => {
                      handleSmallArticleSelect(index)
                    }}
                    className="group cursor-pointer relative transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <Link href={`/news/${article.slug}`} className="block">
                    {/* Golden Selection Indicator - Single Thin Line */}
                    {selectedHeroIndex === index && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-yellow-400 transition-all duration-300" />
                    )}
                    
                    <div className="p-4 flex gap-3">
                      {/* Thumbnail */}
                      <div 
                        className="w-16 h-16 bg-cover bg-center rounded-xl flex-shrink-0"
                        style={{ backgroundImage: `url(${article.imageUrl})` }}
                      >
                        <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-xl shadow-sm" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <Badge 
                            variant="secondary" 
                            className="text-xs px-2 py-0.5 flex-shrink-0 font-medium transition-colors duration-300 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          >
                            {article.category}
                          </Badge>
                          <span className="text-xs text-[var(--color-text-secondary)] font-medium">
                            {formatTimeAgo(article.publishedAt)}
                          </span>
                        </div>
                      
                        <h3 className={`font-semibold text-xs line-clamp-2 mb-1.5 leading-tight transition-colors duration-300 ${
                          selectedHeroIndex === index 
                            ? 'text-[var(--color-text-primary)]' 
                            : 'text-[var(--color-text-primary)] group-hover:text-blue-600'
                        }`}>
                          {article.title}
                        </h3>
                      
                        <p className="text-xs text-[var(--color-text-secondary)] line-clamp-1 leading-relaxed font-normal">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                    </Link>
                  </article>
                  {/* Horizontal separator - hide after last item */}
                  {index < 2 && (
                    <div className="border-b border-slate-200 dark:border-slate-700" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}