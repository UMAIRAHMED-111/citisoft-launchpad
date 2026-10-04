import officeVideo from "@/assets/mixkit-busy-office-space-918-hd-ready.mp4";
import cityscapeImage from "@/assets/hero-cityscape.jpg";
import VideoBackdrop from "@/components/landing/VideoBackdrop";
import Reveal from "@/components/landing/Reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const statements = [
  {
    title: "We build what leadership depends on.",
    body: "Payments, reporting, underwriting, reconciliation — the workflows that cannot wait for a spreadsheet hero.",
  },
  {
    title: "Scale is the brief, not the afterthought.",
    body: "Hundreds of properties. Dozens of locations. Thousands of daily transactions. Designed for the volume you already have.",
  },
  {
    title: "Exceptions, not everything.",
    body: "Automate the path that should run every day. Put people where judgement still creates value.",
  },
];

const ScaleManifesto = () => {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const showVideo = isMobile === false && !reduced;

  return (
    <section className="relative overflow-hidden bg-[hsl(var(--dark-bg))] py-16 text-white sm:py-28 lg:py-36">
      {showVideo && (
        <VideoBackdrop
          src={officeVideo}
          poster={cityscapeImage}
          treatment="ambient"
          className="opacity-50"
        />
      )}

      <div className="absolute inset-0 bg-[hsl(var(--dark-bg))]/85" aria-hidden="true" />
      {isMobile === false && (
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[hsl(var(--citisoft-dark))]/30 blur-[100px]"
          aria-hidden="true"
        />
      )}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--citisoft-light))] sm:text-sm sm:tracking-[0.18em]">
            The standard we hold
          </p>
          <h2 className="font-display mt-4 max-w-4xl text-[clamp(1.75rem,6.5vw,3.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] sm:mt-5 sm:leading-[1.08]">
            Consulting that leaves systems running — not decks gathering dust.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-px bg-white/10 sm:mt-20 lg:grid-cols-3">
          {statements.map((item, index) => (
            <Reveal key={item.title} delay={isMobile === false ? index * 100 : 0} as="article">
              <div className="bg-[hsl(var(--dark-bg))]/90 px-5 py-8 xs:px-8 sm:px-10 sm:py-12">
                <h3 className="font-display text-lg font-semibold tracking-tight sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/60 sm:mt-4 sm:text-lg">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScaleManifesto;
