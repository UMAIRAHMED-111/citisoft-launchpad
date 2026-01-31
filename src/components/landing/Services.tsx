import { useRef, useEffect, useState, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/lib/services-data";

const SPEED = 1.5; // pixels per frame
const PAUSE_DELAY = 3000;

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / (services.length * 2);
    if (slideWidth <= 0) return;
    el.scrollTo({ left: index * slideWidth, behavior: "smooth" });
    setCurrentIndex(index);
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused) {
      return;
    }

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Only scroll if we have valid dimensions
      if (el && el.scrollWidth > 0) {
        const oneSetWidth = el.scrollWidth / 2;
        
        // Move the scroll position
        el.scrollLeft += SPEED * (deltaTime / 16);

        // Reset to beginning when we've scrolled one full set
        if (el.scrollLeft >= oneSetWidth) {
          el.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation with a small delay
    const timeout = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 200);

    return () => {
      clearTimeout(timeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleClick = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), RESUME_DELAY);
  };

  return (
    <section id="services" className="bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 lg:pt-32">
        <div className="max-w-4xl">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-4 sm:mb-5 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-light mb-6 sm:mb-8">
            Driving innovation and improving lives with AI-driven intelligence.
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground uppercase tracking-[0.2em] sm:tracking-[0.25em]">
              Scroll to Explore
            </span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/70 animate-bounce" aria-hidden />
          </div>
        </div>
      </div>

      {/* Enhanced slider */}
      <div className="mt-12 lg:mt-16 overflow-hidden">
        <div
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleClick}
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 lg:pb-6 scrollbar-hide px-4 sm:px-6 lg:px-10"
          style={{ scrollBehavior: "auto" }}
        >
          {[...services, ...services].map((service, i) => (
            <Link
              key={`${service.slug}-${i}`}
              to={`/services/${service.slug}`}
              className="group relative flex-[0_0_85vw] xs:flex-[0_0_80vw] sm:flex-[0_0_65vw] md:flex-[0_0_55vw] lg:flex-[0_0_45vw] xl:flex-[0_0_38vw] shrink-0 aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl"
            >
              {/* Image with zoom effect */}
              <img
                src={service.image}
                alt={service.shortTitle}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-500" />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <div 
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                    transform: 'skewX(-15deg)',
                  }}
                />
              </div>

              {/* Border with glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500" />
              
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div 
                  className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float"
                  style={{ top: '25%', left: '20%', animationDelay: '0s' }}
                />
                <div 
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                  style={{ top: '45%', right: '15%', animationDelay: '0.5s' }}
                />
                <div 
                  className="absolute w-1.5 h-1.5 bg-white/25 rounded-full animate-float"
                  style={{ top: '70%', left: '75%', animationDelay: '1s' }}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 xs:p-6 sm:p-8 lg:p-10">
                {/* Service tag */}
                <div className="mb-auto">
                  <span className="inline-block px-3 py-1.5 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 uppercase rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                    SERVICE
                  </span>
                </div>

                {/* Title and CTA */}
                <div className="transform group-hover:-translate-y-2 transition-all duration-500">
                  <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4 tracking-tight leading-tight">
                    {service.shortTitle}
                  </h3>
                  
                  {/* Description - reveals on hover */}
                  <p className="text-white/0 group-hover:text-white/70 text-sm leading-relaxed font-light max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500 ease-out mb-4">
                    {service.description.slice(0, 100)}...
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-4">
                    <span className="text-white/70 group-hover:text-white text-sm font-medium tracking-wide transition-colors duration-300">
                      Explore
                    </span>
                    <div className="w-6 h-px bg-white/40 group-hover:w-10 group-hover:bg-white/70 transition-all duration-500" />
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Outer glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[hsl(var(--citisoft-light))]/0 to-[hsl(var(--citisoft-dark))]/0 group-hover:from-[hsl(var(--citisoft-light))]/20 group-hover:to-[hsl(var(--citisoft-dark))]/20 blur-xl transition-all duration-700 -z-10 opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
        
        {/* Dots navigation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 flex justify-center gap-2 sm:gap-3">
          {services.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                handleClick();
                scrollToIndex(index);
              }}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "w-8 sm:w-10 bg-gradient-to-r from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))]"
                  : "w-1.5 sm:w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
