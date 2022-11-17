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
        d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9H4V5zm0 11v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3H4zm9 2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
