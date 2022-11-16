"use client";

/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";

const ROUTES = [
  { name: "Home", icon: "home_4_fill", path: "/" },
  {
    name: "Collections",
    icon: "list_check_2_fill",
    path: "/collections",
    hasCollapse: true,
  },
  {
    name: "Projects",
    icon: "folder_fill",
    path: "/projects",
    hasCollapse: true,
  },
  { name: "Calendar", icon: "calendar_fill", path: "/calendar" },
];

export default function Sidebar() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathanme);

  useEffect(() => {
    (() => {
      let oldPushState = history.pushState;
      history.pushState = function pushState() {
        let ret = oldPushState.apply(this, arguments);
        window.dispatchEvent(new Event("pushstate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
      };

      let oldReplaceState = history.replaceState;
      history.replaceState = function replaceState() {
        let ret = oldReplaceState.apply(this, arguments);
        window.dispatchEvent(new Event("replacestate"));
        window.dispatchEvent(new Event("locationchange"));
        return ret;
      };

      window.addEventListener("popstate", () => {
        window.dispatchEvent(new Event("locationchange"));
      });
    })();

    window.addEventListener("locationchange", function () {
      setCurrentRoute(window.location.pathname);
    });
  }, []);

  return (
    <aside className="h-[calc(100%-1rem)] p-2 pr-4 w-[24%] border-r border-gray-200 flex flex-col">
      <h1 className="font-semibold text-2xl">
        .to<span className="text-rose-500">do</span>
      </h1>
      <ul className="mt-16 text-gray-400 flex flex-col flex-1 relative isolate">
        <div
          className="w-full h-[3.2rem] rounded-lg transition-all bg-rose-100/80 absolute left-0 -translate-y-[0.8rem] z-[-1]"
          style={{
            top:
              Math.max(
                0,
                ROUTES.findIndex(
                  (route) =>
                    currentRoute?.split("/")[1] === route.path.split("/")[1]
                )
              ) *
                3.2 +
              "rem",
          }}
        ></div>
        {ROUTES.map(({ name, icon, path, hasCollapse }) => (
          <li
            key={name}
            className={`h-[3.2rem] px-4 rounded-lg transition-all hover:text-rose-500 ${
              currentRoute?.split("/")[1] === path.split("/")[1] &&
              "text-rose-500"
            }`}
          >
            <Link href={path}>
              <span className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-5 font-medium">
                  <span className={`text-xl -mt-[2px] mgc_${icon}`} />
                  {name}
                </div>
                {hasCollapse && (
                  <span className="text-base -mt-[2px] mgc_right_fill" />
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mt-16 text-gray-400 flex flex-col">
        <li className="py-3 px-4 rounded-lg">
          <Link href="/settings">
            <span className="flex items-center gap-5 font-medium">
              <span className="text-xl -mt-[2px] mgc_settings_1_fill" />
              Settings
            </span>
          </Link>
        </li>
        <li className="py-3 px-4 rounded-lg">
          <Link href="/logout">
            <span className="flex items-center gap-5 font-medium">
              <span className="text-xl -mt-[2px] mgc_exit_door_fill" />
              Log out
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
