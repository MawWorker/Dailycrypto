"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Shield,
  Lock,
  Smartphone,
  Usb,
  Wifi,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Star,
  ExternalLink,
  Download,
  Zap,
  Target,
  Award,
  ChevronDown,
  ChevronUp,
  Wallet,
  Key,
  Database,
  Network,
  Cpu,
  HardDrive,
  Router,
  Fingerprint,
  QrCode,
  FileText,
  Clock,
  RefreshCw,
  Upload,
  Trash2,
  Copy,
  Building2,
  Globe,
  Users,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Heart,
  DollarSign
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface HardwareWallet {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  rating: number;
  supportedCoins: number;
  features: string[];
  pros: string[];
  cons: string[];
  securityFeatures: string[];
  connectivity: string[];
  compatibility: string[];
  affiliateLink?: string;
  popular?: boolean;
  recommended?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
  category: 'basics' | 'security' | 'setup' | 'troubleshooting';
}

const hardwareWallets: HardwareWallet[] = [
  {
    id: 'ledger-nano-s-plus',
    name: 'Nano S Plus',
    brand: 'Ledger',
    price: '₱4,500 - ₱5,500',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    supportedCoins: 5500,
    features: [
      'Secure Element Chip (CC EAL5+)',
      'USB-C Connectivity',
      'OLED Display',
      'Physical Buttons',
      'Ledger Live App Integration'
    ],
    pros: [
      'Industry-leading security',
      'Supports 5,500+ cryptocurrencies',
      'Regular firmware updates',
      'Strong reputation and track record',
      'Comprehensive mobile app'
    ],
    cons: [
      'Limited storage for apps',
      'Small screen can be hard to read',
      'More expensive than some alternatives'
    ],
    securityFeatures: [
      'Secure Element chip',
      'PIN code protection',
      'Recovery phrase backup',
      'Anti-tampering design',
      'Certified security (CC EAL5+)'
    ],
    connectivity: ['USB-C'],
    compatibility: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    affiliateLink: 'https://ledger.com/?r=cryptopress',
    popular: true,
    recommended: true
  },
  {
    id: 'trezor-model-t',
    name: 'Model T',
    brand: 'Trezor',
    price: '₱12,000 - ₱15,000',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    supportedCoins: 1800,
    features: [
      'Color Touchscreen',
      'USB-C Connectivity',
      'MicroSD Card Slot',
      'Shamir Backup',
      'Trezor Suite Integration'
    ],
    pros: [
      'Large color touchscreen',
      'Open-source firmware',
      'Advanced backup options',
      'Excellent user interface',
      'Strong community support'
    ],
    cons: [
      'More expensive than Nano S Plus',
      'Larger physical size',
      'Supports fewer coins than Ledger'
    ],
    securityFeatures: [
      'Secure microcontroller',
      'PIN and passphrase protection',
      'Shamir backup support',
      'Open-source security',
      'Physical confirmation required'
    ],
    connectivity: ['USB-C'],
    compatibility: ['Windows', 'macOS', 'Linux', 'Android'],
    recommended: true
  },
  {
    id: 'ledger-nano-x',
    name: 'Nano X',
    brand: 'Ledger',
    price: '₱8,000 - ₱10,000',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    supportedCoins: 5500,
    features: [
      'Bluetooth Connectivity',
      'Larger Screen',
      'Mobile App Support',
      'Battery Powered',
      'More Storage'
    ],
    pros: [
      'Wireless Bluetooth connection',
      'Works great with mobile devices',
      'Larger screen than Nano S Plus',
      'Can store more apps simultaneously',
      'Portable with built-in battery'
    ],
    cons: [
      'More expensive than Nano S Plus',
      'Battery can degrade over time',
      'Bluetooth adds potential attack surface'
    ],
    securityFeatures: [
      'Secure Element chip',
      'Bluetooth encryption',
      'PIN protection',
      'Recovery phrase backup',
      'Anti-tampering design'
    ],
    connectivity: ['USB-C', 'Bluetooth'],
    compatibility: ['Windows', 'macOS', 'Linux', 'Android', 'iOS'],
    affiliateLink: 'https://ledger.com/?r=cryptopress',
    popular: true
  },
  {
    id: 'trezor-one',
    name: 'Model One',
    brand: 'Trezor',
    price: '₱3,500 - ₱4,500',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    supportedCoins: 1800,
    features: [
      'OLED Display',
      'Two Physical Buttons',
      'USB-C Connectivity',
      'Open Source',
      'Trezor Suite'
    ],
    pros: [
      'Most affordable Trezor option',
      'Completely open-source',
      'Simple and reliable',
      'Good for beginners',
      'Strong security track record'
    ],
    cons: [
      'Small monochrome screen',
      'Limited advanced features',
      'No touchscreen',
      'Fewer supported coins'
    ],
    securityFeatures: [
      'Secure microcontroller',
      'PIN protection',
      'Recovery seed backup',
      'Open-source verification',
      'Physical button confirmation'
    ],
    connectivity: ['USB-C'],
    compatibility: ['Windows', 'macOS', 'Linux', 'Android']
  },
  {
    id: 'coldcard-mk4',
    name: 'ColdCard Mk4',
    brand: 'Coinkite',
    price: '₱7,000 - ₱9,000',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.4,
    supportedCoins: 1,
    features: [
      'Bitcoin-Only Focus',
      'Air-Gapped Operation',
      'MicroSD Card Support',
      'Advanced Security',
      'Developer-Friendly'
    ],
    pros: [
      'Maximum security for Bitcoin',
      'Can operate completely offline',
      'Advanced features for power users',
      'No USB connection required',
      'Excellent for Bitcoin maximalists'
    ],
    cons: [
      'Bitcoin only (no altcoins)',
      'Complex for beginners',
      'More expensive for single-coin support',
      'Steeper learning curve'
    ],
    securityFeatures: [
      'Secure Element + MCU',
      'Air-gapped operation',
      'Anti-phishing features',
      'Duress PIN support',
      'Advanced entropy sources'
    ],
    connectivity: ['MicroSD', 'USB-C (optional)'],
    compatibility: ['Windows', 'macOS', 'Linux']
  },
  {
    id: 'bitbox02',
    name: 'BitBox02',
    brand: 'Shift Crypto',
    price: '₱6,000 - ₱7,500',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.3,
    supportedCoins: 1500,
    features: [
      'Touch Sensors',
      'OLED Display',
      'USB-C Only',
      'Open Source',
      'BitBoxApp'
    ],
    pros: [
      'Innovative touch sensor design',
      'Completely open-source',
      'Swiss engineering quality',
      'Simple and clean interface',
      'Good privacy features'
    ],
    cons: [
      'Smaller ecosystem than Ledger/Trezor',
      'Fewer supported cryptocurrencies',
      'Less third-party integration',
      'Newer brand with shorter track record'
    ],
    securityFeatures: [
      'Secure chip',
      'Touch sensor confirmation',
      'Device attestation',
      'Secure boot',
      'Anti-klepto protocol'
    ],
    connectivity: ['USB-C'],
    compatibility: ['Windows', 'macOS', 'Linux', 'Android']
  }
];

