"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import connectYourWallet from "@/images/screenshots/connectyourwallet.jpeg";
import customizeYourCharacter from "@/images/screenshots/customizeyourcharacter.jpeg";
import exploreTheBattlefield from "@/images/screenshots/explorethebattlefield.jpeg";
import fightotherplayers from "@/images/screenshots/fightotherplayers.jpeg";

const features = [
  {
    // title: "Phase 1: Explore",
    titleStart: "Connect Your ",
    titleEmphasis: "Wallet",
    description:
      "Securely connect your preferred Cardano wallet to access our partnered NFT Collections. Stay tuned for the upcoming multi-chain wallet option.",
    image: connectYourWallet,
  },
  {
    // title: "Phase 2: Stay Alive",
    titleStart: "Use Your Favourite ",
    titleEmphasis: "NFT",
    description:
      "Bring your favorite NFT collection to life with our incredible Character Customizer and personalize your characters to match your style.",
    image: customizeYourCharacter,
  },
  {
    titleStart: "Explore and Dominate The ",
    titleEmphasis: "Battlefield",
    // titleEnd: " for the key",
    description:
      "Embark on an exciting journey through four distinct phases, each with its own set of unique challenges and objectives.",
    image: exploreTheBattlefield,
  },
  {
    titleStart: "Join Tournaments and Win ",
    titleEmphasis: "Prizes",
    // titleEnd: " the Arena",
    description:
      "Play custom games with your friends or climb the ranks and win prices in official tournaments. Chainz Unleashed caters for casual and hardcore players!",
    image: fightotherplayers,
  },
];

export function Tablist() {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: { matches: any }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <Tab.Group
      as="div"
      className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
      vertical={tabOrientation === "vertical"}
    >
      {({ selectedIndex }) => (
        <>
          <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 pf-sm:overflow-visible sm:pb-0 lg:col-span-5">
            <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {features.map((feature, featureIndex) => (
                <div
                  key={feature.titleStart}
                  className={clsx(
                    "group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6",
                    selectedIndex === featureIndex
                      ? " bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
                      : "hover:bg-white/10 lg:hover:bg-white/5"
                  )}
                >
                  <Tab
                    className={clsx(
                      "font-display text-lg focus:outline-dashed focus:outline-1",
                      selectedIndex === featureIndex
                        ? "text-stone-900 lg:text-white"
                        : "text-white hover:text-white lg:text-white"
                    )}
                  >
                    <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                    {feature.titleStart}
                    {/* <span className="font-semibold text-orange-300"> */}
                    <span
                      className={clsx(
                        "font-semibold",
                        selectedIndex === featureIndex
                          ? "text-stone-900 lg:text-orange-300"
                          : "text-orange-300"
                      )}
                    >
                      {feature.titleEmphasis}
                    </span>
                  </Tab>
                  <p
                    className={clsx(
                      "mt-2 hidden text-sm lg:block",
                      selectedIndex === featureIndex
                        ? "text-white"
                        : "text-stone-200 group-hover:text-white"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-7">
            {features.map((feature) => (
              <Tab.Panel key={feature.titleStart} unmount={false}>
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                    {feature.description}
                  </p>
                </div>
                <div className="-mx-4 sm:mx-0 mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <Image
                    className="w-full"
                    src={feature.image}
                    alt=""
                    priority
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                  />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  );
}
