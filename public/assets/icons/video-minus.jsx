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
        d="M2 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1.586l2.293-2.293A1 1 0 0 1 22 8v8a1 1 0 0 1-1.707.707L18 14.414V16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8zm5 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
