"use client";

import { Footer } from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { store } from "../state/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
export default function RootLayout({ children }) {
  //condicion para que cuando este en la home la navbar no aparezca
  const pathname = usePathname();
  const home = pathname !== "/";

  return (
    <html lang="en">
      <body className="select-none">
        <Provider store={store}>
          <PayPalScriptProvider
            options={{
              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
              intent: "capture",
              currency: "USD",
            }}
          >
            {home && <Navbar />}
            {children}
            <Footer />
          </PayPalScriptProvider>
        </Provider>
      </body>
    </html>
  );
}
