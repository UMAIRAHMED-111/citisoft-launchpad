# Review page spec

The page the user actually works from. A prospect list is scanned and operated, not read
top-to-bottom, so this is information design: surface what needs attention, encode state in form
as well as text, and make the one action per row (copy the hook) one click.

Load the `artifact-design` skill before building it.

## What it needs

**A paste block at the top of each run's section.** A button that copies that run's rows as
tab-separated values in the schema's exact column order, no header. This is the delivery
mechanism when the user's sheet tool can't write. Tell them where to paste (`select A2`).

**Summary tiles.** Total found, a count per signal tier, and how many rows have a named contact.
The contact count matters because it's usually low and the user should see that as a fact about
the run rather than discovering it row by row.

**Tier sections, strongest first,** each with a one-line explanation of why that tier ranks where
it does. The explanation is load-bearing: it's what lets the user trust the ordering instead of
re-deriving it.

**One row per prospect,** carrying: rank number, company, city/state, unit count, the signal in
full, the signal date, a link to the source, the contact (or a visible *"not verified"* — absence
should read as absence, not as an empty gap), and the hook in its own block with a copy button.

Rank numbering is worth having here because the content genuinely is a ranking — the number
encodes signal strength, not decoration.

**Tier filters.** Toggles to show and hide tiers, so the user can work Tier 1 first and ignore the
rest until they've burned through it.

**A closing note on how to read the run.** Specifically: that contact columns are deliberately
partial and why, that unit counts come from the operator's own words, that flagged rows sit outside
the band, and that the status column is theirs. This is where the run's honesty lives — without it
sparse contact data looks like a bug.

## Visual direction

Nothing stops you choosing differently, but the constraints that matter: digits that line up want
`tabular-nums`; a per-row severity stripe keyed to tier reads faster than a text label; semantic
tier colors must be distinct from the page's accent hue; and both light and dark themes need to
work, defined as tokens on `:root` so the viewer's toggle can override the media query.

Avoid cards in a grid. These rows carry a lot of text and want full width.

## Page-size discipline for cumulative pages

A page that accumulates 30 rows a day becomes multiple megabytes within a couple of months —
slow to open, and crucially too long to fetch reliably, which breaks the dedupe step that depends
on reading it.

So a cumulative page keeps two zones:

- **Full rows for the most recent ~10 runs.** Newest at the top.
- **A `Covered ledger` at the bottom** for everything older: company names only, comma-separated,
  grouped by run date. When a run ages out of the window, delete its rows and append its names
  here.

The ledger is append-only — never drop names from it, because it's the long-term dedupe memory.
Names only is what keeps it viable: 8,000 company names is a couple of hundred kilobytes, where
8,000 full rows is megabytes.

## Republishing

A cumulative page must keep one URL. Republish by passing that URL explicitly; a session that
doesn't will mint a new page and scatter the history. Keep the favicon and visual design stable
across runs so the page stays recognisable as the same artifact.
