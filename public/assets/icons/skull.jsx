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
        d="M22 11a9.96 9.96 0 0 1-2 6v2a3 3 0 0 1-3 3v-1a1 1 0 1 0-2 0v1h-2v-1a1 1 0 1 0-2 0v1H9v-1a1 1 0 1 0-2 0v1a3 3 0 0 1-3-3v-2a9.96 9.96 0 0 1-2-6c0-2.779 1.136-5.058 2.99-6.627C6.828 2.817 9.318 2 12 2c2.682 0 5.172.817 7.01 2.373C20.863 5.942 22 8.22 22 11zM8 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.894 5.415C12.725 14.16 12.38 14 12 14s-.725.16-.894.415l-1 1.5a.591.591 0 0 0 .043.73c.183.22.504.355.851.355h2c.347 0 .668-.135.85-.356a.591.591 0 0 0 .044-.73l-1-1.5zM14 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
