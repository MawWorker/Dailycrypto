import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CoinDetailContent } from '@/components/coin/coin-detail-content';

interface CoinPageProps {
  params: Promise<{
    symbol: string;
  }>;
}

// Generate static params for popular coins
export async function generateStaticParams() {
  const popularCoins = [
    'btc', 'eth', 'bnb', 'ada', 'sol', 'xrp', 'dot', 'avax', 'matic', 'link',
    'ltc', 'doge', 'bch', 'xlm', 'vet', 'fil', 'atom', 'algo', 'hbar', 'near',
    'icp', 'flow', 'egld', 'xtz', 'theta', 'eos', 'aave', 'mkr', 'comp', 'uni',
    'sushi', 'cake', 'crv', 'bal', 'snx', 'yfi', 'inch', 'alpha', 'for', 'auto'
  ];

  return popularCoins.map((symbol) => ({
    symbol: symbol.toLowerCase()
  }));
}

export async function generateMetadata({ params }: CoinPageProps): Promise<Metadata> {
  const { symbol } = await params;
  const coinSymbol = symbol.toUpperCase();
  
  return {
    title: `${coinSymbol} Price & Analysis - Live ${coinSymbol} Data | DailyCrypto`,
    description: `Get real-time ${coinSymbol} price, market data, news, and analysis. Track ${coinSymbol} performance with comprehensive charts and statistics on DailyCrypto Philippines.`,
    openGraph: {
      title: `${coinSymbol} Price & Analysis - Live Data`,
      description: `Get real-time ${coinSymbol} price, market data, news, and analysis. Track ${coinSymbol} performance with comprehensive charts and statistics.`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${coinSymbol} Price & Analysis - Live Data`,
      description: `Get real-time ${coinSymbol} price, market data, news, and analysis. Track ${coinSymbol} performance with comprehensive charts and statistics.`,
    }
  };
}

export default async function CoinPage({ params }: CoinPageProps) {
  const { symbol } = await params;
  
  // Validate symbol format
  if (!symbol || symbol.length < 2 || symbol.length > 10) {
    notFound();
  }

  return <CoinDetailContent symbol={symbol.toLowerCase()} />;
}