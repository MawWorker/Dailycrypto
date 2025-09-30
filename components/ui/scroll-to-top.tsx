"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ScrollToTopProps {
  /**
   * Scroll threshold in pixels before button appears
   * @default 300
   */
  threshold?: number;
  /**
   * Custom className for styling
   */
  className?: string;
  /**
   * Position variant
   * @default "bottom-right"
   */
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
  /**
   * Size variant
   * @default "default"
   */
  size?: 'sm' | 'default' | 'lg';
  /**
   * Whether to show progress indicator
   * @default false
   */
  showProgress?: boolean;
}

export function ScrollToTop({ 
  threshold = 300, 
  className,
  position = 'bottom-right',
  size = 'default',
  showProgress = false
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Show button when scrolled past threshold
      setIsVisible(scrolled > threshold);
      
      // Calculate scroll progress for progress indicator
      if (showProgress && documentHeight > 0) {
        const progress = Math.min((scrolled / documentHeight) * 100, 100);
        setScrollProgress(progress);
      }
    };

    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial scroll position
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold, showProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-center': 'bottom-6 left-1/2 -translate-x-1/2'
  };

  const sizeClasses = {
    'sm': 'w-10 h-10',
    'default': 'w-12 h-12',
    'lg': 'w-14 h-14'
  };

  const iconSizes = {
    'sm': 'w-4 h-4',
    'default': 'w-5 h-5',
    'lg': 'w-6 h-6'
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        // Base styles
        'fixed z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300',
        'bg-primary/90 hover:bg-primary text-primary-foreground',
        'backdrop-blur-sm border border-primary/20',
        'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'animate-in fade-in slide-in-from-bottom-2 duration-300',
        // Position
        positionClasses[position],
        // Size
        sizeClasses[size],
        // Custom className
        className
      )}
      size="icon"
      aria-label="Scroll to top"
      title="Back to top"
    >
      {showProgress ? (
        <div className="relative flex items-center justify-center">
          {/* Progress circle background */}
          <svg 
            className="absolute inset-0 w-full h-full -rotate-90" 
            viewBox="0 0 36 36"
          >
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeOpacity="0.3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${scrollProgress}, 100`}
              className="transition-all duration-150"
            />
          </svg>
          <ChevronUp className={iconSizes[size]} />
        </div>
      ) : (
        <ChevronUp className={iconSizes[size]} />
      )}
    </Button>
  );
}

/**
 * Hook for managing scroll-to-top functionality
 * Useful for custom implementations
 */
export function useScrollToTop(threshold: number = 300) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setIsVisible(scrolled > threshold);
      
      if (documentHeight > 0) {
        const progress = Math.min((scrolled / documentHeight) * 100, 100);
        setScrollProgress(progress);
      }
    };

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    isVisible,
    scrollProgress,
    scrollToTop
  };
}