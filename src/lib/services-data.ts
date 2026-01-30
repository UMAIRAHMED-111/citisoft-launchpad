export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  extendedDescription: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software",
    shortTitle: "Custom Software",
    title: "Custom Software Development",
    tagline: "Tailored solutions built for your unique business needs",
    description:
      "We build internal tools, web platforms, and system integrations tailored to your operations—scalable, maintainable, and aligned with how you work.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    extendedDescription:
      "From internal tools to customer-facing platforms, we design and build software that fits your processes and scales with your growth. Our development approach emphasizes clean architecture, comprehensive documentation, and alignment with how your team actually works. We don't just write code—we create solutions that empower your business to operate more efficiently and adapt to changing needs.",
    keyFeatures: [
      {
        title: "Web & Mobile Applications",
        description: "Modern, responsive applications built with cutting-edge technologies. From progressive web apps to native mobile experiences, we create solutions that users love.",
      },
      {
        title: "System Integrations & APIs",
        description: "Connect your existing systems seamlessly. We build robust APIs and integrations that enable data flow and process automation across your technology stack.",
      },
      {
        title: "Internal Tools & Dashboards",
        description: "Custom admin panels, workflow tools, and dashboards that streamline operations. Built specifically for your team's needs and processes.",
      },
      {
        title: "Legacy Modernization",
        description: "Transform outdated systems into modern, maintainable solutions. We help you migrate, refactor, and upgrade while minimizing business disruption.",
      },
    ],
    benefits: [
      "Solutions tailored exactly to your business processes",
      "Scalable architecture that grows with your needs",
      "Clean, maintainable code with comprehensive documentation",
      "Faster time-to-market with agile development practices",
      "Reduced operational costs through automation",
      "Competitive advantage through custom capabilities",
    ],
    process: [
      "Discovery workshops to understand your needs",
      "Architecture design and technical planning",
      "Agile development with regular demos",
      "Comprehensive testing and quality assurance",
      "Deployment and launch support",
      "Ongoing maintenance and enhancement",
    ],
  },
  {
    slug: "automation-ai",
    shortTitle: "Automation & AI",
    title: "Automation & AI Solutions",
    tagline: "Intelligent automation that transforms how you work",
    description:
      "Workflow automation, AI agents, and process optimization to reduce manual work and drive efficiency across your organization.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    extendedDescription:
      "We help you automate repetitive tasks and introduce AI where it delivers real, measurable value. From document processing to customer support to decision support, our approach is practical—we start with clear use cases and focus on outcomes that matter. Our solutions don't just automate; they learn, adapt, and continuously improve.",
    keyFeatures: [
      {
        title: "Workflow & Process Automation",
        description: "Automate repetitive tasks and complex workflows. We identify bottlenecks, design efficient processes, and implement automation that runs reliably 24/7.",
      },
      {
        title: "AI Agents & Assistants",
        description: "Intelligent chatbots and virtual assistants that understand context, learn from interactions, and handle customer inquiries autonomously.",
      },
      {
        title: "Document & Data Extraction",
        description: "Automated extraction and processing of information from documents, emails, and forms. Reduce manual data entry and improve accuracy.",
      },
      {
        title: "Intelligent Process Optimization",
        description: "AI-driven analysis of your operations to identify inefficiencies, predict issues, and recommend improvements continuously.",
      },
    ],
    benefits: [
      "Reduce manual work by up to 70%",
      "Eliminate human errors in repetitive tasks",
      "24/7 operations without additional staffing",
      "Faster response times and improved customer satisfaction",
      "Data-driven insights for better decision making",
      "Scalable solutions that grow with your business",
    ],
    process: [
      "Process assessment and opportunity identification",
      "Use case prioritization based on ROI",
      "Proof of concept development",
      "Integration with existing systems",
      "Training and change management",
      "Continuous monitoring and optimization",
    ],
  },
  {
    slug: "data-analytics",
    shortTitle: "Data & Analytics",
    title: "Data & Analytics",
    tagline: "Turn your data into a competitive advantage",
    description:
      "Data pipelines, dashboards, and reporting systems that turn your data into a business advantage for better decision-making.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    extendedDescription:
      "Data is only valuable when you can trust it and act on it. We design data pipelines, warehouses, and reporting systems that give your team clarity, accuracy, and actionable insights. From real-time dashboards to self-serve analytics, we focus on making data accessible and useful across your organization.",
    keyFeatures: [
      {
        title: "Data Pipelines & ETL",
        description: "Reliable, scalable data pipelines that collect, transform, and load data from multiple sources into your analytics infrastructure.",
      },
      {
        title: "Dashboards & Reporting",
        description: "Beautiful, intuitive dashboards that surface the metrics that matter. Real-time updates, interactive exploration, and automated report distribution.",
      },
      {
        title: "Self-Serve Analytics",
        description: "Empower your team to explore data independently. We build data products that enable non-technical users to answer their own questions.",
      },
      {
        title: "Data Strategy & Governance",
        description: "Define how your organization collects, manages, and uses data. Establish quality standards, access controls, and compliance frameworks.",
      },
    ],
    benefits: [
      "Single source of truth for all business metrics",
      "Real-time visibility into operations and performance",
      "Faster, more confident decision making",
      "Reduced time spent gathering and reconciling data",
      "Democratized access to insights across teams",
      "Compliance with data regulations and standards",
    ],
    process: [
      "Data audit and requirements gathering",
      "Architecture design and technology selection",
      "Data pipeline development and testing",
      "Dashboard and report development",
      "User training and documentation",
      "Ongoing support and enhancement",
    ],
  },
  {
    slug: "technology-consulting",
    shortTitle: "Technology Consulting",
    title: "Technology Consulting",
    tagline: "Strategic guidance from experts who understand your business",
    description:
      "Architecture, process design, and delivery support from strategy to execution—practical guidance that gets results.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    extendedDescription:
      "We work alongside your team to shape technology strategy, architecture, and delivery. Whether you need a roadmap for digital transformation, a technical review of your systems, or hands-on support from discovery to launch, we provide practical, actionable guidance that drives real results.",
    keyFeatures: [
      {
        title: "Architecture & Technical Strategy",
        description: "Design scalable, maintainable systems that support your business goals. We help you make technology decisions with confidence.",
      },
      {
        title: "Process & Delivery Design",
        description: "Optimize how your team builds and delivers software. Agile transformation, DevOps practices, and continuous improvement.",
      },
      {
        title: "Discovery & Requirements",
        description: "Turn business needs into clear technical requirements. We facilitate workshops, create specifications, and align stakeholders.",
      },
      {
        title: "Implementation Support",
        description: "Hands-on guidance during development and deployment. Code reviews, architecture oversight, and technical mentorship.",
      },
    ],
    benefits: [
      "Make technology decisions with confidence",
      "Avoid costly mistakes and technical debt",
      "Accelerate delivery with proven practices",
      "Build internal capabilities and knowledge",
      "Align technology investments with business goals",
      "Reduce risk in complex technology initiatives",
    ],
    process: [
      "Initial assessment and goal alignment",
      "Current state analysis and gap identification",
      "Recommendations and roadmap development",
      "Implementation planning and prioritization",
      "Execution support and knowledge transfer",
      "Review and continuous improvement",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
