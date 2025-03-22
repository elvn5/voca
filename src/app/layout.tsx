import type { Metadata } from "next";
import "./globals.css";
import {Navbar} from "@/features";

export const metadata: Metadata = {
  title: "VocaVoca",
  description: "Learn english",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="container py-5">
          <Navbar/>
      </div>
        {children}
      </body>
    </html>
  );
}
