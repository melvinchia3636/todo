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
        d="M16.75 6H20a1 1 0 0 1 1 1v3.25a.75.75 0 0 1-.75.75H20a2 2 0 1 0 0 4h.25a.75.75 0 0 1 .75.75V20a1 1 0 0 1-1 1h-3.25a.75.75 0 0 1-.75-.75V20a2 2 0 1 0-4 0v.25a.75.75 0 0 1-.75.75H7a1 1 0 0 1-1-1v-4.25a.75.75 0 0 0-.75-.75H5a2 2 0 1 1 0-4h.25a.75.75 0 0 0 .75-.75V7a1 1 0 0 1 1-1h4.25a.75.75 0 0 0 .75-.75V5a2 2 0 1 1 4 0v.25c0 .414.336.75.75.75z"
      />
    </svg>
  );
}
