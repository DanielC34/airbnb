import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lodgify",
  description: "A hotel booking app built with Next.js",
};

// Create a new client component for auth provider
import AuthProvider from "@/providers/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <AuthProvider>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
          <main className="px-4 md:px-8 lg:px-10">{children}</main>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
