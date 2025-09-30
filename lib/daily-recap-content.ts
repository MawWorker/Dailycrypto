import { NewsPost, Author } from '@/lib/types';

// Enhanced authors for daily recap content
export const dailyRecapAuthors: Author[] = [
  {
    id: 'dr-1',
    name: 'Elena Rodriguez',
    bio: 'Breaking news specialist covering global cryptocurrency developments and market-moving events.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Breaking News Editor',
    socials: {
      twitter: '@elenarod_crypto'
    }
  },
  {
    id: 'dr-2',
    name: 'Marcus Chen',
    bio: 'Technology journalist specializing in blockchain innovations and cryptocurrency infrastructure developments.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Tech Reporter',
    socials: {
      twitter: '@marcuschen_tech'
    }
  },
  {
    id: 'dr-3',
    name: 'Isabella Santos',
    bio: 'Market analyst and financial journalist covering cryptocurrency trading and investment trends in Southeast Asia.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Market Analyst',
    socials: {
      twitter: '@isabella_markets'
    }
  },
  {
    id: 'dr-4',
    name: 'David Kim',
    bio: 'Regulatory affairs correspondent tracking government policies and legal developments in the crypto space.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Regulatory Reporter',
    socials: {
      twitter: '@davidkim_reg'
    }
  },
  {
    id: 'dr-5',
    name: 'Sarah Mitchell',
    bio: 'DeFi and Web3 specialist covering decentralized finance protocols and emerging blockchain applications.',
    avatar: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'DeFi Correspondent',
    socials: {
      twitter: '@sarahmitch_defi'
    }
  }
];

