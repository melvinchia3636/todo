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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm9-6a1 1 0 0 0-1 1v3H8a1 1 0 1 0 0 2h1v1H8a1 1 0 1 0 0 2h1v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-1h3a3 3 0 1 0 0-6h-4zm4 4h-3V8h3a1 1 0 1 1 0 2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
