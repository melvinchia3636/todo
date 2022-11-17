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
        d="M21 3 3 21"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="m13.293 2.879 1.5 1.5L4.379 14.793l-1.5-1.5A3 3 0 0 1 2 11.172V5a3 3 0 0 1 3-3h6.172a3 3 0 0 1 2.12.879zm4.328 4.328L7.207 17.621l3.672 3.672a3 3 0 0 0 4.242 0l6.172-6.172a3 3 0 0 0 0-4.242L17.62 7.207zM7 6a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2H7z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
