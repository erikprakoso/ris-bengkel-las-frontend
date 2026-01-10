// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.maspetelas.my.id',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});