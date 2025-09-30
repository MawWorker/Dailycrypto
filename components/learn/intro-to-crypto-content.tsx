"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  GraduationCap,
  Lightbulb,
  Shield,
  Coins,
  TrendingUp,
  Globe,
  Smartphone,
  Lock,
  Users,
  Zap,
  Target,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Bitcoin,
  Banknote,
  CreditCard,
  Building2,
  ArrowRightLeft,
  Eye,
  Wallet,
  Network,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Star,
  Gem,
  Cpu,
  Database,
  Link as LinkIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  category: 'basics' | 'safety' | 'investing' | 'technical';
}

const faqData: FAQItem[] = [
  {
    question: "What exactly is cryptocurrency?",
    answer: "Cryptocurrency is digital money that exists only online. Unlike traditional money controlled by banks and governments, cryptocurrency uses special computer technology called blockchain to keep track of who owns what. Think of it like digital coins that you can send to anyone in the world instantly.",
    category: 'basics'
  },
  {
    question: "How is cryptocurrency different from regular money?",
    answer: "Regular money (like pesos) is controlled by central banks and governments. Cryptocurrency is decentralized, meaning no single authority controls it. It's also digital-only, can be sent globally without banks, and uses cryptography for security.",
    category: 'basics'
  },
  {
    question: "Is cryptocurrency safe to use?",
    answer: "Cryptocurrency can be safe when used properly. The technology itself is very secure, but you need to protect your 'wallet' (where you store crypto) just like you protect your physical wallet. Always use reputable exchanges and never share your private keys.",
    category: 'safety'
  },
  {
    question: "Can I lose money with cryptocurrency?",
    answer: "Yes, cryptocurrency prices can go up and down dramatically. You should only invest money you can afford to lose and always do your research before buying any cryptocurrency. Start small and learn as you go.",
    category: 'investing'
  },
  {
    question: "How do I buy cryptocurrency in the Philippines?",
    answer: "You can buy cryptocurrency through Philippine exchanges like Coins.ph, PDAX, or Maya. You'll need to verify your identity, connect a bank account or use GCash/Maya, and then you can purchase crypto with Philippine pesos.",
    category: 'basics'
  },
  {
    question: "What is blockchain technology?",
    answer: "Blockchain is like a digital ledger or record book that's shared across many computers. Every transaction is recorded and verified by the network, making it nearly impossible to fake or hack. It's the technology that makes cryptocurrency possible.",
    category: 'technical'
  },
  {
    question: "Do I need to buy a whole Bitcoin?",
    answer: "No! You can buy fractions of Bitcoin. For example, you can buy ₱1,000 worth of Bitcoin even if one Bitcoin costs ₱2,000,000. Cryptocurrency is divisible into very small pieces.",
    category: 'investing'
  },
  {
    question: "Are cryptocurrencies legal in the Philippines?",
    answer: "Yes, cryptocurrencies are legal in the Philippines. The Bangko Sentral ng Pilipinas (BSP) regulates crypto exchanges and has guidelines for their operation. However, always stay updated with current regulations.",
    category: 'basics'
  }
];

