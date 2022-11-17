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
        d="M3 2a1 1 0 0 0 0 2v11a1 1 0 0 0 1 1h4.613L7.05 20.684a1 1 0 0 0 1.898.632L10.72 16h2.558l1.772 5.316a1 1 0 0 0 1.898-.632L15.387 16H20a1 1 0 0 0 1-1V4a1 1 0 1 0 0-2H3z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
