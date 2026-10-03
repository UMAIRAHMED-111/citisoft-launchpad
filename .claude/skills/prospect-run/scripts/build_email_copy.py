#!/usr/bin/env python3
"""Generate per-person Hook and Email Copy for an outbound list.

The point of this script is that exactly one part of the email varies per recipient: the hook.
Everything else is fixed, so a template bug is visible in a 20-row spot check rather than
discovered by a recipient. See references/email-outpost.md for the copy and hook library.

Usage:
    python3 build_email_copy.py in.csv --out out.csv
    python3 build_email_copy.py in.csv --out out.csv --sample 20   # also write a spot-check file

Input needs First Name, Last Name, Title and a company column. Everything else is optional.
Rescues an Industry column that actually holds email-verification values into `Email Status`,
which is a real shape this data arrives in and silently poisons hook selection if left alone.
"""

import argparse
import csv
import re
import sys
from collections import Counter

# Verification values that show up in a mis-used Industry column.
EMAIL_STATUS_VALUES = {
    "valid", "invalid", "unknown", "accept_all_unverifiable",
    "accept_all", "unverifiable", "risky", "catch_all", "do_not_mail",
}

FIXED_INTRO = (
    "I hope you're doing well. My name is Talha. I graduated from Cornell, and I'm building "
    "Outpost (www.outpost-us.com). We're an AI implementation firm that helps companies realize "
    "their AI goals quickly and cost effectively."
)
FIXED_PROOF = (
    "Our teams include former McKinsey, Deloitte, and startup operators, and we've already seen "
    "strong early traction with enterprises like The Princeton Review, PE firms like Shore "
    "Capital Partners, and startups like Rejigg."
)
FIXED_OFFER = (
    "We also offer a free AI audit to help you brainstorm your AI strategy and surface how your "
    "competitors are leveraging AI."
)
FIXED_CTA = "Would you be open to a quick 15-minute coffee chat sometime next week?"
SIGNOFF = "Best,\nTalha"

# Ordered: first match wins, so the most senior / most specific patterns come first.
TITLE_BUCKETS = [
    ("Founder",   r"\bfounder\b|\bco-?founder\b|\bfounding\b"),
    ("CEO",       r"\bceo\b|chief executive"),
    ("CTO",       r"\bcto\b|chief technolog|chief information|\bciso\b"),
    ("CFO",       r"\bcfo\b|chief financial"),
    ("COO",       r"\bcoo\b|chief operating"),
    ("Owner",     r"\bowner\b|\bproprietor\b"),
    ("President", r"\bpresident\b|\bchairman\b|\bchair\b"),
    ("Partner",   r"managing director|managing partner|\bpartner\b|\bprincipal\b"),
    ("Leader",    r"\bvp\b|vice president|\bdirector\b|head of|\bchief\b"),
]

HOOKS = {
    "Founder": (
        "I saw you founded {company}. Most founders I talk to have a clear sense that AI should be "
        "doing more for them and much less clarity on where to start — I'd be curious whether the "
        "harder part for you is picking the use case or actually getting something shipped."
    ),
    "CEO": (
        "I saw you're CEO at {company}. The pattern I keep running into at your level is that the "
        "AI strategy is agreed and the implementation stalls two layers down — I'd be curious "
        "whether that's familiar, or whether you're still earlier than that."
    ),
    "President": (
        "I saw you're {title} at {company}. I'd be curious where AI currently sits for you — a "
        "real line item with someone owning it, or still the thing everyone agrees is important "
        "and nobody has time to scope."
    ),
    "Owner": (
        "I saw you own {company}. Owner-operated businesses tend to get the least help with this — "
        "the tooling is all built for companies with a technology team. I'd be curious what you've "
        "tried so far and where it got stuck."
    ),
    "COO": (
        "I saw you're COO at {company}. Operations is usually where AI either pays for itself "
        "quickly or quietly dies in a pilot — I'd be curious which way it's gone for you so far."
    ),
    "CTO": (
        "I saw you're {title} at {company}. You're the one person in this conversation who doesn't "
        "need convincing AI works — so I'd be curious whether your constraint is engineering "
        "capacity or deciding which of the obvious candidates to build first."
    ),
    "CFO": (
        "I saw you're CFO at {company}. You're the one being asked to fund AI work on the thinnest "
        "business cases anyone's presented in years — I'd be curious how you're currently deciding "
        "what clears the bar."
    ),
    "Partner": (
        "I saw you're {title} at {company}. I'd be curious whether AI is showing up for you mainly "
        "as a diligence question on the companies you look at, or as something you're implementing "
        "internally."
    ),
    "Leader": (
        "I saw you're {title} at {company}. People in your seat usually have the clearest view of "
        "where AI would actually help and the least room to go build it — I'd be curious what's "
        "top of your list and what's blocking it."
    ),
    "Other": (
        "I saw you're {title} at {company}. I'd be curious where AI sits on your priority list "
        "right now, and whether the blocker is picking the right use case or finding the capacity "
        "to implement it."
    ),
}

