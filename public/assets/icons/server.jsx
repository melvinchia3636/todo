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
        d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3H2V8zm0 5v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3H2zm4-6a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2H6zm-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1zm4-9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2H9zm-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