const cryptoBasics = [
  {
    icon: Bitcoin,
    term: "Bitcoin (BTC)",
    definition: "The first and most famous cryptocurrency, often called 'digital gold'. Created in 2009, it's like the grandfather of all cryptocurrencies.",
    example: "Think of Bitcoin as digital money that you can send to anyone in the world without using a bank."
  },
  {
    icon: Database,
    term: "Blockchain",
    definition: "A digital ledger that records all cryptocurrency transactions. It's like a notebook that everyone can see but no one can erase or fake.",
    example: "Imagine a notebook where every page is connected to the previous one, and thousands of people have copies to verify it's real."
  },
  {
    icon: Wallet,
    term: "Crypto Wallet",
    definition: "A digital wallet that stores your cryptocurrency. It's like your physical wallet, but for digital money.",
    example: "Just like you keep pesos in your physical wallet, you keep Bitcoin in your crypto wallet."
  },
  {
    icon: ArrowRightLeft,
    term: "Exchange",
    definition: "A platform where you can buy, sell, and trade cryptocurrencies. It's like a money changer, but for digital currencies.",
    example: "Coins.ph and PDAX are popular crypto exchanges in the Philippines where you can buy Bitcoin with pesos."
  },
  {
    icon: Lock,
    term: "Private Key",
    definition: "A secret code that proves you own your cryptocurrency. It's like the password to your digital wallet.",
    example: "Your private key is like the key to your house - keep it safe and never share it with anyone."
  },
  {
    icon: Network,
    term: "Mining",
    definition: "The process of verifying cryptocurrency transactions and adding them to the blockchain. Miners use powerful computers to solve complex puzzles.",
    example: "Think of miners as digital accountants who verify that all transactions are legitimate and get rewarded with new cryptocurrency."
  },
  {
    icon: Gem,
    term: "Altcoin",
    definition: "Any cryptocurrency that isn't Bitcoin. 'Alt' means alternative, so altcoins are alternative cryptocurrencies.",
    example: "Ethereum, Cardano, and Solana are popular altcoins that offer different features than Bitcoin."
  },
  {
    icon: TrendingUp,
    term: "Market Cap",
    definition: "The total value of all coins in circulation. It's calculated by multiplying the price by the number of coins available.",
    example: "If there are 1 million coins worth ₱100 each, the market cap is ₱100 million."
  }
];

const whyLearnCrypto = [
  {
    icon: TrendingUp,
    title: "Financial Opportunities",
    description: "Cryptocurrency offers new ways to save, invest, and potentially grow your money.",
    benefits: [
      "Potential for higher returns than traditional savings",
      "Access to global financial markets 24/7",
      "Diversification of your investment portfolio",
      "Protection against peso devaluation"
    ]
  },
  {
    icon: Globe,
    title: "Global Financial Access",
    description: "Send money anywhere in the world quickly and cheaply, perfect for OFWs and international transactions.",
    benefits: [
      "Send remittances with lower fees",
      "Instant international transfers",
      "No need for traditional banking hours",
      "Access to global financial services"
    ]
  },
  {
    icon: Zap,
    title: "Future Technology",
    description: "Understanding crypto prepares you for the future of money and technology.",
    benefits: [
      "Stay ahead of technological changes",
      "Understand emerging financial systems",
      "Participate in the digital economy",
      "Learn valuable tech skills"
    ]
  }
];

const philippineStats = [
  {
    label: "Filipino Crypto Users",
    value: "4.2M+",
    description: "Filipinos actively using cryptocurrency"
  },
  {
    label: "OFW Remittances",
    value: "₱180B+",
    description: "Annual remittances that could benefit from crypto"
  },
  {
    label: "Mobile Wallet Users",
    value: "89M+",
    description: "Filipinos using digital wallets like GCash/Maya"
  },
  {
    label: "Crypto Exchanges",
    value: "15+",
    description: "Licensed crypto exchanges operating in PH"
  }
];

