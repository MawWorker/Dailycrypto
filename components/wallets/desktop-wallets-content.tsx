"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Monitor,
  Shield,
  Download,
  Lock,
  Key,
  Smartphone,
  HardDrive,
  Wifi,
  WifiOff,
  Star,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Users,
  Globe,
  Github,
  Zap,
  Target,
  BookOpen,
  Award,
  Eye,
  ThumbsUp,
  ThumbsDown,
  BarChart3,
  Cpu,
  Database,
  Network,
  Settings,
  FileText,
  Lightbulb,
  ArrowRight,
  Crown,
  Gem
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface DesktopWallet {
  id: string;
  name: string;
  description: string;
  logo: string;
  platforms: string[];
  securityLevel: 'High' | 'Very High' | 'Extreme';
  userLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  openSource: boolean;
  features: string[];
  supportedCoins: number;
  pros: string[];
  cons: string[];
  downloadUrl: string;
  officialWebsite: string;
  rating: number;
  userCount: string;
  lastUpdated: string;
  fileSize: string;
  price: string;
}

interface FAQItem {
  question: string;
  answer: string;
  category: 'basics' | 'security' | 'setup' | 'troubleshooting';
}

const desktopWallets: DesktopWallet[] = [
  {
    id: 'electrum',
    name: 'Electrum',
    description: 'Lightweight Bitcoin wallet focused on speed and simplicity. One of the oldest and most trusted Bitcoin wallets.',
    logo: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=200',
    platforms: ['Windows', 'macOS', 'Linux'],
    securityLevel: 'Very High',
    userLevel: 'Intermediate',
    openSource: true,
    features: ['Hardware Wallet Support', 'Multi-signature', 'Cold Storage', 'Tor Support'],
    supportedCoins: 1,
    pros: [
      'Extremely lightweight and fast',
      'Strong security features',
      'Hardware wallet integration',
      'Open source and audited'
    ],
    cons: [
      'Bitcoin only',
      'Interface can be intimidating for beginners',
      'Limited customer support'
    ],
    downloadUrl: 'https://electrum.org',
    officialWebsite: 'https://electrum.org',
    rating: 4.6,
    userCount: '2M+',
    lastUpdated: '2024-12-15',
    fileSize: '28 MB',
    price: 'Free'
  },
  {
    id: 'exodus',
    name: 'Exodus',
    description: 'Beautiful multi-currency wallet with built-in exchange and portfolio tracking. Perfect for beginners.',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    platforms: ['Windows', 'macOS', 'Linux'],
    securityLevel: 'High',
    userLevel: 'Beginner',
    openSource: false,
    features: ['Built-in Exchange', 'Portfolio Tracking', 'NFT Support', 'Staking'],
    supportedCoins: 260,
    pros: [
      'Beautiful and intuitive interface',
      'Supports many cryptocurrencies',
      'Built-in exchange feature',
      'Excellent customer support'
    ],
    cons: [
      'Not open source',
      'Higher fees for exchanges',
      'Limited advanced features'
    ],
    downloadUrl: 'https://exodus.com',
    officialWebsite: 'https://exodus.com',
    rating: 4.4,
    userCount: '6M+',
    lastUpdated: '2024-12-18',
    fileSize: '145 MB',
    price: 'Free'
  },
  {
    id: 'atomic-wallet',
    name: 'Atomic Wallet',
    description: 'Decentralized multi-currency wallet with atomic swaps and staking features.',
    logo: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=200',
    platforms: ['Windows', 'macOS', 'Linux'],
    securityLevel: 'High',
    userLevel: 'Intermediate',
    openSource: false,
    features: ['Atomic Swaps', 'Staking', 'Built-in Exchange', 'DApp Browser'],
    supportedCoins: 500,
    pros: [
      'Supports 500+ cryptocurrencies',
      'Atomic swap technology',
      'Staking rewards available',
      'No KYC required'
    ],
    cons: [
      'Not open source',
      'Limited security audits',
      'Customer support can be slow'
    ],
    downloadUrl: 'https://atomicwallet.io',
    officialWebsite: 'https://atomicwallet.io',
    rating: 4.2,
    userCount: '1M+',
    lastUpdated: '2024-12-10',
    fileSize: '89 MB',
    price: 'Free'
  },
  {
    id: 'bitcoin-core',
    name: 'Bitcoin Core',
    description: 'The original Bitcoin client that downloads the full blockchain. Maximum security and decentralization.',
    logo: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=200',
    platforms: ['Windows', 'macOS', 'Linux'],
    securityLevel: 'Extreme',
    userLevel: 'Advanced',
    openSource: true,
    features: ['Full Node', 'Complete Blockchain', 'Maximum Security', 'Network Validation'],
    supportedCoins: 1,
    pros: [
      'Maximum security and privacy',
      'Helps secure the Bitcoin network',
      'Complete transaction validation',
      'Open source and transparent'
    ],
    cons: [
      'Requires 500+ GB storage',
      'Very slow initial sync',
      'Complex for beginners',
      'Bitcoin only'
    ],
    downloadUrl: 'https://bitcoin.org',
    officialWebsite: 'https://bitcoin.org',
    rating: 4.8,
    userCount: '100K+',
    lastUpdated: '2024-12-12',
    fileSize: '25 MB',
    price: 'Free'
  },
  {
    id: 'wasabi-wallet',
    name: 'Wasabi Wallet',
    description: 'Privacy-focused Bitcoin wallet with built-in CoinJoin mixing for enhanced anonymity.',
    logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200',
    platforms: ['Windows', 'macOS', 'Linux'],
    securityLevel: 'Extreme',
    userLevel: 'Advanced',
    openSource: true,
    features: ['CoinJoin Mixing', 'Tor Integration', 'Hardware Wallet Support', 'Privacy Focus'],
    supportedCoins: 1,
    pros: [
      'Excellent privacy features',
      'Built-in transaction mixing',
      'Tor network integration',
      'Open source and audited'
    ],
    cons: [
      'Bitcoin only',
      'Complex interface',
      'Mixing fees required',
      'Not suitable for beginners'
    ],
    downloadUrl: 'https://wasabiwallet.io',
    officialWebsite: 'https://wasabiwallet.io',
    rating: 4.5,
    userCount: '50K+',
    lastUpdated: '2024-12-08',
    fileSize: '67 MB',
    price: 'Free'
  },
  {
    id: 'metamask-desktop',
    name: 'MetaMask Desktop',
    description: 'Popular Ethereum wallet with DeFi integration and extensive DApp support.',
    logo: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=200',
    platforms: ['Windows', 'macOS', 'Linux'],
    securityLevel: 'High',
    userLevel: 'Beginner',
    openSource: true,
    features: ['DeFi Integration', 'NFT Support', 'DApp Browser', 'Hardware Wallet Support'],
    supportedCoins: 1000,
    pros: [
      'Most popular Ethereum wallet',
      'Extensive DApp ecosystem',
      'Regular security updates',
      'Strong community support'
    ],
    cons: [
      'Ethereum-focused only',
      'Can be overwhelming for beginners',
      'Gas fees can be high'
    ],
    downloadUrl: 'https://metamask.io',
    officialWebsite: 'https://metamask.io',
    rating: 4.3,
    userCount: '30M+',
    lastUpdated: '2024-12-19',
    fileSize: '156 MB',
    price: 'Free'
  }
];

