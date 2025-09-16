// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://warm-selkie-9155d2.netlify.app/",
  integrations: [preact()]
});