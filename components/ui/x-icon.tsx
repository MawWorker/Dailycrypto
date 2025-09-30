import React from 'react';
import { cn } from '@/lib/utils';

interface XIconProps {
  className?: string;
  width?: number;
  height?: number;
  size?: number;
}

export const XIcon = ({ 
  className, 
  width, 
  height, 
  size = 20 
}: XIconProps) => {
  const finalWidth = width || size;
  const finalHeight = height || size;
  
  return (
    <svg
      width={finalWidth}
      height={finalHeight}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-label="X (formerly Twitter)"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="12" 
        fill="#000000"
      />
      <path
        d="M18.244 7.757l-4.487 5.243 4.487 5.5h-3.5l-2.743-3.357L9.257 18.5h-1.5l4.486-5.243L7.756 7.757h3.5l2.487 3.043 2.743-3.043h1.758z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
};