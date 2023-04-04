"use client";

import { useState } from "react";
import { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "./Button";
import { Container } from "./Container";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import clsx from "clsx";

// Navigation links
const navigation = [
  { name: "About", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "FAQ", href: "#faq" },
  { name: "News", href: "#news" },
  { name: "Social", href: "#social" },
];

type MobileNavLinkProps = {
  href: string;
  children: React.ReactNode;
};

/**
 * Mobile navigation link component
 *
 * @param {MobileNavLinkProps} { href, children }
 * @return {*}
 */
function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

type MobileNavIconProps = {
  open: boolean;
};

/**
 * Mobile navigation icon component
 *
 * @param {MobileNavIconProps} { open }
 * @return {*}
 */
function MobileNavIcon({ open }: MobileNavIconProps) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

/**
 * Mobile navigation component
 *
 * @return {*}
 */
function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {navigation.map((item) => (
              <MobileNavLink key={item.name} href={item.href}>
                {item.name}
              </MobileNavLink>
            ))}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

/**
 * Header component
 *
 * @export
 * @return {*}
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-stone-950 text-white py-7">
      <Container>
        <nav
          className="sticky flex items-center justify-between px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center md:gap-x-12">
            <Link href="#" className="text-4xl font-logo">
              Chainz <span className="text-orange-300">Unleashed</span>
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8 font-semibold">
            <div className="hidden md:flex md:gap-x-6">
              {navigation.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            <Button href="/compare">
              <span>Play</span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
