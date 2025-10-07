# Repository instructions for Copilot coding agent

## How to run this project
- Node 22; install with `npm ci`.
- Run all tests headlessly: `npm run cypress:run` (Cypress 15).
- Cypress baseUrl: `https://automationteststore.com`.
- JUnit XML is produced at: `cypress/reports/results-[hash].xml`.

## What good looks like
- All specs pass; no skipped tests left in committed code.
- Keep videos/screenshots disabled in CI (we rely on JUnit + logs).
- Follow existing structure:
    - E2E specs in `cypress/e2e/**`
    - Commands in `cypress/support/commands.js`
    - Page objects in `cypress/pages/**`
    - Constants in `cypress/constants/**`

## Troubleshooting hints for this repo
- **Login** uses `Cypress.env('AUTOMATION_STORE_PASSWORD')` (provided via Actions env/secrets).
- API helpers live in `commands.js` (e.g., `addToCart`, `getCartContent`, wishlist helpers).
- Tag-aware runs use `cypress-tags` (respect `env.INCLUDE_TAGS` if present).
- Typical flakes: short timeouts on hover menus and remote origins (`cy.origin(...)`).

## When fixing failures
1) Parse JUnit XML under `cypress/reports/` and group failures by spec/test title.
2) Reproduce locally in your workspace; avoid changing global timeouts unless the test proves the UI is consistently slow.
3) Prefer minimal diffs (selector update, wait-for-network, add `should(...)` assertions).
4) Update/extend tests if behavior changed legitimately.
5) Open a **draft PR** with:
    - Root cause analysis
    - What changed & why
    - How to reproduce before/after

## Security & guardrails
- Do **not** add new external services or secrets.
- Do **not** weaken auth flows (e.g., hardcode passwords).
