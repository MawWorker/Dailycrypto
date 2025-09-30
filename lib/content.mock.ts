import { NewsPost, Guide, Author, Exchange, Wallet } from '@/lib/types';

export const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'Maria Santos',
    bio: 'Senior crypto journalist covering Philippine blockchain and fintech developments. Former business reporter with 8 years experience.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Senior Writer',
    socials: {
      twitter: '@mariasantos_ph',
      linkedin: 'maria-santos-crypto'
    }
  },
  {
    id: '2',
    name: 'Juan Dela Cruz',
    bio: 'Cryptocurrency analyst and educator focused on helping Filipinos navigate the digital asset space safely and profitably.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Market Analyst',
    socials: {
      twitter: '@juandelacruz_btc'
    }
  },
  {
    id: '3',
    name: 'Anna Reyes',
    bio: 'Blockchain technology specialist and DeFi analyst covering Southeast Asian cryptocurrency markets.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Technology Writer',
    socials: {
      twitter: '@annareyes_defi'
    }
  },
  {
    id: '4',
    name: 'Carlos Mendoza',
    bio: 'Market analyst specializing in Philippine cryptocurrency trading volumes and institutional adoption trends.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Market Analyst',
    socials: {
      twitter: '@carlosmendoza_crypto'
    }
  }
];

const longContent = `
<h2>Introduction</h2>

<p>The cryptocurrency landscape in the Philippines continues to evolve rapidly, with new developments affecting millions of Filipino investors and traders. This comprehensive analysis explores the latest trends, regulatory changes, and market dynamics shaping the future of digital assets in the archipelago.</p>

<h3>Key Developments</h3>

<p>Recent regulatory changes have created both opportunities and challenges for the Philippine crypto ecosystem. The Bangko Sentral ng Pilipinas (BSP) has been working to balance innovation with consumer protection, implementing new guidelines that provide clarity while fostering growth.</p>

<h4>Market Impact</h4>

<p>These developments have significant implications for various stakeholders in the Philippine crypto market:</p>

<ul>
<li><strong>Local exchanges and trading platforms</strong> - Enhanced compliance requirements and operational standards</li>
<li><strong>Remittance services using blockchain technology</strong> - Streamlined processes for overseas Filipino workers</li>
<li><strong>SMEs exploring crypto payment solutions</strong> - New opportunities for digital commerce integration</li>
<li><strong>Individual investors building crypto portfolios</strong> - Improved consumer protection and educational resources</li>
</ul>

<h3>Looking Ahead</h3>

<p>As the regulatory framework matures, we expect to see continued growth in crypto adoption across the Philippines, particularly in areas where traditional banking services remain limited. The integration of blockchain technology into existing financial infrastructure presents unprecedented opportunities for financial inclusion.</p>

<p>The integration with local payment systems like GCash and Maya represents a significant opportunity for mainstream adoption. These partnerships are creating seamless bridges between traditional finance and the digital asset ecosystem, making cryptocurrency more accessible to everyday Filipinos.</p>

<h3>Regulatory Landscape</h3>

<p>The Philippine regulatory environment continues to evolve with a focus on balancing innovation and consumer protection. Recent developments include:</p>

<ul>
<li>Updated guidelines for virtual asset service providers (VASPs)</li>
<li>Enhanced anti-money laundering (AML) requirements</li>
<li>Consumer protection measures for retail investors</li>
<li>Tax clarifications for cryptocurrency transactions</li>
</ul>

<h3>Market Trends</h3>

<p>Several key trends are shaping the Philippine cryptocurrency market:</p>

<ol>
<li><strong>Institutional Adoption</strong> - Growing interest from traditional financial institutions</li>
<li><strong>Retail Investment</strong> - Increasing participation from individual investors</li>
<li><strong>Remittance Innovation</strong> - Blockchain-based solutions for overseas worker remittances</li>
<li><strong>Educational Initiatives</strong> - Expanded crypto literacy programs and resources</li>
</ol>

<h3>Conclusion</h3>

<p>Philippine crypto market participants should stay informed about regulatory developments while focusing on education and risk management in their investment strategies. The future looks promising for cryptocurrency adoption in the Philippines, with supportive regulations and growing infrastructure creating a foundation for sustainable growth.</p>

<p>As we move forward, collaboration between regulators, industry players, and educational institutions will be crucial in ensuring that the benefits of cryptocurrency technology reach all segments of Philippine society while maintaining appropriate safeguards and protections.</p>
`;

