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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm12-6a1 1 0 1 0-2 0v1.1a5.002 5.002 0 0 0 0 9.8V18a1 1 0 1 0 2 0v-1.1c.98-.2 1.856-.685 2.536-1.364a1 1 0 1 0-1.415-1.415 3 3 0 1 1 0-4.243 1 1 0 1 0 1.415-1.414A4.993 4.993 0 0 0 13 7.1V6z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
