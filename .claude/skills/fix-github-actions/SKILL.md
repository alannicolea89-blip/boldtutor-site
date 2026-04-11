---
name: fix-github-actions
description: >
  Check GitHub Actions for failures on this repo, fetch the full logs, diagnose
  the root cause, fix it in the codebase, commit, push, and watch the new run to
  confirm it passes. Use when the user says "github action failed", "CI is broken",
  "fix the build", "deployment failed", or asks to investigate a failing workflow.
tools: Bash, Read, Edit, Write, Glob, Grep
---

# Fix GitHub Actions

Diagnose and fix failing GitHub Actions workflows for this repo using the `gh` CLI.

## Repo details

- Repo: `alannicolea89-blip/boldtutor-site`
- Branch: `main`
- Stack: Astro 6 + Tailwind v4, deployed to GitHub Pages via `withastro/action`
- Package manager: **pnpm** (lockfile: `pnpm-lock.yaml`)
- Local pnpm not installed — use `npx pnpm@9.15.9 <cmd>` when pnpm commands are needed

## Step 1 — Find the failing run

```bash
gh run list --repo alannicolea89-blip/boldtutor-site --limit 5
```

Identify the most recent run with `failure` status and note its **run ID**.

## Step 2 — Get failing step logs

```bash
gh run view <RUN_ID> --repo alannicolea89-blip/boldtutor-site --log-failed 2>&1
```

Read the full output carefully. The error is almost always near the **bottom** of the log.

## Step 3 — Diagnose the root cause

Common failure patterns for this project and their fixes:

| Error message | Root cause | Fix |
|---|---|---|
| `MissingSharp` / `Could not find Sharp` | `sharp` not in dependencies | `npx pnpm@9.15.9 add sharp` then commit `package.json` + `pnpm-lock.yaml` |
| `Cannot find module '...'` | Missing dependency | `npx pnpm@9.15.9 add <package>` |
| `No lockfile found` | pnpm-lock.yaml missing or corrupt | Restore/regenerate the lockfile |
| `error: Your local changes...` | Merge conflict left unresolved | Find and resolve conflict markers in the file |
| TypeScript / Astro build error | Bad import, wrong props, syntax error | Read the file at the reported line and fix |
| `Host key verification failed` | SSH known_hosts not set up | `ssh-keyscan github.com >> ~/.ssh/known_hosts` |
| Workflow action version missing | Pinned to a non-existent action version | Update `.github/workflows/deploy.yaml` version tags |
| `ELIFECYCLE Command failed` | npm/pnpm script error — look above this line for the real error | Scroll up in the log to find the actual error |

## Step 4 — Verify the fix locally

Before committing, always run the build locally to confirm the fix works:

```bash
CI=true npx astro build 2>&1 | tail -20
```

The build must exit with `✓ Complete!` before proceeding.

## Step 5 — Commit and push the fix

Stage only the files that were changed to fix the issue (never add `.env`, secrets, or unrelated files):

```bash
git add <specific files>
git commit -m "Fix GitHub Actions: <short description of what was broken and how it was fixed>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push
```

## Step 6 — Watch the new run

```bash
gh run list --repo alannicolea89-blip/boldtutor-site --limit 1
# Note the new run ID, then:
gh run watch <NEW_RUN_ID> --repo alannicolea89-blip/boldtutor-site 2>&1
```

Wait for both `build` and `deploy` jobs to show ✓. Report the final outcome to the user.

## Important constraints

- **Never skip or bypass CI** — fix the underlying problem, don't add `continue-on-error` or similar hacks
- **pnpm is the package manager** — always update `pnpm-lock.yaml`, not just `package.json`
- **Don't amend published commits** — always create a new commit for the fix
- If `gh` auth fails, check with `gh auth status` — it should show `alannicolea89-blip` logged in via keyring
- If SSH push fails, verify `~/.ssh/known_hosts` contains GitHub's key and `~/.ssh/id_ed25519` exists