interface YouTubeIconProps {
  className?: string;
}

export const YouTubeIcon = ({ className = "" }: YouTubeIconProps) => {
  return (
    <svg 
      className={`${className}`}
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#ff0000" />
      <path 
        d="M9.5 8.5L15.5 12L9.5 15.5V8.5Z" 
        fill="white"
      />
    </svg>
  );
};