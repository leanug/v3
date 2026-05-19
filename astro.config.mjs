import { defineConfig, fontProviders } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://www.leandroubilla.com',
  integrations: [sitemap(), icon(), mdx()],
  fonts: [{
    provider: fontProviders.google(),
    name: 'Inter',
    cssVariable: '--font-inter',
    weights: ['400', '500', '600', '700']
  }]
});