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
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
