import { Container } from "@/components/Container";
import { RoadmapGrid } from "./RoadmapGrid";

export default function Roadmap() {
  return (
    <section
      id="Roadmap"
      aria-label="Production roadmap of the game."
      className="relative overflow-hidden pt-20 pb-28 sm:py-20 bg-gradient-to-b from-stone-950  to-orange-400 "
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto text-center xl:max-w-none text-white">
          <h2 className="text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Roadmap
          </h2>
          <p className="my-6 text-lg tracking-tight text-stone-100">
            Stay up-to-date with our development goals.
          </p>
        </div>
        <RoadmapGrid />
      </Container>
    </section>
  );
}
