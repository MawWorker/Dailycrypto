"use client";

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const logoVariants = cva(
  "flex items-center justify-center font-bold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white border border-blue-700/20",
        white: "bg-white text-blue-600 border border-blue-200",
        dark: "bg-slate-800 text-white border border-slate-700"
      },
      size: {
        sm: "w-8 h-8 text-base rounded-lg",
        md: "w-10 h-10 text-lg rounded-xl", 
        lg: "w-12 h-12 text-xl rounded-xl",
        xl: "w-16 h-16 text-2xl rounded-2xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

export interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
}

export function Logo({ variant, size, className }: LogoProps) {
  return (
    <div className={cn(logoVariants({ variant, size }), className)}>
      <span>₱</span>
    </div>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <div className={cn("w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105", className)}>
      <span>₱</span>
    </div>
  );
}

export interface LogoSVGProps {
  size?: number;
  variant?: 'default' | 'white' | 'dark';
  className?: string;
}

export function LogoSVG({ size = 32, variant = 'default', className }: LogoSVGProps) {
  const colors = {
    default: { bg: '#2563eb', text: '#ffffff' },
    white: { bg: '#ffffff', text: '#2563eb' },
    dark: { bg: '#1e293b', text: '#ffffff' }
  };

  const color = colors[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="32"
        height="32"
        rx="8"
        ry="8"
        fill={color.bg}
        stroke={variant === 'white' ? '#e5e7eb' : 'none'}
        strokeWidth={variant === 'white' ? '1' : '0'}
      />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill={color.text}
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        ₱
      </text>
    </svg>
  );
}