import type { Metadata } from "next";
import "./globals.css";
import dotenv from 'dotenv';
dotenv.config();

export const metadata: Metadata = {
  title: "Jayasheel's Portfolio",
  description: "Jayasheel's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
