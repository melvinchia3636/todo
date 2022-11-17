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
        d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm5 1a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2zm-8 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H7zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6zm-4 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
