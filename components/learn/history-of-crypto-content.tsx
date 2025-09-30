"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Clock,
  Calendar,
  Zap,
  Globe,
  TrendingUp,
  Building2,
  Smartphone,
  Shield,
  Users,
  Coins,
  Lightbulb,
  Rocket,
  Star,
  Crown,
  ChevronDown,
  ChevronUp,
  Bitcoin,
  Gem,
  Banknote,
  Gamepad2,
  Eye,
  Target,
  Award,
  Sparkles,
  History,
  BookOpen,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  impact: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

interface FAQItem {
  question: string;
  answer: string;
  category: 'early' | 'growth' | 'mainstream' | 'future';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2009",
    title: "Bitcoin is Born",
    description: "A mysterious person named Satoshi Nakamoto creates Bitcoin, the world's first cryptocurrency. The first Bitcoin transaction happens on January 3rd.",
    impact: "Started the entire cryptocurrency revolution",
    icon: Bitcoin,
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900"
  },
  {
    year: "2010",
    title: "First Real-World Purchase",
    description: "Someone buys two pizzas for 10,000 Bitcoin (worth about $41 at the time). Today, those Bitcoin would be worth over $1 billion!",
    impact: "Proved Bitcoin could be used as real money",
    icon: Banknote,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900"
  },
  {
    year: "2011-2013",
    title: "Early Adoption Period",
    description: "More people start learning about Bitcoin. The first cryptocurrency exchanges open, making it easier to buy and sell Bitcoin.",
    impact: "Made Bitcoin accessible to regular people",
    icon: Users,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
  },
  {
    year: "2015",
    title: "Ethereum Launches",
    description: "Vitalik Buterin creates Ethereum, a blockchain that can run programs called 'smart contracts'. This opens up many new possibilities beyond just digital money.",
    impact: "Enabled thousands of new applications and innovations",
    icon: Gem,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900"
  },
  {
    year: "2017",
    title: "The Great Crypto Boom",
    description: "Cryptocurrency becomes mainstream news as Bitcoin reaches nearly $20,000. Everyone starts talking about crypto, and thousands of new cryptocurrencies are created.",
    impact: "Brought cryptocurrency to global attention",
    icon: Rocket,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900"
  },
  {
    year: "2018-2019",
    title: "The Learning Period",
    description: "Prices drop significantly, but developers keep building. This 'crypto winter' helps separate serious projects from get-rich-quick schemes.",
    impact: "Strengthened the technology and weeded out weak projects",
    icon: Shield,
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900"
  },
  {
    year: "2020-2021",
    title: "DeFi and NFT Revolution",
    description: "Decentralized Finance (DeFi) explodes, allowing people to lend, borrow, and trade without banks. NFTs (digital art) become hugely popular.",
    impact: "Showed cryptocurrency could replace traditional financial services",
    icon: Sparkles,
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950 dark:to-rose-900"
  },
  {
    year: "2021-2022",
    title: "Institutional Adoption",
    description: "Major companies like Tesla, MicroStrategy, and PayPal start accepting and holding Bitcoin. Governments begin creating their own digital currencies.",
    impact: "Legitimized cryptocurrency as a real asset class",
    icon: Building2,
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-950 dark:to-cyan-900"
  },
  {
    year: "2023-2024",
    title: "Mainstream Integration",
    description: "Bitcoin ETFs are approved, making it easy for anyone to invest through traditional brokers. Cryptocurrency becomes part of everyday finance.",
    impact: "Made cryptocurrency accessible to everyone through traditional finance",
    icon: Crown,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950 dark:to-amber-900"
  }
];

