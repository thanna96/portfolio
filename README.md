# Windows 2000 Portfolio

A playful, Vite-powered React and TypeScript portfolio that recreates the nostalgia of a Windows 2000 desktop. Visitors boot into a faux operating system, explore folders, and open documents that highlight my work and contact information—all while the UI mimics classic start menus, task bars, and modals.

## Features
- **Boot-up experience** – `MainLayout` fades from a retro loading screen (`WindowBootUp`) into the desktop to set the tone.
- **Interactive desktop** – Icons on the desktop open windows for documents, projects, languages, and bookmarks via reusable `FolderMenu` components.
- **Start menu shortcuts** – The custom task bar and start menu expose quick actions for email, résumé download, and social links.
- **Responsive layout** – Tailwind CSS utilities keep the faux desktop usable on both large monitors and mobile screens.
- **Accessible assets** – PDF résumé, profile imagery, and Windows 2000-inspired iconography live alongside the codebase for easy swapping.

## Tech stack
- [React 18](https://react.dev/) with TypeScript
- [Vite](https://vitejs.dev/) for lightning-fast dev tooling
- [Ant Design](https://ant.design/) modals for the folder windows
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) for styling
- [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/) for unit testing
- ESLint, Prettier, and TypeScript ESLint for static analysis and formatting

## Getting started
1. **Prerequisites** – Install [Node.js](https://nodejs.org/) 18 or later (which bundles npm).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Vite serves the site at [http://localhost:5173](http://localhost:5173) by default.

## Available scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement. |
| `npm run build` | Create a production build in the `dist/` directory. |
| `npm run preview` | Preview the built site locally using Vite's preview server. |
| `npm run lint` | Lint all `.ts` and `.tsx` files with ESLint. |
| `npm run lint:fix` | Automatically fix lint issues where possible. |
| `npm run format` | Format the entire codebase with Prettier. |
| `npm run test` | Execute the Vitest unit test suite. |
| `npm run test:ui` | Launch the interactive Vitest UI for focused test runs. |

## Project layout
```
portfolio/
├── public/                     # Static assets served as-is (favicons, résumé)
├── src/
│   ├── components/             # Desktop UI, task bar, and window building blocks
│   ├── pages/                  # `Desktop` and `WindowBootUp` experiences
│   ├── files/                  # Windows-style icons and imagery
│   ├── utils/                  # Shared helpers (e.g., `classNames`)
│   ├── App.tsx                 # Router with desktop route
│   └── main.tsx                # Vite entry point
├── tailwind.config.ts          # Tailwind configuration
├── vite.config.ts              # Vite tooling and plugins
└── README.md                   # Project documentation (you are here)
```

## Customization for people who want to copy me (please dont)
- **Update desktop content** – Edit `src/components/iconsFolder.tsx` to change the links, labels, and assets for documents, languages, projects, and bookmarks.
- **Swap résumé or imagery** – Replace files in `public/Thomas_Hanna_Resume.pdf` or `src/files/images/` with new assets.
- **Adjust styling** – Tailwind class utilities and the `tailwind.css` file let you tweak colors, spacing, and sizing without leaving JSX.
- **Extend windows** – Use the `FolderMenu` component pattern to add new windows or interactive experiences.

## Testing & quality
Run the automated checks before committing changes:
```bash
npm run lint
npm run test
```

## Deployment
Generate a static production build with:
```bash
npm run build
```
The optimized output in `dist/` can be hosted on any static site provider (Netlify, Vercel, GitHub Pages, etc.). Use `npm run preview` to verify the build locally before deploying.

## Acknowledgements
Inspired by the Windows 2000 aesthetic that shaped a generation of computer users. All icons and imagery are bundled locally for offline-friendly theming.
