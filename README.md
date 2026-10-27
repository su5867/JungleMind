# JungleMind

JungleMind is a multi-page React application built with React 19.3, React Router 8, and Vite.

## Requirements

- Node.js 22.22 or newer

## Local development

```sh
npm install
npm run dev
```

## Quality checks

```sh
npm run lint
npm run format:check
npm run build
```

## Routes

- `/` — home
- `/help` — searchable help center
- `/api` — developer guide and early access
- `/credits` — interactive sample usage estimator
- `/news` — article index
- `/journal` — field notes

Keep the single root `index.html`: Vite uses it as the browser entry that loads the React app. Individual page content and URLs belong in `src/pages/` and the React Router configuration in `src/App.jsx`, rather than separate root HTML files.

Legacy `.html` URLs redirect to their matching routes. The deployment includes Netlify style SPA redirects in `public/_redirects` and Vercel redirects in `vercel.json`; use the matching configuration for the hosting provider. Other static hosts must rewrite app routes to `index.html`.

## Project layout

- `src/components/` — shared site components
- `src/pages/` — page level React components
- `src/styles/` — shared, home, page, and responsive styles
- `src/App.jsx` — route definitions, page titles, and route scroll behavior
