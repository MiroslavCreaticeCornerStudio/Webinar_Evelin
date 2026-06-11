// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain — used for canonical & Open Graph URLs.
  site: 'https://webinarevelin.miroslav-ivanov.workers.dev',
  // Static pages by default; the form endpoint opts into on-demand rendering
  // (prerender = false) and runs on Cloudflare.
  adapter: cloudflare({
    platformProxy: { enabled: true },
    // We use plain <img> tags, so skip Cloudflare's image binding.
    imageService: "passthrough",
  }),
});
