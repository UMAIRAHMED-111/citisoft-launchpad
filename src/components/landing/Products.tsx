import { Workflow, Bot, LayoutDashboard } from "lucide-react";

const products = [
  {
    icon: Workflow,
    title: "Automation & Workflow Tools",
    description: "Streamline repetitive processes with customizable automation frameworks.",
  },
  {
    icon: Bot,
    title: "AI-Powered Assistants & Agents",
    description: "Intelligent agents that handle tasks, answer questions, and support operations.",
  },
  {
    icon: LayoutDashboard,
    title: "Reporting & Operational Dashboards",
    description: "Real-time visibility into your business metrics and performance.",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-medium uppercase tracking-wider mb-4">Internal Products & Platforms</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Ready-to-deploy{" "}
            <span className="text-gradient font-normal">solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Alongside client work, we develop internal products and automation platforms 
            that can be customized and deployed across multiple organizations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-xl p-8 border border-border/60 card-shadow hover:card-shadow-hover hover:border-primary/20 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-citisoft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium mb-3 text-foreground">
                {product.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
