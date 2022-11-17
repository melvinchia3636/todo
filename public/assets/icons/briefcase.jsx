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
        d="M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h3a3 3 0 0 1 3 3v2h-7v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H2v-2a3 3 0 0 1 3-3h3V6zm-6 8v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4h-7v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1H2zm8-7h4V6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1zm3 7h-2v-2h2v2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
