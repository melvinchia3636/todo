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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 16v3m0 3v-3m0 0h3m-3 0h-3"
      />
      <path
        fill="currentColor"
        d="M4 7v2h16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 5h2a2 2 0 0 1 2 2v2H4V7a2 2 0 0 1 2-2h2m8 0V3m0 2H8m0-2v2M4 9.5V19a2 2 0 0 0 2 2h7m7-11.5v2.75"
      />
    </svg>
  );
}
