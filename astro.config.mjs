// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import {loadEnv} from "vite";

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: `https://trickytube.com`,
  integrations: [partytown(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});