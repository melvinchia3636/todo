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
        d="M5 7h14M5 12h11c1 0 3 .5 3 2.5S17.333 17 16.5 17H12m-7 0h4m3 0 2-2m-2 2 2 2"
      />
    </svg>
  );
}
