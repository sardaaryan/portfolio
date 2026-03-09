import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Sarda • Portfolio",
  description: "Computer Science and Economics graduate from UC Davis with hands-on experience in scalable AI, cloud, and data systems, AWS-certified, and currently leading AI research and frontend modernization while pursuing software and data engineering roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;    
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
