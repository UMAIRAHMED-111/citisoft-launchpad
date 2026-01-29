import { Code2, Cpu, Database, Compass, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Internal tools, web platforms, and system integrations built for your operations.",
  },
  {
    icon: Cpu,
    title: "Automation & AI Solutions",
    description: "Workflow automation, AI agents, and process optimization to reduce manual work.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Data pipelines, dashboards, and reporting for better decision-making.",
  },
  {
    icon: Compass,
    title: "Technology Consulting",
    description: "Architecture, process design, and delivery support from strategy to execution.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Technology that{" "}
            <span className="text-gradient font-normal">solves real problems</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            We design and deliver technology that solves real business problems—without unnecessary complexity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl p-8 lg:p-10 border border-border/60 card-shadow hover:card-shadow-hover hover:border-primary/20 transition-all duration-500 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-citisoft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium mb-3 text-foreground group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;