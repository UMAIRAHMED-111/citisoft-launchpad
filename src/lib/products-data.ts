import {
  ShieldCheck,
  Bot,
  ReceiptText,
  Wallet,
  FileSignature,
  Layers,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
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
    icon: ShieldCheck,
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
    icon: Bot,
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
    icon: ReceiptText,
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
    icon: Wallet,
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
    icon: FileSignature,
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
    slug: "talos-restaurant-data-layer",
    title: "Talos — One Data Layer for Your Entire Restaurant",
    shortTitle: "Talos",
    icon: Layers,
    tagline: "One data layer for your whole restaurant. Just ask.",
    description: "Talos connects every system you already run into a single data layer — then lets you ask questions in plain English, right inside the tools your team already uses.",
    gradient: "linear-gradient(135deg, #0e3a3a 0%, #11605a 50%, #14807a 100%)",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop",
    extendedDescription: "Running a restaurant means juggling a dozen tools that don't talk to each other — POS, delivery apps, scheduling, reviews, catering, team chats. Talos unifies all of them into a single data layer for your business, then lets you just ask, in plain English, inside Slack, WhatsApp, Teams and more. Real answers in seconds, across every tool and every location — no new dashboards, no software to replace, live in about 30 days.",
    keyFeatures: [
      {
        title: "Unified Data Layer",
        description: "Talos connects every system you already run — POS, delivery apps, scheduling, reviews, catering, team chats — into one single source of truth for your whole business.",
      },
      {
        title: "Ask in Plain English",
        description: "No queries, no dashboards. Just ask questions like 'How did we do this weekend?' or 'Which delivery app is costing us the most?' and get real answers in seconds.",
      },
      {
        title: "Lives Where Your Team Works",
        description: "Talos sits inside the tools your team already uses — Slack, WhatsApp, Teams and more — so there's nothing new to learn and nothing to log into.",
      },
      {
        title: "Sits On Top of Everything",
        description: "No software to replace and no rip-and-replace migration. Talos layers on top of your existing stack and goes live in about 30 days.",
      },
    ],
    benefits: [
      "Stop being the glue between disconnected tools",
      "Catch problems in seconds instead of days too late",
      "See which channels and locations are actually profitable",
      "Answers across every tool and every location, instantly",
      "No new dashboards and no software to replace",
      "Live in about 30 days, on top of what you already use",
    ],
    useCases: [
      "Multi-unit restaurant operations",
      "Weekend and daily performance check-ins",
      "Delivery-channel profitability analysis",
      "Staffing and scheduling gaps",
      "Catering and review monitoring",
      "Cross-location reporting in plain English",
    ],
    capabilities: [
      "Data unification",
      "Conversational analytics",
      "POS & delivery integrations",
      "Slack / WhatsApp / Teams",
      "Multi-location operations",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
