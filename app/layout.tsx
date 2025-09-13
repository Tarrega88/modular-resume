import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import "./globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Modular Resume",
  description: "Build and Store Resume Data",
};

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["400", "600", "700"],
//   display: "swap",
// });
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
