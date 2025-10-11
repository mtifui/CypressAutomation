# Codex Auto-Fix Prompt (included by the workflow)

- Project quick facts:
  - Node 22; `npm ci`
  - Run tests: `npm run cypress:run` (Cypress 15)
  - JUnit XML: `cypress/reports/results-*.xml`
  - Base URL: https://automationteststore.com
- Repo guidelines: `.github/copilot-instructions.md`, `AGENTS.md`
- Don’ts: secrets, new services, broad timeouts, wide refactors
- Do’s: minimal diffs, stable selectors, explicit waits (`cy.intercept + cy.wait`, `should('be.visible')`), keep changes under 300 lines
- Scope: `cypress/**`, `cypress.config.js`, `package.json`, docs

**Tasks**
1. Read JUnit from the failed run (if provided) and cluster failures by spec/test.
2. Reproduce locally. Iterate fixes up to 2 times.
3. Explain non-obvious edits via inline comments.
4. Output a short RCA for the PR body.
