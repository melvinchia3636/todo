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
        d="M16 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a1 1 0 1 1 2 0h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2a1 1 0 1 1-2 0zm1 5.001a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v.001a1 1 0 0 0 1 1zm1 3a1 1 0 1 1-2 0V12a1 1 0 1 1 2 0v.001zm-1 5a1 1 0 0 0 1-1V16a1 1 0 1 0-2 0v.001a1 1 0 0 0 1 1zm-3.168-7.446a1 1 0 0 0-1.664-1.11L8.845 13.43l-1.138-1.137a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.54-.152l4-6z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
