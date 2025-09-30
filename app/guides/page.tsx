import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockGuides } from '@/lib/content.mock';
import { formatRelativeTime } from '@/lib/format';
import { Clock, User, BookOpen, Filter } from 'lucide-react';

export const metadata = {
  title: 'Crypto Guides Philippines',
  description: 'Comprehensive cryptocurrency guides and tutorials for Filipino users. Learn how to buy, trade, and secure your digital assets.',
};

const difficultyColors = {
  Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};

export default function GuidesPage() {
  const allGuides = mockGuides;
  const categories = Array.from(new Set(allGuides.map(guide => guide.category)));
  const difficulties = Array.from(new Set(allGuides.map(guide => guide.difficulty)));

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-2">
          <BookOpen className="h-6 w-6 text-brand-blue" />
          <h1 className="text-3xl font-bold">Crypto Guides</h1>
        </div>
        <p className="text-muted-foreground">
          Learn cryptocurrency fundamentals, trading strategies, and security best practices tailored for Filipino users.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-4 w-4" />
          <span className="font-medium">Filter guides:</span>
        </div>
        
        <div className="space-y-3">
          <div>
            <span className="text-sm font-medium mb-2 block">By Category:</span>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">All Categories</Button>
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <span className="text-sm font-medium mb-2 block">By Difficulty:</span>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">All Levels</Button>
              {difficulties.map((difficulty) => (
                <Button key={difficulty} variant="outline" size="sm">
                  {difficulty}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allGuides.map((guide) => (
          <Link key={guide.id} href={`/guides/${guide.slug}`}>
            <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:border-brand-blue/50">
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={guide.coverImage}
                  alt={guide.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-brand-blue text-white">
                    {guide.category}
                  </Badge>
                  <Badge 
                    variant="secondary"
                    className={difficultyColors[guide.difficulty]}
                  >
                    {guide.difficulty}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <h2 className="font-semibold text-xl mb-3 line-clamp-2 group-hover:text-brand-blue transition-colors">
                  {guide.title}
                </h2>
                
                <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{guide.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{formatRelativeTime(guide.datePublished)}</span>
                    </div>
                  </div>
                  <span className="font-medium">{guide.readingTime}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Coming Soon Section */}
      <Card className="mt-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <CardContent className="p-8 text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-4 text-brand-blue" />
          <h3 className="text-xl font-bold mb-2">More Guides Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            We're working on comprehensive guides covering advanced topics like DeFi, NFTs, and institutional adoption in the Philippines.
          </p>
          <Button variant="outline">
            Request a Guide Topic
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}