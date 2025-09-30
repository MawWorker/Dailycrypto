"use client"

import Link from 'next/link'
import { useCryptoPrices } from '@/hooks/use-crypto-prices'

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)
}

function formatPercentage(percent: number): string {
  return `${percent >= 0 ? '+' : ''}${percent.toFixed(2)}%`
}

export default function MarketTicker() {
  const { data: cryptoPrices, loading } = useCryptoPrices()

  // Duplicate the array to create seamless loop
  const tickerItems = [...cryptoPrices, ...cryptoPrices]

  if (loading) {
    return (
      <section id="ticker-bar" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm border-b border-black/5 dark:border-white/10">
        <div className="ticker-viewport h-8 sm:h-9 overflow-hidden flex items-center">
          <div className="flex gap-6 px-4 animate-pulse">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2 min-w-[200px]">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-12 h-3 bg-gray-300 rounded"></div>
                <div className="w-16 h-3 bg-gray-300 rounded"></div>
                <div className="w-12 h-3 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <style jsx>{`
        @keyframes ticker-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        #ticker-bar .ticker-track {
          display: flex;
          gap: 24px;
          padding: 0 16px;
          animation: ticker-marquee 40s linear infinite;
          will-change: transform;
        }
        
        #ticker-bar .ticker-viewport {
          overflow: hidden;
          height: 36px;
          display: flex;
          align-items: center;
        }
        
        #ticker-bar:hover .ticker-track {
          animation-play-state: paused;
        }
        
        @media (max-width: 640px) {
          #ticker-bar .ticker-viewport {
            height: 32px;
          }
        }
        
        /* Hide scrollbar but allow touch scrolling on mobile */
        @media (max-width: 640px) {
          #ticker-bar .ticker-viewport {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          
          #ticker-bar .ticker-viewport::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
      
      <section 
        id="ticker-bar" 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm border-b border-black/5 dark:border-white/10"
      >
        <div className="ticker-viewport">
          <div className="ticker-track">
            {tickerItems.map((crypto, index) => {
              const isPositive = crypto.changePercent24h >= 0
              const itemId = `${crypto.symbol}-${index}`
              
              return (
                <div 
                  key={itemId}
                  className="flex items-center gap-2 whitespace-nowrap min-w-fit"
                  aria-label={`${crypto.symbol} price ${formatPrice(crypto.price)} ${isPositive ? 'up' : 'down'} ${Math.abs(crypto.changePercent24h).toFixed(2)} percent`}
                >
                  <Link href={`/coin/${crypto.symbol.toLowerCase()}`} className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-[10px] font-bold text-white">
                      {crypto.symbol.charAt(0)}
                    </span>
                  </Link>
                  
                  <Link href={`/coin/${crypto.symbol.toLowerCase()}`} className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {crypto.symbol}
                  </Link>
                  
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">
                    {formatPrice(crypto.price)}
                  </span>
                  
                  <span className={`text-xs sm:text-sm font-medium ${
                    isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {formatPercentage(crypto.changePercent24h)}
                  </span>
                  
                  {index < tickerItems.length - 1 && (
                    <span className="text-gray-400 dark:text-gray-600 mx-1">•</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}