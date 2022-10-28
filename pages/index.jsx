/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

function Index() {
  return (
    <div className="w-full h-screen flex p-4 pb-0 text-sm text-gray-700">
      <aside className="h-[calc(100%-1rem)] p-2 pr-4 w-[24%] border-r border-gray-200 flex flex-col">
        <h1 className="font-semibold text-2xl">
          .to<span className="text-rose-500">do</span>
        </h1>
        <ul className="mt-16 text-gray-400 flex flex-col gap-2 flex-1">
          <li className="text-rose-500 py-3 bg-rose-100/80 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="majesticons:home" className="w-5 h-5 stroke-1" />
              Dashboard
            </a>
          </li>
          <li className="py-3 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="majesticons:analytics" className="w-5 h-5 stroke-1" />
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
                <Icon
                  icon="majesticons:checkbox-list"
                  className="w-5 h-5 stroke-1"
                />
                Collections
              </div>
              <Icon
                icon="majesticons:chevron-right"
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
                <Icon icon="majesticons:folder" className="w-5 h-5 stroke-1" />
                Projects
              </div>
              <Icon
                icon="majesticons:chevron-right"
                className="w-5 h-5 stroke-1"
              />
            </a>
          </li>
          <li className="py-3 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="majesticons:chat-text" className="w-5 h-5 stroke-1" />
              Chat
            </a>
          </li>
          <li className="py-3 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="majesticons:calendar" className="w-5 h-5 stroke-1" />
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
              <Icon
                icon="majesticons:settings-cog"
                className="w-5 h-5 stroke-1"
              />
              Settings
            </a>
          </li>
          <li className="py-3 px-4 rounded-lg">
            <a href="/todos" className="flex items-center gap-5 font-medium">
              <Icon icon="majesticons:logout" className="w-5 h-5 stroke-1" />
              Log out
            </a>
          </li>
        </ul>
      </aside>
      <main className="p-4 pb-0 pt-2 px-6 flex-1 flex flex-col">
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2 w-96 p-3 bg-gray-50 rounded-full">
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
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4 mr-4">
              <button
                type="button"
                className="w-9 h-9 bg-rose-500 flex items-center justify-center rounded-lg"
              >
                <Icon
                  icon="majesticons:plus"
                  className="w-5 h-5 stroke-1 text-rose-100"
                />
              </button>
              <button
                type="button"
                className="relative after:bg-rose-500 after:w-1.5 after:h-1.5 after:absolute after:right-0 after:top-0 after:rounded-full"
              >
                <Icon
                  icon="majesticons:bell-line"
                  className="w-7 h-7 stroke-1 text-gray-400"
                />
              </button>
            </div>
            <div className="rounded-full overflow-hidden w-9 h-9">
              <img src="https://i.pravatar.cc/300" alt="avatar" />
            </div>
            <div>
              <div className="font-medium text-base">John Davidson</div>
              <div className="text-gray-400 text-xs">
                johndavidson@gmail.com
              </div>
            </div>
            <Icon
              icon="majesticons:more-menu-vertical"
              className="w-10 h-10 -mr-4 text-gray-400"
            />
          </div>
        </nav>
        <section className="w-full px-16 pt-8 overflow-scroll">
          <div className="w-full flex items-center justify-between mt-8 mb-4">
            <h1 className="text-lg font-medium text-rose-500">Dashboard</h1>
            <button type="button">
              <Icon
                icon="majesticons:more-menu"
                className="w-9 h-9 stroke-1 text-gray-500"
              />
            </button>
          </div>
          <p className="text-2xl block mt-6 leading-normal">
            Good Morning,
            <br />
            <span className="font-semibold text-3xl">John Davidson</span>
          </p>
          <div className="flex mt-8 gap-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-rose-100/80 text-rose-500 font-medium"
            >
              Daily Overview
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-400"
            >
              Statistics
            </button>
          </div>
          <div className="w-full rounded-2xl overflow-hidden mt-6">
            <div className="bg-rose-100/80 p-4 flex items-center gap-4">
              <div className="p-2 bg-rose-500 inline-block rounded-lg">
                <Icon
                  icon="majesticons:code"
                  className="w-4 h-4 text-rose-50 stroke-1"
                />
              </div>
              <p className="text-rose-500 text-lg font-medium">Programming</p>
            </div>
            <div className="w-full p-4 flex flex-col gap-5 bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-lg border-2 border-rose-500"></div>
                <div>
                  <p className="text-base">Fisish the project</p>
                  <p className="text-rose-500 text-xs">Today 5:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-lg border-2 border-rose-500"></div>
                <div>
                  <p className="text-base">Learn NextJS 13</p>
                  <p className="text-rose-500 text-xs">Today</p>
                </div>
              </div>
              <div className="w-full border-b border-gray-200"></div>
              <div className="w-full flex items-center justify-center">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-gray-400 flex items-center gap-2"
                >
                  Go to Collection
                  <Icon
                    icon="majesticons:arrow-right"
                    className="w-4 h-4 stroke-1"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden mt-6">
            <div className="bg-rose-100/80 p-4 flex items-center gap-4">
              <div className="p-2 bg-rose-500 inline-block rounded-lg">
                <Icon
                  icon="majesticons:user"
                  className="w-4 h-4 text-rose-50"
                />
              </div>
              <p className="text-rose-500 text-lg font-medium">Personal</p>
            </div>
            <div className="w-full p-4 flex flex-col gap-5 bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-lg border-2 border-rose-500"></div>
                <div>
                  <p className="text-base">Prepare items for travelling</p>
                  <p className="text-rose-500 text-xs">Today 20:00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-lg border-2 border-rose-500"></div>
                <div>
                  <p className="text-base">Do homeworks</p>
                  <p className="text-rose-500 text-xs">Today</p>
                </div>
              </div>
              <div className="w-full border-b border-gray-200"></div>
              <div className="w-full flex items-center justify-center">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg text-gray-400 flex items-center gap-2"
                >
                  Go to Collection
                  <Icon
                    icon="majesticons:arrow-right"
                    className="w-4 h-4 stroke-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Index;
