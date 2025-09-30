"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Wallet, CreditCard, ShoppingCart, Smartphone, Globe, Zap, Shield, Users, ArrowRight, CheckCircle, AlertTriangle, Info, Star, Coins, Send, RadioReceiver as Receive, QrCode, Building2, Plane, Coffee, Gamepad2, Music, ShoppingBag, Car, Home, Utensils, Gift, Heart, ChevronDown, ChevronUp, Target, Lightbulb, BookOpen, Award, MapPin, Clock, DollarSign, TrendingUp, Lock, Eye, Fingerprint, Key, Database, Network, Cpu, Smartphone as Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  category: 'basics' | 'wallets' | 'payments' | 'security';
}

const faqData: FAQItem[] = [
  {
    question: "How do I actually use cryptocurrency to buy things?",
    answer: "Using crypto to buy things is similar to using a digital wallet like GCash. You open your crypto wallet app, scan a QR code or enter the merchant's wallet address, enter the amount, and confirm the transaction. The payment is usually processed within seconds to minutes.",
    category: 'basics'
  },
  {
    question: "What's the difference between hot and cold wallets?",
    answer: "A hot wallet is connected to the internet (like apps on your phone) - convenient for daily use but slightly less secure. A cold wallet is offline (like a hardware device) - more secure for storing large amounts but less convenient for frequent transactions.",
    category: 'wallets'
  },
  {
    question: "Can I use cryptocurrency to pay bills in the Philippines?",
    answer: "Yes! Some utility companies and service providers in the Philippines now accept cryptocurrency payments. You can also use crypto-to-peso conversion services to pay traditional bills, or use crypto debit cards that automatically convert crypto to pesos.",
    category: 'payments'
  },
  {
    question: "What happens if I send crypto to the wrong address?",
    answer: "Unfortunately, cryptocurrency transactions are irreversible. If you send crypto to the wrong address, you cannot get it back unless the person who controls that address sends it back to you. This is why it's crucial to double-check addresses before sending.",
    category: 'security'
  },
  {
    question: "How long do crypto transactions take?",
    answer: "It depends on the cryptocurrency. Bitcoin transactions typically take 10-60 minutes, Ethereum takes 1-5 minutes, while newer blockchains like Solana can process transactions in seconds. The speed also depends on network congestion and fees paid.",
    category: 'basics'
  },
  {
    question: "Do I need different wallets for different cryptocurrencies?",
    answer: "Not necessarily! Many modern wallets support multiple cryptocurrencies. For example, MetaMask supports Ethereum and all Ethereum-based tokens, while multi-currency wallets like Trust Wallet can hold Bitcoin, Ethereum, and many other cryptocurrencies in one app.",
    category: 'wallets'
  },
  {
    question: "Are there fees when using cryptocurrency for payments?",
    answer: "Yes, there are usually small network fees (called gas fees or transaction fees) when sending cryptocurrency. These fees go to the network validators, not to any company. Fees are typically much lower than traditional international wire transfers.",
    category: 'payments'
  },
  {
    question: "How do I keep my cryptocurrency safe from hackers?",
    answer: "Use strong, unique passwords, enable two-factor authentication, never share your private keys or seed phrases, only use official wallet apps, and consider using a hardware wallet for large amounts. Always verify website URLs and be cautious of phishing attempts.",
    category: 'security'
  }
];

const cryptoUseCases = [
  {
    icon: Send,
    title: "Send Money Anywhere",
    description: "Send cryptocurrency to anyone in the world instantly, 24/7, without banks or borders.",
    examples: [
      "Send money to family overseas",
      "Pay freelancers in other countries",
      "Split bills with international friends",
      "Emergency money transfers"
    ],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
  },
  {
    icon: ShoppingCart,
    title: "Online Shopping",
    description: "Buy products and services from thousands of online merchants that accept cryptocurrency.",
    examples: [
      "Purchase electronics and gadgets",
      "Buy digital products and software",
      "Subscribe to online services",
      "Shop on international websites"
    ],
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
  },
  {
    icon: Coffee,
    title: "Local Payments",
    description: "Pay at physical stores, restaurants, and businesses that accept cryptocurrency payments.",
    examples: [
      "Coffee shops and restaurants",
      "Retail stores and boutiques",
      "Service providers",
      "Local businesses"
    ],
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900"
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    description: "Book flights, hotels, and travel services using cryptocurrency for seamless international travel.",
    examples: [
      "Flight bookings",
      "Hotel reservations",
      "Car rentals",
      "Travel insurance"
    ],
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900"
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    description: "Purchase in-game items, digital content, and entertainment services with cryptocurrency.",
    examples: [
      "In-game purchases",
      "Digital collectibles (NFTs)",
      "Streaming subscriptions",
      "Gaming platforms"
    ],
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900"
  },
  {
    icon: TrendingUp,
    title: "Investment & Savings",
    description: "Use cryptocurrency as a store of value, investment vehicle, or alternative savings method.",
    examples: [
      "Long-term investment holding",
      "DeFi yield farming",
      "Staking rewards",
      "Portfolio diversification"
    ],
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900"
  }
];