export const mockNewsPosts: NewsPost[] = [
  {
    id: '1',
    slug: 'bsp-updates-crypto-guidelines-2024',
    title: 'BSP Updates Cryptocurrency Guidelines for Philippine Exchanges',
    description: 'New regulatory framework aims to balance innovation with consumer protection as crypto adoption grows nationwide.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    author: mockAuthors[0],
    category: 'Regulation',
    tags: ['BSP', 'Regulation', 'Philippines', 'Exchanges'],
    datePublished: '2024-01-15T09:00:00+08:00',
    readingTime: 5,
    featured: true,
    tickers: ['BTC', 'ETH']
  },
  {
    id: '2', 
    slug: 'bitcoin-adoption-philippine-businesses',
    title: 'Philippine SMEs Increasingly Adopt Bitcoin for Cross-Border Payments',
    description: 'Small and medium enterprises leverage cryptocurrency to reduce remittance costs and speed up international transactions.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80',
    author: mockAuthors[1],
    category: 'Business',
    tags: ['Bitcoin', 'SME', 'Payments', 'Remittance'],
    datePublished: '2024-01-14T14:30:00+08:00',
    readingTime: 4
  },
  {
    id: '3',
    slug: 'ethereum-defi-growth-philippines',
    title: 'DeFi Protocols Gain Traction Among Filipino Crypto Investors',
    description: 'Decentralized finance applications see increased usage as Filipinos seek higher yields on digital assets.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    author: mockAuthors[0],
    category: 'DeFi',
    tags: ['Ethereum', 'DeFi', 'Yield Farming', 'Philippines'],
    datePublished: '2024-01-13T11:15:00+08:00',
    readingTime: 6,
    tickers: ['ETH', 'SOL']
  },
  {
    id: '4',
    slug: 'crypto-security-threats-philippines-2024',
    title: 'Rising Crypto Scams Prompt Security Awareness Campaign in PH',
    description: 'Local authorities and crypto exchanges collaborate to educate users about common security threats and prevention measures.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    author: mockAuthors[1],
    category: 'Security',
    tags: ['Security', 'Scams', 'Education', 'Safety'],
    datePublished: '2024-01-12T16:45:00+08:00',
    readingTime: 7
  },
  {
    id: '5',
    slug: 'solana-nft-projects-filipino-artists',
    title: 'Filipino Artists Embrace Solana NFTs as Digital Art Market Expands',
    description: 'Local creators increasingly turn to Solana blockchain for minting and selling digital art collections.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    author: mockAuthors[0],
    category: 'NFTs',
    tags: ['Solana', 'NFT', 'Art', 'Filipino', 'Digital'],
    datePublished: '2024-01-11T13:20:00+08:00',
    readingTime: 5,
    tickers: ['SOL']
  },
  {
    id: '6',
    slug: 'gcash-crypto-integration-update',
    title: 'GCash Enhances Cryptocurrency Features for 90M+ Users',
    description: 'Popular e-wallet expands crypto services with new trading pairs and improved user interface.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    author: mockAuthors[1],
    category: 'Fintech',
    tags: ['GCash', 'Mobile', 'Trading', 'Adoption'],
    datePublished: '2024-01-10T10:00:00+08:00',
    readingTime: 4
  },
  {
    id: '7',
    slug: 'cardano-blockchain-philippine-education',
    title: 'Cardano Foundation Partners with Philippine Universities',
    description: 'Blockchain education initiative aims to train next generation of Filipino developers and entrepreneurs.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    author: mockAuthors[0],
    category: 'Education',
    tags: ['Cardano', 'Education', 'Universities', 'Blockchain'],
    datePublished: '2024-01-09T15:30:00+08:00',
    readingTime: 6,
    tickers: ['ADA']
  },
  {
    id: '8',
    slug: 'cryptocurrency-taxation-bir-clarification',
    title: 'BIR Clarifies Cryptocurrency Taxation Rules for 2024',
    description: 'Bureau of Internal Revenue provides updated guidance on crypto trading and investment tax obligations.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    author: mockAuthors[1],
    category: 'Regulation',
    tags: ['BIR', 'Taxation', 'Compliance', 'Legal'],
    datePublished: '2024-01-08T12:00:00+08:00',
    readingTime: 8
  },
  {
    id: '9',
    slug: 'bsp-cbdc-guidelines-2025',
    title: 'BSP Finalizes CBDC Guidelines for Q1 2025 Launch',
    description: 'Central bank digital currency framework completed as Philippines prepares for digital peso pilot program.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    author: mockAuthors[0],
    category: 'Regulation',
    tags: ['BSP', 'CBDC', 'Digital Peso', 'Central Bank'],
    datePublished: '2024-01-16T08:00:00+08:00',
    readingTime: 5,
    featured: true
  },
  {
    id: '10',
    slug: 'bitcoin-surges-philippine-adoption',
    title: 'Bitcoin Surges Past ₱2.8M as Philippine Adoption Accelerates',
    description: 'Major cryptocurrency exchanges in the Philippines report record trading volumes as Bitcoin reaches new heights, driven by institutional interest and regulatory clarity from BSP.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1751755359997-40f4fb2293cd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: mockAuthors[3], // Carlos Mendoza
    category: 'Breaking News',
    tags: ['Bitcoin', 'Philippines', 'Trading', 'BSP'],
    datePublished: '2024-12-20T08:30:00Z',
    readingTime: 6,
    featured: true,
    tickers: ['BTC']
  },
  {
    id: '11',
    slug: 'ethereum-gas-fees-drop',
    title: 'Ethereum Gas Fees Drop 60% Following Network Upgrade',
    description: 'Latest Ethereum improvement proposal significantly reduces transaction costs, benefiting DeFi users across Southeast Asia.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1751308759380-03e5abd14510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: mockAuthors[2], // Anna Reyes
    category: 'Technology',
    tags: ['Ethereum', 'Gas Fees', 'DeFi', 'Network Upgrade'],
    datePublished: '2024-12-19T14:45:00Z',
    readingTime: 5,
    tickers: ['ETH']
  },
  {
    id: '12',
    slug: 'philippines-crypto-trading-volume-record',
    title: 'Philippine Crypto Market Reaches Record High Trading Volume',
    description: 'Local cryptocurrency exchanges report unprecedented trading activity as retail and institutional investors increase their digital asset allocations.',
    content: longContent,
    coverImage: 'https://images.unsplash.com/photo-1627686981794-b6505f51024f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: mockAuthors[3], // Carlos Mendoza
    category: 'Market',
    tags: ['Philippines', 'Trading Volume', 'Market Analysis', 'Institutional'],
    datePublished: '2024-12-19T10:30:00Z',
    readingTime: 7,
    tickers: ['BTC', 'ETH']
  }
];

