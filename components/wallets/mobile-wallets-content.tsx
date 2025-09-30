"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Smartphone,
  Shield,
  Download,
  Star,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  ChevronUp,
  Wallet,
  Lock,
  Globe,
  Zap,
  Users,
  Eye,
  Heart,
  MessageCircle,
  ExternalLink,
  AlertTriangle,
  Info,
  Target,
  Award,
  Lightbulb,
  BookOpen,
  Settings,
  Key,
  Copy,
  QrCode,
  ArrowUpDown,
  TrendingUp,
  BarChart3,
  Clock,
  Coins,
  Building2,
  Gamepad2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileWallet {
  id: string;
  name: string;
  description: string;
  logo: string;
  rating: number;
  downloads: string;
  category: 'Beginner' | 'Advanced' | 'DeFi' | 'Multi-Chain' | 'Gaming' | 'Enterprise';
  platforms: string[];
  supportedCoins: number;
  features: string[];
  pros: string[];
  cons: string[];
  securityFeatures: string[];
  fees: string;
  website: string;
  playStore?: string;
  appStore?: string;
  userReviews: {
    total: number;
    average: number;
    breakdown: { stars: number; count: number }[];
  };
  lastUpdated: string;
}

interface FAQ {
  question: string;
  answer: string;
  category: 'basics' | 'security' | 'usage' | 'troubleshooting';
}

