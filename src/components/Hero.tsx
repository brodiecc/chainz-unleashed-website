import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import Image from "next/image";
import clsx from "clsx";

import cheekyuntsLogo from "@/images/logos/cheekyunts.gif";
import chainsOnDogsLogo from "@/images/logos/chainsOnDogs.png";
import runeFortressLogo from "@/images/logos/runeFortress.png";
import rarityDawgLogo from "@/images/logos/rarityDawg.png";

const collections = [
  {
    name: "Cheekyunts",
    logo: cheekyuntsLogo,
    className: "",
  },
  {
    name: "Chains on Dogs",
    logo: chainsOnDogsLogo,
    className: "disable-blur",
  },
  {
    name: "Rune Fortress",
    logo: runeFortressLogo,
    className: "",
  },
  {
    name: "Rarity Dawg",
    logo: rarityDawgLogo,
    className: "",
  },
];

export default function Hero() {
  return (
    <div id="home" className="bg-stone-900">
      <Container className="py-16">
        <div className="relative isolate pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e29247] to-[#ecba81] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-12 sm:pt-32 sm:pb-40 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  The Ultimate{" "}
                  <span className="text-orange-400">Blockchain </span>
                  Battle Royale
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  Bring your NFTs to life and join the fight. Collect, trade and
                  battle your way to the top!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button
                    href="https://play.chainzunleashed.com"
                    target="_blank"
                    className="sm:p-4 sm:text-lg"
                  >
                    Play Now
                  </Button>
                  <Button
                    variant="outline"
                    href="/mint"
                    className="sm:p-4 sm:text-lg"
                  >
                    Learn More <span aria-hidden="true">&nbsp;→</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e4a76f] to-[#ce7c1e] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        {/* <div className="flex flex-col items-center">
          <p className="mb-12 text-lg leading-8 text-gray-100">
            In Collaboration With
          </p>
          <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 sm:gap-8 md:gap-2 md:h-24 justify-evenly">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className={
                  "flex basis-1/2 md:basis-1/4 justify-center max-w-[240px] md:max-w-none"
                }
              >
                <Image
                  src={collection.logo}
                  alt={collection.name}
                  height={96}
                  className={clsx(
                    "h-full object-contain",
                    collection.className
                  )}
                />
              </div>
            ))}
          </div>
        </div> */}
      </Container>
    </div>
  );
}
