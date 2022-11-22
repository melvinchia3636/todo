/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PocketBase from 'pocketbase';
import * as icons from '../../../public/assets/icons';
import Header from '../../components/taskList/Header';
import AddTaskButton from '../../components/taskList/AddTaskButton';
import TaskItemList from '../../components/taskList/TaskItemList';

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
        <AddTaskButton collectionId={collection.id} />
        <header className="flex items-center justify-between w-full">
          <h3 className="font-medium text-gray-400">
            Pending Tasks - {tasks?.filter((task) => !task.is_done).length}
          </h3>
          <button
            type="button"
            className="px-4 py-2 rounded-lg text-gray-400 font-medium gap-2 flex items-center"
          >
            <icons.Sort className="w-4 h-4" />
            Sort
          </button>
        </header>
        <TaskItemList tasks={tasks.filter((task) => !task.is_done)} />
        <header className="flex items-center justify-between w-full">
          <h3 className="font-medium text-gray-400">
            Completed Tasks - {tasks?.filter((task) => task.is_done).length}
          </h3>
          <button
            type="button"
            className="px-4 py-2 rounded-lg text-gray-400 font-medium gap-2 flex items-center"
          >
            <icons.Sort className="w-4 h-4" />
            Sort
          </button>
        </header>
        <TaskItemList tasks={tasks.filter((task) => task.is_done)} />
      </div>
    </section>
  );
}

export default page;
