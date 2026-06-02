# Git hooks for kim-pelham-site

This directory contains repo-local git hooks that enforce Savvy Digital Co.
brand rules at commit time.

## One-time install

Run once after cloning, or any time you switch machines:

```bash
npm run hooks:install
```

That's equivalent to:

```bash
git config core.hooksPath .githooks
```

To uninstall (use the default `.git/hooks` directory again):

```bash
git config --unset core.hooksPath
```

## What runs on each commit

### `pre-commit`
- Runs `scripts/check-em-dashes.sh --staged`
- Blocks the commit if any staged `.tsx`, `.jsx`, `.ts`, `.md`, or `.mdx`
  file in `src/` contains an em dash (`—`) or rhetorical en dash (`–`)
  in user-facing copy.
- Code comments, box-drawing characters, and JSX comments are exempt.
- See the Savvy global brand rule in `~/CLAUDE.md` and the per-client
  rule in `Pelham Group/Kim/CLAUDE.md`.

## Running the check manually

To scan the whole repo without committing:

```bash
npm run lint:em-dash
```

## Emergency override

If you must bypass the hook for a single commit (please don't):

```bash
git commit --no-verify
```

The override is logged in git's reflog. Use it only when you've verified
the apparent violation is actually a false positive that the filter
should be updated to handle.
