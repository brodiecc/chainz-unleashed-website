import Header from "@/components/Header";
import "@/styles/tailwind.css";

import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Chainz Unleashed",
  description: "The Official Site for the blockchain game, Chainz Unleashed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