const walletTypes = [
  {
    icon: Phone,
    type: "Mobile Wallets",
    description: "Apps on your smartphone for everyday crypto use",
    examples: ["MetaMask", "Trust Wallet", "Coinbase Wallet", "Phantom"],
    pros: ["Easy to use", "Always with you", "Quick payments", "QR code scanning"],
    cons: ["Connected to internet", "Phone dependency", "Screen size limits"],
    bestFor: "Daily transactions and small amounts",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
  },
  {
    icon: Cpu,
    type: "Desktop Wallets",
    description: "Software installed on your computer for better security",
    examples: ["Electrum", "Exodus", "Atomic Wallet", "Wasabi"],
    pros: ["More secure", "Better features", "Larger screen", "Full control"],
    cons: ["Computer dependency", "Setup complexity", "Less portable"],
    bestFor: "Medium amounts and regular trading",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
  },
  {
    icon: Lock,
    type: "Hardware Wallets",
    description: "Physical devices that store your crypto offline for maximum security",
    examples: ["Ledger Nano", "Trezor", "KeepKey", "BitBox"],
    pros: ["Maximum security", "Offline storage", "Hack resistant", "Long-term storage"],
    cons: ["Costs money", "Can be lost", "Setup complexity", "Less convenient"],
    bestFor: "Large amounts and long-term storage",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900"
  },
  {
    icon: Globe,
    type: "Web Wallets",
    description: "Online wallets accessible through web browsers",
    examples: ["Blockchain.info", "MyEtherWallet", "MyCrypto", "Guarda"],
    pros: ["Access anywhere", "No downloads", "Easy backup", "Multi-device"],
    cons: ["Internet dependency", "Third-party risk", "Less secure", "Browser issues"],
    bestFor: "Occasional use and beginners",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900"
  }
];

const paymentSteps = [
  {
    step: 1,
    title: "Open Your Wallet",
    description: "Launch your cryptocurrency wallet app on your phone or computer",
    icon: Smartphone,
    details: "Make sure your wallet has sufficient balance for the payment plus network fees"
  },
  {
    step: 2,
    title: "Scan QR Code or Enter Address",
    description: "Use your wallet's camera to scan the merchant's QR code or manually enter their wallet address",
    icon: QrCode,
    details: "Double-check the address is correct - crypto transactions cannot be reversed"
  },
  {
    step: 3,
    title: "Enter Payment Amount",
    description: "Input the exact amount requested by the merchant in the correct cryptocurrency",
    icon: DollarSign,
    details: "Some wallets can convert between currencies to show you the peso equivalent"
  },
  {
    step: 4,
    title: "Review Transaction Details",
    description: "Verify the recipient address, amount, and estimated network fees before proceeding",
    icon: Eye,
    details: "Take your time to review - this is your last chance to catch any errors"
  },
  {
    step: 5,
    title: "Confirm and Send",
    description: "Authorize the transaction using your wallet's security method (PIN, biometric, etc.)",
    icon: Fingerprint,
    details: "The transaction will be broadcast to the blockchain network for processing"
  },
  {
    step: 6,
    title: "Wait for Confirmation",
    description: "Monitor the transaction status until it receives enough network confirmations",
    icon: Clock,
    details: "Most payments are confirmed within minutes, but times vary by cryptocurrency"
  }
];

