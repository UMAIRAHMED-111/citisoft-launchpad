import { ArrowRight } from "lucide-react";
import officeVideo from "@/assets/mixkit-busy-office-space-918-hd-ready.mp4";
import cityscapeImage from "@/assets/hero-cityscape.jpg";
import VideoBackdrop from "@/components/landing/VideoBackdrop";
import Reveal from "@/components/landing/Reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const highlights = [
  "Finance ops across 400+ hotel properties",
  "Data platforms and AI agents for 80+ restaurant locations",
  "Surety platforms processing 10K+ transactions a day",
];

const ImmersiveBand = () => {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const showVideo = isMobile === false && !reduced;

  return (
    <section className="relative overflow-hidden border-y border-border">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[240px] bg-[hsl(var(--dark-bg))] sm:min-h-[360px] lg:min-h-[520px]">
          <img
            src={cityscapeImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover grayscale brightness-[0.55]"
          />
          {showVideo && (
            <VideoBackdrop
              src={officeVideo}
              poster={cityscapeImage}
              treatment="closing"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--dark-bg))]/85 via-transparent to-[hsl(var(--dark-bg))]/20" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-10">
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-xs">
              Delivery in motion
            </p>
            <p className="font-display mt-2 max-w-sm text-xl font-semibold tracking-tight text-white sm:mt-3 sm:text-3xl">
              Real environments. Real throughput.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-card px-5 py-12 xs:px-8 sm:px-12 sm:py-16 lg:px-14">
          <Reveal>
            <h2 className="font-display text-[clamp(1.5rem,5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
              From the floor to the ledger — systems built to move with the business.
            </h2>
            <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm font-light leading-relaxed text-muted-foreground sm:text-lg"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#case-studies"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary sm:mt-10"
            >
              Browse case studies
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveBand;
