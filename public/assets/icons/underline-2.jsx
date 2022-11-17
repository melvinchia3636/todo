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
        d="M5 19h14M7 15l1.5-3m8.5 3-1.5-3m0 0L12 5l-3.5 7m7 0h-7"
      />
    </svg>
  );
}
