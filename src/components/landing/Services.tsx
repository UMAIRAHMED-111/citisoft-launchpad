import { Code2, Cpu, Database, BarChart3, Lightbulb, Blocks } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored applications designed to fit your unique workflows. We build scalable, maintainable software that grows with your business.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Intelligent automation solutions that eliminate manual tasks and unlock insights from your data using cutting-edge AI technologies.",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description:
      "Transform raw data into actionable intelligence. From data pipelines to analytics dashboards—we make your data work for you.",
  },
  {
    icon: BarChart3,
    title: "Technology Consulting",
    description:
      "Strategic guidance to align technology with business goals. We help you make informed decisions that drive real results.",
  },
  {
    icon: Blocks,
    title: "Reusable Platforms",
    description:
      "Internally built products and platforms designed to solve common operational problems, ready for rapid deployment.",
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation",
    description:
      "Modernize legacy systems and processes. We help organizations embrace digital-first thinking across all operations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we deliver practical technology solutions 
            that solve real operational problems and drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-citisoft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover gradient accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-citisoft-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
