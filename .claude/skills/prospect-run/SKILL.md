---
name: prospect-run
description: Run a signal-based outbound prospecting pass — find companies showing a live buying signal (hiring a role that implies the pain you sell into, a new location or site, funding, expansion news), dedupe against the user's existing list, then deliver sheet-ready rows plus a review page with a per-prospect outreach opener. Use this whenever the user wants to find prospects or leads, build or add to a prospect list, research companies matching an ICP, do outbound or cold-outreach research, find operators or franchisees of a particular size, write LinkedIn openers tied to a company's recent news, or set up a recurring prospecting run — and also when a scheduled prospecting routine fires. Ships with a restaurant-operator ICP as the default and swaps to other industries by pointing at a different config file.
---

# Prospect run

A prospecting pass is not a company-list exercise. Plenty of companies fit an ICP; very few are
in a buying window this week. The job is to find the ones where something just happened that
makes the pain you sell into *urgent and visible*, and to hand the user a row they can act on
inside five minutes.

Everything below serves that: find the signal, prove it, rank by how much it means, and write
the opener so the user doesn't have to.

## The shape of a run

1. Load the ICP config — who counts, which signals matter, where to look
2. **Dedupe first** — read the user's existing list and build the exclusion set
3. Hunt signals, tier by tier, strongest first
4. Verify each company against the ICP from primary sources
5. Rank by signal strength
6. Deliver: rows in the user's schema, a tab-separated paste block, and a review page

Read `references/icp-restaurants.md` for the default ICP. If the user is prospecting a different
industry, ask which config to use (or write a new one in the same format — it's a short file, and
having it on disk means the next run is consistent with this one).

## Dedupe before you research, not after

This ordering matters more than it looks. Researching first and filtering later burns the run
rediscovering companies the user already has, and on a mature list that's most of what you'll
find. Build the exclusion set first, then every search is spent on new ground.

Prefer the user's master list as the source of truth — it's the thing they actually work from,
it holds every prospect ever added, and reading one column of it stays cheap no matter how long
it gets. Fall back to a prior run's artifact only when the list isn't reachable.

When you fall back to reading a cumulative artifact, ask explicitly for the complete company list
*including any ledger section*. Long pages get truncated on fetch, and a silent truncation here
produces duplicates with no error to warn anyone — which is exactly the failure the dedupe step
exists to prevent.

## Signal tiers

Rank by what the signal *implies about intent*, not by how exciting the news is.

**Tier 1 — a role was opened.** The company is hiring for a job whose existence implies your
problem. A 9-location group posting its first Off-Premise Manager is telling you, in public, that
off-premise has outgrown whoever was handling it on the side. Someone is now being *paid* to solve
that, and they arrive with a mandate and no tooling. This is the strongest signal available and it
outranks any amount of press coverage.

**Tier 2 — a door opened.** A new site is already trading, with a dated source. The operational
strain is present tense, not hypothetical.

**Tier 3 — announced.** Lease signed, permit filed, under construction. Real, but you're reaching
them before it bites. Still worth having; often the best time to talk, since they're not yet
consumed by the opening.

**Tier 4 — generic growth.** "Listed among companies hiring multi-unit managers," a funding round
with no operational detail. Thin. Include it when the ICP fit is strong, label it honestly, and
never let it crowd out a Tier 1.

A signal needs a **date** and a **named source URL** to count at all. "They seem to be growing"
is not a signal.

## The ceiling rule

Whatever target number the user gives is a **ceiling, not a quota**.

The supply of genuinely new, well-sourced signals is finite and much smaller than it feels when
you start. A target of 30 a day across a national market will be met for a few days and then
won't be — the pool gets consumed. An agent told to "find 30" will meet the number by reaching:
stale signals, companies outside the size band, aggregator pages in place of named employers.
The user gets their count and a worse list, and because every row looks plausible, they won't
notice until they start sending.

So: report the real number. Nine well-sourced prospects is a good run and the correct output.
Say what the supply looked like when it comes in light, and suggest a less frequent cadence if
the yield stays low — signals accumulate over a week even when they don't over a day.

## Never invent a person

Contact fields get filled only from a source that names the person, and a LinkedIn URL only when
you have seen that actual profile. Otherwise leave them blank.

This is not pedantry about citations. A guessed LinkedIn URL resolves to a *real different human*,
and the user sends them a message about a restaurant they don't own. A plausible-but-wrong contact
name is worse than an empty cell, because an empty cell is visibly empty and a wrong name gets
used. Blank is a usable state. Wrong is not.

Expect sparse contact coverage and say so plainly rather than apologising for it. On a typical run
you'll name a person for a minority of rows — usually founders quoted in local coverage — and find
a verifiable profile URL for fewer. That's the honest ceiling of free sources. If the user has a
contact-data tool connected, use it; if it's on a plan that blocks people search, tell them that's
the upgrade that would move the number, and don't guess in the meantime.

## Verify against the ICP

Take size from the operator's own words — the article, their locations page, their careers page —
not from a directory estimate, which lags badly on small fast-moving companies. A group that was
6 units two years ago may be 20 now, and 20 is a different buyer with a different stack.

Drop what's clearly outside the band. For an edge case, include it with an explicit flag rather
than silently stretching the band, so the user can judge: a row marked *"~18 units, above range"*
is useful; the same row unmarked quietly corrupts their definition of the ICP.

