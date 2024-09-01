/* eslint-disable @next/next/no-page-custom-font */
import { Roboto } from "next/font/google";
import SideMenu from "./components/SideMenu";
import FooterMenu from "./components/FooterMenu";
import { ThemeProvider } from './context/ThemeContext';

import "../public/globals.css";
import Header from "./components/Header";

const inter = Roboto({
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div id="root">
            <Header />

            <div className="container">
              <SideMenu />
              {children}
            </div>
            
            <FooterMenu />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}