"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Database,
  Link as LinkIcon,
  Shield,
  Users,
  Zap,
  Globe,
  Lock,
  CheckCircle,
  AlertTriangle,
  Info,
  Star,
  Cpu,
  Network,
  Clock,
  Eye,
  FileText,
  Building2,
  Smartphone,
  Heart,
  Gamepad2,
  ChevronDown,
  ChevronUp,
  Blocks,
  Hash,
  Vote,
  Key,
  Server,
  ArrowRight,
  Target,
  Lightbulb,
  BookOpen,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  category: 'basics' | 'technical' | 'applications' | 'security';
}

const faqData: FAQItem[] = [
  {
    question: "What exactly is blockchain?",
    answer: "Blockchain is like a digital notebook that's shared among thousands of computers around the world. Every time someone writes something new in the notebook, all the computers check to make sure it's correct before adding it permanently. Once something is written, it can never be erased or changed.",
    category: 'basics'
  },
  {
    question: "How is blockchain different from a regular database?",
    answer: "A regular database is like a filing cabinet controlled by one person or company. Blockchain is like having thousands of identical filing cabinets owned by different people, and they all must agree before adding any new information. This makes it much more secure and trustworthy.",
    category: 'basics'
  },
  {
    question: "Is blockchain technology safe?",
    answer: "Yes, blockchain is extremely safe because of its design. Since thousands of computers verify every transaction and keep identical copies of all records, it's nearly impossible for hackers to fake or steal information. Even if some computers are attacked, the majority will reject any false information.",
    category: 'security'
  },
  {
    question: "What are the main parts of a blockchain?",
    answer: "A blockchain has three main parts: 1) Blocks - containers that hold transaction information, 2) Chain - the connection between blocks that keeps them in order, and 3) Network - thousands of computers that verify and store the information.",
    category: 'technical'
  },
  {
    question: "Can blockchain be used for things other than cryptocurrency?",
    answer: "Absolutely! Blockchain can track supply chains (knowing where your food came from), store medical records securely, verify digital identities, manage real estate transactions, and even power video games. Cryptocurrency was just the first application.",
    category: 'applications'
  },
  {
    question: "Who controls the blockchain?",
    answer: "No single person or company controls blockchain - that's the point! It's controlled by the network of computers (called nodes) that participate in maintaining it. Decisions are made through consensus, meaning the majority must agree on any changes.",
    category: 'basics'
  },
  {
    question: "How does blockchain prevent fraud?",
    answer: "Blockchain prevents fraud through transparency and verification. Every transaction is visible to everyone, and thousands of computers must agree it's valid before it's added. If someone tries to cheat, the network will reject their false information because it doesn't match what everyone else has recorded.",
    category: 'security'
  },
  {
    question: "Is blockchain technology legal in the Philippines?",
    answer: "Yes, blockchain technology is legal and encouraged in the Philippines. The government recognizes its potential for improving financial services, supply chain management, and digital identity systems. The BSP and other agencies are actively exploring blockchain applications.",
    category: 'applications'
  }
];

const blockchainComponents = [
  {
    icon: Blocks,
    term: "Blocks",
    definition: "Digital containers that store transaction information. Think of them as pages in a notebook, where each page contains a list of transactions.",
    example: "A block might contain 100 transactions showing who sent money to whom, all bundled together with a timestamp."
  },
  {
    icon: LinkIcon,
    term: "Chain",
    definition: "The connection between blocks that keeps them in chronological order. Each block is linked to the previous one, creating an unbreakable chain.",
    example: "Like a chain of paper clips where each clip is connected to the next one - you can't remove one without breaking the chain."
  },
  {
    icon: Network,
    term: "Network",
    definition: "Thousands of computers around the world that store identical copies of the blockchain and verify new transactions.",
    example: "Imagine 10,000 people each keeping the same notebook and checking each other's work to make sure everything matches."
  },
  {
    icon: Hash,
    term: "Hash",
    definition: "A unique digital fingerprint for each block. If anything in the block changes, the fingerprint changes too, alerting the network.",
    example: "Like a special seal on an envelope - if someone opens it and reseals it, you can tell it's been tampered with."
  },
  {
    icon: Vote,
    term: "Consensus",
    definition: "The process where the network agrees on what information is correct. The majority must agree before anything is added to the blockchain.",
    example: "Like a jury vote - the majority must agree on the verdict before a decision is final."
  },
  {
    icon: Key,
    term: "Cryptography",
    definition: "Advanced mathematics that secures the blockchain and protects user information. It's like an unbreakable code that keeps data safe.",
    example: "Similar to how your ATM PIN protects your bank account, but much more sophisticated and secure."
  }
];

