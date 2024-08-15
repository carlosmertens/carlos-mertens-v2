import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carlos Mertens | Software Engineer',
  description:
    "I'm dedicated to harnessing the power of JavaScript to build innovative and impactful digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-gradient-to-r from-dark to-secondary text-white leading-snug overflow-x-hidden w-screen`}>
        {children}
      </body>
    </html>
  );
}