## Writing hooks

The Hook column is a ready-to-send opener, one line, written as the user. It earns its place by
being unsendable-by-anyone-else: it names the specific thing that just happened.

What works: reference the signal concretely, then ask an operational question that the signal makes
natural. No pitch, no "I help companies like yours," no compliment padding.

> Frank — saw you're hiring a Director of Catering Operations to own Plate Perfect across all
> seven concepts; curious how you're planning to keep catering data and restaurant P&Ls talking
> to each other as you add the next two.

> Saw the 39th St location plus signed leases in Liberty and Metro North; doubling into the
> suburbs is exactly when unit-level reporting tends to break. How are you set up for it?

Both name the signal, both ask something the recipient actually knows the answer to, neither
mentions a product. Use the contact's first name when you have a verified one, and don't when
you don't — "Hi there" reads worse than just opening with the observation.

## Delivering the run

Match the user's existing column schema **exactly**, including order and spelling, since the output
gets pasted into a live sheet. The default schema is in the ICP config. Leave status/stage columns
blank — those are the user's to work.

Build the paste block with `scripts/build_tsv.py` rather than assembling tabs by hand:

```bash
python3 scripts/build_tsv.py rows.json --out paste.tsv
```

It takes `{"columns": [...], "rows": [{...}]}`, strips tabs and newlines out of every field, warns
on unknown or missing keys, and writes tab-separated lines with no header — the shape that pastes
cleanly into a spreadsheet. Doing this by hand is how a stray tab shunts half a row into the wrong
column, which is tedious to spot after the fact.

Then publish a review page. See `references/artifact-spec.md` for what it needs to contain and the
page-size discipline that keeps a cumulative page fetchable over months.

**If the user's sheet tool can read but not write** — common with read-only Drive connectors — the
paste block *is* the delivery mechanism. Don't create a new spreadsheet per run as a workaround;
that leaves a trail of orphan files and splits the record. One master sheet the user pastes into,
one review page, is the arrangement that stays clean.

## Email campaigns over an existing list

A prospect run finds people. A campaign writes to a list you already have — same discipline, but
the unit of work is the message rather than the row.

The rule that keeps a campaign maintainable: **exactly one part of the email varies per
recipient.** Everything else is fixed. You can review a hook library of twenty lines; you cannot
review 2,500 individually-written emails, and a template with three moving parts generates
combinations nobody has ever read. Keep the varying part in its own visible column so it can be
audited without reading every body.

The hook is what determines whether the campaign works, and the failure mode is that it merely
restates the merge fields — *"I saw you're the CEO at Acme"* tells the recipient only that you
have a spreadsheet. The test for any hook: could this sentence go unchanged to someone in a
different role at a different company? If yes, it isn't a hook. What works is naming a tension
they recognise from their seat and asking which of two things is the blocker, since picking one is
easier than composing an answer.

See `references/email-outpost.md` for a worked template and a hook library keyed by seniority and
industry, and `scripts/build_email_copy.py` to generate the copy across a list.

**Audit the list before writing any copy.** Columns in a working outbound sheet drift from their
headers, and the damage is silent. Real example: an `Industry` column that actually held
email-verification values (`valid`, `invalid`, `accept_all_unverifiable`) for half the rows —
which would have driven hook selection off garbage had anything keyed on it. Check what each
column *contains*, not what it's named, and when you find a mismatch rescue the data into a
correctly-named column rather than overwriting it. Flag it to the user; they usually don't know.

Two things to check before any send: suppress addresses that verified `invalid`, because bounce
rate is what gets a sending domain throttled; and keep `accept_all`/unverifiable addresses in a
separate send so their deliverability doesn't contaminate the verified list.

## Recurring runs

When the user wants this on a schedule, the prompt you store needs to carry the dedupe source, the
ceiling rule, and the no-fabrication rule explicitly — a fired session starts cold with none of the
conversation that produced them.

Two things to get right, because both fail silently:

- **Pin the review page's URL in the stored prompt** and republish to it. A fresh session that
  doesn't pass an explicit URL mints a new page every run, so the user's bookmark goes stale and
  the history scatters.
- **Check the schedule's connector grants.** A routine created without them runs without the
  tools it needs to read the master list, which quietly drops it to the fallback dedupe path or
  breaks the run outright. Tell the user if the grant is missing and what to do about it.

Convert the user's local time correctly and say the UTC cron you used, so a timezone slip is
visible rather than discovered a week later.

## Search tactics

Read `references/sources.md` before starting the hunt. The short version, because it's the
difference between a productive run and an hour of nothing:

**Job-board landing pages are a trap.** Searching a title plus a job site returns the site's
*aggregate* page — salary averages, "top companies hiring," a list of other searches. These name
almost no employers. Push to individual postings, to niche boards that name the company in the
title, and to recruiter listings that describe the group.

**Local news is the richest vein for expansion signals**, because small operators don't issue
press releases — a city paper or neighborhood outlet covers them. Search the ordinal phrasing
operators use about themselves ("fourth location", "sixth location") rather than the word
"expansion".

Run searches in parallel batches. Each one is cheap, most come back thin, and serial searching is
the main thing that makes a run drag.
