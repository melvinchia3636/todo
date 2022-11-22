import React from 'react';
import Link from 'next/link';
import * as icons from '../../../public/assets/icons';

export default function CollectionGridItem({ data }) {
  return (
    <Link href={`/collections/${data.id}`} key={data.id}>
      <div className="bg-gray-50 rounded-xl p-5  h-40">
        <div className="bg-orange-100 inline-block p-3 rounded-xl mb-6">
          {React.createElement(
            icons[
              data.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                (g[1] || g[0])?.toUpperCase(),
              )
            ],
            {
              className: 'w-5 h-5 text-orange-500',
            },
          )}
        </div>

        <div className="items-end justify-between flex">
          <div>
            <p className="font-medium text-lg">{data.name}</p>
            <p className="text-gray-400">
              {data.finishedTask}/{data.totalTask} done
            </p>
          </div>
          <div className="relative w-6 h-6">
            <div
              className="radial-progress absolute top-0 left-0 text-orange-100"
              style={{
                '--value': 100,
                '--size': '1.5rem',
                '--thickness': '4px',
              }}
            />
            {data.finishedTask > 0 && (
              <div
                className="radial-progress absolute top-0 left-0 text-orange-500"
                style={{
                  '--value': (data.finishedTask / data.totalTask) * 100,
                  '--size': '1.5rem',
                  '--thickness': '4px',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