const globalAcceptance = [
  {
    category: "E-commerce Giants",
    icon: ShoppingBag,
    businesses: [
      { name: "Microsoft", service: "Xbox games and apps", crypto: ["BTC"] },
      { name: "Overstock", service: "Furniture and home goods", crypto: ["BTC", "ETH"] },
      { name: "Newegg", service: "Electronics and computer parts", crypto: ["BTC", "ETH", "DOGE"] },
      { name: "Shopify Stores", service: "Thousands of online stores", crypto: ["BTC", "ETH", "LTC"] }
    ],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
  },
  {
    category: "Travel & Hospitality",
    icon: Plane,
    businesses: [
      { name: "Expedia", service: "Hotels and flights", crypto: ["BTC"] },
      { name: "CheapAir", service: "Flight bookings", crypto: ["BTC", "ETH", "LTC"] },
      { name: "Travala", service: "Hotels worldwide", crypto: ["BTC", "ETH", "BNB"] },
      { name: "Alternative Airlines", service: "Flight tickets", crypto: ["BTC", "ETH"] }
    ],
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
  },
  {
    category: "Food & Dining",
    icon: Utensils,
    businesses: [
      { name: "Subway", service: "Sandwiches (select locations)", crypto: ["BTC"] },
      { name: "KFC", service: "Fast food (select countries)", crypto: ["BTC"] },
      { name: "Pizza Hut", service: "Pizza delivery (select areas)", crypto: ["BTC"] },
      { name: "Local Restaurants", service: "Many independent restaurants", crypto: ["BTC", "ETH"] }
    ],
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900"
  },
  {
    category: "Entertainment & Media",
    icon: Music,
    businesses: [
      { name: "Twitch", service: "Live streaming tips", crypto: ["BTC", "ETH"] },
      { name: "AMC Theaters", service: "Movie tickets", crypto: ["BTC", "ETH", "DOGE"] },
      { name: "Dallas Mavericks", service: "NBA team merchandise", crypto: ["DOGE"] },
      { name: "Tesla", service: "Electric vehicles (periodically)", crypto: ["BTC"] }
    ],
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900"
  },
  {
    category: "Gaming & Digital",
    icon: Gamepad2,
    businesses: [
      { name: "Steam", service: "PC games (via third-party)", crypto: ["BTC", "ETH"] },
      { name: "Epic Games", service: "Game purchases", crypto: ["BTC"] },
      { name: "Roblox", service: "In-game currency", crypto: ["BTC"] },
      { name: "Mobile Games", service: "In-app purchases", crypto: ["BTC", "ETH"] }
    ],
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900"
  },
  {
    category: "Professional Services",
    icon: Building2,
    businesses: [
      { name: "Legal Firms", service: "Legal consultations", crypto: ["BTC", "ETH"] },
      { name: "Web Developers", service: "Website development", crypto: ["BTC", "ETH"] },
      { name: "Freelancers", service: "Various professional services", crypto: ["BTC", "ETH", "USDT"] },
      { name: "Consulting", service: "Business consulting", crypto: ["BTC", "ETH"] }
    ],
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900"
  }
];

const securityTips = [
  {
    icon: Shield,
    title: "Verify Addresses Carefully",
    description: "Always double-check wallet addresses before sending crypto - transactions cannot be reversed",
    importance: "Critical"
  },
  {
    icon: Lock,
    title: "Use Strong Security",
    description: "Enable two-factor authentication and use strong, unique passwords for all crypto accounts",
    importance: "Essential"
  },
  {
    icon: Key,
    title: "Backup Your Wallet",
    description: "Write down your seed phrase and store it safely - this is your only way to recover your wallet",
    importance: "Critical"
  },
  {
    icon: Eye,
    title: "Start with Small Amounts",
    description: "Test with small transactions first to make sure everything works correctly",
    importance: "Recommended"
  },
  {
    icon: Network,
    title: "Use Reputable Services",
    description: "Only use well-known wallets, exchanges, and services with good security track records",
    importance: "Essential"
  },
  {
    icon: AlertTriangle,
    title: "Beware of Scams",
    description: "Never share private keys or seed phrases, and be cautious of too-good-to-be-true offers",
    importance: "Critical"
  }
];

