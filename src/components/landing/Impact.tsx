import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", description: "Successfully completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Average rating" },
  { value: 10, suffix: "+", label: "Industries Served", description: "Diverse expertise" },
  { value: 24, suffix: "/7", label: "Support Available", description: "Always here for you" },
];

const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

// Animated counter hook
const useCounter = (target: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, startCounting]);
  
  return count;
};

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCounter(stat.value, 2000, isVisible);
  
  return (
    <div 
      className="group relative p-6 sm:p-8 lg:p-10"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--citisoft-light))]/0 to-[hsl(var(--citisoft-dark))]/0 group-hover:from-[hsl(var(--citisoft-light))]/5 group-hover:to-[hsl(var(--citisoft-dark))]/5 transition-all duration-500 rounded-2xl" />
      
      <div className="relative">
        {/* Number */}
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-light text-foreground tracking-tight tabular-nums">
            {count}
          </span>
          <span className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-light text-[hsl(var(--citisoft-dark))]">
            {stat.suffix}
          </span>
        </div>
        
        {/* Label */}
        <h3 className="text-lg sm:text-xl font-medium text-foreground mb-1">
          {stat.label}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground font-light">
          {stat.description}
        </p>
      </div>
    </div>
  );
};

const Impact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-28">
          {/* Left column - Text */}
          <div className="flex flex-col justify-center">
            {/* Accent line */}
            <div className="w-12 h-1 bg-gradient-to-r from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] mb-8" />
            
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6 leading-[1.1]">
              Transforming ideas into{" "}
              <span className="text-[hsl(var(--citisoft-dark))]">digital reality</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed mb-8 max-w-xl">
              We combine technical excellence with creative thinking to deliver solutions that make a real difference. Our track record speaks for itself.
            </p>
            
            <Link 
              to="/#contact"
              className="group inline-flex items-center gap-3 text-[hsl(var(--citisoft-dark))] font-medium hover:gap-4 transition-all duration-300"
            >
              <span className="uppercase text-sm tracking-wider">Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Right column - Stats grid */}
          <div className="grid grid-cols-2 gap-0 border border-border/50 rounded-2xl overflow-hidden bg-card/50">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`${index < 2 ? 'border-b border-border/50' : ''} ${index % 2 === 0 ? 'border-r border-border/50' : ''}`}
              >
                <StatCard stat={stat} index={index} isVisible={isVisible} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Technologies section */}
        <div className="text-center">
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground font-light mb-12 sm:mb-16 max-w-3xl mx-auto">
            Building with modern technologies to deliver{" "}
            <span className="text-[hsl(var(--citisoft-dark))] font-normal">scalable, future-proof solutions</span>
          </p>
          
          {/* Tech logos - spanning 90% width */}
          <div className="w-[90%] mx-auto">
            <div className="flex justify-between items-center">
              {technologies.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="group relative flex-1 flex justify-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="h-12 sm:h-14 lg:h-16 xl:h-20 w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
