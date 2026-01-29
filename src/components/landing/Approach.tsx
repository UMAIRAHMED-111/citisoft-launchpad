import { Search, PenTool, Rocket, Settings } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Understand the Business",
    description: "We start with your processes, constraints, and goals.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design Practical Solutions",
    description: "Simple, scalable systems aligned with real usage.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Build & Deploy",
    description: "Clean, production-ready implementation with testing and reviews.",
  },
  {
    icon: Settings,
    number: "04",
    title: "Support & Improve",
    description: "Ongoing optimization, support, and enhancements.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">Our Approach</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6">
            How we{" "}
            <span className="text-gradient font-normal">deliver results</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
              
              <div className="text-center">
                {/* Icon with number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-white border border-border card-shadow flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-citisoft text-white text-sm font-medium flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
