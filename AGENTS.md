# Agent notes

- Personal brand site for Toni Hintikka (Finnish).
- Do not ingest or mirror `Ai_lab_for_developers` docs into this tree.
- Deploy target: Cloudflare Workers Static Assets (`wrangler.jsonc` → `./dist`).
- Content lives in `src/content/docs/`. Theme in `src/styles/custom.css`.
- Public link directory: edit vault `shared-brain/wiki/concepts/curated-links.md` (and optionally `agentic-engineering-research.md`), then `npm run sync-links` → `src/content/docs/linkit.md`. Deploy with `npm run sync-links:deploy` or `npm run deploy`.
