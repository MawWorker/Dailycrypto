import { NewsPost, Author } from '@/lib/types';

// Enhanced authors for featured news content
export const featuredNewsAuthors: Author[] = [
  {
    id: 'fn-1',
    name: 'Alexandra Chen',
    bio: 'Senior cryptocurrency journalist with 10+ years covering global markets and institutional adoption trends.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Senior Editor',
    socials: {
      twitter: '@alexchen_crypto',
      linkedin: 'alexandra-chen-crypto'
    }
  },
  {
    id: 'fn-2',
    name: 'Dr. Sarah Kim',
    bio: 'Blockchain technology researcher and DeFi protocol analyst with PhD in Computer Science.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Technology Correspondent',
    socials: {
      twitter: '@drsarahkim_tech',
      linkedin: 'dr-sarah-kim-blockchain'
    }
  },
  {
    id: 'fn-3',
    name: 'Roberto Valdez',
    bio: 'Philippine market specialist and former BSP analyst covering local cryptocurrency regulations and adoption.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Market Analyst',
    socials: {
      twitter: '@roberto_crypto_ph'
    }
  },
  {
    id: 'fn-4',
    name: 'Marcus Thompson',
    bio: 'Investigative journalist specializing in cryptocurrency security, fraud prevention, and regulatory compliance.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Investigative Reporter',
    socials: {
      twitter: '@marcus_crypto_sec'
    }
  },
  {
    id: 'fn-5',
    name: 'Isabella Rodriguez',
    bio: 'Gaming and NFT specialist covering Web3 entertainment, play-to-earn economies, and digital collectibles.',
    avatar: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Gaming & NFT Editor',
    socials: {
      twitter: '@isabella_web3'
    }
  },
  {
    id: 'fn-6',
    name: 'James Liu',
    bio: 'Former Goldman Sachs analyst turned crypto journalist, specializing in institutional investment and traditional finance integration.',
    avatar: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Institutional Finance Reporter',
    socials: {
      twitter: '@jamesliu_finance',
      linkedin: 'james-liu-crypto'
    }
  },
  {
    id: 'fn-7',
    name: 'Priya Sharma',
    bio: 'Emerging markets specialist covering cryptocurrency adoption in Southeast Asia and developing economies.',
    avatar: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Emerging Markets Correspondent',
    socials: {
      twitter: '@priya_crypto_asia'
    }
  },
  {
    id: 'fn-8',
    name: 'Elena Rodriguez',
    bio: 'Breaking news specialist covering global cryptocurrency developments and market-moving events.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Breaking News Editor',
    socials: {
      twitter: '@elenarod_crypto'
    }
  }
];

