## Quick context

- Small React (Vite) single-page app using ESM modules (`package.json` has "type": "module").
- Uses React 19 + Vite. Key files: `src/main.jsx`, `src/App.jsx`, `vite.config.js`, `package.json`.

## What matters (big picture)

- The app is composed of many small, folder-scoped components under `src/components/`.
- Each component lives in its own folder and pairs a `.jsx` file with a `.css` file (example: `src/components/Header/Header.jsx` + `Header.css`).
- `src/App.jsx` assembles top-level UI by importing these components directly (default exports). When changing layout, update `App.jsx`.
- Static assets live in `src/assets/` (many images named `imgNN.*`) and `public/` for global assets like `favicon.svg` and `icons.svg`.

## Important developer workflows (what to run)

- Run dev server (Vite with HMR):

  ```powershell
  npm run dev
  ```

- Build for production:

  ```powershell
  npm run build
  ```

- Preview a production build locally:

  ```powershell
  npm run preview
  ```

- Run linter (project uses ESLint via `eslint.config.js`):

  ```powershell
  npm run lint
  ```

Notes: scripts are defined in `package.json`. Vite's default dev port (5173) applies unless changed in `vite.config.js`.

## Project-specific conventions to follow

- File layout: component folder per feature with `ComponentName.jsx` and `ComponentName.css`. When adding components, follow this pattern.
- Exports: components are default-exported and imported with relative paths, e.g. `import Header from './components/Header/Header'` — maintain default export style.
- Styling: plain CSS files (no CSS modules or styled-components). Keep class names stable to avoid breaking global styles.
- Asset imports: add images under `src/assets` and import them with relative paths (example: `import img31 from '../../assets/img31.jpg'`). Avoid editing `public/` unless the asset is truly global.

## Known quirks / things to watch for

- App layout ordering: `src/App.jsx` currently renders `Header` then `Footer` then the rest of the page components. Be cautious when reordering—this may be intentional or an oversight. Double-check the intended visual order in the design before swapping.
- No tests or test runner are present in the repo. Don't introduce testing infra without proposing it first.
- ESLint is configured; run `npm run lint` before large PRs.

## Integration points & dependencies

- Runtime deps: `react`, `react-dom`, `react-icons` (used for icons). No external API clients are included in the codebase.
- Build: Vite + `@vitejs/plugin-react`.

## Concrete examples for common edits

- Add a new component `MyThing` under `src/components/MyThing/`:

  - `src/components/MyThing/MyThing.jsx` (default export)
  - `src/components/MyThing/MyThing.css`

  Import in `App.jsx` like:

  ```js
  import MyThing from './components/MyThing/MyThing'
  ```

- Use an asset in a component (relative import example):

  ```js
  import sample from '../../assets/img56.jpg'

  export default function Cmp(){
    return <img src={sample} alt="..." />
  }
  ```

## How the AI should propose changes

- Make the smallest change that keeps the app working with Vite HMR. Run `npm run dev` locally to verify visual/console errors.
- Preserve component folder layout and default exports. If you need to change export style, update all import sites.
- Avoid adding large infra (tests, CI) without a short design note in the PR.

If anything above is unclear or you want me to add CI, tests, or a component scaffold generator, tell me which part to expand and I will update this file.
