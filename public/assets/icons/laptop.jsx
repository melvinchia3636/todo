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
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7.764l1.447 2.894-.894.448.894-.448c.998 1.995-.453 4.342-2.683 4.342H4.236c-2.23 0-3.68-2.347-2.683-4.342L3 13.764V6zm3-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6z"
        clip-rule="evenodd"
      />
    </svg>
  );
}