const faqData: FAQItem[] = [
  {
    question: "What is a desktop crypto wallet?",
    answer: "A desktop crypto wallet is software you install on your computer to store, send, and receive cryptocurrencies. Unlike online wallets, desktop wallets give you full control of your private keys and work offline for enhanced security.",
    category: 'basics'
  },
  {
    question: "Are desktop wallets safer than mobile wallets?",
    answer: "Desktop wallets are generally considered safer than mobile wallets because computers are less likely to be lost or stolen, have better security features, and are less vulnerable to malware. However, they require proper security practices like regular backups and antivirus protection.",
    category: 'security'
  },
  {
    question: "Do I need to download the entire blockchain?",
    answer: "Not necessarily. Most desktop wallets are 'lightweight' and don't require downloading the full blockchain. Only full node wallets like Bitcoin Core require the complete blockchain download, which can be 500+ GB.",
    category: 'setup'
  },
  {
    question: "Can I use the same wallet on multiple computers?",
    answer: "Yes, you can restore your wallet on multiple computers using your seed phrase (recovery words). However, for security reasons, it's recommended to use your wallet on only one trusted computer and keep others as backup access points.",
    category: 'setup'
  },
  {
    question: "What happens if my computer crashes?",
    answer: "If you have your seed phrase (recovery words) backed up safely, you can restore your wallet and all your cryptocurrency on a new computer. This is why backing up your seed phrase is crucial - it's your only way to recover your funds.",
    category: 'troubleshooting'
  },
  {
    question: "How do I keep my desktop wallet secure?",
    answer: "Keep your computer updated, use antivirus software, backup your seed phrase offline, use strong passwords, enable two-factor authentication when available, and never share your private keys or seed phrase with anyone.",
    category: 'security'
  },
  {
    question: "Can I use a desktop wallet offline?",
    answer: "Yes, many desktop wallets can generate addresses and sign transactions offline. However, you'll need an internet connection to broadcast transactions to the network and check your balance. Some wallets offer 'cold storage' features for maximum security.",
    category: 'security'
  },
  {
    question: "Which desktop wallet is best for beginners?",
    answer: "Exodus and MetaMask are excellent for beginners due to their user-friendly interfaces and good customer support. Exodus is great for multiple cryptocurrencies, while MetaMask is perfect if you're interested in Ethereum and DeFi applications.",
    category: 'basics'
  }
];

