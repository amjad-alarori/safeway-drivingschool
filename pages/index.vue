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
  
  // Meta tags for SEO
  useHead({
    title: 'SafeWay Rijschool - Rijlessen in Hoorn en Zaandam',
    meta: [
      { name: 'description', content: 'Professionele en persoonlijke rijlessen in Hoorn en Zaandam. Bij SafeWay werken we samen aan jouw rijbewijs op jouw tempo.' }
    ]
  });
  </script>
  
  <style>
  /* Global styles can remain here */
  </style>