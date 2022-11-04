"use client";

/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import CheckBoxListIcon from "../public/assets/icons/checkbox-list";
import HomeIcon from "../public/assets/icons/home";
import CalendarIcon from "../public/assets/icons/calendar";
import FolderIcon from "../public/assets/icons/folder";
import SettingsCogIcon from "../public/assets/icons/settings-cog";
import LogoutIcon from "../public/assets/icons/logout";
import ChevronRightIcon from "../public/assets/icons/chevron-right";
import Link from "next/link";

const ROUTES = [
  { name: "Home", Icon: HomeIcon, path: "/" },
  {
    name: "Collections",
    Icon: CheckBoxListIcon,
    path: "/collections",
    hasCollapse: true,
  },
  {
    name: "Projects",
    Icon: FolderIcon,
    path: "/projects",
    hasCollapse: true,
  },
  { name: "Calendar", Icon: CalendarIcon, path: "/calendar" },
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
          className="w-full h-[3.2rem] rounded-lg transition-all bg-rose-100/80 absolute left-0 -translate-y-[1rem] z-[-1]"
          style={{
            top:
              ROUTES.findIndex(
                (route) =>
                  currentRoute?.split("/")[1] === route.path.split("/")[1]
              ) *
                3.2 +
              "rem",
          }}
        ></div>
        {ROUTES.map(({ name, Icon, path, hasCollapse }) => (
          <li
            key={name}
            className={`h-[3.2rem] px-4 rounded-lg transition-all ${
              currentRoute?.split("/")[1] === path.split("/")[1] &&
              "text-rose-500"
            }`}
          >
            <Link href={path}>
              <span className="flex items-center justify-between gap-5 font-medium">
                <div className="flex items-center gap-5">
                  <Icon className="w-5 h-5 stroke-1" />
                  {name}
                </div>
                {hasCollapse && (
                  <ChevronRightIcon className="w-5 h-5 stroke-1" />
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="mt-16 text-gray-400 flex flex-col gap-3">
        <li className="py-3 px-4 rounded-lg">
          <Link href="/settings">
            <span className="flex items-center gap-5 font-medium">
              <SettingsCogIcon className="w-5 h-5 stroke-1" />
              Settings
            </span>
          </Link>
        </li>
        <li className="py-3 px-4 rounded-lg">
          <Link href="/logout">
            <span className="flex items-center gap-5 font-medium">
              <LogoutIcon className="w-5 h-5 stroke-1" />
              Log out
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
