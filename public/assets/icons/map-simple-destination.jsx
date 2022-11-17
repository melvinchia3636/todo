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
        d="M8.445 3.168a1 1 0 0 1 1.002-.062L15 5.882l5.553-2.776A1 1 0 0 1 22 4v12a1 1 0 0 1-.445.832l-6 4a1 1 0 0 1-1.002.062L9 18.118l-5.553 2.776A1 1 0 0 1 2 20V8a1 1 0 0 1 .445-.832l6-4zM5 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0v.001zm5 1a1 1 0 0 1-1-1 1 1 0 1 1 2 0v.001a1 1 0 0 1-1 1zm4.707-3.708a1 1 0 1 0-1.414 1.414L14.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414L16 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L17.414 12l1.293-1.293a1 1 0 0 0-1.414-1.414L16 10.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
