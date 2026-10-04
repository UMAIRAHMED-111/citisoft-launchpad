import { Button } from "@/components/ui/button";
import cityscapeImage from "@/assets/hero-cityscape.jpg";
import meetingVideo from "@/assets/mixkit-business-people-at-work-meeting-4809-hd-ready.mp4";
import VideoBackdrop from "@/components/landing/VideoBackdrop";
import Reveal from "@/components/landing/Reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const ClosingCTA = () => {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const showVideo = isMobile === false && !reduced;

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
      <img
        src={cityscapeImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover grayscale brightness-[0.45] contrast-125"
      />

      {showVideo && (
        <VideoBackdrop
          src={meetingVideo}
          poster={cityscapeImage}
          treatment="closing"
        />
      )}

      <div className="absolute inset-0 bg-[hsl(var(--dark-bg))]/78" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--dark-bg))]/40 via-[hsl(var(--dark-bg))]/70 to-[hsl(var(--dark-bg))]/90 sm:bg-gradient-to-r sm:from-[hsl(var(--dark-bg))] sm:via-[hsl(var(--dark-bg))]/75 sm:to-transparent"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-4xl">
          <h2 className="font-display text-[clamp(1.85rem,7vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
            Ready to put the operation on rails?
          </h2>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70 sm:mt-6 sm:text-xl">
            Tell us where the work still depends on people doing what a system
            should — we&apos;ll respond with a clear next step.
          </p>
          <div className="mt-8 sm:mt-10">
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-sm bg-white px-8 text-sm font-semibold text-[hsl(var(--dark-bg))] hover:bg-white/90 xs:w-auto sm:h-14 sm:px-12 sm:text-base"
            >
              <a href="#contact">Start the conversation</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ClosingCTA;
