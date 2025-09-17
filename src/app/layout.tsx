import type { Metadata } from "next";
import { AppProvider } from "./provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Hanna | Portfolio",
  description: "Retro Windows inspired portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-black">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
