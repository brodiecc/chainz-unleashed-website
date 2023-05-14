"use client";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { Disclosure, Tab } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { NMKRButton } from "@/components/NMKRButton";

import { useContext } from "react";
import { NFTContext } from "@/components/MintClientWrapper";

import { nfts } from "@/components/NFTCard";
import basho from "@/images/nfts/basho.png";

export function WorkshopTools() {
  const { activeNFT, setActiveNFT } = useContext(NFTContext);

  return (
    <div className="flex flex-row ">
      <div className="flex flex-col basis-1/2 p-12">
        <div className="mb-8 bg-stone-500 rounded-xl shadow-lg shadow-stone-100  border-4 border-stone-100">
          <Image
            src={activeNFT.image}
            alt={activeNFT.name}
            height={500}
            width={500}
            className="rounded-xl"
            placeholder="blur"
            blurDataURL="../images/nfts/basho.png"
          />
        </div>
        <div className="flex flex-row gap-4">
          {nfts.map((nft) => (
            <div
              key={nft.name}
              className="cursor-pointer"
              onClick={() => setActiveNFT(nft)}
            >
              <Image
                src={nft.image}
                alt={nft.name}
                className={clsx(
                  "rounded-xl transform hover:scale-125 duration-300 border-2 border-orange-300",
                  {
                    "border-stone-100 shadow-md shadow-stone-100":
                      nft.name === activeNFT.name,
                  }
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col basis-1/2 p-12 text-stone-100">
        <div className="font-bold text-4xl">{activeNFT.name}</div>
        <div className="pb-8 pt-2 text-orange-300 italic">Limited Edtion *</div>
        <div className="pb-8 text-2xl">500 ₳</div>
        <div className="pb-8 lg:h-32">
          <p>{activeNFT?.descriptionInGame}</p>
        </div>
        <div className="pb-8 lg:h-40">
          <p>{activeNFT?.descriptionEra}</p>
        </div>
        <div className="text-orange-300 italic ">
          <p>
            * This NFT is part of the Founder's Collection. Only 100 will ever
            be minted before this NFT becomes unavailable.
          </p>
        </div>
        <section aria-labelledby="details-heading" className="mt-8">
          <h2 id="details-heading" className="sr-only">
            Payment Options
          </h2>

          <div className="divide-y divide-gray-200 border-t pt-8">
            <NMKRButton gateway="Lord Byron" />
            {/* <Disclosure as="div">
              {({ open }) => (
                <>
                  <h3>
                    <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                      <span
                        className={clsx(
                          open ? "text-orange-300" : "text-stone-100",
                          "text-sm font-medium"
                        )}
                      >
                        Mint Through NMKR (Recommended)
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon
                            className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusIcon
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                    <NMKRButton gateway="Lord Byron" />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <h3>
                    <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                      <span
                        className={clsx(
                          open ? "text-orange-300" : "text-stone-100",
                          "text-sm font-medium"
                        )}
                      >
                        Mint Through Pay-in Address
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon
                            className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusIcon
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                    <h3>
                      You can send a payment to purchase this NFT via the pay-in
                      address.
                    </h3>
                    <h3>Please Note:</h3>
                    <ul role="list">
                      <li>
                        If no more NFTs are available, the amount will be
                        returned.
                      </li>
                      <li>
                        If the amount paid is too small, the amount will be
                        returned.
                      </li>
                      <li>
                        If the amount paid is too large, the amount will be
                        returned.
                      </li>
                      <li>
                        If the amount paid is the amount specified above, the
                        NFT will be sent to the purchaser's wallet address.
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure> */}
          </div>
        </section>
      </div>
    </div>
  );
}
