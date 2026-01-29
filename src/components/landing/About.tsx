import { CheckCircle2 } from "lucide-react";

const features = [
  "Business-first technology approach",
  "Scalable, long-term solutions",
  "Consulting expertise with hands-on execution",
  "Internally built products for rapid deployment",
  "Agile development methodology",
  "Dedicated partnership model",
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="text-gradient">Citisoft Solutions?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just another software vendor. As a technology consulting startup, 
              we combine strategic thinking with practical execution. We understand that 
              technology should serve your business goals—not the other way around.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our approach combines deep technical expertise with business acumen, 
              delivering solutions that are both innovative and pragmatic. We build 
              partnerships, not just projects.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-citisoft p-[2px]">
              <div className="w-full h-full rounded-3xl bg-background p-8 lg:p-12 flex flex-col justify-center">
                {/* Stats */}
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-bold text-gradient mb-2">
                      100%
                    </div>
                    <div className="text-muted-foreground font-medium">
                      Client Satisfaction Focus
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-bold text-gradient mb-2">
                      End-to-End
                    </div>
                    <div className="text-muted-foreground font-medium">
                      From Strategy to Deployment
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-bold text-gradient mb-2">
                      Scalable
                    </div>
                    <div className="text-muted-foreground font-medium">
                      Solutions That Grow With You
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-citisoft opacity-20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-citisoft opacity-20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
