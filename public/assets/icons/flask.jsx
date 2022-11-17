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
        d="M14 8.46V3h-4v5.46a2 2 0 0 1-.272 1.007L8.25 12l-3.495 5.992C3.977 19.326 4.938 21 6.482 21h11.036c1.543 0 2.505-1.674 1.727-3.008L15.75 12l-1.478-2.533A2 2 0 0 1 14 8.459z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 3h2m6 0h-2m0 0v5.46a2 2 0 0 0 .272 1.007L15.75 12l3.495 5.992c.778 1.334-.184 3.008-1.727 3.008H6.482c-1.544 0-2.505-1.674-1.727-3.008L8.25 12l1.478-2.533A2 2 0 0 0 10 8.459V3m4 0h-4"
      />
    </svg>
  );
}
