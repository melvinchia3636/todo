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
        d="M10 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2m-4 0h4m-4 0v1m4-1v1m0 0v0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v0m4 0h-4M9 8.001V8m0 3.001V11m3 .001V11m0-2.999V8m3 .001V8m0 3.001V11m-6 3.001V14m3 .001V14"
      />
    </svg>
  );
}