import Header from "@/components/Header";
import "@/styles/tailwind.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
});

const thaleahFat = localFont({
  src: "/fonts/ThaleahFat.woff2",
  variable: "--font-thaleahFat",
});

export const metadata = {
  title: "Chainz Unleashed",
  description: "The Official Site for the Chainz Unleashed blockchain game.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${thaleahFat.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
