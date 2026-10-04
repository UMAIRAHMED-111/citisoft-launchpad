import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

const Reveal = ({ children, className, delay = 0, as: Tag = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }

    setActive(true);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const style: CSSProperties | undefined =
    visible && delay
      ? { transitionDelay: `${delay}ms` }
      : undefined;

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={cn(
        "will-change-transform",
        active && !visible && "translate-y-5 opacity-0 sm:translate-y-8",
        (visible || !active) && "translate-y-0 opacity-100",
        visible && "reveal-motion",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
