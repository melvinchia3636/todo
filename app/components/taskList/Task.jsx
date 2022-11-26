/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';

export default function Task({ task, setEditTask }) {
  const router = useRouter();

  async function updateIsDone() {
    const client = new PocketBase('http://127.0.0.1:8090');
    await client.records.update('tasks', task.id, {
      is_done: !task.is_done,
    });

    router.refresh();
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setEditTask(task)}
        type="button"
        className="absolute top-0 right-0 w-full h-full z-[0]"
      />
      <button
        type="button"
        onClick={updateIsDone}
        className={`w-5 h-5 rounded-md border-2 border-custom-500 ${
          task.is_done && 'bg-custom-500'
        }`}
      >
        {task.is_done && (
          <span className="mgc_check_fill text-custom-50 text-xs block" />
        )}
      </button>
      <div className="relative z-[-1]">
        <p
          className={`text-base ${
            task.is_done && 'line-through decoration-[1.5px]'
          }`}
        >
          {task.title}
        </p>
        <p className="text-custom-500 text-xs">
          {task.due_date && moment(task.due_date).fromNow()}
        </p>
      </div>
    </div>
  );
}
