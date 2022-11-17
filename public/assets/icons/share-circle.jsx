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
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11-5a1 1 0 0 1 1.707-.707l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 12 15v-.96c-1.631.132-2.625.584-3.205 1.014a2.534 2.534 0 0 0-.675.71 1.02 1.02 0 0 0-.117.255.03.03 0 0 1-.003.008v-.002A1 1 0 0 1 6 16c0-2.706 1.137-4.715 2.573-6.036C9.635 8.987 10.89 8.361 12 8.117V7zm1 5a1 1 0 0 1 .937.65L15.586 11l-1.65-1.65A1 1 0 0 1 13 10c-.704 0-1.971.422-3.073 1.436a5.91 5.91 0 0 0-1.062 1.296C9.903 12.29 11.257 12 13 12z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
