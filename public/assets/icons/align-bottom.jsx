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
        d="M3 20h18"
      />
      <rect
        width="13"
        height="4"
        x="6"
        y="17"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        rx="2"
        transform="rotate(-90 6 17)"
      />
      <rect
        width="9"
        height="4"
        x="14"
        y="17"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        rx="2"
        transform="rotate(-90 14 17)"
      />
    </svg>
  );
}
