import Image from "next/image";
import React from "react";
import clsx from "clsx";

import basho from "@/images/nfts/basho.png";
import byron from "@/images/nfts/byron.png";
import goguen from "@/images/nfts/goguen.png";
import lovelace from "@/images/nfts/lovelace.png";
import shelley from "@/images/nfts/shelley.png";
import voltaire from "@/images/nfts/voltaire.png";

// A list of NFTs in the Founder's Collection
const nfts = [
  {
    name: "Basho",
    image: basho,
    description:
      "Own a piece of Cardano's future with an NFT of Basho, the era focused on optimizing the network's performance, scalability, and interoperability, introducing sidechains and parallel accounting styles for increased capacity and flexibility.",
  },
  {
    name: "Byron",
    image: byron,
    description:
      "Celebrate the beginning of Cardano's journey with an NFT of Byron, the era that saw the creation of the first version of Cardano, the Ouroboros consensus protocol, and the Daedalus and Yoroi wallets, as well as the growth of a global community around the revolutionary third-generation blockchain.",
  },
  {
    name: "Goguen",
    image: goguen,
    description:
      "The Goguen era introduces smart contracts, Plutus, a purpose-built smart contract development language to enable the creation of enterprise-level decentralized applications, as well as a multi-currency ledger for natively-supported token creation and easier integration of smart contracts and DApps involving multiple cryptocurrencies.",
  },
  {
    name: "Lovelace",
    image: lovelace,
    description:
      "Lovelace, the world's first computer programmer, represents the digital currency ADA and its secure, decentralized exchange of value on the Cardano blockchain.",
  },
  {
    name: "Shelley",
    image: shelley,
    description:
      "The Shelley NFT represents the critical early steps in Cardano's journey to optimize decentralization, with the introduction of a delegation and incentives scheme to drive stake pools and community adoption.",
  },
  {
    name: "Voltaire",
    image: voltaire,
    description:
      "The Voltaire era marks the introduction of a voting and treasury system, allowing network participants to influence the future development of the network and paving the way for a truly decentralized Cardano community.",
  },
];

// Takes a name and returns the corresponding NFT object from the array above.
export function NFTCard({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const nft = nfts.find((nft) => nft.name === name);

  if (!nft) {
    return null;
  }

  return (
    <div
      className={clsx(
        "group relative aspect-[2/3] w-full rounded-xl bg-orange-400 object-cover shadow-lg transform hover:translate-y-2 transition duration-300 ease-in-out cursor-pointer",
        className
      )}
    >
      <Image
        src={nft.image}
        alt={nft.name}
        fill={true}
        className="object-cover rounded-xl"
      />
      <div className="hidden group-hover:flex absolute z-10 bg-black/80 w-full rounded-t-xl justify-center py-3">
        {nft.name}
      </div>
      <div className="hidden group-hover:flex absolute z-10 bottom-0 bg-black/80 w-full rounded-b-xl justify-center py-3 hover:bg-black text-orange-400">
        Mint Me!
      </div>
    </div>
  );
}