export function IntroToCryptoContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const faqCategories = [
    { id: 'basics', name: 'Basics', icon: Lightbulb, color: 'text-blue-600' },
    { id: 'safety', name: 'Safety', icon: Shield, color: 'text-green-600' },
    { id: 'investing', name: 'Investing', icon: TrendingUp, color: 'text-purple-600' },
    { id: 'technical', name: 'Technical', icon: Cpu, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Introduction to Cryptocurrency
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Learn the basics of cryptocurrency in simple, easy-to-understand terms. 
          Perfect for complete beginners who want to understand what crypto is all about.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">8</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Key Topics</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">15</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Min Read</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">0</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Prerequisites</div>
          </div>
        </div>
      </div>

      {/* What is Cryptocurrency Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-900 dark:text-blue-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <Coins className="h-8 w-8 text-white" />
            </div>
            <span>What is Cryptocurrency?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
            <p className="mb-4">
              <strong>Cryptocurrency is digital money</strong> that exists only on computers and the internet. 
              Unlike the peso bills in your wallet, you can't touch or hold cryptocurrency - it\'s completely digital.
            </p>
            <p className="mb-4">
              Think of it like the money in your GCash or Maya app, but instead of being controlled by one company, 
              cryptocurrency is managed by a network of computers around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Digital Only</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Exists only on computers and phones, not as physical coins or bills
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Global</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Can be sent to anyone, anywhere in the world, instantly
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Decentralized</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                No single bank or government controls it
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Does It Work Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Cpu className="h-8 w-8 text-white" />
            </div>
            <span>How Does Cryptocurrency Work?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-green-800 dark:text-green-200 leading-relaxed">
            <p className="mb-4">
              Cryptocurrency works using something called <strong>blockchain technology</strong>. 
              Imagine a notebook that records every transaction, but instead of one person keeping the notebook, 
              thousands of computers around the world each have an identical copy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center space-x-2">
                <Database className="h-6 w-6" />
                <span>The Blockchain</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Transaction Initiated:</strong> You want to send crypto to a friend
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Network Verification:</strong> Computers verify you have the crypto to send
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Transaction Recorded:</strong> The transaction is permanently recorded on the blockchain
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Transfer Complete:</strong> Your friend receives the crypto in their wallet
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center space-x-2">
                <Shield className="h-6 w-6" />
                <span>Why It's Secure</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Cryptographic Security</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Uses advanced mathematics to protect transactions
                  </p>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Distributed Network</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Thousands of computers verify every transaction
                  </p>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Permanent Records</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Once recorded, transactions cannot be changed or deleted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Cryptocurrencies */}
      <Card className="rounded-2xl bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-lg">
              <Star className="h-8 w-8 text-white" />
            </div>
            <span>Popular Cryptocurrencies</span>
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
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Bitcoin (BTC)</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">The Original Cryptocurrency</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  Bitcoin is like digital gold - the first and most valuable cryptocurrency. 
                  It's often used as a store of value and for large transactions.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Current Price:</strong> ~₱2,800,000 per Bitcoin<br/>
                  <strong>Good for:</strong> Long-term savings, large transfers
                </div>
              </div>

              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Gem className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Ethereum (ETH)</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">The Smart Contract Platform</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  Ethereum is like a computer that runs on the internet. 
                  It can run programs called "smart contracts" and is used for many applications.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Current Price:</strong> ~₱180,000 per Ethereum<br/>
                  <strong>Good for:</strong> DeFi, NFTs, smart contracts
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Stablecoins</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Price-Stable Cryptocurrencies</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  Stablecoins are cryptocurrencies designed to maintain a stable price, 
                  usually equal to $1 USD. They're perfect for beginners.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Examples:</strong> USDT, USDC<br/>
                  <strong>Good for:</strong> Learning, stable savings, trading
                </div>
              </div>

              <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Coins className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100">Altcoins</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Alternative Cryptocurrencies</p>
                  </div>
                </div>
                <p className="text-purple-800 dark:text-purple-200 mb-3">
                  "Altcoins" means "alternative coins" - any cryptocurrency that isn't Bitcoin. 
                  There are thousands of different altcoins with various purposes.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  <strong>Examples:</strong> Cardano, Solana, Polygon<br/>
                  <strong>Good for:</strong> Specific use cases, diversification
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Crypto Basics Glossary */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <span>Essential Terms to Know</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {cryptoBasics.map((item, index) => (
              <div key={index} className="p-6 bg-[var(--color-muted-subtle)] rounded-xl hover:bg-[var(--color-muted-subtle)]/80 transition-colors group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--color-primary-brand)] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary-brand)] transition-colors">
                      {item.term}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                      {item.definition}
                    </p>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>Example:</strong> {item.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Why Learn About Crypto */}
      <Card className="rounded-2xl bg-gradient-to-r from-orange-50 to-amber-100 dark:from-orange-950/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-orange-900 dark:text-orange-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl shadow-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <span>Why Should You Learn About Crypto?</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {whyLearnCrypto.map((reason, index) => (
              <div key={index} className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3 text-center">
                  {reason.title}
                </h4>
                <p className="text-orange-800 dark:text-orange-200 mb-4 text-center">
                  {reason.description}
                </p>
                <ul className="space-y-2">
                  {reason.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-orange-700 dark:text-orange-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Philippine Crypto Landscape */}
      <Card className="rounded-2xl bg-gradient-to-r from-red-50 to-blue-100 dark:from-red-950/20 dark:to-blue-900/20 border border-red-200 dark:border-red-800 shadow-lg">
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
            <span>Cryptocurrency in the Philippines</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-[var(--color-text-primary)] leading-relaxed">
            <p className="mb-4">
              The Philippines is one of the most crypto-friendly countries in the world! 
              Many Filipinos already use cryptocurrency for various purposes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {philippineStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="text-2xl font-bold text-[var(--color-primary-brand)] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[var(--color-text-primary)] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Banknote className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-2">OFW Remittances</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Overseas workers use crypto to send money home faster and cheaper
              </p>
            </div>

            <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Mobile Payments</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Integration with GCash and Maya makes crypto accessible to millions
              </p>
            </div>

            <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Investment</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Many Filipinos invest in crypto as an alternative to traditional savings
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card className="rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-100 dark:from-teal-950/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-teal-900 dark:text-teal-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl shadow-lg">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <span>How to Get Started</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-teal-900 dark:text-teal-100 flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>Simple Steps to Begin</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-teal-900 dark:text-teal-100 mb-1">Learn the Basics</h5>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      Understand what cryptocurrency is and how it works (you're doing this now!)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-teal-900 dark:text-teal-100 mb-1">Choose an Exchange</h5>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      Pick a reputable Philippine exchange like Coins.ph or PDAX
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-teal-900 dark:text-teal-100 mb-1">Start Small</h5>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      Begin with a small amount you can afford to lose, like ₱1,000
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold text-teal-900 dark:text-teal-100 mb-1">Keep Learning</h5>
                    <p className="text-sm text-teal-700 dark:text-teal-300">
                      Continue educating yourself about security, investing, and new developments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-teal-900 dark:text-teal-100 flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <span>Important Safety Tips</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
                  <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Only Invest What You Can Afford to Lose</h5>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Cryptocurrency prices can be very volatile. Never invest money you need for daily expenses.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Beware of Scams</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    If someone promises guaranteed returns or asks for your private keys, it's likely a scam.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Use Reputable Exchanges</h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Stick to well-known, regulated exchanges that are licensed to operate in the Philippines.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Keep Learning</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    The crypto space evolves quickly. Stay informed through reliable news sources like DailyCrypto.
                  </p>
                </div>
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
              <span className="text-sm font-medium text-[var(--color-text-secondary)] mr-2">Categories:</span>
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
                          <div className={cn("p-2 rounded-lg", category.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/30' : category.color.includes('green') ? 'bg-green-100 dark:bg-green-900/30' : category.color.includes('purple') ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-orange-100 dark:bg-orange-900/30')}>
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
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Key Takeaways
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">Remember These Basics:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Cryptocurrency is digital money that uses blockchain technology</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Bitcoin is the first and most valuable cryptocurrency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">You don't need to buy whole coins - you can buy fractions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Cryptocurrency is legal and regulated in the Philippines</span>
                </li>
              </ul>
            </div>
            
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">Safety First:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Only invest money you can afford to lose</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Use reputable exchanges and keep your private keys safe</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Be aware of scams and too-good-to-be-true offers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Continue learning and stay informed about developments</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]">
              Ready to Continue Learning?
            </h4>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Now that you understand the basics, you can explore more advanced topics like trading, 
              DeFi, and security best practices. Remember to always learn before you invest!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline"
                className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                asChild
              >
                <a href="/guides">
                  Explore Guides
                </a>
              </Button>
              <Button 
                className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                asChild
              >
                <a href="/news">
                  Read Latest News
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
              <GraduationCap className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Beginner Guide • 8 key concepts
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}