const faqData: FAQItem[] = [
  {
    question: "What is a hardware wallet and why do I need one?",
    answer: "A hardware wallet is a physical device that stores your cryptocurrency private keys offline. It's like a secure USB drive for your crypto. You need one because it's the safest way to store large amounts of cryptocurrency - even if your computer gets hacked, your crypto remains safe on the hardware device.",
    category: 'basics'
  },
  {
    question: "How much cryptocurrency should I have before buying a hardware wallet?",
    answer: "Generally, if you have more than ₱50,000 worth of cryptocurrency, you should consider a hardware wallet. However, even smaller amounts benefit from hardware security. Think of it as insurance - the cost of the wallet (₱3,500-₱15,000) is worth it to protect your investment.",
    category: 'basics'
  },
  {
    question: "Are hardware wallets really safer than mobile or desktop wallets?",
    answer: "Yes, hardware wallets are much safer because your private keys never leave the device and never touch the internet. Even if your computer has malware, hackers can't access your crypto. Mobile and desktop wallets are connected to the internet, making them more vulnerable to attacks.",
    category: 'security'
  },
  {
    question: "What happens if I lose my hardware wallet?",
    answer: "If you lose your hardware wallet, you can recover all your cryptocurrency using your 12-24 word recovery phrase (seed phrase). This is why it's crucial to write down and safely store your recovery phrase when you first set up the wallet. Without the recovery phrase, your crypto is lost forever.",
    category: 'security'
  },
  {
    question: "Can I use a hardware wallet with my phone?",
    answer: "Yes! Most modern hardware wallets work with smartphones. Ledger Nano X has Bluetooth for wireless connection, while others like Nano S Plus can connect via USB-C cable with an adapter. You can manage your crypto on-the-go while keeping it secure.",
    category: 'setup'
  },
  {
    question: "Do I need to buy a hardware wallet from the official website?",
    answer: "Yes, always buy directly from the manufacturer's official website or authorized resellers. Never buy from third-party sellers on eBay, Amazon, or other marketplaces, as the device could be tampered with or pre-loaded with malicious software.",
    category: 'security'
  },
  {
    question: "How do I set up a hardware wallet for the first time?",
    answer: "1) Buy from official source, 2) Download the official app (Ledger Live, Trezor Suite, etc.), 3) Connect the device, 4) Create a new wallet, 5) Write down your recovery phrase securely, 6) Set a PIN, 7) Install cryptocurrency apps, 8) Transfer a small test amount first.",
    category: 'setup'
  },
  {
    question: "What should I do if my hardware wallet stops working?",
    answer: "Don't panic! As long as you have your recovery phrase, your crypto is safe. You can restore your wallet on a new device using the recovery phrase. Contact the manufacturer's support for warranty replacement, but never share your recovery phrase with anyone, including support staff.",
    category: 'troubleshooting'
  }
];

