import React from 'react';

interface TelegramIconProps {
  className?: string;
}

export const TelegramIcon: React.FC<TelegramIconProps> = ({ className = "" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle 
        cx="12" 
        cy="12" 
        r="12" 
        fill="#0088cc"
      />
      <path
        d="M8.5 11.5L17.5 7.5L15.5 16.5L13 15L11.5 17L10 15.5L8.5 11.5Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 12.5L13.5 10.5"
        stroke="#0088cc"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
};