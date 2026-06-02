#!/usr/bin/env bash
#
# check-em-dashes.sh — Enforce the Savvy Digital Co. "no em dashes" brand rule.
#
# Scans staged files (or all source files if --all is passed) for the em dash
# character U+2014 ("—") and the rhetorical en dash U+2013 ("–") in
# user-facing copy: .tsx, .jsx, .ts, .md, .mdx files in src/.
#
# Exits 0 if clean, 1 if violations found.
#
# Usage:
#   ./scripts/check-em-dashes.sh           # check staged changes only (pre-commit mode)
#   ./scripts/check-em-dashes.sh --all     # scan the whole src/ tree
#
# Brand rule: see Kim/CLAUDE.md ⛔ NO EM DASHES. EVER.
# Replacements: comma · period · middle-dot · parens · "to" for ranges.
#
# Code comments are NOT counted as violations:
#   - Lines that begin (after leading whitespace) with //, /*, or *
#   - Lines where // appears before the em dash on the same line
#   - Lines where {/* ... — ... */} is a JSX comment containing the em dash
#   - Box-drawing characters (U+2500 range) used as ASCII art / banners

set -e

MODE="${1:---staged}"
EXIT_CODE=0
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

if [[ "$MODE" == "--all" ]]; then
  echo "Scanning all source files for em dashes..."
  TARGETS=$(find src/ -type f \( -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.md" -o -name "*.mdx" \) 2>/dev/null)
else
  echo "Scanning staged changes for em dashes..."
  TARGETS=$(git diff --cached --name-only --diff-filter=ACM 2>/dev/null | grep -E "^src/.*\.(tsx|jsx|ts|md|mdx)$" || true)
  if [[ -z "$TARGETS" ]]; then
    echo -e "${GREEN}No staged files to check.${NC}"
    exit 0
  fi
fi

VIOLATIONS=()

# is_comment_or_artwork returns 0 (true) if the given line content should be skipped.
is_comment_or_artwork() {
  local content="$1"

  # Skip lines that start (after leading whitespace) with //, /*, or *
  if echo "$content" | grep -qE "^[[:space:]]*(//|/\*|\*)"; then
    return 0
  fi

  # Skip lines containing box-drawing chars (banner / ASCII art)
  if echo "$content" | grep -q "─"; then
    return 0
  fi

  # Skip if // appears before the em dash on this line (inline trailing comment)
  if echo "$content" | grep -qE "//[^\"']*—"; then
    return 0
  fi

  # Skip JSX comments: {/* ... — ... */}
  if echo "$content" | grep -qE "\{/\*[^}]*—[^{]*\*/\}"; then
    return 0
  fi

  return 1
}

for file in $TARGETS; do
  if [[ ! -f "$file" ]]; then
    continue
  fi

  # grep -nE prints "lineno:content" for each match in the file.
  while IFS=: read -r lineno content; do
    [[ -z "$lineno" ]] && continue
    if is_comment_or_artwork "$content"; then
      continue
    fi
    VIOLATIONS+=("$file:$lineno:$content")
  done < <(grep -nE " — | – " "$file" 2>/dev/null || true)
done

if [[ ${#VIOLATIONS[@]} -eq 0 ]]; then
  echo -e "${GREEN}✓ No em dashes found in user-facing copy.${NC}"
  exit 0
fi

echo -e "${RED}✗ Em dash violations found (Savvy brand rule: NO EM DASHES, EVER):${NC}"
echo ""
for v in "${VIOLATIONS[@]}"; do
  echo -e "  ${YELLOW}${v}${NC}"
done
echo ""
echo "Total violations: ${#VIOLATIONS[@]}"
echo ""
echo -e "${YELLOW}Fix replacements:${NC}"
echo "  • Between clauses        →  ', '  (comma)"
echo "  • End-of-thought         →  '. '  (period, then sentence-case next word)"
echo "  • Metadata title         →  ' · ' (middle dot, U+00B7)"
echo "  • Numeric range          →  ' to ' (e.g. '30 to 50%')"
echo "  • Schema.org JSON name   →  ' '   (just remove)"
echo ""
echo -e "See ${YELLOW}Kim/CLAUDE.md${NC} for the full rule."
exit 1
