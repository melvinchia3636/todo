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
        d="M7 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2V5zm2 14h6V5H9v14zm8-14v14h2a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
