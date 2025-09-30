"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart,
  Smartphone,
  Building2,
  CreditCard,
  Shield,
  CheckCircle,
  AlertTriangle,
  Info,
  Star,
  Banknote,
  Users,
  Clock,
  Eye,
  Wallet,
  ArrowRightLeft,
  FileText,
  Lock,
  Globe,
  Zap,
  Target,
  Award,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ExternalLink,
  Download,
  Upload,
  DollarSign,
  Percent,
  Timer,
  UserCheck,
  Camera,
  Mail,
  Phone,
  MapPin,
  CreditCard as CardIcon,
  Landmark
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Platform {
  id: string;
  name: string;
  type: 'Exchange' | 'E-Wallet' | 'Bank' | 'Remittance';
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  licensed: boolean;
  features: string[];
  paymentMethods: string[];
  fees: {
    trading?: string;
    withdrawal?: string;
    deposit?: string;
  };
  kycRequirements: string[];
  steps: {
    buying: string[];
    selling: string[];
  };
  pros: string[];
  cons: string[];
  bestFor: string[];
}

interface FAQItem {
  question: string;
  answer: string;
  category: 'getting-started' | 'platforms' | 'security' | 'fees';
}

const platforms: Platform[] = [
  {
    id: 'coins-ph',
    name: 'Coins.ph',
    type: 'Exchange',
    description: 'The most popular cryptocurrency exchange in the Philippines with over 18 million users.',
    icon: Smartphone,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900',
    licensed: true,
    features: ['Mobile App', 'Web Platform', 'Crypto Wallet', 'Bill Payments', 'Load Credits'],
    paymentMethods: ['GCash', 'Maya', 'Bank Transfer', 'Over-the-Counter', '7-Eleven', 'Cebuana'],
    fees: {
      trading: '0.5% - 1.5%',
      withdrawal: 'Free PHP, Network fees for crypto',
      deposit: 'Free for most methods'
    },
    kycRequirements: ['Valid ID', 'Selfie', 'Phone Number', 'Email Address'],
    steps: {
      buying: [
        'Download Coins.ph app from App Store or Google Play',
        'Create account with email and phone number',
        'Complete KYC verification by uploading valid ID and selfie',
        'Add payment method (GCash, Maya, or bank account)',
        'Go to "Buy Crypto" section and select cryptocurrency',
        'Enter amount in PHP you want to spend',
        'Review transaction details and confirm purchase',
        'Crypto will be added to your Coins.ph wallet instantly'
      ],
      selling: [
        'Open Coins.ph app and go to your crypto wallet',
        'Select the cryptocurrency you want to sell',
        'Tap "Sell" and enter the amount to sell',
        'Choose where to receive PHP (GCash, Maya, or bank)',
        'Review transaction details and fees',
        'Confirm the sale transaction',
        'PHP will be credited to your chosen account within minutes'
      ]
    },
    pros: [
      'Largest user base in Philippines',
      'Multiple payment options',
      'User-friendly mobile app',
      'Instant transactions',
      'Good customer support'
    ],
    cons: [
      'Higher fees compared to some competitors',
      'Limited cryptocurrency selection',
      'Occasional app downtime during high volume'
    ],
    bestFor: ['Beginners', 'Mobile users', 'Quick transactions', 'Bill payments']
  },
  {
    id: 'pdax',
    name: 'PDAX',
    type: 'Exchange',
    description: 'Professional digital asset exchange regulated by BSP with advanced trading features.',
    icon: Building2,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900',
    licensed: true,
    features: ['Professional Trading', 'Advanced Charts', 'API Access', 'Institutional Services'],
    paymentMethods: ['Bank Transfer', 'Online Banking', 'Over-the-Counter'],
    fees: {
      trading: '0.10% - 0.50%',
      withdrawal: 'Free PHP withdrawal',
      deposit: 'Free bank transfers'
    },
    kycRequirements: ['Government ID', 'Proof of Billing', 'Bank Account', 'Income Declaration'],
    steps: {
      buying: [
        'Visit PDAX.ph and click "Sign Up"',
        'Provide email, create strong password',
        'Verify email address through confirmation link',
        'Complete KYC by uploading government ID and proof of billing',
        'Link your bank account for funding',
        'Deposit PHP via bank transfer or online banking',
        'Navigate to trading interface and select crypto pair',
        'Place buy order (market or limit order)',
        'Crypto will be credited to your PDAX wallet'
      ],
      selling: [
        'Log into your PDAX account',
        'Go to trading interface and select crypto to sell',
        'Choose sell order type (market for instant, limit for specific price)',
        'Enter amount of crypto to sell',
        'Review order details and confirm',
        'Once sold, PHP will be in your PDAX peso wallet',
        'Withdraw PHP to your linked bank account (free)'
      ]
    },
    pros: [
      'Lowest trading fees in Philippines',
      'BSP regulated and compliant',
      'Professional trading tools',
      'Strong security measures',
      'Free PHP withdrawals'
    ],
    cons: [
      'Limited payment methods',
      'More complex for beginners',
      'Smaller cryptocurrency selection',
      'Stricter KYC requirements'
    ],
    bestFor: ['Experienced traders', 'Lower fees', 'Professional trading', 'Large transactions']
  },
  {
    id: 'maya-philippines',
    name: 'Maya Philippines',
    type: 'E-Wallet',
    description: 'Popular digital wallet with integrated cryptocurrency trading features.',
    icon: CreditCard,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900',
    licensed: true,
    features: ['Digital Wallet', 'Crypto Trading', 'Bill Payments', 'Money Transfer', 'QR Payments'],
    paymentMethods: ['Bank Transfer', 'Over-the-Counter', '7-Eleven', 'Maya Centers'],
    fees: {
      trading: '0.5% - 1.0%',
      withdrawal: 'Network fees apply',
      deposit: 'Free for most methods'
    },
    kycRequirements: ['Valid ID', 'Selfie', 'Phone Number', 'Address Verification'],
    steps: {
      buying: [
        'Download Maya app and create account',
        'Complete KYC verification with valid ID',
        'Add money to Maya wallet via bank or OTC',
        'Open "Crypto" section in Maya app',
        'Select cryptocurrency you want to buy',
        'Enter PHP amount to spend',
        'Confirm purchase with PIN or biometric',
        'Crypto will appear in your Maya crypto wallet'
      ],
      selling: [
        'Open Maya app and go to Crypto section',
        'Select cryptocurrency to sell',
        'Enter amount to sell or "Sell All"',
        'Review conversion rate and fees',
        'Confirm sale with PIN or biometric',
        'PHP will be added to your Maya wallet',
        'Withdraw to bank or use for payments'
      ]
    },
    pros: [
      'Integrated with popular Maya wallet',
      'Easy for existing Maya users',
      'Multiple cash-in options',
      'Good mobile experience'
    ],
    cons: [
      'Higher fees than specialized exchanges',
      'Limited crypto selection',
      'Basic trading features only'
    ],
    bestFor: ['Maya users', 'Casual investors', 'Small amounts', 'Mobile convenience']
  },
  {
    id: 'gcash-gcrypto',
    name: 'GCash (GCrypto)',
    type: 'E-Wallet',
    description: 'Cryptocurrency trading integrated into the Philippines\' most popular e-wallet via PDAX.',
    icon: Smartphone,
    color: 'text-indigo-600 dark:text-indigo-400',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900',
    licensed: true,
    features: ['In-App Trading', 'PDAX Integration', 'Instant Conversion', 'Wallet Storage'],
    paymentMethods: ['GCash Balance', 'Linked Bank Account', 'Cash-In Partners'],
    fees: {
      trading: '1.0% - 1.5%',
      withdrawal: 'Network fees apply',
      deposit: 'Free from GCash balance'
    },
    kycRequirements: ['GCash Fully Verified Account', 'Additional Crypto KYC'],
    steps: {
      buying: [
        'Ensure your GCash account is fully verified',
        'Open GCash app and find "GCrypto" or "Crypto" section',
        'Complete additional crypto KYC if required',
        'Select cryptocurrency to purchase',
        'Enter PHP amount from your GCash balance',
        'Review transaction details and fees',
        'Confirm purchase with MPIN',
        'Crypto will be stored in your GCash crypto wallet'
      ],
      selling: [
        'Open GCash app and go to GCrypto section',
        'Select crypto asset to sell',
        'Enter amount to sell',
        'Review conversion rate to PHP',
        'Confirm sale with MPIN',
        'PHP will be added to your GCash balance',
        'Use for payments or cash out to bank'
      ]
    },
    pros: [
      'Integrated with most popular e-wallet',
      'Huge user base (90M+ users)',
      'Instant access for GCash users',
      'Powered by licensed PDAX'
    ],
    cons: [
      'Higher fees than direct PDAX trading',
      'Limited crypto options',
      'Requires GCash full verification'
    ],
    bestFor: ['GCash users', 'Beginners', 'Convenience', 'Small amounts']
  },
  {
    id: 'bloomsolutions',
    name: 'BloomSolutions',
    type: 'Remittance',
    description: 'Blockchain-powered remittance platform for overseas Filipino workers.',
    icon: Globe,
    color: 'text-teal-600 dark:text-teal-400',
    bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900',
    licensed: true,
    features: ['Remittance Services', 'Blockchain Technology', 'Multi-Currency', 'Fast Transfers'],
    paymentMethods: ['Bank Transfer', 'Crypto Wallet', 'International Wire'],
    fees: {
      trading: '0.5% - 2.0%',
      withdrawal: 'Varies by destination',
      deposit: 'Free crypto deposits'
    },
    kycRequirements: ['Valid ID', 'Proof of Address', 'Source of Funds', 'Beneficiary Details'],
    steps: {
      buying: [
        'Register on BloomSolutions platform',
        'Complete KYC verification process',
        'Add beneficiary details in Philippines',
        'Choose cryptocurrency to purchase',
        'Fund account via bank transfer or crypto',
        'Select conversion amount and rate',
        'Confirm transaction details',
        'Crypto will be available for remittance'
      ],
      selling: [
        'Access your BloomSolutions account',
        'Select crypto asset to convert',
        'Choose recipient in Philippines',
        'Enter amount to send in PHP',
        'Review exchange rate and fees',
        'Confirm remittance transaction',
        'Recipient receives PHP via chosen method'
      ]
    },
    pros: [
      'Specialized for remittances',
      'Competitive exchange rates',
      'Fast international transfers',
      'Blockchain transparency'
    ],
    cons: [
      'Primarily for remittances',
      'Limited trading features',
      'Higher KYC requirements'
    ],
    bestFor: ['OFWs', 'Remittances', 'International transfers', 'Family support']
  },
  {
    id: 'direct-agent-5',
    name: 'Direct Agent 5 / SurgePay',
    type: 'Remittance',
    description: 'Digital remittance platform with cryptocurrency integration for Filipino overseas workers.',
    icon: ArrowRightLeft,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900',
    licensed: true,
    features: ['Remittance Services', 'Crypto Integration', 'Mobile App', 'Agent Network'],
    paymentMethods: ['Bank Transfer', 'Crypto Wallet', 'Agent Locations', 'Online Banking'],
    fees: {
      trading: '1.0% - 2.5%',
      withdrawal: 'Varies by method',
      deposit: 'Free for most methods'
    },
    kycRequirements: ['Government ID', 'Proof of Address', 'Employment Proof', 'Beneficiary Info'],
    steps: {
      buying: [
        'Download SurgePay app or visit website',
        'Create account with email and phone',
        'Complete identity verification',
        'Add beneficiary information',
        'Choose cryptocurrency option',
        'Fund transaction via preferred method',
        'Confirm crypto purchase details',
        'Crypto ready for remittance or holding'
      ],
      selling: [
        'Log into SurgePay platform',
        'Select crypto to convert to PHP',
        'Enter beneficiary details in Philippines',
        'Specify amount to send',
        'Review exchange rate and fees',
        'Confirm remittance transaction',
        'Track transfer status until completion'
      ]
    },
    pros: [
      'Good for remittances',
      'Agent network support',
      'Competitive rates',
      'Mobile-friendly'
    ],
    cons: [
      'Limited to remittance focus',
      'Fewer crypto options',
      'Regional availability'
    ],
    bestFor: ['OFW remittances', 'Agent assistance', 'Traditional users', 'Family support']
  },
  {
    id: 'moneybees',
    name: 'Moneybees',
    type: 'Remittance',
    description: 'Digital remittance service with blockchain technology for fast and secure transfers.',
    icon: Users,
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900',
    licensed: true,
    features: ['Digital Remittance', 'Blockchain Tech', 'Multi-Currency', 'Real-time Tracking'],
    paymentMethods: ['Bank Transfer', 'Crypto Wallet', 'Online Banking', 'Agent Network'],
    fees: {
      trading: '1.5% - 3.0%',
      withdrawal: 'Varies by destination',
      deposit: 'Free crypto deposits'
    },
    kycRequirements: ['Valid ID', 'Address Proof', 'Income Source', 'Beneficiary Details'],
    steps: {
      buying: [
        'Register on Moneybees platform',
        'Verify identity with required documents',
        'Set up beneficiary information',
        'Choose crypto purchase option',
        'Fund account via bank or crypto',
        'Select cryptocurrency and amount',
        'Confirm purchase transaction',
        'Crypto available for transfer or holding'
      ],
      selling: [
        'Access Moneybees account',
        'Select crypto asset to sell',
        'Enter beneficiary details',
        'Specify PHP amount to send',
        'Review conversion rate',
        'Confirm remittance order',
        'Track transfer to completion'
      ]
    },
    pros: [
      'Blockchain-powered transfers',
      'Real-time tracking',
      'Competitive rates',
      'Secure platform'
    ],
    cons: [
      'Remittance-focused only',
      'Limited trading features',
      'Smaller user base'
    ],
    bestFor: ['Remittances', 'Blockchain enthusiasts', 'Secure transfers', 'Tech-savvy users']
  },
  {
    id: 'topjuan',
    name: 'TopJuan Technologies',
    type: 'Exchange',
    description: 'Local cryptocurrency exchange platform serving Filipino crypto traders.',
    icon: Star,
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900',
    licensed: true,
    features: ['Crypto Trading', 'Local Support', 'PHP Pairs', 'Mobile Access'],
    paymentMethods: ['Bank Transfer', 'Online Banking', 'Over-the-Counter'],
    fees: {
      trading: '0.25% - 1.0%',
      withdrawal: 'Network fees apply',
      deposit: 'Free bank deposits'
    },
    kycRequirements: ['Valid ID', 'Proof of Address', 'Bank Account', 'Phone Verification'],
    steps: {
      buying: [
        'Visit TopJuan website and register',
        'Verify email and phone number',
        'Complete KYC with ID and address proof',
        'Link bank account for funding',
        'Deposit PHP via bank transfer',
        'Navigate to trading section',
        'Select cryptocurrency pair (e.g., BTC/PHP)',
        'Place buy order and confirm',
        'Crypto will be in your TopJuan wallet'
      ],
      selling: [
        'Log into TopJuan platform',
        'Go to your crypto wallet',
        'Select cryptocurrency to sell',
        'Choose sell order type',
        'Enter amount to sell',
        'Review order and confirm',
        'PHP proceeds in peso wallet',
        'Withdraw to linked bank account'
      ]
    },
    pros: [
      'Local Filipino company',
      'Competitive trading fees',
      'Good customer support',
      'PHP trading pairs'
    ],
    cons: [
      'Smaller platform',
      'Limited cryptocurrency options',
      'Less liquidity than major exchanges'
    ],
    bestFor: ['Supporting local business', 'PHP pairs', 'Personal service', 'Filipino community']
  },
  {
    id: 'xenremit',
    name: 'XenRemit',
    type: 'Remittance',
    description: 'Digital remittance platform leveraging cryptocurrency for fast cross-border transfers.',
    icon: Zap,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900',
    licensed: true,
    features: ['Fast Remittance', 'Crypto Integration', 'Multi-Corridor', 'Real-time Rates'],
    paymentMethods: ['Bank Transfer', 'Crypto Wallet', 'Online Banking', 'Agent Network'],
    fees: {
      trading: '1.0% - 2.0%',
      withdrawal: 'Varies by corridor',
      deposit: 'Free crypto deposits'
    },
    kycRequirements: ['Government ID', 'Address Proof', 'Employment Details', 'Beneficiary Info'],
    steps: {
      buying: [
        'Register on XenRemit platform',
        'Complete identity verification',
        'Add beneficiary information',
        'Select crypto purchase option',
        'Fund via bank or existing crypto',
        'Choose cryptocurrency and amount',
        'Confirm purchase details',
        'Crypto ready for remittance use'
      ],
      selling: [
        'Access XenRemit account',
        'Select crypto to convert',
        'Enter beneficiary details',
        'Specify PHP amount to send',
        'Review exchange rate',
        'Confirm remittance transaction',
        'Monitor transfer progress'
      ]
    },
    pros: [
      'Fast cross-border transfers',
      'Competitive exchange rates',
      'Crypto-powered efficiency',
      'Real-time tracking'
    ],
    cons: [
      'Remittance-focused platform',
      'Limited trading options',
      'Newer platform'
    ],
    bestFor: ['International remittances', 'Fast transfers', 'Crypto-savvy users', 'Cost efficiency']
  },
  {
    id: 'gotyme-bank',
    name: 'GoTyme Bank',
    type: 'Bank',
    description: 'Digital bank offering cryptocurrency services as a licensed Virtual Asset Service Provider.',
    icon: Landmark,
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900',
    licensed: true,
    features: ['Digital Banking', 'Crypto Services', 'VASP Licensed', 'Mobile Banking'],
    paymentMethods: ['Bank Account', 'Debit Card', 'Online Banking', 'ATM Network'],
    fees: {
      trading: '0.5% - 1.5%',
      withdrawal: 'Standard banking fees',
      deposit: 'Free internal transfers'
    },
    kycRequirements: ['Bank Account Opening', 'Valid ID', 'Proof of Income', 'Address Verification'],
    steps: {
      buying: [
        'Open GoTyme Bank account (if not existing)',
        'Complete bank KYC requirements',
        'Access crypto services in mobile app',
        'Complete additional crypto verification',
        'Fund account via bank transfer or deposit',
        'Navigate to cryptocurrency section',
        'Select crypto and purchase amount',
        'Confirm transaction with bank security',
        'Crypto stored in bank\'s custody solution'
      ],
      selling: [
        'Log into GoTyme Bank app',
        'Access cryptocurrency portfolio',
        'Select crypto asset to sell',
        'Enter amount to convert to PHP',
        'Review bank\'s exchange rate',
        'Confirm sale transaction',
        'PHP credited to bank account',
        'Available for withdrawal or use'
      ]
    },
    pros: [
      'Full banking integration',
      'VASP licensed by BSP',
      'Bank-level security',
      'Traditional banking comfort'
    ],
    cons: [
      'Requires bank account',
      'Traditional banking fees',
      'Limited crypto selection',
      'More conservative approach'
    ],
    bestFor: ['Traditional banking users', 'Security-conscious', 'Bank integration', 'Conservative investors']
  },
  {
    id: 'unionbank',
    name: 'UnionBank',
    type: 'Bank',
    description: 'Major Philippine bank offering cryptocurrency services through their digital banking platform.',
    icon: Building2,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900',
    licensed: true,
    features: ['Digital Banking', 'Crypto Trading', 'Institutional Services', 'Custody Solutions'],
    paymentMethods: ['Bank Account', 'Online Banking', 'ATM Network', 'Branch Banking'],
    fees: {
      trading: '0.75% - 2.0%',
      withdrawal: 'Standard banking fees',
      deposit: 'Free for account holders'
    },
    kycRequirements: ['UnionBank Account', 'Enhanced KYC', 'Income Verification', 'Risk Assessment'],
    steps: {
      buying: [
        'Have active UnionBank account',
        'Enroll in digital banking services',
        'Access crypto services in UB app',
        'Complete enhanced KYC for crypto',
        'Fund from UnionBank account',
        'Select cryptocurrency to purchase',
        'Enter PHP amount to invest',
        'Confirm with bank authentication',
        'Crypto held in bank custody'
      ],
      selling: [
        'Open UnionBank digital app',
        'Navigate to crypto portfolio',
        'Select cryptocurrency to sell',
        'Enter amount to convert',
        'Review bank exchange rate',
        'Confirm sale with security verification',
        'PHP deposited to UnionBank account',
        'Available for immediate use'
      ]
    },
    pros: [
      'Established bank reputation',
      'Strong security measures',
      'Institutional-grade custody',
      'Full banking integration'
    ],
    cons: [
      'Requires UnionBank account',
      'Higher fees than exchanges',
      'Limited crypto selection',
      'Traditional banking processes'
    ],
    bestFor: ['UnionBank customers', 'Security priority', 'Traditional banking', 'Large amounts']
  }
];

