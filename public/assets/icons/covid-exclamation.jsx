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
        d="M9 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v1.062c1.46.182 2.8.759 3.906 1.618l1.18-1.18-.793-.793a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1-1.414 1.414l-.793-.793-1.345 1.346A9 9 0 0 0 7.26 18.155L5.914 19.5l.793.793a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 1 1 1.414-1.414l.793.793 1.18-1.18A7.966 7.966 0 0 1 4.062 13H3v1a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0v1h1.062A7.96 7.96 0 0 1 5.68 7.094L4.5 5.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-.793.793 1.18 1.18A7.96 7.96 0 0 1 11 4.062V3h-1a1 1 0 0 1-1-1z"
        clip-rule="evenodd"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M16 9a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-1 10a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1zm2-6a1 1 0 1 0-2 0l.001 3a1 1 0 1 0 2 0L17 13z"
        clip-rule="evenodd"
      />
    </svg>
  );
}