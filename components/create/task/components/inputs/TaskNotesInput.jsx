import React from "react";

export default function TaskNotesInput(props) {
  return (
    <div className="flex w-full">
      <div className="group">
        <span className="absolute left-4 top-5 text-gray-400 text-xl mgc_pen_fill -mt-[6px] z-10" />
        <textarea
          required
          type="text"
          value={props.notes}
          onChange={(e) => props.setNotes(e.target.value)}
        />
        <span className="bar"></span>
        <label>Notes (optional)</label>
      </div>
    </div>
  );
}
