import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://stellar-fox-31c85d.netlify.app/',
  base: '/findajourney',
  integrations: [tailwind()]
});