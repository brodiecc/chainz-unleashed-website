import Link from "next/link";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: any;
  className?: string;
};

/**
 * Navigation link component
 *
 * @export
 * @param {NavLinkProps} { href, children }
 * @return {*}
 */
export function NavLink({ href, children, className }: NavLinkProps) {
  className = clsx(
    "inline-block rounded-lg py-3 px-2 text-sm text-white hover:bg-stone-700 hover:text-slate-100 rounded-[16px]",
    className
  );

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
