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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 19c5.523 0 10-3.582 10-8s-4.477-8-10-8S2 6.582 2 11c0 2.157 1.067 4.114 2.801 5.553C4.271 18.65 3 20 2 21c3 0 4.527-.979 6.32-2.559 1.14.36 2.38.559 3.68.559z"
      />
    </svg>
  );
}
