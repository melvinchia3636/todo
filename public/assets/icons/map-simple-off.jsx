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
        d="m3 3 18 18"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M4.782 5.61 2.445 7.168A1 1 0 0 0 2 8v12a1 1 0 0 0 1.555.832L9 17.202l5.445 3.63a1 1 0 0 0 1.11 0l2.67-1.78L4.781 5.61zm16.834 11.178A1 1 0 0 0 22 16V4a1 1 0 0 0-1.555-.832L15 6.798l-5.445-3.63a1 1 0 0 0-1.11 0l-.269.18 13.44 13.44z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
