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
        d="M11.293 2.293a1 1 0 0 1 1.414 0c.81.81 1.973 1.29 3.183 1.54 1.202.248 2.347.246 3 .173A1 1 0 0 1 20 5v9c0 1.3-.568 2.449-1.304 3.395-.738.948-1.697 1.763-2.615 2.419a21.853 21.853 0 0 1-3.66 2.093l-.018.008-.006.003h-.002S12.394 21.92 12 21l-.394.919-.003-.001-.005-.003-.02-.008a21.482 21.482 0 0 1-1.137-.553 21.723 21.723 0 0 1-2.522-1.54c-.918-.656-1.877-1.47-2.615-2.419C4.568 16.45 4 15.3 4 14V5a1 1 0 0 1 1.11-.994c.653.073 1.798.075 3-.173 1.21-.25 2.373-.73 3.183-1.54zm.313 19.626a1 1 0 0 0 .788 0L12 21l-.394.919zM13 11V9a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"
        clip-rule="evenodd"
      />
    </svg>
  );
}