import clsx from "clsx";

type ContainerProps = {
  className?: string;
  id?: string;
  props?: { [key: string]: string };
  children?: React.ReactNode;
};

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
