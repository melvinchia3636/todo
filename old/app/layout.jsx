import 'react-toastify/dist/ReactToastify.css';
import '../../new/src/assets/fonts/MingCute.css';
import '../public/styles/globals.scss';
import '../public/styles/themes.scss';

import React from 'react';
import ThemeContextWrapper from './themeContext';
import Main from './main';

export default function RootLayout({ children }) {
  return (
    <html data-theme="main" lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <ThemeContextWrapper>
        <Main childrens={children} />
      </ThemeContextWrapper>
    </html>
  );
}
