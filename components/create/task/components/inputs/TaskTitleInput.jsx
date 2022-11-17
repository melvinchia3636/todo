import React from "react";

export default function TaskTitleInput(props) {
  return (
    <div className="flex flex-col w-full">
      <div className="group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl mgc_coupon_fill z-50" />
        <input
          required
          type="text"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <span className="bar"></span>
        <label>Task title</label>
      </div>
      <span className="text-rose-500 mt-1 ml-4 text-xs">
        {props.titleError}
      </span>
    </div>
  );
}
