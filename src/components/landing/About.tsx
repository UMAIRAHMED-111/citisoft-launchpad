import { ArrowRight } from "lucide-react";

const stats = [
  { value: "100%", label: "Client Focus" },
  { value: "End-to-End", label: "Delivery" },
  { value: "Scalable", label: "Solutions" },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium uppercase tracking-wider mb-4">About Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 leading-tight">
              A technology partner that{" "}
              <span className="text-gradient font-normal">understands business</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-6 leading-relaxed">
              Citisoft Solutions is a software development and technology consulting 
              startup that helps businesses design, build, and scale digital systems.
            </p>
            <p className="text-lg text-muted-foreground font-light mb-10 leading-relaxed">
              We deliver custom software, automation, data, and AI solutions, while 
              also developing internally built products and reusable platforms to solve 
              real operational problems. Our approach combines deep technical expertise 
              with business acumen.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-foreground font-medium group"
            >
              <span className="border-b border-foreground/30 group-hover:border-primary transition-colors">
                Learn more about us
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-gradient-citisoft p-[1px] rounded-2xl">
              <div className="bg-card rounded-2xl p-10 lg:p-14">
                <div className="space-y-10">
                  {stats.map((stat, index) => (
                    <div key={stat.label}>
                      <div className="text-4xl lg:text-5xl font-light text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground font-light">
                        {stat.label}
                      </div>
                      {index < stats.length - 1 && (
                        <div className="h-px bg-border mt-10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-citisoft opacity-20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-citisoft opacity-10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;