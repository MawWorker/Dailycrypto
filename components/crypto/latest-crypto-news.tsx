"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import { Rss, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface NewsItem {
  id: string;
  time: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  headline: string;
  blurb: string;
  badge?: string;
  slug: string;
}

interface SentimentDotProps {
  sentiment: 'positive' | 'negative' | 'neutral';
}

const SentimentDot = ({ sentiment }: SentimentDotProps) => {
  const dotColors = {
    positive: 'bg-emerald-500',
    negative: 'bg-red-500',
    neutral: 'bg-slate-400 dark:bg-slate-500'
  };

  return (
    <div className={`w-2 h-2 rounded-full ${dotColors[sentiment]} flex-shrink-0`} />
  );
};

export const LatestCryptoNews = () => {
  const newsData = useMemo<NewsItem[]>(() => [
    {
      id: '1',
      time: '2:45 PM',
      sentiment: 'positive',
      headline: 'Bitcoin Surges Past ₱2.8M as Philippine Remittances Drive Adoption',
      blurb: 'Growing use of cryptocurrency for overseas Filipino worker remittances pushes BTC to new local highs.',
      badge: 'BTC +8.24%',
      slug: 'bitcoin-surges-philippine-remittances'
    },
    {
      id: '2',
      time: '2:30 PM',
      sentiment: 'negative',
      headline: 'Ethereum Faces Regulatory Scrutiny in Southeast Asia',
      blurb: 'New regulations proposed by regional financial authorities could impact ETH trading across ASEAN markets.',
      badge: 'ETH -4.48%',
      slug: 'ethereum-regulatory-scrutiny-southeast-asia'
    },
    {
      id: '3',
      time: '2:15 PM',
      sentiment: 'neutral',
      headline: 'Binance Philippines Expands P2P Trading Options',
      blurb: 'The exchange adds support for more local payment methods including GCash and PayMaya integrations.',
      slug: 'binance-philippines-p2p-trading-expansion'
    },
    {
      id: '4',
      time: '1:50 PM',
      sentiment: 'positive',
      headline: 'Philippine Central Bank Explores CBDC Pilot Program',
      blurb: 'BSP announces partnership with local fintech companies to test digital peso implementation.',
      badge: 'BSP +2.10%',
      slug: 'bsp-cbdc-pilot-program-announcement'
    },
    {
      id: '5',
      time: '1:35 PM',
      sentiment: 'negative',
      headline: 'Major DeFi Protocol Suffers Security Breach',
      blurb: 'Hackers exploit smart contract vulnerability resulting in $50M loss, affecting Philippine users.',
      badge: 'DEFI -12.67%',
      slug: 'defi-protocol-security-breach-50m-loss'
    },
    {
      id: '6',
      time: '1:20 PM',
      sentiment: 'neutral',
      headline: 'Solana Network Experiences Brief Outage',
      blurb: 'Transaction processing delayed for 30 minutes before full network restoration.',
      badge: 'SOL -1.23%',
      slug: 'solana-network-brief-outage-restoration'
    },
    {
      id: '7',
      time: '12:45 PM',
      sentiment: 'positive',
      headline: 'Philippine Blockchain Week 2024 Announces Speakers',
      blurb: 'Industry leaders from Coinbase, Binance, and local exchanges to participate in Manila event.',
      slug: 'philippine-blockchain-week-2024-speakers'
    },
    {
      id: '8',
      time: '12:30 PM',
      sentiment: 'negative',
      headline: 'Cardano Development Team Faces Funding Shortfall',
      blurb: 'Treasury reserves running low as bear market impacts development funding for key projects.',
      badge: 'ADA -6.78%',
      slug: 'cardano-development-funding-shortfall'
    },
    {
      id: '9',
      time: '12:15 PM',
      sentiment: 'positive',
      headline: 'Philippine Startup Launches Crypto Savings Platform',
      blurb: 'New fintech allows Filipinos to save in stablecoins with competitive interest rates.',
      badge: 'USDC +0.01%',
      slug: 'philippine-crypto-savings-platform-launch'
    },
    {
      id: '10',
      time: '11:55 AM',
      sentiment: 'neutral',
      headline: 'Ripple vs SEC Case Update: Court Reviews Evidence',
      blurb: 'Legal proceedings continue with potential implications for XRP classification.',
      slug: 'ripple-sec-case-court-evidence-review'
    },
    {
      id: '11',
      time: '11:40 AM',
      sentiment: 'positive',
      headline: 'Philippine Banks Pilot Blockchain Trade Finance',
      blurb: 'Major local banks test distributed ledger technology for international trade settlements.',
      badge: 'BPI +1.45%',
      slug: 'philippine-banks-blockchain-trade-finance'
    },
    {
      id: '12',
      time: '11:25 AM',
      sentiment: 'negative',
      headline: 'NFT Market Continues Decline in Q4',
      blurb: 'Trading volumes drop 78% compared to previous year as interest wanes globally.',
      badge: 'NFT -45.23%',
      slug: 'nft-market-decline-q4-trading-volumes'
    },
    {
      id: '13',
      time: '11:10 AM',
      sentiment: 'neutral',
      headline: 'Polygon Announces Manila Developer Workshop',
      blurb: 'Free training sessions for Filipino developers interested in Web3 and DApp creation.',
      slug: 'polygon-manila-developer-workshop'
    },
    {
      id: '14',
      time: '10:45 AM',
      sentiment: 'positive',
      headline: 'Lightning Network Adoption Grows in Philippines',
      blurb: 'Local merchants increasingly accept Bitcoin payments via Lightning for faster transactions.',
      badge: 'LN +15.67%',
      slug: 'lightning-network-adoption-philippines'
    },
    {
      id: '15',
      time: '10:30 AM',
      sentiment: 'negative',
      headline: 'Celsius Network Creditors Await Payout Decision',
      blurb: 'Philippine users among thousands waiting for bankruptcy court ruling on fund recovery.',
      slug: 'celsius-network-creditors-payout-decision'
    },
    {
      id: '16',
      time: '10:15 AM',
      sentiment: 'neutral',
      headline: 'Chainlink Expands Oracle Services in Asia',
      blurb: 'Price feeds now include PHP pairs for better DeFi integration in Philippine market.',
      badge: 'LINK +0.85%',
      slug: 'chainlink-oracle-services-asia-expansion'
    },
    {
      id: '17',
      time: '9:55 AM',
      sentiment: 'positive',
      headline: 'Philippine Crypto Tax Guidelines Released',
      blurb: 'BIR publishes comprehensive framework for cryptocurrency taxation, providing clarity for traders.',
      slug: 'philippine-crypto-tax-guidelines-bir'
    },
    {
      id: '18',
      time: '9:40 AM',
      sentiment: 'negative',
      headline: 'Terra Luna Classic Community Split on Proposals',
      blurb: 'Governance disputes threaten recovery efforts as validators disagree on path forward.',
      badge: 'LUNC -8.91%',
      slug: 'terra-luna-classic-community-split'
    },
    {
      id: '19',
      time: '9:25 AM',
      sentiment: 'neutral',
      headline: 'Avalanche Launches Philippine Developer Grant Program',
      blurb: 'Up to $100K available for local blockchain projects building on Avalanche network.',
      slug: 'avalanche-philippine-developer-grants'
    },
    {
      id: '20',
      time: '9:10 AM',
      sentiment: 'positive',
      headline: 'Philippine Peso Stablecoin Pilot Begins Testing',
      blurb: 'Local consortium launches PHP-pegged digital currency for domestic e-commerce use.',
      badge: 'PHPX +0.00%',
      slug: 'philippine-peso-stablecoin-pilot-testing'
    },
    {
      id: '21',
      time: '8:55 AM',
      sentiment: 'positive',
      headline: 'Metaverse Real Estate Boom Hits Philippine Virtual Worlds',
      blurb: 'Filipino investors purchase digital land in popular metaverse platforms, driving up virtual property prices.',
      badge: 'MANA +12.45%',
      slug: 'metaverse-real-estate-boom-philippines'
    },
    {
      id: '22',
      time: '8:40 AM',
      sentiment: 'negative',
      headline: 'Axie Infinity Player Base Continues to Decline',
      blurb: 'Daily active users drop to lowest levels since 2021 as P2E gaming model faces sustainability challenges.',
      badge: 'AXS -18.32%',
      slug: 'axie-infinity-player-base-decline'
    },
    {
      id: '23',
      time: '8:25 AM',
      sentiment: 'neutral',
      headline: 'Web3 Gaming Summit Manila 2025 Dates Announced',
      blurb: 'Major gaming companies and blockchain developers to gather in BGC for three-day conference next March.',
      slug: 'web3-gaming-summit-manila-2025'
    }
  ], []);

  return (
    <div className="w-full h-full overflow-hidden rounded-2xl bg-[var(--color-surface)] shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col lg:h-[600px]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100 dark:border-slate-700">
        <div className="flex items-center gap-2 sm:gap-3">
          <Rss className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary-brand)]" />
          <h3 className="text-sm sm:text-base font-semibold text-[var(--color-text-primary)] font-[var(--font-display)] leading-none">Latest Crypto News</h3>
        </div>
        <button className="flex items-center gap-1 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary-brand)] transition-colors whitespace-nowrap leading-none h-4 sm:h-5">
          <Link href="/news/latest" className="flex items-center gap-1">
            All
          </Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
        </button>
      </div>

      {/* Today Separator */}
      <div className="px-4 sm:px-6 py-2 border-b border-slate-100 dark:border-slate-700 flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xs font-medium text-[var(--color-text-primary)]">Today</span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>

      {/* Scrollable News List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-400 dark:hover:scrollbar-thumb-slate-500 min-h-0" style={{ maxHeight: 'calc(600px - 110px)' }}>
        {newsData.map((item, index) => (
          <div key={item.id}>
            <div className="p-3 sm:p-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer group rounded-xl">
              <Link href={`/news/${item.slug}`}>
              <div className="flex items-start gap-2">
                <SentimentDot sentiment={item.sentiment} />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs text-[var(--color-text-secondary)] font-mono">{item.time}</span>
                    {item.badge && (
                      <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${
                        item.badge.includes('+') 
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' 
                          : item.badge.includes('-')
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          : 'bg-slate-100 dark:bg-slate-800 text-[var(--color-text-secondary)]'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-[var(--color-text-primary)] font-[var(--font-display)] text-xs leading-tight mb-1 group-hover:text-[var(--color-primary-brand)] transition-colors">
                    {item.headline}
                  </h4>
                  
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                    {item.blurb}
                  </p>
                </div>
              </div>
              </Link>
            </div>
            
            {/* Hairline divider - hide after last item */}
            {index < newsData.length - 1 && (
              <div className="mx-3 sm:mx-4 h-px bg-slate-100 dark:bg-slate-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};