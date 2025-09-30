"use client"

import { Facebook, Linkedin, Youtube, Send } from "lucide-react";

// Instagram Icon Component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

// X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Reddit Icon Component
const RedditIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

const navigation = [
  {
    title: "News",
    links: [
      { name: "Latest", href: "/news/latest" },
      { name: "Philippines", href: "/news/philippines" },
      { name: "Featured", href: "/news/features" },
    ],
  },
  {
    title: "Markets", 
    links: [
      { name: "Overview", href: "/markets/overview" },
      { name: "Prices", href: "/prices" },
      { name: "Outlook", href: "/daily/outlook" },
    ],
  },
  {
    title: "Daily",
    links: [
      { name: "Recap", href: "/daily/today" },
      { name: "Weekly", href: "/daily/weekly" },
      { name: "Archives", href: "/archives" },
    ],
  },
  {
    title: "Education",
    links: [
      { name: "Crypto", href: "/learn/beginner" },
      { name: "Blockchain", href: "/learn/blockchain" },
      { name: "History", href: "/learn/history" },
    ],
  },
  {
    title: "Guides",
    links: [
      { name: "Buy & Sell", href: "/guides/buying-selling" },
      { name: "How to Use", href: "/guides/how-to-use" },
      { name: "Security", href: "/guides/risks-security" },
    ],
  },
  {
    title: "Exchanges",
    links: [
      { name: "Philippines", href: "/exchanges/philippines" },
      { name: "Global", href: "/exchanges/global" },
      { name: "Reviews", href: "/exchanges/reviews" },
    ],
  },
  {
    title: "Wallets",
    links: [
      { name: "Hardware", href: "/wallets/hardware" },
      { name: "Mobile", href: "/wallets/mobile" },
      { name: "Desktop", href: "/wallets/desktop" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
    ],
  },
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
  { name: "Compliance", href: "#" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: InstagramIcon, href: "https://instagram.com" },
  { name: "TikTok", icon: TikTokIcon, href: "https://tiktok.com" },
  { name: "Reddit", icon: RedditIcon, href: "https://reddit.com" },
  { name: "X", icon: XIcon, href: "https://x.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Telegram", icon: Send, href: "https://telegram.org" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com" },
];

export const NewsletterFooter = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-[#0f172a] dark:via-blue-950/20 dark:to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand Section - 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            {/* Logo and Tagline */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">₱</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-[var(--font-display)]">DailyCrypto</h2>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Philippines' Leading Crypto News Source</p>
                </div>
              </div>
              
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                Stay informed with the latest cryptocurrency news, market analysis, and educational content tailored for Filipino crypto enthusiasts.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white font-[var(--font-display)]">
                Stay Updated
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-11 rounded-xl border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200 hover:bg-white dark:hover:bg-slate-800"
                />
                <button className="h-11 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Join 24,500+ readers • No spam, unsubscribe anytime
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white font-[var(--font-display)]">
                Follow Us
              </h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-label={`Visit our ${link.name} page`}
                    className={`group w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 ${
                      link.name === 'Facebook' ? 'bg-[#1877F2] hover:bg-[#166fe5]' :
                      link.name === 'Instagram' ? 'bg-gradient-to-r from-[#E4405F] to-[#5B51D8] hover:from-[#d73653] hover:to-[#4c46c7]' :
                      link.name === 'TikTok' ? 'bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100' :
                      link.name === 'Reddit' ? 'bg-[#FF4500] hover:bg-[#e63e00]' :
                      link.name === 'X' ? 'bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100' :
                      link.name === 'LinkedIn' ? 'bg-[#0A66C2] hover:bg-[#095bb0]' :
                      link.name === 'Telegram' ? 'bg-[#0088CC] hover:bg-[#0077b3]' :
                      link.name === 'Youtube' ? 'bg-[#FF0000] hover:bg-[#e60000]' :
                      'bg-slate-500 hover:bg-slate-400'
                    }`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <link.icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${
                      link.name === 'X' || link.name === 'TikTok' ? 'text-white dark:text-black' : 'text-white'
                    }`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Grid - 8 columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
              {navigation.map((section) => (
                <div key={section.title} className="space-y-6">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-[var(--font-display)] relative">
                    {section.title}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="group inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:translate-x-1"
                        >
                          <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full mr-3 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-200" />
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-[#0f172a] dark:via-blue-950/20 dark:to-slate-900 px-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">₱</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {legalLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
                {index < legalLinks.length - 1 && (
                  <div className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full ml-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center lg:text-left">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} DailyCrypto Philippines. All rights reserved.
            </p>
            <div className="hidden sm:block w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full" />
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Compliant with Philippine laws and regulations.
            </p>
          </div>
          
          {/* Made with love */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-slate-600 dark:text-slate-400">Made with</span>
            <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-xs">❤️</span>
            </div>
            <span className="text-sm text-slate-600 dark:text-slate-400">for Filipino crypto enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};