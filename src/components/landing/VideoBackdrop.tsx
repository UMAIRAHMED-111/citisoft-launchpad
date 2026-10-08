import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type VideoBackdropProps = {
  src: string;
  poster?: string;
  className?: string;
  treatment?: "hero" | "ambient" | "closing";
  /** Lattice plays muted hero video on mobile too */
  playOnMobile?: boolean;
};

const treatmentClass: Record<NonNullable<VideoBackdropProps["treatment"]>, string> = {
  hero: "object-center contrast-[1.05] brightness-[0.92]",
  ambient: "grayscale contrast-[1.05] brightness-[0.35] opacity-40",
  closing: "grayscale contrast-125 brightness-[0.42]",
};

const VideoBackdrop = ({
  src,
  poster,
  className,
  treatment = "hero",
  playOnMobile = false,
}: VideoBackdropProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  // Desktop by default; Lattice-style heroes also play muted video on mobile
  const playVideo = !reduced && (playOnMobile || isMobile === false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!playVideo) {
      video.pause();
      return;
    }

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();

    const onVisibility = () => {
      if (document.hidden) video.pause();
      else tryPlay();
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [playVideo, src]);

  if (!playVideo) {
    if (!poster) return null;
    return (
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          treatmentClass[treatment],
          className
        )}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={cn(
        "absolute inset-0 h-full w-full object-cover",
        treatmentClass[treatment],
        className
      )}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden="true"
    />
  );
};

export default VideoBackdrop;
