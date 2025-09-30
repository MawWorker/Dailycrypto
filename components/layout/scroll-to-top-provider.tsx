"use client";

import React from 'react';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

interface ScrollToTopProviderProps {
  children: React.ReactNode;
  /**
   * Whether to show the scroll-to-top button
   * @default true
   */
  enabled?: boolean;
  /**
   * Scroll threshold before button appears
   * @default 300
   */
  threshold?: number;
  /**
   * Whether to show scroll progress indicator
   * @default false
   */
  showProgress?: boolean;
}

/**
 * Provider component that wraps page content and adds scroll-to-top functionality
 * This should be used in the root layout to provide site-wide scroll-to-top functionality
 */
export function ScrollToTopProvider({ 
  children, 
  enabled = true, 
  threshold = 300,
  showProgress = false 
}: ScrollToTopProviderProps) {
  return (
    <>
      {children}
      {enabled && (
        <ScrollToTop 
          threshold={threshold}
          showProgress={showProgress}
          className="z-50"
        />
      )}
    </>
  );
}