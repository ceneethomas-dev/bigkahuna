import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bigkahuna-pearl.vercel.app',
  integrations: [sitemap()],
});