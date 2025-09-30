import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockExchanges } from '@/lib/content.mock';
import { Building2, Star, CheckCircle, XCircle, ExternalLink, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Best Crypto Exchanges Philippines',
  description: 'Compare the best cryptocurrency exchanges available in the Philippines. Find the right platform for buying, selling, and trading digital assets.',
};

export default function ExchangesPage() {
  const exchanges = mockExchanges;

  return (
    <div className="container py-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-2">
          <Building2 className="h-6 w-6 text-brand-blue" />
          <h1 className="text-3xl font-bold">Crypto Exchanges Philippines</h1>
        </div>
        <p className="text-muted-foreground">
          Compare the best cryptocurrency exchanges available to Filipino users. Find the right platform based on fees, features, and funding options.
        </p>
      </div>

      {/* Featured Exchanges */}
      <div className="space-y-6">
        {exchanges.map((exchange, index) => (
          <Card key={exchange.id} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm">
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-xl">{exchange.name}</CardTitle>
                      {exchange.phAvailable && (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          PH Available
                        </Badge>
                      )}
                      {index === 0 && (
                        <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-1">{exchange.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "h-4 w-4",
                          i < Math.floor(exchange.rating) 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-gray-300"
                        )} 
                      />
                    ))}
                    <span className="ml-2 font-semibold">{exchange.rating}</span>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/exchanges/${exchange.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Fees */}
                <div>
                  <h4 className="font-semibold mb-2">Fees</h4>
                  <div className="space-y-1 text-sm">
                    <div>Trading: <span className="font-medium">{exchange.fees.trading}</span></div>
                    <div>Withdrawal: <span className="font-medium">{exchange.fees.withdrawal}</span></div>
                  </div>
                </div>

                {/* Funding Methods */}
                <div>
                  <h4 className="font-semibold mb-2">Funding Options</h4>
                  <div className="flex flex-wrap gap-1">
                    {exchange.funding.map((method) => (
                      <Badge key={method} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* KYC */}
                <div>
                  <h4 className="font-semibold mb-2">KYC Requirements</h4>
                  <p className="text-sm text-muted-foreground">{exchange.kyc}</p>
                </div>

                {/* Quick Actions */}
                <div>
                  <h4 className="font-semibold mb-2">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <Link href={`/exchanges/${exchange.slug}`}>
                        <Shield className="h-4 w-4 mr-1" />
                        Full Review
                      </Link>
                    </Button>
                    {exchange.affiliateLink && (
                      <Button size="sm" className="w-full" asChild>
                        <a 
                          href={exchange.affiliateLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Visit Exchange
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">
                    <CheckCircle className="h-4 w-4 inline mr-1" />
                    Pros
                  </h4>
                  <ul className="space-y-1">
                    {exchange.pros.map((pro, index) => (
                      <li key={index} className="text-sm flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-red-700 dark:text-red-400">
                    <XCircle className="h-4 w-4 inline mr-1" />
                    Cons
                  </h4>
                  <ul className="space-y-1">
                    {exchange.cons.map((con, index) => (
                      <li key={index} className="text-sm flex items-start space-x-2">
                        <XCircle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Disclaimer */}
      <Card className="mt-8 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Affiliate Disclosure & Security Notice
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                CryptoPress may receive compensation when you sign up through our affiliate links. This doesn't affect our reviews or rankings. 
                Always conduct your own research and never invest more than you can afford to lose. Cryptocurrency investments carry significant risks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}