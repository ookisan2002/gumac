import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const optima = localFont({
  src: [
    {
      path: './SVN-Optima-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SVN-Optima-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SVN-Optima-DemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: "GUMAC - OKHUB Việt Nam",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={`${manrope.variable} ${inter.variable}`}>
      <body className={optima.className}>{children}</body>
    </html>
  );
}