const mobileWallets: MobileWallet[] = [
  {
    id: 'metamask',
    name: 'MetaMask',
    description: 'The most popular Ethereum wallet with extensive DeFi integration and browser extension support.',
    logo: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.6,
    downloads: '10M+',
    category: 'DeFi',
    platforms: ['iOS', 'Android', 'Browser Extension'],
    supportedCoins: 500000,
    features: ['DeFi Integration', 'NFT Support', 'Hardware Wallet Support', 'Multi-Network'],
    pros: [
      'Most widely supported wallet',
      'Extensive DeFi ecosystem access',
      'Regular security updates',
      'Open source and transparent'
    ],
    cons: [
      'Only supports Ethereum-based tokens',
      'Can be overwhelming for beginners',
      'Gas fees can be high',
      'Requires some technical knowledge'
    ],
    securityFeatures: ['Biometric Authentication', 'PIN Protection', 'Seed Phrase Backup', 'Hardware Wallet Integration'],
    fees: 'Network fees only',
    website: 'https://metamask.io',
    userReviews: {
      total: 125000,
      average: 4.6,
      breakdown: [
        { stars: 5, count: 75000 },
        { stars: 4, count: 30000 },
        { stars: 3, count: 12500 },
        { stars: 2, count: 5000 },
        { stars: 1, count: 2500 }
      ]
    },
    lastUpdated: '2024-12-15'
  },
  {
    id: 'trust-wallet',
    name: 'Trust Wallet',
    description: 'Multi-cryptocurrency mobile wallet with built-in DApp browser and staking features.',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.4,
    downloads: '50M+',
    category: 'Multi-Chain',
    platforms: ['iOS', 'Android'],
    supportedCoins: 4500000,
    features: ['Multi-Blockchain Support', 'DApp Browser', 'Staking Rewards', 'NFT Gallery'],
    pros: [
      'Supports many cryptocurrencies',
      'User-friendly interface',
      'Built-in staking features',
      'Strong security measures'
    ],
    cons: [
      'Limited desktop support',
      'Customer support can be slow',
      'Some advanced features missing',
      'Occasional sync issues'
    ],
    securityFeatures: ['Biometric Lock', 'PIN Code', 'Seed Phrase', 'WalletConnect'],
    fees: 'Network fees only',
    website: 'https://trustwallet.com',
    userReviews: {
      total: 890000,
      average: 4.4,
      breakdown: [
        { stars: 5, count: 445000 },
        { stars: 4, count: 267000 },
        { stars: 3, count: 89000 },
        { stars: 2, count: 53400 },
        { stars: 1, count: 35600 }
      ]
    },
    lastUpdated: '2024-12-18'
  },
  {
    id: 'coinbase-wallet',
    name: 'Coinbase Wallet',
    description: 'Self-custody wallet from Coinbase with seamless exchange integration and user-friendly design.',
    logo: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.2,
    downloads: '5M+',
    category: 'Beginner',
    platforms: ['iOS', 'Android', 'Browser Extension'],
    supportedCoins: 100000,
    features: ['Exchange Integration', 'DeFi Access', 'NFT Support', 'Cloud Backup'],
    pros: [
      'Easy integration with Coinbase exchange',
      'Beginner-friendly interface',
      'Strong brand reputation',
      'Good customer support'
    ],
    cons: [
      'Limited cryptocurrency support',
      'Centralized backup options',
      'Higher fees for some operations',
      'Less privacy-focused'
    ],
    securityFeatures: ['Biometric Authentication', 'Cloud Backup', 'Multi-Factor Authentication', 'Device Authorization'],
    fees: 'Network fees + small service fees',
    website: 'https://wallet.coinbase.com',
    userReviews: {
      total: 67000,
      average: 4.2,
      breakdown: [
        { stars: 5, count: 33500 },
        { stars: 4, count: 20100 },
        { stars: 3, count: 8040 },
        { stars: 2, count: 3350 },
        { stars: 1, count: 2010 }
      ]
    },
    lastUpdated: '2024-12-12'
  },
  {
    id: 'exodus',
    name: 'Exodus',
    description: 'Beautiful desktop and mobile wallet with built-in exchange and portfolio tracking features.',
    logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.3,
    downloads: '1M+',
    category: 'Beginner',
    platforms: ['iOS', 'Android', 'Desktop'],
    supportedCoins: 260,
    features: ['Built-in Exchange', 'Portfolio Tracking', 'Beautiful UI', 'Desktop Sync'],
    pros: [
      'Stunning user interface',
      'Built-in exchange feature',
      'Great for beginners',
      'Desktop and mobile sync'
    ],
    cons: [
      'Not open source',
      'Limited advanced features',
      'Higher exchange fees',
      'Smaller coin selection'
    ],
    securityFeatures: ['Device Encryption', 'Seed Phrase Backup', 'PIN Protection', 'Biometric Lock'],
    fees: 'Network fees + exchange fees',
    website: 'https://exodus.com',
    userReviews: {
      total: 45000,
      average: 4.3,
      breakdown: [
        { stars: 5, count: 24750 },
        { stars: 4, count: 13500 },
        { stars: 3, count: 4500 },
        { stars: 2, count: 1800 },
        { stars: 1, count: 450 }
      ]
    },
    lastUpdated: '2024-12-10'
  },
  {
    id: 'atomic-wallet',
    name: 'Atomic Wallet',
    description: 'Decentralized multi-currency wallet with atomic swaps and staking capabilities.',
    logo: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.1,
    downloads: '1M+',
    category: 'Advanced',
    platforms: ['iOS', 'Android', 'Desktop'],
    supportedCoins: 500,
    features: ['Atomic Swaps', 'Staking Rewards', 'Decentralized Exchange', 'Multi-Platform'],
    pros: [
      'Supports many cryptocurrencies',
      'Built-in atomic swaps',
      'Staking opportunities',
      'No KYC required'
    ],
    cons: [
      'Interface can be complex',
      'Limited customer support',
      'Some features still in beta',
      'Occasional bugs reported'
    ],
    securityFeatures: ['Private Key Control', 'Encrypted Storage', 'Backup Options', 'Anonymous Usage'],
    fees: 'Network fees + small swap fees',
    website: 'https://atomicwallet.io',
    userReviews: {
      total: 28000,
      average: 4.1,
      breakdown: [
        { stars: 5, count: 14000 },
        { stars: 4, count: 8400 },
        { stars: 3, count: 3360 },
        { stars: 2, count: 1680 },
        { stars: 1, count: 560 }
      ]
    },
    lastUpdated: '2024-12-08'
  },
  {
    id: 'phantom',
    name: 'Phantom',
    description: 'Leading Solana wallet with sleek design and comprehensive DeFi access for the Solana ecosystem.',
    logo: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.5,
    downloads: '2M+',
    category: 'DeFi',
    platforms: ['iOS', 'Android', 'Browser Extension'],
    supportedCoins: 1000,
    features: ['Solana DeFi', 'NFT Support', 'Token Swaps', 'Staking'],
    pros: [
      'Best Solana wallet experience',
      'Fast and low-cost transactions',
      'Excellent DeFi integration',
      'Clean, modern interface'
    ],
    cons: [
      'Primarily Solana-focused',
      'Limited multi-chain support',
      'Newer wallet with less history',
      'Smaller ecosystem compared to Ethereum'
    ],
    securityFeatures: ['Hardware Wallet Support', 'Biometric Authentication', 'Seed Phrase Protection', 'Transaction Signing'],
    fees: 'Very low Solana network fees',
    website: 'https://phantom.app',
    userReviews: {
      total: 89000,
      average: 4.5,
      breakdown: [
        { stars: 5, count: 53400 },
        { stars: 4, count: 22250 },
        { stars: 3, count: 8900 },
        { stars: 2, count: 3560 },
        { stars: 1, count: 890 }
      ]
    },
    lastUpdated: '2024-12-16'
  }
];

