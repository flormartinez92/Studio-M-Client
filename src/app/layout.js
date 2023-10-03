import { Footer } from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Studio-M",
  description:
    "Web application that allows the purchase of courses and monitoring of the purchased courses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar/> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
