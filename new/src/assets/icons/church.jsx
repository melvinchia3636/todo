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
        d="M12 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1.5l7.6 5.7A1 1 0 0 1 20 16h-1v3h2a1 1 0 1 1 0 2h-7v-3a2 2 0 1 0-4 0v3H3a1 1 0 1 1 0-2h2v-3H4a1 1 0 0 1-.6-1.8L11 8.5V7h-1a1 1 0 0 1 0-2h1V4a1 1 0 0 1 1-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}