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
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm-.707-12.707a1 1 0 0 1 1.414 1.415L11.414 11H15a1 1 0 1 1 0 2h-3.585l1.292 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.415l3-3z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
