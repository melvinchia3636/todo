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
        d="M13.584 7a5.001 5.001 0 1 0-8.809 4.675L4 14l2.325-.775c.214.136.44.256.675.359"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 20a5 5 0 1 1 4.225-2.325L20 20l-2.325-.775A4.976 4.976 0 0 1 15 20z"
      />
    </svg>
  );
}