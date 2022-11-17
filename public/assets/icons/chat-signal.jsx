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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.935-1.3l-3.749 1.249a1 1 0 0 1-1.265-1.265l1.25-3.749A9.959 9.959 0 0 1 2 12zm10.221-7.752a1 1 0 0 0-.442 1.95 8.013 8.013 0 0 1 6.023 6.023 1 1 0 1 0 1.95-.442 10.013 10.013 0 0 0-7.53-7.531zM9 9a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1zm1 3a1 1 0 1 0 0 2 1 1 0 1 0 2 0 2 2 0 0 0-2-2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
