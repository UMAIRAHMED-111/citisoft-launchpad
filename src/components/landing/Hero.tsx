import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const slides = [
  {
    title: ["Building", "scalable", "software"],
    subtitle: "We help companies simplify operations, improve visibility, and scale through custom software, AI-driven automation, and data solutions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: ["Automation", "&", "AI"],
    subtitle: "Workflow automation, AI agents, and process optimization to reduce manual work and drive efficiency.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=2000&q=80",
  },
  {
    title: ["Data", "driven", "decisions"],
    subtitle: "Data pipelines, dashboards, and reporting systems for better decision-making across your organization.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2000&q=80",
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
      {/* Background Images with transitions */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
      
      {/* Light overlay for text readability on bright images */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/60" />

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
              className="text-lg sm:text-xl text-muted-foreground font-light italic mb-10 max-w-xl animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              key={currentSlide}
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <Button variant="gradient" size="hero">
                Let's Talk
              </Button>
              <Button variant="outline" size="hero" className="border-foreground/30 hover:bg-foreground/5">
                View Our Approach
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-foreground/50 hover:text-foreground transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10" strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-foreground/50 hover:text-foreground transition-colors"
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
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;