// Additional mock articles for Latest Crypto News
export const latestCryptoNewsArticles: NewsPost[] = [
  {
    id: 'latest-1',
    slug: 'bitcoin-surges-philippine-remittances',
    title: 'Bitcoin Surges Past ₱2.8M as Philippine Remittances Drive Adoption',
    description: 'Growing use of cryptocurrency for overseas Filipino worker remittances pushes BTC to new local highs, with major money transfer operators integrating blockchain solutions.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[3],
    category: 'Market News',
    tags: ['Bitcoin', 'Remittances', 'OFW', 'Philippines'],
    datePublished: '2024-12-20T14:45:00Z',
    readingTime: 4,
    tickers: ['BTC']
  },
  {
    id: 'latest-2',
    slug: 'ethereum-regulatory-scrutiny-southeast-asia',
    title: 'Ethereum Faces Regulatory Scrutiny in Southeast Asia',
    description: 'New regulations proposed by regional financial authorities could impact ETH trading across ASEAN markets as governments seek to balance innovation with consumer protection.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[2],
    category: 'Regulation',
    tags: ['Ethereum', 'Regulation', 'ASEAN', 'Southeast Asia'],
    datePublished: '2024-12-20T14:30:00Z',
    readingTime: 5,
    tickers: ['ETH']
  },
  {
    id: 'latest-3',
    slug: 'binance-philippines-p2p-trading-expansion',
    title: 'Binance Philippines Expands P2P Trading Options',
    description: 'The exchange adds support for more local payment methods including GCash and PayMaya integrations, making crypto trading more accessible to Filipino users.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Exchanges',
    tags: ['Binance', 'P2P Trading', 'GCash', 'PayMaya'],
    datePublished: '2024-12-20T14:15:00Z',
    readingTime: 3,
    tickers: ['BNB']
  },
  {
    id: 'latest-4',
    slug: 'bsp-cbdc-pilot-program-announcement',
    title: 'Philippine Central Bank Explores CBDC Pilot Program',
    description: 'BSP announces partnership with local fintech companies to test digital peso implementation, marking a significant step toward central bank digital currency adoption.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[0],
    category: 'Regulation',
    tags: ['BSP', 'CBDC', 'Digital Peso', 'Fintech'],
    datePublished: '2024-12-20T13:50:00Z',
    readingTime: 6,
    featured: true
  },
  {
    id: 'latest-5',
    slug: 'defi-protocol-security-breach-50m-loss',
    title: 'Major DeFi Protocol Suffers Security Breach',
    description: 'Hackers exploit smart contract vulnerability resulting in $50M loss, affecting Philippine users and highlighting the importance of security audits in decentralized finance.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[2],
    category: 'Security',
    tags: ['DeFi', 'Security', 'Hack', 'Smart Contracts'],
    datePublished: '2024-12-20T13:35:00Z',
    readingTime: 5
  },
  {
    id: 'latest-6',
    slug: 'solana-network-brief-outage-restoration',
    title: 'Solana Network Experiences Brief Outage',
    description: 'Transaction processing delayed for 30 minutes before full network restoration, raising questions about network stability and validator coordination.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[2],
    category: 'Technology',
    tags: ['Solana', 'Network', 'Outage', 'Blockchain'],
    datePublished: '2024-12-20T13:20:00Z',
    readingTime: 3,
    tickers: ['SOL']
  },
  {
    id: 'latest-7',
    slug: 'philippine-blockchain-week-2024-speakers',
    title: 'Philippine Blockchain Week 2024 Announces Speakers',
    description: 'Industry leaders from Coinbase, Binance, and local exchanges to participate in Manila event, showcasing the growing importance of the Philippine crypto market.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Events',
    tags: ['Blockchain Week', 'Manila', 'Conference', 'Industry'],
    datePublished: '2024-12-20T12:45:00Z',
    readingTime: 4
  },
  {
    id: 'latest-8',
    slug: 'cardano-development-funding-shortfall',
    title: 'Cardano Development Team Faces Funding Shortfall',
    description: 'Treasury reserves running low as bear market impacts development funding for key projects, potentially affecting roadmap timelines and ecosystem growth.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[3],
    category: 'Development',
    tags: ['Cardano', 'Funding', 'Development', 'Treasury'],
    datePublished: '2024-12-20T12:30:00Z',
    readingTime: 5,
    tickers: ['ADA']
  },
  {
    id: 'latest-9',
    slug: 'philippine-crypto-savings-platform-launch',
    title: 'Philippine Startup Launches Crypto Savings Platform',
    description: 'New fintech allows Filipinos to save in stablecoins with competitive interest rates, offering an alternative to traditional banking products.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[0],
    category: 'Fintech',
    tags: ['Savings', 'Stablecoins', 'Fintech', 'Philippines'],
    datePublished: '2024-12-20T12:15:00Z',
    readingTime: 4
  },
  {
    id: 'latest-10',
    slug: 'ripple-sec-case-court-evidence-review',
    title: 'Ripple vs SEC Case Update: Court Reviews Evidence',
    description: 'Legal proceedings continue with potential implications for XRP classification, as the crypto industry watches for precedent-setting decisions.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Legal',
    tags: ['Ripple', 'SEC', 'Legal', 'XRP'],
    datePublished: '2024-12-20T11:55:00Z',
    readingTime: 6,
    tickers: ['XRP']
  },
  {
    id: 'latest-11',
    slug: 'philippine-banks-blockchain-trade-finance',
    title: 'Philippine Banks Pilot Blockchain Trade Finance',
    description: 'Major local banks test distributed ledger technology for international trade settlements, potentially revolutionizing cross-border business transactions.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[3],
    category: 'Banking',
    tags: ['Banks', 'Trade Finance', 'Blockchain', 'Philippines'],
    datePublished: '2024-12-20T11:40:00Z',
    readingTime: 5
  },
  {
    id: 'latest-12',
    slug: 'nft-market-decline-q4-trading-volumes',
    title: 'NFT Market Continues Decline in Q4',
    description: 'Trading volumes drop 78% compared to previous year as interest wanes globally, with creators and platforms adapting to new market realities.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[2],
    category: 'NFTs',
    tags: ['NFT', 'Market Decline', 'Trading Volume', 'Q4'],
    datePublished: '2024-12-20T11:25:00Z',
    readingTime: 4
  },
  {
    id: 'latest-13',
    slug: 'polygon-manila-developer-workshop',
    title: 'Polygon Announces Manila Developer Workshop',
    description: 'Free training sessions for Filipino developers interested in Web3 and DApp creation, part of Polygon\'s global developer education initiative.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[2],
    category: 'Education',
    tags: ['Polygon', 'Developer', 'Workshop', 'Manila'],
    datePublished: '2024-12-20T11:10:00Z',
    readingTime: 3
  },
  {
    id: 'latest-14',
    slug: 'lightning-network-adoption-philippines',
    title: 'Lightning Network Adoption Grows in Philippines',
    description: 'Local merchants increasingly accept Bitcoin payments via Lightning for faster transactions, reducing costs and improving user experience.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Payments',
    tags: ['Lightning Network', 'Bitcoin', 'Payments', 'Merchants'],
    datePublished: '2024-12-20T10:45:00Z',
    readingTime: 4,
    tickers: ['BTC']
  },
  {
    id: 'latest-15',
    slug: 'celsius-network-creditors-payout-decision',
    title: 'Celsius Network Creditors Await Payout Decision',
    description: 'Philippine users among thousands waiting for bankruptcy court ruling on fund recovery, highlighting risks in centralized crypto lending platforms.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[0],
    category: 'Legal',
    tags: ['Celsius', 'Bankruptcy', 'Creditors', 'Recovery'],
    datePublished: '2024-12-20T10:30:00Z',
    readingTime: 5
  },
  {
    id: 'latest-16',
    slug: 'chainlink-oracle-services-asia-expansion',
    title: 'Chainlink Expands Oracle Services in Asia',
    description: 'Price feeds now include PHP pairs for better DeFi integration in Philippine market, enabling more sophisticated decentralized financial products.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[2],
    category: 'DeFi',
    tags: ['Chainlink', 'Oracle', 'DeFi', 'Philippines'],
    datePublished: '2024-12-20T10:15:00Z',
    readingTime: 4,
    tickers: ['LINK']
  },
  {
    id: 'latest-17',
    slug: 'philippine-crypto-tax-guidelines-bir',
    title: 'Philippine Crypto Tax Guidelines Released',
    description: 'BIR publishes comprehensive framework for cryptocurrency taxation, providing clarity for traders and investors on compliance requirements.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[0],
    category: 'Regulation',
    tags: ['BIR', 'Taxation', 'Guidelines', 'Compliance'],
    datePublished: '2024-12-20T09:55:00Z',
    readingTime: 7
  },
  {
    id: 'latest-18',
    slug: 'terra-luna-classic-community-split',
    title: 'Terra Luna Classic Community Split on Proposals',
    description: 'Governance disputes threaten recovery efforts as validators disagree on path forward, highlighting challenges in decentralized governance.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[3],
    category: 'Governance',
    tags: ['Terra Luna', 'Governance', 'Community', 'Recovery'],
    datePublished: '2024-12-20T09:40:00Z',
    readingTime: 5,
    tickers: ['LUNC']
  },
  {
    id: 'latest-19',
    slug: 'avalanche-philippine-developer-grants',
    title: 'Avalanche Launches Philippine Developer Grant Program',
    description: 'Up to $100K available for local blockchain projects building on Avalanche network, fostering innovation in the Philippine Web3 ecosystem.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[2],
    category: 'Development',
    tags: ['Avalanche', 'Grants', 'Developers', 'Philippines'],
    datePublished: '2024-12-20T09:25:00Z',
    readingTime: 4,
    tickers: ['AVAX']
  },
  {
    id: 'latest-20',
    slug: 'philippine-peso-stablecoin-pilot-testing',
    title: 'Philippine Peso Stablecoin Pilot Begins Testing',
    description: 'Local consortium launches PHP-pegged digital currency for domestic e-commerce use, potentially transforming digital payments in the Philippines.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Innovation',
    tags: ['Stablecoin', 'PHP', 'E-commerce', 'Digital Currency'],
    datePublished: '2024-12-20T09:10:00Z',
    readingTime: 5
  },
  {
    id: 'latest-21',
    slug: 'metaverse-real-estate-boom-philippines',
    title: 'Metaverse Real Estate Boom Hits Philippine Virtual Worlds',
    description: 'Filipino investors purchase digital land in popular metaverse platforms, driving up virtual property prices and creating new investment opportunities.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[3],
    category: 'Metaverse',
    tags: ['Metaverse', 'Real Estate', 'Virtual Worlds', 'Investment'],
    datePublished: '2024-12-20T08:55:00Z',
    readingTime: 6
  },
  {
    id: 'latest-22',
    slug: 'axie-infinity-player-base-decline',
    title: 'Axie Infinity Player Base Continues to Decline',
    description: 'Daily active users drop to lowest levels since 2021 as P2E gaming model faces sustainability challenges and market saturation.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[2],
    category: 'Gaming',
    tags: ['Axie Infinity', 'Gaming', 'P2E', 'Player Base'],
    datePublished: '2024-12-20T08:40:00Z',
    readingTime: 4,
    tickers: ['AXS']
  },
  {
    id: 'latest-23',
    slug: 'web3-gaming-summit-manila-2025',
    title: 'Web3 Gaming Summit Manila 2025 Dates Announced',
    description: 'Major gaming companies and blockchain developers to gather in BGC for three-day conference next March, highlighting the Philippines as a Web3 gaming hub.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Events',
    tags: ['Web3', 'Gaming', 'Summit', 'Manila'],
    datePublished: '2024-12-20T08:25:00Z',
    readingTime: 3
  }
];

