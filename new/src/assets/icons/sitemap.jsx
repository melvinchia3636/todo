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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 4h4v4h-4zm0 12h4v4h-4zm-8 0h4v4H2zm16 0h4v4h-4z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4m0 4v-4m0 0h6a2 2 0 0 1 2 2v2m-8-4H6a2 2 0 0 0-2 2v2"
      />
    </svg>
  );
}