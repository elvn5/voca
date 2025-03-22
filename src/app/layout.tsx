import type { Metadata } from "next";
import "./globals.css";
import '@ant-design/v5-patch-for-react-19';
import {ToastContainer} from "react-toastify";

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
      <body className="container p-6">
      <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
