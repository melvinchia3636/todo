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
        d="M5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8.257a5.477 5.477 0 0 1-1.235-4H7a1 1 0 1 1 0-2h5.6a5.525 5.525 0 0 1 1.92-2.123A1 1 0 0 1 15 11h2a1 1 0 0 1 1 1.022 5.496 5.496 0 0 1 4 2.315V6a3 3 0 0 0-3-3H5zm1 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8zm2 1v2h2V9H8zm6-1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
