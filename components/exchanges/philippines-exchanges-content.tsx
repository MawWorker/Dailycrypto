"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Building2, 
  Star, 
  CheckCircle, 
  XCircle, 
  ExternalLink, 
  Shield, 
  Clock, 
  DollarSign, 
  Smartphone, 
  CreditCard, 
  Users, 
  Filter, 
  ChevronDown, 
  ChevronUp, 
  Info, 
  AlertTriangle, 
  Phone, 
  Mail, 
  Globe, 
  MapPin,
  Banknote,
  Wallet,
  ArrowRight,
  Target,
  Zap,
  Award,
  TrendingUp,
  Lock,
  FileText,
  HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Exchange {
  id: string;
  name: string;
  type: 'Exchange' | 'Bank VASP' | 'E-Wallet';
  description: string;
  logo: string;
  rating: number;
  fees: {
    trading: string;
    withdrawal: string;
    deposit: string;
  };
  supportedCoins: string[];
  fundingMethods: string[];
  processingTime: string;
  minDeposit: string;
  maxDaily: string;
  kyc: string;
  security: string[];
  pros: string[];
  cons: string[];
  contact: {
    website: string;
    email?: string;
    phone?: string;
    support?: string;
  };
  stepByStepGuide: {
    title: string;
    steps: Array<{
      step: number;
      title: string;
      description: string;
      tips?: string[];
    }>;
  };
  specialFeatures: string[];
}

