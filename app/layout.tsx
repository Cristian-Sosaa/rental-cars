import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import {
  ClerkProvider,
  //SignInButton,
  //SignUpButton,
  //SignedIn,
  //SignedOut,
  //UserButton,
} from '@clerk/nextjs';

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Subite Vos",
  description: "Renta de Vehículos by Subite Vos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={outfit.className}>
        <NextTopLoader color="#000"/>
        {children}</body>
    </html>
    </ClerkProvider>
  );
}
