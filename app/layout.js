// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav";
import LenisProvider from "./Components/LenisProvider";

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
  // ❌ REMOVE viewport from metadata
};

// ✅ NEW: Export viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false, // Disable zoom
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ❌ REMOVE the head tag - Next.js handles it automatically */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
