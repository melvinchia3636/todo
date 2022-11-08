import React from "react";
import SearchIcon from "../public/assets/icons/search";
import PlusIcon from "../public/assets/icons/plus";
import MoreMenuVerticalIcon from "../public/assets/icons/more-menu-vertical";
import ReceiptText from "../public/assets/icons/receipt-text";
import CheckBoxListIcon from "../public/assets/icons/checkbox-list";
import FolderIcon from "../public/assets/icons/folder";

export default function Navbar({ isCreateModalOpen, setIsCreateModalOpen }) {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-6">
      <div className="flex items-center gap-2 w-96 p-3 bg-gray-50 rounded-full">
        <SearchIcon className="w-5 h-5 stroke-1 text-gray-400" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent placeholder-gray-300"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-4 mr-4">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn border-none normal-case pr-4 px-3 cursor-pointer hover:bg-rose-600 transition-all active:animate-ping text-rose-100 font-medium gap-1 h-10 min-h-[2.5rem] bg-rose-500 flex items-center justify-center rounded-lg"
            >
              <PlusIcon className="w-5 h-5 stroke-1" />
              Add
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setIsCreateModalOpen(true);
                    document.activeElement.blur();
                  }}
                  className="flex items-center gap-2"
                >
                  <ReceiptText className="w-5 h-5" />
                  Task
                </button>
              </li>
              <li>
                <a className="flex items-center gap-2">
                  <CheckBoxListIcon className="w-5 h-5" />
                  Collection
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2">
                  <FolderIcon className="w-5 h-5" />
                  Project
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-full overflow-hidden w-9 h-9">
          <img src="https://i.pravatar.cc/300" alt="avatar" />
        </div>
        <div>
          <div className="font-medium text-base">John Davidson</div>
          <div className="text-gray-400 text-xs">johndavidson@gmail.com</div>
        </div>
        <MoreMenuVerticalIcon className="w-8 h-8 stroke-1" />
      </div>
    </nav>
  );
}
