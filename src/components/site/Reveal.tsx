import type { ReactNode, CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useReveal<HTMLDivElement>();
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  // We cast to any so we can render any tag without TS friction
  const Comp = Tag as any;
  return (
    <Comp ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Comp>
  );
}
