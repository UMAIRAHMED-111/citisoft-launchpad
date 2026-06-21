# Specialized ICP Landing Page — RFQ-to-Quote AI for Niche Industrial Manufacturers

**Date:** 2026-06-21
**Route:** `/products/sales-proposal-rfq-platform` (unchanged URL)
**Source of truth for copy:** `docs/SP1 - Ideal Client Profile (ICP).docx`

## Goal

Turn the existing generic product detail page for `sales-proposal-rfq-platform` into a
bespoke, conversion-focused landing page aimed at CitiSoft's Ideal Client Profile:
US-based, founder/family-owned, engineered- or configure-to-order industrial
manufacturers (sealing systems, valves, pumps, springs, power transmission, hydraulics,
machining) that run on legacy ERP + spreadsheets + email and quote technical RFQs by hand.

The page must explain the problem and the solution with visual flow diagrams, use
industrial imagery, and read as a specialized destination a prospect can land on. A new
"announcement" insight is added and prioritized (featured-first) that links to this page.

## Decisions (locked)

- **Dedicated custom page**, not an extension of the shared template. Other 5 products
  keep the generic `ProductDetail.tsx`.
- **Flow diagrams** are hand-built React + inline SVG, themed with the existing
  `--citisoft-*` gradient tokens and the site's reveal-on-scroll pattern. No new deps.
- **Imagery** is themed Unsplash (industrial), matching the existing codebase pattern.
- **Insight** is added first in the array (renders first), category "Announcement",
  with a styled "Featured/New" treatment on the first card, and its detail-page CTA
  points to `/products/sales-proposal-rfq-platform`.

## Architecture

### New files
- `src/pages/RfqIndustrialLanding.tsx` — the bespoke ICP page (composes Navbar,
  ScrollProgress, Footer like the other detail pages).
- `src/components/landing/rfq/RfqPipelineDiagram.tsx` — animated SVG showing the
  current painful RFQ path vs. the AI-assisted path. Accepts a `variant: "problem" | "solution"`
  prop so both sections reuse one component.
- `src/components/landing/rfq/LandExpandDiagram.tsx` — Pilot → Measure → Expand funnel
  with the four pillars fed by one shared engine.

### Changed files
- `src/pages/ProductDetail.tsx` — early-return `<RfqIndustrialLanding />` when
  `slug === "sales-proposal-rfq-platform"`. (Keeps routing/links identical.)
- `src/lib/insights-data.ts` — prepend the announcement insight with a CTA to the page.
- `src/components/landing/Insights.tsx` — light "Featured/New" accent on the first card
  when it is the announcement (badge + accent ring), no structural change to the grid.

### Reused, unchanged
- `Navbar`, `Footer`, `ScrollProgress`, `Button`, lucide icons, the IntersectionObserver
  reveal pattern, `--citisoft-*` / `--dark-bg` theme tokens.

## Page sections (RfqIndustrialLanding.tsx)

1. **ICP Hero** — dark industrial backdrop, headline "AI Quoting & RFQ Automation, built
   for niche industrial manufacturers", audience chips, dual CTA (Book a 30-day pilot →
   `/#contact`; See how it works → anchor scroll to the flow section).
2. **"Is this you?" qualifier band** — firmographic fit + qualifying signals as a checklist
   card grid (11–200 employees, founder/family-owned, 20+ yrs, US industrial corridors,
   RFQ/quote-driven, legacy ERP + spreadsheets, knowledge in a few senior staff).
3. **The Problem — `RfqPipelineDiagram variant="problem"`** — unstructured RFQ → manual
   interpretation → pricing lookup → days of turnaround → deals go cold. "Why it hurts:
   the first credible quote often wins the order."
4. **The Solution — `RfqPipelineDiagram variant="solution"`** — RFQ in any format → AI
   Quoting Agent (extract → cross-reference catalog & pricing → flag gaps) → review-ready
   quote → engineer approves → sent in minutes. Value stats: days→minutes, 2–3× capacity,
   higher win rates, senior engineers freed for high-value work.
5. **Four solution pillars** — RFQ-to-Quote (entry point, highlighted), Technical Knowledge
   & Application-Support Agent, Order Processing & Back-Office, Aftermarket Service &
   Failure Intelligence. Each: Problem → Our Solution → Value, with an industrial photo.
6. **Land & Expand — `LandExpandDiagram`** — Pilot → Measure → Expand; one shared engine
   (document understanding + retrieval over the client's catalog/history + workflow
   automation) so each added module deploys faster and cheaper.
7. **Pilot CTA** — 30-day paid pilot on a single product line, success = one agreed metric
   (quote turnaround time or quotes processed per week). CTA → `/#contact`.

## Insight (insights-data.ts, first element)

- slug: `citisoft-launches-rfq-automation-for-industrial-manufacturers`
- category: `Announcement`
- date: sorts first (e.g. "Jun 20, 2026")
- cta: `{ label: "Explore the platform", href: "/products/sales-proposal-rfq-platform" }`
- content: 3 short sections announcing the focused offering for niche industrial
  manufacturers, drawn from the ICP framing (problem, the AI quoting agent, land & expand).

### Insights.tsx featured treatment
First card, when `insight.category === "Announcement"` (or index 0), gets a "New" badge and
an accent ring/border using `--citisoft-light`. The existing `InsightCard` `cta.href` may be
internal (`/products/...`) — the detail page already renders the CTA button; verify it links
internally (use `<Link>` for internal hrefs, `<a target=_blank>` only for external).

## Out of scope (YAGNI)
No new dependencies, no CMS, no NAICS/sales-targeting tables (internal artifacts, not
prospect-facing), no changes to the other 5 products, no backend.

## Verification
- `npm run build` (or `bun run build`) compiles with no TS errors.
- Route `/products/sales-proposal-rfq-platform` renders the new page; the other product
  slugs still render the generic template.
- Insights section shows the announcement first with featured styling; its detail CTA
  navigates to the landing page.
