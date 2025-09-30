"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Globe,
  Star,
  Shield,
  Users,
  TrendingUp,
  Building2,
  Smartphone,
  CreditCard,
  Lock,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Zap,
  Target,
  Award,
  Crown,
  Gem,
  DollarSign,
  BarChart3,
  Clock,
  Mail,
  Phone,
  MessageCircle,
  FileText,
  Eye,
  ArrowRight,
  Coins,
  Wallet,
  CreditCard as CardIcon,
  Banknote,
  Landmark
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlobalExchange {
  id: string;
  name: string;
  description: string;
  logo: string;
  rating: number;
  founded: string;
  headquarters: string;
  users: string;
  tradingVolume: string;
  supportedCoins: number;
  fees: {
    trading: string;
    withdrawal: string;
    deposit: string;
  };
  fundingMethods: string[];
  securityFeatures: string[];
  pros: string[];
  cons: string[];
  specialFeatures: string[];
  kycRequirements: string;
  mobileApp: boolean;
  apiAccess: boolean;
  institutionalServices: boolean;
  staking: boolean;
  futures: boolean;
  margin: boolean;
  contactInfo: {
    website: string;
    support: string;
    social: {
      twitter?: string;
      telegram?: string;
    };
  };
  stepByStepGuide: {
    title: string;
    steps: {
      step: number;
      title: string;
      description: string;
      tips?: string[];
    }[];
  };
  type: 'tier1' | 'tier2' | 'specialized';
  availableInPH: boolean;
  vpnRequired: boolean;
}

