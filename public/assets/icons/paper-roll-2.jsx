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
        d="M5.29 4.188C6.54 3.29 8.008 3 9 3h7a6 6 0 1 1-4 10.472V20a1 1 0 0 1-1.555.832l-1.017-.678-1.48.74a1 1 0 0 1-.895 0l-1.481-.74-1.017.678A1 1 0 0 1 3 20V9c0-2.326.992-3.876 2.29-4.812zM11.529 5H9c-.673 0-1.706.21-2.54.812C5.674 6.376 5 7.326 5 9v9.134a1 1 0 0 1 .947-.028l1.553.776 1.553-.776a1 1 0 0 1 .947.028V9c0-1.537.578-2.938 1.528-4zM16 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
