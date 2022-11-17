'use client';

/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';

export default function Task({ task }) {
  const router = useRouter();

  async function updateIsDone() {
    const client = new PocketBase('http://127.0.0.1:8090');
    await client.records.update('tasks', task.id, {
      is_done: !task.is_done,
    });

    router.refresh();
  }

  return (
    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
      <button
        type="button"
        onClick={updateIsDone}
        className={`w-5 h-5 rounded-md border-2 border-rose-500 ${
          task.is_done && 'bg-rose-500'
        }`}
      >
        {task.is_done && (
          <span className="mgc_check_fill text-rose-50 text-xs block" />
        )}
      </button>
      <div>
        <p
          className={`text-base ${
            task.is_done && 'line-through decoration-[1.5px]'
          }`}
        >
          {task.title}
        </p>
        <p className="text-rose-500 text-xs">
          {moment(task.due_date).fromNow()}
        </p>
      </div>
    </div>
  );
}
