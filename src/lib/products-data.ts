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
  capabilities: string[];
};

export const products: Product[] = [
  {
    slug: "digital-insurance-surety-platform",
    title: "Digital Insurance & Surety Operations Platform",
    shortTitle: "Insurance Platform",
    tagline: "Enterprise-grade insurance workflow automation",
    description: "A robust enterprise platform designed to manage complex, regulated insurance workflows end to end.",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 50%, #3d5a7f 100%)",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop",
    extendedDescription: "The solution automates policy intake, underwriting workflows, approvals, amendments, and lifecycle events through configurable business rules and workflow orchestration. Built with a scalable, API-driven architecture, it ensures auditability, compliance, and data consistency across high-risk financial operations.",
    keyFeatures: [
      {
        title: "Policy Lifecycle Management",
        description: "Complete automation of policy intake, amendments, renewals, and cancellations with full audit trails and compliance tracking throughout the entire lifecycle.",
      },
      {
        title: "Underwriting Workflow Automation",
        description: "Configurable business rules engine that automates risk assessment, approval routing, and decision workflows while maintaining regulatory compliance.",
      },
      {
        title: "API-Driven Architecture",
        description: "Scalable, modern architecture with comprehensive APIs enabling seamless integration with existing systems, third-party services, and regulatory bodies.",
      },
      {
        title: "Compliance & Auditability",
        description: "Built-in compliance controls, complete audit trails, and regulatory reporting capabilities designed for high-risk financial operations.",
      },
    ],
    benefits: [
      "Reduce policy processing time by up to 80% through automation",
      "Ensure regulatory compliance with built-in controls and audit trails",
      "Minimize operational risk with standardized workflows",
      "Scale operations without proportional headcount increases",
      "Improve data consistency across all insurance operations",
      "Enable faster time-to-market for new insurance products",
    ],
    useCases: [
      "Surety bond issuance and management",
      "Commercial insurance underwriting",
      "Policy amendment and endorsement processing",
      "Claims workflow automation",
      "Regulatory compliance reporting",
      "Multi-carrier policy administration",
    ],
    capabilities: [
      "Enterprise software engineering",
      "Workflow automation",
      "Regulated systems",
      "Rule-based decisioning",
      "Financial operations platforms",
    ],
  },
  {
    slug: "ai-conversational-automation-platform",
    title: "AI-Powered Conversational Automation Platform",
    shortTitle: "AI Automation",
    tagline: "Intelligent automation for customer engagement",
    description: "An intelligent automation platform enabling businesses to deploy AI-driven conversational experiences across customer engagement channels.",
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #4a2c6e 50%, #6b3d8e 100%)",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop",
    extendedDescription: "The platform leverages AI-assisted request interpretation, configurable prompts, and workflow automation to handle inquiries, route requests, and trigger downstream business processes. Designed with cost-aware AI usage and human-in-the-loop controls, it balances automation with reliability and governance.",
    keyFeatures: [
      {
        title: "AI-Assisted Request Interpretation",
        description: "Advanced natural language processing that understands customer intent, extracts key information, and routes requests to appropriate workflows or agents.",
      },
      {
        title: "Configurable Prompt Engineering",
        description: "Flexible prompt configuration system allowing businesses to customize AI behavior, responses, and decision logic without code changes.",
      },
      {
        title: "Human-in-the-Loop Controls",
        description: "Intelligent escalation and oversight mechanisms ensuring human review for complex cases while maintaining automation efficiency.",
      },
      {
        title: "Cost-Aware AI Operations",
        description: "Smart resource management that optimizes AI usage costs while maintaining response quality and system performance.",
      },
    ],
    benefits: [
      "Handle thousands of customer inquiries simultaneously",
      "Reduce response times from hours to seconds",
      "Lower operational costs with intelligent automation",
      "Maintain quality through human oversight controls",
      "Scale customer support without linear cost increases",
      "Ensure consistent brand voice across all channels",
    ],
    useCases: [
      "Customer service automation",
      "Lead qualification and routing",
      "Appointment scheduling and management",
      "Technical support triage",
      "Order status and tracking inquiries",
      "FAQ and knowledge base assistance",
    ],
    capabilities: [
      "AI integration",
      "Conversational AI",
      "Prompt-driven systems",
      "Intelligent routing",
      "Scalable SaaS platforms",
    ],
  },
  {
    slug: "digital-tax-einvoicing-platform",
    title: "Digital Tax & e-Invoicing Compliance Platform",
    shortTitle: "Tax Compliance",
    tagline: "Compliance-grade digital invoicing automation",
    description: "A compliance-grade platform built to support mandatory digital invoicing and regulatory submission workflows.",
    gradient: "linear-gradient(135deg, #1e4a3d 0%, #2d5a4d 50%, #3d6a5d 100%)",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&auto=format&fit=crop",
    extendedDescription: "The system automates invoice validation, structured submissions, error handling, and compliance status tracking while enabling organizations to transition from manual or legacy processes to standardized, regulation-ready digital workflows with full traceability.",
    keyFeatures: [
      {
        title: "Automated Invoice Validation",
        description: "Comprehensive validation engine ensuring all invoices meet regulatory requirements before submission, with detailed error reporting and correction workflows.",
      },
      {
        title: "Regulatory Submission Workflows",
        description: "Automated submission to tax authorities and regulatory bodies with real-time status tracking, acknowledgment handling, and retry mechanisms.",
      },
      {
        title: "Compliance Status Tracking",
        description: "Centralized dashboard providing real-time visibility into compliance status, pending submissions, and regulatory deadlines across all entities.",
      },
      {
        title: "Legacy System Transition",
        description: "Smooth migration path from manual or legacy processes to standardized digital workflows with data mapping, validation, and parallel processing support.",
      },
    ],
    benefits: [
      "Ensure 100% compliance with e-invoicing mandates",
      "Eliminate manual data entry errors in invoice processing",
      "Reduce penalty risk with automated deadline tracking",
      "Accelerate transition to digital tax requirements",
      "Maintain complete audit trail for all transactions",
      "Support multi-jurisdiction compliance requirements",
    ],
    useCases: [
      "Mandatory e-invoicing compliance",
      "B2B and B2G invoice processing",
      "Cross-border transaction reporting",
      "Tax authority submissions",
      "Invoice reconciliation and matching",
      "Regulatory audit preparation",
    ],
    capabilities: [
      "RegTech",
      "FinTech platforms",
      "Government integrations",
      "Validation engines",
      "High-integrity transaction systems",
    ],
  },
  {
    slug: "financial-operations-ap-platform",
    title: "Financial Operations & Accounts Payable Automation Platform",
    shortTitle: "AP Automation",
    tagline: "Enterprise financial operations at scale",
    description: "An enterprise financial operations platform streamlining invoice processing, approvals, and reconciliation.",
    gradient: "linear-gradient(135deg, #1e2a4e 0%, #2d3a6e 50%, #3d4a8e 100%)",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop",
    extendedDescription: "The solution supports structured ingestion of financial documents, automated validations, approval workflows, and readiness for downstream accounting and ERP processes. Designed to operate at scale, it emphasizes data accuracy, control, and operational efficiency.",
    keyFeatures: [
      {
        title: "Intelligent Document Ingestion",
        description: "Automated capture and extraction of invoice data from multiple formats and channels with AI-powered data validation and enrichment.",
      },
      {
        title: "Approval Workflow Automation",
        description: "Configurable approval routing based on amount thresholds, cost centers, and business rules with mobile-friendly approval capabilities.",
      },
      {
        title: "ERP Integration Ready",
        description: "Seamless integration with major ERP and accounting systems ensuring accurate data flow and eliminating manual data entry.",
      },
      {
        title: "Reconciliation & Control",
        description: "Automated three-way matching, exception handling, and reconciliation workflows with comprehensive audit trails and controls.",
      },
    ],
    benefits: [
      "Reduce invoice processing costs by up to 80%",
      "Accelerate approval cycles from days to hours",
      "Eliminate duplicate payments and processing errors",
      "Capture early payment discounts consistently",
      "Improve vendor relationships with faster payments",
      "Gain real-time visibility into payables and cash flow",
    ],
    useCases: [
      "High-volume invoice processing",
      "Multi-entity accounts payable",
      "Purchase order matching",
      "Vendor payment management",
      "Expense report processing",
      "Financial close acceleration",
    ],
    capabilities: [
      "Financial systems",
      "Process automation",
      "Approval workflows",
      "Data integrity",
      "Enterprise integrations",
    ],
  },
  {
    slug: "sales-proposal-rfq-platform",
    title: "Automated Sales Proposal & RFQ Processing Platform",
    shortTitle: "Sales Automation",
    tagline: "Transform sales operations with intelligent automation",
    description: "An end-to-end automation platform transforming how organizations manage high-volume sales inquiries and proposal workflows.",
    gradient: "linear-gradient(135deg, #4a1e3d 0%, #6a2e4d 50%, #8a3e5d 100%)",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
    extendedDescription: "The platform automates intake and classification of incoming requests, coordinates internal pricing and performance inputs, and generates consistent, client-ready proposals while providing centralized tracking and visibility across the sales lifecycle.",
    keyFeatures: [
      {
        title: "Intelligent Request Intake",
        description: "AI-powered classification and routing of incoming RFQs, RFPs, and sales inquiries with automatic data extraction and validation.",
      },
      {
        title: "Cross-Team Coordination",
        description: "Automated workflows that coordinate pricing, technical, and delivery teams with deadline tracking and escalation management.",
      },
      {
        title: "Proposal Generation Engine",
        description: "Template-driven proposal creation with dynamic content assembly, pricing calculations, and brand-compliant formatting.",
      },
      {
        title: "Sales Pipeline Visibility",
        description: "Centralized dashboard tracking all opportunities from inquiry to close with analytics on conversion rates, response times, and team performance.",
      },
    ],
    benefits: [
      "Reduce proposal turnaround time by up to 70%",
      "Increase win rates with faster, more consistent responses",
      "Eliminate bottlenecks in internal coordination",
      "Ensure pricing accuracy and margin protection",
      "Scale sales operations without adding headcount",
      "Gain insights into proposal performance and trends",
    ],
    useCases: [
      "High-volume RFQ processing",
      "Complex proposal management",
      "Multi-product quoting",
      "Sales team coordination",
      "Bid management and tracking",
      "Customer pricing automation",
    ],
    capabilities: [
      "Sales operations automation",
      "Workflow orchestration",
      "AI-assisted intake",
      "Cross-team coordination",
      "Operational visibility",
    ],
  },
  {
    slug: "enterprise-fb-analytics-platform",
    title: "Enterprise Food & Beverage Analytics Platform",
    shortTitle: "F&B Analytics",
    tagline: "Data-driven insights for F&B operations",
    description: "A data-driven analytics platform providing leadership with unified visibility into operational consumption, compliance, and performance.",
    gradient: "linear-gradient(135deg, #3d2e1e 0%, #5d4e2e 50%, #7d6e3e 100%)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
    extendedDescription: "The solution ingests fragmented operational and financial data, applies standardization and validation logic, and delivers trusted, analytics-ready datasets for enterprise reporting and decision-making. Interactive dashboards enable trend analysis, performance benchmarking, and compliance monitoring at scale.",
    keyFeatures: [
      {
        title: "Unified Data Ingestion",
        description: "Automated collection and integration of operational, financial, and compliance data from disparate sources into a single trusted repository.",
      },
      {
        title: "Data Standardization Engine",
        description: "Intelligent data cleansing, normalization, and validation ensuring consistent, analytics-ready datasets across all business units.",
      },
      {
        title: "Interactive Dashboards",
        description: "Role-based dashboards with drill-down capabilities enabling trend analysis, performance benchmarking, and exception identification.",
      },
      {
        title: "Compliance Monitoring",
        description: "Automated tracking of regulatory requirements, certification status, and audit readiness with proactive alerting and reporting.",
      },
    ],
    benefits: [
      "Eliminate data silos with unified operational visibility",
      "Reduce reporting cycle time from weeks to hours",
      "Identify cost savings through consumption analytics",
      "Ensure compliance with automated monitoring",
      "Enable data-driven decision making at all levels",
      "Benchmark performance across locations and time periods",
    ],
    useCases: [
      "Multi-location operations reporting",
      "Food cost and consumption analysis",
      "Vendor performance tracking",
      "Compliance and certification monitoring",
      "Executive KPI dashboards",
      "Inventory and waste optimization",
    ],
    capabilities: [
      "Data engineering",
      "Analytics platforms",
      "ETL pipelines",
      "Business intelligence",
      "Enterprise reporting",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