const philippineExchanges: Exchange[] = [
  {
    id: 'coins-ph',
    name: 'Coins.ph',
    type: 'Exchange',
    description: 'The Philippines\' leading cryptocurrency exchange with over 18 million users. Offers comprehensive crypto trading, payments, and financial services.',
    logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.5,
    fees: {
      trading: '0.25% - 1.5%',
      withdrawal: 'Free for PHP, varies for crypto',
      deposit: 'Free via most methods'
    },
    supportedCoins: ['BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'USDT', 'USDC'],
    fundingMethods: ['GCash', 'Maya', 'BDO', 'BPI', 'Metrobank', '7-Eleven', 'Cebuana'],
    processingTime: 'Instant to 30 minutes',
    minDeposit: '₱100',
    maxDaily: '₱2,000,000',
    kyc: 'Level 1: Phone, Level 2: ID + Selfie, Level 3: Income proof',
    security: ['2FA', 'Cold Storage', 'Insurance Fund', 'BSP Regulated'],
    pros: [
      'Largest user base in Philippines',
      'Multiple funding options',
      'User-friendly mobile app',
      'Excellent customer support',
      'BSP regulated and compliant'
    ],
    cons: [
      'Higher fees compared to some competitors',
      'Limited advanced trading features',
      'Occasional downtime during high volume'
    ],
    contact: {
      website: 'https://coins.ph',
      email: 'support@coins.ph',
      phone: '+63 2 8811 8800',
      support: '24/7 Live Chat'
    },
    stepByStepGuide: {
      title: 'How to Get Started with Coins.ph',
      steps: [
        {
          step: 1,
          title: 'Download and Install',
          description: 'Download the Coins.ph app from Google Play Store or Apple App Store.',
          tips: ['Available for both Android and iOS', 'Ensure you download the official app']
        },
        {
          step: 2,
          title: 'Create Account',
          description: 'Sign up using your mobile number and create a secure password.',
          tips: ['Use a strong password with numbers and symbols', 'Keep your login details secure']
        },
        {
          step: 3,
          title: 'Verify Your Identity',
          description: 'Complete Level 1 verification with your phone number, then Level 2 with valid ID.',
          tips: ['Use clear, well-lit photos of your ID', 'Ensure all text is readable']
        },
        {
          step: 4,
          title: 'Add Funds',
          description: 'Cash in using GCash, Maya, bank transfer, or over-the-counter methods.',
          tips: ['GCash and Maya are usually the fastest', 'Bank transfers may take 1-2 hours']
        },
        {
          step: 5,
          title: 'Buy Cryptocurrency',
          description: 'Navigate to the Buy/Sell section and purchase your desired cryptocurrency.',
          tips: ['Start with small amounts to test the process', 'Check current market prices before buying']
        },
        {
          step: 6,
          title: 'Secure Your Account',
          description: 'Enable 2FA and consider transferring large amounts to a hardware wallet.',
          tips: ['Use Google Authenticator for 2FA', 'Never share your 2FA codes']
        }
      ]
    },
    specialFeatures: ['Bills Payment', 'Mobile Load', 'Remittance', 'Debit Card', 'Crypto Earn']
  },
  {
    id: 'bloomsolutions',
    name: 'BloomSolutions',
    type: 'Exchange',
    description: 'Enterprise-focused blockchain solutions provider offering institutional-grade cryptocurrency services and payment infrastructure.',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.2,
    fees: {
      trading: '0.5% - 2.0%',
      withdrawal: 'Network fees apply',
      deposit: 'Free for bank transfers'
    },
    supportedCoins: ['BTC', 'ETH', 'USDT', 'USDC'],
    fundingMethods: ['Bank Transfer', 'Corporate Account', 'Wire Transfer'],
    processingTime: '1-3 business days',
    minDeposit: '₱10,000',
    maxDaily: '₱10,000,000',
    kyc: 'Corporate KYC required, Enhanced due diligence',
    security: ['Multi-sig Wallets', 'Cold Storage', 'Enterprise Security'],
    pros: [
      'Enterprise-grade security',
      'Institutional focus',
      'Regulatory compliant',
      'Custom solutions available'
    ],
    cons: [
      'Higher minimum deposits',
      'Limited to business clients',
      'Complex onboarding process'
    ],
    contact: {
      website: 'https://bloomsolutions.co',
      email: 'enterprise@bloomsolutions.co',
      phone: '+63 2 8856 3000'
    },
    stepByStepGuide: {
      title: 'BloomSolutions Enterprise Setup',
      steps: [
        {
          step: 1,
          title: 'Business Registration',
          description: 'Register your business account with required corporate documents.',
          tips: ['Prepare SEC registration', 'Have business permits ready']
        },
        {
          step: 2,
          title: 'KYC Verification',
          description: 'Complete enhanced KYC with business verification and authorized signatories.',
          tips: ['Process can take 3-5 business days', 'Ensure all documents are current']
        },
        {
          step: 3,
          title: 'Account Setup',
          description: 'Configure your corporate account with multi-signature requirements.',
          tips: ['Set up multiple authorized users', 'Configure approval workflows']
        },
        {
          step: 4,
          title: 'Integration',
          description: 'Integrate BloomSolutions API with your business systems.',
          tips: ['Technical documentation available', 'Sandbox environment for testing']
        }
      ]
    },
    specialFeatures: ['API Integration', 'Corporate Solutions', 'Compliance Tools', 'Custom Development']
  },
  {
    id: 'direct-agent-5',
    name: 'Direct Agent 5 / SurgePay',
    type: 'Exchange',
    description: 'Innovative payment solutions provider offering cryptocurrency services integrated with traditional payment processing.',
    logo: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 3.8,
    fees: {
      trading: '1.0% - 2.5%',
      withdrawal: 'Fixed fees per transaction',
      deposit: '₱15 - ₱50 depending on method'
    },
    supportedCoins: ['BTC', 'ETH', 'USDT'],
    fundingMethods: ['Bank Transfer', 'Over-the-Counter', 'Partner Outlets'],
    processingTime: '30 minutes - 2 hours',
    minDeposit: '₱500',
    maxDaily: '₱500,000',
    kyc: 'Basic ID verification required',
    security: ['SSL Encryption', 'Secure Storage', 'Regular Audits'],
    pros: [
      'Multiple outlet locations',
      'Cash-friendly options',
      'Simple verification process'
    ],
    cons: [
      'Higher fees than major exchanges',
      'Limited cryptocurrency selection',
      'Smaller user base'
    ],
    contact: {
      website: 'https://surgepay.ph',
      email: 'support@surgepay.ph',
      phone: '+63 2 8123 4567'
    },
    stepByStepGuide: {
      title: 'SurgePay Registration Process',
      steps: [
        {
          step: 1,
          title: 'Visit Outlet or Website',
          description: 'Go to a SurgePay partner outlet or visit their website to register.',
          tips: ['Find nearest outlet using their locator', 'Bring valid ID for verification']
        },
        {
          step: 2,
          title: 'Account Registration',
          description: 'Fill out registration form with personal information and contact details.',
          tips: ['Use accurate information matching your ID', 'Provide active mobile number']
        },
        {
          step: 3,
          title: 'Identity Verification',
          description: 'Submit valid government ID and complete basic KYC requirements.',
          tips: ['Accepted IDs: Driver\'s License, Passport, UMID', 'Clear photos required']
        },
        {
          step: 4,
          title: 'Fund Your Account',
          description: 'Deposit funds through bank transfer or cash at partner outlets.',
          tips: ['Keep deposit receipts', 'Processing may take up to 2 hours']
        },
        {
          step: 5,
          title: 'Start Trading',
          description: 'Purchase cryptocurrency through their platform or mobile app.',
          tips: ['Start with small amounts', 'Monitor market prices before buying']
        }
      ]
    },
    specialFeatures: ['Outlet Network', 'Cash Deposits', 'Partner Integration']
  },
  {
    id: 'maya-philippines',
    name: 'Maya Philippines',
    type: 'E-Wallet',
    description: 'Leading digital wallet with integrated cryptocurrency trading features, serving over 50 million Filipino users.',
    logo: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.4,
    fees: {
      trading: '0.5% - 1.0%',
      withdrawal: 'Free to Maya wallet, network fees for external',
      deposit: 'Free via Maya wallet'
    },
    supportedCoins: ['BTC', 'ETH', 'USDT', 'USDC'],
    fundingMethods: ['Maya Wallet', 'Bank Transfer', '7-Eleven', 'Cebuana', 'MLhuillier'],
    processingTime: 'Instant via Maya wallet',
    minDeposit: '₱100',
    maxDaily: '₱500,000',
    kyc: 'Maya verification + additional crypto KYC',
    security: ['Biometric Login', 'Transaction PIN', 'SMS OTP', 'BSP Regulated'],
    pros: [
      'Seamless integration with Maya wallet',
      'Instant transactions within ecosystem',
      'Wide cash-in network',
      'User-friendly interface'
    ],
    cons: [
      'Limited to Maya ecosystem',
      'Basic trading features',
      'Higher fees than dedicated exchanges'
    ],
    contact: {
      website: 'https://maya.ph',
      email: 'help@maya.ph',
      phone: '+63 2 8811 8700',
      support: 'In-app chat support'
    },
    stepByStepGuide: {
      title: 'Maya Crypto Trading Setup',
      steps: [
        {
          step: 1,
          title: 'Maya Account Setup',
          description: 'Download Maya app and complete basic account registration.',
          tips: ['Must have existing Maya account', 'Complete Maya KYC first']
        },
        {
          step: 2,
          title: 'Enable Crypto Features',
          description: 'Navigate to Crypto section and enable cryptocurrency trading.',
          tips: ['Feature may need to be activated', 'Additional verification required']
        },
        {
          step: 3,
          title: 'Crypto KYC Verification',
          description: 'Complete additional KYC specifically for cryptocurrency trading.',
          tips: ['Separate from regular Maya verification', 'May take 1-2 business days']
        },
        {
          step: 4,
          title: 'Fund Maya Wallet',
          description: 'Add money to your Maya wallet using various cash-in methods.',
          tips: ['Use 7-Eleven, Cebuana, or bank transfer', 'Funds available instantly']
        },
        {
          step: 5,
          title: 'Buy Cryptocurrency',
          description: 'Use Maya wallet balance to purchase supported cryptocurrencies.',
          tips: ['Check current rates before buying', 'Start with small amounts']
        }
      ]
    },
    specialFeatures: ['Maya Wallet Integration', 'Bills Payment', 'QR Payments', 'Savings Goals']
  },
  {
    id: 'moneybees',
    name: 'MoneyBees',
    type: 'Exchange',
    description: 'Emerging cryptocurrency exchange focusing on user education and simplified trading experience for Filipino beginners.',
    logo: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 3.9,
    fees: {
      trading: '0.75% - 1.5%',
      withdrawal: 'Network fees + ₱25',
      deposit: 'Free for most methods'
    },
    supportedCoins: ['BTC', 'ETH', 'USDT'],
    fundingMethods: ['GCash', 'Maya', 'Bank Transfer', 'Over-the-Counter'],
    processingTime: '15 minutes - 1 hour',
    minDeposit: '₱200',
    maxDaily: '₱1,000,000',
    kyc: 'Basic verification with government ID',
    security: ['2FA', 'Email Verification', 'Secure Storage'],
    pros: [
      'Beginner-friendly interface',
      'Educational resources',
      'Responsive customer support',
      'Low minimum deposit'
    ],
    cons: [
      'Limited cryptocurrency selection',
      'Newer platform with smaller user base',
      'Higher fees than established exchanges'
    ],
    contact: {
      website: 'https://moneybees.ph',
      email: 'support@moneybees.ph',
      support: 'Email and chat support'
    },
    stepByStepGuide: {
      title: 'MoneyBees Getting Started Guide',
      steps: [
        {
          step: 1,
          title: 'Account Registration',
          description: 'Sign up on MoneyBees website with email and mobile number.',
          tips: ['Use a secure email address', 'Verify mobile number immediately']
        },
        {
          step: 2,
          title: 'Identity Verification',
          description: 'Upload clear photos of government-issued ID for verification.',
          tips: ['Ensure ID is not expired', 'Use good lighting for photos']
        },
        {
          step: 3,
          title: 'Security Setup',
          description: 'Enable two-factor authentication and set up security questions.',
          tips: ['Use authenticator app instead of SMS', 'Store backup codes safely']
        },
        {
          step: 4,
          title: 'Deposit Funds',
          description: 'Add money using GCash, Maya, or bank transfer.',
          tips: ['GCash deposits are usually fastest', 'Keep transaction receipts']
        },
        {
          step: 5,
          title: 'Start Trading',
          description: 'Browse available cryptocurrencies and make your first purchase.',
          tips: ['Read their educational materials first', 'Start with Bitcoin for beginners']
        }
      ]
    },
    specialFeatures: ['Educational Hub', 'Beginner Tutorials', 'Market Analysis', 'Price Alerts']
  },
  {
    id: 'pdax',
    name: 'PDAX',
    type: 'Exchange',
    description: 'Professional digital asset exchange regulated by BSP, offering advanced trading features for serious cryptocurrency traders.',
    logo: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.6,
    fees: {
      trading: '0.10% - 0.50%',
      withdrawal: 'Free PHP, network fees for crypto',
      deposit: 'Free for bank transfers'
    },
    supportedCoins: ['BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'ADA', 'DOT', 'LINK', 'UNI'],
    fundingMethods: ['Bank Transfer', 'Online Banking', 'Over-the-Counter'],
    processingTime: '30 minutes - 2 hours',
    minDeposit: '₱1,000',
    maxDaily: '₱5,000,000',
    kyc: 'Enhanced KYC with income verification',
    security: ['Multi-sig Wallets', 'Cold Storage', 'Insurance Coverage', 'BSP Licensed'],
    pros: [
      'Lowest trading fees in Philippines',
      'Professional trading interface',
      'Strong regulatory compliance',
      'Advanced order types',
      'High liquidity'
    ],
    cons: [
      'Limited funding options',
      'Higher learning curve',
      'Minimum deposit requirement'
    ],
    contact: {
      website: 'https://pdax.ph',
      email: 'support@pdax.ph',
      phone: '+63 2 8234 5678',
      support: 'Business hours support'
    },
    stepByStepGuide: {
      title: 'PDAX Professional Trading Setup',
      steps: [
        {
          step: 1,
          title: 'Account Registration',
          description: 'Create account on PDAX website with email verification.',
          tips: ['Use professional email address', 'Strong password required']
        },
        {
          step: 2,
          title: 'Enhanced KYC',
          description: 'Complete comprehensive identity verification with income proof.',
          tips: ['Prepare ITR or Certificate of Employment', 'Process takes 1-3 business days']
        },
        {
          step: 3,
          title: 'Bank Account Linking',
          description: 'Link your Philippine bank account for peso deposits and withdrawals.',
          tips: ['Major banks supported', 'Account must be in your name']
        },
        {
          step: 4,
          title: 'Security Configuration',
          description: 'Set up 2FA, withdrawal whitelist, and security preferences.',
          tips: ['Enable all security features', 'Set up withdrawal limits']
        },
        {
          step: 5,
          title: 'First Deposit',
          description: 'Transfer funds from your linked bank account to PDAX.',
          tips: ['Use online banking for faster processing', 'Minimum ₱1,000 required']
        },
        {
          step: 6,
          title: 'Advanced Trading',
          description: 'Explore limit orders, stop-loss, and other professional trading features.',
          tips: ['Start with market orders', 'Learn about order types gradually']
        }
      ]
    },
    specialFeatures: ['Advanced Charts', 'API Access', 'Institutional Services', 'OTC Trading']
  },
  {
    id: 'topjuan',
    name: 'TopJuan Technologies',
    type: 'Exchange',
    description: 'Local cryptocurrency exchange focusing on Filipino market needs with competitive rates and local payment integration.',
    logo: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 3.7,
    fees: {
      trading: '0.8% - 1.8%',
      withdrawal: 'Network fees + ₱30',
      deposit: 'Free for most methods'
    },
    supportedCoins: ['BTC', 'ETH', 'USDT', 'XRP'],
    fundingMethods: ['GCash', 'Maya', 'Bank Transfer', 'Remittance Centers'],
    processingTime: '1-4 hours',
    minDeposit: '₱300',
    maxDaily: '₱750,000',
    kyc: 'Standard ID verification',
    security: ['2FA', 'Cold Storage', 'Regular Security Audits'],
    pros: [
      'Competitive exchange rates',
      'Local market focus',
      'Multiple payment options',
      'Filipino customer support'
    ],
    cons: [
      'Limited cryptocurrency selection',
      'Newer platform',
      'Lower liquidity than major exchanges'
    ],
    contact: {
      website: 'https://topjuan.ph',
      email: 'hello@topjuan.ph',
      support: 'Email and phone support'
    },
    stepByStepGuide: {
      title: 'TopJuan Quick Start Guide',
      steps: [
        {
          step: 1,
          title: 'Website Registration',
          description: 'Sign up on TopJuan website with email and mobile verification.',
          tips: ['Check email for verification link', 'Use Philippine mobile number']
        },
        {
          step: 2,
          title: 'ID Verification',
          description: 'Upload government ID and complete basic KYC process.',
          tips: ['Process usually takes 24-48 hours', 'Ensure ID photos are clear']
        },
        {
          step: 3,
          title: 'Payment Method Setup',
          description: 'Add GCash, Maya, or bank account for funding.',
          tips: ['Multiple payment methods can be added', 'Verify payment accounts']
        },
        {
          step: 4,
          title: 'Make First Deposit',
          description: 'Transfer funds using your preferred payment method.',
          tips: ['Start with minimum amount to test', 'Save transaction references']
        },
        {
          step: 5,
          title: 'Buy Cryptocurrency',
          description: 'Navigate to trading section and purchase your chosen cryptocurrency.',
          tips: ['Check current market rates', 'Consider market vs limit orders']
        }
      ]
    },
    specialFeatures: ['Local Support', 'Competitive Rates', 'Remittance Integration']
  },
  {
    id: 'xenremit',
    name: 'XenRemit',
    type: 'Exchange',
    description: 'Remittance-focused platform offering cryptocurrency services alongside traditional money transfer solutions.',
    logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.0,
    fees: {
      trading: '1.0% - 2.0%',
      withdrawal: 'Free for remittance, network fees for crypto',
      deposit: 'Free via partner networks'
    },
    supportedCoins: ['BTC', 'ETH', 'USDT', 'XRP'],
    fundingMethods: ['Bank Transfer', 'Remittance Centers', 'Partner Outlets'],
    processingTime: '1-6 hours',
    minDeposit: '₱500',
    maxDaily: '₱2,000,000',
    kyc: 'Enhanced verification for remittance compliance',
    security: ['AML Compliance', 'Secure Transfers', 'Regulatory Oversight'],
    pros: [
      'Integrated remittance services',
      'Global transfer network',
      'Competitive remittance rates',
      'Established reputation'
    ],
    cons: [
      'Limited pure crypto trading features',
      'Focus on remittance over trading',
      'Complex fee structure'
    ],
    contact: {
      website: 'https://xenremit.com',
      email: 'support@xenremit.com',
      phone: '+63 2 8567 8900'
    },
    stepByStepGuide: {
      title: 'XenRemit Crypto Remittance Guide',
      steps: [
        {
          step: 1,
          title: 'Account Creation',
          description: 'Register for XenRemit account with enhanced verification.',
          tips: ['Prepare multiple forms of ID', 'Process may take 2-3 days']
        },
        {
          step: 2,
          title: 'Remittance Verification',
          description: 'Complete additional verification for remittance services.',
          tips: ['Provide proof of income source', 'Explain purpose of transfers']
        },
        {
          step: 3,
          title: 'Beneficiary Setup',
          description: 'Add recipient details for international transfers.',
          tips: ['Accurate recipient information required', 'Verify recipient bank details']
        },
        {
          step: 4,
          title: 'Crypto Integration',
          description: 'Enable cryptocurrency features within your remittance account.',
          tips: ['Additional fees may apply', 'Understand conversion rates']
        },
        {
          step: 5,
          title: 'Send Crypto Remittance',
          description: 'Send cryptocurrency or convert to fiat for recipient.',
          tips: ['Compare rates with traditional remittance', 'Consider recipient preferences']
        }
      ]
    },
    specialFeatures: ['Global Remittance', 'Multi-Currency Support', 'Compliance Tools']
  },
  {
    id: 'gotyme-bank',
    name: 'GoTyme Bank',
    type: 'Bank VASP',
    description: 'Digital bank offering Virtual Asset Service Provider (VASP) services with integrated cryptocurrency trading and custody.',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.3,
    fees: {
      trading: '0.5% - 1.2%',
      withdrawal: 'Free to GoTyme account',
      deposit: 'Free via GoTyme banking'
    },
    supportedCoins: ['BTC', 'ETH', 'USDT'],
    fundingMethods: ['GoTyme Account', 'Bank Transfer', 'ATM Deposit'],
    processingTime: 'Instant within GoTyme ecosystem',
    minDeposit: '₱500',
    maxDaily: '₱3,000,000',
    kyc: 'Full banking KYC + VASP compliance',
    security: ['Bank-Grade Security', 'PDIC Insured', 'BSP Supervised', 'Multi-layer Authentication'],
    pros: [
      'Bank-level security and regulation',
      'PDIC insurance protection',
      'Integrated banking services',
      'Professional custody solutions'
    ],
    cons: [
      'Limited cryptocurrency selection',
      'Requires full banking relationship',
      'Higher barriers to entry'
    ],
    contact: {
      website: 'https://gotyme.com.ph',
      email: 'support@gotyme.com.ph',
      phone: '+63 2 8888 1188',
      support: '24/7 banking support'
    },
    stepByStepGuide: {
      title: 'GoTyme Bank VASP Services',
      steps: [
        {
          step: 1,
          title: 'Open GoTyme Account',
          description: 'Open a full digital banking account with GoTyme Bank.',
          tips: ['Complete banking KYC required', 'Minimum initial deposit applies']
        },
        {
          step: 2,
          title: 'VASP Service Activation',
          description: 'Apply for Virtual Asset Service Provider features.',
          tips: ['Additional documentation required', 'Enhanced due diligence process']
        },
        {
          step: 3,
          title: 'Risk Assessment',
          description: 'Complete cryptocurrency risk assessment and suitability test.',
          tips: ['Honest assessment important', 'May affect available features']
        },
        {
          step: 4,
          title: 'Custody Setup',
          description: 'Configure cryptocurrency custody preferences and security settings.',
          tips: ['Bank provides professional custody', 'Insurance coverage available']
        },
        {
          step: 5,
          title: 'Trading Authorization',
          description: 'Receive approval for cryptocurrency trading within banking platform.',
          tips: ['May take 3-5 business days', 'Compliance review required']
        }
      ]
    },
    specialFeatures: ['Banking Integration', 'Professional Custody', 'PDIC Insurance', 'Institutional Services']
  },
  {
    id: 'unionbank',
    name: 'UnionBank',
    type: 'Bank VASP',
    description: 'Traditional bank with innovative VASP services, offering cryptocurrency trading and custody for retail and institutional clients.',
    logo: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.4,
    fees: {
      trading: '0.3% - 1.0%',
      withdrawal: 'Free to UnionBank account',
      deposit: 'Free via UnionBank services'
    },
    supportedCoins: ['BTC', 'ETH', 'USDT', 'USDC'],
    fundingMethods: ['UnionBank Account', 'Online Banking', 'ATM', 'Branch Deposit'],
    processingTime: 'Instant for bank customers',
    minDeposit: '₱1,000',
    maxDaily: '₱5,000,000',
    kyc: 'Full banking KYC + enhanced crypto verification',
    security: ['Bank-Grade Security', 'PDIC Insured', 'BSP Regulated', 'Professional Custody'],
    pros: [
      'Established banking reputation',
      'Highest security standards',
      'PDIC insurance protection',
      'Professional custody services',
      'Institutional-grade platform'
    ],
    cons: [
      'Requires UnionBank relationship',
      'Higher minimum deposits',
      'Limited to bank customers initially'
    ],
    contact: {
      website: 'https://unionbank.com.ph',
      email: 'digital@unionbank.com.ph',
      phone: '+63 2 8841 8600',
      support: 'Branch and digital support'
    },
    stepByStepGuide: {
      title: 'UnionBank VASP Services Guide',
      steps: [
        {
          step: 1,
          title: 'UnionBank Account',
          description: 'Open or maintain an active UnionBank savings or checking account.',
          tips: ['Existing customers have priority access', 'Maintain minimum balance requirements']
        },
        {
          step: 2,
          title: 'Digital Banking Setup',
          description: 'Activate UnionBank Online and mobile banking services.',
          tips: ['Download official UnionBank app', 'Complete digital banking registration']
        },
        {
          step: 3,
          title: 'VASP Application',
          description: 'Apply for Virtual Asset Service Provider features through digital banking.',
          tips: ['Application review takes 5-7 business days', 'Additional documentation may be required']
        },
        {
          step: 4,
          title: 'Risk Profiling',
          description: 'Complete comprehensive risk assessment and investment suitability test.',
          tips: ['Honest responses ensure appropriate service level', 'May affect trading limits']
        },
        {
          step: 5,
          title: 'Trading Activation',
          description: 'Receive approval and access to cryptocurrency trading platform.',
          tips: ['Professional interface available', 'Training materials provided']
        }
      ]
    },
    specialFeatures: ['Banking Integration', 'Institutional Custody', 'Wealth Management', 'Corporate Services']
  },
  {
    id: 'gcash-gcrypto',
    name: 'GCash (GCrypto)',
    type: 'E-Wallet',
    description: 'Philippines\' largest e-wallet with cryptocurrency trading powered by PDAX integration, serving over 90 million users.',
    logo: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.5,
    fees: {
      trading: '0.5% - 1.0% (via PDAX)',
      withdrawal: 'Free to GCash wallet',
      deposit: 'Free via GCash wallet'
    },
    supportedCoins: ['BTC', 'ETH', 'USDT', 'USDC'],
    fundingMethods: ['GCash Wallet', 'Bank Transfer', 'Cash-in Partners', 'Remittance'],
    processingTime: 'Instant via GCash',
    minDeposit: '₱100',
    maxDaily: '₱500,000',
    kyc: 'GCash verification + crypto KYC',
    security: ['GCash Security', 'PDAX Integration', 'BSP Oversight', 'Biometric Authentication'],
    pros: [
      'Largest user base in Philippines',
      'Seamless GCash integration',
      'Instant transactions',
      'Wide cash-in network',
      'Trusted brand'
    ],
    cons: [
      'Limited to GCash ecosystem',
      'Basic trading features',
      'Dependent on PDAX backend'
    ],
    contact: {
      website: 'https://gcash.com',
      email: 'help@gcash.com',
      phone: '+63 2 8882 1688',
      support: 'In-app chat and hotline'
    },
    stepByStepGuide: {
      title: 'GCash GCrypto Setup Guide',
      steps: [
        {
          step: 1,
          title: 'GCash Account Setup',
          description: 'Download GCash app and complete account registration and verification.',
          tips: ['Must be fully verified GCash user', 'Complete all KYC levels']
        },
        {
          step: 2,
          title: 'Find GCrypto Feature',
          description: 'Navigate to "Invest" section and select "GCrypto" option.',
          tips: ['Feature may not be visible until account is eligible', 'Update app to latest version']
        },
        {
          step: 3,
          title: 'Crypto KYC',
          description: 'Complete additional verification specifically for cryptocurrency trading.',
          tips: ['Separate from regular GCash KYC', 'May require additional documents']
        },
        {
          step: 4,
          title: 'Fund GCash Wallet',
          description: 'Add money to your GCash wallet using various cash-in methods.',
          tips: ['Use partner outlets, banks, or online banking', 'Funds available instantly']
        },
        {
          step: 5,
          title: 'Buy Cryptocurrency',
          description: 'Use GCash balance to purchase supported cryptocurrencies.',
          tips: ['Powered by PDAX backend', 'Competitive rates available']
        },
        {
          step: 6,
          title: 'Manage Holdings',
          description: 'View portfolio, track performance, and manage your crypto investments.',
          tips: ['Portfolio tracking within GCash app', 'Set price alerts for monitoring']
        }
      ]
    },
    specialFeatures: ['GCash Integration', 'Instant Transfers', 'Mobile-First', 'Mass Market Access']
  }
];

export function PhilippinesExchangesContent() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [expandedGuides, setExpandedGuides] = useState<string[]>([]);

  const toggleGuide = (exchangeId: string) => {
    setExpandedGuides(prev => 
      prev.includes(exchangeId) 
        ? prev.filter(id => id !== exchangeId)
        : [...prev, exchangeId]
    );
  };

  const filteredExchanges = selectedType === 'all' 
    ? philippineExchanges 
    : philippineExchanges.filter(exchange => 
        selectedType === 'exchanges' ? exchange.type === 'Exchange' :
        selectedType === 'banks' ? exchange.type === 'Bank VASP' :
        selectedType === 'ewallets' ? exchange.type === 'E-Wallet' : true
      );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Exchange':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Bank VASP':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'E-Wallet':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Exchange':
        return Building2;
      case 'Bank VASP':
        return Banknote;
      case 'E-Wallet':
        return Smartphone;
      default:
        return Building2;
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Philippines Crypto Exchanges
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
          Complete guide to all cryptocurrency exchanges, bank VASPs, and e-wallets available in the Philippines. 
          Step-by-step tutorials for each platform.
        </p>
      </div>

      {/* Platform Type Filter */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-[var(--color-primary-brand)]" />
              <span className="font-medium text-[var(--color-text-primary)]">Filter by type:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedType === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType('all')}
                className="rounded-xl"
              >
                All Platforms ({philippineExchanges.length})
              </Button>
              <Button
                variant={selectedType === 'exchanges' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType('exchanges')}
                className="rounded-xl"
              >
                <Building2 className="h-4 w-4 mr-1" />
                Exchanges ({philippineExchanges.filter(e => e.type === 'Exchange').length})
              </Button>
              <Button
                variant={selectedType === 'banks' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType('banks')}
                className="rounded-xl"
              >
                <Banknote className="h-4 w-4 mr-1" />
                Bank VASPs ({philippineExchanges.filter(e => e.type === 'Bank VASP').length})
              </Button>
              <Button
                variant={selectedType === 'ewallets' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType('ewallets')}
                className="rounded-xl"
              >
                <Smartphone className="h-4 w-4 mr-1" />
                E-Wallets ({philippineExchanges.filter(e => e.type === 'E-Wallet').length})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exchanges Grid */}
      <div className="space-y-6">
        {filteredExchanges.map((exchange) => {
          const TypeIcon = getTypeIcon(exchange.type);
          const isGuideExpanded = expandedGuides.includes(exchange.id);
          
          return (
            <Card key={exchange.id} className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Logo */}
                    <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-sm">
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <TypeIcon className="h-6 w-6 text-gray-500" />
                      </div>
                    </div>
                    
                    {/* Basic Info */}
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <CardTitle className="text-xl font-bold text-[var(--color-text-primary)]">
                          {exchange.name}
                        </CardTitle>
                        <Badge className={cn("text-xs", getTypeColor(exchange.type))}>
                          <TypeIcon className="h-3 w-3 mr-1" />
                          {exchange.type}
                        </Badge>
                      </div>
                      <p className="text-[var(--color-text-secondary)] text-sm max-w-md">
                        {exchange.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Rating and Actions */}
                  <div className="text-right space-y-2">
                    <div className="flex items-center space-x-1">
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
                      <span className="ml-2 font-semibold text-[var(--color-text-primary)]">
                        {exchange.rating}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="rounded-xl"
                      asChild
                    >
                      <a href={exchange.contact.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Visit Platform
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                {/* Key Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Fees */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[var(--color-text-primary)] flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Fees</span>
                    </h4>
                    <div className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                      <div>Trading: <span className="font-medium">{exchange.fees.trading}</span></div>
                      <div>Withdrawal: <span className="font-medium">{exchange.fees.withdrawal}</span></div>
                      <div>Deposit: <span className="font-medium">{exchange.fees.deposit}</span></div>
                    </div>
                  </div>

                  {/* Supported Coins */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[var(--color-text-primary)] flex items-center space-x-2">
                      <Target className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Supported Coins</span>
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {exchange.supportedCoins.map((coin) => (
                        <Badge key={coin} variant="outline" className="text-xs font-mono">
                          {coin}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Funding Methods */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[var(--color-text-primary)] flex items-center space-x-2">
                      <CreditCard className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Funding</span>
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {exchange.fundingMethods.slice(0, 3).map((method) => (
                        <Badge key={method} variant="secondary" className="text-xs">
                          {method}
                        </Badge>
                      ))}
                      {exchange.fundingMethods.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{exchange.fundingMethods.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[var(--color-text-primary)] flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Processing</span>
                    </h4>
                    <div className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                      <div>Time: <span className="font-medium">{exchange.processingTime}</span></div>
                      <div>Min: <span className="font-medium">{exchange.minDeposit}</span></div>
                      <div>Max Daily: <span className="font-medium">{exchange.maxDaily}</span></div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Advantages</span>
                    </h4>
                    <ul className="space-y-2">
                      {exchange.pros.map((pro, index) => (
                        <li key={index} className="text-sm flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--color-text-secondary)]">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center space-x-2">
                      <XCircle className="h-4 w-4" />
                      <span>Considerations</span>
                    </h4>
                    <ul className="space-y-2">
                      {exchange.cons.map((con, index) => (
                        <li key={index} className="text-sm flex items-start space-x-2">
                          <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--color-text-secondary)]">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Special Features */}
                {exchange.specialFeatures.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-[var(--color-primary-brand)]" />
                        <span>Special Features</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exchange.specialFeatures.map((feature) => (
                          <Badge key={feature} className="bg-[var(--color-primary-brand)] text-white text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <Separator />

                {/* Step-by-Step Guide Toggle */}
                <div>
                  <Button
                    variant="outline"
                    onClick={() => toggleGuide(exchange.id)}
                    className="w-full rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    {isGuideExpanded ? 'Hide' : 'Show'} Step-by-Step Guide
                    {isGuideExpanded ? (
                      <ChevronUp className="h-4 w-4 ml-2" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-2" />
                    )}
                  </Button>

                  {/* Expandable Guide */}
                  {isGuideExpanded && (
                    <div className="mt-6 p-6 bg-[var(--color-muted-subtle)] rounded-xl">
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 font-[var(--font-display)]">
                        {exchange.stepByStepGuide.title}
                      </h3>
                      
                      <div className="space-y-4">
                        {exchange.stepByStepGuide.steps.map((step) => (
                          <div key={step.step} className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-black/20 rounded-xl">
                            <div className="w-8 h-8 bg-[var(--color-primary-brand)] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">
                                {step.title}
                              </h4>
                              <p className="text-[var(--color-text-secondary)] text-sm mb-3 leading-relaxed">
                                {step.description}
                              </p>
                              {step.tips && step.tips.length > 0 && (
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-1 text-xs font-medium text-[var(--color-primary-brand)]">
                                    <Info className="h-3 w-3" />
                                    <span>Pro Tips:</span>
                                  </div>
                                  <ul className="space-y-1">
                                    {step.tips.map((tip, tipIndex) => (
                                      <li key={tipIndex} className="text-xs text-[var(--color-text-secondary)] flex items-start space-x-1">
                                        <span className="text-[var(--color-primary-brand)] mt-0.5">•</span>
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
                    </div>
                  )}
                </div>

                <Separator />

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Contact Information</span>
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-3 w-3 text-[var(--color-text-secondary)]" />
                        <a 
                          href={exchange.contact.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[var(--color-primary-brand)] hover:underline"
                        >
                          {exchange.contact.website}
                        </a>
                      </div>
                      {exchange.contact.email && (
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3 text-[var(--color-text-secondary)]" />
                          <span className="text-[var(--color-text-secondary)]">{exchange.contact.email}</span>
                        </div>
                      )}
                      {exchange.contact.phone && (
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3 w-3 text-[var(--color-text-secondary)]" />
                          <span className="text-[var(--color-text-secondary)]">{exchange.contact.phone}</span>
                        </div>
                      )}
                      {exchange.contact.support && (
                        <div className="flex items-center space-x-2">
                          <HelpCircle className="h-3 w-3 text-[var(--color-text-secondary)]" />
                          <span className="text-[var(--color-text-secondary)]">{exchange.contact.support}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-[var(--color-primary-brand)]" />
                      <span>Security Features</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exchange.security.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          <Lock className="h-3 w-3 mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
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
            <Award className="h-6 w-6 text-[var(--color-primary-brand)]" />
            <span>Quick Comparison</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--color-muted-subtle)]">
                  <th className="text-left p-3 font-semibold text-[var(--color-text-primary)]">Platform</th>
                  <th className="text-left p-3 font-semibold text-[var(--color-text-primary)]">Type</th>
                  <th className="text-left p-3 font-semibold text-[var(--color-text-primary)]">Trading Fees</th>
                  <th className="text-left p-3 font-semibold text-[var(--color-text-primary)]">Min Deposit</th>
                  <th className="text-left p-3 font-semibold text-[var(--color-text-primary)]">Rating</th>
                </tr>
              </thead>
              <tbody>
                {philippineExchanges.map((exchange) => (
                  <tr key={exchange.id} className="border-b border-[var(--color-muted-subtle)] hover:bg-[var(--color-muted-subtle)] transition-colors">
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-[var(--color-primary-brand)] rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {exchange.name.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-[var(--color-text-primary)]">
                          {exchange.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={cn("text-xs", getTypeColor(exchange.type))}>
                        {exchange.type}
                      </Badge>
                    </td>
                    <td className="p-3 text-[var(--color-text-secondary)] font-mono text-sm">
                      {exchange.fees.trading}
                    </td>
                    <td className="p-3 text-[var(--color-text-secondary)] font-mono text-sm">
                      {exchange.minDeposit}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-[var(--color-text-primary)]">
                          {exchange.rating}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Important Disclaimer */}
      <Card className="rounded-2xl border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Important Disclaimer
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
                All platforms listed are regulated by the Bangko Sentral ng Pilipinas (BSP) or operate under proper licensing. 
                Always verify current regulations and conduct your own research before choosing a platform. 
                Cryptocurrency investments carry significant risks - never invest more than you can afford to lose.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started CTA */}
      <Card className="rounded-2xl bg-gradient-to-r from-[var(--color-primary-brand)]/5 to-[var(--color-primary-brand)]/10 border border-[var(--color-primary-brand)]/20 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <TrendingUp className="h-12 w-12 mx-auto text-[var(--color-primary-brand)]" />
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Ready to Start Trading?
          </h3>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Choose the platform that best fits your needs and follow our step-by-step guides to get started safely. 
            Remember to start small and always prioritize security.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="outline"
              className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
              asChild
            >
              <a href="/guides/buying-selling">
                Learn How to Buy Crypto
              </a>
            </Button>
            <Button 
              className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
              asChild
            >
              <a href="/guides/risks-security">
                Security Best Practices
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}