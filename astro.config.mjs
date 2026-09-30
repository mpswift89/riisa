import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://riisasrl.com',
  vite: {
    plugins: [tailwindcss()],
  },
});