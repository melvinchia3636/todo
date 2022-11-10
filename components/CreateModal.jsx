import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  CheckboxList,
  ChevronDown,
  ChevronRight,
  NextWeek,
  ReceiptText,
  Today,
  Tomorrow,
} from "../public/assets/icons";
import DatePicker from "./DatePicker";
import PocketBase from "pocketbase";
import * as icons from "../public/assets/icons";

function CreateModal({ isOpen, setIsOpen }) {
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const [isCollectionChooserOpen, setCollectionChooserOpen] = useState(true);

  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [dueDate, setDueDate] = useState();
  const [targetCollection, setTargetCollection] = useState();

  const [collectionList, setCollectionList] = useState([]);

  const dateInput = useRef();

  const clearAllAndClose = () => {
    setTargetCollection(undefined);
    setDueDate(undefined);
    setDatePickerOpen(false);
    setCollectionChooserOpen(false);
    setTitle("");
    setNotes("");
    setIsOpen(false);
  };

  const fetchCollections = async () => {
    const db = new PocketBase("http://127.0.0.1:8090");
    const collections = await db.records.getList("collections", 1, 50);
    return collections.items;
  };

  const submitTask = async () => {
    const db = new PocketBase("http://127.0.0.1:8090");
    const task = {
      title,
      notes,
      due_date: dueDate,
      collection: targetCollection.id,
      is_done: false,
      created_at: moment().format(),
    };
    await db.records.create("tasks", task);
    clearAllAndClose();
  };

  useEffect(() => {
    fetchCollections().then((collections) => setCollectionList(collections));
  }, [isCollectionChooserOpen]);

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
        <div className="w-full mt-8 flex flex-col gap-4">
          <div className="flex w-full">
            <div className="group">
              <icons.ReceiptText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-50" />
              <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <span className="bar"></span>
              <label>Task title</label>
            </div>
          </div>
          <div className="flex w-full">
            <div className="group">
              <icons.EditPen2 className="absolute left-4 top-5 text-gray-400 w-5 h-5 z-10" />
              <textarea
                required
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <span className="bar"></span>
              <label>Notes (optional)</label>
            </div>
          </div>
          <div
            tabIndex={0}
            ref={dateInput}
            className={`group picker-input cursor-pointer ${
              isDatePickerOpen && "active"
            }`}
          >
            <icons.Flag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
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
            <button
              type="button"
              onClick={(e) => {
                if (dueDate) {
                  setDueDate(undefined);
                  return;
                }
                dateInput.current.focus();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {!dueDate ? (
                <ChevronDown className="w-5 h-5 stroke-1" />
              ) : (
                <icons.Close className="w-5 h-5 stroke-1" />
              )}
            </button>
            <div className="w-full p-2 px-0 bg-white shadow-md absolute -bottom-2 left-0 rounded-xl transition-[opacity,transform] z-[-1] pointer-events-none translate-y-1/2 duration-200 opacity-0 group-focus:z-50 group-focus:opacity-100 group-focus:translate-y-full group-focus:pointer-events-auto active:z-50 active:opacity-100 active:translate-y-full active:pointer-events-auto">
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
            onClick={() => setCollectionChooserOpen(true)}
            className={`group picker-input cursor-pointer ${
              isCollectionChooserOpen && "active"
            }`}
          >
            <icons.CheckboxList className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
            <div className="flex items-center gap-1 pb-2 pt-7 px-4 relative left-8 w-[calc(100%-2rem)]">
              {targetCollection &&
                React.createElement(
                  icons[
                    targetCollection.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                      (g[1] || g[0])?.toUpperCase()
                    )
                  ],
                  {
                    className: "w-[18px] h-[18px]",
                  }
                )}
              <input
                disabled
                type="text"
                value={targetCollection?.name || "Pick a collection"}
                className="pointer-events-none !p-0 !left-0"
              />
            </div>
            <span className="bar"></span>
            <label>Collection</label>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <ChevronDown className="w-5 h-5 stroke-1" />
            </div>
          </div>
        </div>

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
      <div
        className={`w-full h-screen fixed flex items-center justify-center overscroll-contain ${
          isCollectionChooserOpen
            ? "z-[9999]"
            : "z-[-1] transition-all delay-500"
        } top-0 left-0`}
      >
        <button
          type="button"
          onClick={() => setCollectionChooserOpen(false)}
          className={`w-full h-full absolute top-0 left-0 transition-colors duration-500 ${
            isCollectionChooserOpen ? "bg-gray-900/20" : "bg-transparent"
          }`}
        />
        <div
          className={`bg-white max-w-[50%] rounded-2xl shadow-xl relative transition-all duration-500 p-8 ${
            isCollectionChooserOpen ? "translate-x-0" : "translate-x-[500%]"
          }`}
        >
          <h1 className="text-rose-500 flex items-center gap-2 text-xl font-medium">
            <CheckboxList className="w-8 h-8" />
            Pick a collection
          </h1>
          <div className="mt-4">
            <div className="flex items-center gap-2 flex-wrap">
              {collectionList.map((collection) => (
                <button
                  key={collection.id}
                  type="button"
                  onClick={() => {
                    setTargetCollection(collection);
                    setTimeout(() => {
                      setCollectionChooserOpen(false);
                    }, 100);
                  }}
                  className={`flex flex-shrink-0 items-center gap-2 p-3 rounded-lg transition-all ${
                    targetCollection?.id === collection.id
                      ? "bg-rose-500 text-white hover:bg-rose-600"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {React.createElement(
                    icons[
                      collection.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                        (g[1] || g[0])?.toUpperCase()
                      )
                    ],
                    {
                      className: "w-6 h-6",
                    }
                  )}
                  <span>{collection.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
