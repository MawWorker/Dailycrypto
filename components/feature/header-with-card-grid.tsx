"use client";

import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AnalysisArticle {
  author: {
    name: string;
    avatar?: string;
  };
  headline: string;
  preview: string;
  publishedAt: string;
  link: string;
}

const ANALYSIS_ARTICLES: Array<AnalysisArticle> = [
  {
    author: {
      name: "Maria Santos",
    },
    headline: "Bitcoin's Philippine Market Surge: Technical Analysis",
    preview: "Deep dive into Bitcoin's recent performance in the Philippine market, examining key support levels and resistance zones that could shape future price movements.",
    publishedAt: "December 20, 2024 9:30 AM",
    link: "/analysis/bitcoin-philippines-technical-analysis",
  },
  {
    author: {
      name: "Carlos Reyes",
    },
    headline: "Ethereum 2.0 Impact on Filipino DeFi Adoption",
    preview: "Analyzing how Ethereum's transition affects decentralized finance opportunities for Filipino investors and the broader crypto ecosystem in Southeast Asia.",
    publishedAt: "December 19, 2024 2:15 PM",
    link: "/analysis/ethereum-defi-philippines",
  },
  {
    author: {
      name: "Anna Dela Cruz",
    },
    headline: "Regulatory Landscape: BSP's Crypto Framework Evolution",
    preview: "Comprehensive analysis of the Bangko Sentral ng Pilipinas' evolving cryptocurrency regulations and their implications for institutional adoption.",
    publishedAt: "December 18, 2024 11:45 AM",
    link: "/analysis/bsp-crypto-regulations",
  },
  {
    author: {
      name: "Miguel Torres",
    },
    headline: "Altcoin Season: Identifying Opportunities in Emerging Markets",
    preview: "Strategic analysis of alternative cryptocurrencies showing strong potential in emerging markets, with focus on fundamentals and growth catalysts.",
    publishedAt: "December 17, 2024 4:20 PM",
    link: "/analysis/altcoin-opportunities",
  },
];

const HeaderWithCardGrid = () => {
  return (
    <section className="bg-[var(--color-surface)] dark:bg-[var(--color-background-site)] py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header section with title, description and CTA button */}
        <div className="flex w-full flex-col items-start justify-between gap-4 pb-16 lg:flex-row lg:items-end">
          <div className="flex w-full max-w-[48rem] flex-1 flex-col items-start gap-5">
            <h2 className="text-[2rem] font-bold leading-none tracking-tight md:text-[2.75rem] lg:text-5xl text-[var(--color-text-primary)]">
              Market Analysis & Insights
            </h2>
            <p className="text-[var(--color-text-secondary)] w-full max-w-[44rem] text-[1.15rem] font-medium leading-normal sm:text-xl">
              Expert commentary and in-depth analysis from our team of crypto market specialists, providing actionable insights for Philippine investors.
            </p>
          </div>
          <div>
            <Button className="rounded-full bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white">
              View All Analysis
            </Button>
          </div>
        </div>

        {/* Grid of analysis articles */}
        <div className="grid w-full grid-cols-1 grid-rows-[auto] gap-6 md:grid-cols-2">
          {ANALYSIS_ARTICLES.map((article, i) => (
            <Card
              key={`analysis-${i}`}
              className="bg-[var(--color-background-site)] flex w-full flex-col justify-between gap-6 rounded-xl border border-[var(--color-muted-subtle)] dark:border-transparent p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Author info and title */}
              <CardHeader className="flex w-full flex-col gap-4 p-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-muted-subtle)] flex items-center justify-center shadow-sm">
                    <User className="w-5 h-5 text-[var(--color-text-secondary)]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">
                      {article.author.name}
                    </span>
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      {article.publishedAt}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-[var(--color-text-primary)] text-xl font-bold leading-tight tracking-tight">
                  {article.headline}
                </CardTitle>
              </CardHeader>

              {/* Article preview */}
              <CardContent className="p-0">
                <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                  {article.preview}
                </p>
              </CardContent>

              {/* Read more button */}
              <CardFooter className="flex w-full items-end justify-start p-0">
                <Button 
                  size="sm" 
                  className="rounded-full bg-[var(--color-primary-brand)] hover:bg-[var(--color-primary-brand)]/90 text-white"
                  asChild
                >
                  <a href={article.link}>
                    Read Analysis
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeaderWithCardGrid };