"use client";

import { Menu, X, Search, ChevronDown, Globe, Sun, Moon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SearchDialog } from "@/components/search/search-dialog";

const NAV_LOGO = {
  url: "/",
  title: "DailyCrypto",
  icon: "₱"
};

const NAV_ITEMS = [
  { 
    name: "Home", 
    link: "/",
  },
  { 
    name: "News", 
    link: "/news",
    dropdown: [
      { name: "Latest Crypto News", link: "/news/latest" },
      { name: "Philippines Crypto News", link: "/news/philippines" },
      { name: "Featured Stories", link: "/news/features" }
    ]
  },
  { 
    name: "Markets", 
    link: "/markets",
    dropdown: [
      { name: "Market Overview", link: "/markets/overview" },
      { name: "Live Prices", link: "/prices#top-100-crypto" },
      { name: "Market Outlook", link: "/daily/outlook" }
    ]
  },
  { 
    name: "Daily", 
    link: "/daily",
    dropdown: [
      { name: "Today's Recap", link: "/daily/today" },
      { name: "Weekly Summary", link: "/daily/weekly" },
      { name: "Archives", link: "/daily/archives" }
    ]
  },
  { 
    name: "Learn", 
    link: "/learn",
    dropdown: [
      { name: "Introduction To Crypto", link: "/learn/beginner" },
      { name: "Blockchain Basics", link: "/learn/blockchain" },
      { name: "History Of Crypto", link: "/learn/history" },
    ]
  },
  { 
    name: "Guides", 
    link: "/guides",
    dropdown: [
      { name: "Buying & Selling Crypto", link: "/guides/buying-selling" },
      { name: "How to Use Crypto", link: "/guides/how-to-use" },
      { name: "Risks & Security", link: "/guides/risks-security" }
    ]
  },
  { 
    name: "Exchanges", 
    link: "/exchanges",
    dropdown: [
      { name: "Philippines", link: "/exchanges/philippines" },
      { name: "Global", link: "/exchanges/global" },
      { name: "Reviews", link: "/exchanges/reviews" },
    ]
  },
  { 
    name: "Wallets", 
    link: "/wallets",
    dropdown: [
      { name: "Hardware Wallets", link: "/wallets/hardware" },
      { name: "Mobile Wallets", link: "/wallets/mobile" },
      { name: "Desktop Wallets", link: "/wallets/desktop" },
    ]
  },
  { 
    name: "Newsletter", 
    link: "/newsletter",
  },
];

// Philippine Flag Icon Component
const PhilippineFlagIcon = () => {
  return (
    <div className="w-5 h-3 lg:w-6 lg:h-4 rounded-sm overflow-hidden shadow-sm border border-gray-200 dark:border-gray-600 flex-shrink-0 ml-2">
      <svg
        viewBox="0 0 24 16"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blue stripe (top) */}
        <rect x="0" y="0" width="24" height="8" fill="#0038A8" />
        
        {/* Red stripe (bottom) */}
        <rect x="0" y="8" width="24" height="8" fill="#CE1126" />
        
        {/* White triangle */}
        <polygon points="0,0 0,16 12,8" fill="#FFFFFF" />
        
        {/* Sun (simplified 8-ray design) */}
        <g transform="translate(6, 8)">
          {/* Sun center */}
          <circle cx="0" cy="0" r="1.2" fill="#FECA57" />
          
          {/* 8 sun rays */}
          <g stroke="#FECA57" strokeWidth="0.25" fill="#FECA57">
            <line x1="0" y1="-2.4" x2="0" y2="-1.8" />
            <line x1="1.7" y1="-1.7" x2="1.2" y2="-1.2" />
            <line x1="2.4" y1="0" x2="1.8" y2="0" />
            <line x1="1.7" y1="1.7" x2="1.2" y2="1.2" />
            <line x1="0" y1="2.4" x2="0" y2="1.8" />
            <line x1="-1.7" y1="1.7" x2="-1.2" y2="1.2" />
            <line x1="-2.4" y1="0" x2="-1.8" y2="0" />
            <line x1="-1.7" y1="-1.7" x2="-1.2" y2="-1.2" />
          </g>
        </g>
        
        {/* Three stars (simplified) */}
        <g fill="#FECA57">
          {/* Top star */}
          <polygon points="3.2,3.2 3.4,3.8 4,3.8 3.6,4.2 3.8,4.8 3.2,4.6 2.6,4.8 2.8,4.2 2.4,3.8 3,3.8" transform="scale(0.5)" />
          
          {/* Bottom left star */}
          <polygon points="3.2,12.8 3.4,13.4 4,13.4 3.6,13.8 3.8,14.4 3.2,14.2 2.6,14.4 2.8,13.8 2.4,13.4 3,13.4" transform="scale(0.5)" />
          
          {/* Bottom right star */}
          <polygon points="8,12.8 8.2,13.4 8.8,13.4 8.4,13.8 8.6,14.4 8,14.2 7.4,14.4 7.6,13.8 7.2,13.4 7.8,13.4" transform="scale(0.5)" />
        </g>
      </svg>
    </div>
  );
};

