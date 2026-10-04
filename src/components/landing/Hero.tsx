import { Button } from "@/components/ui/button";
import cityscapeImage from "@/assets/hero-cityscape.jpg";
import aerialVideo from "@/assets/mixkit-aerial-panorama-over-the-buildings-of-a-big-city-41541-hd-ready.mp4";
import VideoBackdrop from "@/components/landing/VideoBackdrop";
import AnimatedStat from "@/components/landing/AnimatedStat";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const stats = [
  { value: "400+", label: "Hotel properties automated", shortLabel: "Hotel properties" },
  { value: "80+", label: "Restaurant locations unified", shortLabel: "Restaurant locations" },
  { value: "10K+", label: "Surety transactions / day", shortLabel: "Surety txns / day" },
  { value: "110", label: "Manual CRM tasks eliminated / day", shortLabel: "CRM tasks cut / day" },
];

const Hero = () => {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const showVideo = isMobile === false && !reduced;
  const enableKen = isMobile === false && !reduced && !showVideo;

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[hsl(var(--dark-bg))]">
      <img
        src={cityscapeImage}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover object-center grayscale contrast-[1.15] brightness-[0.85] ${
          enableKen ? "hero-ken" : ""
        }`}
      />

      {showVideo && (
        <VideoBackdrop
          src={aerialVideo}
          poster={cityscapeImage}
          treatment="hero"
          className="z-[1]"
        />
      )}

      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-[hsl(var(--dark-bg))]/70 via-[hsl(var(--dark-bg))]/55 to-[hsl(var(--dark-bg))]/90 sm:bg-gradient-to-r sm:from-[hsl(var(--dark-bg))] sm:via-[hsl(var(--dark-bg))]/88 sm:to-[hsl(var(--dark-bg))]/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 hidden bg-gradient-to-t from-[hsl(var(--dark-bg))] via-transparent to-[hsl(var(--dark-bg))]/40 sm:block"
        aria-hidden="true"
      />

      {/* Film grain — desktop only */}
      {isMobile === false && (
        <div
          className="pointer-events-none absolute inset-0 z-[11] opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-20 flex min-h-[100svh] flex-col">
        <div className="flex flex-1 flex-col justify-center px-0 pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <div className="max-w-5xl">
              <p className="font-display mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 animate-fade-in sm:mb-8 sm:text-sm sm:tracking-[0.18em] md:text-base">
                Citisoft Solutions
              </p>

              <h1 className="font-display text-[clamp(2.35rem,9vw,6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:leading-[0.98] sm:tracking-[-0.035em]">
                <span className="block animate-fade-in-up">Systems that run</span>
                <span
                  className="block animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  the operation.
                </span>
              </h1>

              <p
                className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/80 animate-fade-in sm:mt-9 sm:text-xl lg:text-2xl"
                style={{ animationDelay: "0.2s" }}
              >
                Technology consulting for hospitality, restaurants, insurance,
                and finance ops — where precision, compliance, and daily
                throughput are non-negotiable.
              </p>

              <div
                className="mt-8 flex w-full flex-col gap-3 animate-fade-in xs:flex-row xs:flex-wrap sm:mt-12 sm:gap-4"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-sm bg-white px-8 text-sm font-semibold tracking-wide text-[hsl(var(--dark-bg))] hover:bg-white/90 xs:w-auto sm:h-14 sm:px-12 sm:text-base"
                >
                  <a href="#contact">Talk to our team</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 w-full rounded-sm border-white/55 bg-transparent px-8 text-sm font-semibold tracking-wide text-white hover:bg-white/10 hover:text-white xs:w-auto sm:h-14 sm:px-12 sm:text-base"
                >
                  <a href="#case-studies">See the work</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t border-white/10 bg-[hsl(var(--dark-bg))]/75 animate-fade-in sm:bg-[hsl(var(--dark-bg))]/60"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="container mx-auto grid grid-cols-2 gap-x-4 gap-y-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-9 lg:grid-cols-4 lg:px-10">
            {stats.map((stat, i) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                shortLabel={stat.shortLabel}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
