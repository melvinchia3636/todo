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
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM6.507 8.13a1 1 0 0 1 1.008.013L12 10.833V9a1 1 0 0 1 1.514-.857l5 3a1 1 0 0 1 0 1.714l-5 3A1 1 0 0 1 12 15v-1.834l-4.486 2.691A1 1 0 0 1 6 15V9a1 1 0 0 1 .507-.87zM8 13.234 10.056 12 8 10.766v2.468zM16.056 12 14 13.234v-2.468L16.056 12z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
