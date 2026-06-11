// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://webinarevelin.miroslav-ivanov.workers.dev',
  adapter: cloudflare({
    platformProxy: { enabled: true },
    // We use plain <img> tags, so skip Cloudflare's image binding.
    imageService: 'passthrough',
  }),
});