const bestPractices = [
  {
    category: 'Security',
    icon: Shield,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900',
    practices: [
      'Always download wallets from official websites only',
      'Verify download checksums when provided',
      'Use strong, unique passwords for wallet encryption',
      'Enable two-factor authentication if available',
      'Keep your computer updated with latest security patches',
      'Use reputable antivirus software',
      'Never share your private keys or seed phrase'
    ]
  },
  {
    category: 'Backup & Recovery',
    icon: Database,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
    practices: [
      'Write down your seed phrase on paper (never digital)',
      'Store backup in multiple secure locations',
      'Test your backup by restoring on another device',
      'Consider using metal seed phrase storage',
      'Never store seed phrases in cloud storage',
      'Create multiple copies of your backup',
      'Keep backups away from your computer'
    ]
  },
  {
    category: 'Usage',
    icon: Monitor,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900',
    practices: [
      'Start with small amounts to test functionality',
      'Double-check addresses before sending transactions',
      'Use address book for frequently used addresses',
      'Keep transaction records for tax purposes',
      'Regularly update your wallet software',
      'Monitor your transactions and balances',
      'Use testnet for learning and experimentation'
    ]
  },
  {
    category: 'Privacy',
    icon: Eye,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
    practices: [
      'Use VPN when accessing your wallet online',
      'Consider using Tor for enhanced privacy',
      'Generate new addresses for each transaction',
      'Avoid reusing addresses when possible',
      'Be cautious about sharing wallet addresses publicly',
      'Use privacy coins for sensitive transactions',
      'Regularly clear browser data and cache'
    ]
  }
];

const comparisonFeatures = [
  'Multi-Currency Support',
  'Hardware Wallet Integration',
  'Built-in Exchange',
  'Staking Support',
  'DeFi Integration',
  'NFT Support',
  'Open Source',
  'Mobile Sync',
  'Advanced Security',
  'Beginner Friendly'
];

