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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13.5 6h.5a2 2 0 0 0 2-2C8.4 1.2 4.5 6.5 3.5 9.5l4.167 5.093c.215.263.333.593.333.933C8 16.34 8.673 17 9.487 17c.828 0 1.513.672 1.513 1.5V21c2.167-.167 6.8-1.2 8-4h-1a2 2 0 0 1-2-2 2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1 1 1 0 0 0 1-1v-.5A1.5 1.5 0 0 1 13.5 6z"
      />
    </svg>
  );
}
