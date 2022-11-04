import React from "react";
import PocketBase from "pocketbase";
import * as icons from "../../public/assets/icons";
import Link from "next/link";

export const fetchCache = "no-store";

async function getCollection() {
  const client = new PocketBase("http://127.0.0.1:8090");
  const collections = await client.records.getList("collections");

  return collections?.items;
}

async function Collections() {
  const collections = await getCollection();
  return (
    <section className="w-full px-16 pt-8 overflow-scroll">
      <div className="w-full flex items-center justify-between mt-8 mb-4">
        <h1 className="text-lg font-medium text-rose-500">Collections</h1>
      </div>
      <p className="text-2xl block mt-6 leading-normal font-semibold">
        All Collections
      </p>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mt-6">
        {collections.map((e) => (
          <Link href={`/collections/${e.id}`} key={e.id}>
            <div className="bg-gray-50 rounded-xl p-5  h-40">
              <div className="bg-rose-100 inline-block p-3 rounded-xl mb-6">
                {React.createElement(
                  icons[
                    e.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                      (g[1] || g[0])?.toUpperCase()
                    )
                  ],
                  {
                    className: "w-5 h-5 text-rose-500",
                  }
                )}
              </div>

              <div className="items-end justify-between flex">
                <div>
                  <p className="font-medium text-lg">{e.name}</p>
                  <p className="text-gray-400">3/12 done</p>
                </div>
                <div className="relative w-6 h-6">
                  <div
                    className="radial-progress absolute top-0 left-0 text-rose-100"
                    style={{
                      "--value": 100,
                      "--size": "1.5rem",
                      "--thickness": "4px",
                    }}
                  />
                  <div
                    className="radial-progress absolute top-0 left-0 text-rose-500"
                    style={{
                      "--value": 25,
                      "--size": "1.5rem",
                      "--thickness": "4px",
                    }}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className="border-2 h-40 border-dashed flex items-center justify-center flex-col gap-2 rounded-xl p-5 ">
          <icons.Plus className="w-6 h-6 text-gray-300" />
          <p className="text-gray-400/50 font-medium text-base">Create</p>
        </div>
      </div>
    </section>
  );
}

export default Collections;