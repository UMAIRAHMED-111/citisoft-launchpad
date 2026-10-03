# Source playbook

Which searches return named companies and which waste the run. Learned the hard way — the first
four searches of the original run returned almost nothing usable.

## The aggregator trap

Searching `"Multi-Unit Manager" restaurant job 2026` returns the *landing pages* of Indeed,
ZipRecruiter, Glassdoor and SimplyHired. Those pages are built for SEO, not for you: they serve
salary averages ("the average yearly pay for multi-unit restaurant managers is $50,112"), generic
role descriptions, and links to adjacent searches. A page like that names maybe one or two
employers in passing, buried in a sidebar.

You can't fix this by searching the same way again. Change the shape of the query:

- **Name the niche board.** `culinaryagents "Catering Sales Manager" 2026` works because Culinary
  Agents puts the hiring company in the page title, so it surfaces as a result you can read
  directly.
- **Search the posting's own language.** Postings describe the group: `"growing restaurant group"
  "Area Director" 2026`, `"multi-unit" "Director of Operations" restaurant group hiring`.
- **Use recruiter listings.** Goodwin Recruiting, One Haus, BostonChefs and regional hospitality
  recruiters describe the client group in detail even when the name is withheld — and often name it.
- **Mine the aggregate pages for names, then chase them.** When a landing page does mention "top
  companies hiring," those names are a lead list. Search each one individually.

## Boards that name the company

| Source | Why it works |
|---|---|
| **Culinary Agents** | Hospitality-specific; company name in the title; rich postings that list sister concepts |
| **BostonChefs** | Regional, names the group |
| **Goodwin Recruiting / One Haus** | Recruiter listings with detailed group descriptions |
| **Workstream** | Used by small multi-unit operators directly; postings name the concepts |
| **Company careers pages** | Once you have a name, this confirms unit count and other open roles |

Indeed and ZipRecruiter *individual postings* are fine. It's their search-landing pages that are
worthless.

## Local news: the richest vein

Small operators don't issue press releases. A 5-unit group opening its 6th location gets covered
by the city paper, a neighborhood outlet, or a local food blog — and that coverage usually names
the owner, the address, the investment, and the unit count, which is every field you need.

**Search the ordinal phrasing operators use about themselves.** They say "our fourth location,"
not "we are expanding":

```
restaurant group "fourth location" OR "fifth location" opening 2026
family owned restaurant "sixth location" 2026 [city]
"third location" restaurant opening [month] 2026
```

Outlets that reliably cover this, worth naming in queries:

- **Patch** — hyperlocal, covers small-chain openings nobody else does
- **Axios Local** — city newsletters with monthly openings roundups
- **CultureMap** (Houston, Austin, Dallas) — strong on family-owned groups, names owners
- **WhatNow** (Atlanta, Phoenix, Houston, Jacksonville) — dedicated to openings
- **City magazines** — Phoenix, St. Louis, Seattle Met, Charlotte; monthly openings/closings columns
- **Business journals and daily records** — Jax Daily Record, Shaw Local; permit-level detail,
  square footage, construction timelines
- **The Infatuation / Eater city guides** — new-openings lists, good for catching the name

Monthly "openings and closings" roundups are especially efficient: one page can yield several
qualifying groups with dates attached.

## Cross-checks

- **State restaurant associations** — member directories, and board-of-directors announcements
  which name executives at member groups
- **Franchise trade press** — Franchise Times, Restaurant Dive, QSR, FastCasual, Nation's
  Restaurant News. Good for multi-unit franchisee news: who committed to how many units, who's
  building where
- **The operator's own locations page** — the authoritative unit count, and the thing to trust
  over any directory

## Verifying a person

Searching `[company] founder owner` usually surfaces either a local-news profile that names them
or their actual LinkedIn in the results. When the LinkedIn URL appears in search results, that's a
verified URL and you can use it. When it doesn't, leave the field blank — don't construct one from
the name.

Business-data directories (RocketReach, Datanyze, ZoomInfo, The Org) show up constantly in these
searches. Treat anything behind their paywall as unverified: the previews are frequently stale or
wrong about who currently holds a role.

## Pace

Run searches in parallel batches of three or four. They're cheap, most come back thin, and serial
searching is what makes a run take an hour instead of fifteen minutes. Expect to discard most
results — a productive run is a lot of searches with a low hit rate, not a few clever ones.
