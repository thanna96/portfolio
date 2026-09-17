# Windows 2000 Portfolio

Thomas Hanna’s React and TypeScript portfolio recreates a Windows 2000 desktop with folders, a start menu, and classic windows for projects, documents, and contact details.

## Getting started

Use Node.js 24 LTS (the pinned version is in `.nvmrc`).

```sh
nvm use
npm ci
npm run dev
```

The development server runs at http://localhost:3000. Run `npm run build` to create `dist/`, then `npm run preview` to inspect the production build.

## Commands

| Command             | Purpose                                       |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the development server.                 |
| `npm run build`     | Type-check and build production assets.       |
| `npm run preview`   | Serve the production build locally.           |
| `npm run lint`      | Check source and configuration files.         |
| `npm run lint:fix`  | Apply automatic lint fixes.                   |
| `npm run format`    | Format project files with Prettier.           |
| `npm test`          | Run Vitest in watch mode.                     |
| `npm run test:run`  | Run tests once.                               |
| `npm run typecheck` | Check TypeScript without emitting files.      |
| `npm run check`     | Run lint, tests, types, and production build. |

## Architecture and customization

- `src/App.tsx` renders the desktop without a router; this portfolio has a single page.
- `src/components/layout/MainLayout.tsx` preserves the original five-second startup animation with timer cleanup.
- `src/pages/Desktop.tsx` manages unique, typed window IDs.
- `src/components/windows/RetroWindow.tsx` provides accessible, nonmodal window chrome with focus, Escape, drag, and resize behavior.
- `src/components/iconsFolder.tsx` defines document, project, language, and social links as typed data.
- `src/utils/desktopTypes.ts` holds shared icon and window types.
- `public/Thomas_Hanna_Resume.pdf` is the single résumé source. Replace it to update both résumé links.
- `src/tailwind.css` imports Tailwind and the Ant Design reset. `src/App.css` contains the small global style layer.

Native buttons open desktop windows; anchors open documents and external links. Start-menu navigation closes on link activation, outside clicks, or Escape. The taskbar clock updates at minute boundaries. Drag a window by its blue title bar with a mouse or touch; blue desktop bounds keep it reachable, and resizing the browser clamps it within that area. Window content scrolls within the available viewport, and the explorer displays a local, decorative Google homepage inspired by the early 2000s. Search and subscription controls are nonfunctional and send no requests.

## Validation and deployment

Vitest uses jsdom and the jest-dom matchers registered in `src/setupTests.ts`. Tests cover startup completion and cancellation, keyboard interactions, duplicate window prevention, dialog naming, the decorative Google page, and birthday calculation.

Run `npm run check` before pushing. Netlify uses the Node version in `netlify.toml`, runs the build, and publishes `dist/`.

Package versions and `package-lock.json` are committed for reproducible `npm ci` installations. Build output, editor files, and unused starter assets are excluded.

The résumé opens in a local document window from My Documents and Start. `public/resume/page-1.png` and `page-2.png` are previews of the canonical `public/Thomas_Hanna_Resume.pdf`; regenerate them and `src/components/windows/resumePages.json` when replacing the PDF. The original PDF remains available through Save a copy.

Contact opens a classic email composer. Open email app uses a mailto link; Open Gmail opens a Gmail compose page. Visitors review and send in their own email service; the portfolio has no email backend or delivery charges.

Desktop windows support minimizing, maximizing/restoring, title-bar dragging, and resizing from the bottom-right corner (arrow keys also work on the resize handle). Each open window has a taskbar button; clicking the active button minimizes it, and clicking any other button restores and activates its window. Minimized windows retain drafts and game state. The desktop also includes beginner Minesweeper with a safe first click, flags, timer, reset, and a flag mode for touch screens.
