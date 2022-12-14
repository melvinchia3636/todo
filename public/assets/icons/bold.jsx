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
        d="M13 6H6v6h7a3 3 0 1 0 0-6zm2 6H6v6h9a3 3 0 1 0 0-6z"
      />
    </svg>
  );
}
