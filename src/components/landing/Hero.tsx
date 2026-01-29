import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Database } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-gradient-citisoft opacity-5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-gradient-citisoft opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-gradient-citisoft animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">
              Technology Consulting & Software Development
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Build Smarter.{" "}
            <span className="text-gradient">Scale Faster.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We design, build, and scale digital systems that solve real business problems. 
            From custom software to AI-powered automation—practical technology for growing organizations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gradient" size="xl">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-gradient" size="xl">
              Explore Services
            </Button>
          </div>

          {/* Tech Icons */}
          <div className="flex items-center justify-center gap-8 sm:gap-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Code2 className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">Custom Software</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">AI & Automation</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                <Database className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">Data Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
