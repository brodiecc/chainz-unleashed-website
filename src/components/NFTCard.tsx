"use client";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import Link from "next/link";

import basho from "@/images/nfts/basho.png";
import byron from "@/images/nfts/byron.png";
import goguen from "@/images/nfts/goguen.png";
import lovelace from "@/images/nfts/lovelace.png";
import shelley from "@/images/nfts/shelley.png";
import voltaire from "@/images/nfts/voltaire.png";

import { useContext } from "react";
import { NFTContext } from "@/components/MintClientWrapper";

// A list of NFTs in the Founder's Collection
export const nfts = [
  {
    name: "Lord Byron",
    image: byron,
    descriptionEra:
      "The Byron era was marked by the launch of the first version of the Cardano blockchain, which introduced the Ouroboros consensus protocol and allowed for the buying and selling of ada cryptocurrency, as well as the development of the Daedalus and Yoroi wallets and the growth of a global community.",
    descriptionInGame:
      "Lord Byron, charismatic rogue, father of Ada Lovelace, wields his sharp wit in the dark depths of the dungeon, slicing through enemies with his poetic flair and seductive charm.",
  },
  {
    name: "Shelley",
    image: shelley,
    descriptionEra:
      "The Shelley era of Cardano is a period of gradual yet significant development towards a fully decentralized network, with the introduction of a delegation and incentive scheme designed to encourage stake pool participation and reward honest network involvement.",
    descriptionInGame:
      "Percy Bysshe Shelley, the visionary mage, unleashes his poetic magic to defeat foes in the treacherous dungeon - with his fiery imagination and ethereal presence leading the charge.",
  },
  {
    name: "Goguen",
    image: goguen,
    descriptionEra:
      "The Goguen era marks the integration of smart contracts and the creation of Plutus and Marlowe, allowing technical and non-technical users to build decentralized applications on the Cardano network, and enabling the creation of natively-supported tokens to support the tokenization of digital and physical assets.",
    descriptionInGame:
      "Michael Goguen harnesses his mastery of technology to overcome traps and enemies in the perilous dungeon, blazing a trail to victory with his cunning strategies.",
  },
  {
    name: "Basho",
    image: basho,
    descriptionEra:
      "The Basho era of Cardano focuses on optimization, scalability, and interoperability, introducing sidechains and parallel accounting styles to improve the underlying performance of the network and better support growth and adoption for applications with high transaction volume.",
    descriptionInGame:
      "Matsuo Bashō, the contemplative monk, wields his elegant haiku and swift movements in the labyrinthine dungeon, evading dangers and defeating enemies with his poetic grace and profound wisdom.",
  },
  {
    name: "Voltaire",
    image: voltaire,
    descriptionEra:
      "The Voltaire era of Cardano will introduce a decentralized voting and treasury system, allowing network participants to influence the future development of the network and fund its ongoing growth and evolution.",
    descriptionInGame:
      "Voltaire, the witty philosopher, enters the perilous dungeon armed with his sharp tongue and intellectual arsenal, slaying foes and overcoming obstacles with his wit and biting sarcasm.",
  },
  {
    name: "Lovelace",
    image: lovelace,
    descriptionEra:
      "ADA is a digital currency that can be used as a secure exchange of value, with every transaction recorded on the Cardano blockchain, and every ADA holder also holding a stake in the Cardano network.",
    descriptionInGame:
      "Ada Lovelace, visionary mathematician and daughter of Lord Byron, harnesses her analytical prowess and technological ingenuity in the treacherous dungeon, outsmarting enemies with her strategic mind and innovative spirit.",
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

  const { setActiveNFT } = useContext(NFTContext);

  if (!nft) {
    return null;
  }

  return (
    <Link
      className={clsx(
        "group relative aspect-[2/3] w-full rounded-xl bg-orange-400 object-cover shadow-lg transform hover:translate-y-2 transition duration-300 ease-in-out cursor-pointer",
        className
      )}
      href="/mint#workshop"
      onClick={() => setActiveNFT(nft)}
    >
      <Image
        src={nft.image}
        alt={nft.name}
        fill={true}
        sizes="(max-width: 768px) 500px, 800px"
        className="object-cover rounded-xl"
      />
      <div className="hidden group-hover:flex absolute z-10 bg-black/80 w-full rounded-t-xl justify-center py-3">
        {nft.name}
      </div>
      {/* <div className="hidden group-hover:flex absolute z-10 bottom-0 bg-black/80 w-full rounded-b-xl justify-center py-3 hover:bg-black text-orange-400">
        Mint Me!
      </div> */}
    </Link>
  );
}
