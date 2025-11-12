// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import LenisProvider from "./Components/LenisProvider"; // client wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GIPS | Garhwal Institute of Paramedical Sciences",
  description:
    "Empowering students with excellence in paramedical education, research, and clinical training.",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no", // ✅ Disable zoom
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ You can also add a backup meta tag for viewport here */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {/* ✅ Wrap the client component around the portion that needs Lenis */}
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
