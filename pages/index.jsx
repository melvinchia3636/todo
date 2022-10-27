import { Icon } from "@iconify/react";
import React from "react";

function Index() {
  return (
    <div className="w-full h-screen flex p-4">
      <aside className="h-full p-2 pr-4 w-[24%] border-r border-gray-200 flex flex-col">
        <h1 className="font-semibold text-2xl">
          .to<span className="text-rose-500">do</span>
        </h1>
        <ul className="mt-16 text-gray-400 flex flex-col gap-2 flex-1">
          <li className="text-rose-500 py-3 bg-rose-100/80 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="iconoir:home-simple" className="w-5 h-5 stroke-1" />
              Dashboard
            </a>
          </li>
          <li className="py-3 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="iconoir:graph-up" className="w-5 h-5 stroke-1" />
              Statistics
            </a>
          </li>
          <div className="w-full py-4">
            <div className="border-b border-gray-200"></div>
          </div>
          <li className="py-3 px-4 rounded-lg">
            <a
              href="/todos"
              className="flex items-center justify-between font-medium"
            >
              <div className="flex items center gap-5">
                <Icon icon="iconoir:view-grid" className="w-5 h-5 stroke-1" />
                Collections
              </div>
              <Icon
                icon="iconoir:nav-arrow-down"
                className="w-5 h-5 stroke-1"
              />
            </a>
          </li>
          <li className="py-3 px-4 rounded-lg">
            <a
              href="/todos"
              className="flex items-center justify-between font-medium"
            >
              <div className="flex items center gap-5">
                <Icon icon="iconoir:folder" className="w-5 h-5 stroke-1" />
                Projects
              </div>
              <Icon
                icon="iconoir:nav-arrow-down"
                className="w-5 h-5 stroke-1"
              />
            </a>
          </li>
          <li className="py-3 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="iconoir:chat-lines" className="w-5 h-5 stroke-1" />
              Chat
            </a>
          </li>
          <li className="py-3 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="iconoir:calendar" className="w-5 h-5 stroke-1" />
              Calendar
            </a>
          </li>
          <div className="w-full py-4 pr-8">
            <div className="border-b border-gray-200"></div>
          </div>
        </ul>
        <ul className="mt-16 text-gray-400 flex flex-col gap-4">
          <li className="py-3 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="iconoir:settings" className="w-5 h-5 stroke-1" />
              Dashboard
            </a>
          </li>
          <li className="py-3 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="iconoir:log-out" className="w-5 h-5 stroke-1" />
              Log out
            </a>
          </li>
        </ul>
      </aside>
      <main className="p-4 px-6">
        <nav className="w-full">
          <div className="flex items-center gap-2 w-96 p-4 bg-gray-50 rounded-full">
            <Icon
              icon="iconoir:search"
              className="stroke-1 w-6 h-6 flex-shrink-0 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent placeholder-gray-300"
            />
          </div>
        </nav>
      </main>
    </div>
  );
}

export default Index;
