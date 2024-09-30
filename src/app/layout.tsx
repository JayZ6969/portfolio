import React from 'react';
import type { Metadata } from 'next'
import './index.css'

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Web site created with Next.js.',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YHCVPV1KF6"></script>
        {/* <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-YHCVPV1KF6');
          `}
        </script> */}
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}