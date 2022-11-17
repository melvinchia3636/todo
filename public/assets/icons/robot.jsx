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
        d="M12 3a2 2 0 0 0-1 3.732V8H8c-3.2 0-4 2.667-4 4v7c0 .667.4 2 2 2h1v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4h1c1.6 0 2-1.333 2-2v-7c0-3.2-2.667-4-4-4h-3V6.732A2 2 0 0 0 12 3zm3 18v-3h-2v3h2zm-4 0v-3H9v3h2zm10-3v-5c.667 0 2 .4 2 2v1c0 .667-.4 2-2 2zM3 13v5c-1.6 0-2-1.333-2-2v-1c0-1.6 1.333-2 2-2zm6-1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2H9zm5 1a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
