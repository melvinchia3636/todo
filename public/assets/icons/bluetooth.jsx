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
        d="m12 12 5-4-5-4v8zm0 0 5 4-5 4v-8zm0 0L7 8m5 4-5 4"
      />
    </svg>
  );
}
