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
        d="M9 6H3"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M12 6h5a1 1 0 1 1 0 2h-5.341a5.997 5.997 0 0 1-1.187 2H17a1 1 0 1 1 0 2H7a.998.998 0 0 1-.287-.042A5.978 5.978 0 0 1 2 10.472V19a3 3 0 0 0 3 3h9v-5a3 3 0 0 1 3-3h5V5a3 3 0 0 0-3-3h-8.528A5.978 5.978 0 0 1 12 6zm4 15.883a3 3 0 0 0 1.293-.762l3.828-3.828A3 3 0 0 0 21.883 16H17a1 1 0 0 0-1 1v4.883zM6 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
