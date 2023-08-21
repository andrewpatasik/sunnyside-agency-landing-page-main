import "./globals.css";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";

const barlow = Barlow({ weight: ["600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunnyside | Frontend Mentor",
  description:
    "Sunnyside agency landing page with grid. Challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
