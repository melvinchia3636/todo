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
        d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11 11-4.925 11-11zm-7.496-4.868A1 1 0 0 1 17 8v8a1 1 0 0 1-1.496.868L9 13.152V16a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0v2.848l6.504-3.716zM15 9.723 11.016 12 15 14.277V9.723z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
