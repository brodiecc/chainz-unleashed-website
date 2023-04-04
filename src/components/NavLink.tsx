import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: any;
};

/**
 * Navigation link component
 *
 * @export
 * @param {NavLinkProps} { href, children }
 * @return {*}
 */
export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-white hover:bg-stone-700 hover:text-slate-100"
    >
      {children}
    </Link>
  );
}
