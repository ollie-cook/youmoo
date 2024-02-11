import type { Metadata } from "next";
import "./globals.css";
import { robotoSlab } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "YouMoo",
  description: "The #1 Social Media for Cows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        {children}
        <img src="/background.jpg" alt="background" className="fixed inset-0 w-full h-full object-cover z-0" />
      </body>
    </html>
  );
}
