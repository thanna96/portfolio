import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

const projectRootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(),],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      screens: path.resolve(projectRootDir, "./src/"),
    },
  },
  build: {
    outDir: "build",
  },
});
