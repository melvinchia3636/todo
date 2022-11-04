import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        width="9"
        height="19"
        x="2"
        y="8.364"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        rx="4.5"
        transform="rotate(-45 2 8.364)"
      />
      <path
        fill="currentColor"
        d="m11.546 18.617.354-.353L5.535 11.9l-.354.353a4.5 4.5 0 0 0 6.364 6.364zm.707-13.435-.354.354 6.365 6.364.353-.354a4.5 4.5 0 1 0-6.364-6.364z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m11.546 18.617.354-.353L5.535 11.9l-.354.353a4.5 4.5 0 0 0 6.364 6.364zm.707-13.435-.354.354 6.365 6.364.353-.354a4.5 4.5 0 1 0-6.364-6.364zM9.779 11.9h0M11.9 9.778h0m2.121 2.122h0M11.9 14.021h0"
      />
    </svg>
  );
}