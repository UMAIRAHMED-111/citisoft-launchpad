import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile";

type AnimatedStatProps = {
  value: string;
  label: string;
  shortLabel?: string;
  delay?: number;
};

/** Parses leading number from strings like "400+", "10K+", "110" */
function parseStat(value: string): { target: number; suffix: string; isK: boolean } | null {
  const match = value.match(/^(\d+(?:\.\d+)?)(K)?(.*)$/i);
  if (!match) return null;
  return {
    target: Number(match[1]),
    isK: Boolean(match[2]),
    suffix: match[3] ?? "",
  };
}

const AnimatedStat = ({ value, label, shortLabel, delay = 0 }: AnimatedStatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const parsed = useMemo(() => parseStat(value), [value]);
  const [display, setDisplay] = useState(value);
  const shownLabel = isMobile ? shortLabel ?? label : label;

  useEffect(() => {
    // Skip counting animation on mobile — show final value immediately
    if (!parsed || reduced || isMobile !== false || hasAnimated.current) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let frame = 0;
    let cancelled = false;

    const run = () => {
      if (hasAnimated.current || cancelled) return;
      hasAnimated.current = true;

      const duration = 1200;
      const startAt = performance.now() + delay;

      const tick = (now: number) => {
        if (cancelled) return;

        if (now < startAt) {
          frame = requestAnimationFrame(tick);
          return;
        }

        const progress = Math.min((now - startAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * parsed.target);
        setDisplay(`${current}${parsed.isK ? "K" : ""}${parsed.suffix}`);

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          setDisplay(value);
        }
      };

      setDisplay(`0${parsed.isK ? "K" : ""}${parsed.suffix}`);
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [parsed, reduced, value, delay, isMobile]);

  return (
    <div ref={ref} className="min-w-0">
      <p className="font-display text-xl font-semibold tracking-tight text-white tabular-nums xs:text-2xl sm:text-3xl lg:text-4xl">
        {display}
      </p>
      <p className="mt-1 text-[11px] font-light leading-snug text-white/55 xs:text-xs sm:mt-1.5 sm:text-sm">
        {shownLabel}
      </p>
    </div>
  );
};

export default AnimatedStat;
