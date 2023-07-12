'use client';

/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export default function themeContext({ children }) {
  const [themeColor, setThemeColor] = useState('theme-blue');
  const [theme, setTheme] = useState('auto');

  useEffect(() => {
    const storedColour = localStorage.getItem('themeColor')
      ? localStorage.getItem('themeColor')
      : 'theme-blue';
    setThemeColor(storedColour);
    const storedTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'auto';
    setTheme(storedTheme);
  });

  const defaultContext = {
    themeColor,
    setThemeColor,
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  );
}
