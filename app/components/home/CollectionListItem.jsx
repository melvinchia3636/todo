import React from 'react';
import * as icons from '../../../public/assets/icons';
import Task from '../taskList/Task';

export default function Collection({ collection }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden mt-6">
      <div className="bg-custom-50 p-4 flex items-center gap-4">
        <div className="p-2 bg-custom-500 inline-block rounded-lg">
          {React.createElement(
            icons[
              collection.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                (g[1] || g[0])?.toUpperCase(),
              )
            ],
            {
              className: 'w-4 h-4 text-custom-50 stroke-1',
            },
          )}
        </div>
        <p className="text-custom-500 text-lg font-medium">{collection.name}</p>
      </div>
      <div className="w-full p-4 flex flex-col gap-5 bg-gray-50">
        {collection.tasks.reverse().map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
