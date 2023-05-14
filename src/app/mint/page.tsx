import Hero from "@/components/MintHero";
import Workshop from "@/components/Workshop";
import MintClientWrapper from "@/components/MintClientWrapper";

function Mint() {
  return (
    <main>
      <MintClientWrapper>
        <Hero />
        <Workshop />
      </MintClientWrapper>
    </main>
  );
}

export default Mint;
