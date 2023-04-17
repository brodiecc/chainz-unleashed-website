"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-features.jpg";
import screenshotExpenses from "@/images/screenshots/expenses.png";
import screenshotPayroll from "@/images/screenshots/payroll.png";
import screenshotReporting from "@/images/screenshots/reporting.png";
import screenshotVatReturns from "@/images/screenshots/vat-returns.png";

const features = [
  {
    // title: "Phase 1: Explore",
    titleStart: "Phase 1: ",
    titleEmphasis: "Explore",
    description:
      "Scavenge resources, defeat AI foes, acquire keys from higher-level mobs, and ambush players' spawn points to gain better weapons and dominate the battlefield.",
    image: screenshotPayroll,
  },
  {
    // title: "Phase 2: Stay Alive",
    titleStart: "Phase 2: ",
    titleEmphasis: "Survive",
    description:
      "Prepare for intense PvP action in the first 'map shrink' phase, with players spawning amidst obstacles, moving platforms, and traps, where your choice of outfit can give you a strategic advantage over your opponents",
    image: screenshotExpenses,
  },
  {
    titleStart: "Phase 3: ",
    titleEmphasis: "Race",
    // titleEnd: " for the key",
    description:
      "grab the keystone to unlock the center room and teleport out before the map collapses, but beware of other players who may try to steal the key and sabotage your escape.",
    image: screenshotVatReturns,
  },
  {
    titleStart: "Phase 4: ",
    titleEmphasis: "Escape",
    // titleEnd: " the Arena",
    description:
      "Battle to secure access to the main teleporter room, where you can either defend your position or make a daring escape, as the fate of the game's ultimate winner rests on your shoulders in this intense and high-stakes battle royale.",
    image: screenshotReporting,
  },
];

export default function PrimaryFeatures() {
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
    <section
      id="explanation"
      aria-label="An overview of the game's features"
      className="relative overflow-hidden bg-stone-950 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            What is Chainz Unleashed?
          </h2>
          <p className="mt-6 text-lg tracking-tight text-stone-200">
            Our multichain game allows you to choose an NFT from our partnered
            NFT collections and use it to compete against other players. The
            game consists of four distinct phases, each with its own unique
            challenges and objectives.
          </p>
        </div>
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
                          // Forgive me for my sins it was the only way to remove the outline appearing on click instead of focus
                          "font-display text-lg outline-none",
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
                              ? "text-stone-900 lg:text-orange-400"
                              : "text-orange-400"
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
      </Container>
    </section>
  );
}
