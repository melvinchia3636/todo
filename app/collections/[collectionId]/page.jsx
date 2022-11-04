import React from "react";
import PocketBase from "pocketbase";
import { ChevronRight, Plus } from "../../../public/assets/icons";
import Link from "next/link";
import * as icons from "../../../public/assets/icons";
import moment from "moment";

export const fetchCache = "no-store";

async function getTasks(collectionId) {
  const client = new PocketBase("http://127.0.0.1:8090");
  const collection = await client.records.getOne("collections", collectionId);
  const tasks = await client.records.getList("tasks", 1, 50, {
    filter: `collection = "${collectionId}"`,
  });

  return {
    collection,
    tasks: tasks?.items,
  };
}

async function page({ params }) {
  const { collection, tasks } = await getTasks(params.collectionId);
  return (
    <section className="w-full px-16 pt-8 overflow-scroll">
      <div className="w-full flex items-center gap-2 mt-8 mb-4">
        <Link href="/collections">
          <span className="text-gray-400 font-medium -mt-[2px] block">
            Collections
          </span>
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400 stroke-2" />
        <h1 className="text-lg font-medium text-rose-500">{collection.name}</h1>
      </div>
      <div className="flex items-center gap-4 my-6">
        <div className="bg-rose-100 inline-block p-3 rounded-xl">
          {React.createElement(
            icons[
              collection.icon
                .replace(/(?:-|^)([a-z0-9])/g, (g) =>
                  (g[1] || g[0])?.toUpperCase()
                )
                .replace(/ /g, "")
            ],
            {
              className: "w-5 h-5 text-rose-500",
            }
          )}
        </div>
        <p className="text-2xl block leading-normal font-semibold">
          {collection.name}
        </p>
      </div>
      <div className="flex flex-col w-full gap-4 mt-10">
        <header className="flex items-center justify-between w-full">
          <h3 className="font-medium text-gray-400">
            Pending Tasks - {tasks?.filter((task) => !task.completed).length}
          </h3>
          <button
            type="button"
            className="px-4 py-2 rounded-lg text-gray-400 font-medium gap-2 flex items-center"
          >
            <icons.Sort className="w-4 h-4" />
            Sort
          </button>
        </header>
        <div className="flex flex-col w-full gap-4">
          {tasks?.map((task) => (
            <div
              key={task["@collectionId"]}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl"
            >
              <div className="w-5 h-5 rounded-md border-2 border-rose-500"></div>
              <div>
                <p className="text-base">{task.title}</p>
                <p className="text-rose-500 text-xs">
                  {moment(task.to_be_completed_at).fromNow()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default page;
