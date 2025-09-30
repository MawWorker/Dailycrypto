interface FacebookIconProps {
  className?: string;
}

export const FacebookIcon = ({ className }: FacebookIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        fill="#1877f2"
      />
      <path
        d="M16.671 7.443H14.407c-.532 0-.799.263-.799.79v1.317h3.063l-.395 3.158h-2.668v8.292h-3.158v-8.292H8.671V9.55h1.779V7.836c0-1.779 1.053-2.836 2.836-2.836h3.385v2.443z"
        fill="white"
      />
    </svg>
  );
};