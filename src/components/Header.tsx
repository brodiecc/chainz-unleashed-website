import { useState } from "react";

// const navigation = [{ name: "" }];

export default function Header() {
  return (
    <header className="bg-stone-950 text-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="#" className="text-4xl font-logo">
          Chainz <span className="text-orange-300">Unleashed</span>
        </a>
      </nav>
    </header>
  );
}