// Featured articles with enhanced metadata
export const featuredArticles = [
  {
    id: 'feat-1',
    slug: 'bitcoin-strategic-reserve-senate-approval',
    title: 'EXCLUSIVE: Bitcoin Strategic Reserve Bill Gains Senate Momentum in Historic Vote',
    description: 'In-depth analysis of the groundbreaking legislation that could establish Bitcoin as a strategic reserve asset alongside gold, fundamentally reshaping global monetary policy.',
    excerpt: 'Comprehensive coverage of the Senate Banking Committee\'s historic 12-3 vote approving Bitcoin Strategic Reserve legislation.',
    coverImage: 'https://images.unsplash.com/photo-1751755359997-40f4fb2293cd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: featuredNewsAuthors[0],
    category: 'Exclusive Analysis',
    datePublished: '2024-12-20T14:45:00Z',
    readingTime: 12,
    featured: true,
    premium: true,
    exclusive: true,
    tags: ['Bitcoin', 'Senate', 'Strategic Reserve', 'Exclusive', 'Analysis'],
    contentType: 'Long-form Analysis',
    impact: 'High',
    engagement: {
      views: '89.4K',
      likes: '7.2K',
      shares: '4.8K',
      comments: '1.9K',
      bookmarks: '3.1K'
    }
  },
  {
    id: 'feat-2',
    slug: 'ethereum-merge-anniversary-deep-dive',
    title: 'The Merge Two Years Later: Ethereum\'s Transformation and What\'s Next',
    description: 'Comprehensive retrospective on Ethereum\'s historic transition to proof-of-stake, analyzing its impact on energy consumption, security, and the broader crypto ecosystem.',
    excerpt: 'Two years after the historic Merge, we examine Ethereum\'s transformation and future roadmap.',
    coverImage: 'https://images.unsplash.com/photo-1751308759380-03e5abd14510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: featuredNewsAuthors[1],
    category: 'Technology Deep Dive',
    datePublished: '2024-12-20T12:30:00Z',
    readingTime: 15,
    featured: true,
    premium: true,
    tags: ['Ethereum', 'Merge', 'Technology', 'Deep Dive', 'Analysis'],
    contentType: 'Technical Analysis',
    impact: 'High',
    engagement: {
      views: '76.8K',
      likes: '6.1K',
      shares: '3.9K',
      comments: '1.4K',
      bookmarks: '2.7K'
    }
  },
  {
    id: 'feat-3',
    slug: 'philippines-cbdc-leadership-interview',
    title: 'INTERVIEW: BSP Governor on Philippines\' Digital Currency Leadership',
    description: 'Exclusive interview with Bangko Sentral ng Pilipinas Governor discussing the country\'s CBDC strategy, implementation timeline, and vision for digital financial inclusion.',
    excerpt: 'Exclusive one-on-one interview with BSP Governor on Philippines\' digital currency strategy.',
    coverImage: 'https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: featuredNewsAuthors[2],
    category: 'Exclusive Interview',
    datePublished: '2024-12-20T10:15:00Z',
    readingTime: 18,
    featured: true,
    exclusive: true,
    tags: ['BSP', 'Interview', 'CBDC', 'Philippines', 'Exclusive'],
    contentType: 'Exclusive Interview',
    impact: 'High',
    engagement: {
      views: '94.2K',
      likes: '8.3K',
      shares: '5.6K',
      comments: '2.3K',
      bookmarks: '4.1K'
    }
  },
  {
    id: 'feat-4',
    slug: 'defi-security-revolution-investigation',
    title: 'INVESTIGATION: How AI-Powered Security Prevented the Biggest DeFi Hack in History',
    description: 'Investigative report revealing how revolutionary AI security protocols successfully thwarted a $200 million DeFi exploit, showcasing the evolution of blockchain security.',
    excerpt: 'Investigative deep-dive into the AI security breakthrough that prevented a massive DeFi exploit.',
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    author: featuredNewsAuthors[3],
    category: 'Investigative Report',
    datePublished: '2024-12-20T08:00:00Z',
    readingTime: 20,
    featured: true,
    premium: true,
    tags: ['DeFi', 'Security', 'AI', 'Investigation', 'Exclusive'],
    contentType: 'Investigative Report',
    impact: 'High',
    engagement: {
      views: '67.5K',
      likes: '5.4K',
      shares: '3.2K',
      comments: '1.1K',
      bookmarks: '2.8K'
    }
  },
  {
    id: 'feat-5',
    slug: 'web3-gaming-revenue-milestone-analysis',
    title: 'MILESTONE: Web3 Gaming Surpasses Traditional Mobile Games in Revenue',
    description: 'Comprehensive analysis of the gaming industry\'s paradigm shift as blockchain-based games achieve historic revenue milestone, led by evolved play-to-earn mechanics.',
    excerpt: 'Deep analysis of Web3 gaming\'s historic achievement in surpassing traditional mobile game revenue.',
    coverImage: 'https://images.unsplash.com/photo-1703485393247-b90b4424a1b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: featuredNewsAuthors[4],
    category: 'Industry Analysis',
    datePublished: '2024-12-20T06:30:00Z',
    readingTime: 14,
    featured: true,
    premium: true,
    tags: ['Web3 Gaming', 'Revenue', 'Analysis', 'Milestone', 'Industry'],
    contentType: 'Industry Analysis',
    impact: 'Medium',
    engagement: {
      views: '58.9K',
      likes: '4.7K',
      shares: '2.9K',
      comments: '892',
      bookmarks: '2.1K'
    }
  },
  {
    id: 'feat-6',
    slug: 'blackrock-ethereum-staking-institutional-impact',
    title: 'BlackRock\'s Ethereum Staking Move: Institutional DeFi Revolution Begins',
    description: 'Feature analysis of BlackRock\'s Ethereum ETF staking announcement and its potential to unlock billions in institutional capital for the DeFi ecosystem.',
    excerpt: 'Feature analysis of how BlackRock\'s staking move could revolutionize institutional DeFi participation.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    author: featuredNewsAuthors[5],
    category: 'Institutional Focus',
    datePublished: '2024-12-20T04:45:00Z',
    readingTime: 16,
    featured: true,
    premium: true,
    tags: ['BlackRock', 'Ethereum', 'Staking', 'Institutional', 'DeFi'],
    contentType: 'Feature Analysis',
    impact: 'High',
    engagement: {
      views: '71.3K',
      likes: '5.8K',
      shares: '3.7K',
      comments: '1.3K',
      bookmarks: '3.0K'
    }
  },
  {
    id: 'feat-7',
    slug: 'solana-mobile-saga-web3-revolution',
    title: 'Solana Mobile Saga 2: The Web3 Smartphone Revolution',
    description: 'Feature story exploring how Solana\'s Web3-native smartphone is pioneering the future of mobile cryptocurrency integration and mainstream adoption.',
    excerpt: 'Feature exploration of Solana Mobile\'s groundbreaking Web3 smartphone and its market impact.',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    author: featuredNewsAuthors[6],
    category: 'Innovation Feature',
    datePublished: '2024-12-20T02:20:00Z',
    readingTime: 11,
    featured: true,
    tags: ['Solana', 'Mobile', 'Web3', 'Innovation', 'Feature'],
    contentType: 'Innovation Feature',
    impact: 'Medium',
    engagement: {
      views: '45.6K',
      likes: '3.8K',
      shares: '2.4K',
      comments: '678',
      bookmarks: '1.9K'
    }
  },
  {
    id: 'feat-8',
    slug: 'crypto-adoption-emerging-markets-feature',
    title: 'The Great Crypto Migration: How Emerging Markets Lead Global Adoption',
    description: 'Feature story examining how developing nations, led by countries like the Philippines, are driving global cryptocurrency adoption through innovative use cases.',
    excerpt: 'Feature examination of how emerging markets are leading the global cryptocurrency adoption wave.',
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    author: featuredNewsAuthors[7],
    category: 'Global Feature',
    datePublished: '2024-12-19T23:30:00Z',
    readingTime: 13,
    featured: true,
    tags: ['Adoption', 'Emerging Markets', 'Global', 'Feature', 'Analysis'],
    contentType: 'Global Feature',
    impact: 'Medium',
    engagement: {
      views: '52.1K',
      likes: '4.2K',
      shares: '2.8K',
      comments: '934',
      bookmarks: '2.3K'
    }
  }
];

// Content type categories for organization
export const contentTypes = [
  {
    name: 'Exclusive Analysis',
    icon: 'Crown',
    color: 'text-yellow-600 dark:text-yellow-400',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950 dark:to-amber-900',
    borderColor: 'border-yellow-200 dark:border-yellow-800'
  },
  {
    name: 'Investigative Report',
    icon: 'Target',
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900',
    borderColor: 'border-red-200 dark:border-red-800'
  },
  {
    name: 'Exclusive Interview',
    icon: 'Mic',
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900',
    borderColor: 'border-purple-200 dark:border-purple-800'
  },
  {
    name: 'Industry Analysis',
    icon: 'BarChart3',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900',
    borderColor: 'border-blue-200 dark:border-blue-800'
  },
  {
    name: 'Innovation Feature',
    icon: 'Lightbulb',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900',
    borderColor: 'border-green-200 dark:border-green-800'
  }
];