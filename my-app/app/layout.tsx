import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./header/header";


import { Courier_Prime, Quicksand } from "next/font/google";

const courierPrime = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VeloxForce",
  description: "VeloxForce is a software development company that specializes in building web AI Automation Tools. We are a team of experienced developers who are passionate about creating high-quality software.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`  ${quicksand.className}`}>
        <Header />
        {children}
        
      </body>
    </html>
  );
}