// Today's engaging mockup articles
export const todaysMockupArticles: NewsPost[] = [
  {
    id: 'today-1',
    slug: 'bitcoin-breaks-110k-institutional-fomo',
    title: 'BREAKING: Bitcoin Smashes Through $110,000 as Institutional FOMO Reaches Fever Pitch',
    description: 'Bitcoin has shattered the $110,000 barrier in explosive fashion as major corporations and pension funds scramble to add cryptocurrency to their portfolios. The surge comes amid reports that three Fortune 500 companies are preparing to announce Bitcoin treasury allocations totaling over $2 billion.',
    content: `<h2>Historic Milestone Achieved</h2><p>In a stunning display of market momentum, Bitcoin has obliterated the $110,000 resistance level that analysts have been watching for months. The breakthrough occurred during Asian trading hours, with Philippine exchanges reporting record trading volumes as local investors joined the global buying frenzy.</p><h3>Institutional Adoption Accelerates</h3><p>The latest surge is being driven by unprecedented institutional demand, with sources close to major corporations revealing that at least three Fortune 500 companies are preparing to announce significant Bitcoin treasury allocations. These moves could inject over $2 billion into the cryptocurrency market in the coming weeks.</p><p>Philippine crypto exchanges are reporting a 340% increase in new account registrations over the past 48 hours, with many first-time investors citing institutional adoption as their primary motivation for entering the market.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1751755359997-40f4fb2293cd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: dailyRecapAuthors[0],
    category: 'Breaking News',
    tags: ['Bitcoin', 'Institutional', 'ATH', 'Philippines'],
    datePublished: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    readingTime: 4,
    featured: true,
    tickers: ['BTC']
  },
  {
    id: 'today-2',
    slug: 'ethereum-layer2-revolution-polygon-arbitrum',
    title: 'Ethereum Layer 2 Revolution: Polygon and Arbitrum Process 2M+ Daily Transactions',
    description: 'Ethereum scaling solutions are experiencing unprecedented growth as Polygon and Arbitrum collectively process over 2 million transactions daily. The surge in Layer 2 adoption is reshaping how developers build DeFi applications and how users interact with the Ethereum ecosystem.',
    content: `<h2>Scaling Solutions Gain Momentum</h2><p>Ethereum's Layer 2 ecosystem is experiencing explosive growth, with Polygon and Arbitrum leading the charge in transaction volume and user adoption. Combined, these networks are now processing over 2 million transactions daily, representing a 450% increase from the same period last year.</p><h3>Developer Migration Accelerates</h3><p>The growth is being driven by developers migrating their applications to Layer 2 solutions to take advantage of lower fees and faster transaction times. Major DeFi protocols including Uniswap, Aave, and Compound have expanded their presence on these networks, bringing billions in total value locked.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1751308759380-03e5abd14510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: dailyRecapAuthors[1],
    category: 'Technology',
    tags: ['Ethereum', 'Layer2', 'Polygon', 'Arbitrum', 'DeFi'],
    datePublished: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    readingTime: 6,
    tickers: ['ETH', 'MATIC']
  },
  {
    id: 'today-3',
    slug: 'philippines-cbdc-digital-peso-pilot-launch',
    title: 'Philippines Launches Digital Peso Pilot: 50,000 Users to Test CBDC in Metro Manila',
    description: 'The Bangko Sentral ng Pilipinas has officially launched its digital peso pilot program with 50,000 selected users in Metro Manila. The six-month trial will test real-world usage scenarios including retail payments, remittances, and government disbursements.',
    content: `<h2>CBDC Pilot Goes Live</h2><p>The Philippines has taken a major step toward digital currency adoption with the launch of its central bank digital currency (CBDC) pilot program. Fifty thousand carefully selected users across Metro Manila will participate in the six-month trial, testing the digital peso in real-world scenarios.</p><h3>Real-World Testing Scenarios</h3><p>The pilot will focus on three key use cases: retail payments at participating merchants, overseas worker remittances, and government social assistance disbursements. Early participants report seamless integration with existing mobile payment platforms like GCash and Maya.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: dailyRecapAuthors[3],
    category: 'Regulation',
    tags: ['Philippines', 'CBDC', 'BSP', 'Digital Peso', 'Pilot'],
    datePublished: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
    readingTime: 5,
    featured: true
  },
  {
    id: 'today-4',
    slug: 'solana-defi-tvl-explosion-jupiter-raydium',
    title: 'Solana DeFi Explodes: TVL Surges 89% as Jupiter and Raydium Lead Ecosystem Growth',
    description: 'Solana\'s decentralized finance ecosystem is experiencing remarkable growth with total value locked surging 89% this month. Jupiter\'s DEX aggregator and Raydium\'s automated market maker are driving unprecedented trading volumes and user adoption.',
    content: `<h2>Solana DeFi Renaissance</h2><p>The Solana blockchain is experiencing a DeFi renaissance, with total value locked (TVL) surging 89% this month to reach $3.2 billion. This explosive growth is being driven by innovative protocols and improved network stability following recent upgrades.</p><h3>Jupiter and Raydium Lead Growth</h3><p>Jupiter, Solana's premier DEX aggregator, has processed over $12 billion in trading volume this month, while Raydium's automated market maker has seen liquidity pools grow by 156%. The combination of low fees and fast transaction times continues to attract users from other blockchains.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1627686981794-b6505f51024f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: dailyRecapAuthors[4],
    category: 'DeFi',
    tags: ['Solana', 'DeFi', 'Jupiter', 'Raydium', 'TVL'],
    datePublished: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
    readingTime: 5,
    tickers: ['SOL']
  },
  {
    id: 'today-5',
    slug: 'crypto-gaming-axie-infinity-comeback-web3',
    title: 'Gaming Giants Return: Axie Infinity Unveils "Origins" Update as Web3 Gaming Rebounds',
    description: 'Axie Infinity is staging a remarkable comeback with its highly anticipated "Origins" update, featuring revamped gameplay mechanics and a sustainable play-to-earn economy. The update has attracted over 100,000 new players in its first week, signaling a potential revival for Web3 gaming.',
    content: `<h2>Axie Infinity's Strategic Comeback</h2><p>Sky Mavis has unveiled the "Origins" update for Axie Infinity, marking a pivotal moment in the game's evolution. The update introduces completely revamped gameplay mechanics, a more sustainable economic model, and enhanced graphics that have attracted over 100,000 new players in just one week.</p><h3>Sustainable Play-to-Earn Model</h3><p>The new economic model addresses previous sustainability concerns by implementing dynamic reward systems and introducing skill-based earning mechanisms. Players can now earn through strategic gameplay rather than simple grinding, creating a more engaging and economically viable ecosystem.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1703485393247-b90b4424a1b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: dailyRecapAuthors[1],
    category: 'Gaming',
    tags: ['Axie Infinity', 'Gaming', 'Web3', 'P2E', 'Origins'],
    datePublished: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(), // 10 hours ago
    readingTime: 4,
    tickers: ['AXS']
  }
];

// Enhanced daily recap summary data
export const dailyRecapSummary = {
  date: new Date().toISOString(),
  totalStories: 47,
  breakingNewsCount: 8,
  marketMoversCount: 12,
  regulatoryUpdatesCount: 6,
  
  keyHighlights: [
    {
      category: 'Market Milestone',
      title: 'Bitcoin Breaks $110,000 Barrier',
      summary: 'Bitcoin achieved a historic milestone by surpassing $110,000 for the first time, driven by massive institutional buying pressure and growing corporate adoption.',
      impact: 'High',
      relatedTickers: ['BTC']
    },
    {
      category: 'Regulatory Development',
      title: 'Philippines Launches Digital Peso Pilot',
      summary: 'BSP officially launched its CBDC pilot program with 50,000 users in Metro Manila, marking a significant step toward digital currency adoption in Southeast Asia.',
      impact: 'High',
      relatedTickers: []
    },
    {
      category: 'DeFi Growth',
      title: 'Solana DeFi TVL Surges 89%',
      summary: 'Solana\'s decentralized finance ecosystem experienced explosive growth with total value locked increasing by 89% this month, led by Jupiter and Raydium protocols.',
      impact: 'Medium',
      relatedTickers: ['SOL']
    },
    {
      category: 'Technology Innovation',
      title: 'Ethereum Layer 2 Adoption Accelerates',
      summary: 'Polygon and Arbitrum collectively processed over 2 million daily transactions, showcasing the growing adoption of Ethereum scaling solutions.',
      impact: 'Medium',
      relatedTickers: ['ETH', 'MATIC']
    },
    {
      category: 'Gaming Revival',
      title: 'Web3 Gaming Shows Signs of Recovery',
      summary: 'Axie Infinity\'s "Origins" update attracted 100,000+ new players in one week, signaling a potential revival for the play-to-earn gaming sector.',
      impact: 'Medium',
      relatedTickers: ['AXS']
    },
    {
      category: 'Security Alert',
      title: 'Multi-Chain Bridge Exploit Prevented',
      summary: 'Security researchers discovered and reported a critical vulnerability in a major cross-chain bridge before it could be exploited, potentially saving $200M in user funds.',
      impact: 'High',
      relatedTickers: []
    },
    {
      category: 'Adoption News',
      title: 'Major Philippine Banks Test Crypto Custody',
      summary: 'Three of the Philippines\' largest banks have begun testing cryptocurrency custody services for institutional clients, marking a significant shift in traditional banking attitudes.',
      impact: 'Medium',
      relatedTickers: []
    }
  ],

  marketSentiment: {
    overall: 'Bullish',
    fearGreedIndex: 78,
    topGainers: [
      { symbol: 'BTC', change: '+8.24%' },
      { symbol: 'SOL', change: '+12.67%' },
      { symbol: 'MATIC', change: '+15.43%' }
    ],
    topLosers: [
      { symbol: 'LUNA', change: '-18.45%' },
      { symbol: 'FTT', change: '-12.33%' },
      { symbol: 'LUNC', change: '-9.87%' }
    ]
  },

  trendingTopics: [
    '#Bitcoin110K',
    '#DigitalPeso',
    '#SolanaDeFi',
    '#Layer2Scaling',
    '#AxieOrigins',
    '#CBDCPilot',
    '#InstitutionalAdoption',
    '#Web3Gaming'
  ],

  readingStats: {
    totalReaders: '24.7K',
    avgReadTime: '6.2 min',
    mostSharedStory: 'Bitcoin Breaks $110,000 Barrier',
    topEngagementCategory: 'Breaking News'
  }
};

// Enhanced engagement metrics for articles
export const articleEngagementMetrics = {
  'today-1': {
    views: '12.4K',
    likes: '1.2K',
    shares: '847',
    comments: '234',
    readingProgress: '87%'
  },
  'today-2': {
    views: '8.9K',
    likes: '756',
    shares: '423',
    comments: '156',
    readingProgress: '92%'
  },
  'today-3': {
    views: '15.2K',
    likes: '1.8K',
    shares: '1.1K',
    comments: '389',
    readingProgress: '89%'
  },
  'today-4': {
    views: '6.7K',
    likes: '534',
    shares: '298',
    comments: '87',
    readingProgress: '85%'
  },
  'today-5': {
    views: '9.3K',
    likes: '892',
    shares: '567',
    comments: '203',
    readingProgress: '91%'
  }
};

// Visual design recommendations
export const designRecommendations = {
  colorScheme: {
    primary: '#2563eb', // Royal Blue
    success: '#10b981', // Emerald
    warning: '#f59e0b', // Amber
    danger: '#ef4444', // Red
    accent: '#8b5cf6', // Violet
    neutral: '#6b7280' // Gray
  },
  
  visualElements: {
    breakingNewsBadge: {
      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
      animation: 'pulse',
      icon: 'AlertTriangle'
    },
    marketUpdateBadge: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
      icon: 'TrendingUp'
    },
    technologyBadge: {
      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      icon: 'Cpu'
    },
    regulatoryBadge: {
      background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
      icon: 'Shield'
    }
  },

  layoutSuggestions: {
    headerSection: 'Full-width gradient background with centered content',
    articleCards: 'Rounded corners with subtle shadows and hover animations',
    categoryIcons: 'Colored circular backgrounds matching category themes',
    progressIndicator: 'Sticky bottom-left corner with reading progress',
    socialSharing: 'Floating action buttons with platform-specific colors'
  }
};