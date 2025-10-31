import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anas - Full Stack Developer & AI Engineer",
  description: "Portfolio showcasing web development, mobile apps, and AI automation projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
