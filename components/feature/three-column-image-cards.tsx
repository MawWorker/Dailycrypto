"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const newsArticles = [
  {
    title: "Bitcoin Breaks New All-Time High as Institutional Adoption Surges",
    excerpt: "Major institutional investors continue to pour billions into Bitcoin, driving the cryptocurrency to unprecedented levels and signaling mainstream acceptance.",
    image: "https://images.unsplash.com/photo-1751755359997-40f4fb2293cd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Maria Santos",
    publishTime: "2 hours ago",
    category: "Market News"
  },
  {
    title: "Philippine Central Bank Announces Digital Peso Pilot Program",
    excerpt: "BSP reveals comprehensive roadmap for central bank digital currency implementation, positioning Philippines as regional CBDC leader.",
    image: "https://images.unsplash.com/photo-1680499661732-3cfae4690e1c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Juan Dela Cruz",
    publishTime: "4 hours ago",
    category: "Regulation"
  },
  {
    title: "Ethereum 2.0 Staking Rewards Reach New Heights",
    excerpt: "Latest network upgrades boost staking yields while improving energy efficiency, attracting more validators to secure the network.",
    image: "https://images.unsplash.com/photo-1751308759380-03e5abd14510?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Anna Reyes",
    publishTime: "6 hours ago",
    category: "Technology"
  },
  {
    title: "Top Philippine Crypto Exchanges Implement Enhanced Security",
    excerpt: "Leading local exchanges roll out advanced security measures and insurance coverage to protect Filipino investors' digital assets.",
    image: "https://plus.unsplash.com/premium_photo-1676303291138-d44a46bd7c5d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Carlos Mendoza",
    publishTime: "8 hours ago",
    category: "Security"
  },
  {
    title: "DeFi Protocols See Record TVL Growth in Q4",
    excerpt: "Decentralized finance platforms experience massive capital inflows as yield farming and lending protocols mature and attract institutional capital.",
    image: "https://images.unsplash.com/photo-1627686981794-b6505f51024f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Sofia Garcia",
    publishTime: "12 hours ago",
    category: "DeFi"
  },
  {
    title: "NFT Market Shows Signs of Recovery After Crypto Winter",
    excerpt: "Digital art and collectibles market rebounds with innovative utility-focused projects leading the charge toward sustainable growth.",
    image: "https://images.unsplash.com/photo-1703485393247-b90b4424a1b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Miguel Torres",
    publishTime: "1 day ago",
    category: "NFTs"
  },
];

const ThreeColumnImageCards = () => {
  return (
    <section className="py-16 lg:py-20 bg-[var(--color-background-site)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-[var(--font-display)]">
            Latest News
          </h2>
          <Button 
            variant="ghost" 
            className="text-[var(--color-primary-brand)] hover:text-[var(--color-primary-brand)]/80 font-medium"
          >
            View All
          </Button>
        </div>
        
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <article key={article.title}>
              <Link href={`/news/bitcoin-surges-philippine-adoption`}>
              <Card className="border-0 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-[var(--color-surface)]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-video w-full object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-[var(--color-primary-brand)] rounded-xl">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-[var(--color-text-primary)] font-[var(--font-display)] leading-tight">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
                    <span className="font-medium">{article.author}</span>
                    <time>{article.publishTime}</time>
                  </div>
                </div>
              </Card>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ThreeColumnImageCards };