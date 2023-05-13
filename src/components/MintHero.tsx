import { NFTCard } from "@/components/NFTCard";
import { Container } from "@/components/Container";

export default function Hero() {
  return (
    <div className="bg-orange-500 text-white isolate">
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-orange-400 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-orange-400">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
      <div
        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#f88a41] to-[#a2ffbe] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>
      <Container className="py-48 lg:py-64">
        <div className="pt-8 flex justify-between gap-8 flex-col lg:flex-row mx-8">
          <div className="flex flex-col lg:basis-[55%] justify-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl sm:leading-[1.1] text-center sm:text-left">
              Introducing the Founder's Collection.
            </h1>
            <p className="mt-6 text-lg leading-8">
              The Chains Unleashed Founder's Collection for Cardano pays tribute
              to the visionary leaders whose groundbreaking contributions to
              mathematics, science, and philosophy paved the way for the
              innovative blockchain technology that Cardano represents.
            </p>
          </div>
          <div className="grid grid-cols-3 md:flex md:justify-around lg:grid lg:grid-cols-3 lg:basis-[45%] gap-6 xl:gap-y-0">
            <NFTCard name="Byron" className="xl:-mt-6" />
            <NFTCard name="Lovelace" className="xl:mt-6" />
            <NFTCard name="Shelley" className="xl:-mt-6" />
            <NFTCard name="Voltaire" className="xl:-mt-6" />
            <NFTCard name="Basho" className="xl:mt-6" />
            <NFTCard name="Goguen" className="xl:-mt-4" />
          </div>
        </div>
      </Container>
    </div>
  );
}
