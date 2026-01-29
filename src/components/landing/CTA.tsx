import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">Get Started</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
            Let's build something{" "}
            <span className="text-gradient font-normal">that lasts</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're looking to automate processes, build internal systems, 
            or scale with data and AI—we'd love to talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="gradient" size="lg">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <p className="text-muted-foreground text-sm font-light">
            No obligation. Clear conversations. Practical outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;