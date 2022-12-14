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
        d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1H2V7zm0 3v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7H2zm5 2a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
