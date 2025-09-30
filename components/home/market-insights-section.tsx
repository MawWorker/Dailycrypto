import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap,
  BookOpen,
  Building2,
  Wallet,
  ChevronRight,
  Star,
  Shield,
  Smartphone,
  Globe,
  Users,
  Zap,
  Target,
  Award,
  Lightbulb,
  TrendingUp,
  Lock,
  CreditCard,
  Database,
  Coins,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Heart,
  Eye
} from 'lucide-react';

const learnTopics = [
  {
    title: "Introduction to Cryptocurrency",
    description: "Perfect for complete beginners with zero crypto knowledge",
    href: "/learn/beginner",
    difficulty: "Beginner",
    readTime: "15 min",
    icon: Lightbulb,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
  },
  {
    title: "Blockchain Basics",
    description: "Understand the technology behind cryptocurrency",
    href: "/learn/blockchain",
    difficulty: "Beginner",
    readTime: "12 min",
    icon: Database,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900"
  },
  {
    title: "History of Cryptocurrency",
    description: "From Bitcoin's creation to today's digital economy",
    href: "/learn/history",
    difficulty: "Beginner",
    readTime: "18 min",
    icon: BookOpen,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
  }
];

const guides = [
  {
    title: "How to Buy & Sell Crypto",
    description: "Complete guide for Philippine exchanges",
    href: "/guides/buying-selling",
    category: "Trading",
    icon: TrendingUp,
    popular: true
  },
  {
    title: "How to Use Cryptocurrency",
    description: "Real-world usage and practical applications",
    href: "/guides/how-to-use",
    category: "Usage",
    icon: Coins,
    popular: false
  },
  {
    title: "Crypto Risks & Security",
    description: "Protect your digital assets safely",
    href: "/guides/risks-security",
    category: "Security",
    icon: Shield,
    popular: true
  }
];

const exchanges = [
  {
    name: "Philippines Exchanges",
    description: "Coins.ph, PDAX, Maya & more",
    href: "/exchanges/philippines",
    icon: Building2,
    badge: "🇵🇭 Local",
    color: "text-blue-600"
  },
  {
    name: "Global Exchanges",
    description: "Binance, Coinbase, Kraken",
    href: "/exchanges/global",
    icon: Globe,
    badge: "🌍 Global",
    color: "text-purple-600"
  },
  {
    name: "Exchange Reviews",
    description: "Expert ratings & comparisons",
    href: "/exchanges/reviews",
    icon: Star,
    badge: "⭐ Rated",
    color: "text-orange-600"
  }
];

const wallets = [
  {
    name: "Hardware Wallets",
    description: "Maximum security for your crypto",
    href: "/wallets/hardware",
    icon: Lock,
    security: "Highest",
    recommended: true
  },
  {
    name: "Mobile Wallets",
    description: "Crypto on-the-go convenience",
    href: "/wallets/mobile",
    icon: Smartphone,
    security: "High",
    recommended: true
  },
  {
    name: "Desktop Wallets",
    description: "Full-featured desktop solutions",
    href: "/wallets/desktop",
    icon: CreditCard,
    security: "High",
    recommended: false
  }
];

