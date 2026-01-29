import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroCityscape from "@/assets/hero-cityscape.jpg";

const slides = [
  {
    title: ["We", "reimagine", "tomorrow"],
    subtitle: "Driving growth and molding the future through transformative change",
  },
  {
    title: ["We", "build", "solutions"],
    subtitle: "Custom software and AI systems that solve real business problems",
  },
  {
    title: ["We", "scale", "businesses"],
    subtitle: "Practical technology consulting for growing organizations",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCityscape}
          alt="Digital cityscape"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Animated Title */}
            <div className="overflow-hidden mb-6">
              {slides[currentSlide].title.map((word, index) => (
                <h1
                  key={`${currentSlide}-${index}`}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[1.1] animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {word}
                </h1>
              ))}
            </div>

            {/* Subtitle */}
            <p 
              className="text-lg sm:text-xl text-foreground/80 font-light italic mb-10 max-w-xl animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              key={currentSlide}
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <Button variant="hero-outline" size="hero">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-foreground/60 hover:text-foreground transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10" strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-foreground/60 hover:text-foreground transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-10 h-10" strokeWidth={1} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-foreground/40 hover:bg-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-hero-bottom z-10" />
    </section>
  );
};

export default Hero;