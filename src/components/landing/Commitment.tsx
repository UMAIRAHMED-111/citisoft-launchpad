import { Shield, MessageSquare, Clock, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality",
    description: "Production-ready code with thorough testing",
  },
  {
    icon: MessageSquare,
    title: "Transparency",
    description: "Clear communication at every step",
  },
  {
    icon: Clock,
    title: "Accountability",
    description: "On-time delivery with structured milestones",
  },
  {
    icon: Award,
    title: "Support",
    description: "Ongoing assistance and optimization",
  },
];

const Commitment = () => {
  return (
    <section id="commitment" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium uppercase tracking-wider mb-4">Our Commitment</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Built to be{" "}
              <span className="text-gradient font-normal">reliable</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              We prioritize quality, transparency, and accountability in every engagement—through 
              clear communication, structured delivery, and ongoing support.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-border mx-auto mb-4 flex items-center justify-center card-shadow">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-center mt-12 text-foreground font-medium text-lg">
            Built to be reliable. <span className="text-gradient">Designed to scale.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