export function DesktopWalletsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSecurity, setSelectedSecurity] = useState<string>('all');
  const [selectedUserLevel, setSelectedUserLevel] = useState<string>('all');
  const [expandedWallet, setExpandedWallet] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  // Filter wallets
  const filteredWallets = desktopWallets.filter(wallet => {
    const matchesSearch = !searchQuery || 
      wallet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wallet.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSecurity = selectedSecurity === 'all' || wallet.securityLevel === selectedSecurity;
    const matchesUserLevel = selectedUserLevel === 'all' || wallet.userLevel === selectedUserLevel;
    
    return matchesSearch && matchesSecurity && matchesUserLevel;
  });

  const toggleWalletDetails = (walletId: string) => {
    setExpandedWallet(expandedWallet === walletId ? null : walletId);
  };

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const getSecurityColor = (level: string) => {
    switch (level) {
      case 'Extreme': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'Very High': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      case 'High': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getUserLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Intermediate': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Advanced': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const faqCategories = [
    { id: 'basics', name: 'Basics', icon: Lightbulb, color: 'text-blue-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'text-red-600' },
    { id: 'setup', name: 'Setup', icon: Settings, color: 'text-green-600' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: AlertTriangle, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Desktop Crypto Wallets
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Complete guide to cryptocurrency desktop wallets. Learn about the best desktop wallets, 
          security features, setup guides, and expert recommendations for safe crypto storage on your computer.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">{desktopWallets.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Top Wallets</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">3</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">1000+</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Supported Coins</div>
          </div>
        </div>
      </div>

      {/* What are Desktop Wallets */}
      <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-900 dark:text-blue-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <span>What are Desktop Crypto Wallets?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
            <p className="mb-4">
              <strong>Desktop crypto wallets are software applications</strong> you install on your computer to store, 
              manage, and transact with cryptocurrencies. Unlike online wallets, desktop wallets give you complete 
              control over your private keys and can work offline for enhanced security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Full Control</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                You own and control your private keys, not a third party
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <WifiOff className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Offline Security</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Can generate addresses and sign transactions without internet
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Advanced Features</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                More features and customization options than mobile wallets
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Set Up Desktop Wallets */}
      <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Download className="h-8 w-8 text-white" />
            </div>
            <span>How to Set Up a Desktop Wallet</span>
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
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Choose Your Wallet</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Research and select a reputable desktop wallet that supports your cryptocurrencies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Download Safely</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Only download from the official website and verify checksums if provided
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Install & Create Wallet</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Install the software and create a new wallet with a strong password
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Backup Seed Phrase</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Write down your recovery words on paper and store them safely offline
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Test with Small Amount</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Send a small test transaction to verify everything works correctly
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Secure Your Computer</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Enable firewall, use antivirus, and keep your operating system updated
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <span>Important Security Tips</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Never Share Your Seed Phrase</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Your seed phrase is like the master key to your crypto. Never share it with anyone or store it digitally.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
                  <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Download from Official Sources</h5>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Only download wallet software from official websites to avoid malware and fake wallets.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Keep Multiple Backups</h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Store your seed phrase backup in multiple secure locations in case one is lost or damaged.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Regular Updates</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Keep your wallet software updated to get the latest security patches and features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Filters and Search */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
              <input
                type="text"
                placeholder="Search desktop wallets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary-brand)] focus:ring-2 focus:ring-[var(--color-primary-brand)]/20 focus:outline-none transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Security Level</label>
                <select
                  value={selectedSecurity}
                  onChange={(e) => setSelectedSecurity(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] focus:border-[var(--color-primary-brand)] focus:ring-2 focus:ring-[var(--color-primary-brand)]/20 focus:outline-none"
                >
                  <option value="all">All Security Levels</option>
                  <option value="High">High Security</option>
                  <option value="Very High">Very High Security</option>
                  <option value="Extreme">Extreme Security</option>
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">User Level</label>
                <select
                  value={selectedUserLevel}
                  onChange={(e) => setSelectedUserLevel(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] focus:border-[var(--color-primary-brand)] focus:ring-2 focus:ring-[var(--color-primary-brand)]/20 focus:outline-none"
                >
                  <option value="all">All User Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  onClick={() => setShowComparison(!showComparison)}
                  variant="outline"
                  className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  {showComparison ? 'Hide' : 'Show'} Comparison
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <Badge variant="secondary" className="rounded-xl">
                {filteredWallets.length} desktop wallets found
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desktop vs Mobile vs Hardware */}
      <Card className="rounded-2xl bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <span>Desktop vs Mobile vs Hardware Wallets</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3 text-center">Desktop Wallets</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Full control of private keys</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Advanced features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Offline capability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Less portable</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3 text-center">Mobile Wallets</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Highly portable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Easy to use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">More vulnerable to loss</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Limited features</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <HardDrive className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3 text-center">Hardware Wallets</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Maximum security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Offline storage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Costs money</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-purple-800 dark:text-purple-200">Less convenient</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Desktop Wallets */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[var(--color-primary-brand)] rounded-xl">
            <Crown className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Top {filteredWallets.length} Desktop Crypto Wallets
          </h2>
          <div className="flex-1 h-px bg-[var(--color-muted-subtle)]" />
          <Badge variant="secondary" className="rounded-xl">
            {filteredWallets.length} wallets
          </Badge>
        </div>

        <div className="grid gap-6">
          {filteredWallets.map((wallet, index) => (
            <Card key={wallet.id} className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="p-6">
                  {/* Wallet Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg">
                          <Monitor className="h-8 w-8 text-gray-500" />
                        </div>
                        {index < 3 && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                            {wallet.name}
                          </h3>
                          {wallet.openSource && (
                            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                              <Github className="h-3 w-3 mr-1" />
                              Open Source
                            </Badge>
                          )}
                          <Badge className={cn("text-xs", getSecurityColor(wallet.securityLevel))}>
                            <Shield className="h-3 w-3 mr-1" />
                            {wallet.securityLevel}
                          </Badge>
                          <Badge className={cn("text-xs", getUserLevelColor(wallet.userLevel))}>
                            {wallet.userLevel}
                          </Badge>
                        </div>
                        <p className="text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                          {wallet.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-[var(--color-text-secondary)]">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="font-medium">{wallet.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{wallet.userCount} users</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Globe className="h-4 w-4" />
                            <span>{wallet.supportedCoins} coins</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4" />
                            <span>{wallet.fileSize}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right space-y-2">
                      <div className="text-2xl font-bold text-[var(--color-primary-brand)]">
                        {wallet.price}
                      </div>
                      <div className="space-y-2">
                        <Button 
                          size="sm" 
                          className="w-full rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                          asChild
                        >
                          <a href={wallet.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </a>
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toggleWalletDetails(wallet.id)}
                          className="w-full rounded-xl"
                        >
                          {expandedWallet === wallet.id ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-2" />
                              Hide Details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-2" />
                              Show Details
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">
                        {wallet.platforms.length}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Platforms</div>
                    </div>
                    <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">
                        {wallet.supportedCoins}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Coins</div>
                    </div>
                    <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">
                        {wallet.rating}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Rating</div>
                    </div>
                    <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">
                        {wallet.userCount}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Users</div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedWallet === wallet.id && (
                    <div className="space-y-6 pt-6 border-t border-[var(--color-muted-subtle)]">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                          <Zap className="h-5 w-5 text-[var(--color-primary-brand)]" />
                          <span>Key Features</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {wallet.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Platforms */}
                      <div>
                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                          <Cpu className="h-5 w-5 text-[var(--color-primary-brand)]" />
                          <span>Supported Platforms</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {wallet.platforms.map((platform) => (
                            <Badge key={platform} className="bg-[var(--color-primary-brand)] text-white text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Pros and Cons */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5" />
                            <span>Pros</span>
                          </h4>
                          <ul className="space-y-2">
                            {wallet.pros.map((pro, index) => (
                              <li key={index} className="text-sm flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--color-text-secondary)]">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center space-x-2">
                            <XCircle className="h-5 w-5" />
                            <span>Cons</span>
                          </h4>
                          <ul className="space-y-2">
                            {wallet.cons.map((con, index) => (
                              <li key={index} className="text-sm flex items-start space-x-2">
                                <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--color-text-secondary)]">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technical Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-[var(--color-muted-subtle)] rounded-xl">
                        <div>
                          <div className="text-sm font-medium text-[var(--color-text-secondary)]">File Size</div>
                          <div className="text-lg font-bold text-[var(--color-text-primary)]">{wallet.fileSize}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[var(--color-text-secondary)]">Last Updated</div>
                          <div className="text-lg font-bold text-[var(--color-text-primary)]">{wallet.lastUpdated}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[var(--color-text-secondary)]">Open Source</div>
                          <div className="text-lg font-bold text-[var(--color-text-primary)]">
                            {wallet.openSource ? 'Yes' : 'No'}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[var(--color-text-secondary)]">Price</div>
                          <div className="text-lg font-bold text-[var(--color-text-primary)]">{wallet.price}</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                        <Button 
                          className="flex-1 rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                          asChild
                        >
                          <a href={wallet.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4 mr-2" />
                            Download {wallet.name}
                          </a>
                        </Button>
                        <Button 
                          variant="outline"
                          className="rounded-xl"
                          asChild
                        >
                          <a href={wallet.officialWebsite} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Official Website
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {showComparison && (
        <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
              <BarChart3 className="h-6 w-6 text-[var(--color-primary-brand)]" />
              <span>Desktop Wallet Comparison</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--color-muted-subtle)]">
                    <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Wallet</th>
                    <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Security</th>
                    <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">User Level</th>
                    <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Coins</th>
                    <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Open Source</th>
                    <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Rating</th>
                    <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWallets.map((wallet) => (
                    <tr key={wallet.id} className="border-b border-[var(--color-muted-subtle)] hover:bg-[var(--color-muted-subtle)] transition-colors">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                            <Monitor className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <div className="font-semibold text-[var(--color-text-primary)]">{wallet.name}</div>
                            <div className="text-xs text-[var(--color-text-secondary)]">{wallet.userCount} users</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <Badge className={cn("text-xs", getSecurityColor(wallet.securityLevel))}>
                          {wallet.securityLevel}
                        </Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge className={cn("text-xs", getUserLevelColor(wallet.userLevel))}>
                          {wallet.userLevel}
                        </Badge>
                      </td>
                      <td className="p-4 text-center font-medium text-[var(--color-text-primary)]">
                        {wallet.supportedCoins}
                      </td>
                      <td className="p-4 text-center">
                        {wallet.openSource ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium text-[var(--color-text-primary)]">{wallet.rating}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center font-medium text-[var(--color-text-primary)]">
                        {wallet.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Best Practices */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
            <span>Best Practices for Desktop Wallets</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {bestPractices.map((category, index) => (
              <div key={category.category} className={cn("rounded-2xl p-6 shadow-lg", category.bgColor)}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white/80 dark:bg-black/20 rounded-xl">
                    <category.icon className={cn("h-6 w-6", category.color)} />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                    {category.category}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {category.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {practice}
                      </span>
                    </li>
                  ))}
                </ul>
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

      {/* Final CTA */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[var(--color-primary-brand)] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Monitor className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Ready to Get Started?
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Choose the desktop wallet that best fits your needs and start securing your cryptocurrency today. 
            Remember to always prioritize security and backup your wallet properly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/wallets/hardware">
                Hardware Wallets
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/wallets/mobile">
                Mobile Wallets
              </Link>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <Link href="/guides">
                Security Guides
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
              <Monitor className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Desktop Wallets • {filteredWallets.length} options
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}