# Replaces the middle clause once Industry is populated. Keyed by lowercase substring.
INDUSTRY_TENSION = {
    "health": "with patient data in the mix, compliance review tends to gate anything that touches a model",
    "life scien": "with patient data in the mix, compliance review tends to gate anything that touches a model",
    "pharma": "with patient data in the mix, compliance review tends to gate anything that touches a model",
    "financ": "in financial services the blocker is usually explainability and audit trail rather than accuracy",
    "bank": "in banking the blocker is usually explainability and audit trail rather than accuracy",
    "insur": "in insurance the blocker is usually explainability and audit trail rather than accuracy",
    "manufactur": "most of the useful data is trapped in machine logs and an ERP that was never built to be queried",
    "industrial": "most of the useful data is trapped in machine logs and an ERP that was never built to be queried",
    "real estate": "project data tends to live in email and PDFs, so nothing aggregates across deals",
    "construct": "project data tends to live in email and PDFs, so nothing aggregates across jobs",
    "legal": "billable-hour economics make automation feel like cannibalising your own revenue",
    "law": "billable-hour economics make automation feel like cannibalising your own revenue",
    "consult": "billable-hour economics make automation feel like cannibalising your own revenue",
    "retail": "in retail small gains in forecasting and returns move real margin",
    "commerce": "in e-commerce small gains in forecasting and returns move real margin",
    "educat": "procurement cycles and data-privacy rules slow anything student-facing to a crawl",
    "private equity": "the interesting version is portfolio-wide, where the same problem repeats across companies",
    "venture": "the interesting version is portfolio-wide, where the same problem repeats across companies",
    "logistic": "routing is the easy part and exception handling is where the cost actually sits",
    "transport": "routing is the easy part and exception handling is where the cost actually sits",
    "supply chain": "routing is the easy part and exception handling is where the cost actually sits",
    "software": "you've likely already tried, so the gap is usually capacity rather than capability",
    "saas": "you've likely already tried, so the gap is usually capacity rather than capability",
    "technolog": "you've likely already tried, so the gap is usually capacity rather than capability",
}

OUT_COLUMNS = [
    "Date of search", "First Name", "Last Name", "Title", "Company", "Email Address",
    "Email Status", "Industry", "LinkedIn (Sales Navigator) profile link",
    "Hook", "Email Copy", "Email Copy (previous)", "Status",
]

# Paragraphs are separated by a blank line, so the body arrives with real paragraph spacing
# rather than as one wall of text. Sheets preserves these newlines inside a quoted cell.
PARA_BREAK = "\n\n"


def norm(s):
    """Collapse whitespace. Leading spaces in merge fields render visibly in sent mail."""
    return re.sub(r"\s+", " ", (s or "")).strip()


def pick_column(fieldnames, *candidates):
    """Match a column tolerantly — these files arrive with trailing spaces in headers."""
    lookup = {(f or "").strip().lower(): f for f in fieldnames}
    for cand in candidates:
        hit = lookup.get(cand.strip().lower())
        if hit is not None:
            return hit
    return None


def title_bucket(title):
    t = norm(title).lower()
    for name, pattern in TITLE_BUCKETS:
        if re.search(pattern, t):
            return name
    return "Other"


def industry_tension(industry):
    key = norm(industry).lower()
    if not key:
        return None
    for needle, tension in INDUSTRY_TENSION.items():
        if needle in key:
            return tension
    return None


def build_hook(title, company, industry):
    company = norm(company) or "your company"
    title = norm(title) or "a leader"
    bucket = title_bucket(title)
    hook = HOOKS[bucket].format(company=company, title=title)

    tension = industry_tension(industry)
    if tension:
        # Swap the generic middle clause for the sector-specific one, keeping opener and ask.
        parts = hook.split(" — ", 1)
        if len(parts) == 2:
            opener = parts[0].split(". ")[0]
            ask = parts[1]
            hook = f"{opener}. In your world {tension} — {ask}"
    return hook, bucket


