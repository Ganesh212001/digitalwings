import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

const font = Poppins(
  {
    subsets: ["latin"],
    weight: '400',
  }
)

export const metadata: Metadata = {
  title: "Code And Click | Digital Marketing Agency",
  description: "Code and Click is a basically digital marketing website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