const globalExchanges: GlobalExchange[] = [
  {
    id: 'binance',
    name: 'Binance',
    description: 'World\'s largest cryptocurrency exchange by trading volume, offering comprehensive trading services and financial products.',
    logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.8,
    founded: '2017',
    headquarters: 'Global (No fixed HQ)',
    users: '170M+',
    tradingVolume: '$76B+ daily',
    supportedCoins: 600,
    fees: {
      trading: '0.1% spot, 0.02% futures',
      withdrawal: 'Varies by coin',
      deposit: 'Free (crypto), varies (fiat)'
    },
    fundingMethods: ['Bank Transfer', 'Credit/Debit Card', 'P2P Trading', 'Third-party Payment'],
    securityFeatures: ['2FA', 'Cold Storage', 'SAFU Fund', 'Whitelist Addresses', 'Anti-phishing'],
    pros: [
      'Largest trading volume and liquidity',
      'Extensive cryptocurrency selection',
      'Advanced trading features and tools',
      'Competitive fees and fee discounts',
      'Strong security track record',
      'Multiple financial products (staking, lending, futures)'
    ],
    cons: [
      'Complex interface for beginners',
      'Regulatory scrutiny in some countries',
      'Customer support can be slow',
      'Overwhelming number of features'
    ],
    specialFeatures: ['Binance Smart Chain', 'Launchpad', 'NFT Marketplace', 'Binance Pay', 'Savings Products'],
    kycRequirements: 'Basic: Email + Phone, Intermediate: ID verification, Advanced: Proof of address',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: true,
    staking: true,
    futures: true,
    margin: true,
    contactInfo: {
      website: 'https://binance.com',
      support: '24/7 Live Chat',
      social: {
        twitter: '@binance',
        telegram: '@BinanceEnglish'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with Binance',
      steps: [
        {
          step: 1,
          title: 'Create Your Account',
          description: 'Visit Binance.com and click "Register". Enter your email and create a strong password.',
          tips: [
            'Use a unique email address for crypto activities',
            'Create a strong password with uppercase, lowercase, numbers, and symbols',
            'Consider using a password manager'
          ]
        },
        {
          step: 2,
          title: 'Verify Your Email',
          description: 'Check your email for verification link and click to confirm your account.',
          tips: [
            'Check spam folder if email doesn\'t arrive',
            'Verification link expires in 30 minutes'
          ]
        },
        {
          step: 3,
          title: 'Enable Two-Factor Authentication',
          description: 'Download Google Authenticator app and scan the QR code to enable 2FA security.',
          tips: [
            'Save backup codes in a secure location',
            'Use authenticator app instead of SMS for better security',
            'Test 2FA before proceeding'
          ]
        },
        {
          step: 4,
          title: 'Complete Identity Verification',
          description: 'Upload government ID and complete facial verification to increase withdrawal limits.',
          tips: [
            'Ensure good lighting for photo verification',
            'Use original documents, not photocopies',
            'Verification usually takes 15 minutes to 24 hours'
          ]
        },
        {
          step: 5,
          title: 'Add Funding Method',
          description: 'Link your bank account, credit card, or use P2P trading to fund your account.',
          tips: [
            'P2P trading often has better rates',
            'Bank transfers have lower fees than cards',
            'Start with small amounts to test the process'
          ]
        },
        {
          step: 6,
          title: 'Make Your First Purchase',
          description: 'Navigate to Buy Crypto section, select your cryptocurrency and payment method.',
          tips: [
            'Start with popular coins like Bitcoin or Ethereum',
            'Check current market prices before buying',
            'Consider using limit orders for better prices'
          ]
        }
      ]
    },
    type: 'tier1',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'coinbase',
    name: 'Coinbase',
    description: 'Leading US-based cryptocurrency exchange known for user-friendly interface and regulatory compliance.',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.6,
    founded: '2012',
    headquarters: 'San Francisco, USA',
    users: '110M+',
    tradingVolume: '$3.2B+ daily',
    supportedCoins: 250,
    fees: {
      trading: '0.5% - 1.5%',
      withdrawal: 'Network fees',
      deposit: 'Free (bank), 3.99% (card)'
    },
    fundingMethods: ['Bank Transfer', 'Credit/Debit Card', 'PayPal', 'Wire Transfer'],
    securityFeatures: ['2FA', 'Biometric Login', 'Insurance Coverage', 'Cold Storage', 'Device Management'],
    pros: [
      'Beginner-friendly interface',
      'Strong regulatory compliance',
      'FDIC insurance for USD deposits',
      'Educational resources',
      'Publicly traded company (NASDAQ: COIN)',
      'High liquidity for major cryptocurrencies'
    ],
    cons: [
      'Higher fees compared to competitors',
      'Limited advanced trading features',
      'Restricted in some countries',
      'Customer support response times'
    ],
    specialFeatures: ['Coinbase Pro', 'Coinbase Wallet', 'Coinbase Card', 'Staking Rewards', 'Learn & Earn'],
    kycRequirements: 'Full identity verification required including government ID and proof of address',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: true,
    staking: true,
    futures: false,
    margin: false,
    contactInfo: {
      website: 'https://coinbase.com',
      support: 'Email & Phone Support',
      social: {
        twitter: '@coinbase'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with Coinbase',
      steps: [
        {
          step: 1,
          title: 'Sign Up for Account',
          description: 'Visit Coinbase.com and click "Get Started". Provide your name, email, and password.',
          tips: [
            'Use your real name as it appears on your ID',
            'Choose a secure password',
            'Verify your email address immediately'
          ]
        },
        {
          step: 2,
          title: 'Verify Your Identity',
          description: 'Upload a government-issued ID and complete the verification process.',
          tips: [
            'Use a clear, high-quality photo of your ID',
            'Ensure all text is readable',
            'Verification typically takes a few minutes'
          ]
        },
        {
          step: 3,
          title: 'Add Payment Method',
          description: 'Link your bank account or add a credit/debit card for purchasing cryptocurrency.',
          tips: [
            'Bank transfers have lower fees than cards',
            'Verify small deposit amounts for bank linking',
            'Cards allow instant purchases but higher fees'
          ]
        },
        {
          step: 4,
          title: 'Enable Security Features',
          description: 'Set up 2FA using authenticator app and enable additional security measures.',
          tips: [
            'Use Google Authenticator or Authy',
            'Save backup codes securely',
            'Enable biometric login if available'
          ]
        },
        {
          step: 5,
          title: 'Make Your First Purchase',
          description: 'Click "Buy/Sell", select cryptocurrency, enter amount, and confirm purchase.',
          tips: [
            'Start with well-known cryptocurrencies',
            'Review fees before confirming',
            'Consider dollar-cost averaging for regular investments'
          ]
        },
        {
          step: 6,
          title: 'Secure Your Assets',
          description: 'Consider transferring to hardware wallet for long-term storage.',
          tips: [
            'Learn about wallet addresses before transferring',
            'Start with small test transactions',
            'Keep some funds on exchange for trading'
          ]
        }
      ]
    },
    type: 'tier1',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'kraken',
    name: 'Kraken',
    description: 'Veteran US-based exchange known for security, advanced trading features, and regulatory compliance.',
    logo: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.5,
    founded: '2011',
    headquarters: 'San Francisco, USA',
    users: '10M+',
    tradingVolume: '$1.8B+ daily',
    supportedCoins: 200,
    fees: {
      trading: '0.16% - 0.26%',
      withdrawal: 'Network fees',
      deposit: 'Free (crypto), varies (fiat)'
    },
    fundingMethods: ['Bank Transfer', 'Wire Transfer', 'Credit/Debit Card'],
    securityFeatures: ['2FA', 'PGP Encryption', 'Cold Storage', 'Global Settings Lock', 'Master Key'],
    pros: [
      'Excellent security reputation',
      'Advanced trading features',
      'Low trading fees',
      'Strong regulatory compliance',
      'Professional-grade platform',
      'Margin and futures trading'
    ],
    cons: [
      'Complex interface for beginners',
      'Limited payment methods',
      'Slower customer support',
      'Higher withdrawal fees'
    ],
    specialFeatures: ['Kraken Pro', 'Margin Trading', 'Futures', 'Staking', 'OTC Trading'],
    kycRequirements: 'Starter: Basic info, Intermediate: ID verification, Pro: Enhanced verification',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: true,
    staking: true,
    futures: true,
    margin: true,
    contactInfo: {
      website: 'https://kraken.com',
      support: '24/7 Live Chat & Email',
      social: {
        twitter: '@krakenfx'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with Kraken',
      steps: [
        {
          step: 1,
          title: 'Create Account',
          description: 'Visit Kraken.com and click "Create Account". Enter email, username, and password.',
          tips: [
            'Choose a unique username',
            'Use a strong, unique password',
            'Confirm email verification immediately'
          ]
        },
        {
          step: 2,
          title: 'Complete Verification',
          description: 'Choose verification level and upload required documents for your desired limits.',
          tips: [
            'Starter level allows crypto deposits/withdrawals',
            'Intermediate level required for fiat funding',
            'Pro level needed for higher limits'
          ]
        },
        {
          step: 3,
          title: 'Set Up Security',
          description: 'Enable 2FA, set up PGP encryption, and configure security settings.',
          tips: [
            'Use hardware security key if available',
            'Set up Global Settings Lock',
            'Configure withdrawal address whitelist'
          ]
        },
        {
          step: 4,
          title: 'Fund Your Account',
          description: 'Add funds via bank transfer, wire, or cryptocurrency deposit.',
          tips: [
            'Wire transfers for large amounts',
            'ACH transfers for lower fees',
            'Crypto deposits are usually fastest'
          ]
        },
        {
          step: 5,
          title: 'Start Trading',
          description: 'Navigate to Trade section, select trading pair, and place your order.',
          tips: [
            'Learn about order types (market, limit, stop)',
            'Start with simple spot trading',
            'Use Kraken Pro for advanced features'
          ]
        },
        {
          step: 6,
          title: 'Explore Advanced Features',
          description: 'Try margin trading, futures, or staking once comfortable with basics.',
          tips: [
            'Understand risks before using leverage',
            'Start with small positions',
            'Use stop-loss orders to manage risk'
          ]
        }
      ]
    },
    type: 'tier1',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    description: 'Global cryptocurrency exchange offering extensive altcoin selection and innovative trading features.',
    logo: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.4,
    founded: '2017',
    headquarters: 'Seychelles',
    users: '30M+',
    tradingVolume: '$2.1B+ daily',
    supportedCoins: 700,
    fees: {
      trading: '0.1% spot, 0.02% futures',
      withdrawal: 'Network fees',
      deposit: 'Free'
    },
    fundingMethods: ['Credit/Debit Card', 'Bank Transfer', 'P2P Trading', 'Third-party Payment'],
    securityFeatures: ['2FA', 'Cold Storage', 'Micro-withdrawal', 'Trading Password', 'Anti-phishing'],
    pros: [
      'Huge selection of altcoins',
      'Competitive trading fees',
      'KCS token benefits and discounts',
      'Advanced trading features',
      'Regular new coin listings',
      'Good mobile app experience'
    ],
    cons: [
      'Limited regulatory oversight',
      'Complex fee structure',
      'Customer support quality varies',
      'Some features restricted by region'
    ],
    specialFeatures: ['KuCoin Shares (KCS)', 'Futures Trading', 'Margin Trading', 'Pool-X Staking', 'KuCoin Spotlight'],
    kycRequirements: 'Basic: Email verification, Advanced: ID + facial verification for higher limits',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: false,
    staking: true,
    futures: true,
    margin: true,
    contactInfo: {
      website: 'https://kucoin.com',
      support: '24/7 Live Chat',
      social: {
        twitter: '@kucoincom',
        telegram: '@Kucoin_Exchange'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with KuCoin',
      steps: [
        {
          step: 1,
          title: 'Register Account',
          description: 'Go to KuCoin.com, click "Sign Up", and enter your email and password.',
          tips: [
            'Use a secure email address',
            'Create a strong password',
            'Complete email verification promptly'
          ]
        },
        {
          step: 2,
          title: 'Verify Your Identity',
          description: 'Complete KYC verification to unlock higher withdrawal limits and features.',
          tips: [
            'Basic verification allows 1 BTC daily withdrawal',
            'Advanced verification increases limits significantly',
            'Have government ID ready for verification'
          ]
        },
        {
          step: 3,
          title: 'Secure Your Account',
          description: 'Enable 2FA, set trading password, and configure security settings.',
          tips: [
            'Use Google Authenticator for 2FA',
            'Set up anti-phishing code',
            'Enable withdrawal whitelist'
          ]
        },
        {
          step: 4,
          title: 'Deposit Funds',
          description: 'Choose deposit method - crypto transfer, credit card, or P2P trading.',
          tips: [
            'Crypto deposits are usually fastest',
            'Check minimum deposit amounts',
            'P2P trading offers competitive rates'
          ]
        },
        {
          step: 5,
          title: 'Start Trading',
          description: 'Navigate to Markets, select trading pair, and place your first order.',
          tips: [
            'Start with major cryptocurrencies',
            'Learn about different order types',
            'Use stop-loss orders to manage risk'
          ]
        },
        {
          step: 6,
          title: 'Explore KuCoin Features',
          description: 'Try staking, futures trading, or earn KCS tokens for fee discounts.',
          tips: [
            'Hold KCS tokens for trading fee discounts',
            'Explore Pool-X for staking opportunities',
            'Use KuCoin Spotlight for new token launches'
          ]
        }
      ]
    },
    type: 'tier1',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'bybit',
    name: 'Bybit',
    description: 'Derivatives-focused exchange specializing in cryptocurrency futures and perpetual contracts.',
    logo: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.3,
    founded: '2018',
    headquarters: 'Singapore',
    users: '25M+',
    tradingVolume: '$8.5B+ daily',
    supportedCoins: 300,
    fees: {
      trading: '0.1% spot, 0.075% derivatives',
      withdrawal: 'Network fees',
      deposit: 'Free'
    },
    fundingMethods: ['Credit/Debit Card', 'Bank Transfer', 'P2P Trading', 'Crypto Deposit'],
    securityFeatures: ['2FA', 'Cold Storage', 'Multi-signature', 'Hardware Security Module', 'Risk Management'],
    pros: [
      'Excellent derivatives trading platform',
      'High leverage options (up to 100x)',
      'Fast order execution',
      'Competitive fees for derivatives',
      'Strong mobile app',
      'Regular trading competitions'
    ],
    cons: [
      'Primarily focused on derivatives',
      'Complex for beginners',
      'Limited spot trading pairs',
      'High risk due to leverage options'
    ],
    specialFeatures: ['Perpetual Contracts', 'Copy Trading', 'Grid Trading', 'DeFi Mining', 'Launchpad'],
    kycRequirements: 'Level 1: Basic info, Level 2: ID verification for higher limits',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: true,
    staking: false,
    futures: true,
    margin: true,
    contactInfo: {
      website: 'https://bybit.com',
      support: '24/7 Live Chat',
      social: {
        twitter: '@Bybit_Official',
        telegram: '@BybitEnglish'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with Bybit',
      steps: [
        {
          step: 1,
          title: 'Create Account',
          description: 'Visit Bybit.com and click "Sign Up". Enter email or phone number and password.',
          tips: [
            'Use email for international access',
            'Create a strong password',
            'Complete verification immediately'
          ]
        },
        {
          step: 2,
          title: 'Complete Verification',
          description: 'Upload government ID and complete facial recognition for full access.',
          tips: [
            'Level 1 allows basic trading',
            'Level 2 required for higher limits',
            'Verification usually takes 5-10 minutes'
          ]
        },
        {
          step: 3,
          title: 'Enable Security',
          description: 'Set up 2FA, trading password, and other security measures.',
          tips: [
            'Use authenticator app for 2FA',
            'Set up withdrawal whitelist',
            'Enable anti-phishing code'
          ]
        },
        {
          step: 4,
          title: 'Deposit Cryptocurrency',
          description: 'Transfer crypto from another exchange or wallet to your Bybit account.',
          tips: [
            'Start with USDT for derivatives trading',
            'Double-check deposit addresses',
            'Wait for confirmations before trading'
          ]
        },
        {
          step: 5,
          title: 'Learn Derivatives Trading',
          description: 'Start with demo trading to understand perpetual contracts and leverage.',
          tips: [
            'Use testnet for practice',
            'Start with low leverage (2x-5x)',
            'Understand liquidation risks'
          ]
        },
        {
          step: 6,
          title: 'Start Live Trading',
          description: 'Begin with small positions and gradually increase as you gain experience.',
          tips: [
            'Always use stop-loss orders',
            'Never risk more than you can afford to lose',
            'Keep learning about risk management'
          ]
        }
      ]
    },
    type: 'specialized',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'okx',
    name: 'OKX',
    description: 'Global cryptocurrency exchange offering spot, derivatives, and DeFi services with advanced trading tools.',
    logo: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.4,
    founded: '2017',
    headquarters: 'Malta',
    users: '50M+',
    tradingVolume: '$4.2B+ daily',
    supportedCoins: 350,
    fees: {
      trading: '0.08% - 0.1%',
      withdrawal: 'Network fees',
      deposit: 'Free'
    },
    fundingMethods: ['Credit/Debit Card', 'Bank Transfer', 'P2P Trading', 'Third-party Payment'],
    securityFeatures: ['2FA', 'Cold Storage', 'Multi-signature', 'Risk Control', 'Insurance Fund'],
    pros: [
      'Comprehensive trading platform',
      'Low trading fees',
      'Extensive DeFi integration',
      'Advanced trading tools',
      'Strong derivatives offering',
      'OKB token benefits'
    ],
    cons: [
      'Complex interface for beginners',
      'Limited in some jurisdictions',
      'Customer support inconsistency',
      'Overwhelming feature set'
    ],
    specialFeatures: ['OKX Wallet', 'DeFi Hub', 'NFT Marketplace', 'Copy Trading', 'Jumpstart'],
    kycRequirements: 'Level 1: Basic verification, Level 2: Enhanced verification for full features',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: true,
    staking: true,
    futures: true,
    margin: true,
    contactInfo: {
      website: 'https://okx.com',
      support: '24/7 Live Chat',
      social: {
        twitter: '@okx'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with OKX',
      steps: [
        {
          step: 1,
          title: 'Sign Up',
          description: 'Visit OKX.com and click "Sign up". Enter email/phone and create password.',
          tips: [
            'Use email for global access',
            'Create secure password',
            'Verify contact information'
          ]
        },
        {
          step: 2,
          title: 'Identity Verification',
          description: 'Complete KYC process by uploading government ID and personal information.',
          tips: [
            'Level 1 for basic trading',
            'Level 2 for fiat deposits',
            'Clear photos speed up verification'
          ]
        },
        {
          step: 3,
          title: 'Security Setup',
          description: 'Enable 2FA, set trading password, and configure security preferences.',
          tips: [
            'Use Google Authenticator',
            'Set up anti-phishing code',
            'Enable withdrawal confirmation'
          ]
        },
        {
          step: 4,
          title: 'Add Funds',
          description: 'Deposit cryptocurrency or buy with credit card/bank transfer.',
          tips: [
            'Check supported networks for deposits',
            'Credit cards for instant purchases',
            'P2P trading for better rates'
          ]
        },
        {
          step: 5,
          title: 'Explore Trading',
          description: 'Start with spot trading before moving to derivatives and advanced features.',
          tips: [
            'Learn trading interface first',
            'Practice with small amounts',
            'Understand order types'
          ]
        },
        {
          step: 6,
          title: 'Advanced Features',
          description: 'Explore DeFi, staking, copy trading, and other platform features.',
          tips: [
            'Try copy trading to learn from experts',
            'Explore DeFi opportunities',
            'Hold OKB for fee discounts'
          ]
        }
      ]
    },
    type: 'tier1',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'gate-io',
    name: 'Gate.io',
    description: 'Comprehensive cryptocurrency exchange known for extensive altcoin selection and innovative features.',
    logo: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.2,
    founded: '2013',
    headquarters: 'Cayman Islands',
    users: '13M+',
    tradingVolume: '$1.5B+ daily',
    supportedCoins: 1400,
    fees: {
      trading: '0.2% spot, 0.075% futures',
      withdrawal: 'Network fees',
      deposit: 'Free'
    },
    fundingMethods: ['Credit/Debit Card', 'Bank Transfer', 'P2P Trading'],
    securityFeatures: ['2FA', 'Cold Storage', 'Fund Password', 'IP Whitelist', 'SMS Verification'],
    pros: [
      'Massive selection of cryptocurrencies',
      'Early access to new tokens',
      'Competitive fees with GT token',
      'Comprehensive trading features',
      'Strong altcoin liquidity',
      'Regular airdrops and promotions'
    ],
    cons: [
      'Interface can be overwhelming',
      'Limited regulatory oversight',
      'Customer support response times',
      'Some features restricted by region'
    ],
    specialFeatures: ['Startup IEO Platform', 'Copy Trading', 'Grid Trading', 'Liquidity Mining', 'GT Token'],
    kycRequirements: 'Level 1: Basic verification, Level 2: Enhanced verification for full access',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: false,
    staking: true,
    futures: true,
    margin: true,
    contactInfo: {
      website: 'https://gate.io',
      support: 'Live Chat & Ticket System',
      social: {
        twitter: '@gate_io'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with Gate.io',
      steps: [
        {
          step: 1,
          title: 'Account Registration',
          description: 'Visit Gate.io and click "Register". Enter email and create secure password.',
          tips: [
            'Use unique email for crypto',
            'Strong password required',
            'Verify email immediately'
          ]
        },
        {
          step: 2,
          title: 'Identity Verification',
          description: 'Complete KYC process for higher withdrawal limits and full platform access.',
          tips: [
            'Level 0: 0.1 BTC daily withdrawal',
            'Level 1: 10 BTC daily withdrawal',
            'Level 2: 100 BTC daily withdrawal'
          ]
        },
        {
          step: 3,
          title: 'Security Configuration',
          description: 'Enable 2FA, set fund password, and configure security settings.',
          tips: [
            'Fund password for withdrawals',
            'IP whitelist for added security',
            'SMS backup for 2FA'
          ]
        },
        {
          step: 4,
          title: 'Deposit Funds',
          description: 'Transfer cryptocurrency or use credit card to add funds to your account.',
          tips: [
            'Check supported networks',
            'Minimum deposit amounts vary',
            'Credit card purchases have higher fees'
          ]
        },
        {
          step: 5,
          title: 'Explore Trading',
          description: 'Start with spot trading and explore the extensive cryptocurrency selection.',
          tips: [
            'Use search function to find coins',
            'Check trading volume before trading',
            'Start with well-known cryptocurrencies'
          ]
        },
        {
          step: 6,
          title: 'Advanced Features',
          description: 'Try copy trading, grid trading, or participate in startup token sales.',
          tips: [
            'Copy successful traders',
            'Grid trading for sideways markets',
            'Participate in IEO launches'
          ]
        }
      ]
    },
    type: 'tier2',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'huobi',
    name: 'Huobi Global',
    description: 'Established global exchange offering comprehensive cryptocurrency trading and financial services.',
    logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.1,
    founded: '2013',
    headquarters: 'Singapore',
    users: '20M+',
    tradingVolume: '$1.2B+ daily',
    supportedCoins: 400,
    fees: {
      trading: '0.2% spot, 0.075% futures',
      withdrawal: 'Network fees',
      deposit: 'Free'
    },
    fundingMethods: ['Credit/Debit Card', 'Bank Transfer', 'P2P Trading'],
    securityFeatures: ['2FA', 'Cold Storage', 'Multi-signature', 'Risk Control', 'Insurance Fund'],
    pros: [
      'Established reputation',
      'Good selection of cryptocurrencies',
      'HT token benefits',
      'Comprehensive trading features',
      'Strong security measures',
      'Regular promotions and airdrops'
    ],
    cons: [
      'Interface complexity',
      'Regulatory challenges in some regions',
      'Customer support quality varies',
      'Limited educational resources'
    ],
    specialFeatures: ['Huobi Token (HT)', 'Prime Pool', 'Huobi Earn', 'Copy Trading', 'Grid Trading'],
    kycRequirements: 'Level 1: Basic verification, Level 2: Enhanced verification required',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: true,
    staking: true,
    futures: true,
    margin: true,
    contactInfo: {
      website: 'https://huobi.com',
      support: 'Live Chat & Email',
      social: {
        twitter: '@HuobiGlobal'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with Huobi Global',
      steps: [
        {
          step: 1,
          title: 'Account Creation',
          description: 'Go to Huobi.com, click "Register", and enter your email and password.',
          tips: [
            'Use secure email address',
            'Strong password required',
            'Complete email verification'
          ]
        },
        {
          step: 2,
          title: 'KYC Verification',
          description: 'Complete identity verification to unlock full platform features.',
          tips: [
            'Level 1 for basic trading',
            'Level 2 for fiat services',
            'Have ID documents ready'
          ]
        },
        {
          step: 3,
          title: 'Security Setup',
          description: 'Enable 2FA and configure additional security measures.',
          tips: [
            'Google Authenticator recommended',
            'Set up SMS backup',
            'Configure withdrawal whitelist'
          ]
        },
        {
          step: 4,
          title: 'Fund Account',
          description: 'Deposit cryptocurrency or purchase with fiat payment methods.',
          tips: [
            'Check deposit networks',
            'Crypto deposits are fastest',
            'Fiat options vary by region'
          ]
        },
        {
          step: 5,
          title: 'Start Trading',
          description: 'Navigate to Exchange and begin spot trading with your preferred pairs.',
          tips: [
            'Start with major cryptocurrencies',
            'Learn order types',
            'Monitor market trends'
          ]
        },
        {
          step: 6,
          title: 'Explore Earn Products',
          description: 'Try staking, savings, or other yield-generating products.',
          tips: [
            'Huobi Earn for passive income',
            'Prime Pool for new tokens',
            'Hold HT for fee discounts'
          ]
        }
      ]
    },
    type: 'tier2',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'bitget',
    name: 'Bitget',
    description: 'Social trading platform specializing in copy trading and derivatives with innovative features.',
    logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.2,
    founded: '2018',
    headquarters: 'Singapore',
    users: '25M+',
    tradingVolume: '$6.8B+ daily',
    supportedCoins: 500,
    fees: {
      trading: '0.1% spot, 0.06% futures',
      withdrawal: 'Network fees',
      deposit: 'Free'
    },
    fundingMethods: ['Credit/Debit Card', 'Bank Transfer', 'P2P Trading', 'Apple Pay'],
    securityFeatures: ['2FA', 'Cold Storage', 'Multi-signature', 'Fund Protection', 'Risk Management'],
    pros: [
      'Excellent copy trading features',
      'User-friendly interface',
      'Competitive fees',
      'Strong mobile app',
      'Good customer support',
      'Regular promotions'
    ],
    cons: [
      'Smaller than top-tier exchanges',
      'Limited educational content',
      'Fewer trading pairs than competitors',
      'Regulatory uncertainty in some regions'
    ],
    specialFeatures: ['Copy Trading', 'Grid Trading', 'DeFi Staking', 'Launchpad', 'BGB Token'],
    kycRequirements: 'Basic: Email verification, Advanced: ID verification for higher limits',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: false,
    staking: true,
    futures: true,
    margin: true,
    contactInfo: {
      website: 'https://bitget.com',
      support: '24/7 Live Chat',
      social: {
        twitter: '@bitgetglobal'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with Bitget',
      steps: [
        {
          step: 1,
          title: 'Register Account',
          description: 'Visit Bitget.com and click "Sign Up". Enter email and create password.',
          tips: [
            'Use secure email',
            'Strong password required',
            'Verify email quickly'
          ]
        },
        {
          step: 2,
          title: 'Complete Verification',
          description: 'Upload ID documents and complete facial verification process.',
          tips: [
            'Clear photo of ID required',
            'Good lighting for facial verification',
            'Process usually takes 5-15 minutes'
          ]
        },
        {
          step: 3,
          title: 'Security Settings',
          description: 'Enable 2FA and configure additional security measures.',
          tips: [
            'Google Authenticator preferred',
            'Set up fund password',
            'Enable withdrawal whitelist'
          ]
        },
        {
          step: 4,
          title: 'Deposit Funds',
          description: 'Transfer crypto or use fiat payment methods to fund your account.',
          tips: [
            'Crypto deposits are fastest',
            'Check minimum amounts',
            'Fiat options vary by region'
          ]
        },
        {
          step: 5,
          title: 'Try Copy Trading',
          description: 'Explore copy trading feature to follow successful traders.',
          tips: [
            'Research trader performance',
            'Start with small amounts',
            'Diversify across multiple traders'
          ]
        },
        {
          step: 6,
          title: 'Advanced Trading',
          description: 'Explore futures, grid trading, and other advanced features.',
          tips: [
            'Understand leverage risks',
            'Use demo mode first',
            'Set proper risk management'
          ]
        }
      ]
    },
    type: 'tier2',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'mexc',
    name: 'MEXC',
    description: 'Global exchange known for early token listings and extensive cryptocurrency selection.',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.0,
    founded: '2018',
    headquarters: 'Singapore',
    users: '10M+',
    tradingVolume: '$1.8B+ daily',
    supportedCoins: 1500,
    fees: {
      trading: '0.2% spot, 0.02% futures',
      withdrawal: 'Network fees',
      deposit: 'Free'
    },
    fundingMethods: ['Credit/Debit Card', 'P2P Trading', 'Bank Transfer'],
    securityFeatures: ['2FA', 'Cold Storage', 'Anti-phishing', 'Withdrawal Whitelist', 'Fund Password'],
    pros: [
      'Huge selection of cryptocurrencies',
      'Early access to new tokens',
      'Competitive futures fees',
      'MX token benefits',
      'Regular new listings',
      'Good mobile app'
    ],
    cons: [
      'Lower liquidity for some pairs',
      'Limited regulatory oversight',
      'Customer support quality varies',
      'Interface complexity'
    ],
    specialFeatures: ['Kickstarter (IEO)', 'MX Token', 'Copy Trading', 'Grid Trading', 'Savings'],
    kycRequirements: 'Level 1: Basic info, Level 2: ID verification for enhanced limits',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: false,
    staking: true,
    futures: true,
    margin: true,
    contactInfo: {
      website: 'https://mexc.com',
      support: 'Live Chat & Email',
      social: {
        twitter: '@MEXC_Official'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with MEXC',
      steps: [
        {
          step: 1,
          title: 'Account Setup',
          description: 'Visit MEXC.com and click "Register". Provide email and password.',
          tips: [
            'Use dedicated crypto email',
            'Strong password essential',
            'Verify email promptly'
          ]
        },
        {
          step: 2,
          title: 'Identity Verification',
          description: 'Complete KYC to unlock higher withdrawal limits and features.',
          tips: [
            'Level 1 allows 20 BTC daily withdrawal',
            'Level 2 increases limits significantly',
            'Clear ID photos required'
          ]
        },
        {
          step: 3,
          title: 'Security Configuration',
          description: 'Set up 2FA, fund password, and other security measures.',
          tips: [
            'Fund password for withdrawals',
            'Google Authenticator for 2FA',
            'Set up anti-phishing code'
          ]
        },
        {
          step: 4,
          title: 'Deposit Cryptocurrency',
          description: 'Transfer crypto from another exchange or wallet to MEXC.',
          tips: [
            'Double-check deposit addresses',
            'Select correct network',
            'Wait for confirmations'
          ]
        },
        {
          step: 5,
          title: 'Explore Trading',
          description: 'Start trading with spot markets and explore the extensive coin selection.',
          tips: [
            'Research new tokens carefully',
            'Check trading volume',
            'Start with established cryptocurrencies'
          ]
        },
        {
          step: 6,
          title: 'Participate in Events',
          description: 'Join Kickstarter events, airdrops, and trading competitions.',
          tips: [
            'Hold MX tokens for benefits',
            'Participate in new token launches',
            'Join trading competitions for rewards'
          ]
        }
      ]
    },
    type: 'tier2',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'crypto-com',
    name: 'Crypto.com',
    description: 'Global cryptocurrency platform offering exchange, wallet, card, and DeFi services.',
    logo: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.3,
    founded: '2016',
    headquarters: 'Singapore',
    users: '80M+',
    tradingVolume: '$2.5B+ daily',
    supportedCoins: 250,
    fees: {
      trading: '0.4% spot, 0.075% derivatives',
      withdrawal: 'Network fees',
      deposit: 'Free (crypto), varies (fiat)'
    },
    fundingMethods: ['Credit/Debit Card', 'Bank Transfer', 'Crypto.com Pay', 'Apple Pay'],
    securityFeatures: ['2FA', 'Cold Storage', 'Multi-signature', 'Biometric Login', 'Insurance Coverage'],
    pros: [
      'User-friendly mobile app',
      'Crypto.com Visa Card rewards',
      'Strong brand recognition',
      'Comprehensive ecosystem',
      'Good customer support',
      'CRO token benefits'
    ],
    cons: [
      'Higher trading fees',
      'Limited advanced trading features',
      'Card staking requirements',
      'Withdrawal fees can be high'
    ],
    specialFeatures: ['Crypto.com Card', 'CRO Staking', 'DeFi Wallet', 'NFT Platform', 'Supercharger'],
    kycRequirements: 'Full KYC required including ID verification and proof of address',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: true,
    staking: true,
    futures: true,
    margin: false,
    contactInfo: {
      website: 'https://crypto.com',
      support: '24/7 Live Chat',
      social: {
        twitter: '@cryptocom'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with Crypto.com',
      steps: [
        {
          step: 1,
          title: 'Download App',
          description: 'Download Crypto.com app from App Store or Google Play and create account.',
          tips: [
            'Mobile-first platform',
            'Use referral code for bonus',
            'Verify email and phone'
          ]
        },
        {
          step: 2,
          title: 'Complete Verification',
          description: 'Upload government ID and complete identity verification process.',
          tips: [
            'Full verification required',
            'Clear photos of ID needed',
            'Process takes 1-3 business days'
          ]
        },
        {
          step: 3,
          title: 'Add Payment Method',
          description: 'Link bank account or credit card for purchasing cryptocurrency.',
          tips: [
            'Bank transfers have lower fees',
            'Cards allow instant purchases',
            'Some regions have limited options'
          ]
        },
        {
          step: 4,
          title: 'Buy Your First Crypto',
          description: 'Use the "Buy" feature to purchase cryptocurrency with your payment method.',
          tips: [
            'Start with Bitcoin or Ethereum',
            'Check current prices',
            'Consider recurring buys'
          ]
        },
        {
          step: 5,
          title: 'Explore Earn Products',
          description: 'Try staking, savings, or other earn products to generate passive income.',
          tips: [
            'Stake CRO for card benefits',
            'Explore different earn products',
            'Understand lock-up periods'
          ]
        },
        {
          step: 6,
          title: 'Apply for Crypto.com Card',
          description: 'Stake CRO tokens and apply for Visa card to earn rewards on spending.',
          tips: [
            'Different tiers require different CRO amounts',
            'Card offers cashback rewards',
            'Staking period is 180 days'
          ]
        }
      ]
    },
    type: 'tier1',
    availableInPH: true,
    vpnRequired: false
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Regulated US cryptocurrency exchange founded by the Winklevoss twins, focusing on security and compliance.',
    logo: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.4,
    founded: '2014',
    headquarters: 'New York, USA',
    users: '7M+',
    tradingVolume: '$400M+ daily',
    supportedCoins: 70,
    fees: {
      trading: '0.35% - 1.49%',
      withdrawal: 'Free (up to 10/month)',
      deposit: 'Free'
    },
    fundingMethods: ['Bank Transfer', 'Wire Transfer', 'Debit Card'],
    securityFeatures: ['2FA', 'Cold Storage', 'Insurance Coverage', 'Hardware Security Modules', 'SOC 2 Compliance'],
    pros: [
      'Excellent security reputation',
      'Regulatory compliance',
      'Insurance coverage for digital assets',
      'Free withdrawals',
      'Professional trading platform',
      'Educational resources'
    ],
    cons: [
      'Limited cryptocurrency selection',
      'Higher fees than competitors',
      'Not available worldwide',
      'Limited advanced features'
    ],
    specialFeatures: ['Gemini Dollar (GUSD)', 'Gemini Credit Card', 'ActiveTrader', 'Custody Services', 'Earn Program'],
    kycRequirements: 'Full identity verification required including government ID and address verification',
    mobileApp: true,
    apiAccess: true,
    institutionalServices: true,
    staking: true,
    futures: false,
    margin: false,
    contactInfo: {
      website: 'https://gemini.com',
      support: 'Email Support',
      social: {
        twitter: '@gemini'
      }
    },
    stepByStepGuide: {
      title: 'How to Get Started with Gemini',
      steps: [
        {
          step: 1,
          title: 'Create Account',
          description: 'Visit Gemini.com and click "Register". Enter personal information and email.',
          tips: [
            'Use real name and information',
            'Strong password required',
            'US-focused platform'
          ]
        },
        {
          step: 2,
          title: 'Verify Identity',
          description: 'Complete full identity verification including ID and address verification.',
          tips: [
            'Government-issued ID required',
            'Proof of address needed',
            'Verification can take 1-3 days'
          ]
        },
        {
          step: 3,
          title: 'Link Bank Account',
          description: 'Connect your bank account for ACH transfers or add debit card.',
          tips: [
            'ACH transfers have lower fees',
            'Debit cards for instant purchases',
            'Verify micro-deposits for bank linking'
          ]
        },
        {
          step: 4,
          title: 'Enable Security',
          description: 'Set up 2FA and configure additional security settings.',
          tips: [
            'Use authenticator app',
            'Enable device management',
            'Set up withdrawal notifications'
          ]
        },
        {
          step: 5,
          title: 'Make First Purchase',
          description: 'Buy cryptocurrency using the simple buy interface.',
          tips: [
            'Start with Bitcoin or Ethereum',
            'Review fees before purchase',
            'Consider recurring purchases'
          ]
        },
        {
          step: 6,
          title: 'Explore Advanced Features',
          description: 'Try ActiveTrader for lower fees or explore earn products.',
          tips: [
            'ActiveTrader has lower fees',
            'Earn interest on holdings',
            'Consider Gemini Credit Card'
          ]
        }
      ]
    },
    type: 'tier1',
    availableInPH: false,
    vpnRequired: true
  }
];

type FilterType = 'all' | 'tier1' | 'tier2' | 'specialized';

export function GlobalExchangesContent() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
  const [expandedGuides, setExpandedGuides] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter exchanges
  const filteredExchanges = globalExchanges.filter(exchange => {
    const matchesFilter = selectedFilter === 'all' || exchange.type === selectedFilter;
    const matchesSearch = !searchQuery || 
      exchange.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exchange.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const toggleGuide = (exchangeId: string) => {
    setExpandedGuides(prev => 
      prev.includes(exchangeId) 
        ? prev.filter(id => id !== exchangeId)
        : [...prev, exchangeId]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'tier1': return Crown;
      case 'tier2': return Star;
      case 'specialized': return Target;
      default: return Building2;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'tier1': return 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white';
      case 'tier2': return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white';
      case 'specialized': return 'bg-gradient-to-r from-purple-500 to-violet-600 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'tier1': return 'Tier 1 Exchange';
      case 'tier2': return 'Tier 2 Exchange';
      case 'specialized': return 'Specialized Platform';
      default: return 'Exchange';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Global Crypto Exchanges
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Comprehensive guide to the world's leading cryptocurrency exchanges. Compare features, 
          fees, and security measures to find the perfect platform for your trading needs.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">{globalExchanges.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Exchanges</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">400M+</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Global Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">$100B+</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Daily Volume</div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--color-text-secondary)]" />
              <input
                type="text"
                placeholder="Search exchanges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[var(--color-muted-subtle)] bg-[var(--color-background-site)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary-brand)] focus:ring-2 focus:ring-[var(--color-primary-brand)]/20 focus:outline-none transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-sm font-medium text-[var(--color-text-secondary)] mr-2 flex items-center">
                <Filter className="h-4 w-4 mr-1" />
                Filter by tier:
              </span>
              
              <Button
                variant={selectedFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('all')}
                className="rounded-xl"
              >
                <Globe className="h-3 w-3 mr-1" />
                All Exchanges
              </Button>
              
              <Button
                variant={selectedFilter === 'tier1' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('tier1')}
                className="rounded-xl"
              >
                <Crown className="h-3 w-3 mr-1" />
                Tier 1
              </Button>
              
              <Button
                variant={selectedFilter === 'tier2' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('tier2')}
                className="rounded-xl"
              >
                <Star className="h-3 w-3 mr-1" />
                Tier 2
              </Button>
              
              <Button
                variant={selectedFilter === 'specialized' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter('specialized')}
                className="rounded-xl"
              >
                <Target className="h-3 w-3 mr-1" />
                Specialized
              </Button>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <Badge variant="secondary" className="rounded-xl">
                {filteredExchanges.length} exchanges found
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exchange Tier Explanation */}
      <Card className="rounded-2xl bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 border border-slate-200 dark:border-slate-700 shadow-lg">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Tier 1 Exchanges</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Largest, most established exchanges with highest liquidity and regulatory compliance
              </p>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Tier 2 Exchanges</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Solid exchanges with good features, competitive fees, and growing user bases
              </p>
            </div>

            <div className="text-center p-4 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Specialized Platforms</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Exchanges focused on specific features like derivatives, copy trading, or DeFi
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exchanges Grid */}
      <div className="space-y-8">
        {filteredExchanges.map((exchange) => {
          const TypeIcon = getTypeIcon(exchange.type);
          const isGuideExpanded = expandedGuides.includes(exchange.id);
          
          return (
            <Card key={exchange.id} className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg overflow-hidden">
              {/* Exchange Header */}
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-b border-[var(--color-muted-subtle)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                          {exchange.name}
                        </CardTitle>
                        <Badge className={cn("text-xs", getTypeColor(exchange.type))}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          {getTypeName(exchange.type)}
                        </Badge>
                        {!exchange.availableInPH && (
                          <Badge variant="outline" className="text-xs border-red-500 text-red-700 dark:text-red-300">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            VPN Required
                          </Badge>
                        )}
                      </div>
                      <p className="text-[var(--color-text-secondary)] mt-1 max-w-2xl">
                        {exchange.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-2">
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
                      <span className="ml-2 font-semibold text-[var(--color-text-primary)]">{exchange.rating}</span>
                    </div>
                    <div className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                      <div>Founded: {exchange.founded}</div>
                      <div>Users: {exchange.users}</div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                    <div className="text-lg font-bold text-[var(--color-text-primary)]">
                      {exchange.supportedCoins}+
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Supported Coins</div>
                  </div>
                  
                  <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                    <div className="text-lg font-bold text-[var(--color-text-primary)]">
                      {exchange.tradingVolume}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Daily Volume</div>
                  </div>
                  
                  <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                    <div className="text-lg font-bold text-[var(--color-text-primary)]">
                      {exchange.fees.trading}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Trading Fees</div>
                  </div>
                  
                  <div className="text-center p-3 bg-[var(--color-muted-subtle)] rounded-xl">
                    <div className="text-lg font-bold text-[var(--color-text-primary)]">
                      {exchange.headquarters}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">Headquarters</div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {/* Fees */}
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Fees</span>
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[var(--color-text-secondary)]">Trading:</span>
                        <span className="font-medium text-[var(--color-text-primary)]">{exchange.fees.trading}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--color-text-secondary)]">Withdrawal:</span>
                        <span className="font-medium text-[var(--color-text-primary)]">{exchange.fees.withdrawal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[var(--color-text-secondary)]">Deposit:</span>
                        <span className="font-medium text-[var(--color-text-primary)]">{exchange.fees.deposit}</span>
                      </div>
                    </div>
                  </div>

                  {/* Funding Methods */}
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                      <CreditCard className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Funding</span>
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {exchange.fundingMethods.map((method) => (
                        <Badge key={method} variant="outline" className="text-xs">
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Security Features */}
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Security</span>
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {exchange.securityFeatures.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {exchange.securityFeatures.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{exchange.securityFeatures.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Features</span>
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className={cn("h-3 w-3", exchange.mobileApp ? "text-green-500" : "text-gray-400")} />
                        <span className="text-[var(--color-text-secondary)]">Mobile App</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className={cn("h-3 w-3", exchange.staking ? "text-green-500" : "text-gray-400")} />
                        <span className="text-[var(--color-text-secondary)]">Staking</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className={cn("h-3 w-3", exchange.futures ? "text-green-500" : "text-gray-400")} />
                        <span className="text-[var(--color-text-secondary)]">Futures</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Pros</span>
                    </h4>
                    <ul className="space-y-2">
                      {exchange.pros.map((pro, index) => (
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
                    <ul className="space-y-2">
                      {exchange.cons.map((con, index) => (
                        <li key={index} className="text-sm flex items-start space-x-2">
                          <AlertTriangle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--color-text-secondary)]">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Step-by-Step Guide Toggle */}
                <div className="border-t border-[var(--color-muted-subtle)] pt-6">
                  <Button
                    onClick={() => toggleGuide(exchange.id)}
                    variant="outline"
                    className="w-full rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white transition-colors"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    {isGuideExpanded ? 'Hide' : 'Show'} Step-by-Step Guide
                    {isGuideExpanded ? (
                      <ChevronUp className="h-4 w-4 ml-2" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-2" />
                    )}
                  </Button>

                  {/* Expanded Guide */}
                  {isGuideExpanded && (
                    <div className="mt-6 p-6 bg-[var(--color-muted-subtle)] rounded-xl">
                      <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 font-[var(--font-display)]">
                        {exchange.stepByStepGuide.title}
                      </h4>
                      
                      <div className="space-y-6">
                        {exchange.stepByStepGuide.steps.map((step) => (
                          <div key={step.step} className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-[var(--color-primary-brand)] text-white rounded-xl flex items-center justify-center font-bold shadow-lg flex-shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-[var(--color-text-primary)] mb-2">
                                {step.title}
                              </h5>
                              <p className="text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                                {step.description}
                              </p>
                              {step.tips && step.tips.length > 0 && (
                                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3 border-l-4 border-blue-500">
                                  <h6 className="font-medium text-blue-800 dark:text-blue-200 mb-2 text-sm">
                                    💡 Pro Tips:
                                  </h6>
                                  <ul className="space-y-1">
                                    {step.tips.map((tip, tipIndex) => (
                                      <li key={tipIndex} className="text-sm text-blue-700 dark:text-blue-300 flex items-start space-x-2">
                                        <span className="text-blue-500 mt-0.5">•</span>
                                        <span>{tip}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Contact Information */}
                      <div className="mt-6 p-4 bg-[var(--color-background-site)] rounded-xl border border-[var(--color-muted-subtle)]">
                        <h5 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                          <MessageCircle className="h-4 w-4 text-[var(--color-primary-brand)]" />
                          <span>Contact & Support</span>
                        </h5>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-[var(--color-text-secondary)]">Website:</span>
                            <a 
                              href={exchange.contactInfo.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block font-medium text-[var(--color-primary-brand)] hover:underline"
                            >
                              {exchange.contactInfo.website}
                              <ExternalLink className="h-3 w-3 inline ml-1" />
                            </a>
                          </div>
                          <div>
                            <span className="text-[var(--color-text-secondary)]">Support:</span>
                            <div className="font-medium text-[var(--color-text-primary)]">
                              {exchange.contactInfo.support}
                            </div>
                          </div>
                          <div>
                            <span className="text-[var(--color-text-secondary)]">Social:</span>
                            <div className="flex space-x-2 mt-1">
                              {exchange.contactInfo.social.twitter && (
                                <Badge variant="outline" className="text-xs">
                                  {exchange.contactInfo.social.twitter}
                                </Badge>
                              )}
                              {exchange.contactInfo.social.telegram && (
                                <Badge variant="outline" className="text-xs">
                                  {exchange.contactInfo.social.telegram}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-muted-subtle)]">
                  <div className="flex items-center space-x-4 text-sm text-[var(--color-text-secondary)]">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{exchange.users} users</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BarChart3 className="h-4 w-4" />
                      <span>{exchange.tradingVolume} volume</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-xl"
                      asChild
                    >
                      <a 
                        href={exchange.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Visit Exchange
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Comparison Table */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <BarChart3 className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Quick Comparison</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-muted-subtle)]">
                  <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Exchange</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Rating</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Trading Fees</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Coins</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">PH Available</th>
                  <th className="text-center p-4 font-semibold text-[var(--color-text-primary)]">Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredExchanges.map((exchange) => (
                  <tr key={exchange.id} className="border-b border-[var(--color-muted-subtle)] hover:bg-[var(--color-muted-subtle)] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                          <Building2 className="h-4 w-4 text-gray-500" />
                        </div>
                        <span className="font-medium text-[var(--color-text-primary)]">{exchange.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-[var(--color-text-primary)]">{exchange.rating}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center font-medium text-[var(--color-text-primary)]">
                      {exchange.fees.trading}
                    </td>
                    <td className="p-4 text-center font-medium text-[var(--color-text-primary)]">
                      {exchange.supportedCoins}+
                    </td>
                    <td className="p-4 text-center">
                      {exchange.availableInPH ? (
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Yes
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="border-red-500 text-red-700 dark:text-red-300">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          VPN
                        </Badge>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <Badge className={cn("text-xs", getTypeColor(exchange.type))}>
                        {getTypeName(exchange.type)}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Important Disclaimer */}
      <Card className="rounded-2xl border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Important Disclaimer & Security Notice
              </h3>
              <div className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  <strong>Risk Warning:</strong> Cryptocurrency trading involves significant risks. 
                  Never invest more than you can afford to lose.
                </p>
                <p>
                  <strong>Due Diligence:</strong> Always conduct your own research before using any exchange. 
                  Verify regulatory status in your jurisdiction.
                </p>
                <p>
                  <strong>Security:</strong> Use strong passwords, enable 2FA, and consider hardware wallets 
                  for long-term storage.
                </p>
                <p>
                  <strong>Philippine Users:</strong> Some exchanges may require VPN access. 
                  Check local regulations and tax obligations.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <Globe className="h-12 w-12 mx-auto text-[var(--color-primary-brand)]" />
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Ready to Start Trading?
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Choose the exchange that best fits your needs and start your cryptocurrency journey. 
            Remember to always prioritize security and start with small amounts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <Link href="/exchanges/philippines">
                Philippines Exchanges
              </Link>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <Link href="/guides">
                Trading Guides
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reading Progress Indicator */}
      <div className="fixed bottom-6 left-6 z-40">
        <Card className="rounded-xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <Globe className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Global • {filteredExchanges.length} exchanges
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}