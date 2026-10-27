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
- `/pricing` — early access plans and pricing guidance
- `/api` — developer guide and early access
- `/credits` — interactive sample usage estimator
- `/news` — article index
- `/journal` — field notes

Keep the single root `index.html`: Vite uses it as the browser entry that loads the React app. Individual page content and URLs belong in `src/pages/` and the React Router configuration in `src/App.jsx`, rather than separate root HTML files.

Vercel uses `vercel.json` to rewrite app routes to `index.html`, where React Router handles them. Netlify uses the SPA fallback in `public/_redirects`. Other static hosts must rewrite app routes to `index.html` too. Individual `.html` page files are not part of this app.

## Project layout

- `src/components/` — shared site components
- `src/pages/` — page level React components
- `src/styles/` — shared, home, page, and responsive styles
- `src/App.jsx` — route definitions, page titles, and route scroll behavior
