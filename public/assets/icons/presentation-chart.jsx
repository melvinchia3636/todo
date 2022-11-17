import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M2 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2v11a1 1 0 0 1-1 1h-4.613l1.562 4.684a1 1 0 0 1-1.898.632L13.28 16h-2.558L8.95 21.316a1 1 0 1 1-1.898-.632L8.613 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1-1-1zm15 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V7zm-4 2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V9zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H8z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
