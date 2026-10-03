# Outpost cold email — template and hook library

The outbound motion this supports: Talha, Cornell alum, founder of Outpost (an AI implementation
firm), emailing other Cornell alumni who run companies.

## The one-variable rule

The email has six parts. Five are **fixed** and one **varies**. Keeping it to one variable is what
makes the campaign maintainable: you can QA a hook library of twenty lines, but you cannot QA
2,500 individually-written emails, and a template where three things vary produces combinations
nobody has ever read.

```
Hi {First Name},                                              ← merge

I hope you're doing well. My name is Talha. I graduated from  ← fixed
Cornell, and I'm building Outpost (www.outpost-us.com). We're
an AI implementation firm that helps companies realize their
AI goals quickly and cost effectively.

Our teams include former McKinsey, Deloitte, and startup       ← fixed
operators, and we've already seen strong early traction with
enterprises like The Princeton Review, PE firms like Shore
Capital Partners, and startups like Rejigg.

{Hook}                                                         ← VARIES

We also offer a free AI audit to help you brainstorm your AI    ← fixed
strategy and surface how your competitors are leveraging AI.

Would you be open to a quick 15-minute coffee chat sometime     ← fixed
next week?

Best,
Talha
```

Note the fixed blocks lead with no whitespace. A leading space before "I hope" is a merge artifact
that renders visibly in the sent mail — worth checking after any regeneration.

## What makes a hook work here

The weak version of this hook just restates the merge fields:

> I saw that you're the CEO at AMS Galaxy USA, and I'd love to learn more about your current AI
> priorities.

The recipient knows they're the CEO of their own company. Restating it proves only that you have a
spreadsheet. The same is true of the generic variant in the existing sheet — *"Leading X as CEO,
you're no stranger to the strategic decisions that drive growth"* — which could be sent to anyone
with a job.

A hook earns the reply by naming a tension the recipient actually recognises from their seat, and
asking something they know the answer to and you don't. The test: **could this sentence be sent
unchanged to someone in a different role at a different company?** If yes, it isn't a hook.

Pattern that works: *acknowledge the specific position they're in → name a real failure mode → ask
which of two things is the blocker.* Offering two options is doing the recipient a favour; it's
easier to pick one than to compose an answer from nothing, and either choice tells you where they
are.

## Hook library, by seniority

The base layer. Use when industry is unknown — which is most rows until the Industry column is
enriched. `{Company}` merges.

**Founder**
> I saw you founded {Company}. Most founders I talk to have a clear sense that AI should be doing
> more for them and much less clarity on where to start — I'd be curious whether the harder part
> for you is picking the use case or actually getting something shipped.

**CEO**
> I saw you're CEO at {Company}. The pattern I keep running into at your level is that the AI
> strategy is agreed and the implementation stalls two layers down — I'd be curious whether that's
> familiar, or whether you're still earlier than that.

**President**
> I saw you're President at {Company}. I'd be curious where AI currently sits for you — a real
> line item with someone owning it, or still the thing everyone agrees is important and nobody has
> time to scope.

**Owner**
> I saw you own {Company}. Owner-operated businesses tend to get the least help with this — the
> tooling is all built for companies with a technology team. I'd be curious what you've tried so
> far and where it got stuck.

**COO / Chief Operating Officer**
> I saw you're COO at {Company}. Operations is usually where AI either pays for itself quickly or
> quietly dies in a pilot — I'd be curious which way it's gone for you so far.

**CTO / Chief Technology Officer**
> I saw you're CTO at {Company}. You're the one person in this conversation who doesn't need
> convincing AI works — so I'd be curious whether your constraint is engineering capacity or
> deciding which of the obvious candidates to build first.

**CFO / Chief Financial Officer**
> I saw you're CFO at {Company}. You're the one being asked to fund AI work on the thinnest
> business cases anyone's presented in years — I'd be curious how you're currently deciding what
> clears the bar.

**Managing Director / Managing Partner / Partner**
> I saw you're {Title} at {Company}. I'd be curious whether AI is showing up for you mainly as a
> diligence question on the companies you look at, or as something you're implementing internally.

**VP / Director / Head of**
> I saw you're {Title} at {Company}. People in your seat usually have the clearest view of where AI
> would actually help and the least room to go build it — I'd be curious what's top of your list
> and what's blocking it.

**Fallback (any other title)**
> I saw you're {Title} at {Company}. I'd be curious where AI sits on your priority list right now,
> and whether the blocker is picking the right use case or finding the capacity to implement it.

## Industry overlays

Once the Industry column is populated, these replace the middle sentence of the seniority hook and
raise reply rates, because they name a constraint specific to the sector. Combine as:
*seniority opener → industry tension → ask.*

| Industry | Tension to name |
|---|---|
| Healthcare / Life sciences | patient data and compliance review gating anything that touches a model |
| Financial services / Insurance | model explainability and audit trails as the actual blocker, not accuracy |
| Manufacturing / Industrial | data trapped in machine logs and ERP that was never built to be queried |
| Real estate / Construction | project data living in email and PDFs, so nothing aggregates across jobs |
| Legal / Professional services | billable-hour economics making automation feel like cannibalising revenue |
| Retail / E-commerce | demand forecasting and returns, where small accuracy gains move real margin |
| Education | procurement cycles and data-privacy rules slowing anything student-facing |
| Private equity / VC | portfolio-wide implementation, where the same problem repeats across companies |
| Logistics / Transportation | routing and exception handling, where the exceptions are the whole cost |
| SaaS / Technology | an in-house team that has already tried, so the gap is capacity not capability |

## Generating the copy

`scripts/build_email_copy.py` assembles `Hook` and `Email Copy` for every row from this library.
It writes the hook to its own column as well as into the email body, so hooks can be reviewed and
hand-edited without reading 2,500 full emails.

Keep `Hook` as a visible column. It's the field that determines whether the campaign works, and
burying it inside the email body means nobody ever audits it.

## Before sending

- **Suppress `invalid` email statuses.** They bounce, and bounce rate is what gets a sending
  domain throttled.
- **`accept_all_unverifiable` is a judgment call** — the domain accepts everything, so the address
  may or may not exist. Send to these separately from your verified list so one doesn't poison the
  other's deliverability stats.
- **Sales Navigator links aren't clickable** without a Sales Navigator seat. Rows carrying
  `/sales/lead/` URLs need a public `/in/` URL resolving before anyone can use them for LinkedIn
  outreach.
- **Spot-check 20 generated emails across title buckets** before a send. Template bugs are
  systematic — they hit every row or none.
