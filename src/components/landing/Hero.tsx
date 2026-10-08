import { useEffect, useState } from "react";
import cityscapeImage from "@/assets/hero-cityscape.jpg";
import aerialVideo from "@/assets/mixkit-aerial-panorama-over-the-buildings-of-a-big-city-41541-hd-ready.mp4";
import VideoBackdrop from "@/components/landing/VideoBackdrop";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const feed = [
  { time: "09:41", text: "Invoice #4821 matched to PO-058", tag: "AP agent" },
  { time: "09:42", text: "212 card transactions reconciled", tag: "Finance" },
  { time: "09:44", text: "Bond #B-1180 routed for underwriter sign-off", tag: "Surety" },
  { time: "09:46", text: "Supplier price change synced to 80 locations", tag: "Ops" },
  { time: "09:47", text: "Exception flagged: duplicate vendor payment", tag: "Controls" },
  { time: "09:49", text: "3 inbound demos booked from outbound sequence", tag: "Growth" },
];

const LiveFeed = () => {
  const reduced = useReducedMotion();
  const [head, setHead] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setHead((h) => (h + 1) % feed.length), 2800);
    return () => window.clearInterval(id);
  }, [reduced]);

  const rows = [0, 1, 2].map((offset) => feed[(head + offset) % feed.length]);

  return (
    <div className="w-full max-w-[360px] rounded-2xl border border-white/15 bg-black/30 p-4 text-left backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[13px] font-medium text-cream-soft/85">
          Live ops feed
        </p>
        <span className="flex items-center gap-1.5 text-[11px] text-[#a8d4b4]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a8d4b4] opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#a8d4b4]" />
          </span>
          Running
        </span>
      </div>
      <ul className="space-y-1.5">
        {rows.map((row, i) => (
          <li
            key={`${row.time}-${head}-${i}`}
            className={`flex items-start gap-3 rounded-lg bg-white/[0.07] px-3 py-2 ${i === 0 ? "step-panel" : ""}`}
          >
            <span className="font-label mt-px shrink-0 text-cream-soft/50">{row.time}</span>
            <span className="min-w-0 flex-1 text-[13px] leading-snug text-cream-soft">
              {row.text}
            </span>
            <span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-cream-soft/75">
              {row.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Hero = () => {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={cityscapeImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {!reduced && (
          <VideoBackdrop
            src={aerialVideo}
            poster={cityscapeImage}
            treatment="hero"
            playOnMobile
            className="z-[1]"
          />
        )}
        <div className="absolute inset-0 z-[2] bg-black/25" aria-hidden="true" />
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-t from-black/70 via-black/10 to-black/40"
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-10 mx-auto flex flex-1 flex-col justify-end px-4 pb-10 pt-32 sm:px-6 sm:pb-14 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="animate-fade-in-up">
            <h1
              className="max-w-[14ch] font-medium leading-[0.92] tracking-[-0.015em] text-cream-soft"
              style={{ fontSize: "clamp(2.7rem, 8.8vw, 8.5rem)" }}
            >
              We&apos;re your{" "}
              <span className="accent-word !text-[#b8e2f8]">ops systems</span>{" "}
              team
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-soft/80 sm:text-lg">
              Custom software, automation, AI, and growth for operations that
              can&apos;t afford to break.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full bg-cream-soft px-6 text-sm font-medium text-deep transition-colors hover:bg-white"
              >
                Book a discovery call
              </a>
              <a
                href="#delivery"
                className="lattice-cta-glass inline-flex h-12 items-center rounded-full px-6 text-sm font-medium text-cream-soft"
              >
                See how we work
              </a>
            </div>
          </div>

          <div className="hidden animate-fade-in sm:block">
            <LiveFeed />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