export const mockNewsEngagementData: Record<string, { views: string }> = {
  '1': { views: '45.2K' },
  '2': { views: '32.8K' },
  '3': { views: '28.5K' },
  '4': { views: '41.7K' },
  '5': { views: '19.3K' },
  '6': { views: '36.9K' },
  '7': { views: '22.1K' },
  '8': { views: '38.4K' },
  '9': { views: '44.6K' },
  '10': { views: '52.3K' },
  '11': { views: '29.7K' },
  '12': { views: '33.1K' }
};

export const mockGuides: Guide[] = [
  {
    id: '1',
    slug: 'how-to-buy-bitcoin-philippines-2024',
    title: 'How to Buy Bitcoin in the Philippines: Complete 2024 Guide',
    description: 'Step-by-step guide to purchasing Bitcoin safely using Philippine payment methods like GCash, BDO, and BPI.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[0],
    category: 'Beginner',
    tags: ['Bitcoin', 'Tutorial', 'Philippines', 'GCash', 'Banking'],
    datePublished: '2024-01-01T10:00:00+08:00',
    readingTime: '5 min read',
    difficulty: 'Beginner',
    tickers: ['BTC']
  },
  {
    id: '2',
    slug: 'coins-ph-vs-pdax-vs-maya-comparison',
    title: 'Coins.ph vs PDAX vs Maya: Philippine Crypto Exchange Comparison',
    description: 'Detailed comparison of the top cryptocurrency exchanges available to Filipino users.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Exchanges',
    tags: ['Comparison', 'Exchanges', 'Coins.ph', 'PDAX', 'Maya'],
    datePublished: '2023-12-28T14:00:00+08:00',
    readingTime: '5 min read',
    difficulty: 'Beginner'
  },
  {
    id: '3',
    slug: 'cryptocurrency-taxes-philippines-guide',
    title: 'Cryptocurrency Taxes in the Philippines: What You Need to Know',
    description: 'Comprehensive guide to understanding and complying with crypto tax obligations in the Philippines.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[0],
    category: 'Legal',
    tags: ['Taxes', 'BIR', 'Compliance', 'Legal', 'Philippines'],
    datePublished: '2023-12-25T09:00:00+08:00',
    readingTime: '5 min read',
    difficulty: 'Intermediate'
  },
  {
    id: '4',
    slug: 'self-custody-crypto-wallet-security',
    title: 'Self-Custody 101: Securing Your Cryptocurrency in the Philippines',
    description: 'Learn how to safely store and manage your crypto assets using hardware and software wallets.',
    content: longContent,
    coverImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: mockAuthors[1],
    category: 'Security',
    tags: ['Self-Custody', 'Wallets', 'Security', 'Hardware', 'Software'],
    datePublished: '2023-12-20T16:00:00+08:00',
    readingTime: '5 min read',
    difficulty: 'Advanced'
  }
];

