/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowRight, Code, User } from "../public/assets/icons";

function Index() {
  return (
    <section className="w-full px-16 pt-8 overflow-scroll">
      <div className="w-full flex items-center justify-between mt-8 mb-4">
        <h1 className="text-lg font-medium text-rose-500">Dashboard</h1>
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
          Projects Overview
        </button>
      </div>
      <div className="w-full rounded-2xl overflow-hidden mt-6">
        <div className="bg-rose-100/80 p-4 flex items-center gap-4">
          <div className="p-2 bg-rose-500 inline-block rounded-lg">
            <Code className="w-4 h-4 text-rose-50 stroke-1" />
          </div>
          <p className="text-rose-500 text-lg font-medium">Programming</p>
        </div>
        <div className="w-full p-4 flex flex-col gap-5 bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-md border-2 border-rose-500"></div>
            <div>
              <p className="text-base">Fisish the project</p>
              <p className="text-rose-500 text-xs">Today 5:00</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-md border-2 border-rose-500"></div>
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
              <ArrowRight className="w-4 h-4 stroke-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full rounded-2xl overflow-hidden mt-6">
        <div className="bg-rose-100/80 p-4 flex items-center gap-4">
          <div className="p-2 bg-rose-500 inline-block rounded-lg">
            <User className="w-4 h-4 text-rose-50" />
          </div>
          <p className="text-rose-500 text-lg font-medium">Personal</p>
        </div>
        <div className="w-full p-4 flex flex-col gap-5 bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-md border-2 border-rose-500"></div>
            <div>
              <p className="text-base">Prepare items for travelling</p>
              <p className="text-rose-500 text-xs">Today 20:00</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-md border-2 border-rose-500"></div>
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
              <ArrowRight className="w-4 h-4 stroke-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
