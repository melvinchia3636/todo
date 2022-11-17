import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path fill="currentColor" d="M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v10m0-10c0 2.333 1.4 7 7 7"
      />
      <circle
        cx="17"
        cy="17"
        r="3"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}
