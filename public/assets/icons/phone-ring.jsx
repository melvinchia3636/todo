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
        d="M23 17.5 20.5 20l-3-2v-4.158C15.976 13.337 14.146 13 12 13c-2.145 0-3.976.337-5.5.842V18l-3 2L1 17.5c.665-.997 2.479-2.657 5.5-3.658C8.024 13.337 9.855 13 12 13c2.146 0 3.976.337 5.5.842 3.021 1 4.835 2.66 5.5 3.658z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17.5 13.842C15.976 13.337 14.146 13 12 13c-2.145 0-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 20l-3-2v-4.158zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 20l3-2v-4.158zM12 4v4M4.636 6.636l2.828 2.828m11.9-2.828-2.828 2.828"
      />
    </svg>
  );
}
