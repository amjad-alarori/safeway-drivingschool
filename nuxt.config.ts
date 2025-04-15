import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    "nuxt-aos",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
  ],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/assets/images/driving-icon.png' },
      ],
    },
  },

  sitemap: {
    hostname: 'https://www.safeway-rijschool.nl/',
    gzip: true,
    routes: [
      '/',
      '/contact',
    ],
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://www.safeway-rijschool.nl/sitemap.xml',
  },

  seo: {
    baseUrl: 'https://www.safeway-rijschool.nl',
    name: 'SafeWay Rijschool',
    title: 'SafeWay - Leer Veilig Rijden',
    description: 'SafeWay Rijschool biedt professionele rijlessen om u te helpen een zelfverzekerde en veilige bestuurder te worden.',
    keywords: ['rijschool', 'rijlessen', 'autorijlessen', 'rijbewijs halen', 'rijinstructeur', 'rijopleiding', 'theorie-examen', 'praktijkexamen', 'autorijden leren', 'rijvaardigheid', 'rijschool Nederland', 'rijschool Amsterdam', 'rijschool Utrecht', 'rijschool Rotterdam', 'rijschool Den Haag', 'rijschool Eindhoven', 'rijschool Groningen', 'rijschool Tilburg', 'rijschool Almere', 'rijschool Breda'],
    canonical: true,
    openGraph: {
      type: 'website',
      site_name: 'SafeWay Rijschool',
      images: [
        {
          url: 'https://www.safeway-rijschool.nl/assets/images/logo.jpg',
          width: 800,
          height: 600,
          alt: 'SafeWay Rijschool Logo',
        },
      ],
    },
    sitemap: true,
    robots: true,
  },
});