def build_email(first_name, hook):
    greeting = f"Hi {norm(first_name)}," if norm(first_name) else "Hi there,"
    paragraphs = [greeting, FIXED_INTRO, FIXED_PROOF, hook, FIXED_OFFER, FIXED_CTA, SIGNOFF]
    # Each block is already whitespace-normalised, so no paragraph can arrive with a leading
    # space — that artifact is visible in sent mail and was present in 551 rows of the input.
    return PARA_BREAK.join(p.strip() for p in paragraphs)


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("infile")
    ap.add_argument("--out", required=True)
    ap.add_argument("--sample", type=int, default=0,
                    help="also write <out>.sample.txt with N emails spread across title buckets")
    args = ap.parse_args()

    with open(args.infile, newline="", encoding="utf-8", errors="replace") as fh:
        reader = csv.DictReader(fh)
        if not reader.fieldnames:
            sys.exit("error: input has no header row")
        src = reader.fieldnames
        col = {
            "date": pick_column(src, "Date of search", "Date"),
            "first": pick_column(src, "First Name", "First"),
            "last": pick_column(src, "Last Name", "Last"),
            "title": pick_column(src, "Title", "Job Title"),
            "company": pick_column(src, "Company", "Company Name", "Organization"),
            "email": pick_column(src, "Email Address", "Email"),
            "industry": pick_column(src, "Industry"),
            "linkedin": pick_column(src, "LinkedIn (Sales Navigator) profile link", "LinkedIn", "LinkedIn URL"),
            "status": pick_column(src, "Status"),
            "prev_copy": pick_column(src, "Email Copy", "Email copy"),
        }
        for required in ("first", "title", "company"):
            if not col[required]:
                sys.exit(f"error: could not find a '{required}' column in: {src}")
        rows = list(reader)

    stats = Counter()
    out_rows = []
    for row in rows:
        raw_industry = norm(row.get(col["industry"])) if col["industry"] else ""

        # A mis-used Industry column holding verification values would otherwise drive hook choice.
        if raw_industry.lower() in EMAIL_STATUS_VALUES:
            email_status, industry = raw_industry.lower(), ""
            stats["industry_rescued_to_email_status"] += 1
        elif raw_industry.startswith("http"):
            email_status, industry = "", ""
            stats["industry_held_a_url_discarded"] += 1
        else:
            email_status, industry = "", raw_industry
            if industry:
                stats["industry_kept"] += 1

        hook, bucket = build_hook(row.get(col["title"]), row.get(col["company"]), industry)
        stats[f"bucket:{bucket}"] += 1
        if industry_tension(industry):
            stats["hook_industry_specific"] += 1

        out_rows.append({
            "Date of search": norm(row.get(col["date"])) if col["date"] else "",
            "First Name": norm(row.get(col["first"])),
            "Last Name": norm(row.get(col["last"])) if col["last"] else "",
            "Title": norm(row.get(col["title"])),
            "Company": norm(row.get(col["company"])),
            "Email Address": norm(row.get(col["email"])) if col["email"] else "",
            "Email Status": email_status,
            "Industry": industry,
            "LinkedIn (Sales Navigator) profile link": norm(row.get(col["linkedin"])) if col["linkedin"] else "",
            "Hook": hook,
            "Email Copy": build_email(row.get(col["first"]), hook),
            # Kept so the new copy can be diffed against what was already sent, and so nothing
            # that took work to produce is destroyed by a regeneration.
            "Email Copy (previous)": (row.get(col["prev_copy"]) or "").strip() if col["prev_copy"] else "",
            "Status": norm(row.get(col["status"])) if col["status"] else "",
        })

    with open(args.out, "w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=OUT_COLUMNS, quoting=csv.QUOTE_MINIMAL)
        writer.writeheader()
        writer.writerows(out_rows)

    if args.sample:
        seen, picks = Counter(), []
        per_bucket = max(1, args.sample // len(HOOKS))
        for row in out_rows:
            b = title_bucket(row["Title"])
            if seen[b] < per_bucket:
                seen[b] += 1
                picks.append(row)
            if len(picks) >= args.sample:
                break
        path = args.out + ".sample.txt"
        with open(path, "w", encoding="utf-8") as fh:
            for row in picks:
                fh.write(f"{'=' * 78}\n{row['Title']} @ {row['Company']}"
                         f"{'  [' + row['Industry'] + ']' if row['Industry'] else ''}\n"
                         f"{'=' * 78}\n{row['Email Copy']}\n\n")
        print(f"spot check  → {path} ({len(picks)} emails)")

    print(f"wrote {len(out_rows)} rows → {args.out}")
    for key in sorted(stats):
        print(f"  {stats[key]:>6}  {key}")


if __name__ == "__main__":
    main()
