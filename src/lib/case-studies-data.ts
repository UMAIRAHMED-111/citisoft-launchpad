export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  region: string;
  clientSummary: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: CaseStudyMetric[];
  stack: string[];
  industrySlug: string;
  image: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hotel-finance-payments-automation",
    title: "Payments, invoices, and card operations across a 400+ property portfolio",
    sector: "Hospitality · Finance",
    region: "United States · Enterprise",
    clientSummary:
      "US hotel management company — 400+ properties, 79K+ rooms, multi-brand portfolio including Marriott, Hilton, Westin, and independents.",
    summary:
      "High-volume finance automation for a major US hotel management company — invoice ingestion, payment batches, reconciliation, and card operations with a full audit trail.",
    challenge:
      "Invoices arrived from hundreds of properties into a central finance function. Payment batches, approvals, and reconciliation were handled manually against an ERP and document system that were not cleanly integrated. P-Card reporting, chargebacks, and retrieval requests arrived from several banks in different formats and were reviewed by hand.",
    approach: [
      "Invoice ingestion that extracts required fields and routes each invoice into the correct approval path by property, vendor, and amount",
      "Payment batch processing integrated with the ERP under secure authentication, with every step logged",
      "Reconciliation that ties payments back to invoices and flags mismatches with reasons attached",
      "Scheduled pipelines for P-Card reporting, chargebacks, retrieval requests, and fraud monitoring across banks and processors",
    ],
    outcome:
      "Finance moved from reviewing everything to reviewing only exceptions. Chargebacks and retrieval requests are picked up on arrival, with a complete audit trail on every payment and card action.",
    metrics: [
      { value: "400+", label: "Properties on one payment lifecycle" },
      { value: "Daily", label: "Exceptions instead of month-end surprises" },
      { value: "Full", label: "Trace on every payment and card action" },
    ],
    stack: [
      "Azure",
      "Azure Functions",
      "Data Factory",
      "Power Automate",
      "UiPath",
      "SQL Server",
      "Python",
      "ERP integration",
    ],
    industrySlug: "hospitality",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "The situation",
        body: [
          "Central finance was absorbing invoices, payment batches, and card activity from hundreds of properties without clean system integration. Manual review made errors easy to miss and slow to catch.",
          "On the card side, P-Card reporting, chargebacks, and retrieval requests arrived from multiple banks and processors in inconsistent formats.",
        ],
      },
      {
        heading: "What we delivered",
        body: [
          "End-to-end finance automation: document intake, approval routing, ERP-integrated payment batches, reconciliation with reason codes, and scheduled card operations pipelines that raise only exceptions.",
          "Audit-ready reporting throughout — who approved what, when, and what the system did on its own — so finance could adopt automation with confidence.",
        ],
      },
    ],
  },
  {
    slug: "hotel-fb-portfolio-analytics",
    title: "Food & beverage analytics across dozens of luxury properties",
    sector: "Hospitality · Analytics",
    region: "United States · Enterprise",
    clientSummary:
      "Same hotel management company — luxury and full-service properties with independent supplier mixes and F&B operations.",
    summary:
      "A portfolio analytics layer that standardises supplier and product data so leadership can compare consumption, supplier performance, and programme compliance across properties.",
    challenge:
      "Leadership needed to compare F&B consumption, supplier performance, and programme compliance across the portfolio. No two suppliers described the same product the same way, so every portfolio-level question became a spreadsheet project.",
    approach: [
      "Ingestion of raw supplier and financial data from every property, landed as received then cleaned in layers",
      "Standardisation of product, unit, and volume information with matching rules and a review queue for unresolved cases",
      "Compliance logic in the data layer for approved suppliers, programmes, and off-contract spend",
      "Executive data models by property, brand, supplier, and programme with Power BI on top",
    ],
    outcome:
      "Consumption trends, supplier performance, and programme compliance became dashboard questions rather than commissioned reports. The standardisation layer improves monthly as new supplier files land.",
    metrics: [
      { value: "Dozens", label: "Properties on one set of definitions" },
      { value: "Brand", label: "And property-level views from one model" },
      { value: "Monthly", label: "Mapping review instead of one-off cleanups" },
    ],
    stack: [
      "Azure Data Factory",
      "SQL Server",
      "Python",
      "Power BI",
      "Power Query",
      "Medallion architecture",
    ],
    industrySlug: "hospitality",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "The situation",
        body: [
          "Supplier invoices and property financials existed, but product definitions were inconsistent across the portfolio — the same item could appear as a description, a code, or a different unit.",
        ],
      },
      {
        heading: "What we delivered",
        body: [
          "A medallion-style pipeline with product standardisation as the core investment, plus compliance logic and executive models that let leadership answer portfolio questions without a new report each time.",
        ],
      },
    ],
  },
  {
    slug: "hotel-sales-proposals-reporting",
    title: "Sales enquiries to priced proposals, and automated report distribution",
    sector: "Hospitality · Revenue",
    region: "United States · Enterprise",
    clientSummary:
      "Multi-property sales teams and a leadership / asset management group dependent on weekly and monthly performance data.",
    summary:
      "Two workflows for the same hotel group: turning inbound RFQs into data-backed proposals, and delivering validated performance reports to the right stakeholders on schedule.",
    challenge:
      "Sales enquiries required a day or two of manual property identification, data pulls, and proposal writing. Weekly and monthly industry reports had to reach the correct stakeholders securely — late or incorrect delivery was not acceptable.",
    approach: [
      "Email intake with property identification and automatic retrieval of that property's performance data",
      "Internal rate coordination with system-generated proposals — people decide the rate; the system handles everything around it",
      "Report ingestion, validation against master property data, stakeholder batching, and secure delivery",
      "Discrepancy detection and a full audit log of every delivery",
    ],
    outcome:
      "Proposals returned the same day with consistent figures. Reports reached the right stakeholders on schedule, with mismatches flagged before send rather than after.",
    metrics: [
      { value: "Same day", label: "Proposals instead of a day or two" },
      { value: "Zero", label: "Manual steps in the weekly report cycle" },
      { value: "Logged", label: "Every report, every recipient, every time" },
    ],
    stack: [
      "Power Automate",
      "Azure Functions",
      "SQL Server",
      "Python",
      "Email parsing",
      "Document generation",
    ],
    industrySlug: "hospitality",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "The situation",
        body: [
          "Inbound RFQs and recurring leadership reports were both carried by hand. Speed and consistency suffered on proposals; distribution risk was the bigger issue on reporting.",
        ],
      },
      {
        heading: "What we delivered",
        body: [
          "An enquiry-to-proposal workflow and a validated report distribution system with audit logging — both designed so people stay in the decision loop while the system removes the surrounding labour.",
        ],
      },
    ],
  },
  {
    slug: "restaurant-data-platform-ai-agent",
    title: "A single warehouse and AI agent for an 80+ location chain",
    sector: "Restaurants · Data + AI",
    region: "United States · Multi-location",
    clientSummary:
      "US restaurant chain with 80+ locations, multiple ordering and POS systems, and an operations team that needed daily answers — not more reports.",
    summary:
      "A unified AWS data warehouse with a Claude agent in Discord, evaluation guardrails, and daily automations — reducing manual reporting time and incorrect agent answers.",
    challenge:
      "Ordering and POS data lived across systems (including Olo) with inconsistent definitions. Leadership and ops needed one place for figures, plus an AI interface the team would actually use day to day.",
    approach: [
      "Ingestion from every ordering and POS system into a single AWS warehouse — including webhooks, APIs, and browser automation where APIs fell short",
      "A check-level data model so customer, item, and order mean the same thing regardless of source",
      "Power BI on tuned SQL, plus a Claude agent in Discord returning figures alongside plain-English answers",
      "An evaluation suite and guardrails before the agent reached operators, plus daily ops automations",
    ],
    outcome:
      "The agent is in daily use by the operations team. Manual reporting time dropped, incorrect answers fell by a measured 35%, and the platform became a reference case for other chains.",
    metrics: [
      { value: "40%", label: "Reduction in manual reporting time" },
      { value: "35%", label: "Reduction in incorrect agent answers" },
      { value: "80+", label: "Locations on one warehouse" },
    ],
    stack: ["AWS", "SQL", "Power BI", "Claude", "Discord", "Olo", "Python"],
    industrySlug: "restaurants",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "The situation",
        body: [
          "Data was fragmented across ordering and POS systems. Olo alone required multiple approaches — webhooks for live orders, export APIs for history, and browser automation for reports the API does not expose.",
        ],
      },
      {
        heading: "What we delivered",
        body: [
          "A production warehouse and agent stack with evaluation-driven quality work as a first-class deliverable — not an afterthought. Automations for 86'd items, morning ops reports, and overnight complaint triage sit on the same layer.",
        ],
      },
    ],
  },
  {
    slug: "restaurant-catering-crm-automation",
    title: "Catering order extraction and CRM automation",
    sector: "Restaurants · Operations",
    region: "United States · Multi-location",
    clientSummary:
      "Same US restaurant chain — catering, kitchen, and marketing teams running HubSpot re-engagement across 12,592 contacts.",
    summary:
      "Partner-portal and email catering extraction into the warehouse, kitchen prep automation, and a HubSpot re-engagement rebuild that eliminated ~110 manual tasks a day.",
    challenge:
      "Catering orders arrived through partner portals and email and were re-keyed by hand. HubSpot re-engagement was generating around 110 tasks a day, leaving no time for actual outreach.",
    approach: [
      "Scheduled portal extraction on Playwright and AWS Fargate into the warehouse",
      "Email routing so catering orders enter the ordering workflow automatically",
      "Catering calculator and prep-sheet automation for kitchen quantities",
      "Automated HubSpot re-engagement and lifecycle segmentation across 12,592 contacts",
    ],
    outcome:
      "Orders flow into the warehouse and kitchen without re-keying. The 110-task daily HubSpot burden was replaced with an automated re-engagement flow.",
    metrics: [
      { value: "110", label: "Daily manual CRM tasks eliminated" },
      { value: "12,592", label: "Contacts re-segmented by lifecycle" },
      { value: "0", label: "Orders re-keyed by hand" },
    ],
    stack: ["Python", "Playwright", "AWS Fargate", "HubSpot API", "Claude", "SQL"],
    industrySlug: "restaurants",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "The situation",
        body: [
          "Catering was the fastest-growing revenue line and the most manual. CRM re-engagement had become a task factory rather than a growth process.",
        ],
      },
      {
        heading: "What we delivered",
        body: [
          "End-to-end catering intake and kitchen prep automation, plus a HubSpot lifecycle rebuild informed by real platform constraints (search caps, index lag) discovered during delivery.",
        ],
      },
    ],
  },
  {
    slug: "surety-bond-platforms",
    title: "Surety bond platforms processing 10K+ transactions per day",
    sector: "Insurance · SaaS",
    region: "United States · SaaS",
    clientSummary:
      "US surety agency product team, followed by a multi-tenant platform for agencies with live carrier, payments, and CRM integrations.",
    summary:
      "Production surety platforms spanning carrier integration, payments, CRM sync, and multi-tenant architecture — built for agencies that need workflow and payments end to end.",
    challenge:
      "Surety bonds were still largely handled through paper, email, and phone calls. Agencies needed a system that handled workflow and payments end to end — not a form builder with a payment button.",
    approach: [
      "Carrier integration with Liberty Mutual, Stripe payment flows, and HubSpot CRM synchronisation",
      "Reliability work for 10K+ transactions a day with repeatable Azure deployments via GitHub Actions and Terraform",
      "Multi-tenant architecture with role-based access control",
      "Automated billing and live insurer integrations so bonds move from application to issuance on-platform",
    ],
    outcome:
      "A production platform handling 10K+ transactions a day, with live carrier, payments, and CRM integrations — and a multi-tenant product architecture proven in real agency workflows.",
    metrics: [
      { value: "10K+", label: "Transactions a day in production" },
      { value: "Live", label: "Carrier, payments, and CRM integrations" },
      { value: "Full", label: "Application-to-issuance workflow" },
    ],
    stack: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "HubSpot",
      "Azure",
      "Terraform",
    ],
    industrySlug: "insurance-surety",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "The situation",
        body: [
          "Agencies wanted digital surety that covered underwriting workflow, payments, and carrier handoff — not disconnected tools stitched together by email.",
        ],
      },
      {
        heading: "What we delivered",
        body: [
          "Production-grade surety platforms with carrier and payment integrations, multi-tenant access control, and deployment discipline suited to high daily transaction volume.",
        ],
      },
    ],
  },
  {
    slug: "ap-ar-reconciliation-agent",
    title: "AP/AR reconciliation agent into QuickBooks and Dynamics 365",
    sector: "Finance · Agents",
    region: "United States · Mid-market",
    clientSummary:
      "Mid-sized US business running QuickBooks and Dynamics 365, with a small finance team and a high volume of vendor invoices.",
    summary:
      "OCR and Claude-powered three-way matching that posts clean matches automatically and routes exceptions with reasons — daily, not at month end.",
    challenge:
      "Invoices arrived as PDFs and scans in a wide range of vendor formats. Matching to purchase orders and payments was done by hand, and mismatches were often only discovered at month end.",
    approach: [
      "OCR plus Claude structuring to convert any invoice into a consistent field set",
      "Three-way matching across PO, invoice, and payment using the finance team's real tolerance rules",
      "Clean matches post directly into QuickBooks and Dynamics 365; exceptions land in a queue with reasons",
      "Invoice classification that routes documents to the correct ledger and approver before matching",
    ],
    outcome:
      "Finance reviews mismatches with a reason attached rather than searching for them — the same exceptions pattern as hotel finance automation, extended with language models where rigid rules would fail.",
    metrics: [
      { value: "Daily", label: "Exceptions list instead of month-end review" },
      { value: "3-way", label: "PO, invoice, payment on every match" },
      { value: "2", label: "Systems of record, one workflow" },
    ],
    stack: ["Python", "Claude", "OCR", "QuickBooks API", "Dynamics 365", "AWS"],
    industrySlug: "finance-ops",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "The situation",
        body: [
          "Vendor invoice formats varied widely. Exact matching flagged too much; month-end discovery made exceptions expensive.",
        ],
      },
      {
        heading: "What we delivered",
        body: [
          "An exceptions-first reconciliation agent that encodes practical finance tolerance rules, posts clean matches automatically, and keeps people focused on judgement cases.",
        ],
      },
    ],
  },
  {
    slug: "uk-accounting-workflow-automation",
    title: "Workflow automation for a UK accounting and services firm",
    sector: "Professional Services · Automation",
    region: "United Kingdom",
    clientSummary:
      "UK services firm delivering accounting and operational automation for clients — where adoption matters as much as the build.",
    summary:
      "Multi-year delivery of workflow automation with UiPath, Power Automate, and Playwright, plus Microsoft 365 Copilot work — focused on processes clients would actually run every day.",
    challenge:
      "Clients needed repeatable automation across finance and operations workflows. The automation itself was rarely the difficult part; getting teams to adopt and trust it was.",
    approach: [
      "Scoped short, outcome-led automations rather than large specification-led programmes",
      "Built with UiPath, Power Automate, and Playwright against real client systems and approval paths",
      "Designed for handover — documentation and reusable components so clients are not dependent on a single engineer",
      "Paired delivery with adoption support, including Microsoft 365 Copilot where it fit the workflow",
    ],
    outcome:
      "Durable client automations that survived handover — with the lesson reinforced that process adoption, not tool selection, determines whether automation sticks.",
    metrics: [
      { value: "2 yrs", label: "Delivery with the services firm" },
      { value: "Daily", label: "Workflows designed to run without heroics" },
      { value: "Owned", label: "By the client after handover" },
    ],
    stack: ["UiPath", "Power Automate", "Playwright", "Microsoft 365 Copilot"],
    industrySlug: "professional-services",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop",
    sections: [
      {
        heading: "The situation",
        body: [
          "Accounting and services clients needed operational workflows to run every day without manual carrying. Tools were available; trusted adoption was not.",
        ],
      },
      {
        heading: "What we delivered",
        body: [
          "Practical RPA and workflow automation with an emphasis on handover, documentation, and client ownership — the same delivery posture we bring to US hospitality and restaurant work.",
        ],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudiesByIndustry(industrySlug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.industrySlug === industrySlug);
}