const realWorldApplications = [
  {
    icon: Smartphone,
    title: "Digital Money",
    description: "Cryptocurrencies like Bitcoin use blockchain to create digital money that works without banks.",
    examples: [
      "Send money anywhere in the world instantly",
      "No need for bank accounts or credit cards",
      "Lower fees for international transfers",
      "24/7 availability, no banking hours"
    ],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
  },
  {
    icon: Building2,
    title: "Supply Chain Tracking",
    description: "Track products from creation to your hands, ensuring authenticity and quality.",
    examples: [
      "Know exactly where your food was grown",
      "Verify that luxury goods are authentic",
      "Track medicine to prevent counterfeits",
      "Ensure ethical sourcing of products"
    ],
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
  },
  {
    icon: Eye,
    title: "Digital Identity",
    description: "Secure digital IDs that you control, without relying on government or company databases.",
    examples: [
      "Prove your identity without showing documents",
      "Control who sees your personal information",
      "Prevent identity theft and fraud",
      "Access services without multiple passwords"
    ],
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900"
  },
  {
    icon: Heart,
    title: "Healthcare Records",
    description: "Secure medical records that you own and can share with any doctor or hospital.",
    examples: [
      "Your medical history follows you anywhere",
      "Doctors can access your records instantly",
      "Prevent medical errors and drug interactions",
      "Keep your health data private and secure"
    ],
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900"
  },
  {
    icon: FileText,
    title: "Property Records",
    description: "Transparent and tamper-proof property ownership records that prevent fraud.",
    examples: [
      "Prove you own your house or land",
      "Prevent property fraud and disputes",
      "Faster property transfers and sales",
      "Clear ownership history for any property"
    ],
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900"
  },
  {
    icon: Gamepad2,
    title: "Gaming & Digital Assets",
    description: "Own digital items in games that you can trade, sell, or use across different games.",
    examples: [
      "Truly own your game characters and items",
      "Trade game assets with other players",
      "Use items across multiple games",
      "Earn real money from gaming achievements"
    ],
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900"
  }
];

const philippineStats = [
  {
    label: "Government Initiatives",
    value: "15+",
    description: "Blockchain projects by Philippine agencies"
  },
  {
    label: "Local Companies",
    value: "200+",
    description: "Filipino businesses exploring blockchain"
  },
  {
    label: "University Partnerships",
    value: "25+",
    description: "Educational institutions teaching blockchain"
  },
  {
    label: "Blockchain Developers",
    value: "5,000+",
    description: "Filipino developers working on blockchain"
  }
];

