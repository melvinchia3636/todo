import React from "react";

export default function FunctionButtons({ clearAllAndClose, submitTask }) {
  return (
    <div className="flex items-center gap-2 mt-6 justify-end">
      <button
        type="button"
        onClick={clearAllAndClose}
        className="btn hover:bg-gray-200 bg-gray-100 px-6 text-gray-400 border-none normal-case"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={submitTask}
        className="btn btn-primary px-6 text-rose-50 normal-case"
      >
        Add Task
      </button>
    </div>
  );
}
