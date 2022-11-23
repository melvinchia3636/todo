'use client';

/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function themeContext({ children }) {
  const storedColour = localStorage.getItem('themeColor')
    ? localStorage.getItem('themeColor')
    : 'theme-blue';
  const [themeColor, setThemeColor] = useState(storedColour);

  const defaultContext = {
    themeColor,
    setThemeColor,
  };

  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  );
}
