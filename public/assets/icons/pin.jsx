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
        d="M12.956 18.956 9 15l-3.956-3.956a1 1 0 0 1 .314-1.626l5.261-2.255a1 1 0 0 0 .535-.548l1.283-3.207a1 1 0 0 1 1.635-.336l6.856 6.856a1 1 0 0 1-.336 1.635l-3.207 1.283a1 1 0 0 0-.548.535l-2.255 5.261a1 1 0 0 1-1.626.314z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m4 20 5-5m0 0 3.956 3.956a1 1 0 0 0 1.626-.314l2.255-5.261a1 1 0 0 1 .548-.535l3.207-1.283a1 1 0 0 0 .336-1.635l-6.856-6.856a1 1 0 0 0-1.635.336l-1.283 3.207a1 1 0 0 1-.535.548L5.358 9.418a1 1 0 0 0-.314 1.626L9 15z"
      />
    </svg>
  );
}
