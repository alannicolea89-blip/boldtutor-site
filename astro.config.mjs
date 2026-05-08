// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://boldtutor.com.au',
  output: 'static',
  redirects: {
    '/services': '/subjects',
    '/about-boldtutor-private-tutor-high-school-and-university-sydney': '/about',
    '/contact': '/prices',
    '/contact-boldtutor': '/prices',
    '/contact-us': '/prices',
    '/society-and-culture': '/subjects/society-and-culture',
    '/university-tuition': '/university-tuition-sydney',
    '/english-tutoring-hsc-65-for-1hr-private-tutor-session-sydney': '/prices/hsc-english',
    '/english-yr-7-11-65-for-1-hour-private-english-tutor-at-your-desired-location-in-sydne': '/prices/english-yr7-11',
    '/learn-english-60-for-1-hour-with-private-tutor-in-sydney': '/prices/learn-english',
  },

  integrations: [mdx(), sitemap(), robotsTxt()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Oswald',
      cssVariable: '--font-display',
      weights: ['400', '600', '700'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400', '500', '700'],
      styles: ['normal'],
    },
  ],

  prefetch: {
    defaultStrategy: 'hover',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
