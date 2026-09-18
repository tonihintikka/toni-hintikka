# Toni Hintikka — personal site

Astro [Starlight](https://starlight.astro.build/) site for Toni Hintikka’s personal brand.
Static build, hosted on **Cloudflare Workers** (Static Assets) — Cloudflare’s recommended path for new sites.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/`.

## Deploy (Cloudflare Workers)

1. Create a free Cloudflare account: https://dash.cloudflare.com/sign-up
2. Authenticate Wrangler once: `npx wrangler login`
3. Deploy:

```bash
npm run deploy
```

This runs `astro build` then `wrangler deploy`. The Worker serves `./dist` as static assets.

Optional: connect the GitHub repo to **Workers Builds** in the Cloudflare dashboard for push-to-deploy (build command `npm run build`, deploy with Wrangler / Workers assets).

## Stack

- Astro + Starlight
- Finnish content under `src/content/docs/`
- Theme overrides in `src/styles/custom.css`

Not a mirror of Ai Lab docs — original brand pages only.
