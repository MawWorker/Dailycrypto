"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  TrendingDown,
  Smartphone,
  Wifi,
  Users,
  DollarSign,
  Zap,
  Target,
  BookOpen,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  Info,
  Star,
  Lightbulb,
  Award,
  Heart,
  Globe,
  Building2,
  CreditCard,
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
  Download,
  Upload,
  Trash2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityRisk {
  name: string;
  description: string;
  examples: string[];
  riskLevel: 'High' | 'Medium' | 'Low';
  prevention: string[];
  color: string;
  bgColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SecurityTip {
  category: string;
  tips: {
    title: string;
    description: string;
    importance: 'Critical' | 'Important' | 'Recommended';
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

interface FAQItem {
  question: string;
  answer: string;
  category: 'risks' | 'security' | 'scams' | 'best-practices';
}

const securityRisks: SecurityRisk[] = [
  {
    name: "Market Volatility",
    description: "Cryptocurrency prices can change dramatically in short periods, sometimes losing 50% or more of their value in days.",
    examples: [
      "Bitcoin dropping from $69,000 to $15,500 in 2022",
      "Terra Luna losing 99% of its value in one week",
      "Daily price swings of 10-20% during volatile periods",
      "Altcoins experiencing even higher volatility than Bitcoin"
    ],
    riskLevel: 'High',
    prevention: [
      "Only invest money you can afford to lose completely",
      "Diversify across different cryptocurrencies",
      "Use dollar-cost averaging to reduce timing risk",
      "Set stop-loss orders to limit potential losses",
      "Avoid investing borrowed money or emergency funds"
    ],
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900",
    icon: TrendingDown
  },
  {
    name: "Scams and Fraud",
    description: "The crypto space attracts many scammers who target inexperienced users with fake investment schemes and phishing attacks.",
    examples: [
      "Fake cryptocurrency exchanges stealing deposits",
      "Ponzi schemes promising guaranteed high returns",
      "Phishing emails asking for private keys or passwords",
      "Social media scams impersonating celebrities",
      "Fake ICOs and token sales"
    ],
    riskLevel: 'High',
    prevention: [
      "Never share your private keys or seed phrases",
      "Only use reputable, licensed exchanges",
      "Verify URLs carefully before entering credentials",
      "Be skeptical of guaranteed returns or 'get rich quick' schemes",
      "Research projects thoroughly before investing"
    ],
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900",
    icon: AlertTriangle
  },
  {
    name: "Technical Risks",
    description: "Cryptocurrency involves complex technology that can fail, be hacked, or have bugs that result in permanent loss of funds.",
    examples: [
      "Smart contract bugs causing fund drainage",
      "Exchange hacks resulting in stolen customer funds",
      "Lost private keys making crypto permanently inaccessible",
      "Network congestion preventing transactions",
      "Software wallet vulnerabilities"
    ],
    riskLevel: 'Medium',
    prevention: [
      "Use hardware wallets for large amounts",
      "Keep software updated and use reputable wallets",
      "Backup your private keys securely",
      "Test transactions with small amounts first",
      "Understand the technology before investing heavily"
    ],
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900",
    icon: Cpu
  },
  {
    name: "Regulatory Risks",
    description: "Government regulations can change quickly, potentially affecting the legality, taxation, or accessibility of cryptocurrencies.",
    examples: [
      "Countries banning cryptocurrency trading",
      "New tax laws affecting crypto profits",
      "Exchange licensing requirements changing",
      "Cross-border transaction restrictions",
      "Central bank digital currencies competing with crypto"
    ],
    riskLevel: 'Medium',
    prevention: [
      "Stay informed about local regulations",
      "Keep detailed records for tax purposes",
      "Use compliant, licensed exchanges",
      "Understand your legal obligations",
      "Consider regulatory-friendly cryptocurrencies"
    ],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
    icon: Building2
  },
  {
    name: "Liquidity Risks",
    description: "Some cryptocurrencies may be difficult to sell quickly without significantly affecting the price, especially during market stress.",
    examples: [
      "Small altcoins with low trading volume",
      "Market crashes causing widespread selling pressure",
      "Exchange outages preventing trading",
      "Large orders moving prices significantly",
      "Locked staking or DeFi positions"
    ],
    riskLevel: 'Medium',
    prevention: [
      "Focus on cryptocurrencies with high trading volume",
      "Avoid putting all funds in illiquid assets",
      "Understand lock-up periods before staking",
      "Keep some funds in liquid stablecoins",
      "Use multiple exchanges to spread liquidity risk"
    ],
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-950 dark:to-cyan-900",
    icon: DollarSign
  },
  {
    name: "Operational Risks",
    description: "Human errors, forgotten passwords, or operational mistakes can result in permanent loss of cryptocurrency.",
    examples: [
      "Forgetting wallet passwords or losing devices",
      "Sending crypto to wrong addresses",
      "Falling for social engineering attacks",
      "Using weak passwords or poor security practices",
      "Not backing up wallet information properly"
    ],
    riskLevel: 'High',
    prevention: [
      "Use strong, unique passwords and 2FA",
      "Create secure backups of all wallet information",
      "Double-check addresses before sending transactions",
      "Practice good operational security (OPSEC)",
      "Educate yourself about common mistakes"
    ],
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900",
    icon: Key
  }
];

const commonScams = [
  {
    name: 'Ponzi Schemes',
    description: 'Fake investment programs promising guaranteed high returns',
    examples: [
      'Referral bonuses for bringing new investors',
      'Claims of "risk-free" cryptocurrency investments'
    ],
    riskLevel: 'High',
    risks: [
      {
        name: 'Ponzi Schemes',
        description: 'Fake investment programs promising guaranteed high returns',
        examples: [
          'Referral bonuses for bringing new investors',
          'Claims of "risk-free" cryptocurrency investments'
        ],
        riskLevel: 'High'
      }
    ]
  },
  {
    name: 'Phishing Attacks',
    description: 'Fake websites or emails designed to steal your login credentials',
    examples: [
      'Fake exchange websites with similar URLs',
      'Emails claiming your account will be closed'
    ],
    riskLevel: 'High',
    risks: []
  },
  {
    name: 'Social Media Scams',
    description: 'Fake celebrity endorsements or giveaway scams on social platforms',
    examples: [
      'Fake Elon Musk Bitcoin giveaways',
      'Impersonation of crypto influencers'
    ],
    riskLevel: 'Medium',
    risks: []
  },
  {
    name: 'Fake Exchanges',
    description: 'Fraudulent trading platforms that steal user deposits',
    examples: [
      'Unlicensed exchanges with attractive rates',
      'Platforms that prevent withdrawals'
    ],
    riskLevel: 'High',
    risks: []
  }
];

const securityTips: SecurityTip[] = [
  {
    category: "Wallet Security",
    tips: [
      {
        title: "Use Hardware Wallets for Large Amounts",
        description: "Store significant cryptocurrency holdings in offline hardware wallets like Ledger or Trezor",
        importance: 'Critical',
        icon: Lock
      },
      {
        title: "Backup Your Seed Phrase Securely",
        description: "Write down your 12-24 word recovery phrase and store it in multiple secure locations",
        importance: 'Critical',
        icon: FileText
      },
      {
        title: "Never Share Private Keys",
        description: "Your private keys are like the password to your bank account - never share them with anyone",
        importance: 'Critical',
        icon: Key
      },
      {
        title: "Use Strong Passwords",
        description: "Create unique, complex passwords for all crypto-related accounts",
        importance: 'Important',
        icon: Shield
      }
    ]
  },
  {
    category: "Exchange Security",
    tips: [
      {
        title: "Enable Two-Factor Authentication",
        description: "Always enable 2FA on exchange accounts using Google Authenticator or similar apps",
        importance: 'Critical',
        icon: Smartphone
      },
      {
        title: "Use Reputable Exchanges",
        description: "Stick to well-known, regulated exchanges like Coins.ph, PDAX, or major international platforms",
        importance: 'Critical',
        icon: Building2
      },
      {
        title: "Withdraw to Personal Wallets",
        description: "Don't leave large amounts on exchanges - withdraw to your own wallet",
        importance: 'Important',
        icon: Download
      },
      {
        title: "Verify Exchange URLs",
        description: "Always check the URL carefully to avoid phishing sites",
        importance: 'Important',
        icon: Globe
      }
    ]
  },
  {
    category: "Transaction Security",
    tips: [
      {
        title: "Double-Check Addresses",
        description: "Always verify recipient addresses before sending cryptocurrency",
        importance: 'Critical',
        icon: Eye
      },
      {
        title: "Start with Small Test Transactions",
        description: "Send a small amount first to verify the address works correctly",
        importance: 'Important',
        icon: Target
      },
      {
        title: "Understand Transaction Fees",
        description: "Know the network fees before sending to avoid overpaying or stuck transactions",
        importance: 'Recommended',
        icon: DollarSign
      },
      {
        title: "Use Secure Networks",
        description: "Avoid public WiFi for crypto transactions - use your mobile data or secure home network",
        importance: 'Important',
        icon: Wifi
      }
    ]
  }
];

const faqData: FAQItem[] = [
  {
    question: "What's the biggest risk when investing in cryptocurrency?",
    answer: "The biggest risk is market volatility - cryptocurrency prices can drop dramatically and quickly. You could lose 50% or more of your investment in a matter of days. This is why you should only invest money you can afford to lose completely.",
    category: 'risks'
  },
  {
    question: "How can I protect myself from crypto scams?",
    answer: "Never share your private keys or seed phrases with anyone. Be extremely skeptical of guaranteed returns or 'get rich quick' schemes. Only use reputable, licensed exchanges. If something sounds too good to be true, it probably is.",
    category: 'scams'
  },
  {
    question: "Is it safe to keep my crypto on an exchange?",
    answer: "It's generally not recommended to keep large amounts on exchanges for extended periods. Exchanges can be hacked, go bankrupt, or freeze accounts. For small amounts you're actively trading, it's usually fine, but for long-term storage, use a personal wallet.",
    category: 'security'
  },
  {
    question: "What should I do if I think I've been scammed?",
    answer: "If you've been scammed, report it to local authorities and the exchange involved. Unfortunately, cryptocurrency transactions are usually irreversible, so prevention is much better than trying to recover lost funds. Document everything and warn others about the scam.",
    category: 'scams'
  },
  {
    question: "How do I know if a cryptocurrency exchange is legitimate?",
    answer: "Check if the exchange is licensed by the BSP in the Philippines. Look for proper security measures like 2FA, insurance coverage, and transparent fee structures. Read reviews from other users and verify the company's registration and regulatory compliance.",
    category: 'security'
  },
  {
    question: "What's the difference between hot and cold wallets?",
    answer: "Hot wallets are connected to the internet (like mobile apps or web wallets) - convenient but more vulnerable to hacking. Cold wallets are offline (like hardware wallets or paper wallets) - less convenient but much more secure for long-term storage.",
    category: 'security'
  },
  {
    question: "Should I invest in new or unknown cryptocurrencies?",
    answer: "New cryptocurrencies are extremely risky and many turn out to be scams or fail completely. If you're a beginner, stick to well-established cryptocurrencies like Bitcoin and Ethereum. Only consider new projects after thorough research and with money you can afford to lose.",
    category: 'risks'
  },
  {
    question: "How much of my savings should I put into cryptocurrency?",
    answer: "Financial experts generally recommend no more than 5-10% of your total investment portfolio in cryptocurrency, and only money you can afford to lose completely. Never invest your emergency fund, money needed for daily expenses, or borrowed money.",
    category: 'best-practices'
  }
];

const philippineSecurityLandscape = [
  {
    title: "BSP Regulations",
    description: "Bangko Sentral ng Pilipinas provides oversight and licensing for crypto exchanges",
    status: "Active",
    impact: "Positive",
    details: [
      "Licensed exchanges must follow strict security standards",
      "Consumer protection measures in place",
      "Regular audits and compliance checks",
      "Clear guidelines for anti-money laundering"
    ]
  },
  {
    title: "Local Exchange Security",
    description: "Philippine crypto exchanges implement advanced security measures",
    status: "Improving",
    impact: "Positive",
    details: [
      "Multi-signature wallet implementations",
      "Cold storage for customer funds",
      "Insurance coverage for digital assets",
      "Regular security audits and penetration testing"
    ]
  },
  {
    title: "Consumer Education",
    description: "Ongoing efforts to educate Filipinos about crypto security",
    status: "Growing",
    impact: "Positive",
    details: [
      "Government-backed awareness campaigns",
      "Exchange-provided educational resources",
      "Community-driven security initiatives",
      "Integration with existing financial literacy programs"
    ]
  }
];

export function RisksSecurityContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [selectedRiskCategory, setSelectedRiskCategory] = useState<string>('all');

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const faqCategories = [
    { id: 'risks', name: 'Investment Risks', icon: TrendingDown, color: 'text-red-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'text-blue-600' },
    { id: 'scams', name: 'Scams', icon: AlertTriangle, color: 'text-orange-600' },
    { id: 'best-practices', name: 'Best Practices', icon: CheckCircle, color: 'text-green-600' }
  ];

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'bg-red-500 text-white';
      case 'Medium':
        return 'bg-yellow-500 text-white';
      case 'Low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Critical':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
      case 'Important':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Recommended':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Crypto Risks & Security
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Learn about cryptocurrency risks and security best practices. Understand the potential dangers 
          and how to protect yourself when investing in digital assets.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">{securityRisks.length}</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Risk Types</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">20</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Security Tips</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">0</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Prerequisites</div>
          </div>
        </div>
      </div>

      {/* Important Warning */}
      <Card className="rounded-2xl bg-gradient-to-r from-red-50 to-rose-100 dark:from-red-950/20 dark:to-rose-900/20 border border-red-200 dark:border-red-800 shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-red-900 dark:text-red-100 mb-3 font-[var(--font-display)]">
                ⚠️ Critical Warning: Read This First
              </h2>
              <div className="space-y-3 text-red-800 dark:text-red-200">
                <p className="text-lg leading-relaxed">
                  <strong>Cryptocurrency is extremely risky.</strong> You can lose all your money quickly. 
                  Many people have lost their life savings investing in cryptocurrency.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-bold">❌ Never Do This:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Invest money you need for daily expenses</li>
                      <li>• Borrow money to buy cryptocurrency</li>
                      <li>• Invest your emergency fund</li>
                      <li>• Put all your savings into crypto</li>
                      <li>• Believe promises of guaranteed returns</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold">✅ Always Do This:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Only invest money you can afford to lose</li>
                      <li>• Start with very small amounts</li>
                      <li>• Learn before you invest</li>
                      <li>• Use reputable, licensed exchanges</li>
                      <li>• Keep detailed records for taxes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Major Risk Categories */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <TrendingDown className="h-8 w-8 text-white" />
            </div>
            <span>Major Cryptocurrency Risks</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {securityRisks.map((risk, index) => (
              <Card key={index} className={cn("rounded-2xl shadow-lg", risk.bgColor)}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-white/80 dark:bg-black/20 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <risk.icon className={cn("h-8 w-8", risk.color)} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-2xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                          {risk.name}
                        </h3>
                        <Badge className={cn("rounded-xl", getRiskLevelColor(risk.riskLevel))}>
                          {risk.riskLevel} Risk
                        </Badge>
                      </div>
                      
                      <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                        {risk.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                            <XCircle className="h-5 w-5 text-red-500" />
                            <span>Examples of This Risk</span>
                          </h4>
                          <ul className="space-y-2">
                            {risk.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="flex items-start space-x-2 text-sm text-[var(--color-text-secondary)]">
                                <div className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-[var(--color-text-primary)] mb-3 flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>How to Protect Yourself</span>
                          </h4>
                          <ul className="space-y-2">
                            {risk.prevention.map((prevention, preventionIndex) => (
                              <li key={preventionIndex} className="flex items-start space-x-2 text-sm text-[var(--color-text-secondary)]">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{prevention}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Common Scams */}
      <Card className="rounded-2xl bg-gradient-to-r from-orange-50 to-amber-100 dark:from-orange-950/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-orange-900 dark:text-orange-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl shadow-lg">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <span>Common Cryptocurrency Scams</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {commonScams.map((scam, index) => (
              <div key={index} className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", getRiskLevelColor(scam.riskLevel))}>
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                  <h4 className="text-lg font-bold text-orange-900 dark:text-orange-100">
                    {scam.name}
                  </h4>
                </div>
                
                <p className="text-orange-800 dark:text-orange-200 mb-4 leading-relaxed">
                  {scam.description}
                </p>
                
                <div className="space-y-3">
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Warning Signs:</h5>
                  <ul className="space-y-1">
                    {scam.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start space-x-2 text-sm text-orange-700 dark:text-orange-300">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Best Practices */}
      <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <span>Security Best Practices</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {securityTips.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 font-[var(--font-display)]">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="p-4 bg-white/50 dark:bg-black/20 rounded-xl">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <tip.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-semibold text-green-900 dark:text-green-100">
                              {tip.title}
                            </h4>
                            <Badge className={cn("text-xs", getImportanceColor(tip.importance))}>
                              {tip.importance}
                            </Badge>
                          </div>
                          <p className="text-sm text-green-700 dark:text-green-300 leading-relaxed">
                            {tip.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Philippine Security Landscape */}
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
            <span>Security in the Philippines</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {philippineSecurityLandscape.map((item, index) => (
              <div key={index} className="p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <h4 className="text-xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
                    {item.title}
                  </h4>
                  <Badge 
                    variant="secondary"
                    className={cn(
                      "text-xs",
                      item.impact === 'Positive' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                    )}
                  >
                    {item.status}
                  </Badge>
                </div>
                
                <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {item.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--color-text-secondary)]">{detail}</span>
                    </div>
                  ))}
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
                          <div className={cn("p-2 rounded-lg", category.color.includes('red') ? 'bg-red-100 dark:bg-red-900/30' : category.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/30' : category.color.includes('orange') ? 'bg-orange-100 dark:bg-orange-900/30' : 'bg-green-100 dark:bg-green-900/30')}>
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

      {/* Emergency Response Guide */}
      <Card className="rounded-2xl bg-gradient-to-r from-red-50 to-pink-100 dark:from-red-950/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-red-900 dark:text-red-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl shadow-lg">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <span>If Something Goes Wrong</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-red-800 dark:text-red-200 leading-relaxed">
            <p className="mb-4">
              If you suspect you've been scammed, your account has been compromised, or you've made a mistake, 
              here's what to do immediately:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-red-900 dark:text-red-100 flex items-center space-x-2">
                <Clock className="h-6 w-6" />
                <span>Immediate Actions</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-900 dark:text-red-100 mb-1">Stop All Activity</h5>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Immediately stop any crypto-related activities and don't send more money
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-900 dark:text-red-100 mb-1">Secure Your Accounts</h5>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Change passwords, enable 2FA, and move funds to secure wallets
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-900 dark:text-red-100 mb-1">Document Everything</h5>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Take screenshots, save emails, and record all relevant information
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-red-900 dark:text-red-100 flex items-center space-x-2">
                <Building2 className="h-6 w-6" />
                <span>Who to Contact</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">Philippine Authorities</h5>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Bangko Sentral ng Pilipinas (BSP)</li>
                    <li>• Philippine National Police - Anti-Cybercrime Group</li>
                    <li>• Department of Trade and Industry (DTI)</li>
                    <li>• Securities and Exchange Commission (SEC)</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">Exchange Support</h5>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Contact your exchange's customer support immediately</li>
                    <li>• File a formal complaint if necessary</li>
                    <li>• Request account freezing if compromised</li>
                    <li>• Ask for transaction reversal if possible</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2">Community Resources</h5>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Report scams to crypto community forums</li>
                    <li>• Share your experience to warn others</li>
                    <li>• Seek advice from experienced crypto users</li>
                    <li>• Join legitimate crypto education groups</li>
                  </ul>
                </div>
              </div>
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
            Key Security Takeaways
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">Essential Security Rules:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Never share your private keys or seed phrases with anyone</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Use hardware wallets for significant amounts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Enable 2FA on all crypto accounts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Only use reputable, licensed exchanges</span>
                </li>
              </ul>
            </div>
            
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">Risk Management:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Only invest money you can afford to lose completely</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Diversify your investments across different assets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Start small and learn as you go</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Stay informed about security threats and best practices</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]">
              Remember: Security is Your Responsibility
            </h4>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Unlike traditional banking, there's no customer service to call if you lose your cryptocurrency. 
              You are your own bank, which means you're responsible for keeping your assets safe. 
              Take security seriously from day one!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline"
                className="rounded-xl border-[var(--color-primary-brand)] text-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)] hover:text-white"
                asChild
              >
                <a href="/wallets/hardware">
                  Hardware Wallets Guide
                </a>
              </Button>
              <Button 
                className="rounded-xl bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                asChild
              >
                <a href="/exchanges/philippines">
                  Safe Philippine Exchanges
                </a>
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
              <Shield className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Security Guide • {securityRisks.length} risks covered
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}