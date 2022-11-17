/* eslint-disable function-paren-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import React from 'react';
import PocketBase from 'pocketbase';
import moment from 'moment';
import * as icons from '../public/assets/icons';

export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getCollection() {
  const client = new PocketBase('http://127.0.0.1:8090');
  const collections = await client.records.getList('collections');

  for (const collection of collections.items) {
    // get unfinished tasks
    const tasks = await client.records.getList('tasks', 1, 100, {
      filter: `collection = "${collection.id}" && is_done = false`,
    });

    collection.tasks = tasks?.items;
  }

  return collections?.items;
}

function Collection({ collection }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden mt-6">
      <div className="bg-rose-100/80 p-4 flex items-center gap-4">
        <div className="p-2 bg-rose-500 inline-block rounded-lg">
          {React.createElement(
            icons[
              collection.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                // eslint-disable-next-line implicit-arrow-linebreak
                (g[1] || g[0])?.toUpperCase(),
              )
            ],
            {
              className: 'w-4 h-4 text-rose-50 stroke-1',
            },
          )}
        </div>
        <p className="text-rose-500 text-lg font-medium">{collection.name}</p>
      </div>
      <div className="w-full p-4 flex flex-col gap-5 bg-gray-50">
        {collection.tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-4">
            <div className="w-5 h-5 rounded-md border-2 border-rose-500" />
            <div>
              <p className="text-base">{task.title}</p>
              <p className="text-rose-500 text-xs">
                {task.due_date && moment(task.due_date).fromNow()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function Home() {
  const collections = await getCollection();

  return (
    <section className="w-full px-16 py-8 overflow-scroll">
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

      {collections.map((e) => (
        <Collection key={e.id} collection={e} />
      ))}
    </section>
  );
}

export default Home;
