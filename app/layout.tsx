import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="bg-[#171717] max-w-xs md:min-w-[20rem] h-screen overflow-auto">
            <Sidebar />
          </div>
          <div className="flex-1 bg-[#212121]">{children}</div>
        </div>
      </body>
    </html>
  );
}
