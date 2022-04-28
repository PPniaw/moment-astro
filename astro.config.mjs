import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact'; // Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  outDir: './dist',
  integrations: [preact(), sitemap()],
  site: 'https://moment.intersection.tw',
  trailingSlash: 'never',
  markdown: {
    mode: 'mdx'
  }
});