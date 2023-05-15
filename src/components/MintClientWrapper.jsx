"use client";
import { createContext, useState } from "react";
import { nfts } from "@/components/NFTCard";

export const NFTContext = createContext();

export default function MintClientWrapper({ children }) {
  const [activeNFT, setActiveNFT] = useState(nfts[0]);

  return (
    <NFTContext.Provider value={{ activeNFT, setActiveNFT }}>
      {children}
    </NFTContext.Provider>
  );
}
