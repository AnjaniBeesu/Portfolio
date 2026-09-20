import type { Metadata } from "next";
import "./globals.css";
import "./hero-underline.css";

export const metadata: Metadata = {
  title: "Anjani Beesu — Portfolio",
  description: "The portfolio of Anjani Beesu, a CSE student and builder.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
