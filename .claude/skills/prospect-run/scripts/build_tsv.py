#!/usr/bin/env python3
"""Turn prospect rows into a tab-separated block that pastes cleanly into a spreadsheet.

This exists because hand-assembling TSV is how a stray tab inside a field shunts half a row into
the wrong column — which is invisible in the text and tedious to find once it's in the sheet.

Usage:
    python3 build_tsv.py rows.json --out paste.tsv
    python3 build_tsv.py rows.json                  # to stdout
    python3 build_tsv.py rows.json --header         # include the header row

Input JSON:
    {
      "columns": ["Date Added", "Company", "..."],
      "rows": [{"Date Added": "2026-07-25", "Company": "FS Food Group", "...": "..."}]
    }

Output has no header by default, because the sheet already has one and you paste at A2.
"""

import argparse
import json
import re
import sys


def flatten(value):
    """Tabs and newlines inside a field break the paste; everything must be one line."""
    if value is None:
        return ""
    if isinstance(value, bool):
        return "TRUE" if value else "FALSE"
    text = str(value)
    text = text.replace("\r\n", " ").replace("\r", " ").replace("\n", " ")
    text = text.replace("\t", " ")
    return re.sub(r" {2,}", " ", text).strip()


def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("infile", help="JSON file with 'columns' and 'rows'")
    ap.add_argument("--out", help="write here instead of stdout")
    ap.add_argument("--header", action="store_true", help="include the header row")
    args = ap.parse_args()

    try:
        with open(args.infile, encoding="utf-8") as fh:
            data = json.load(fh)
    except json.JSONDecodeError as exc:
        sys.exit(f"error: {args.infile} is not valid JSON — {exc}")

    columns = data.get("columns")
    rows = data.get("rows")
    if not columns or not isinstance(columns, list):
        sys.exit("error: JSON needs a non-empty 'columns' list")
    if rows is None or not isinstance(rows, list):
        sys.exit("error: JSON needs a 'rows' list")

    # Surface schema drift loudly. A silently-dropped key means a column the user expected to be
    # populated arrives empty, and they won't notice until they work the row.
    known = set(columns)
    unexpected, missing = set(), set()
    for row in rows:
        if not isinstance(row, dict):
            sys.exit("error: every entry in 'rows' must be an object")
        keys = set(row)
        unexpected |= keys - known
        missing |= known - keys

    for key in sorted(unexpected):
        print(f"warning: key {key!r} is not in 'columns' and was dropped", file=sys.stderr)
    for key in sorted(missing):
        print(f"warning: column {key!r} missing from at least one row, written as empty",
              file=sys.stderr)

    lines = []
    if args.header:
        lines.append("\t".join(flatten(c) for c in columns))
    for row in rows:
        lines.append("\t".join(flatten(row.get(c)) for c in columns))
    payload = "\n".join(lines) + "\n"

    if args.out:
        with open(args.out, "w", encoding="utf-8") as fh:
            fh.write(payload)
        print(f"wrote {len(rows)} rows × {len(columns)} columns → {args.out}", file=sys.stderr)
    else:
        sys.stdout.write(payload)


if __name__ == "__main__":
    main()
