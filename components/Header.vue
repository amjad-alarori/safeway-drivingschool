<template>
    <header class="bg-white dark:bg-gray-900 shadow-md">
        <!-- Plaats dit in de <head> van je app.vue of in nuxt.config.ts via useHead -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6 border-b border-gray-300 dark:border-gray-700">
          <!-- Logo with image -->
          <div class="flex items-center space-x-3">
            <a href="/">
              <img
                src="assets/images/logo.jpeg"
                alt="SafeWay Logo"
                class="w-26 h-26 rounded-full border-2 border-blue-600 dark:border-blue-400 shadow-md object-cover"
              />
            </a>
          </div>
  
          <!-- Nav Menu -->
          <nav class="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 text-lg">
            <ul class="flex space-x-6 items-center">
                <li><a href="/" class="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
              <li><a href="/#over-mij" class="hover:text-blue-600 dark:hover:text-blue-400 transition">Over Mij</a></li>
              <li><a href="/#tarieven" class="hover:text-blue-600 dark:hover:text-blue-400 transition">Tarieven</a></li>
              <li><a href="/contact" class="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </nav>
  
          <!-- CTA Button -->
          <div class="hidden md:block">
            <a href="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow-lg transition dark:bg-blue-500 dark:hover:bg-blue-600">
              Boek Nu
            </a>
          </div>
  
          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="toggleMenu" class="text-gray-700 dark:text-gray-300 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu -->
        <div v-if="menuOpen" class="md:hidden pb-4 border-t border-gray-300 dark:border-gray-700">
          <ul class="flex flex-col space-y-4 text-gray-700 dark:text-gray-300 text-lg">
            <li><a href="#" @click="closeMenu" class="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
            <li><a href="/" class="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
            <li><a href="/#over-mij" @click="closeMenu" class="hover:text-blue-600 dark:hover:text-blue-400">Over Mij</a></li>
            <li><a href="/#tarieven" @click="closeMenu" class="hover:text-blue-600 dark:hover:text-blue-400">Tarieven</a></li>
            <li><a href="/contact" @click="closeMenu" class="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
            <li>
              <a href="/contact" @click="closeMenu" class="bg-blue-600 text-white px-4 py-2 rounded-full text-center w-full dark:bg-blue-500">
                Boek Nu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const menuOpen = ref(false)
  
  function toggleMenu() {
    menuOpen.value = !menuOpen.value
  }
  
  function closeMenu() {
    menuOpen.value = false
  }
  </script>
