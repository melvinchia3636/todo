'use client';

import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import CreateTask from './components/create/task';
import { ThemeContext } from './themeContext';

export default function Main({ childrens, successAddTask }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { themeColor } = React.useContext(ThemeContext);

  return (
    <body
      className={`${themeColor} w-full h-screen flex p-4 pb-0 text-sm text-gray-600`}
    >
      <Sidebar />
      <main className="pb-0 pt-2 px-6 pr-2 flex-1 flex flex-col">
        <Navbar
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
        />
        {childrens}
      </main>
      <CreateTask
        isOpen={isCreateModalOpen}
        setIsOpen={setIsCreateModalOpen}
        success={successAddTask}
      />
      <ToastContainer />
    </body>
  );
}
