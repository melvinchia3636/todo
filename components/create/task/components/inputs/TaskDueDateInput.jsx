import moment from "moment";
import React from "react";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  NextWeek,
  Today,
  Tomorrow,
} from "../../../../../public/assets/icons";

export default function TaskDueDateInput(props) {
  return (
    <div
      tabIndex={0}
      ref={props.dateInput}
      className={`group picker-input cursor-pointer ${
        props.isDatePickerOpen && "active"
      }`}
    >
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl mgc_flag_1_fill z-10" />
      <input
        disabled
        type="text"
        value={
          props.dueDate
            ? moment(props.dueDate).format("dddd, DD MMMM YYYY")
            : "No due date"
        }
        className="pointer-events-none"
      />
      <span className="bar"></span>
      <label>Due date</label>
      <button
        type="button"
        onClick={() => {
          if (props.dueDate) {
            props.setDueDate(undefined);
            return;
          }

          props.dateInput.current.focus();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
      >
        {!props.dueDate ? (
          <ChevronDown className="w-5 h-5 stroke-1" />
        ) : (
          <span className="text-base mgc_close_fill" />
        )}
      </button>
      <div className="w-full p-2 px-0 bg-white shadow-md absolute -bottom-2 left-0 rounded-xl transition-[opacity,transform] z-[-1] pointer-events-none translate-y-1/2 duration-200 opacity-0 group-focus:z-50 group-focus:opacity-100 group-focus:translate-y-full group-focus:pointer-events-auto active:z-50 active:opacity-100 active:translate-y-full active:pointer-events-auto">
        <button
          type="button"
          onClick={() => props.setDueDate(moment().toDate())}
          className="w-full active:bg-gray-100 px-4 hover:bg-gray-100 normal-case font-normal text-gray-600 flex items-center justify-between py-3 transition-all"
        >
          <span className="text-base flex items-center">
            <Today className="w-5 h-5 mr-2 stroke-1" />
            Today
          </span>
          <span className="text-gray-400">Tuesday</span>
        </button>
        <button
          type="button"
          onClick={() => props.setDueDate(moment().add(1, "day").toDate())}
          className="w-full active:bg-gray-100 px-4 hover:bg-gray-100 normal-case font-normal text-gray-600 flex items-center justify-between py-3 transition-all"
        >
          <span className="text-base flex items-center">
            <Tomorrow className="w-5 h-5 mr-2 stroke-1" />
            Tomorrow
          </span>
          <span className="text-gray-400">Wednesday</span>
        </button>
        <button
          type="button"
          onClick={() =>
            props.setDueDate(
              moment().add(1, "week").startOf("week").add(1, "day").toDate()
            )
          }
          className="w-full active:bg-gray-100 px-4 hover:bg-gray-100 normal-case font-normal text-gray-600 flex items-center justify-between py-3 transition-all"
        >
          <span className="text-base flex items-center">
            <NextWeek className="w-5 h-5 mr-2 stroke-1" />
            Next week
          </span>
          <span className="text-gray-400">Monday</span>
        </button>
        <div className="w-full my-2 border-b border-gray-200" />
        <button
          type="button"
          onClick={() => props.setDatePickerOpen(true)}
          className="w-full active:bg-gray-100 px-4 hover:bg-gray-100 normal-case font-normal text-gray-600 flex items-center justify-between py-3 transition-all"
        >
          <span className="text-base flex items-center">
            <Calendar className="w-6 -ml-[2px] h-6 mr-[0.4rem] stroke-1" />
            Pick a date
          </span>
          <span className="text-gray-400">
            <ChevronRight className="w-5 h-5 stroke-1" />
          </span>
        </button>
      </div>
    </div>
  );
}
