import type { Metadata } from "next";
import { AppProvider } from "./provider";
import "./globals.css";
import React from "react";
import {Source_Sans_3} from "next/font/google";

export const metadata: Metadata = {
    title: "Thomas Hanna | Portfolio",
    description: "Retro Windows inspired portfolio built with Next.js.",
};
const sourceSans3 = Source_Sans_3({
    subsets: ['latin'],
    style: ['normal','italic'],
    weight: ['200'],
});
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${sourceSans3.className} min-h-screen bg-black text-black`}>
        <AppProvider>{children}</AppProvider>
        </body>
        </html>
    );
}