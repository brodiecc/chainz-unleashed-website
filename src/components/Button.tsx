import Link from "next/link";
import clsx from "clsx";

// custom base styles for buttons
const baseStyles: { [key: string]: string } = {
  solid:
    "group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm ring-1 focus:outline-none",
};

// custom variant styles for buttons depending on the base style
// unused styles are commented out
const variantStyles: { [key: string]: { [key: string]: string } } = {
  solid: {
    // stone:
    //   "bg-stone-900 text-white hover:bg-stone-800 hover:text-slate-100 active: bg-stone-800 active:text-slate-300 focus-visible:outline-slate-900",
    orange:
      "bg-orange-400 text-white hover:bg-orange-300  active:bg-stone-500 focus-visible:outline-orange-300",
  },
  outline: {
    // stone:
    //   "ring-stone-200 text-stone-700 hover:text-stone-900 hover:ring-stone-300 active:bg-stone-100 active:text-stone-600 focus-visible:ring-stone-300 focus-visible:outline-stone-300",
    // orange: "ring-orange-300 text-orange-300 hover:text-orange-400",
  },
};

type ButtonProps = {
  variant?: string;
  color?: string;
  className?: string;
  href?: string;
  children: React.ReactNode;
};

// Button component with custom base and variant styles
export function Button({
  variant = "solid",
  color = "orange",
  className,
  href,
  ...props
}: ButtonProps) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  );
  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
