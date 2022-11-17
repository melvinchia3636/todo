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
        d="M12 3a1 1 0 0 1 .832.445l3.471 5.207 4.182-2.51a1 1 0 0 1 1.503 1.01l-2 13A1 1 0 0 1 19 21H5a1 1 0 0 1-.988-.848l-2-13a1 1 0 0 1 1.503-1.01l4.182 2.51 3.471-5.207A1 1 0 0 1 12 3zm-1 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
