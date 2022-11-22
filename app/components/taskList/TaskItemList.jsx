import React from 'react';
import Task from './Task';

export default function TaskItemList({ tasks }) {
  return (
    <div className="flex flex-col w-full gap-4">
      {tasks.length > 0 ? (
        tasks?.reverse().map((task) => (
          <div
            key={task.id}
            className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Task task={task} />
          </div>
        ))
      ) : (
        <p>
          <div className="w-full flex items-center justify-center text-gray-400 text-base">
            Nothing here ;-;
          </div>
        </p>
      )}
    </div>
  );
}
