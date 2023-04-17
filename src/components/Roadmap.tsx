import { Container } from "@/components/Container";

export default function Roadmap() {
  return (
    <section
      id="Roadmap"
      aria-label="Production roadmap of the game."
      className="relative overflow-hidden bg-orange-300 pt-20 pb-28 sm:py-32"
    >
      <Container>
        <div
          id="roadmap"
          className="max-w-2xl md:mx-auto md:text-center xl:max-w-none"
        >
          <h2 className="font-display text-3xl tracking-tight text-slate-950 sm:text-4xl md:text-5xl font-semibold">
            Roadmap
          </h2>
        </div>
      </Container>
    </section>
  );
}
