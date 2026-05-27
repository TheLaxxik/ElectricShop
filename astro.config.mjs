// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://electricshop.esticode.sk',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sanity({
      projectId: 'jh80nfpn',
      dataset: 'production',
      useCdn: false,
    })
  ]
});