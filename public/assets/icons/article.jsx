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
        d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm5 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7zm1 4V9h2v2H8zm7-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2zm0 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2zm-8 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
