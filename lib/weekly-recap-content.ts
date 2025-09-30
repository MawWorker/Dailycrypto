import { NewsPost, Author } from '@/lib/types';

// Enhanced authors for weekly recap content
export const weeklyRecapAuthors: Author[] = [
  {
    id: 'wr-1',
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
    id: 'wr-2',
    name: 'Roberto Valdez',
    bio: 'Philippine market specialist and former BSP analyst covering local cryptocurrency regulations and adoption.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Market Analyst',
    socials: {
      twitter: '@roberto_crypto_ph'
    }
  },
  {
    id: 'wr-3',
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
    id: 'wr-4',
    name: 'Marcus Thompson',
    bio: 'Investigative journalist specializing in cryptocurrency security, fraud prevention, and regulatory compliance.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Investigative Reporter',
    socials: {
      twitter: '@marcus_crypto_sec'
    }
  },
  {
    id: 'wr-5',
    name: 'Isabella Rodriguez',
    bio: 'Gaming and NFT specialist covering Web3 entertainment, play-to-earn economies, and digital collectibles.',
    avatar: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Gaming & NFT Editor',
    socials: {
      twitter: '@isabella_web3'
    }
  },
  {
    id: 'wr-6',
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
    id: 'wr-7',
    name: 'Priya Sharma',
    bio: 'Emerging markets specialist covering cryptocurrency adoption in Southeast Asia and developing economies.',
    avatar: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Emerging Markets Correspondent',
    socials: {
      twitter: '@priya_crypto_asia'
    }
  }
];

