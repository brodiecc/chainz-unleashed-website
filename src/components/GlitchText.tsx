import "@/styles/GlitchEffect.css";
import clsx from "clsx";

export function GlitchText({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const stacks = { "--stacks": 3 } as React.CSSProperties;
  const index0 = { "--index": 0 } as React.CSSProperties;
  const index1 = { "--index": 1 } as React.CSSProperties;
  const index2 = { "--index": 2 } as React.CSSProperties;

  className = clsx("stack", className);

  return (
    <span className={className} style={stacks}>
      <span style={index0}>{text}</span>
      <span id="glitchSpan1" style={index1} aria-hidden="true">
        {text}
      </span>
      <span id="glitchSpan2" style={index2} aria-hidden="true">
        {text}
      </span>
    </span>
  );
}