const faqData: FAQItem[] = [
  {
    question: "Which platform should I choose as a beginner?",
    answer: "For complete beginners, Coins.ph or GCash (GCrypto) are the best options. Coins.ph has the largest user base and most payment methods, while GCash is perfect if you already use the e-wallet. Both are user-friendly and have good customer support.",
    category: 'getting-started'
  },
  {
    question: "What documents do I need to start buying crypto?",
    answer: "You'll need a valid government ID (driver's license, passport, or national ID), a selfie for verification, and your phone number. Some platforms may also require proof of address or income for higher transaction limits.",
    category: 'getting-started'
  },
  {
    question: "How much money do I need to start?",
    answer: "You can start with as little as ₱100 on most platforms! There's no minimum investment requirement. It's recommended to start small while you're learning, perhaps ₱1,000-₱5,000 until you're comfortable with the process.",
    category: 'getting-started'
  },
  {
    question: "Which platform has the lowest fees?",
    answer: "PDAX generally has the lowest trading fees (0.10%-0.50%), making it best for frequent traders. However, for beginners making occasional purchases, the convenience of Coins.ph or GCash might be worth the slightly higher fees.",
    category: 'fees'
  },
  {
    question: "Is it safe to buy crypto in the Philippines?",
    answer: "Yes, when using BSP-licensed platforms. All the platforms listed here (except Bexpress) are properly licensed and regulated. Always verify a platform's BSP license before using it, and never share your login credentials with anyone.",
    category: 'security'
  },
  {
    question: "How long does it take to buy crypto?",
    answer: "On most platforms, buying crypto is instant once your account is funded. The longest part is usually the initial KYC verification (1-3 days) and funding your account (instant for e-wallets, few hours for bank transfers).",
    category: 'platforms'
  },
  {
    question: "Can I use multiple platforms?",
    answer: "Absolutely! Many users use different platforms for different purposes. For example, PDAX for low-fee trading, Coins.ph for convenience, and bank VASPs for large amounts. Just remember to complete KYC on each platform separately.",
    category: 'platforms'
  },
  {
    question: "What happens if I lose my phone or forget my password?",
    answer: "All licensed platforms have account recovery processes. Contact customer support immediately with your ID and account details. This is why it's important to use your real information during registration and keep your recovery phrases safe.",
    category: 'security'
  }
];

