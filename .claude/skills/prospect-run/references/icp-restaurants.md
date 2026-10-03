# ICP — US multi-unit restaurant operators

The default config for this skill. Copy this file and swap the contents to prospect a different
industry; the skill's workflow doesn't change.

## Who counts

| | |
|---|---|
| **Geography** | United States |
| **Size band** | roughly 3–15 locations |
| **Hard ceiling** | drop anything above ~18 units |
| **Type** | independent restaurant groups, multi-concept hospitality groups, and multi-unit franchisees |
| **Disqualifier** | in-house tech staff — a group with engineers or a data team already has an answer |

**Why this band.** Below 3 units there's no cross-location problem to solve yet; the owner can
hold the whole business in their head. Above roughly 20 the group starts hiring technical staff
and buying enterprise tooling, and the sale changes shape. The 3–15 window is where the operator
feels the pain acutely and has nobody internal to hand it to.

A multi-unit franchisee counts even though the brand is large — the franchisee is an independent
business with its own P&L and typically gets only the brand's own reporting, which tells them
nothing about their own portfolio.

## Tier 1 titles

A posting for any of these is the strongest available signal. Each one implies a group
centralising something that used to be handled per-store or on the side:

- **Multi-Unit Manager** / Area Manager / Multi-Unit Operations Manager
- **Catering Coordinator** / Catering Sales Manager / Director of Catering
- **Off-Premise Manager** / Off-Site Catering Manager / Director of Off-Premise
- **Area Director** / Director of Restaurant Operations / Regional Director

Adjacent titles that signal the same transition and are worth catching: multi-unit Culinary
Director, Director of Operations at a named small group, Restaurant Director.

The tell is a role that sits *above* individual store GMs. That person arrives needing to compare
locations, and almost always discovers there's no way to do it.

## Signals, in order

1. **Role opened** — hiring one of the Tier 1 titles
2. **Door opened** — new location already trading, dated source
3. **Announced** — lease signed, permit filed, under construction, opening date named
4. **Generic growth** — appears on a "companies hiring multi-unit managers" list, no specifics

## Output schema

Twelve columns, this exact order and spelling:

```
Date Added, Company, City/State, Est. Units, Signal, Signal Date, Source URL,
Contact Name, Title, LinkedIn URL, Hook, Status
```

- `Date Added` — run date, ISO (`2026-07-25`)
- `Est. Units` — integer, from the operator's own words
- `Signal` — one or two sentences, concrete and specific; include the address, investment figure,
  square footage or commission structure when the source gives it, because that detail is what
  makes the row credible later
- `Signal Date` — ISO, as precise as the source supports (`2026-06-18`, `2026-07`, `2026`)
- `Contact Name` / `Title` / `LinkedIn URL` — only from a source that names them; blank otherwise
- `Hook` — one-line LinkedIn opener referencing this company's specific signal
- `Status` — always blank, the user works this column

## Known-good rows

Useful as calibration for signal wording and hook voice.

**Tier 1.** FS Food Group, Charlotte NC, 15 units. Hiring a Director of Catering Operations —
role is 80% dedicated to running Plate Perfect Catering across 7 concepts, 2 more restaurants in
the works. Founder Frank Scibelli.
> Frank — saw you're hiring a Director of Catering Operations to own Plate Perfect across all
> seven concepts; curious how you're planning to keep catering data and restaurant P&Ls talking to
> each other as you add the next two.

**Tier 2.** El Cilantrillo, Orlando/Kissimmee FL, 4 units. Opened its 4th restaurant at Rio Pinar
Plaza in East Orlando — 4,470 sq ft on a $450K investment. Family-run across multiple generations.
Co-founder Hiram Turull.
> Hiram — congrats on the Rio Pinar opening; going from three to four rooms is usually where
> family-run reporting starts to strain. How are you handling it?

**Tier 3.** Tiki Taco, Kansas City MO, 6 units. 7th location coming at 1710 W 39th St, leases
signed for Liberty and Metro North as part of a 2026 suburban push. CEO Eric Knott.
> Eric — saw the 39th St location plus signed leases in Liberty and Metro North; doubling into the
> suburbs is exactly when unit-level reporting tends to break. How are you set up for it?

## Already covered

Companies from prior runs. Check the user's master list for the current set — this is a starting
exclusion list, not a complete one.

FS Food Group · One Off Hospitality Group · Jon & Vinny's (Carmelized Productions) · Purslane ·
Peak Restaurant Partners · ACG Texas · Fresquez Companies · MIDA Restaurant Group ·
Harmonic Hospitality Group · Chula Seafood · El Cilantrillo · La Pecora Nera ·
Tiger Soup Dumplings · Highly Likely · Amélie's French Bakery · Island Grill ·
Grumpy's Restaurant Co. · Tiki Taco · MOTO Pizza · 77 Flavors Wings & Philly ·
Rosebud Restaurants · Copper Cellar Family of Restaurants · Fresh Brothers ·
Dave's Hot Chicken (Hotchkiss Brothers, San Antonio) · Dave's Hot Chicken (Alex Humphries, MN) ·
Cozy Cafe · Little Pops NY Pizzeria · Petersen's Ice Cream · Ruby Slipper Restaurant Group ·
Blood Bros BBQ

Checked and rejected as too large — don't re-surface these: Roots Natural Kitchen (~20),
Boka Restaurant Group (20+), Flagship Restaurant Group (20+), Postino WineCafe (~25),
Jim 'N Nick's (59).
