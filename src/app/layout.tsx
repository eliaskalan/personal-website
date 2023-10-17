import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ['latin'] });
const env = process.env.NODE_ENV
export const metadata: Metadata = {
  title: '@eliaskalan',
  description: 'I am a student at the Department of Informatics at Athens University of Economics and Business. I am most interested in database management, Artificial Intelligence, Backend, and App development. ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👨🏻‍💻</text></svg>`}
        />
      </head>
      <PlausibleProvider domain={env == "production" ? "eliaskalan.gr" : ''}>
        <body className={inter.className}>{children}</body>
      </PlausibleProvider>
    </html>
  );
}
