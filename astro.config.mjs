// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // TODO: update to the Vercel production domain once it's known
  // (e.g. https://<project>.vercel.app or the final custom domain).
  site: 'https://webinarevelin.miroslav-ivanov.workers.dev',
  adapter: vercel(),
});