export const mockExchanges: Exchange[] = [
  {
    id: '1',
    slug: 'coins-ph',
    name: 'Coins.ph',
    description: 'Leading Philippine cryptocurrency exchange with comprehensive trading and payment services.',
    logo: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.5,
    fees: {
      trading: '0.25% - 1.5%',
      withdrawal: 'Free for PHP, varies for crypto'
    },
    funding: ['GCash', 'BDO', 'BPI', 'Maya', 'Bank Transfer'],
    kyc: 'Level 1: Phone, Level 2: ID + Selfie, Level 3: Proof of Income',
    phAvailable: true,
    pros: [
      'Widely accepted in Philippines',
      'Multiple funding options',
      'User-friendly mobile app',
      'Good customer support'
    ],
    cons: [
      'Higher fees compared to some competitors',
      'Limited advanced trading features',
      'Occasional downtime during high volume'
    ],
    affiliateLink: 'https://coins.ph/ref/cryptopress'
  },
  {
    id: '2',
    slug: 'pdax',
    name: 'PDAX',
    description: 'Professional digital asset exchange regulated by BSP with advanced trading features.',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.3,
    fees: {
      trading: '0.10% - 0.50%',
      withdrawal: 'Free PHP withdrawal'
    },
    funding: ['Bank Transfer', 'Online Banking', 'Over-the-Counter'],
    kyc: 'Basic: Email verification, Full: Government ID + Proof of Billing',
    phAvailable: true,
    pros: [
      'Low trading fees',
      'BSP regulated and compliant',
      'Professional trading interface',
      'Strong security measures'
    ],
    cons: [
      'Limited funding options compared to Coins.ph',
      'Steeper learning curve for beginners',
      'Smaller selection of cryptocurrencies'
    ],
    affiliateLink: 'https://pdax.ph/ref/cryptopress'
  },
  {
    id: '3',
    slug: 'maya-crypto',
    name: 'Maya Crypto',
    description: 'Integrated crypto trading within the popular Maya digital wallet ecosystem.',
    logo: 'https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.1,
    fees: {
      trading: '0.5% - 1.0%',
      withdrawal: 'Network fees apply'
    },
    funding: ['Maya Wallet', 'Bank Transfer', '7-Eleven'],
    kyc: 'Maya verification required, Additional crypto KYC',
    phAvailable: true,
    pros: [
      'Seamless integration with Maya wallet',
      'Easy access through existing Maya users',
      'Good mobile experience',
      'Wide network of cash-in options'
    ],
    cons: [
      'Higher fees than specialized exchanges',
      'Limited cryptocurrency selection',
      'Basic trading features only'
    ]
  }
];

