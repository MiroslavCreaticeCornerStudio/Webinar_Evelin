// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain — used for canonical & Open Graph URLs.
  site: 'https://inclusive-webinar.example',

  adapter: cloudflare(),
});