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
        cy="10"
        r="3"
        fill="currentColor"
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
        d="M12 13c-2.761 0-5 1.79-5 4h10c0-2.21-2.239-4-5-4z"
      />
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        rx="3"
      />
    </svg>
  );
}
