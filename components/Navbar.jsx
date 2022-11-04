import React from "react";
import SearchIcon from "../public/assets/icons/search";
import PlusIcon from "../public/assets/icons/plus";
import MoreMenuVerticalIcon from "../public/assets/icons/more-menu-vertical";

export default function Navbar() {
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
          <button
            type="button"
            className="pr-4 px-3 text-rose-100 font-medium gap-1 h-10 bg-rose-500 flex items-center justify-center rounded-lg"
          >
            <PlusIcon className="w-5 h-5 stroke-1" />
            Add
          </button>
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
