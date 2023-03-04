import "./globals.css";
import type { Metadata } from "next"
import Navbar from "./Navbar";
export const metadata: Metadata = {
  title: 'Codename :: RedPotato',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-clip">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
