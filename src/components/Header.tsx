"use client";

import { Fragment } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import clsx from "clsx";
import Image from "next/image";

import Logo from "@/images/logos/chainzUnleashed.png";

// Navigation links
const navigation = [
  { name: "About", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  // { name: "FAQ", href: "#faq" },
  // { name: "News", href: "#news" },
  { name: "Socials", href: "#socials" },
  { name: "Learn More", href: "/mint" },
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
      className="h-3.5 w-3.5 overflow-visible stroke-white"
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
  return (
    <header className="bg-stone-950 text-white py-7 fixed top-0 z-50 w-screen">
      <Container>
        <nav
          className="sticky flex items-center justify-between px-6 lg:px-8 z-50"
          aria-label="Global"
        >
          <div className="flex items-center md:gap-x-12">
            <Link href="#home" className="text-4xl font-logo">
              {/* Chainz <span className="text-orange-400">Unleashed</span> */}
              <Image
                src={Logo}
                alt="Chainz Unleashed"
                height={27}
                width={300}
                unoptimized={true}
              ></Image>
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8 font-semibold">
            <div className="hidden header:flex md:gap-x-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className={
                    item.name === "Minting"
                      ? "border border-orange-300 hover:bg-orange-300/10 hover:text-orange-200"
                      : ""
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <Button
              href="https://play.chainzunleashed.com"
              className="hidden header:flex rounded-[16px]"
              target="_blank"
            >
              <span className="">Play</span>
            </Button>
            <div className="-mr-1 header:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
