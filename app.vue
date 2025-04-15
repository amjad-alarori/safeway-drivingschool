<template>
  <div>
    <Analytics/>
    <NuxtPage />
  </div>
</template>

<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<style>
/* Global styles that apply to the entire application */


/* Any additional global styles */
html, body {
  scroll-behavior: smooth;
}

/* You could add any other global styles here */
</style>