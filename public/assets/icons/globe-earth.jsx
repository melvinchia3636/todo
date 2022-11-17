import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <path
        fill="currentColor"
        d="M8 6V4c2.5-1.167 8.4-2 12 4h-1a2 2 0 0 0-2 2 2 2 0 1 1-4 0 2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2zm9 10h3c-1.2 1.6-3.833 3.333-5 4v-2a2 2 0 0 1 2-2zm-6 2v2c-6.4-.4-8-5.5-8-8h2a2 2 0 0 1 2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 6V4c2.5-1.167 8.4-2 12 4h-1a2 2 0 0 0-2 2 2 2 0 1 1-4 0 2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2zm9 10h3c-1.2 1.6-3.833 3.333-5 4v-2a2 2 0 0 1 2-2zm-6 2v2c-6.4-.4-8-5.5-8-8h2a2 2 0 0 1 2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2z"
      />
    </svg>
  );
}
