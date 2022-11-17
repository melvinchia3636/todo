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
        d="M8 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1zM3 14a9 9 0 0 1 14.618-7.032l.675-.675a1 1 0 1 1 1.414 1.414l-.675.675A9 9 0 1 1 3 14zm10-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
