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
        d="M19 4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.172a2 2 0 0 1 1.414.586l1.707 1.707a1 1 0 0 0 1.414 0l1.707-1.707A2 2 0 0 1 15.828 18H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
      />
    </svg>
  );
}
