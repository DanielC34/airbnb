import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lodgify",
  description: "A hotel booking app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <main className="px-4 md:px-8 lg:px-10">{children}</main>
      </body>
    </html>
  );
}
