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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm10-6a1 1 0 1 0-2 0v1H8a1 1 0 0 0 0 2h1v6H8a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1v1a1 1 0 1 0 2 0v-1c.493 0 1.211-.14 1.834-.588C16.51 15.925 17 15.126 17 14c0-.851-.281-1.516-.71-2 .429-.484.71-1.149.71-2 0-1.126-.491-1.926-1.166-2.412A3.233 3.233 0 0 0 14 7V6a1 1 0 1 0-2 0v1h-1V6zm0 5V9h3c.173 0 .456.06.666.212.159.114.334.314.334.788 0 .474-.175.674-.334.789A1.25 1.25 0 0 1 14 11h-3zm0 2h3c.173 0 .456.06.666.211.159.115.334.315.334.789 0 .474-.175.674-.334.789A1.25 1.25 0 0 1 14 15h-3v-2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
