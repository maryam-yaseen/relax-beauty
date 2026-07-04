export default function Leaf({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 21c-4.5-1.2-7.5-5-7.5-9.5C4.5 7 7 3.8 12 3c5 .8 7.5 4 7.5 8.5 0 4.5-3 8.3-7.5 9.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M12 21V6.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M12 11c-1.8-1.6-3.6-1.9-5.4-1.4M12 15.5c-2-1.5-4-1.7-6-1"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}