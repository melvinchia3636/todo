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
        d="M12.879 3.707a3 3 0 0 1 4.242 0l3.172 3.172a3 3 0 0 1 0 4.242l-9.172 9.172a3 3 0 0 1-4.242 0L3.707 17.12a3 3 0 0 1 0-4.242L4.586 12l1.707 1.707a1 1 0 0 0 1.414-1.414L6 10.586 7.586 9l2.707 2.707a1 1 0 0 0 1.414-1.414L9 7.586 10.586 6l1.707 1.707a1 1 0 1 0 1.414-1.414L12 4.586l.879-.879z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
