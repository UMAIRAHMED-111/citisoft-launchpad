import { Check } from "lucide-react";

const benefits = [
  "Business-first, outcome-driven delivery",
  "Lean, founder-led execution",
  "Faster turnaround than large consulting firms",
  "Internally built products and reusable frameworks",
  "Cost-effective and scalable solutions",
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Why Work With Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight">
              Built for{" "}
              <span className="text-gradient font-normal">long-term partnerships</span>
            </h2>
            
            {/* Benefits list */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-light text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Emphasis line */}
            <p className="text-muted-foreground font-light italic border-l-2 border-primary pl-4">
              We focus on long-term partnerships, not one-off projects.
            </p>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-gradient-citisoft p-[1px] rounded-2xl card-shadow">
              <div className="bg-white rounded-2xl p-10 lg:p-14">
                <div className="text-center">
                  <div className="text-6xl lg:text-7xl font-light text-gradient mb-4">
                    100%
                  </div>
                  <div className="text-foreground font-medium text-xl mb-2">
                    Client Focused
                  </div>
                  <p className="text-muted-foreground font-light">
                    Every engagement is tailored to your specific business needs and goals.
                  </p>
                </div>
                
                <div className="h-px bg-border my-10" />
                
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-light text-gradient mb-1">Fast</div>
                    <div className="text-muted-foreground text-sm">Turnaround</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-gradient mb-1">Lean</div>
                    <div className="text-muted-foreground text-sm">Execution</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-citisoft opacity-10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-citisoft opacity-5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
