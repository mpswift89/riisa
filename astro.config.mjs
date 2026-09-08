import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mpswift89.github.io',
  base: '/riisa',
  vite: {
    plugins: [tailwindcss()],
  },
});