import React from 'react';
import { Plus } from '../../public/assets/icons';

export default function Navbar({ setIsCreateModalOpen }) {
  return (
    <nav className="w-full flex items-center justify-between border-b-[1.5px] border-base-100 pb-6">
      <div className="flex items-center gap-2 w-96 py-3 px-4 bg-base-100 rounded-full">
        <span className="text-xl -mt-[2px] mgc_search_line text-secondary-content" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent placeholder-secondary-content"
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-4 mr-4">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn border-none normal-case pr-4 px-3 cursor-pointer hover:bg-custom-600 transition-all active:animate-ping text-custom-50 font-semibold gap-1 h-10 min-h-[2.5rem] bg-custom-500 flex items-center justify-center rounded-lg"
            >
              <Plus className="w-4 h-4 mr-1 stroke-3" />
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
                  <span className="text-xl -mt-[2px] mgc_coupon_fill" />
                  Task
                </button>
              </li>
              <li>
                <a href="/" className="flex items-center gap-2">
                  <span className="text-xl -mt-[2px] mgc_list_check_2_fill" />
                  Collection
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center gap-2">
                  <span className="text-xl -mt-[2px] mgc_folder_fill" />
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
        <span className="text-xl -mt-[2px] mgc_more_2_fill" />
      </div>
    </nav>
  );
}
