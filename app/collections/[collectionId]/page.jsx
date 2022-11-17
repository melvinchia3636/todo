/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PocketBase from 'pocketbase';
import { Plus } from '../../../public/assets/icons';
import * as icons from '../../../public/assets/icons';
import Task from '../../../components/taskList/Task';
import Header from '../../../components/taskList/Header';

export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getTasks(collectionId) {
  const client = new PocketBase('http://127.0.0.1:8090');
  const collection = await client.records.getOne('collections', collectionId);
  const tasks = await client.records.getList('tasks', 1, 50, {
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
    <section className="w-full px-16 py-8 overflow-scroll">
      <Header collection={collection} />
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
            <Task key={task.id} task={task} />
          ))}
          <button
            type="button"
            className="w-full h-16 rounded-xl flex items-center p-4 gap-4 border-2 border-dashed"
          >
            <div className="w-5 h-5 rounded-md border-4 border-rose-500 bg-rose-500 flex items-center justify-center">
              <Plus className="w-4 h-4 text-white stroke-3" />
            </div>
            <div>
              <p className="text-base">Add task</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default page;
