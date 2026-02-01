// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});