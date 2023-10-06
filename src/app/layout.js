"use client";

import { Footer } from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { store } from "../state/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
