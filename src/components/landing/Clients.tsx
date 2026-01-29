import { Building2, TrendingUp, Users, Briefcase } from "lucide-react";

const industries = [
  { icon: Briefcase, name: "Services" },
  { icon: TrendingUp, name: "Finance" },
  { icon: Building2, name: "Retail" },
  { icon: Users, name: "Operations" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">Who We Serve</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-8">
            Growing businesses that need{" "}
            <span className="text-gradient font-normal">reliable technology</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            We work with small to mid-sized businesses and growing enterprises across 
            services, finance, retail, and operations-heavy industries that need 
            reliable technology without large in-house teams.
          </p>

          {/* Industry Icons */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center">
                  <industry.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-muted-foreground font-medium text-sm">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
