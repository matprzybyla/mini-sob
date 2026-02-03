import type { Metadata } from "next";
import { Alegreya, Rye } from "next/font/google";
import "./globals.css";

const rye = Rye({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const alegreya = Alegreya({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SOB Campaign Console",
  description: "Wild west campaign hub for missions, rules, and lore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rye.variable} ${alegreya.variable}`}>
        {children}
      </body>
    </html>
  );
}