const securityComparison = [
  {
    method: 'Hardware Wallet',
    security: 'Highest',
    convenience: 'Medium',
    cost: '₱3,500-₱15,000',
    bestFor: 'Long-term storage, large amounts',
    pros: ['Offline storage', 'Physical confirmation', 'Immune to computer viruses'],
    cons: ['Initial cost', 'Can be lost/damaged', 'Learning curve'],
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900'
  },
  {
    method: 'Mobile Wallet',
    security: 'Medium',
    convenience: 'High',
    cost: 'Free',
    bestFor: 'Daily transactions, small amounts',
    pros: ['Always with you', 'Easy to use', 'Quick transactions'],
    cons: ['Connected to internet', 'Phone can be lost/stolen', 'App vulnerabilities'],
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900'
  },
  {
    method: 'Exchange Wallet',
    security: 'Low',
    convenience: 'High',
    cost: 'Free',
    bestFor: 'Active trading only',
    pros: ['No setup required', 'Easy trading', 'Customer support'],
    cons: ['Exchange controls keys', 'Hacking risk', 'Can freeze accounts'],
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900'
  }
];

export function HardwareWalletsContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const faqCategories = [
    { id: 'basics', name: 'Basics', icon: Lightbulb, color: 'text-blue-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'text-green-600' },
    { id: 'setup', name: 'Setup', icon: Target, color: 'text-purple-600' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: AlertTriangle, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Hardware Wallets Guide
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Discover the most secure way to store your cryptocurrency. Learn about the best hardware wallets, 
          setup guides, and security best practices for protecting your digital assets.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">{hardwareWallets.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Wallets Reviewed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">99.9%</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Security Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">5,500+</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Supported Coins</div>
          </div>
        </div>
      </div>

      {/* Why Hardware Wallets */}
      <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <span>Why Use Hardware Wallets?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-green-800 dark:text-green-200 leading-relaxed">
            <p className="mb-4">
              <strong>Hardware wallets are the gold standard for cryptocurrency security.</strong> They store your private keys 
              on a physical device that never connects to the internet, making it nearly impossible for hackers to steal your crypto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Offline Security</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Private keys never touch the internet, protecting against online attacks
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Physical Confirmation</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Every transaction must be physically approved on the device
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Key className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">You Own Your Keys</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Complete control over your cryptocurrency, no third-party risk
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Comparison */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <span>Security Comparison</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {securityComparison.map((method, index) => (
              <Card key={index} className={cn("rounded-2xl shadow-lg", method.bgColor)}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                          {method.method}
                        </h3>
                        <Badge 
                          className={cn(
                            "text-xs",
                            method.security === 'Highest' ? 'bg-green-500 text-white' :
                            method.security === 'Medium' ? 'bg-yellow-500 text-white' :
                            'bg-red-500 text-white'
                          )}
                        >
                          {method.security} Security
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-[var(--color-text-primary)]">Security:</span>
                          <div className={cn("font-bold", method.color)}>{method.security}</div>
                        </div>
                        <div>
                          <span className="font-medium text-[var(--color-text-primary)]">Convenience:</span>
                          <div className="font-bold text-[var(--color-text-primary)]">{method.convenience}</div>
                        </div>
                        <div>
                          <span className="font-medium text-[var(--color-text-primary)]">Cost:</span>
                          <div className="font-bold text-[var(--color-text-primary)]">{method.cost}</div>
                        </div>
                      </div>
                      
                      <p className="text-[var(--color-text-secondary)]">
                        <strong>Best for:</strong> {method.bestFor}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-[var(--color-text-primary)] mb-2 flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Pros</span>
                        </h5>
                        <ul className="space-y-1">
                          {method.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="text-sm text-[var(--color-text-secondary)] flex items-start space-x-2">
                              <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-[var(--color-text-primary)] mb-2 flex items-center space-x-1">
                          <XCircle className="h-4 w-4 text-red-500" />
                          <span>Cons</span>
                        </h5>
                        <ul className="space-y-1">
                          {method.cons.map((con, conIndex) => (
                            <li key={conIndex} className="text-sm text-[var(--color-text-secondary)] flex items-start space-x-2">
                              <div className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hardware Wallet Reviews */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
            <span>Best Hardware Wallets 2024</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {hardwareWallets.map((wallet, index) => (
              <Card key={wallet.id} className="rounded-2xl bg-[var(--color-muted-subtle)] border border-[var(--color-muted-subtle)] shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Wallet Image and Basic Info */}
                    <div className="text-center space-y-4">
                      <div className="relative w-32 h-32 mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
                        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                          <Wallet className="h-12 w-12 text-gray-500" />
                        </div>
                        {wallet.popular && (
                          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white animate-pulse">
                            🔥 Popular
                          </Badge>
                        )}
                        {wallet.recommended && (
                          <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                            ⭐ Recommended
                          </Badge>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                          {wallet.brand} {wallet.name}
                        </h3>
                        <div className="flex items-center justify-center space-x-2 mt-2">
                          <div className="flex">
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
                          <span className="font-semibold text-[var(--color-text-primary)]">{wallet.rating}</span>
                        </div>
                        <div className="text-lg font-bold text-[var(--color-primary-brand)] mt-2">
                          {wallet.price}
                        </div>
                      </div>
                    </div>

                    {/* Features and Specs */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                          <Zap className="h-5 w-5 text-[var(--color-primary-brand)]" />
                          <span>Key Features</span>
                        </h4>
                        <ul className="space-y-2">
                          {wallet.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2 text-sm text-[var(--color-text-secondary)]">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                          <Database className="h-5 w-5 text-[var(--color-primary-brand)]" />
                          <span>Specifications</span>
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-[var(--color-text-primary)]">Supported Coins:</span>
                            <div className="font-bold text-[var(--color-primary-brand)]">{wallet.supportedCoins.toLocaleString()}+</div>
                          </div>
                          <div>
                            <span className="font-medium text-[var(--color-text-primary)]">Connectivity:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {wallet.connectivity.map(conn => (
                                <Badge key={conn} variant="outline" className="text-xs">
                                  {conn}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pros and Cons */}
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Pros</span>
                        </h5>
                        <ul className="space-y-1">
                          {wallet.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="text-sm text-[var(--color-text-secondary)] flex items-start space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-1">
                          <XCircle className="h-4 w-4 text-red-500" />
                          <span>Cons</span>
                        </h5>
                        <ul className="space-y-1">
                          {wallet.cons.map((con, conIndex) => (
                            <li key={conIndex} className="text-sm text-[var(--color-text-secondary)] flex items-start space-x-2">
                              <XCircle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        {wallet.affiliateLink && (
                          <Button 
                            className="w-full rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                            asChild
                          >
                            <a 
                              href={wallet.affiliateLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center space-x-2"
                            >
                              <span>Buy {wallet.brand} {wallet.name}</span>
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        <Button 
                          variant="outline"
                          className="w-full rounded-xl"
                          onClick={() => setSelectedWallet(selectedWallet === wallet.id ? null : wallet.id)}
                        >
                          {selectedWallet === wallet.id ? 'Hide' : 'Show'} Security Details
                          {selectedWallet === wallet.id ? (
                            <ChevronUp className="h-4 w-4 ml-2" />
                          ) : (
                            <ChevronDown className="h-4 w-4 ml-2" />
                          )}
                        </Button>
                      </div>

                      {/* Expanded Security Details */}
                      {selectedWallet === wallet.id && (
                        <div className="mt-4 p-4 bg-white/50 dark:bg-black/20 rounded-xl border-l-4 border-[var(--color-primary-brand)]">
                          <h5 className="font-bold text-[var(--color-text-primary)] mb-3">Security Features:</h5>
                          <ul className="space-y-1">
                            {wallet.securityFeatures.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm text-[var(--color-text-secondary)] flex items-start space-x-2">
                                <Shield className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Setup Guide */}
      <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-900 dark:text-blue-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <span>Hardware Wallet Setup Guide</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
            <p className="mb-4">
              Setting up a hardware wallet is straightforward but requires careful attention to security. 
              Follow these steps to ensure your cryptocurrency is properly protected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 flex items-center space-x-2">
                <CheckCircle className="h-6 w-6" />
                <span>Setup Steps</span>
              </h4>
              <div className="space-y-3">
                {[
                  "Purchase from official website only",
                  "Verify packaging and security seals",
                  "Download official companion app",
                  "Initialize device and create new wallet",
                  "Write down recovery phrase securely",
                  "Set a strong PIN code",
                  "Install cryptocurrency apps",
                  "Test with small amount first"
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm text-blue-800 dark:text-blue-200">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100 flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
                <span>Critical Security Tips</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Never Share Recovery Phrase</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Your 12-24 word recovery phrase is the master key to your crypto. Never share it with anyone, including support staff.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border-l-4 border-yellow-500">
                  <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">Verify Addresses</h5>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Always verify receiving addresses on the device screen before confirming transactions.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Keep Firmware Updated</h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Regularly update your device firmware through the official app to get latest security patches.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Test Everything</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Start with small amounts to test sending, receiving, and recovery before storing large amounts.
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
            <Shield className="h-8 w-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Hardware Wallet Essentials
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">Remember:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Hardware wallets provide the highest security for crypto storage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Always buy directly from the manufacturer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Your recovery phrase is more important than the device itself</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Test with small amounts before storing large sums</span>
                </li>
              </ul>
            </div>
            
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">Best Practices:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Store recovery phrase in multiple secure locations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Keep firmware updated for latest security patches</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Use a strong PIN and consider passphrase protection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Verify all transactions on the device screen</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]">
              Ready to Secure Your Crypto?
            </h4>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Hardware wallets are an investment in your financial security. Choose a reputable brand, 
              follow setup instructions carefully, and always prioritize security over convenience.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
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
                <Link href="/guides/risks-security">
                  Security Guide
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Wallet className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Hardware Wallets • {hardwareWallets.length} reviewed
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}