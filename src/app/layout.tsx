import type { Metadata } from "next";
import { Poppins, PT_Mono } from "next/font/google";
import "./globals.css";
import "./something.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Minoru Farm",
  description: "Minoru Farm. Brighton, Colorado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
