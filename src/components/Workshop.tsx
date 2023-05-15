import { Container } from "@/components/Container";
import { WorkshopTools } from "@/components/WorkshopTools";

export default function Workshop() {
  return (
    <div id="workshop" className="bg-stone-900">
      <Container className="flex flex-col items-center py-16">
        <div className="text-stone-100 text-5xl font-bold py-12 text-center">
          <h1>Minting Workshop</h1>
        </div>
        <WorkshopTools />
      </Container>
    </div>
  );
}
