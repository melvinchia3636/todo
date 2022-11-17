import React from "react";
export default function Icon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#a)">
        <path
          fill="currentColor"
          d="m11.026 7.366 6.063-3.5 3 5.196-6.063 3.5a1 1 0 0 1-1.366-.366l-3.03 1.75-2.166 1.25a1 1 0 0 1-1.366-.366l-1.732 1a1 1 0 1 1-1-1.732l1.732-1a1 1 0 0 1 .366-1.366l5.196-3a1 1 0 0 1 .366-1.366z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m16.588 3 .5.866m3.5 6.062-.5-.866m-3-5.196-6.062 3.5a1 1 0 0 0-.366 1.366v0m6.428-4.866 3 5.196m0 0-6.062 3.5a1 1 0 0 1-1.366-.366v0m-2-3.464-5.196 3a1 1 0 0 0-.366 1.366v0m5.562-4.366 2 3.464m0 0-3.03 1.75m-4.532-.848-1.732 1A1 1 0 0 0 3 15.464v0a1 1 0 0 0 1.366.366l1.732-1m-1-1.732 1 1.732m0 0v0a1 1 0 0 0 1.366.366l2.165-1.25m0 0L13 20m-3.37-6.054L7.097 20"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