export function HowToUseCryptoContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const faqCategories = [
    { id: 'basics', name: 'Basics', icon: Lightbulb, color: 'text-blue-600' },
    { id: 'wallets', name: 'Wallets', icon: Wallet, color: 'text-green-600' },
    { id: 'payments', name: 'Payments', icon: CreditCard, color: 'text-purple-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          How to Use Cryptocurrency
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Learn how to use cryptocurrency in real life - from storing it safely in wallets to making payments 
          and transactions around the world. Your complete guide to practical crypto usage.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">6</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Use Cases</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">4</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Wallet Types</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">1000s</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Merchants</div>
          </div>
        </div>
      </div>

      {/* The Complete Crypto Journey */}
      <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-900 dark:text-blue-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <span>Your Complete Crypto Journey</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
            <p className="mb-4">
              Using cryptocurrency is like having <strong>digital money</strong> that you can send to anyone in the world instantly. 
              Think of it as a combination of your GCash wallet and international bank transfer, but faster and often cheaper.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">1. Buy Crypto</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Purchase cryptocurrency from exchanges like Coins.ph or PDAX
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Wallet className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">2. Store Safely</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Transfer to your personal wallet for security and full control
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">3. Use & Pay</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Send payments, shop online, or use crypto for various services
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Types */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <Wallet className="h-8 w-8 text-white" />
            </div>
            <span>Types of Crypto Wallets</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {walletTypes.map((wallet, index) => (
              <div key={index} className={cn("p-6 rounded-xl", wallet.bgColor)}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/80 dark:bg-black/20 rounded-2xl flex items-center justify-center shadow-lg">
                    <wallet.icon className={cn("h-8 w-8", wallet.color)} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
                      {wallet.type}
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {wallet.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-[var(--color-text-primary)] mb-2">Examples:</h5>
                    <div className="flex flex-wrap gap-1">
                      {wallet.examples.map((example) => (
                        <Badge key={example} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Pros
                      </h5>
                      <ul className="space-y-1">
                        {wallet.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="text-sm text-[var(--color-text-secondary)] flex items-start">
                            <span className="text-green-500 mr-1">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        Cons
                      </h5>
                      <ul className="space-y-1">
                        {wallet.cons.map((con, conIndex) => (
                          <li key={conIndex} className="text-sm text-[var(--color-text-secondary)] flex items-start">
                            <span className="text-red-500 mr-1">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-lg border-l-4 border-[var(--color-primary-brand)]">
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">
                      <strong>Best for:</strong> {wallet.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* How to Make Crypto Payments */}
      <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <span>How to Make Crypto Payments</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-green-800 dark:text-green-200 leading-relaxed">
            <p className="mb-4">
              Making a cryptocurrency payment is <strong>similar to sending money through GCash</strong>, 
              but instead of using pesos, you're sending digital currency directly to the recipient\'s wallet.
            </p>
          </div>

          <div className="grid gap-4">
            {paymentSteps.map((step, index) => (
              <div key={step.step} className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <step.icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <h4 className="font-bold text-green-900 dark:text-green-100">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-green-800 dark:text-green-200 mb-2">
                    {step.description}
                  </p>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>Tip:</strong> {step.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* What You Can Do With Crypto */}
      <Card className="rounded-2xl bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-lg">
              <Star className="h-8 w-8 text-white" />
            </div>
            <span>What You Can Do With Cryptocurrency</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cryptoUseCases.map((useCase, index) => (
              <div key={index} className={cn("p-6 rounded-xl", useCase.bgColor)}>
                <div className="w-16 h-16 bg-white/80 dark:bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <useCase.icon className={cn("h-8 w-8", useCase.color)} />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 text-center">
                  {useCase.title}
                </h4>
                <p className="text-[var(--color-text-secondary)] mb-4 text-center">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start space-x-2 text-sm text-[var(--color-text-secondary)]">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Where You Can Spend Crypto Globally */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <span>Where You Can Spend Crypto Globally</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalAcceptance.map((category, index) => (
              <div key={index} className={cn("p-6 rounded-xl", category.bgColor)}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/80 dark:bg-black/20 rounded-xl flex items-center justify-center shadow-lg">
                    <category.icon className={cn("h-6 w-6", category.color)} />
                  </div>
                  <h4 className="text-lg font-bold text-[var(--color-text-primary)]">
                    {category.category}
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {category.businesses.map((business, businessIndex) => (
                    <div key={businessIndex} className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold text-[var(--color-text-primary)] text-sm">
                          {business.name}
                        </h5>
                        <div className="flex space-x-1">
                          {business.crypto.map(crypto => (
                            <Badge key={crypto} variant="outline" className="text-xs font-mono">
                              {crypto}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        {business.service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Best Practices */}
      <Card className="rounded-2xl bg-gradient-to-r from-red-50 to-orange-100 dark:from-red-950/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-red-900 dark:text-red-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl shadow-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <span>Security Best Practices</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {securityTips.map((tip, index) => (
              <div key={index} className="p-6 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/80 dark:hover:bg-black/40 transition-colors group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <tip.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-bold text-red-900 dark:text-red-100 group-hover:text-[var(--color-primary-brand)] transition-colors">
                        {tip.title}
                      </h4>
                      <Badge 
                        variant="secondary"
                        className={cn(
                          "text-xs",
                          tip.importance === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                          tip.importance === 'Essential' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' :
                          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                        )}
                      >
                        {tip.importance}
                      </Badge>
                    </div>
                    <p className="text-red-800 dark:text-red-200 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Crypto vs Traditional Payments */}
      <Card className="rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-100 dark:from-teal-950/20 dark:to-cyan-900/20 border border-teal-200 dark:border-teal-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-teal-900 dark:text-teal-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl shadow-lg">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <span>Crypto vs Traditional Payments</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-teal-900 dark:text-teal-100 flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-red-500" />
                <span>Traditional Payments</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Bank Dependency</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Need bank accounts, credit cards, or payment processors
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">High International Fees</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    International transfers can cost $15-50 and take 3-5 business days
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Limited Hours</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Banks operate during business hours, weekends often excluded
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Geographic Restrictions</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Some countries and regions may be excluded from services
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-teal-900 dark:text-teal-100 flex items-center space-x-2">
                <Coins className="h-6 w-6 text-green-500" />
                <span>Cryptocurrency Payments</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Direct Peer-to-Peer</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Send directly to anyone with a crypto wallet, no intermediaries needed
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Low International Fees</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    International transfers typically cost $1-5 and complete in minutes
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">24/7 Availability</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Send and receive payments anytime, anywhere, including weekends
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Global Access</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Works anywhere in the world with internet connection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card className="rounded-2xl bg-gradient-to-r from-yellow-50 to-amber-100 dark:from-yellow-950/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-yellow-900 dark:text-yellow-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl shadow-lg">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <span>Real-World Examples</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">OFW Remittance</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Maria in Dubai sends Bitcoin to her family in Manila - arrives in 10 minutes instead of 3 days
                </p>
              </div>

              <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">Local Purchase</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Juan pays for coffee at a BGC café using Bitcoin Lightning Network - instant payment
                </p>
              </div>

              <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">Online Shopping</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Ana buys electronics from a US website using Ethereum - no currency conversion needed
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-xl border border-yellow-200 dark:border-yellow-700">
              <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center space-x-2">
                <Lightbulb className="h-5 w-5" />
                <span>Pro Tip: Start Small and Learn</span>
              </h4>
              <p className="text-yellow-800 dark:text-yellow-200 leading-relaxed">
                Begin with small amounts to get comfortable with the process. Try sending crypto between your own wallets first, 
                then make small purchases to build confidence. As you become more experienced, you can use crypto for larger 
                transactions and explore advanced features like DeFi and staking.
              </p>
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
                  <span className="text-[var(--color-text-secondary)]">Cryptocurrency can be used like digital money for payments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">You need a wallet to store and send cryptocurrency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Thousands of businesses worldwide accept crypto payments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Crypto payments are fast, global, and available 24/7</span>
                </li>
              </ul>
            </div>
            
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">Safety First:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Always verify addresses before sending crypto</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Start with small amounts to learn the process</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Keep your private keys and seed phrases secure</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Use reputable wallets and services only</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]">
              Ready to Start Using Crypto?
            </h4>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Now that you understand how to use cryptocurrency, you can start with small amounts and gradually 
              build your confidence. Remember to prioritize security and always continue learning!
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
              <CreditCard className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Usage Guide • 6 use cases • 4 wallet types
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}