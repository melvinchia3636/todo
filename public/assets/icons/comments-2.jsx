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
        d="M7 14v-1a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 11h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.64A1.36 1.36 0 0 0 17 20.36a.68.68 0 0 1-1.16.48l-1.254-1.254A2 2 0 0 0 13.172 19H12a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"
      />
    </svg>
  );
}
