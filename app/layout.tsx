import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import MouseTrail from "../components/MouseTrail";

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
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>
        {/* --- MOUSE TRAIL COMPONENT (Drops the 👣 emojis) --- */}
        <MouseTrail />
        {children}
        </body>
    </html>
  );
}
