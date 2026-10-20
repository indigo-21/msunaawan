# Project Structure

## Root

- `index.html` — Vite entry HTML; mounts `#root` and loads `/src/main.jsx`
- `vite`/`postcss.config.js`/`.eslintrc.cjs` — build and lint config
- `public/` — static assets served as-is
  - `images/mapImages/` — per-building photos used by maps (filename-based lookup)
  - `images/our-partners/`, `images/footer/`, etc.
- `dist/` — production build output (generated)

## `src/` Layout

- `main.jsx` — app bootstrap; wraps `<App />` in `ThemeProvider` (Material Tailwind + `CustomTheme`)
- `App.jsx` — sets up React Query (`QueryClientProvider`) and the router (`RouterProvider`)
- `CustomTheme.jsx` — Material Tailwind theme overrides
- `index.css` / `App.css` — global styles
- `routes/AppRoutes.jsx` — central route config array consumed by `createBrowserRouter`
- `layout/` — shared layout wrappers (e.g. `RootLayout`)
- `pages/` — route-level views, grouped by feature:
  - `Map/` — map components (`MapComponent`, `MapContent`, `MapPopUp`, `MapList`, `RoutineMachine`, etc.) plus a per-campus subfolder (`MSUNaawanMap`, `MSUGensanMap`, `MSUSuluMap`, `MSUTawiMap`)
  - `Calendar/` — FullCalendar views and components
  - `Home/` — landing-page cards, carousels, announcements
- `componenets/` — shared UI components (note: directory name is intentionally spelled this way — navigation, footer, carousel)
- `data/` — data-layer modules (e.g. `mapData.jsx` SharePoint fetching)
- `service/` — external service integrations (e.g. `tokenService.jsx` Microsoft OAuth)
- `util/` — low-level helpers (e.g. `http.js` fetch wrappers for map data/images)
- `helpers/` — small view/domain helpers (e.g. `locationCenter.jsx`)
- `assets/` — bundled assets imported by source

## Conventions

- **Components**: PascalCase filenames, one component per file, default export.
- **Feature-first organization**: group page-specific components under their `pages/<Feature>/` folder; promote to `componenets/` only when shared across features.
- **Campus maps** follow a repeating pattern — each campus has its own folder under `pages/Map/` with a `Msu<Campus>Map.jsx` entry component that reuses the shared map components.
- **Data/service/util separation**: keep API calls and auth in `util/`, `service/`, and `data/`; keep components focused on rendering.
- **Routes**: add new pages to the `AppRoutes` array in `routes/AppRoutes.jsx`.
- Backup/experimental files use a `-backup`/`-backup-new` suffix; prefer the canonical (non-suffixed) file.