const safetyTips = [
  {
    icon: Shield,
    title: "Use Only Licensed Platforms",
    description: "Always verify that the platform is licensed by BSP as a Virtual Asset Service Provider (VASP).",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Lock,
    title: "Enable Two-Factor Authentication",
    description: "Add an extra layer of security to your account with 2FA using Google Authenticator or SMS.",
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: Eye,
    title: "Start Small and Learn",
    description: "Begin with small amounts while you learn the process. You can always increase your investments later.",
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: AlertTriangle,
    title: "Beware of Scams",
    description: "Never share your login details, private keys, or send crypto to unknown addresses. If it sounds too good to be true, it probably is.",
    color: "text-red-600 dark:text-red-400"
  },
  {
    icon: FileText,
    title: "Keep Records",
    description: "Save screenshots and records of all transactions for tax purposes and personal tracking.",
    color: "text-orange-600 dark:text-orange-400"
  },
  {
    icon: Users,
    title: "Join Communities",
    description: "Connect with other Filipino crypto users for tips, support, and staying updated on local developments.",
    color: "text-teal-600 dark:text-teal-400"
  }
];

export function BuyingSellingSryptoContent() {
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<'buying' | 'selling'>('buying');

  const togglePlatform = (platformId: string) => {
    setExpandedPlatform(expandedPlatform === platformId ? null : platformId);
  };

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const licensedPlatforms = platforms.filter(p => p.licensed);
  const faqCategories = [
    { id: 'getting-started', name: 'Getting Started', icon: Target, color: 'text-blue-600' },
    { id: 'platforms', name: 'Platforms', icon: Building2, color: 'text-green-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'text-purple-600' },
    { id: 'fees', name: 'Fees', icon: DollarSign, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          How to Buy & Sell Crypto
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Complete step-by-step guide to buying and selling cryptocurrency in the Philippines. 
          Learn how to use licensed exchanges and platforms safely and securely.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">{licensedPlatforms.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Licensed Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">₱100</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Minimum Start</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">5</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Min Setup</div>
          </div>
        </div>
      </div>

      {/* Quick Start Guide */}
      <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <span>Quick Start Guide</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-green-800 dark:text-green-200 leading-relaxed">
            <p className="mb-4">
              <strong>New to crypto?</strong> Follow these simple steps to make your first purchase safely and securely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center space-x-2">
                <ShoppingCart className="h-6 w-6" />
                <span>For Complete Beginners</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Choose Coins.ph or GCash</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Start with user-friendly platforms that most Filipinos already use
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Start with ₱1,000</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Begin with a small amount you can afford to lose while learning
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Buy Bitcoin First</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Start with Bitcoin as it's the most stable and widely accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center space-x-2">
                <Users className="h-6 w-6" />
                <span>For Experienced Users</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Use PDAX for Lower Fees</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Professional traders benefit from PDAX's lower fees and advanced features
                  </p>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Consider Bank VASPs</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    GoTyme Bank and UnionBank offer bank-level security for larger amounts
                  </p>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Diversify Platforms</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Use different platforms for different purposes (trading, holding, remittances)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Selection Guide */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <span>Licensed Platforms in the Philippines</span>
            <Badge className="bg-green-500 text-white">
              BSP Regulated
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {licensedPlatforms.map((platform) => (
              <div key={platform.id} className="border border-[var(--color-muted-subtle)] rounded-xl overflow-hidden">
                <button
                  onClick={() => togglePlatform(platform.id)}
                  className="w-full p-6 text-left hover:bg-[var(--color-muted-subtle)] transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className={cn("p-3 rounded-xl", platform.bgColor)}>
                      <platform.icon className={cn("h-6 w-6", platform.color)} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                          {platform.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {platform.type}
                        </Badge>
                        {platform.licensed && (
                          <Badge className="bg-green-500 text-white text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            BSP Licensed
                          </Badge>
                        )}
                      </div>
                      <p className="text-[var(--color-text-secondary)] mt-1">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  {expandedPlatform === platform.id ? (
                    <ChevronUp className="h-5 w-5 text-[var(--color-text-secondary)]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[var(--color-text-secondary)]" />
                  )}
                </button>
                
                {expandedPlatform === platform.id && (
                  <div className="border-t border-[var(--color-muted-subtle)] bg-[var(--color-muted-subtle)]/50">
                    <div className="p-6 space-y-6">
                      {/* Platform Overview */}
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-3">Features</h4>
                          <ul className="space-y-1">
                            {platform.features.map((feature, index) => (
                              <li key={index} className="text-sm text-[var(--color-text-secondary)] flex items-center space-x-2">
                                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-3">Payment Methods</h4>
                          <div className="flex flex-wrap gap-1">
                            {platform.paymentMethods.map((method, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {method}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-[var(--color-text-primary)] mb-3">Fees</h4>
                          <div className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                            {platform.fees.trading && (
                              <div>Trading: <span className="font-medium">{platform.fees.trading}</span></div>
                            )}
                            {platform.fees.withdrawal && (
                              <div>Withdrawal: <span className="font-medium">{platform.fees.withdrawal}</span></div>
                            )}
                            {platform.fees.deposit && (
                              <div>Deposit: <span className="font-medium">{platform.fees.deposit}</span></div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Step-by-Step Guide Tabs */}
                      <div className="space-y-4">
                        <div className="flex space-x-2">
                          <Button
                            variant={selectedTab === 'buying' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedTab('buying')}
                            className="rounded-xl"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            How to Buy
                          </Button>
                          <Button
                            variant={selectedTab === 'selling' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setSelectedTab('selling')}
                            className="rounded-xl"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            How to Sell
                          </Button>
                        </div>

                        <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6">
                          <h4 className="font-bold text-[var(--color-text-primary)] mb-4 flex items-center space-x-2">
                            {selectedTab === 'buying' ? (
                              <>
                                <Download className="h-5 w-5 text-green-600" />
                                <span>Step-by-Step Buying Guide</span>
                              </>
                            ) : (
                              <>
                                <Upload className="h-5 w-5 text-blue-600" />
                                <span>Step-by-Step Selling Guide</span>
                              </>
                            )}
                          </h4>
                          
                          <div className="space-y-3">
                            {platform.steps[selectedTab].map((step, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-[var(--color-primary-brand)] text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                                  {index + 1}
                                </div>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                  {step}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Pros, Cons, and Best For */}
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>Pros</span>
                          </h4>
                          <ul className="space-y-1">
                            {platform.pros.map((pro, index) => (
                              <li key={index} className="text-sm flex items-start space-x-2">
                                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--color-text-secondary)]">{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center space-x-2">
                            <AlertTriangle className="h-4 w-4" />
                            <span>Cons</span>
                          </h4>
                          <ul className="space-y-1">
                            {platform.cons.map((con, index) => (
                              <li key={index} className="text-sm flex items-start space-x-2">
                                <AlertTriangle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--color-text-secondary)]">{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-[var(--color-primary-brand)] mb-3 flex items-center space-x-2">
                            <Star className="h-4 w-4" />
                            <span>Best For</span>
                          </h4>
                          <ul className="space-y-1">
                            {platform.bestFor.map((use, index) => (
                              <li key={index} className="text-sm flex items-start space-x-2">
                                <Star className="h-3 w-3 text-[var(--color-primary-brand)] mt-0.5 flex-shrink-0" />
                                <span className="text-[var(--color-text-secondary)]">{use}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Platform Comparison Table */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span>Platform Comparison</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-muted-subtle)]">
                  <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Platform</th>
                  <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Type</th>
                  <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Trading Fees</th>
                  <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Best For</th>
                  <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {licensedPlatforms.map((platform) => (
                  <tr key={platform.id} className="border-b border-[var(--color-muted-subtle)] hover:bg-[var(--color-muted-subtle)]/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={cn("p-2 rounded-lg", platform.bgColor)}>
                          <platform.icon className={cn("h-4 w-4", platform.color)} />
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--color-text-primary)]">{platform.name}</div>
                          <Badge className="bg-green-500 text-white text-xs mt-1">Licensed</Badge>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className="text-xs">
                        {platform.type}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-[var(--color-text-secondary)]">
                      {platform.fees.trading || 'Varies'}
                    </td>
                    <td className="p-4 text-sm text-[var(--color-text-secondary)]">
                      {platform.bestFor[0]}
                    </td>
                    <td className="p-4">
                      <Badge 
                        variant="secondary"
                        className={cn(
                          "text-xs",
                          platform.name === 'PDAX' || platform.type === 'Bank' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                          'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        )}
                      >
                        {platform.name === 'PDAX' || platform.type === 'Bank' ? 'Intermediate' : 'Beginner'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Safety and Security Tips */}
      <Card className="rounded-2xl bg-gradient-to-r from-red-50 to-orange-100 dark:from-red-950/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-red-900 dark:text-red-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <span>Safety & Security Tips</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((tip, index) => (
              <div key={index} className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="w-12 h-12 bg-white/80 dark:bg-black/20 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <tip.icon className={cn("h-6 w-6", tip.color)} />
                </div>
                <h4 className="font-bold text-[var(--color-text-primary)] mb-2">
                  {tip.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Notice about Bexpress */}
      <Card className="rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-100 dark:from-yellow-950/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                Important Notice: Unlicensed Platforms
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300 mb-3">
                <strong>Bexpress</strong> is not currently on BSP's active VASP list and should be considered unlicensed/non-operational. 
                For your safety and legal protection, only use BSP-licensed platforms listed above.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-yellow-700 dark:text-yellow-300">
                  Always verify BSP licensing before using any crypto platform
                </span>
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
            <Award className="h-8 w-8 text-white" />
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
                  <span className="text-[var(--color-text-secondary)]">Only use BSP-licensed platforms for safety and legal protection</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Start small with ₱1,000 while learning the process</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Complete KYC verification for higher transaction limits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Keep records of all transactions for tax purposes</span>
                </li>
              </ul>
            </div>
            
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">Safety First:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Never share your login credentials or private keys</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Enable two-factor authentication on all accounts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Be cautious of phishing websites and fake apps</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Only invest money you can afford to lose</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]">
              Ready to Start Your Crypto Journey?
            </h4>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Now that you know how to buy and sell cryptocurrency safely in the Philippines, 
              start with a small amount on a licensed platform and gradually build your knowledge and portfolio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline"
                className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                asChild
              >
                <a href="/learn/beginner">
                  Learn Crypto Basics
                </a>
              </Button>
              <Button 
                className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                asChild
              >
                <a href="/news">
                  Stay Updated with News
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
              <ShoppingCart className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Buying Guide • {licensedPlatforms.length} licensed platforms
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}