const faqData: FAQItem[] = [
  {
    question: "Who created Bitcoin and why?",
    answer: "Bitcoin was created by a mysterious person (or group) using the name Satoshi Nakamoto. They wanted to create a form of money that didn't need banks or governments to control it. After creating Bitcoin, Satoshi disappeared and nobody knows who they really are!",
    category: 'early'
  },
  {
    question: "What was the first thing ever bought with Bitcoin?",
    answer: "The first real-world purchase was two pizzas! On May 22, 2010, a programmer named Laszlo Hanyecz paid 10,000 Bitcoin for two Papa John's pizzas. Those Bitcoin would be worth over $1 billion today! We now celebrate May 22nd as 'Bitcoin Pizza Day.'",
    category: 'early'
  },
  {
    question: "How did Ethereum change everything?",
    answer: "Ethereum, created by Vitalik Buterin in 2015, was like upgrading from a calculator to a computer. While Bitcoin could only send digital money, Ethereum could run programs called 'smart contracts.' This opened the door for thousands of new applications like DeFi, NFTs, and Web3 games.",
    category: 'growth'
  },
  {
    question: "What happened during the 2017 crypto boom?",
    answer: "In 2017, Bitcoin's price skyrocketed from $1,000 to nearly $20,000, making headlines worldwide. Everyone started talking about cryptocurrency, and thousands of new digital coins were created. It was like a digital gold rush, but many people lost money when prices crashed in 2018.",
    category: 'growth'
  },
  {
    question: "What is DeFi and when did it start?",
    answer: "DeFi stands for 'Decentralized Finance' and it exploded in 2020-2021. It's like having a bank that runs automatically on the internet without human employees. You can lend money, borrow money, and trade currencies all through computer programs instead of traditional banks.",
    category: 'mainstream'
  },
  {
    question: "When did big companies start buying Bitcoin?",
    answer: "Major companies started buying Bitcoin in 2020-2021. Tesla bought $1.5 billion worth, MicroStrategy bought over $4 billion, and PayPal started letting customers buy crypto. This showed that Bitcoin wasn't just for tech enthusiasts anymore - it was becoming a serious investment.",
    category: 'mainstream'
  },
  {
    question: "What are Bitcoin ETFs and why are they important?",
    answer: "Bitcoin ETFs (Exchange-Traded Funds) were approved in 2024, allowing people to invest in Bitcoin through their regular stock brokers without actually owning Bitcoin directly. This made it much easier for regular investors and retirement funds to add Bitcoin to their portfolios.",
    category: 'mainstream'
  },
  {
    question: "What's next for cryptocurrency?",
    answer: "The future looks exciting! We're seeing governments create their own digital currencies (like the Philippines' digital peso), more companies accepting crypto payments, and new technologies making cryptocurrency faster and cheaper to use. Cryptocurrency is becoming part of everyday life.",
    category: 'future'
  }
];

const philippinesCryptoHistory = [
  {
    year: "2014",
    event: "First Philippine Bitcoin Exchange",
    description: "Coins.ph launches as one of the first cryptocurrency exchanges in the Philippines"
  },
  {
    year: "2017",
    event: "BSP Issues First Crypto Guidelines",
    description: "Bangko Sentral ng Pilipinas releases initial guidelines for virtual currency exchanges"
  },
  {
    year: "2019",
    event: "Crypto Exchange Licensing",
    description: "BSP begins licensing cryptocurrency exchanges, legitimizing the industry"
  },
  {
    year: "2021",
    event: "Axie Infinity Boom",
    description: "Philippines becomes the world's largest Axie Infinity player base during the P2E gaming boom"
  },
  {
    year: "2023",
    event: "GCash Crypto Integration",
    description: "Major e-wallets like GCash and Maya integrate cryptocurrency trading features"
  },
  {
    year: "2024",
    event: "Digital Peso Pilot",
    description: "BSP launches digital peso CBDC pilot program, making Philippines an ASEAN leader"
  }
];

