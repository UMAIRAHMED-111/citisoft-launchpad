import { Code2, Cpu, Database, BarChart3, Lightbulb, Blocks, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description: "Tailored applications designed for your unique workflows, built to scale.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Intelligent solutions that eliminate manual tasks and unlock data insights.",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Transform raw data into actionable intelligence with modern pipelines.",
  },
  {
    icon: BarChart3,
    title: "Consulting",
    description: "Strategic guidance to align technology with your business goals.",
  },
  {
    icon: Blocks,
    title: "Platforms",
    description: "Internally built products ready for rapid deployment and scaling.",
  },
  {
    icon: Lightbulb,
    title: "Transformation",
    description: "Modernize legacy systems and embrace digital-first operations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6">
            Technology solutions that{" "}
            <span className="text-gradient font-normal">drive results</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            From concept to deployment, we deliver practical solutions 
            that solve real operational problems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 lg:p-10 hover:bg-gradient-citisoft-subtle transition-all duration-500 cursor-pointer"
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