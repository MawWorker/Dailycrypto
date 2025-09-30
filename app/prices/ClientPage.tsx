'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedIndicatorNavbar } from '@/components/navbars/animated-indicator-navbar';
import { NewsletterFooter } from '@/components/footers/newsletter-footer';
import MarketTicker from '@/components/crypto/market-ticker';
import { TrendingUp, TrendingDown, ArrowUpDown, RefreshCw, AlertCircle, Crown, Star, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  total_volume: number;
  last_updated: string;
}

type SortField = 'market_cap_rank' | 'current_price' | 'price_change_percentage_24h' | 'market_cap' | 'total_volume';
type SortOrder = 'asc' | 'desc';

// Generate 98 additional mockup coins to reach 100 total
const generateMockupCoins = (): CoinData[] => {
  const mockupCoins: CoinData[] = [];
  
  const coinNames = [
    'QuantumCoin', 'NebulaCash', 'CyberToken', 'AstroFi', 'VelocityPay', 'NeonChain', 'FluxCoin', 'ZenithToken',
    'PulseCrypto', 'InfinityBit', 'CosmicCoin', 'TurboToken', 'HyperCash', 'NovaCoin', 'StormPay', 'BlazeCoin',
    'ThunderToken', 'LightningCash', 'MeteorCoin', 'GalaxyCrypto', 'PhoenixToken', 'DragonCoin', 'TitanCash', 'OmegaToken',
    'AlphaCoin', 'BetaToken', 'GammaCash', 'DeltaCoin', 'EpsilonToken', 'ZetaCash', 'EtaCoin', 'ThetaToken',
    'IotaCash', 'KappaCoin', 'LambdaToken', 'MuCash', 'NuCoin', 'XiToken', 'OmicronCash', 'PiCoin',
    'RhoToken', 'SigmaCash', 'TauCoin', 'UpsilonToken', 'PhiCash', 'ChiCoin', 'PsiToken', 'OmegaCash',
    'CrystalCoin', 'DiamondToken', 'EmeraldCash', 'RubyCoin', 'SapphireToken', 'PearlCash', 'GoldCoin', 'SilverToken',
    'PlatinumCash', 'IridiumCoin', 'TitaniumToken', 'CobaltCash', 'NickelCoin', 'CopperToken', 'ZincCash', 'IronCoin',
    'SteelToken', 'BronzeCash', 'AluminumCoin', 'MagnesiumToken', 'CalciumCash', 'PotassiumCoin', 'SodiumToken', 'LithiumCash',
    'HeliumCoin', 'NeonToken', 'ArgonCash', 'KryptonCoin', 'XenonToken', 'RadonCash', 'FranciumCoin', 'CesiumToken',
    'RubidiumCash', 'StrontiumCoin', 'BariumToken', 'RadiumCash', 'ActiniumCoin', 'ThoriumToken', 'UraniumCash', 'NeptuniumCoin',
    'PlutoniumToken', 'AmericiumCash', 'CuriumCoin', 'BerkeliumToken', 'CaliforniumCash', 'EinsteiniumCoin', 'FermiumToken', 'MendeleviumCash',
    'NobeliumCoin', 'LawrenciumToken', 'RutherfordiumCash', 'DubniumCoin', 'SeaborgiumToken', 'BohriumCash', 'HassiumCoin', 'MeitneriumToken',
    'DarmstadtiumCash', 'RoentgeniumCoin', 'CoperniciumToken', 'NihoniumCash', 'FleroviumCoin', 'MoscoviumToken', 'LivermoriumCash', 'TennessineToken'
  ];

  const symbols = [
    'QTC', 'NBC', 'CYB', 'AST', 'VEL', 'NEO', 'FLX', 'ZEN',
    'PLS', 'INF', 'CSM', 'TRB', 'HYP', 'NOV', 'STM', 'BLZ',
    'THD', 'LTG', 'MET', 'GAL', 'PHX', 'DRG', 'TTN', 'OMG',
    'ALP', 'BET', 'GAM', 'DEL', 'EPS', 'ZET', 'ETA', 'THE',
    'IOT', 'KAP', 'LAM', 'MUC', 'NUC', 'XIT', 'OMI', 'PIC',
    'RHO', 'SIG', 'TAU', 'UPS', 'PHI', 'CHI', 'PSI', 'OME',
    'CRY', 'DIA', 'EME', 'RUB', 'SAP', 'PEA', 'GLD', 'SIL',
    'PLT', 'IRI', 'TIT', 'COB', 'NIC', 'COP', 'ZIN', 'IRN',
    'STL', 'BRZ', 'ALU', 'MAG', 'CAL', 'POT', 'SOD', 'LIT',
    'HEL', 'NEO', 'ARG', 'KRY', 'XEN', 'RAD', 'FRA', 'CES',
    'RUB', 'STR', 'BAR', 'RAD', 'ACT', 'THO', 'URA', 'NEP',
    'PLU', 'AME', 'CUR', 'BER', 'CAL', 'EIN', 'FER', 'MEN',
    'NOB', 'LAW', 'RUT', 'DUB', 'SEA', 'BOH', 'HAS', 'MEI',
    'DAR', 'ROE', 'COP', 'NIH', 'FLE', 'MOS', 'LIV', 'TEN'
  ];

  for (let i = 0; i < 98; i++) {
    const rank = i + 3; // Start from rank 3 since we have 2 existing coins
    const basePrice = Math.max(0.001, Math.random() * 50000 / Math.pow(rank, 0.5));
    const change24h = (Math.random() - 0.5) * 30; // -15% to +15%
    const marketCap = basePrice * (Math.random() * 1000000000 + 100000000) / Math.pow(rank, 0.3);
    const volume = marketCap * (Math.random() * 0.3 + 0.05); // 5% to 35% of market cap
    
    mockupCoins.push({
      id: coinNames[i].toLowerCase().replace(/\s+/g, '-'),
      symbol: symbols[i],
      name: coinNames[i],
      image: `https://via.placeholder.com/32x32/3B82F6/FFFFFF?text=${symbols[i].charAt(0)}`,
      current_price: basePrice,
      market_cap: marketCap,
      market_cap_rank: rank,
      price_change_24h: (basePrice * change24h) / 100,
      price_change_percentage_24h: change24h,
      total_volume: volume,
      last_updated: new Date().toISOString()
    });
  }
  
  return mockupCoins;
};

