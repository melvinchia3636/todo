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
        d="m2 2 20 20"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M2.505 3.333A2.986 2.986 0 0 0 2 5v10.5c0 .086.011.17.032.25A1 1 0 0 0 2 16v3a3 3 0 0 0 3 3h14c.617 0 1.19-.186 1.666-.505l-8.722-8.723c-.552.267-1.06.558-1.525.867.827.293 1.75.71 2.657 1.256 1.399.84 2.821 2.02 3.778 3.583a1 1 0 1 1-1.706 1.044c-.736-1.203-1.878-2.178-3.102-2.913-1.222-.734-2.465-1.192-3.327-1.392a15.466 15.466 0 0 0-3.703-.386h-.022c-.348.005-.68.02-.994.045V5a.93.93 0 0 1 .013-.159L2.505 3.333zm13.732 8.075A25.003 25.003 0 0 1 20 11.016V5a1 1 0 0 0-1-1H8.828l-2-2H19a3 3 0 0 1 3 3v6.5a1 1 0 0 1-.032.25A1 1 0 0 1 22 12v5.172l-5.763-5.764zM6.346 7.174C6.13 7.534 6 7.977 6 8.5c0 .926.408 1.601.978 2.011A2.674 2.674 0 0 0 8.5 11c.357 0 .852-.087 1.316-.355l-3.47-3.47z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
