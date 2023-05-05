import { Container } from "@/components/Container";

export default function Footer() {
  return (
    <footer className="bg-stone-950">
      <Container>
        <div className="flex border-t border-slate-400/10 py-10 justify-center">
          <p className="mt-6 text-sm text-slate-300 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Chainz Unleashed. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
