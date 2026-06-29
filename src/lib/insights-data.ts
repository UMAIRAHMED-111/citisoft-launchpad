export type InsightSection = {
  heading?: string;
  body: string[];
};

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: InsightSection[];
  cta?: {
    label: string;
    href: string;
  };
};

const SURETYOS_URL = "https://suretyos.citisoftsolutions.com/";
const SURETYOS_CTA = { label: "Visit SuretyOS", href: SURETYOS_URL };

export const insights: Insight[] = [
  {
    slug: "introducing-talos-one-data-layer-for-your-restaurant",
    title: "Introducing Talos: One Data Layer for Your Entire Restaurant",
    excerpt:
      "Restaurants run on a dozen tools that don't talk to each other. Talos connects every system you already use into a single data layer — then lets you just ask, in plain English, right inside Slack, WhatsApp and Teams.",
    category: "Announcement",
    date: "Jun 24, 2026",
    readTime: "4 min read",
    author: "Citisoft Solutions",
    image: "https://i.ytimg.com/vi/YppdfHvaDOA/maxresdefault.jpg",
    cta: {
      label: "Explore Talos",
      href: "/talos",
    },
    content: [
      {
        body: [
          "Running a restaurant means juggling a dozen tools that don't talk to each other — POS, delivery apps, scheduling, reviews, catering, team chats. So you become the glue: pulling numbers by hand, stitching together spreadsheets, and catching problems days too late. Today we're introducing Talos to change that.",
          "Talos connects every system you already run into a single data layer for your business — then lets you just ask, in plain English, right inside the tools your team already uses: Slack, WhatsApp, Teams and more.",
        ],
      },
      {
        heading: "Just ask — across every tool and every location",
        body: [
          "\"How did we do this weekend?\" \"Which channel is actually most profitable?\" \"Is anyone short-staffed tomorrow?\" \"Which delivery app is costing us the most?\" Talos gives real answers, in seconds, across every tool and every location — no queries and no new dashboards to learn.",
          "Because the answers come from a unified data layer rather than a single connected app, they reflect your whole operation at once instead of one silo at a time.",
        ],
      },
      {
        heading: "No rip-and-replace, live in about 30 days",
        body: [
          "Talos sits on top of everything you already use — there are no new dashboards, no software to replace, and no painful migration. It layers onto your existing stack and goes live in about 30 days.",
          "Once your data is unified, what you can build on top of it is limitless. Talos — one data layer for your whole restaurant. Just ask.",
        ],
      },
    ],
  },
  {
    slug: "citisoft-launches-rfq-automation-for-industrial-manufacturers",
    title:
      "Announcing AI Quoting & RFQ Automation for Niche Industrial Manufacturers",
    excerpt:
      "CitiSoft is bringing custom AI agents to engineered- and configure-to-order manufacturers — turning hand-built quotes into a minutes-long, review-ready workflow. Here's who it's for and how the land-and-expand model works.",
    category: "Announcement",
    date: "Jun 20, 2026",
    readTime: "4 min read",
    author: "Citisoft Solutions",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&auto=format&fit=crop",
    cta: {
      label: "Explore the platform",
      href: "/products/sales-proposal-rfq-platform",
    },
    content: [
      {
        body: [
          "Niche industrial manufacturers — the specialized firms that design, build and service sealing systems, valves, pumps, springs, power transmission and precision components — run on something no software has captured: the judgment of a few experienced engineers. Their sales are technical and quote-driven, their systems are legacy ERP, spreadsheets and email, and every inbound RFQ is interpreted by hand. Today we're announcing a focused offering built specifically for them.",
          "CitiSoft now delivers custom AI agents and workflow automation for engineered- and configure-to-order manufacturers, starting with the workflow where the return is fastest and easiest to measure: RFQ-to-Quote automation.",
        ],
      },
      {
        heading: "The problem we set out to solve",
        body: [
          "Inbound RFQs arrive as unstructured emails, spec sheets and drawings. An engineer or inside-sales rep manually interprets each one — checking dimensions, materials, operating conditions and compatibility — before pulling pricing and drafting a quote. That consumes anywhere from thirty minutes to several hours per quote and creates a persistent backlog.",
          "In technical B2B, the first credible quote often wins the order. Slow turnaround means deals go cold or move to faster competitors, while expensive engineering time is spent on repetitive work instead of complex, high-margin jobs.",
        ],
      },
      {
        heading: "An AI quoting agent, then the whole value chain",
        body: [
          "Our quoting agent ingests an RFQ in any format, extracts the requirements, cross-references the client's own catalog and pricing rules, flags missing or ambiguous information, and produces a review-ready quote for an engineer to approve and send — compressing turnaround from days to minutes.",
          "From there the same engine — document understanding, retrieval over the client's catalog and history, and workflow automation — extends into technical knowledge support, order processing, and aftermarket failure intelligence. We start with a fixed-scope, 30-day paid pilot on a single product line, prove the ROI, and expand as trust compounds.",
        ],
      },
    ],
  },
  {
    slug: "introducing-suretyos-operating-system-for-digital-surety",
    title: "Introducing SuretyOS: The Operating System for Digital Surety",
    excerpt:
      "From bond intake to issuance, SuretyOS unifies the entire surety lifecycle on a single platform — automating underwriting workflows, approvals, and compliance so teams move faster without sacrificing control.",
    category: "Product",
    date: "Jun 12, 2026",
    readTime: "5 min read",
    author: "Citisoft Solutions",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&auto=format&fit=crop",
    cta: SURETYOS_CTA,
    content: [
      {
        body: [
          "Surety has always been a business of trust, paperwork, and precision. But the systems supporting it have rarely kept pace with the complexity of modern operations. Underwriters juggle disconnected tools, compliance teams chase audit trails across spreadsheets, and every bond passes through a maze of manual handoffs. SuretyOS was built to change that.",
          "SuretyOS is an operating system for digital surety — a single platform that unifies the entire bond lifecycle, from intake and underwriting to issuance, amendments, and renewals. Instead of stitching together point solutions, surety teams get one connected environment where every workflow, rule, and record lives in the same place.",
        ],
      },
      {
        heading: "One platform, the whole lifecycle",
        body: [
          "Most surety operations are fragmented by design — a CRM here, an underwriting tool there, a document store somewhere else. SuretyOS collapses that fragmentation. Bond requests enter the system, move through configurable underwriting workflows, and emerge as issued, fully documented policies without ever leaving the platform.",
          "Because every step is captured in one system, leadership finally gets a real-time view of what's in flight, what's stuck, and what's ready to issue.",
        ],
      },
      {
        heading: "Built for control, not just speed",
        body: [
          "Automation is only valuable in surety if it preserves governance. SuretyOS pairs workflow automation with built-in approval routing, role-based controls, and complete audit trails — so faster processing never means weaker oversight.",
          "The result is a platform that lets surety teams scale their volume without scaling their risk.",
        ],
      },
    ],
  },
  {
    slug: "automating-bond-issuance-days-to-minutes",
    title: "Automating Bond Issuance: Cutting Turnaround from Days to Minutes",
    excerpt:
      "Manual surety processing is slow and error-prone. We break down how configurable rules and workflow orchestration in SuretyOS compress issuance timelines while keeping every decision fully auditable.",
    category: "Surety",
    date: "Jun 5, 2026",
    readTime: "6 min read",
    author: "Citisoft Solutions",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&auto=format&fit=crop",
    cta: SURETYOS_CTA,
    content: [
      {
        body: [
          "Ask any surety professional where time disappears, and the answer is almost always the same: the handoffs. A bond request waits in an inbox. An approval sits unread. A document gets re-keyed from one system into another. None of these steps are hard — but together they turn what should be a minutes-long process into days.",
          "SuretyOS attacks this problem directly by replacing manual handoffs with orchestrated workflows.",
        ],
      },
      {
        heading: "Rules that do the routing",
        body: [
          "At the heart of fast issuance is a configurable business-rules engine. Instead of a human deciding where each request goes, SuretyOS evaluates the bond against defined criteria — amount thresholds, risk tiers, obligee requirements — and routes it automatically to the right path.",
          "Straightforward bonds can move to instant issuance. Complex ones escalate to the right underwriter with full context attached. Nothing waits in a queue because someone forgot to forward it.",
        ],
      },
      {
        heading: "Auditable by default",
        body: [
          "Speed without traceability is a liability. Every automated decision in SuretyOS is logged — what rule fired, who approved what, and when. When a regulator or auditor asks how a bond was issued, the answer is one click away.",
          "That combination — automated routing plus complete audit trails — is what turns multi-day turnaround into minutes without introducing new risk.",
        ],
      },
    ],
  },
  {
    slug: "compliance-by-design-audit-trails-in-every-workflow",
    title: "Compliance by Design: Audit Trails Built Into Every Workflow",
    excerpt:
      "In regulated surety operations, traceability isn't optional. See how SuretyOS embeds compliance controls and complete audit trails directly into policy and bond lifecycle events.",
    category: "Compliance",
    date: "May 28, 2026",
    readTime: "4 min read",
    author: "Citisoft Solutions",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop",
    cta: SURETYOS_CTA,
    content: [
      {
        body: [
          "Compliance is often treated as something you add on top of a process — a review step, a checklist, a periodic audit. In high-stakes surety operations, that approach is fragile. Controls that live outside the workflow are the first things to break under pressure.",
          "SuretyOS takes a different stance: compliance is designed into the workflow itself, not bolted on afterward.",
        ],
      },
      {
        heading: "Every event leaves a record",
        body: [
          "Policy intake, amendments, approvals, renewals, cancellations — every lifecycle event in SuretyOS is captured with a timestamp, an actor, and the context behind it. There is no separate logging step to remember, because logging is intrinsic to how the platform records work.",
          "This means audit readiness is a continuous state, not a quarterly scramble.",
        ],
      },
      {
        heading: "Controls that travel with the work",
        body: [
          "Role-based permissions, approval thresholds, and segregation-of-duties rules are enforced at the workflow level. A user can't skip a required approval because the platform won't let the work advance without it.",
          "When compliance is structural, teams spend less time proving they followed the rules — and more time doing the work.",
        ],
      },
    ],
  },
  {
    slug: "scaling-surety-operations-without-scaling-headcount",
    title: "Scaling Surety Operations Without Scaling Headcount",
    excerpt:
      "Growth shouldn't mean linear hiring. We explore how API-driven automation in SuretyOS lets carriers and agencies handle higher bond volumes with the same lean teams.",
    category: "Surety",
    date: "May 20, 2026",
    readTime: "5 min read",
    author: "Citisoft Solutions",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop",
    cta: SURETYOS_CTA,
    content: [
      {
        body: [
          "For most surety operations, growth has a hidden tax: every increase in bond volume seems to demand a proportional increase in staff. More bonds mean more data entry, more approvals to chase, more reconciliation. Left unchecked, headcount becomes the ceiling on how much business you can take on.",
          "SuretyOS breaks that linear relationship between volume and labor.",
        ],
      },
      {
        heading: "Automation absorbs the volume",
        body: [
          "The repetitive, rules-based work that consumes most of a team's day — routing, validation, document generation — is exactly the work automation handles best. As volume climbs, the platform absorbs the additional load without additional people.",
          "Teams shift from processing bonds to managing exceptions, where their judgment actually adds value.",
        ],
      },
      {
        heading: "An API-driven core",
        body: [
          "Because SuretyOS is built on a modern, API-driven architecture, it connects cleanly to the systems around it — carriers, agencies, and third-party services exchange data without manual re-entry.",
          "That connectivity is what lets a lean team operate at a scale that would otherwise require a much larger one.",
        ],
      },
    ],
  },
  {
    slug: "ai-assisted-intake-conversational-automation-triage",
    title: "AI-Assisted Intake: Letting Conversational Automation Do the Triage",
    excerpt:
      "Our conversational automation platform interprets incoming requests, extracts key data, and routes them to the right workflow — with human-in-the-loop controls for the cases that need a second look.",
    category: "AI & Automation",
    date: "May 12, 2026",
    readTime: "6 min read",
    author: "Citisoft Solutions",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop",
    content: [
      {
        body: [
          "The first touch in any operation — the moment a request arrives — is where time and accuracy are most often lost. Requests come in unstructured: an email, a form, a message. Someone has to read it, understand what's being asked, pull out the relevant details, and decide where it should go. Multiply that across thousands of inquiries and the intake desk becomes a bottleneck.",
          "Our conversational automation platform turns that bottleneck into an automated first step.",
        ],
      },
      {
        heading: "Understanding, not just keyword matching",
        body: [
          "Using AI-assisted interpretation, the platform reads incoming requests the way a person would — identifying intent, extracting key fields, and classifying the request type. It doesn't just look for keywords; it understands what the requester actually needs.",
          "From there, it routes the request to the right workflow automatically, with the relevant data already structured and attached.",
        ],
      },
      {
        heading: "Humans where they matter",
        body: [
          "Full automation isn't the goal — the right balance is. The platform is built with human-in-the-loop controls, escalating ambiguous or high-stakes cases to a person while handling the routine ones end to end.",
          "Cost-aware AI usage keeps the economics sensible, so automation scales without runaway expense.",
        ],
      },
    ],
  },
  {
    slug: "getting-ahead-of-e-invoicing-mandates",
    title: "Getting Ahead of e-Invoicing Mandates Before the Deadline",
    excerpt:
      "Digital tax and e-invoicing rules are tightening worldwide. Here's how a compliance-grade platform automates validation and regulatory submission so you stay ahead of every mandate.",
    category: "RegTech",
    date: "May 3, 2026",
    readTime: "5 min read",
    author: "Citisoft Solutions",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&auto=format&fit=crop",
    content: [
      {
        body: [
          "Across more and more jurisdictions, e-invoicing is shifting from best practice to legal requirement. Tax authorities now expect structured, validated invoices submitted through official channels — often in real time. For organizations still running on manual or legacy processes, these mandates arrive as a hard deadline with real penalties attached.",
          "The good news: getting ahead of them is a solvable problem with the right platform.",
        ],
      },
      {
        heading: "Validation before submission",
        body: [
          "The most common cause of rejected submissions is bad data. A compliance-grade platform validates every invoice against regulatory requirements before it's ever sent — catching errors early, reporting them clearly, and routing them for correction.",
          "That front-loaded validation is what keeps submission queues clean and deadlines met.",
        ],
      },
      {
        heading: "Submission and status, automated",
        body: [
          "Beyond validation, the platform automates the submission itself — sending structured invoices to the relevant authority, handling acknowledgments, and tracking compliance status on a single dashboard.",
          "Instead of scrambling at each new mandate, organizations transition once to a standardized, regulation-ready workflow and stay ahead of whatever comes next.",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((insight) => insight.slug === slug);
}
