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
        d="M8 2a1 1 0 0 1 1 1v1H7V3a1 1 0 0 1 1-1zm9 2h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1v3a1 1 0 0 0 2 0V4h2v3a1 1 0 1 0 2 0V4h2v3a1 1 0 1 0 2 0V4zm0 0h-2V3a1 1 0 1 1 2 0v1zm-4 0V3a1 1 0 1 0-2 0v1h2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
