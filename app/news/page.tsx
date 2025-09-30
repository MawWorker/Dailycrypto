import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockNewsPosts } from '@/lib/content.mock';
import { formatRelativeTime } from '@/lib/format';
import { Clock, User } from 'lucide-react';

export const metadata = {
  title: 'Crypto News Philippines',
  description: 'Latest cryptocurrency news, market updates, and regulatory developments in the Philippines.',
};

export default async function NewsPage() {
  const allPosts = mockNewsPosts;
  

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Crypto News</h1>
        <p className="text-muted-foreground">
          Stay updated with the latest cryptocurrency developments in the Philippines and worldwide.
        </p>
      </div>


      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.map((post) => (
          <Link key={post.id} href={`/news/${post.slug}`}>
            <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:border-brand-blue/50">
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 left-3 bg-brand-blue text-white"
                >
                  {post.category}
                </Badge>
              </div>
              
              <CardContent className="p-4 flex-1 flex flex-col">
                <h2 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{formatRelativeTime(post.datePublished)}</span>
                    </div>
                  </div>
                  <span className="font-medium">{post.readingTime}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  );
}