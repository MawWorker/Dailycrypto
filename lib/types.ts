export interface Coin {
  id: string;
  symbol: string;
  name: string;
  pricePHP: number;
  change24h: number;
  change7d: number;
  marketCapPHP: number;
  volume24hPHP: number;
  sparkline7d: number[];
  rank: number;
  image?: string;
  description?: string;
}

export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  author: Author;
  category: string;
  tags: string[];
  datePublished: string;
  dateModified?: string;
  readingTime: string | number;
  featured?: boolean;
  tickers?: string[];
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  author: Author;
  category: string;
  tags: string[];
  datePublished: string;
  dateModified?: string;
  readingTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tickers?: string[];
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface Exchange {
  id: string;
  slug: string;
  name: string;
  description: string;
  logo: string;
  rating: number;
  fees: {
    trading: string;
    withdrawal: string;
  };
  funding: string[];
  kyc: string;
  phAvailable: boolean;
  pros: string[];
  cons: string[];
  affiliateLink?: string;
}

export interface Wallet {
  id: string;
  slug: string;
  name: string;
  description: string;
  logo: string;
  type: 'Custodial' | 'Non-Custodial';
  platforms: string[];
  rating: number;
  features: string[];
  pros: string[];
  cons: string[];
  affiliateLink?: string;
}