const faqData: FAQ[] = [
  {
    question: "What is a crypto mobile wallet?",
    answer: "A crypto mobile wallet is an app on your smartphone that allows you to store, send, receive, and manage cryptocurrencies. It's like a digital wallet for your crypto assets that you can access anytime, anywhere.",
    category: 'basics'
  },
  {
    question: "Are mobile wallets safe for storing cryptocurrency?",
    answer: "Mobile wallets can be safe when used properly. They offer convenience but are generally less secure than hardware wallets. Always use reputable wallets, enable all security features, and never store large amounts on mobile wallets.",
    category: 'security'
  },
  {
    question: "What's the difference between custodial and non-custodial mobile wallets?",
    answer: "Custodial wallets are controlled by a company (like exchange wallets), while non-custodial wallets give you full control of your private keys. Non-custodial wallets are more secure but require you to manage your own backup and recovery.",
    category: 'basics'
  },
  {
    question: "How do I backup my mobile wallet?",
    answer: "Most mobile wallets provide a 12-24 word seed phrase during setup. Write this down on paper and store it safely offline. This seed phrase can restore your wallet if you lose your phone or the app gets deleted.",
    category: 'security'
  },
  {
    question: "Can I use the same wallet on multiple devices?",
    answer: "Yes, most mobile wallets allow you to restore your wallet on multiple devices using your seed phrase. However, be careful about security and only install wallets on devices you trust and control.",
    category: 'usage'
  },
  {
    question: "What should I do if I lose my phone with my crypto wallet?",
    answer: "If you have your seed phrase backed up, you can restore your wallet on a new device. If you don't have the backup, your funds may be permanently lost. This is why backing up your seed phrase is crucial.",
    category: 'troubleshooting'
  },
  {
    question: "How much cryptocurrency should I keep in a mobile wallet?",
    answer: "Only keep small amounts for daily transactions in mobile wallets. For larger amounts, use hardware wallets or cold storage. A good rule is to never keep more than you can afford to lose on a mobile device.",
    category: 'security'
  },
  {
    question: "Do mobile wallets work without internet connection?",
    answer: "Mobile wallets need internet connection to send transactions and check balances. However, you can view your wallet address and generate receive addresses offline. The actual blockchain transactions require internet connectivity.",
    category: 'usage'
  }
];

const bestPractices = [
  {
    category: 'Security',
    icon: Shield,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900',
    practices: [
      'Always download wallets from official app stores',
      'Enable all available security features (PIN, biometrics)',
      'Never share your seed phrase with anyone',
      'Use strong, unique passwords for wallet apps',
      'Regularly update your wallet app',
      'Verify wallet addresses before sending funds'
    ]
  },
  {
    category: 'Backup & Recovery',
    icon: Copy,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
    practices: [
      'Write down your seed phrase on paper immediately',
      'Store backup in multiple secure locations',
      'Never store seed phrases digitally or in cloud',
      'Test wallet recovery process with small amounts',
      'Consider using metal seed phrase storage',
      'Keep backup away from your primary device'
    ]
  },
  {
    category: 'Usage',
    icon: Smartphone,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900',
    practices: [
      'Start with small amounts to learn',
      'Double-check addresses before sending',
      'Understand network fees before transactions',
      'Keep only spending amounts in mobile wallets',
      'Use reputable exchanges for large purchases',
      'Monitor your transactions regularly'
    ]
  },
  {
    category: 'Privacy',
    icon: Eye,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900',
    practices: [
      'Use different addresses for different purposes',
      'Avoid reusing the same receiving address',
      'Be cautious about public WiFi usage',
      'Consider using VPN for additional privacy',
      'Understand blockchain transparency',
      'Review app permissions regularly'
    ]
  }
];