const formatPrice = (price: number): string => {
  if (price < 0.01) {
    return `$${price.toFixed(6)}`;
  } else if (price < 1) {
    return `$${price.toFixed(4)}`;
  } else {
    return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
};

const formatMarketCap = (marketCap: number): string => {
  if (marketCap >= 1e12) {
    return `$${(marketCap / 1e12).toFixed(2)}T`;
  } else if (marketCap >= 1e9) {
    return `$${(marketCap / 1e9).toFixed(2)}B`;
  } else if (marketCap >= 1e6) {
    return `$${(marketCap / 1e6).toFixed(2)}M`;
  } else {
    return `$${marketCap.toLocaleString()}`;
  }
};

const formatVolume = (volume: number): string => {
  if (volume >= 1e9) {
    return `$${(volume / 1e9).toFixed(2)}B`;
  } else if (volume >= 1e6) {
    return `$${(volume / 1e6).toFixed(2)}M`;
  } else {
    return `$${volume.toLocaleString()}`;
  }
};

const formatPercentage = (percentage: number): string => {
  return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(2)}%`;
};

const getRankIcon = (rank: number) => {
  if (rank <= 3) {
    return <Crown className="h-4 w-4 text-yellow-500" />;
  } else if (rank <= 10) {
    return <Star className="h-4 w-4 text-blue-500" />;
  }
  return null;
};

const getRankBadge = (rank: number) => {
  if (rank <= 3) {
    return (
      <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs">
        <Crown className="h-3 w-3 mr-1" />
        Top 3
      </Badge>
    );
  } else if (rank <= 10) {
    return (
      <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs">
        <Star className="h-3 w-3 mr-1" />
        Top 10
      </Badge>
    );
  } else if (rank <= 50) {
    return (
      <Badge variant="secondary" className="text-xs">
        Top 50
      </Badge>
    );
  }
  return null;
};

export default function ClientPricesPage() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<CoinData[]>([]);
  const [paginatedCoins, setPaginatedCoins] = useState<CoinData[]>([]);
  const [sortField, setSortField] = useState<SortField>('market_cap_rank');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 20;

  const fetchCoinData = async () => {
    try {
      setError(null);
      const response = await fetch('/api/coins-market');

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data: CoinData[] = await response.json();
      
      // Add mockup coins to reach 100 total
      const mockupCoins = generateMockupCoins();
      const allCoins = [...data, ...mockupCoins];
      
      setCoins(allCoins);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Failed to fetch coin data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch cryptocurrency data');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchCoinData();
  };

  useEffect(() => {
    fetchCoinData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(() => {
      fetchCoinData();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let filtered = [...coins];

    // Sort coins
    filtered.sort((a, b) => {
      let aValue: number, bValue: number;
      
      switch (sortField) {
        case 'current_price':
          aValue = a.current_price;
          bValue = b.current_price;
          break;
        case 'price_change_percentage_24h':
          aValue = a.price_change_percentage_24h || 0;
          bValue = b.price_change_percentage_24h || 0;
          break;
        case 'market_cap':
          aValue = a.market_cap;
          bValue = b.market_cap;
          break;
        case 'total_volume':
          aValue = a.total_volume;
          bValue = b.total_volume;
          break;
        default:
          aValue = a.market_cap_rank;
          bValue = b.market_cap_rank;
      }

      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

    setFilteredCoins(filtered);
  }, [coins, sortField, sortOrder]);

  // Pagination effect
  useEffect(() => {
    const startIndex = (currentPage - 1) * coinsPerPage;
    const endIndex = startIndex + coinsPerPage;
    setPaginatedCoins(filteredCoins.slice(startIndex, endIndex));
  }, [filteredCoins, currentPage]);

  // Reset to page 1 when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sortField, sortOrder]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder(field === 'market_cap_rank' ? 'asc' : 'desc');
    }
  };

  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);
  const startIndex = (currentPage - 1) * coinsPerPage + 1;
  const endIndex = Math.min(currentPage * coinsPerPage, filteredCoins.length);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of table
    document.querySelector('.crypto-table')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <AnimatedIndicatorNavbar />
        <MarketTicker />
        <div className="container py-8">
          <div className="mb-8">
            <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2" />
            <div className="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card key={i} className="animate-pulse rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
                      <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <AnimatedIndicatorNavbar />
        <MarketTicker />
        <div className="container py-8">
          <Card className="max-w-md mx-auto rounded-2xl">
            <CardContent className="p-6 text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Error Loading Data</h2>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button onClick={handleRefresh} disabled={isRefreshing} className="rounded-xl">
                <RefreshCw className={cn("h-4 w-4 mr-2", isRefreshing && "animate-spin")} />
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatedIndicatorNavbar />
      <MarketTicker />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="rounded-xl px-4 py-2 text-sm font-medium">
                {filteredCoins.length} coins
              </Badge>
              
              {filteredCoins.length > coinsPerPage && (
                <span className="text-sm text-muted-foreground">
                  Showing {startIndex} to {endIndex} of {filteredCoins.length}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {lastUpdated && (
                <p className="text-sm text-muted-foreground">
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </p>
              )}
              <Button 
                onClick={handleRefresh} 
                disabled={isRefreshing}
                variant="outline"
                size="sm"
                className="rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <RefreshCw className={cn("h-4 w-4 mr-2", isRefreshing && "animate-spin")} />
                Refresh
              </Button>
            </div>
          </div>
        </div>


        {/* Desktop Table View */}
        <Card className="hidden md:block crypto-table rounded-2xl shadow-xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 border-b">
            <CardTitle className="text-2xl font-bold">
              Top 100 Cryptocurrency Prices
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-900/50">
                  <tr className="border-b">
                    <th className="text-left p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort('market_cap_rank')}
                        className="p-0 h-auto font-semibold hover:text-blue-600 transition-colors"
                      >
                        Rank
                        <ArrowUpDown className="h-3 w-3 ml-1 inline" />
                        {sortField === 'market_cap_rank' && (
                          <div className={cn("w-1 h-1 rounded-full ml-1", sortOrder === 'asc' ? 'bg-green-500' : 'bg-red-500')} />
                        )}
                      </Button>
                    </th>
                    <th className="text-left p-4 font-semibold">Coin</th>
                    <th className="text-right p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort('current_price')}
                        className="p-0 h-auto font-semibold hover:text-blue-600 transition-colors"
                      >
                        Price
                        <ArrowUpDown className="h-3 w-3 ml-1 inline" />
                        {sortField === 'current_price' && (
                          <div className={cn("w-1 h-1 rounded-full ml-1", sortOrder === 'asc' ? 'bg-green-500' : 'bg-red-500')} />
                        )}
                      </Button>
                    </th>
                    <th className="text-right p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort('price_change_percentage_24h')}
                        className="p-0 h-auto font-semibold hover:text-blue-600 transition-colors"
                      >
                        24h %
                        <ArrowUpDown className="h-3 w-3 ml-1 inline" />
                        {sortField === 'price_change_percentage_24h' && (
                          <div className={cn("w-1 h-1 rounded-full ml-1", sortOrder === 'asc' ? 'bg-green-500' : 'bg-red-500')} />
                        )}
                      </Button>
                    </th>
                    <th className="text-right p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort('market_cap')}
                        className="p-0 h-auto font-semibold hover:text-blue-600 transition-colors"
                      >
                        Market Cap
                        <ArrowUpDown className="h-3 w-3 ml-1 inline" />
                        {sortField === 'market_cap' && (
                          <div className={cn("w-1 h-1 rounded-full ml-1", sortOrder === 'asc' ? 'bg-green-500' : 'bg-red-500')} />
                        )}
                      </Button>
                    </th>
                    <th className="text-right p-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort('total_volume')}
                        className="p-0 h-auto font-semibold hover:text-blue-600 transition-colors"
                      >
                        Volume (24h)
                        <ArrowUpDown className="h-3 w-3 ml-1 inline" />
                        {sortField === 'total_volume' && (
                          <div className={cn("w-1 h-1 rounded-full ml-1", sortOrder === 'asc' ? 'bg-green-500' : 'bg-red-500')} />
                        )}
                      </Button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedCoins.map((coin) => (
                    <tr key={coin.id} className="border-b hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group">
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-lg">{coin.market_cap_rank}</span>
                          {getRankIcon(coin.market_cap_rank)}
                        </div>
                      </td>
                      <td className="p-4">
                        <Link 
                          href={`/prices/${coin.id}`}
                          className="flex items-center space-x-3 hover:text-primary transition-colors group-hover:scale-105 transform duration-200"
                        >
                          <div className="relative">
                            <Image
                              src={coin.image}
                              alt={coin.name}
                              width={40}
                              height={40}
                              className="rounded-full shadow-sm"
                            />
                            {coin.market_cap_rank <= 10 && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">{coin.market_cap_rank}</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-lg flex items-center space-x-2">
                              <span>{coin.name}</span>
                              {getRankBadge(coin.market_cap_rank)}
                            </div>
                            <div className="text-sm text-muted-foreground uppercase font-mono">
                              {coin.symbol}
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="p-4 text-right">
                        <span className="font-semibold text-lg">
                          {formatPrice(coin.current_price)}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className={cn(
                          'flex items-center justify-end space-x-1 font-medium text-lg',
                          coin.price_change_percentage_24h >= 0 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-red-600 dark:text-red-400'
                        )}>
                          {coin.price_change_percentage_24h >= 0 ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          <span>{formatPercentage(coin.price_change_percentage_24h)}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right font-medium text-lg">
                        {formatMarketCap(coin.market_cap)}
                      </td>
                      <td className="p-4 text-right font-medium text-lg">
                        {formatVolume(coin.total_volume)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {paginatedCoins.map((coin) => (
            <Link key={coin.id} href={`/coin/${coin.symbol.toLowerCase()}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-muted-foreground bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                          #{coin.market_cap_rank}
                        </span>
                        {getRankIcon(coin.market_cap_rank)}
                      </div>
                      <div className="relative">
                        <Image
                          src={coin.image}
                          alt={coin.name}
                          width={48}
                          height={48}
                          className="rounded-full shadow-md"
                        />
                        {coin.market_cap_rank <= 10 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{coin.market_cap_rank}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-lg group-hover:text-primary transition-colors flex items-center space-x-2">
                          <span>{coin.name}</span>
                          {getRankBadge(coin.market_cap_rank)}
                        </div>
                        <div className="text-sm text-muted-foreground uppercase font-mono">
                          {coin.symbol}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-xl mb-1">
                        {formatPrice(coin.current_price)}
                      </div>
                      <div className={cn(
                        'flex items-center space-x-1 text-sm font-medium justify-end',
                        coin.price_change_percentage_24h >= 0 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-red-600 dark:text-red-400'
                      )}>
                        {coin.price_change_percentage_24h >= 0 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        <span>{formatPercentage(coin.price_change_percentage_24h)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4">
                    <div>
                      <span className="text-muted-foreground block mb-1">Market Cap</span>
                      <div className="font-semibold">{formatMarketCap(coin.market_cap)}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground block mb-1">Volume (24h)</span>
                      <div className="font-semibold">{formatVolume(coin.total_volume)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Enhanced Pagination Controls */}
        {totalPages > 1 && (
          <Card className="mt-8 rounded-2xl shadow-lg border-0 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Results Info */}
                <div className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{startIndex}</span> to{' '}
                  <span className="font-semibold text-foreground">{endIndex}</span> of{' '}
                  <span className="font-semibold text-foreground">{filteredCoins.length}</span> cryptocurrencies
                </div>
                
                {/* Page Navigation */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="rounded-xl"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  
                  <div className="flex items-center space-x-1">
                    {getPageNumbers().map((page, index) => (
                      <React.Fragment key={index}>
                        {page === '...' ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-10 h-10 p-0 rounded-xl"
                            disabled
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(page as number)}
                            className={cn(
                              "w-10 h-10 p-0 rounded-xl transition-all duration-200",
                              currentPage === page 
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110" 
                                : "hover:scale-105"
                            )}
                          >
                            {page}
                          </Button>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="rounded-xl"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
                
                {/* Quick Page Jump */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Jump to:</span>
                  <select
                    value={currentPage}
                    onChange={(e) => handlePageChange(Number(e.target.value))}
                    className="px-3 py-1 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <option key={page} value={page}>
                        Page {page}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Page Info */}
              <div className="mt-4 text-center">
                <Badge variant="secondary" className="rounded-xl">
                  Page {currentPage} of {totalPages}
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <NewsletterFooter />
    </div>
  );
}