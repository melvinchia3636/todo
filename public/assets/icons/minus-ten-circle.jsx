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
        fill-rule="evenodd"
        d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zM10 8a1 1 0 0 0 0 2h1v5a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1h-2zm6.5 0a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 5 0v-3A2.5 2.5 0 0 0 16.5 8zm-.5 2.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3zM5 11a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H5z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
