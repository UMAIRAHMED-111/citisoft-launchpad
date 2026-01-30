export type Product = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  gradient: string;
  image: string;
  extendedDescription: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  useCases: string[];
};

export const products: Product[] = [
  {
    slug: "automation-workflow-tools",
    title: "Automation & Workflow Tools",
    shortTitle: "Automation Tools",
    tagline: "Streamline operations and eliminate repetitive tasks",
    description: "Powerful automation frameworks that adapt to your business needs and scale with your operations.",
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #4a2c5e 50%, #6b3d5e 100%)",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&auto=format&fit=crop",
    extendedDescription: "Our automation and workflow tools are designed to transform how your business operates. By intelligently automating repetitive tasks and orchestrating complex workflows, we help you save time, reduce errors, and free your team to focus on what matters most. Built on proven frameworks and customizable to your specific needs, our solutions grow with your business.",
    keyFeatures: [
      {
        title: "Visual Workflow Builder",
        description: "Intuitive drag-and-drop interface for creating complex automation workflows without coding. Design, test, and deploy automations in minutes.",
      },
      {
        title: "Smart Integration Hub",
        description: "Connect with 100+ popular business applications including CRMs, ERPs, communication tools, and databases through our unified integration platform.",
      },
      {
        title: "Intelligent Triggers",
        description: "Set up sophisticated triggers based on time, events, conditions, or external APIs to execute workflows automatically at the right moment.",
      },
      {
        title: "Real-time Monitoring",
        description: "Track workflow execution in real-time with detailed logs, performance metrics, and instant alerts for failures or anomalies.",
      },
    ],
    benefits: [
      "Reduce manual work by up to 70% through intelligent automation",
      "Eliminate human errors in repetitive data entry and processing tasks",
      "Scale operations without proportionally increasing headcount",
      "Improve response times and customer satisfaction",
      "Enable 24/7 operations with automated workflows",
      "Gain visibility into all business processes with comprehensive analytics",
    ],
    useCases: [
      "Automated invoice processing and approval workflows",
      "Customer onboarding and document verification",
      "Data synchronization between multiple systems",
      "Scheduled report generation and distribution",
      "Alert and notification management",
      "Quality assurance and compliance checks",
    ],
  },
  {
    slug: "ai-powered-assistants",
    title: "AI-Powered Assistants & Agents",
    shortTitle: "AI Assistants",
    tagline: "Intelligent agents that work alongside your team",
    description: "Advanced AI agents that understand context, learn from interactions, and handle complex tasks autonomously.",
    gradient: "linear-gradient(135deg, #1e1b4e 0%, #2d1e6b 50%, #3d1e7e 100%)",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop",
    extendedDescription: "Harness the power of artificial intelligence with our cutting-edge AI assistants and agents. These intelligent systems don't just follow scripts—they understand context, learn from every interaction, and make informed decisions. From customer support to data analysis, our AI agents work 24/7 to augment your team's capabilities and deliver exceptional results.",
    keyFeatures: [
      {
        title: "Natural Language Understanding",
        description: "Advanced NLP capabilities that comprehend user intent, context, and sentiment across multiple languages and communication styles.",
      },
      {
        title: "Contextual Memory",
        description: "AI agents that remember previous interactions and maintain context across conversations, providing personalized and coherent experiences.",
      },
      {
        title: "Multi-Channel Deployment",
        description: "Deploy the same AI agent across web, mobile, messaging platforms, email, and voice channels with consistent behavior and quality.",
      },
      {
        title: "Continuous Learning",
        description: "Machine learning models that improve over time, learning from feedback and new data to provide increasingly accurate responses.",
      },
    ],
    benefits: [
      "Provide instant 24/7 support without human intervention",
      "Handle thousands of simultaneous conversations",
      "Reduce support costs while improving response quality",
      "Free human agents to focus on complex, high-value interactions",
      "Maintain consistency in responses and brand voice",
      "Scale support operations without linear cost increases",
    ],
    useCases: [
      "Customer service and technical support chatbots",
      "Lead qualification and sales assistance",
      "Internal IT helpdesk automation",
      "Appointment scheduling and calendar management",
      "Data extraction and document analysis",
      "Personalized product recommendations",
    ],
  },
  {
    slug: "reporting-dashboards",
    title: "Reporting & Operational Dashboards",
    shortTitle: "Dashboards",
    tagline: "Transform data into actionable insights",
    description: "Beautiful, real-time dashboards that give you complete visibility into your business performance.",
    gradient: "linear-gradient(135deg, #1e2a4e 0%, #1e3a6b 50%, #1e4a7e 100%)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
    extendedDescription: "Data is only valuable when you can understand and act on it. Our reporting and operational dashboards transform raw data into clear, actionable insights. With real-time updates, customizable views, and powerful analytics, you'll always have your finger on the pulse of your business. Make informed decisions faster with data visualization that tells the story at a glance.",
    keyFeatures: [
      {
        title: "Real-time Data Streaming",
        description: "Live data updates from multiple sources ensure you're always viewing the most current information without manual refreshes.",
      },
      {
        title: "Customizable Visualizations",
        description: "Choose from dozens of chart types, widgets, and layout options to create dashboards that match your specific needs and preferences.",
      },
      {
        title: "Interactive Analytics",
        description: "Drill down into data, apply filters, and explore trends with intuitive interactions. Export data or schedule automated reports.",
      },
      {
        title: "Role-based Access",
        description: "Configure different dashboard views for different teams and roles, ensuring everyone sees the metrics most relevant to them.",
      },
    ],
    benefits: [
      "Make data-driven decisions with real-time insights",
      "Identify trends and anomalies before they become problems",
      "Align teams around shared metrics and KPIs",
      "Eliminate manual report creation and distribution",
      "Improve accountability with transparent performance tracking",
      "Reduce time spent searching for information",
    ],
    useCases: [
      "Executive performance and KPI dashboards",
      "Sales pipeline and revenue tracking",
      "Operations and logistics monitoring",
      "Marketing campaign performance analysis",
      "Customer health and retention metrics",
      "Financial reporting and budget tracking",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
