"use client";

import React from 'react';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

/**
 * Predefined scroll-to-top button variants for different use cases
 */

// Standard variant - matches site design system
export function StandardScrollToTop() {
  return (
    <ScrollToTop 
      threshold={300}
      className="bg-primary/90 hover:bg-primary text-primary-foreground border-primary/20"
    />
  );
}

// Minimal variant - subtle appearance
export function MinimalScrollToTop() {
  return (
    <ScrollToTop 
      threshold={400}
      size="sm"
      className="bg-background/80 hover:bg-background text-foreground border-border shadow-md"
    />
  );
}

// Progress variant - shows scroll progress
export function ProgressScrollToTop() {
  return (
    <ScrollToTop 
      threshold={200}
      showProgress={true}
      className="bg-primary/90 hover:bg-primary text-primary-foreground border-primary/20"
    />
  );
}

// Large variant - for content-heavy pages
export function LargeScrollToTop() {
  return (
    <ScrollToTop 
      threshold={500}
      size="lg"
      className="bg-primary/90 hover:bg-primary text-primary-foreground border-primary/20 shadow-xl"
    />
  );
}

// Brand variant - uses brand colors
export function BrandScrollToTop() {
  return (
    <ScrollToTop 
      threshold={300}
      className="bg-brand-blue/90 hover:bg-brand-blue text-white border-brand-blue/20"
    />
  );
}

// Floating variant - more prominent shadow
export function FloatingScrollToTop() {
  return (
    <ScrollToTop 
      threshold={300}
      className="bg-primary/95 hover:bg-primary text-primary-foreground border-primary/30 shadow-2xl hover:shadow-3xl"
    />
  );
}