// This week's engaging mockup articles with varied publication dates
export const weeklyMockupArticles: NewsPost[] = [
  {
    id: 'weekly-1',
    slug: 'bitcoin-strategic-reserve-bill-passes-senate',
    title: 'EXCLUSIVE: Bitcoin Strategic Reserve Bill Passes Senate Committee in Historic 12-3 Vote',
    description: 'In a groundbreaking development, the U.S. Senate Banking Committee has approved legislation that would establish Bitcoin as a strategic reserve asset alongside gold. The bipartisan bill, which passed 12-3, could fundamentally reshape global monetary policy and trigger a massive institutional adoption wave.',
    content: `<h2>Historic Legislative Victory</h2><p>The U.S. Senate Banking Committee made history today by approving the Bitcoin Strategic Reserve Act in a decisive 12-3 vote. This landmark legislation would authorize the Federal Reserve to hold up to 5% of its reserves in Bitcoin, marking the first time a major central bank would officially recognize cryptocurrency as a strategic asset.</p><h3>Bipartisan Support Emerges</h3><p>The bill received unexpected bipartisan support, with three Democratic senators joining all nine Republican committee members in favor. Senator Elizabeth Warren, a longtime crypto critic, abstained from voting but indicated she would not oppose the measure if additional consumer protections were added.</p><p>The legislation now moves to a full Senate vote, where it is expected to pass with a comfortable margin. If signed into law, the Federal Reserve would have 18 months to begin accumulating Bitcoin reserves, potentially purchasing up to $200 billion worth of the cryptocurrency.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    author: weeklyRecapAuthors[0],
    category: 'Breaking News',
    tags: ['Bitcoin', 'Senate', 'Strategic Reserve', 'Legislation', 'Federal Reserve'],
    datePublished: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    readingTime: 8,
    featured: true,
    tickers: ['BTC']
  },
  {
    id: 'weekly-2',
    slug: 'ethereum-merge-anniversary-staking-milestone',
    title: 'Ethereum Merge Anniversary: Network Achieves 32 Million ETH Staked, $128B Locked',
    description: 'Two years after the historic Merge, Ethereum has reached a monumental milestone with over 32 million ETH now staked on the network, representing $128 billion in locked value. The achievement underscores the success of Ethereum\'s transition to proof-of-stake and growing validator confidence.',
    content: `<h2>Staking Milestone Achieved</h2><p>Ethereum has reached an unprecedented milestone with over 32 million ETH now staked on the network, representing approximately 27% of the total ETH supply. This $128 billion in locked value demonstrates the growing confidence in Ethereum's proof-of-stake consensus mechanism.</p><h3>Validator Growth Accelerates</h3><p>The network now supports over 1 million active validators, with institutional staking services like Coinbase, Kraken, and Lido leading the charge. The average annual percentage rate (APR) for staking has stabilized around 4.2%, providing attractive yields for long-term holders.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    author: weeklyRecapAuthors[2],
    category: 'Technology',
    tags: ['Ethereum', 'Staking', 'Merge Anniversary', 'Proof of Stake', 'Validators'],
    datePublished: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    readingTime: 6,
    featured: true,
    tickers: ['ETH']
  },
  {
    id: 'weekly-3',
    slug: 'philippines-becomes-first-asean-cbdc-leader',
    title: 'Philippines Becomes First ASEAN Nation to Launch Full CBDC Program',
    description: 'The Philippines has officially become the first ASEAN member state to launch a comprehensive central bank digital currency program. The digital peso will be available to all 110 million Filipinos by Q2 2025, positioning the country as a regional leader in financial innovation.',
    content: `<h2>Regional Leadership in Digital Currency</h2><p>The Bangko Sentral ng Pilipinas (BSP) has announced the full rollout of its central bank digital currency (CBDC) program, making the Philippines the first ASEAN nation to implement a comprehensive digital currency system. The digital peso will be available to all 110 million Filipinos by the second quarter of 2025.</p><h3>Seamless Integration with Existing Systems</h3><p>The digital peso will integrate seamlessly with existing mobile payment platforms including GCash, Maya, and traditional banking systems. Early pilot results showed 98% user satisfaction rates and 40% faster transaction processing compared to traditional banking methods.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    author: weeklyRecapAuthors[1],
    category: 'Regulation',
    tags: ['Philippines', 'CBDC', 'Digital Peso', 'ASEAN', 'BSP', 'Financial Innovation'],
    datePublished: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    readingTime: 7,
    featured: true,
    tickers: []
  },
  {
    id: 'weekly-4',
    slug: 'defi-insurance-protocol-prevents-200m-hack',
    title: 'DeFi Insurance Protocol Prevents $200M Hack in Real-Time Security Response',
    description: 'A revolutionary DeFi insurance protocol successfully prevented a $200 million exploit attempt by automatically freezing suspicious transactions and alerting security teams. The incident showcases the maturation of decentralized finance security infrastructure and the effectiveness of AI-powered threat detection.',
    content: `<h2>Revolutionary Security Response</h2><p>Nexus Mutual's new AI-powered security protocol successfully prevented what could have been one of the largest DeFi hacks in history. The system detected and automatically froze suspicious transactions worth $200 million across multiple protocols within 3.7 seconds of the attack initiation.</p><h3>AI-Powered Threat Detection</h3><p>The breakthrough came through machine learning algorithms that analyze transaction patterns in real-time, identifying potential exploits before they can drain protocol treasuries. The system has now been adopted by over 50 major DeFi protocols, protecting more than $15 billion in total value locked.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    author: weeklyRecapAuthors[3],
    category: 'Security',
    tags: ['DeFi', 'Security', 'AI', 'Insurance', 'Hack Prevention', 'Nexus Mutual'],
    datePublished: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
    readingTime: 5,
    tickers: ['NXM']
  },
  {
    id: 'weekly-5',
    slug: 'web3-gaming-revenue-surpasses-traditional-mobile',
    title: 'Web3 Gaming Revenue Surpasses Traditional Mobile Games for First Time',
    description: 'Web3 gaming has achieved a historic milestone by generating more revenue than traditional mobile games in Q4 2024. Led by play-to-earn pioneers and new blockchain gaming platforms, the sector generated $4.2 billion compared to traditional mobile gaming\'s $3.8 billion.',
    content: `<h2>Gaming Industry Paradigm Shift</h2><p>The gaming industry has witnessed a seismic shift as Web3 gaming revenue surpassed traditional mobile games for the first time in Q4 2024. Blockchain-based games generated $4.2 billion in revenue compared to $3.8 billion from traditional mobile gaming platforms.</p><h3>Play-to-Earn Evolution</h3><p>The growth is driven by evolved play-to-earn mechanics that focus on skill-based rewards rather than simple grinding. Games like Axie Infinity Origins, Illuvium, and Star Atlas have pioneered sustainable economic models that benefit both players and developers.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    author: weeklyRecapAuthors[4],
    category: 'Gaming',
    tags: ['Web3 Gaming', 'Play-to-Earn', 'Revenue', 'Mobile Gaming', 'Blockchain'],
    datePublished: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    readingTime: 6,
    tickers: ['AXS', 'ILV']
  },
  {
    id: 'weekly-6',
    slug: 'blackrock-ethereum-etf-staking-yields',
    title: 'BlackRock\'s Ethereum ETF Announces Staking Yields: 4.5% APY for Institutional Investors',
    description: 'BlackRock has announced that its Ethereum ETF will begin offering staking yields to institutional investors, providing an estimated 4.5% annual percentage yield. The move could unlock billions in additional institutional capital for the Ethereum ecosystem.',
    content: `<h2>Institutional Staking Revolution</h2><p>BlackRock's iShares Ethereum Trust (ETHA) will begin offering staking rewards to institutional investors starting January 2025. The fund, which holds over $2.8 billion in ETH, will provide an estimated 4.5% annual percentage yield through professional staking services.</p><h3>Competitive Advantage</h3><p>This move gives BlackRock a significant competitive advantage over other Ethereum ETF providers and could trigger a wave of institutional capital flowing into ETH. The fund has already seen $400 million in new inflows since the announcement was made.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    author: weeklyRecapAuthors[5],
    category: 'Institutional',
    tags: ['BlackRock', 'Ethereum ETF', 'Staking', 'Institutional', 'Yields'],
    datePublished: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), // 6 days ago
    readingTime: 5,
    tickers: ['ETH']
  },
  {
    id: 'weekly-7',
    slug: 'solana-mobile-saga-2-presales-record',
    title: 'Solana Mobile Saga 2 Breaks Presale Records: 100K Units Sold in 48 Hours',
    description: 'The highly anticipated Solana Mobile Saga 2 smartphone has shattered presale records by selling 100,000 units in just 48 hours. The Web3-native device features built-in crypto wallet functionality, DApp integration, and exclusive NFT rewards for early adopters.',
    content: `<h2>Web3 Mobile Revolution</h2><p>Solana Mobile has achieved unprecedented success with the Saga 2 smartphone presale, selling 100,000 units in just 48 hours. The Web3-native device represents a new paradigm in mobile technology, seamlessly integrating cryptocurrency and blockchain functionality into everyday smartphone use.</p><h3>Exclusive Features and Rewards</h3><p>Each Saga 2 device comes with a built-in Phantom wallet, exclusive access to Solana DApps, and a unique NFT collection for early adopters. The device also features enhanced security with hardware-level private key storage and biometric authentication for crypto transactions.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    author: weeklyRecapAuthors[2],
    category: 'Technology',
    tags: ['Solana', 'Mobile', 'Saga 2', 'Web3', 'Smartphone', 'Presale'],
    datePublished: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    readingTime: 4,
    tickers: ['SOL']
  }
];

// Enhanced weekly recap summary data
export const weeklyRecapSummary = {
  weekStartDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  weekEndDate: new Date().toISOString(),
  totalStories: 89,
  breakingNewsCount: 12,
  featuredStoriesCount: 7,
  exclusiveInterviewsCount: 3,
  
  weeklyOverview: {
    mainTheme: "Institutional Adoption Acceleration",
    summary: "This week marked a pivotal moment in cryptocurrency history as institutional adoption reached unprecedented levels. From the U.S. Senate's historic Bitcoin Strategic Reserve bill to BlackRock's Ethereum staking announcement, traditional finance is embracing digital assets like never before. Meanwhile, technological innovations in DeFi security and Web3 gaming continue to push the boundaries of what's possible in the decentralized economy.",
    keyDevelopments: [
      "U.S. Senate approves Bitcoin Strategic Reserve legislation",
      "Ethereum staking reaches 32 million ETH milestone", 
      "Philippines leads ASEAN in CBDC implementation",
      "DeFi security protocols prevent major exploits",
      "Web3 gaming revenue surpasses traditional mobile games"
    ]
  },

  topStories: [
    {
      rank: 1,
      title: "Bitcoin Strategic Reserve Bill Passes Senate Committee",
      impact: "Massive institutional adoption catalyst",
      engagement: "45.2K views, 3.4K shares",
      significance: "Could trigger global central bank Bitcoin adoption"
    },
    {
      rank: 2,
      title: "Ethereum Staking Reaches 32 Million ETH Milestone",
      impact: "Network security and decentralization strengthened",
      engagement: "38.7K views, 2.8K shares",
      significance: "Validates proof-of-stake transition success"
    },
    {
      rank: 3,
      title: "Philippines Becomes First ASEAN CBDC Leader",
      impact: "Regional digital currency leadership established",
      engagement: "29.1K views, 2.1K shares",
      significance: "Sets precedent for Southeast Asian digital currencies"
    }
  ],

  editorsPicks: [
    {
      title: "DeFi Insurance Protocol Prevents $200M Hack",
      reason: "Showcases maturation of DeFi security infrastructure",
      author: "Marcus Thompson",
      category: "Security Innovation"
    },
    {
      title: "Web3 Gaming Revenue Milestone Achievement",
      reason: "Demonstrates sustainable blockchain gaming economics",
      author: "Isabella Rodriguez", 
      category: "Gaming Evolution"
    },
    {
      title: "Solana Mobile Saga 2 Presale Success",
      reason: "Proves consumer demand for Web3-native devices",
      author: "Dr. Sarah Kim",
      category: "Technology Adoption"
    }
  ],

  weeklyStats: {
    totalReaders: '156.8K',
    totalPageViews: '892.3K',
    avgSessionDuration: '8.4 min',
    topTrafficSource: 'Direct (42%)',
    mobileTrafficPercentage: 68,
    internationalReaders: '34%',
    returningReaders: '76%',
    newsletterSignups: '2,847',
    socialShares: '18.9K',
    commentsPosted: '4,231'
  },

  categoryBreakdown: [
    { category: 'Market News', count: 23, percentage: 26 },
    { category: 'Technology', count: 18, percentage: 20 },
    { category: 'Regulation', count: 15, percentage: 17 },
    { category: 'DeFi', count: 12, percentage: 13 },
    { category: 'Gaming', count: 9, percentage: 10 },
    { category: 'Security', count: 7, percentage: 8 },
    { category: 'Business', count: 5, percentage: 6 }
  ],

  marketSentiment: {
    overall: 'Extremely Bullish',
    fearGreedIndex: 84,
    weeklyTrend: '+18.7%',
    topPerformers: [
      { symbol: 'BTC', change: '+23.4%', reason: 'Strategic reserve bill momentum' },
      { symbol: 'ETH', change: '+19.8%', reason: 'Staking milestone and BlackRock news' },
      { symbol: 'SOL', change: '+31.2%', reason: 'Saga 2 presale success and ecosystem growth' },
      { symbol: 'MATIC', change: '+15.6%', reason: 'Layer 2 adoption acceleration' }
    ],
    weeklyVolume: '$2.8T',
    marketCapGrowth: '+$340B'
  },

  trendingTopics: [
    { topic: '#BitcoinReserve', mentions: '89.4K', sentiment: 'Extremely Positive' },
    { topic: '#EthereumStaking', mentions: '67.2K', sentiment: 'Positive' },
    { topic: '#DigitalPeso', mentions: '45.8K', sentiment: 'Positive' },
    { topic: '#DeFiSecurity', mentions: '34.1K', sentiment: 'Positive' },
    { topic: '#Web3Gaming', mentions: '28.9K', sentiment: 'Very Positive' },
    { topic: '#SolanaMobile', mentions: '23.7K', sentiment: 'Positive' },
    { topic: '#CBDCLeadership', mentions: '19.3K', sentiment: 'Neutral' },
    { topic: '#InstitutionalAdoption', mentions: '56.8K', sentiment: 'Extremely Positive' }
  ],

  nextWeekPreview: {
    upcomingEvents: [
      "Federal Reserve Chair Powell testimony on digital assets",
      "Ethereum Cancun-Deneb upgrade implementation",
      "Philippine Blockchain Week 2025 keynote announcements",
      "Major DeFi protocol governance votes",
      "Q4 2024 crypto earnings reports from public companies"
    ],
    watchList: [
      "Bitcoin ETF inflow data following Senate news",
      "Ethereum gas fee reduction post-upgrade",
      "Philippine digital peso adoption metrics",
      "Cross-chain bridge security developments",
      "Institutional crypto custody announcements"
    ]
  },

  readerEngagement: {
    mostReadArticle: "Bitcoin Strategic Reserve Bill Passes Senate Committee",
    mostSharedArticle: "Philippines Becomes First ASEAN CBDC Leader", 
    mostCommentedArticle: "DeFi Insurance Protocol Prevents $200M Hack",
    averageReadingTime: "6.8 minutes",
    completionRate: "78%",
    returnReaderRate: "76%"
  }
};

// Enhanced engagement metrics for weekly articles
export const weeklyArticleEngagementMetrics = {
  'weekly-1': {
    views: '45.2K',
    likes: '3.8K',
    shares: '3.4K',
    comments: '892',
    readingProgress: '94%',
    sentiment: 'Extremely Positive',
    viralityScore: 9.2
  },
  'weekly-2': {
    views: '38.7K',
    likes: '2.9K',
    shares: '2.8K',
    comments: '567',
    readingProgress: '91%',
    sentiment: 'Positive',
    viralityScore: 8.1
  },
  'weekly-3': {
    views: '29.1K',
    likes: '2.3K',
    shares: '2.1K',
    comments: '445',
    readingProgress: '88%',
    sentiment: 'Positive',
    viralityScore: 7.8
  },
  'weekly-4': {
    views: '22.4K',
    likes: '1.9K',
    shares: '1.6K',
    comments: '334',
    readingProgress: '85%',
    sentiment: 'Very Positive',
    viralityScore: 7.2
  },
  'weekly-5': {
    views: '31.8K',
    likes: '2.7K',
    shares: '2.3K',
    comments: '678',
    readingProgress: '89%',
    sentiment: 'Very Positive',
    viralityScore: 8.4
  },
  'weekly-6': {
    views: '26.3K',
    likes: '2.1K',
    shares: '1.8K',
    comments: '423',
    readingProgress: '87%',
    sentiment: 'Positive',
    viralityScore: 7.6
  },
  'weekly-7': {
    views: '19.7K',
    likes: '1.6K',
    shares: '1.4K',
    comments: '289',
    readingProgress: '83%',
    sentiment: 'Positive',
    viralityScore: 6.9
  }
};

// Visual design recommendations for weekly summary
export const weeklyDesignRecommendations = {
  colorScheme: {
    primary: '#2563eb', // Royal Blue
    success: '#10b981', // Emerald
    warning: '#f59e0b', // Amber
    danger: '#ef4444', // Red
    accent: '#8b5cf6', // Violet
    neutral: '#6b7280', // Gray
    gold: '#fbbf24' // Gold for featured content
  },
  
  visualElements: {
    weeklyHighlightsBadge: {
      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      animation: 'subtle-glow',
      icon: 'Award'
    },
    topStoriesBadge: {
      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
      animation: 'pulse',
      icon: 'Star'
    },
    editorPicksBadge: {
      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      icon: 'BookOpen'
    },
    trendingBadge: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
      icon: 'TrendingUp'
    }
  },

  layoutSuggestions: {
    headerSection: 'Full-width gradient with week date range and key statistics',
    weeklyHighlights: 'Featured cards with gold accents and enhanced shadows',
    categoryBreakdown: 'Circular progress indicators with category icons',
    engagementMetrics: 'Interactive cards with hover animations',
    nextWeekPreview: 'Teaser section with countdown elements'
  },

  engagementFeatures: {
    viralityIndicators: 'Color-coded viral score badges (1-10 scale)',
    sentimentAnalysis: 'Emoji-based sentiment indicators',
    readingProgress: 'Circular progress bars for completion rates',
    socialProof: 'Reader testimonials and engagement highlights'
  }
};