export function MobileWalletsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'downloads' | 'name'>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedWallet, setExpandedWallet] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  // Filter and sort wallets
  const filteredWallets = mobileWallets
    .filter(wallet => {
      const matchesSearch = !searchQuery || 
        wallet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wallet.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || wallet.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'downloads':
          return parseInt(b.downloads.replace(/[^\d]/g, '')) - parseInt(a.downloads.replace(/[^\d]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const categories = ['all', ...Array.from(new Set(mobileWallets.map(w => w.category)))];

  const toggleWalletDetails = (walletId: string) => {
    setExpandedWallet(expandedWallet === walletId ? null : walletId);
  };

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Beginner': return Users;
      case 'Advanced': return Settings;
      case 'DeFi': return Zap;
      case 'Multi-Chain': return Globe;
      case 'Gaming': return Gamepad2;
      case 'Enterprise': return Building2;
      default: return Wallet;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'DeFi': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Multi-Chain': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Gaming': return 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300';
      case 'Enterprise': return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-300';
    }
  };

  const faqCategories = [
    { id: 'basics', name: 'Basics', icon: Lightbulb, color: 'text-blue-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'text-red-600' },
    { id: 'usage', name: 'Usage', icon: Smartphone, color: 'text-green-600' },
    { id: 'troubleshooting', name: 'Help', icon: AlertTriangle, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Mobile Wallets
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Complete guide to cryptocurrency mobile wallets. Learn about the best mobile wallets, 
          how to use them safely, and find the perfect wallet for your crypto needs.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">{mobileWallets.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Top Wallets</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">100M+</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Total Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">4.4</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* What is a Mobile Wallet Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-900 dark:text-blue-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <span>What is a Crypto Mobile Wallet?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
            <p className="mb-4">
              A <strong>crypto mobile wallet</strong> is a smartphone app that allows you to store, send, receive, 
              and manage your cryptocurrencies. Think of it as your digital wallet for crypto assets, 
              accessible right from your phone.
            </p>
            <p className="mb-4">
              Unlike traditional wallets that hold physical money, mobile crypto wallets store your private keys 
              (the digital codes that prove you own your cryptocurrency) and interact with blockchain networks 
              to manage your digital assets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Wallet className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Store Crypto</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Securely store Bitcoin, Ethereum, and thousands of other cryptocurrencies
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Send & Receive</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Send crypto to anyone worldwide or receive payments instantly
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">DeFi Access</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Connect to decentralized apps and DeFi protocols directly from your phone
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Setup Guide */}
      <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Download className="h-8 w-8 text-white" />
            </div>
            <span>How to Setup a Mobile Wallet</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center space-x-2">
                <CheckCircle className="h-6 w-6" />
                <span>Step-by-Step Setup</span>
              </h4>
              <div className="space-y-3">
                {[
                  {
                    step: 1,
                    title: "Download from Official Store",
                    description: "Only download wallets from Google Play Store or Apple App Store to avoid fake apps"
                  },
                  {
                    step: 2,
                    title: "Create New Wallet",
                    description: "Choose 'Create New Wallet' and set a strong password or PIN"
                  },
                  {
                    step: 3,
                    title: "Backup Seed Phrase",
                    description: "Write down your 12-24 word seed phrase on paper and store it safely"
                  },
                  {
                    step: 4,
                    title: "Enable Security Features",
                    description: "Turn on biometric authentication, PIN lock, and any other security options"
                  },
                  {
                    step: 5,
                    title: "Verify Backup",
                    description: "Test your seed phrase backup by restoring the wallet or verifying the words"
                  },
                  {
                    step: 6,
                    title: "Start Small",
                    description: "Send a small test amount first to make sure everything works correctly"
                  }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">{item.title}</h5>
                      <p className="text-sm text-green-700 dark:text-green-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <span>Important Safety Tips</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
                  <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Never Share Your Seed Phrase</h5>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Your seed phrase is like the master key to your crypto. Anyone with it can steal all your funds.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Beware of Fake Apps</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Only download from official app stores and verify the developer name matches the official wallet.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Start with Small Amounts</h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Test the wallet with small amounts first before storing significant funds.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Keep Software Updated</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Always update your wallet app to get the latest security patches and features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
                <Input
                  placeholder="Search wallets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-xl border-[var(--color-muted-subtle)]"
                />
              </div>
              
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-xl border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] min-w-[140px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rating' | 'downloads' | 'name')}
                className="px-4 py-2 rounded-xl border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] min-w-[120px]"
              >
                <option value="rating">By Rating</option>
                <option value="downloads">By Downloads</option>
                <option value="name">By Name</option>
              </select>

              {/* View Toggle */}
              <div className="flex bg-[var(--color-muted-subtle)] rounded-xl p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-lg px-3"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-lg px-3"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <Badge variant="secondary" className="rounded-xl">
                {filteredWallets.length} wallets found
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Mobile Wallets */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[var(--color-primary-brand)] rounded-xl">
            <Star className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Top Crypto Mobile Wallets
          </h2>
          <div className="flex-1 h-px bg-[var(--color-muted-subtle)]" />
          <Badge variant="secondary" className="rounded-xl">
            {filteredWallets.length} wallets
          </Badge>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWallets.map((wallet) => {
              const CategoryIcon = getCategoryIcon(wallet.category);
              
              return (
                <Card key={wallet.id} className="group overflow-hidden rounded-2xl bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--color-muted-subtle)]">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                            <Wallet className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-brand)] transition-colors">
                              {wallet.name}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <Badge className={cn("text-xs", getCategoryColor(wallet.category))}>
                                <CategoryIcon className="h-3 w-3 mr-1" />
                                {wallet.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={cn(
                                  "h-4 w-4",
                                  i < Math.floor(wallet.rating) 
                                    ? "fill-yellow-400 text-yellow-400" 
                                    : "text-gray-300"
                                )} 
                              />
                            ))}
                          </div>
                          <div className="text-sm font-medium text-[var(--color-text-secondary)]">
                            {wallet.rating} • {wallet.downloads}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                        {wallet.description}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h5 className="font-semibold text-[var(--color-text-primary)] text-sm">Key Features:</h5>
                        <div className="flex flex-wrap gap-1">
                          {wallet.features.slice(0, 4).map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Platforms */}
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-[var(--color-text-secondary)]">Platforms:</span>
                        <div className="flex space-x-1">
                          {wallet.platforms.map((platform) => (
                            <Badge key={platform} variant="secondary" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => toggleWalletDetails(wallet.id)}
                          className="flex-1 rounded-xl"
                        >
                          {expandedWallet === wallet.id ? 'Hide Details' : 'View Details'}
                        </Button>
                        <Button 
                          size="sm" 
                          className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                          asChild
                        >
                          <a href={wallet.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Visit
                          </a>
                        </Button>
                      </div>

                      {/* Expanded Details */}
                      {expandedWallet === wallet.id && (
                        <div className="mt-4 pt-4 border-t border-[var(--color-muted-subtle)] space-y-4">
                          {/* Pros and Cons */}
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <h6 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center space-x-1">
                                <CheckCircle className="h-4 w-4" />
                                <span>Pros</span>
                              </h6>
                              <ul className="space-y-1">
                                {wallet.pros.slice(0, 3).map((pro, index) => (
                                  <li key={index} className="text-sm flex items-start space-x-2">
                                    <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[var(--color-text-secondary)]">{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h6 className="font-semibold text-red-700 dark:text-red-400 mb-2 flex items-center space-x-1">
                                <XCircle className="h-4 w-4" />
                                <span>Cons</span>
                              </h6>
                              <ul className="space-y-1">
                                {wallet.cons.slice(0, 3).map((con, index) => (
                                  <li key={index} className="text-sm flex items-start space-x-2">
                                    <XCircle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-[var(--color-text-secondary)]">{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Security Features */}
                          <div>
                            <h6 className="font-semibold text-[var(--color-text-primary)] mb-2 flex items-center space-x-1">
                              <Shield className="h-4 w-4" />
                              <span>Security Features</span>
                            </h6>
                            <div className="flex flex-wrap gap-1">
                              {wallet.securityFeatures.map((feature) => (
                                <Badge key={feature} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Additional Info */}
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-[var(--color-text-secondary)]">Supported Coins:</span>
                              <div className="font-semibold text-[var(--color-text-primary)]">
                                {wallet.supportedCoins.toLocaleString()}+
                              </div>
                            </div>
                            <div>
                              <span className="font-medium text-[var(--color-text-secondary)]">Fees:</span>
                              <div className="font-semibold text-[var(--color-text-primary)]">
                                {wallet.fees}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredWallets.map((wallet) => {
              const CategoryIcon = getCategoryIcon(wallet.category);
              
              return (
                <Card key={wallet.id} className="rounded-2xl bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 border border-[var(--color-muted-subtle)]">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                          <Wallet className="h-8 w-8 text-gray-500" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-xl text-[var(--color-text-primary)]">
                              {wallet.name}
                            </h3>
                            <Badge className={cn("text-xs", getCategoryColor(wallet.category))}>
                              <CategoryIcon className="h-3 w-3 mr-1" />
                              {wallet.category}
                            </Badge>
                          </div>
                          
                          <p className="text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                            {wallet.description}
                          </p>
                          
                          <div className="flex items-center space-x-6 text-sm text-[var(--color-text-secondary)]">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span>{wallet.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Download className="h-4 w-4" />
                              <span>{wallet.downloads}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Coins className="h-4 w-4" />
                              <span>{wallet.supportedCoins.toLocaleString()}+ coins</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => toggleWalletDetails(wallet.id)}
                          className="rounded-xl"
                        >
                          {expandedWallet === wallet.id ? 'Hide' : 'Details'}
                        </Button>
                        <Button 
                          size="sm" 
                          className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                          asChild
                        >
                          <a href={wallet.website} target="_blank" rel="noopener noreferrer">
                            Visit
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Expanded Details for List View */}
                    {expandedWallet === wallet.id && (
                      <div className="mt-6 pt-6 border-t border-[var(--color-muted-subtle)] grid md:grid-cols-2 gap-6">
                        <div>
                          <h6 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center space-x-1">
                            <CheckCircle className="h-4 w-4" />
                            <span>Advantages</span>
                          </h6>
                          <ul className="space-y-2">
                            {wallet.pros.map((pro, index) => (
                              <li key={index} className="text-sm flex items-start space-x-2">
                                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--color-text-secondary)]">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center space-x-1">
                            <XCircle className="h-4 w-4" />
                            <span>Disadvantages</span>
                          </h6>
                          <ul className="space-y-2">
                            {wallet.cons.map((con, index) => (
                              <li key={index} className="text-sm flex items-start space-x-2">
                                <XCircle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--color-text-secondary)]">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Pros and Cons Analysis */}
      <Card className="rounded-2xl bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <span>Mobile Wallets: Pros and Cons</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span>Advantages</span>
              </h4>
              <div className="space-y-3">
                {[
                  {
                    title: "Convenience & Accessibility",
                    description: "Access your crypto anytime, anywhere with your smartphone"
                  },
                  {
                    title: "User-Friendly Interface",
                    description: "Most mobile wallets are designed for easy use by beginners"
                  },
                  {
                    title: "Quick Transactions",
                    description: "Send and receive crypto instantly with QR code scanning"
                  },
                  {
                    title: "DeFi Integration",
                    description: "Connect to decentralized apps and DeFi protocols easily"
                  },
                  {
                    title: "Portfolio Tracking",
                    description: "Monitor your crypto investments in real-time"
                  },
                  {
                    title: "Free to Use",
                    description: "Most mobile wallets are free to download and use"
                  }
                ].map((advantage, index) => (
                  <div key={index} className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{advantage.title}</h5>
                    <p className="text-sm text-purple-700 dark:text-purple-300">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 flex items-center space-x-2">
                <XCircle className="h-6 w-6 text-red-500" />
                <span>Disadvantages</span>
              </h4>
              <div className="space-y-3">
                {[
                  {
                    title: "Security Risks",
                    description: "Mobile devices are more vulnerable to malware and theft"
                  },
                  {
                    title: "Internet Dependency",
                    description: "Requires internet connection for most operations"
                  },
                  {
                    title: "Limited Storage",
                    description: "Not suitable for storing large amounts of cryptocurrency"
                  },
                  {
                    title: "Device Loss Risk",
                    description: "Losing your phone could mean losing access to funds"
                  },
                  {
                    title: "App Store Dependency",
                    description: "Reliant on app stores which could remove or restrict apps"
                  },
                  {
                    title: "Battery & Performance",
                    description: "Wallet functionality depends on device battery and performance"
                  }
                ].map((disadvantage, index) => (
                  <div key={index} className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                    <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{disadvantage.title}</h5>
                    <p className="text-sm text-purple-700 dark:text-purple-300">{disadvantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[var(--color-primary-brand)] rounded-xl">
            <Target className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Best Practices for Mobile Wallets
          </h2>
          <div className="flex-1 h-px bg-[var(--color-muted-subtle)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bestPractices.map((section, index) => (
            <Card key={section.category} className={cn("rounded-2xl shadow-lg", section.bgColor)}>
              <CardHeader>
                <CardTitle className="text-xl font-bold font-[var(--font-display)] flex items-center space-x-3">
                  <div className="p-2 bg-white/50 dark:bg-black/20 rounded-xl">
                    <section.icon className={cn("h-6 w-6", section.color)} />
                  </div>
                  <span style={{ color: section.color.includes('red') ? '#dc2626' : section.color.includes('blue') ? '#2563eb' : section.color.includes('green') ? '#059669' : '#7c3aed' }}>
                    {section.category}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--color-text-secondary)] leading-relaxed">{practice}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <BarChart3 className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Wallet Comparison</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-muted-subtle)]">
                  <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Wallet</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Rating</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Category</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Coins</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">DeFi</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Staking</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">NFTs</th>
                </tr>
              </thead>
              <tbody>
                {filteredWallets.map((wallet) => (
                  <tr key={wallet.id} className="border-b border-[var(--color-muted-subtle)] hover:bg-[var(--color-muted-subtle)] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--color-text-primary)]">{wallet.name}</div>
                          <div className="text-xs text-[var(--color-text-secondary)]">{wallet.downloads}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-medium">{wallet.rating}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <Badge className={cn("text-xs", getCategoryColor(wallet.category))}>
                        {wallet.category}
                      </Badge>
                    </td>
                    <td className="p-4 text-center font-medium">
                      {wallet.supportedCoins >= 1000000 ? `${(wallet.supportedCoins / 1000000).toFixed(1)}M+` : 
                       wallet.supportedCoins >= 1000 ? `${(wallet.supportedCoins / 1000).toFixed(1)}K+` : 
                       wallet.supportedCoins.toString()}
                    </td>
                    <td className="p-4 text-center">
                      {wallet.features.some(f => f.toLowerCase().includes('defi')) ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {wallet.features.some(f => f.toLowerCase().includes('stak')) ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {wallet.features.some(f => f.toLowerCase().includes('nft')) ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* User Reviews Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-100 dark:from-yellow-950/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-yellow-900 dark:text-yellow-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span>User Reviews & Ratings</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileWallets.slice(0, 3).map((wallet) => (
              <div key={wallet.id} className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-900 dark:text-yellow-100">{wallet.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={cn(
                              "h-3 w-3",
                              i < Math.floor(wallet.rating) 
                                ? "fill-yellow-400 text-yellow-400" 
                                : "text-gray-300"
                            )} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                        {wallet.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {wallet.userReviews.breakdown.map((review) => (
                    <div key={review.stars} className="flex items-center space-x-2">
                      <span className="text-xs w-6">{review.stars}★</span>
                      <div className="flex-1 bg-yellow-200 dark:bg-yellow-800 rounded-full h-2">
                        <div 
                          className="bg-yellow-500 dark:bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(review.count / wallet.userReviews.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-yellow-700 dark:text-yellow-300 w-12 text-right">
                        {((review.count / wallet.userReviews.total) * 100).toFixed(0)}%
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-yellow-200 dark:border-yellow-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-700 dark:text-yellow-300">Total Reviews:</span>
                    <span className="font-semibold text-yellow-900 dark:text-yellow-100">
                      {wallet.userReviews.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
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
                          <div className={cn("p-2 rounded-lg", category.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/30' : category.color.includes('red') ? 'bg-red-100 dark:bg-red-900/30' : category.color.includes('green') ? 'bg-green-100 dark:bg-green-900/30' : 'bg-orange-100 dark:bg-orange-900/30')}>
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

      {/* Call to Action */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <Award className="h-12 w-12 mx-auto text-[var(--color-primary-brand)]" />
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Ready to Choose Your Mobile Wallet?
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Start your crypto journey with a secure mobile wallet. Remember to always prioritize security, 
            start with small amounts, and keep learning about best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/guides">
                Security Guides
              </Link>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <Link href="/news">
                Latest Crypto News
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Smartphone className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Mobile Wallets • {filteredWallets.length} options
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}