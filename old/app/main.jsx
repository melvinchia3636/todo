'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { usePathname } from 'next/navigation';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import CreateTask from './components/create/task';
import { ThemeContext } from './themeContext';

export default function Main({ childrens }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const { themeColor, theme } = React.useContext(ThemeContext);

  const [generatedTheme, setGeneratedTheme] = useState(theme);
  const pathname = usePathname();

  useEffect(() => {
    if (theme === 'auto') {
      setGeneratedTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
      );
      return;
    }
    setGeneratedTheme(theme);
  }, [theme]);

  const successAddTask = () => {
    toast.success('Task added successfully!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <body
      data-theme={generatedTheme}
      className={`${themeColor} w-full h-screen flex ${
        pathname.split('/').pop() !== 'login' && 'p-4'
      } pb-0 text-sm text-custom-500-content min-w-0`}
    >
      {pathname.split('/').pop() !== 'login' && <Sidebar />}
      <main className="pb-0 pt-2 px-6 pr-2 flex-1 flex flex-col min-w-0">
        {pathname.split('/').pop() !== 'login' && (
          <Navbar
            isCreateModalOpen={isCreateModalOpen}
            setIsCreateModalOpen={setIsCreateModalOpen}
          />
        )}
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
