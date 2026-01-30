import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    title: ["We", "reimagine", "tomorrow"],
    subtitle: "Driving growth and molding the future through transformative change.",
    video: "https://assets.mixkit.co/videos/30454/30454-720.mp4",
    poster: "https://assets.mixkit.co/videos/30454/30454-thumb-720-0.jpg",
  },
  {
    title: ["Software", "that", "scales"],
    subtitle: "Custom solutions, AI-driven automation, and data that powers decisions.",
    video: "https://assets.mixkit.co/videos/28599/28599-720.mp4",
    poster: "https://assets.mixkit.co/videos/28599/28599-thumb-720-0.jpg",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // When slide changes, play the new video
  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
    }
  }, [currentSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[hsl(var(--dark-bg))]">
      {/* Video backgrounds */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={slide.video}
            poster={slide.poster}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay={index === 0}
            aria-hidden="true"
          />
        </div>
      ))}

      {/* Overlay: dark gradient for readability, keeps theme with blue tint */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-[hsl(var(--dark-bg))]/95 via-[hsl(var(--dark-bg))]/80 to-[hsl(var(--dark-bg))]/50"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[hsl(var(--dark-bg))]/60 via-transparent to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center pt-20 sm:pt-24 pb-24 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl">
            {/* Split headline - one word per line */}
            <div className="overflow-hidden mb-4 sm:mb-6">
              {heroSlides[currentSlide].title.map((word, i) => (
                <h1
                  key={`${currentSlide}-${i}`}
                  className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-light text-white leading-[1.05] tracking-tight"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${i * 0.1}s both`,
                  }}
                >
                  {word}
                </h1>
              ))}
            </div>

            <p
              className="text-base sm:text-lg md:text-xl text-white/85 font-light max-w-xl mb-8 sm:mb-10"
              style={{ animation: "fadeIn 0.8s ease-out 0.4s both" }}
            >
              {heroSlides[currentSlide].subtitle}
            </p>

            <div style={{ animation: "fadeIn 0.8s ease-out 0.6s both" }}>
              <Button
                asChild
                variant="default"
                size="lg"
                className="rounded-none bg-white text-[hsl(var(--dark-bg))] hover:bg-white/90 font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase px-8 sm:px-12 h-12 sm:h-14 text-xs sm:text-sm"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: scroll hint */}
      <div
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-white/60 text-sm tracking-widest uppercase"
        style={{ animation: "fadeIn 1s ease-out 1s both" }}
      >
        <span className="text-xs">Scroll to Explore</span>
        <div className="w-px h-10 bg-white/40 rounded-full animate-pulse" />
      </div>

      {/* Slide indicators - minimal dots */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 lg:right-10 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 sm:w-10 bg-white"
                : "w-1 sm:w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
