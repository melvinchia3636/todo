"use client";

/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-head-element */
import "react-toastify/dist/ReactToastify.css";
import "../public/assets/fonts/MingCute.css";
import "../public/styles/globals.scss";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CreateTask from "../components/create/task";
import { toast, ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const successAddTask = () => {
    toast.success("Task added successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <html data-theme="main">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-full h-screen flex p-4 pb-0 text-sm text-gray-600">
        <Sidebar />
        <main className="pb-0 pt-2 px-6 pr-2 flex-1 flex flex-col">
          <Navbar
            isCreateModalOpen={isCreateModalOpen}
            setIsCreateModalOpen={setIsCreateModalOpen}
          />
          {children}
        </main>
        <CreateTask
          isOpen={isCreateModalOpen}
          setIsOpen={setIsCreateModalOpen}
          success={successAddTask}
        />
        <ToastContainer />
      </body>
    </html>
  );
}
