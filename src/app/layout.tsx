import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/tailwind.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const thaleahFat = localFont({
  display: "swap",
  variable: "--font-thaleah-fat",
  src: "./ThaleahFat.woff2",
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
        <Footer />
      </body>
    </html>
  );
}
