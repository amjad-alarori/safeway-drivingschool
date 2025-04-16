<template>
    <footer class="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 pt-16 pb-10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <!-- Logo & Intro -->
        <div class="flex flex-col items-start">
          <img
            src="/assets/images/logo.jpeg"
            alt="SafeWay Logo"
            class="w-16 h-16 rounded-full border-2 border-indigo-500 dark:border-indigo-400 mb-4"
          />
          <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            SafeWay Rijschool<br />
            Persoonlijke en professionele rijlessen in Hoorn & Zaandam.
          </p>
        </div>
  
        <!-- Navigatie -->
        <div class="flex flex-col space-y-2">
          <h3 class="text-gray-900 dark:text-white font-semibold mb-2">Navigatie</h3>
          <a href="/" class="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
          <a href="/#over-mij" class="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Over Mij</a>
          <a href="/#tarieven" class="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Tarieven</a>
          <a href="/contact" class="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
        </div>
  
        <!-- Social Media -->
        <div>
          <h3 class="text-gray-900 dark:text-white font-semibold mb-2">Volg ons</h3>
          <div class="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/profile.php?id=61574533254472" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/safeway_rijschool/" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
  
      <div class="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {{ new Date().getFullYear() }} SafeWay Rijschool. Alle rechten voorbehouden.
        <p class="text-sm mt-2">KvK-nummer: 95272666</p>
      </div>
    </footer>
  </template>
