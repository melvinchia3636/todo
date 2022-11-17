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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 7h.001"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M4 3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4zm1 6V5h4v4H5zm9-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6zM4 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4zm10 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1zm5 0a1 1 0 0 0-.707.293l-2 2a1 1 0 0 0 1.414 1.414L19.414 15H20a1 1 0 1 0 0-2h-1zm-5 4a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-2zm7 1a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1v-2zM16 7a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1zm-9 9a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2H7z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