export function MarketInsightsSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      {/* Section Header */}
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--color-primary-brand)]/10 to-purple-500/10 px-6 py-3 rounded-2xl border border-[var(--color-primary-brand)]/20 shadow-lg">
          <GraduationCap className="h-5 w-5 text-[var(--color-primary-brand)]" />
          <span className="text-base font-semibold text-[var(--color-primary-brand)]">
            Your Crypto Journey Starts Here
          </span>
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
          Learn, Trade & Secure Your Crypto
        </h2>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
          Everything you need to start your cryptocurrency journey in the Philippines - from beginner education to advanced trading
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column - Learn Section (5 columns) */}
        <div className="lg:col-span-5">
          <Card className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 shadow-lg h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-900 dark:text-blue-100 font-[var(--font-display)] flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span>Learn Cryptocurrency</span>
                <Badge className="bg-blue-500 text-white">
                  Free
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {learnTopics.map((topic, index) => (
                <Link key={topic.title} href={topic.href}>
                  <div className="group p-4 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${topic.bgColor}`}>
                        <topic.icon className={`h-6 w-6 ${topic.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {topic.difficulty}
                          </Badge>
                          <span className="text-xs text-blue-700 dark:text-blue-300">
                            {topic.readTime}
                          </span>
                        </div>
                        <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1 group-hover:text-[var(--color-primary-brand)] transition-colors">
                          {topic.title}
                        </h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              
              <div className="pt-4">
                <Button 
                  variant="outline"
                  className="w-full rounded-xl border-blue-500 text-blue-700 dark:text-blue-300 hover:bg-blue-500 hover:text-white"
                  asChild
                >
                  <Link href="/learn">
                    Start Learning
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Guides, Exchanges, Wallets (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Guides Section */}
          <Card className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span>Step-by-Step Guides</span>
                <Badge className="bg-green-500 text-white">
                  Practical
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {guides.map((guide) => (
                  <Link key={guide.title} href={guide.href}>
                    <div className="group p-4 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-all duration-300 hover:scale-105 text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform">
                        <guide.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {guide.category}
                        </Badge>
                        {guide.popular && (
                          <Badge className="bg-yellow-500 text-white text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 group-hover:text-[var(--color-primary-brand)] transition-colors">
                        {guide.title}
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed">
                        {guide.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Exchanges and Wallets Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Exchanges */}
            <Card className="rounded-2xl bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-2">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-lg">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <span>Crypto Exchanges</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {exchanges.map((exchange) => (
                  <Link key={exchange.name} href={exchange.href}>
                    <div className="group flex items-center space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-all duration-300 hover:scale-105">
                      <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <exchange.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-purple-900 dark:text-purple-100 group-hover:text-[var(--color-primary-brand)] transition-colors">
                            {exchange.name}
                          </h4>
                          <span className="text-xs">{exchange.badge}</span>
                        </div>
                        <p className="text-xs text-purple-700 dark:text-purple-300">
                          {exchange.description}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover:text-[var(--color-primary-brand)] transition-colors" />
                    </div>
                  </Link>
                ))}
                
                <div className="pt-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl border-purple-500 text-purple-700 dark:text-purple-300 hover:bg-purple-500 hover:text-white"
                    asChild
                  >
                    <Link href="/exchanges">
                      Compare All Exchanges
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Wallets */}
            <Card className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-orange-900 dark:text-orange-100 font-[var(--font-display)] flex items-center space-x-2">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl shadow-lg">
                    <Wallet className="h-5 w-5 text-white" />
                  </div>
                  <span>Crypto Wallets</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {wallets.map((wallet) => (
                  <Link key={wallet.name} href={wallet.href}>
                    <div className="group flex items-center space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-all duration-300 hover:scale-105">
                      <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <wallet.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-orange-900 dark:text-orange-100 group-hover:text-[var(--color-primary-brand)] transition-colors">
                            {wallet.name}
                          </h4>
                          {wallet.recommended && (
                            <Badge className="bg-yellow-500 text-white text-xs">
                              ⭐
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <p className="text-xs text-orange-700 dark:text-orange-300">
                            {wallet.description}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {wallet.security}
                          </Badge>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-orange-600 dark:text-orange-400 group-hover:text-[var(--color-primary-brand)] transition-colors" />
                    </div>
                  </Link>
                ))}
                
                <div className="pt-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl border-orange-500 text-orange-700 dark:text-orange-300 hover:bg-orange-500 hover:text-white"
                    asChild
                  >
                    <Link href="/wallets">
                      Explore All Wallets
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg mt-8">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-[var(--color-primary-brand)] rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Wallet className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Start Your Crypto Journey Today
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            From learning the basics to choosing the right exchange and securing your assets - 
            we've got everything you need to succeed in cryptocurrency.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-[var(--color-text-secondary)]">
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Beginner Friendly</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Philippines Focus</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Expert Reviewed</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Always Updated</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/learn/beginner">
                Start Learning
              </Link>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <Link href="/guides">
                Browse Guides
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}