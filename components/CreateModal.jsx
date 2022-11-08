import React, { useState } from "react";
import { Calendar, ChevronDown, ReceiptText } from "../public/assets/icons";
import DatePicker from "./DatePicker";

function CreateModal({ isOpen, setIsOpen }) {
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

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
        className={`w-1/2 h-[calc(100%-20rem)] bg-white rounded-2xl shadow-xl relative transition-all duration-500 p-8 ${
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
          <div className="flex w-full">
            <div
              tabIndex={0}
              className="group date-picker-input cursor-pointer"
            >
              <input
                disabled
                type="text"
                value="No due date"
                className="pointer-events-none"
              />
              <span className="bar"></span>
              <label>Due date</label>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <ChevronDown className="w-5 h-5 stroke-1" />
              </div>
              <div className="w-full p-4 px-0 bg-white shadow-md absolute -bottom-2 left-0 rounded-xl transition-[opacity,transform] z-[-1] translate-y-1/2 duration-200 opacity-0 group-focus:opacity-100 group-focus:translate-y-full group-focus:z-0">
                <button
                  type="button"
                  className="w-full active:bg-gray-100 px-4 hover:bg-gray-100 normal-case font-normal text-gray-600 flex items-center justify-between py-3 transition-all"
                >
                  <span className="text-base">Today</span>
                  <span className="text-gray-400">Tuesday</span>
                </button>
                <button
                  type="button"
                  className="w-full active:bg-gray-100 px-4 hover:bg-gray-100 normal-case font-normal text-gray-600 flex items-center justify-between py-3 transition-all"
                >
                  <span className="text-base">Tomorrow</span>
                  <span className="text-gray-400">Wednesday</span>
                </button>
                <button
                  type="button"
                  className="w-full active:bg-gray-100 px-4 hover:bg-gray-100 normal-case font-normal text-gray-600 flex items-center justify-between py-3 transition-all"
                >
                  <span className="text-base">Next week</span>
                  <span className="text-gray-400">Monday</span>
                </button>
              </div>
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