const AnimatedIndicatorNavbar = () => {
  const [activeItem, setActiveItem] = useState('News');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect for glass morphism
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active item based on current page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      
      if (currentPath === '/' || currentPath === '') {
        setActiveItem('Home');
      } else if (currentPath.startsWith('/news')) {
        setActiveItem('News');
      } else if (currentPath.startsWith('/markets') || currentPath.startsWith('/prices')) {
        setActiveItem('Markets');
      } else if (currentPath === '/daily/outlook') {
        setActiveItem('Markets');
      } else if (currentPath.startsWith('/daily') || currentPath.startsWith('/archives')) {
        setActiveItem('Daily');
      } else if (currentPath.startsWith('/learn')) {
        setActiveItem('Learn');
      } else if (currentPath.startsWith('/guides')) {
        setActiveItem('Guides');
      } else if (currentPath.startsWith('/exchanges')) {
        setActiveItem('Exchanges');
      } else if (currentPath.startsWith('/wallets')) {
        setActiveItem('Wallets');
      } else if (currentPath.startsWith('/newsletter')) {
        setActiveItem('Newsletter');
      } else {
        setActiveItem('Home');
      }
    }
  }, []);

  // Initialize theme from localStorage on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Handle search functionality
  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Navigate to search results page with query
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
    <header className={`sticky top-0 z-50 border-0 pl-0 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-slate-700/50' 
        : 'bg-[var(--surface-0)] shadow-none backdrop-blur-0'
    }`}>
      <nav className="flex items-center justify-between py-[var(--header-py)] !ml-2 sm:!ml-3 pr-2 sm:pr-3">
        {/* Left Group - Hamburger then Logo */}
        <div className="flex items-center">
          {/* Hamburger Menu */}
          <div className="mr-3 sm:mr-4">
            <HamburgerMenuDropdown activeItem={activeItem} setActiveItem={setActiveItem} />
          </div>

          {/* Logo */}
          <a href={NAV_LOGO.url} className="flex items-center gap-1.5 lg:gap-2 flex-shrink-0">
            <div className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 bg-blue-600 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105 border border-blue-700/20">
              <span className="text-white font-bold text-base lg:text-lg">{NAV_LOGO.icon}</span>
            </div>
            <span className="text-base lg:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 font-[var(--font-display)] transition-colors hidden sm:block">
              {NAV_LOGO.title}
            </span>
            <PhilippineFlagIcon />
          </a>
        </div>

        {/* Centered Navigation Menu - Hidden on mobile/tablet */}
        <div className="hidden lg:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList
              className="relative flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-4 2xl:gap-5 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2.5 bg-transparent border-none ring-0 shadow-none rounded-none transition-colors ml-2 md:ml-6 lg:ml-6 xl:ml-10 2xl:ml-14"
            >
              {NAV_ITEMS.map((item) => (
                <React.Fragment key={item.name}>
                  <NavigationMenuItem>
                    {item.dropdown ? (
                      <Popover>
                        <PopoverTrigger asChild>
                          <NavigationMenuLink
                            data-nav-item={item.name}
                            onClick={() => setActiveItem(item.name)}
                            className={`relative cursor-pointer text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base font-medium hover:bg-transparent py-2 px-0.5 md:px-1 lg:px-1 xl:px-1 2xl:px-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] ${
                              activeItem === item.name
                                ? "text-slate-900 dark:text-slate-100 after:absolute after:bottom-0 after:left-0.5 after:right-0.5 md:after:left-1 md:after:right-1 after:h-0.5 after:bg-blue-600 after:rounded-xl after:transition-all after:duration-300"
                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                            }`}
                          >
                            {item.name}
                          </NavigationMenuLink>
                        </PopoverTrigger>
                        <PopoverContent 
                          className="w-56 p-2 bg-[var(--surface-0)] border-0 ring-0 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] rounded-xl transition-colors"
                          align="start"
                          sideOffset={8}
                        >
                          <div className="space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.link}
                                className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl transition-colors"
                              >
                                {dropdownItem.name}
                              </a>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    ) : (
                      <a
                        href={item.link}
                        data-nav-item={item.name}
                        onClick={() => setActiveItem(item.name)}
                        className={`relative cursor-pointer text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base font-medium hover:bg-transparent py-2 px-0.5 md:px-1 lg:px-1 xl:px-1 2xl:px-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] flex items-center ${
                          activeItem === item.name
                            ? "text-slate-900 dark:text-slate-100 after:absolute after:bottom-0 after:left-0.5 after:right-0.5 md:after:left-1 md:after:right-1 after:h-0.5 after:bg-blue-600 after:rounded-xl after:transition-all after:duration-300"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                        }`}
                      >
                        {item.name}
                      </a>
                    )}
                  </NavigationMenuItem>
                </React.Fragment>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Group - Search, Language, Theme Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Input - Desktop only */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search crypto news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 h-9 w-24 md:w-32 lg:w-36 xl:w-44 2xl:w-52 text-sm bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm ring-0 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:w-32 md:focus:w-40 lg:focus:w-44 xl:focus:w-52 2xl:focus:w-60 transition-all duration-200 hover:shadow-md"
            />
          </form>

          {/* Mobile/Tablet Search Icon */}
          <Button
            onClick={() => setSearchOpen(true)}
            variant="outline"
            size="sm"
            className="h-10 w-10 p-0 rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 hover:shadow-lg md:hidden transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
          >
            <Search className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </Button>

          {/* Language Selector */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-10 w-10 p-0 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
              >
                <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2 bg-[var(--surface-0)] border-0 ring-0 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] rounded-2xl transition-colors">
              <div className="space-y-1">
                <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-2xl transition-colors">
                  🇺🇸 English
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-2xl transition-colors">
                  🇵🇭 Tagalog
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-2xl transition-colors">
                  🇵🇭 Cebuano
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-2xl transition-colors">
                  🇵🇭 Ilocano
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-2xl transition-colors">
                  🇵🇭 Hiligaynon
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-2xl transition-colors">
                  🇵🇭 Waray-Waray
                </button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="h-10 w-10 p-0 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            )}
          </Button>
        </div>
      </nav>
    </header>

    {/* Search Dialog */}
    <SearchDialog 
      open={searchOpen} 
      onOpenChange={setSearchOpen}
      onSearch={handleSearch}
    />
    </>
  );
};

export { AnimatedIndicatorNavbar };

// New Hamburger Menu Dropdown Component
const HamburgerMenuDropdown = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-10 w-10 p-0 py-2 bg-transparent border border-slate-200 dark:border-slate-700 ring-0 shadow-none flex flex-col items-center justify-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] rounded-2xl"
        >
          <div className="flex flex-col gap-1">
            <div className="w-4 h-0.5 bg-slate-600 dark:bg-slate-400 rounded transition-colors"></div>
            <div className="w-4 h-0.5 bg-slate-600 dark:bg-slate-400 rounded transition-colors"></div>
            <div className="w-4 h-0.5 bg-slate-600 dark:bg-slate-400 rounded transition-colors"></div>
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="w-80 p-0 bg-[var(--surface-0)] border border-slate-200 dark:border-slate-700 ring-0 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] rounded-2xl transition-colors"
      >
        <ul className="w-full py-4">
          {NAV_ITEMS.map((navItem, idx) => (
            <li key={idx}>
              {navItem.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleExpanded(navItem.name)}
                    className="flex items-center justify-between w-full px-6 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-75"
                  >
                    <span>{navItem.name}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${
                        expandedItems.includes(navItem.name) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {expandedItems.includes(navItem.name) && (
                    <div className="bg-slate-50/50 dark:bg-slate-700/50 transition-colors">
                      {navItem.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.link}
                          className="block px-10 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-2xl mx-2 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={navItem.link}
                  onClick={() => {
                    setActiveItem(navItem.name);
                    setIsOpen(false);
                  }}
                  className={`block px-6 py-3 text-sm font-medium transition-all duration-75 ${
                    activeItem === navItem.name
                      ? "text-slate-900 dark:text-slate-100 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-600 rounded-r-2xl"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  {navItem.name}
                </a>
              )}
            </li>
          ))}
          <li className="px-6 py-4 border-t border-slate-100 dark:border-slate-700 mt-2">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Subscribe to Newsletter
            </Button>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};