export function BlockchainBasicsContent() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId);
  };

  const faqCategories = [
    { id: 'basics', name: 'Basics', icon: Lightbulb, color: 'text-blue-600' },
    { id: 'technical', name: 'Technical', icon: Cpu, color: 'text-green-600' },
    { id: 'applications', name: 'Applications', icon: Target, color: 'text-purple-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-primary-brand)] bg-clip-text text-transparent">
          Blockchain Basics
        </h1>
        
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed">
          Learn the fundamentals of blockchain technology in simple, easy-to-understand terms. 
          Perfect for complete beginners who want to understand the technology behind cryptocurrency.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">6</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Key Concepts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">12</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Min Read</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[var(--color-primary-brand)]">0</div>
            <div className="text-sm text-[var(--color-text-secondary)]">Prerequisites</div>
          </div>
        </div>
      </div>

      {/* What is Blockchain Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-900 dark:text-blue-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <Database className="h-8 w-8 text-white" />
            </div>
            <span>What is Blockchain?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-blue-800 dark:text-blue-200 leading-relaxed">
            <p className="mb-4">
              <strong>Blockchain is like a digital notebook</strong> that's shared among thousands of computers around the world. 
              But unlike a regular notebook, once something is written in it, it can never be erased or changed.
            </p>
            <p className="mb-4">
              Imagine if you and 10,000 other people each had an identical notebook. Every time someone wants to add a new page, 
              everyone checks their notebook to make sure the information is correct. Only when the majority agrees is the new page added to everyone's notebook.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Server className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Distributed Storage</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Information is stored on thousands of computers, not just one
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Immutable Records</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Once information is added, it cannot be changed or deleted
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Transparent</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                All transactions are visible and can be verified by anyone
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Does Blockchain Work Section */}
      <Card className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-green-900 dark:text-green-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <span>How Does Blockchain Work?</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-green-800 dark:text-green-200 leading-relaxed">
            <p className="mb-4">
              Think of blockchain like a <strong>chain of paper clips</strong>, where each clip represents a block of information. 
              Once you connect the clips, you can't remove one from the middle without breaking the entire chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-900 dark:text-green-100 flex items-center space-x-2">
                <CheckCircle className="h-6 w-6" />
                <span>Step-by-Step Process</span>
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Transaction Initiated</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Someone wants to send digital money or information to another person
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Network Verification</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Thousands of computers check if the transaction is valid and legitimate
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Block Creation</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Verified transactions are bundled together into a new block
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-100 mb-1">Chain Addition</h5>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      The new block is permanently added to the chain and distributed to all computers
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
                    <span className="font-semibold text-green-900 dark:text-green-100">Majority Consensus</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    More than half of the network must agree before any change is made
                  </p>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Cryptographic Security</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Advanced mathematics protects all information from tampering
                  </p>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Distributed Copies</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Thousands of identical copies make it impossible to hack or destroy
                  </p>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900 dark:text-green-100">Transparent Verification</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Anyone can verify transactions, making fraud nearly impossible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Components */}
      <Card className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-muted-subtle)] shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-[var(--color-primary-brand)] rounded-xl shadow-lg">
              <Blocks className="h-8 w-8 text-white" />
            </div>
            <span>Key Components of Blockchain</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {blockchainComponents.map((component, index) => (
              <div key={index} className="p-6 bg-[var(--color-muted-subtle)] rounded-xl hover:bg-[var(--color-muted-subtle)]/80 transition-colors group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[var(--color-primary-brand)] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    <component.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary-brand)] transition-colors">
                      {component.term}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                      {component.definition}
                    </p>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>Example:</strong> {component.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-World Applications */}
      <Card className="rounded-2xl bg-gradient-to-r from-purple-50 to-violet-100 dark:from-purple-950/20 dark:to-violet-900/20 border border-purple-200 dark:border-purple-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-purple-900 dark:text-purple-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl shadow-lg">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <span>Real-World Applications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realWorldApplications.map((application, index) => (
              <div key={index} className={cn("p-6 rounded-xl", application.bgColor)}>
                <div className="w-16 h-16 bg-white/80 dark:bg-black/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <application.icon className={cn("h-8 w-8", application.color)} />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 text-center">
                  {application.title}
                </h4>
                <p className="text-[var(--color-text-secondary)] mb-4 text-center">
                  {application.description}
                </p>
                <ul className="space-y-2">
                  {application.examples.map((example, exampleIndex) => (
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

      {/* Traditional vs Blockchain */}
      <Card className="rounded-2xl bg-gradient-to-r from-orange-50 to-amber-100 dark:from-orange-950/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-orange-900 dark:text-orange-100 font-[var(--font-display)] flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl shadow-lg">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <span>Traditional Systems vs Blockchain</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-red-500" />
                <span>Traditional Systems</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Centralized Control</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    One company or government controls all the data and can change or delete it
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Single Point of Failure</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    If the main server goes down, the entire system stops working
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Limited Transparency</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    You have to trust the company to handle your data correctly
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">Slower Processing</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Transactions often take days, especially for international transfers
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-orange-900 dark:text-orange-100 flex items-center space-x-2">
                <Network className="h-6 w-6 text-green-500" />
                <span>Blockchain Systems</span>
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Decentralized Network</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    No single entity controls the system - it's managed by the entire network
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Highly Resilient</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Even if thousands of computers fail, the system continues working
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">Complete Transparency</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    All transactions are visible and can be verified by anyone
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">24/7 Operation</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Works around the clock with near-instant global transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Philippine Blockchain Landscape */}
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
            <span>Blockchain in the Philippines</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-lg text-[var(--color-text-primary)] leading-relaxed">
            <p className="mb-4">
              The Philippines is embracing blockchain technology across various sectors! 
              From government services to private companies, blockchain is being used to improve transparency, efficiency, and security.
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
            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Government Services</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Digital identity, land records, and transparent government transactions
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Fintech Innovation</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Digital payments, remittances, and financial inclusion solutions
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 dark:bg-black/20 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-2">Education & Research</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Universities teaching blockchain and companies researching applications
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
                  <span className="text-[var(--color-text-secondary)]">Blockchain is a shared digital notebook that can't be changed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">It's controlled by thousands of computers, not one company</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">All transactions are transparent and verifiable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">It can be used for much more than just cryptocurrency</span>
                </li>
              </ul>
            </div>
            
            <div className="text-left space-y-3">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">Why It Matters:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Creates trust without needing to trust any single party</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Reduces costs by eliminating middlemen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Enables new types of applications and services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">Provides financial access to underserved populations</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]">
              Ready to Explore More?
            </h4>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Now that you understand blockchain basics, you can explore how it powers cryptocurrency, 
              smart contracts, and other innovative applications. The future is being built on blockchain technology!
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
              <Database className="h-4 w-4 text-[var(--color-primary-brand)]" />
              <span className="text-[var(--color-text-secondary)]">
                Blockchain Guide • 6 key concepts
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}