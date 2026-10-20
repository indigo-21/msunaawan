# Tech Stack

## Core

- **Framework**: React 18 (function components + hooks)
- **Build tool / dev server**: Vite 5 (`@vitejs/plugin-react`, Babel Fast Refresh)
- **Language**: JavaScript with JSX (no TypeScript). `.jsx` for components, `.js` for plain modules.
- **Module system**: ES modules (`"type": "module"`)

## Key Libraries

- **Routing**: `react-router-dom` v6 (`createBrowserRouter`, route config array)
- **Data fetching / server state**: `@tanstack/react-query` v5, plus `axios` and native `fetch`
- **Maps**: `leaflet`, `react-leaflet`, `leaflet-routing-machine`
- **Calendar**: `@fullcalendar/react` (daygrid, timegrid, interaction)
- **UI / styling**: Tailwind CSS 3 (+ PostCSS, autoprefixer), `@material-tailwind/react` with a custom theme (`src/CustomTheme.jsx`), `@heroicons/react`, `react-multi-carousel`

## Environment Variables

Accessed via `import.meta.env.*`. Common ones:
- `VITE_URL_FETCH` — base URL of the backend fetch API
- `VITE_MAIN_URL` — base URL for serving local assets/images
- `VITE_CLIENT_ID`, `VITE_CLIENT_SECRET`, `VITE_REFRESH_TOKEN`, `VITE_SCOPE` — Microsoft OAuth credentials

Keep secrets out of committed code; configure them through a local `.env` file.

## Common Commands

```bash
npm install      # install dependencies
npm run dev      # start Vite dev server with HMR
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # ESLint (js, jsx), fails on warnings
```

> There is no test setup in this project. Do not add one unless explicitly requested.

## Linting

ESLint with `eslint:recommended`, `plugin:react/recommended`, `jsx-runtime`, and `react-hooks/recommended`. Notable config: `react/prop-types` is off, and `lint` runs with `--max-warnings 0`.
