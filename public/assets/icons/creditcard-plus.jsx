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
        d="M18 15v3m0 3v-3m0 0h-3m3 0h3"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M5 4a3 3 0 0 0-3 3v1h20V7a3 3 0 0 0-3-3H5zM2 17v-7h20v3.528A6 6 0 0 0 12.341 20H5a3 3 0 0 1-3-3zm4-4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
