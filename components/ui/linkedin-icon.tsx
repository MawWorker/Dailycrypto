import React from 'react';

interface LinkedInIconProps {
  className?: string;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
    >
      <circle cx="12" cy="12" r="12" fill="#0077b5" />
      <path
        d="M8.5 19V10h-2v9h2zM7.5 8.5c.69 0 1.25-.56 1.25-1.25S8.19 5.75 7.5 5.75 6.25 6.31 6.25 7s.56 1.5 1.25 1.5zM19 19v-5.5c0-2.62-1.4-3.83-3.25-3.83-1.5 0-2.17.82-2.55 1.4V10H11v9h2.2v-5.3c0-1 .2-1.97 1.43-1.97 1.2 0 1.37.97 1.37 2.03V19H19z"
        fill="white"
      />
    </svg>
  );
};