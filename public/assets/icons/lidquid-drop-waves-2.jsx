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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 8.824C15 11.455 13 12 12 12s-3-.545-3-3.176C9 6.192 12 3 12 3s3 3.192 3 5.824z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m3 15 .872.697a2.33 2.33 0 0 0 3.102-.171v0a2.33 2.33 0 0 1 3.164-.122l.18.154c.968.83 2.396.83 3.364 0l.18-.154a2.33 2.33 0 0 1 3.164.121v0a2.33 2.33 0 0 0 3.102.172L21 15m-.5 4-.442.442c-.86.86-2.255.86-3.116 0v0a2.203 2.203 0 0 0-2.99-.114l-.27.23c-.968.83-2.396.83-3.364 0l-.27-.23a2.203 2.203 0 0 0-2.99.114v0c-.86.86-2.255.86-3.116 0L3.5 19"
      />
    </svg>
  );
}
