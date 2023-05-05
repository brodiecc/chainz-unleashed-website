import { Tablist } from "@/components/PrimaryFeaturesTablist";

import { Container } from "@/components/Container";

export default function PrimaryFeatures() {
  return (
    <section
      id="about"
      aria-label="Features of the game."
      className="relative overflow-hidden bg-stone-950 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            What is Chainz <span className="text-orange-300">Unleashed?</span>
          </h2>
          <p className="mt-6 text-lg tracking-tight text-stone-200">
            Our multichain game allows you to choose an NFT from our partnered
            NFT collections and use it to compete against other players. The
            game consists of four distinct phases, each with its own unique
            challenges and objectives.
          </p>
        </div>
        <Tablist />
      </Container>
    </section>
  );
}
