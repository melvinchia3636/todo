/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/no-array-index-key */

'use client';

import React, { Fragment, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Auto from '../../public/theme/auto';
import Light from '../../public/theme/light';
import Dark from '../../public/theme/dark';
import Black from '../../public/theme/black';
import { ChevronDown } from '../../public/assets/icons';
import { ThemeContext } from '../themeContext';

const COLORS = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'grey',
];

function Settings() {
  const { themeColor, setThemeColor } = React.useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
  }, [themeColor]);

  return (
    <section className="w-full px-16 py-8 overflow-scroll flex-1">
      <p className="text-2xl block mt-6 leading-normal font-semibold">
        Settings
      </p>
      <div className="mt-4 w-full">
        <h3 className="text-xl block mt-6 leading-normal font-medium">Theme</h3>
        <p className="text-gray-400">Select or customize your UI theme.</p>
        <div className="w-full flex gap-4 mt-6">
          <div className="flex-1">
            <div className="border border-gray-300 rounded-xl overflow-hidden">
              <Auto />
            </div>
            <p className="mt-2">Auto</p>
          </div>
          <div className="flex-1">
            <div className="border-2 border-custom-500 rounded-xl overflow-hidden relative">
              <span className="mgc_check_circle_fill text-custom-500 text-xl block absolute bottom-2 right-2.5" />
              <Light />
            </div>
            <p className="mt-2 text-custom-500 font-medium flex items-center gap-1">
              Light
            </p>
          </div>
          <div className="flex-1">
            <div className="border border-gray-300 rounded-xl overflow-hidden">
              <Dark />
            </div>
            <p className="mt-2">Dark</p>
          </div>
          <div className="flex-1">
            <div className="border border-gray-300 rounded-xl overflow-hidden">
              <Black />
            </div>
            <p className="mt-2">Black</p>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-gray-200 my-6" />
      <div className="mt-4 mb-12 w-full flex items-center justify-between">
        <div>
          <h3 className="text-xl block leading-normal font-medium">
            Accent color
          </h3>
          <p className="text-gray-400">
            Select or customize your UI accent color.
          </p>
        </div>
        <Listbox value={themeColor} onChange={(color) => setThemeColor(color)}>
          <div className="relative mt-1 w-48">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-4 pl-4 pr-10 text-left border border-gray-200 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-custom-300 sm:text-sm flex items-center gap-2">
              <span className="bg-custom-500 w-4 h-4 rounded-full inline-block" />
              <span className="block truncate -mt-[1px]">
                {themeColor.split('-').slice(1).join(' ')}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition ease-in duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {COLORS.map((color, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none group hover:bg-custom-50 border-none transition-all py-3 px-4 flex items-center justify-between ${
                        active ? 'bg-custom-50' : ''
                      }`
                    }
                    value={`theme-${color}`}
                  >
                    {({ selected }) => (
                      <>
                        <div>
                          <span className="flex items-center gap-2">
                            <span
                              className={`theme-${color} bg-custom-500 w-4 h-4 rounded-full inline-block`}
                            />
                            {color.split('-').join(' ')}
                          </span>
                        </div>
                        {selected && (
                          <span className="mgc_check_fill texy-lg text-gray-400 block group-hover:text-custom-200" />
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </section>
  );
}

export default Settings;