export const mockWallets: Wallet[] = [
  {
    id: '1',
    slug: 'metamask',
    name: 'MetaMask',
    description: 'Popular browser extension and mobile wallet for Ethereum and EVM-compatible networks.',
    logo: 'https://images.pexels.com/photos/1181684/pexels-photo-1181684.jpeg?auto=compress&cs=tinysrgb&w=200',
    type: 'Non-Custodial',
    platforms: ['Browser Extension', 'Mobile App', 'Hardware Integration'],
    rating: 4.6,
    features: [
      'DeFi integration',
      'NFT support',
      'Multiple network support',
      'Hardware wallet compatibility'
    ],
    pros: [
      'Most popular and widely supported',
      'Strong security features',
      'Open source',
      'Regular updates and improvements'
    ],
    cons: [
      'Only supports Ethereum-based assets',
      'Can be overwhelming for beginners',
      'Gas fees can be high'
    ]
  },
  {
    id: '2',
    slug: 'trust-wallet',
    name: 'Trust Wallet',
    description: 'Multi-cryptocurrency mobile wallet with built-in DApp browser and staking features.',
    logo: 'https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=200',
    type: 'Non-Custodial',
    platforms: ['Mobile App', 'Browser Extension'],
    rating: 4.4,
    features: [
      'Multi-blockchain support',
      'Built-in DApp browser',
      'Staking rewards',
      'NFT gallery'
    ],
    pros: [
      'Supports many cryptocurrencies',
      'User-friendly interface',
      'Regular security updates',
      'Staking opportunities'
    ],
    cons: [
      'Limited desktop options',
      'Customer support can be slow',
      'Some advanced features missing'
    ]
  },
  {
    id: '3',
    slug: 'ledger-nano-s',
    name: 'Ledger Nano S Plus',
    description: 'Hardware wallet providing offline storage for cryptocurrencies with maximum security.',
    logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200',
    type: 'Non-Custodial',
    platforms: ['Hardware Device', 'Desktop App', 'Mobile App'],
    rating: 4.8,
    features: [
      'Offline cold storage',
      '1000+ cryptocurrency support',
      'Secure element chip',
      'Pin code protection'
    ],
    pros: [
      'Highest security level',
      'Supports many cryptocurrencies',
      'Proven track record',
      'Regular firmware updates'
    ],
    cons: [
      'Requires purchase of hardware device',
      'Learning curve for setup',
      'Limited mobile functionality'
    ],
    affiliateLink: 'https://ledger.com/?r=cryptopress'
  }
];