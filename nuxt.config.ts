import tailwindcss from "@tailwindcss/vite";
import { config } from 'dotenv';
config();

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Modules (use only @nuxtjs/seo to avoid redundancy)
  modules: ["@nuxtjs/seo", "nuxt-aos", 'nuxt-gtag'],


  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  // Site-wide SEO configuration
  site: {
    url: 'https://www.safeway-rijschool.nl',
    name: 'SafeWay Rijschool',
    description: 'SafeWay Rijschool biedt professionele rijlessen om zelfverzekerd en veilig te rijden.', // ~150 chars
    defaultLocale: 'nl',
  },

  // Sitemap configuration
  sitemap: {
    enabled: true,
    gzip: true,
  },

  // Robots configuration
  robots: {
    enabled: true,
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },

  ogImage: {
    enabled: true,
    defaults: {
      component: 'NuxtSeo',
      props: {
        siteName: 'SafeWay Rijschool',
        title: 'SafeWay - Leer Veilig Rijden',
        description: 'SafeWay Rijschool biedt professionele rijlessen om zelfverzekerd en veilig te rijden.',
        image: '/assets/images/logo.jpg', 
      },
    },
  },

  // Schema.org configuration (global defaults)
  schemaOrg: {
    enabled: true,
    defaults: {
      '@type': 'WebSite',
      name: 'SafeWay Rijschool',
      url: 'https://www.safeway-rijschool.nl',
    },
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      title: 'SafeWay Rijschool - Professionele Rijlessen',
      titleTemplate: '%s - SafeWay Rijschool',
      htmlAttrs: {
        lang: 'nl',
      },
      meta: [
        {
          name: 'keywords',
          content: 'rijschool, rijlessen, autorijlessen, rijbewijs halen, rijinstructeur, rijopleiding, theorie-examen, praktijkexamen, autorijden leren, rijvaardigheid, rijschool Nederland, rijschool Amsterdam, rijschool Hoorn, rijschool Haarlem, rijschool Alkmaar, rijschool Purmerend, rijschool Zaandam, rijschool Zaanstad, rijschool Beverwijk, rijschool Heemskerk, rijschool Velsen, rijschool IJmuiden',
        },
      ],
    },
  },

  nitro: {
    routeRules: {
      '/assets/images/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000',
          'Expires': new Date(Date.now() + 31536000000).toUTCString(),
        },
      },
    },
  },
});