export function HistoryOfCryptoContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const faqCategories = [
    { id: 'early', name: 'Early Days', icon: Clock, color: 'text-orange-600' },
    { id: 'growth', name: 'Growth Era', icon: TrendingUp, color: 'text-green-600' },
    { id: 'mainstream', name: 'Mainstream', icon: Building2, color: 'text-blue-600' },
    { id: 'future', name: 'Future', icon: Rocket, color: 'text-purple-600' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          History of Cryptocurrency
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Discover the fascinating journey of cryptocurrency from a mysterious digital experiment in 2009 
          to a global financial revolution that's changing how we think about money.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">15</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">9</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Key Eras</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">0</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Prerequisites</div>
          </div>
        </div>
      </div>

      {/* The Beginning Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-orange-50 to-amber-100 dark:from-orange-950/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-orange-900 dark:text-orange-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl shadow-lg">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <span>The Beginning: A Revolutionary Idea</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-orange-800 dark:text-orange-200 leading-relaxed">
            <p className="mb-4">
              <strong>In 2008, the world was facing a financial crisis.</strong> Banks were failing, people were losing their homes, 
              and trust in the traditional financial system was at an all-time low.
            </p>
            <p className="mb-4">
              Then, on October 31, 2008, someone using the name <strong>Satoshi Nakamoto</strong> published a 9-page document 
              called "Bitcoin: A Peer-to-Peer Electronic Cash System.\" This document would change the world forever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">The Problem</h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Banks controlled all money and could fail, taking people's savings with them
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">The Solution</h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Create digital money that doesn't need banks or governments to work
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Bitcoin className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-2">The Result</h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Bitcoin - the world's first cryptocurrency was born on January 3, 2009
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Section */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <History className="h-8 w-8 text-white" />
            </div>
            <span>The Complete Cryptocurrency Timeline</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="relative">
                {/* Timeline Line */}
                {index < timelineEvents.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-[var(--color-muted-subtle)]" />
                )}
                
                <div className={cn("rounded-2xl p-6 shadow-lg", event.bgColor)}>
                  <div className="flex items-start space-x-6">
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white/80 dark:bg-black/20 rounded-2xl flex items-center justify-center shadow-lg">
                        <event.icon className={cn("h-8 w-8", event.color)} />
                      </div>
                      <div className="text-center mt-2">
                        <Badge className="bg-white/80 dark:bg-black/20 text-[var(--color-text-primary)] font-bold">
                          {event.year}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 font-[var(--font-display)]">
                        {event.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-4">
                        {event.description}
                      </p>
                      <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border-l-4 border-[var(--color-primary-brand)]">
                        <p className="text-sm font-medium text-[var(--color-text-primary)]">
                          <strong>Why this mattered:</strong> {event.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Innovations Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <span>Major Innovations That Changed Everything</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Bitcoin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Bitcoin (2009)</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">The First Cryptocurrency</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  Bitcoin proved that digital money could work without banks. It was like inventing the wheel - 
                  simple but revolutionary.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Innovation:</strong> Blockchain technology and digital scarcity
                </div>
              </div>

              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Gem className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Ethereum (2015)</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Smart Contracts Platform</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  Ethereum was like upgrading from a calculator to a computer. It could run programs, 
                  not just send money.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Innovation:</strong> Smart contracts and programmable money
                </div>
              </div>

              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">DeFi (2020)</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Decentralized Finance</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  DeFi created banks that run automatically on the internet, without human employees. 
                  You could lend, borrow, and trade 24/7.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Innovation:</strong> Automated financial services
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">NFTs (2021)</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Digital Ownership</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  NFTs proved you could own unique digital items like art, music, or game characters. 
                  It was like having certificates of authenticity for digital things.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Innovation:</strong> Provable digital ownership
                </div>
              </div>

              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Institutional Adoption (2021-2024)</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Big Companies Join In</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  Major companies like Tesla, PayPal, and banks started buying and accepting cryptocurrency. 
                  This made crypto "legitimate" in the eyes of regular people.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Innovation:</strong> Mainstream financial integration
                </div>
              </div>

              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Crown className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Bitcoin ETFs (2024)</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Easy Investment Access</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  Bitcoin ETFs made it possible to invest in Bitcoin through regular stock brokers, 
                  just like buying stocks. This opened crypto to millions of new investors.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Innovation:</strong> Traditional finance integration
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Philippines Crypto History */}
      <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950/20 dark:to-red-950/20 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="w-12 h-8 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-600">
              <svg viewBox="0 0 24 16" className="w-full h-full">
                <rect x="0" y="0" width="24" height="8" fill="#0038A8" />
                <rect x="0" y="8" width="24" height="8" fill="#CE1126" />
                <polygon points="0,0 0,16 12,8" fill="#FFFFFF" />
                <g transform="translate(6, 8)">
                  <circle cx="0" cy="0" r="1.2" fill="#FECA57" />
                  <g stroke="#FECA57" strokeWidth="0.25" fill="#FECA57">
                    <line x1="0" y1="-2.4" x2="0" y2="-1.8" />
                    <line x1="1.7" y1="-1.7" x2="1.2" y2="-1.2" />
                    <line x1="2.4" y1="0" x2="1.8" y2="0" />
                    <line x1="1.7" y1="1.7" x2="1.2" y2="1.2" />
                    <line x1="0" y1="2.4" x2="0" y2="1.8" />
                    <line x1="-1.7" y1="1.7" x2="-1.2" y2="1.2" />
                    <line x1="-2.4" y1="0" x2="-1.8" y2="0" />
                    <line x1="-1.7" y1="-1.7" x2="-1.2" y2="-1.2" />
                  </g>
                </g>
                <g fill="#FECA57">
                  <polygon points="3.2,3.2 3.4,3.8 4,3.8 3.6,4.2 3.8,4.8 3.2,4.6 2.6,4.8 2.8,4.2 2.4,3.8 3,3.8" transform="scale(0.5)" />
                  <polygon points="3.2,12.8 3.4,13.4 4,13.4 3.6,13.8 3.8,14.4 3.2,14.2 2.6,14.4 2.8,13.8 2.4,13.4 3,13.4" transform="scale(0.5)" />
                  <polygon points="8,12.8 8.2,13.4 8.8,13.4 8.4,13.8 8.6,14.4 8,14.2 7.4,14.4 7.6,13.8 7.2,13.4 7.8,13.4" transform="scale(0.5)" />
                </g>
              </svg>
            </div>
            <span>Cryptocurrency History in the Philippines</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-[var(--color-text-primary)] leading-relaxed">
            <p className="mb-4">
              The Philippines has been at the forefront of cryptocurrency adoption in Southeast Asia! 
              Here's how crypto developed in our country:
            </p>
          </div>

          <div className="space-y-4">
            {philippinesCryptoHistory.map((item, index) => (
              <div key={item.year} className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-colors">
                <div className="w-12 h-12 bg-[var(--color-primary-brand)] text-white rounded-xl flex items-center justify-center font-bold shadow-lg flex-shrink-0">
                  {item.year.slice(-2)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[var(--color-text-primary)] mb-1">
                    {item.event}
                  </h4>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {item.year}
                </Badge>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-100 to-red-100 dark:from-blue-900/30 dark:to-red-900/30 rounded-xl border border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
              <Star className="h-5 w-5 text-[var(--color-primary-brand)]" />
              <span>Philippines Today: A Crypto Leader</span>
            </h4>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Today, the Philippines is one of the world's most crypto-friendly countries! We have over 4 million crypto users, 
              15+ licensed exchanges, and the government is actively supporting blockchain innovation. The Philippines is truly 
              leading the way in making cryptocurrency accessible to everyone.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Major Milestones */}
      <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <span>Amazing Milestones in Crypto History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">
                10,000 BTC
              </div>
              <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                First Bitcoin Purchase
              </div>
              <div className="text-xs text-green-600 dark:text-green-400">
                Two pizzas in 2010 (now worth $1B+)
              </div>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">
                $69M
              </div>
              <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                Most Expensive NFT
              </div>
              <div className="text-xs text-green-600 dark:text-green-400">
                Beeple's digital art sold in 2021
              </div>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">
                $3T
              </div>
              <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                Peak Market Value
              </div>
              <div className="text-xs text-green-600 dark:text-green-400">
                Total crypto market cap in 2021
              </div>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">
                100M+
              </div>
              <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                Global Users
              </div>
              <div className="text-xs text-green-600 dark:text-green-400">
                People using cryptocurrency worldwide
              </div>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">
                4.2M+
              </div>
              <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                Filipino Users
              </div>
              <div className="text-xs text-green-600 dark:text-green-400">
                Filipinos actively using crypto
              </div>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="text-3xl font-bold text-green-900 dark:text-green-100 mb-2">
                15+
              </div>
              <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                Years of Innovation
              </div>
              <div className="text-xs text-green-600 dark:text-green-400">
                From Bitcoin to today's ecosystem
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <Info className="h-8 w-8 text-white" />
            </div>
            <span>Frequently Asked Questions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm font-medium text-[var(--color-text-secondary)] mr-2">Time Periods:</span>
              {faqCategories.map((category) => (
                <Badge
                  key={category.id}
                  variant="outline"
                  className="text-xs hover:bg-[var(--color-primary-brand)] hover:text-white cursor-pointer transition-colors rounded-xl"
                >
                  <category.icon className="h-3 w-3 mr-1" />
                  {category.name}
                </Badge>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {faqData.map((faq, index) => {
                const isExpanded = expandedFAQ === `faq-${index}`;
                const category = faqCategories.find(cat => cat.id === faq.category);
                
                return (
                  <div key={index} className="border border-[var(--color-muted-subtle)] rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(`faq-${index}`)}
                      className="w-full p-4 text-left hover:bg-[var(--color-muted-subtle)] transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        {category && (
                          <div className={cn("p-2 rounded-lg", category.color.includes('orange') ? 'bg-orange-100 dark:bg-orange-900/30' : category.color.includes('green') ? 'bg-green-100 dark:bg-green-900/30' : category.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-purple-100 dark:bg-purple-900/30')}>
                            <category.icon className={cn("h-4 w-4", category.color)} />
                          </div>
                        )}
                        <span className="font-semibold text-[var(--color-text-primary)]">
                          {faq.question}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-[var(--color-text-secondary)]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[var(--color-text-secondary)]" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="p-4 pt-0 border-t border-[var(--color-muted-subtle)]">
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Award className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Key Takeaways
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">The Journey So Far:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">2009: Bitcoin started as an experiment during a financial crisis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">2015: Ethereum introduced smart contracts and programmable money</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">2020-2021: DeFi and NFTs showed new possibilities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">2024: Bitcoin ETFs made crypto accessible to everyone</span>
                </li>
              </ul>
            </div>
            
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">What This Means:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Cryptocurrency evolved from experiment to legitimate asset</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Technology improved dramatically over 15 years</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Philippines became a global leader in crypto adoption</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">The future holds even more exciting possibilities</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]">
              Ready to Learn More?
            </h4>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Now that you understand how cryptocurrency developed over time, you can explore 
              how it works today and how you can be part of this amazing technological revolution!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline"
                className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                asChild
              >
                <a href="/learn/beginner">
                  Learn About Cryptocurrency
                </a>
              </Button>
              <Button 
                className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                asChild
              >
                <a href="/learn/blockchain">
                  Understand Blockchain
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <History className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                History Guide • 15 years of crypto
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}