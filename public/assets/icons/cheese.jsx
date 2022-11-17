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
        d="M10.783 3.024a1 1 0 0 1 .664.082l10 5A1 1 0 0 1 22 9v4a1 1 0 0 1-1 1c-.173 0-.456.06-.666.211-.159.115-.334.315-.334.789 0 .474.175.674.334.789.21.15.493.211.666.211a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4.5a1 1 0 0 1-.894-.553c-1.34-2.679-2.02-6.427-1.136-9.824.903-3.475 3.434-6.515 8.313-7.6zM8 17a1 1 0 1 1 0-2h.001a1 1 0 1 1 0 2H8zm4-4a1 1 0 0 0 1 1h.001a1 1 0 1 0 0-2H13a1 1 0 0 0-1 1zm3 4a1 1 0 1 1 0-2h.001a1 1 0 1 1 0 2H15z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
