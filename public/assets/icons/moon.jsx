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
        d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"
      />
    </svg>
  );
}
