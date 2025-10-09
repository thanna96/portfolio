import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [
    react(),
  ],
  server: {
    open: true, // open the app in browser on its own, no manual intervention
    port: 3000,
  },
  resolve: {
    alias: {
      screens: path.resolve(__dirname, './src/'),
    },
  },
  build: {
    outDir: 'build',
  },
});