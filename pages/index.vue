<template>
  <div class="bg-white">
    <!-- Header -->
    <Header />

    <main class="isolate">
      <!-- Hero Section -->
      <HeroSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Pricing Section -->
      <PricingSection />

      <!-- External Resources Section -->
      <ExternalResources />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import PricingSection from "@/components/PricingSection.vue";
import ExternalResources from "@/components/ExternalResources.vue";

// Meta tags for SEO
useHead({
  title: 'SafeWay Rijschool - Rijlessen in Hoorn en Zaandam',
  meta: [
    { name: 'description', content: 'Professionele en persoonlijke rijlessen in Hoorn en Zaandam. Bij SafeWay werken we samen aan jouw rijbewijs op jouw tempo.' },
    { property: 'og:title', content: 'SafeWay Rijschool - Rijlessen in Hoorn en Zaandam' },
    { property: 'og:description', content: 'Professionele en persoonlijke rijlessen in Hoorn en Zaandam. Bij SafeWay werken we samen aan jouw rijbewijs op jouw tempo.' },
    { property: 'og:image', content: '/assets/images/logo.jpg' },
    { property: 'og:url', content: 'https://www.safeway-rijschool.nl' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'SafeWay Rijschool - Rijlessen in Hoorn en Zaandam' },
    { name: 'twitter:description', content: 'Professionele en persoonlijke rijlessen in Hoorn en Zaandam. Bij SafeWay werken we samen aan jouw rijbewijs op jouw tempo.' },
    { name: 'twitter:image', content: '/assets/images/logo.jpg' },
    { name: 'twitter:url', content: 'https://www.safeway-rijschool.nl' },
    { name: 'twitter:site', content: '@safewayrijschool' },
    { name: 'twitter:creator', content: '@safewayrijschool' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: 'SafeWay Rijschool' },
    { name: 'application-name', content: 'SafeWay Rijschool' },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'msapplication-TileImage', content: '/assets/images/logo.png' },
    { name: 'msapplication-config', content: '/assets/images/browserconfig.xml' },
    { name: 'apple-touch-icon', content: '/assets/images/apple-touch-icon.png' },
    { name: 'icon', content: '/assets/images/favicon.ico' },
    { name: 'shortcut icon', content: '/assets/images/favicon.ico' },
    { name: 'manifest', content: '/assets/images/site.webmanifest' },
    { name: 'description', content: 'Professionele en persoonlijke rijlessen in Hoorn en Zaandam. Bij SafeWay werken we samen aan jouw rijbewijs op jouw tempo.' },
    { name: 'keywords', content: 'rijschool, rijlessen, Hoorn, Zaandam, veilig rijden, rijbewijs, autorijles' },
    { name: 'author', content: 'Amjad Alarori' },
    { name: 'language', content: 'Dutch' },
    { name: 'charset', content: 'UTF-8' },
  ]
});
</script>

<style>
/* Global styles can remain here */
.external-resources {
  margin: 2rem 0;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}
.external-resources h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.external-resources ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}
.external-resources li {
  margin-bottom: 0.5rem;
}
.external-resources a {
  color: #007bff;
  text-decoration: none;
}
.external-resources a:hover {
  text-decoration: underline;
}
</style>