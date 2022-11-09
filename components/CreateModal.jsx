import moment from "moment";
import React, { useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  NextWeek,
  ReceiptText,
  Today,
  Tomorrow,
} from "../public/assets/icons";
import DatePicker from "./DatePicker";

function CreateModal({ isOpen, setIsOpen }) {
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  const [dueDate, setDueDate] = useState();
  const [targetCollection, setTargetCollection] = useState();

  return (
    <div
      className={`w-full h-screen fixed flex items-center justify-center overscroll-contain ${
        isOpen ? "z-[9999]" : "z-[-1] transition-all delay-500"
      } top-0 left-0`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className={`w-full h-full absolute top-0 left-0 transition-colors duration-500 cursor-default ${
          isOpen ? "bg-gray-900/20" : "bg-transparent"
        }`}
      />
      <div
        className={`w-1/2 bg-white rounded-2xl shadow-xl relative transition-all duration-500 p-8 ${
          isOpen ? "translate-x-0" : "translate-x-[500%]"
        }`}
      >
        <h1 className="text-rose-500 flex items-center gap-2 text-xl font-medium">
          <ReceiptText className="w-8 h-8" />
          New Task
        </h1>
        <form className="w-full mt-8 flex flex-col gap-4">
          <div className="flex w-full">
            <div className="group">
              <input required type="text" />
              <span className="bar"></span>
              <label>Task title</label>
            </div>
          </div>
          <div className="flex w-full">
            <div className="group">
              <textarea required type="text" />
              <span className="bar"></span>
              <label>Description (optional)</label>
            </div>
          </div>
          <div
            tabIndex={0}
            className={`group picker-input cursor-pointer ${
              isDatePickerOpen && "active"
            }`}
          >
            <input
              disabled
              type="text"
              value={
                dueDate
                  ? moment(dueDate).format("dddd, DD MMMM YYYY")
                  : "No due date"
              }
              className="pointer-events-none"
            />
            <span className="bar"></span>
            <label>Due date</label>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <ChevronDown className="w-5 h-5 stroke-1" />
            </div>
            <div className="w-full p-2 px-0 bg-white shadow-md absolute -bottom-2 left-0 rounded-xl transition-[opacity,transform] z-[-1] translate-y-1/2 duration-200 opacity-0 group-focus:z-50 group-focus:opacity-100 group-focus:translate-y-full active:z-50 active:opacity-100 active:translate-y-full">
              <button
                type="button"
                onClick={() => setDueDate(moment().toDate())}
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
                onClick={() => setDueDate(moment().add(1, "day").toDate())}
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
                  setDueDate(
                    moment()
                      .add(1, "week")
                      .startOf("week")
                      .add(1, "day")
                      .toDate()
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
                onClick={() => setDatePickerOpen(true)}
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
          <div
            tabIndex={0}
            className={`group picker-input cursor-pointer ${
              isDatePickerOpen && "active"
            }`}
          >
            <input
              disabled
              type="text"
              value={targetCollection || "Choose a collection"}
              className="pointer-events-none"
            />
            <span className="bar"></span>
            <label>Collection</label>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <ChevronDown className="w-5 h-5 stroke-1" />
            </div>
          </div>
        </form>
      </div>
      <div
        className={`w-full h-screen fixed flex items-center justify-center overscroll-contain ${
          isDatePickerOpen ? "z-[9999]" : "z-[-1] transition-all delay-500"
        } top-0 left-0`}
      >
        <button
          type="button"
          onClick={() => setDatePickerOpen(false)}
          className={`w-full h-full absolute top-0 left-0 transition-colors duration-500 ${
            isDatePickerOpen ? "bg-gray-900/20" : "bg-transparent"
          }`}
        />
        <div
          className={`bg-white rounded-2xl shadow-xl relative transition-all duration-500 p-8 ${
            isDatePickerOpen ? "translate-x-0" : "translate-x-[500%]"
          }`}
        >
          <DatePicker />
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
