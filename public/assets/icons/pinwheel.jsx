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
        d="M17 7a5.001 5.001 0 0 0-4.607 3.053C11.963 11.07 12.896 12 14 12h6c1.105 0 2.037-.93 1.607-1.947A5.001 5.001 0 0 0 17 7zm0 10a5.001 5.001 0 0 0-3.053-4.607C12.93 11.963 12 12.896 12 14v6c0 1.105.93 2.037 1.947 1.607A5.001 5.001 0 0 0 17 17zM7 17a5.001 5.001 0 0 0 4.607-3.053C12.037 12.93 11.104 12 10 12H4c-1.105 0-2.037.93-1.607 1.947A5.001 5.001 0 0 0 7 17zM7 7a5.001 5.001 0 0 0 3.053 4.607C11.07 12.037 12 11.104 12 10V4c0-1.105-.93-2.037-1.947-1.607A5.001 5.001 0 0 0 7 7z"
      />
    </svg>
  );
}
