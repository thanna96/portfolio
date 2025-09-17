# Retro Portfolio (Next.js)

This project recreates the retro Windows-inspired portfolio using [Next.js](https://nextjs.org/) and Tailwind CSS. The application shows a boot screen followed by a draggable-style desktop experience with folders, windows, and a start menu.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application locally.

### Additional Scripts

- `npm run build` – Build the production bundle.
- `npm run start` – Start the production server.
- `npm run lint` – Run ESLint using the Next.js configuration.
- `npm run type-check` – Validate TypeScript types without emitting files.

## Project Structure

```
src
├─ app
│  ├─ app.tsx          # Main application component
│  ├─ layout.tsx       # Root Next.js layout
│  ├─ page.tsx         # Entry point that renders the app
│  ├─ provider.tsx     # Global providers wrapper
│  ├─ router.tsx       # Declarative route configuration
│  ├─ routes
│  │  └─ home.tsx      # Home route with boot screen + desktop
├─ assets              # Static assets (icons, images)
├─ features
│  ├─ boot-screen      # Boot screen feature module
│  └─ desktop          # Desktop experience feature module
├─ components          # Reserved for shared components
├─ config              # Reserved for configuration helpers
├─ hooks               # Reserved for shared hooks
├─ lib                 # Reserved for reusable libraries
├─ stores              # Reserved for global state stores
├─ testing             # Reserved for test utilities
├─ types               # Shared TypeScript types
└─ utils               # Shared utilities
```

Most domain logic lives inside the `features` directory to keep the codebase modular and scalable. Each feature exports only the pieces needed by the application layer (`src/app`).

## Styling

Tailwind CSS powers the Windows-inspired look. Global utility classes and structural helpers (such as the centered container) live in `src/app/globals.css`.
