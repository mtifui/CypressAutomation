# AGENTS.md (repo root)

## Cypress rules of engagement
- Prefer stable selectors over text-only or deeply nested CSS.
- Only raise `defaultCommandTimeout` for a test when evidence shows slow DOM; otherwise wait on specific conditions (`cy.intercept + cy.wait`, `should('be.visible')`).
- For hover menus (e.g., makeup subcategories), prefer `realHover()` then assert visibility.
- For external origins (`cy.origin`), avoid brittle text assertions that change often.

## Test data & auth
- Use `Cypress.env()` for secrets; never hardcode credentials.
- Clean cart/wishlist via existing custom commands before assertions.

## PR etiquette
- Keep diffs small; include a failing-before/passing-after note in the PR body.
