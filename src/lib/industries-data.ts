export type Industry = {
  slug: string;
  name: string;
  description: string;
  caseStudySlug?: string;
};

export const industries: Industry[] = [
  {
    slug: "hospitality",
    name: "Hospitality & Hotels",
    description:
      "Finance automation, F&B portfolio analytics, and revenue workflows across large multi-brand property portfolios.",
    caseStudySlug: "hotel-finance-payments-automation",
  },
  {
    slug: "restaurants",
    name: "Restaurants & Multi-location Ops",
    description:
      "Unified data platforms, AI agents, catering extraction, and CRM automation for high-volume restaurant chains.",
    caseStudySlug: "restaurant-data-platform-ai-agent",
  },
  {
    slug: "insurance-surety",
    name: "Insurance & Surety",
    description:
      "Bond lifecycle platforms, carrier integrations, and compliance-grade workflows where auditability is non-negotiable.",
    caseStudySlug: "surety-bond-platforms",
  },
  {
    slug: "finance-ops",
    name: "Finance Operations",
    description:
      "AP/AR reconciliation, invoice structuring, and exceptions-first automation into systems of record like QuickBooks and Dynamics.",
    caseStudySlug: "ap-ar-reconciliation-agent",
  },
  {
    slug: "industrial",
    name: "Industrial Manufacturing",
    description:
      "Engineered-to-order quoting, RFQ intake, and technical sales workflows built around how specialists actually work.",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    description:
      "Workflow automation and adoption-led delivery for accounting and services firms where process change is the hard part.",
    caseStudySlug: "uk-accounting-workflow-automation",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
