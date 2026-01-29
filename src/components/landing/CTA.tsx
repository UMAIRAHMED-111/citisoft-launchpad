import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Get Started</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Ready to build{" "}
              <span className="text-gradient font-normal">something great?</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-10 leading-relaxed">
              Let's discuss how Citisoft Solutions can help you design, build, 
              and scale your next digital initiative. From concept to deployment—we're 
              here to make it happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="lg:pl-12">
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-foreground font-medium mb-2">Email Us</h3>
                <a 
                  href="mailto:hello@citisoftsolutions.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@citisoftsolutions.com
                </a>
              </div>
              <div className="border-l-2 border-border pl-6">
                <h3 className="text-foreground font-medium mb-2">Follow Us</h3>
                <div className="flex gap-4 text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                </div>
              </div>
              <div className="border-l-2 border-border pl-6">
                <h3 className="text-foreground font-medium mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Serving clients globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;