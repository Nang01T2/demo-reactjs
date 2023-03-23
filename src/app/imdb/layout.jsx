import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import Providers from "./Providers";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
