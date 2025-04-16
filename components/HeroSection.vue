<template>
  <section class="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16">
      <!-- Text Content -->
      <div class="lg:w-1/2 text-center lg:text-left">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 animate-slide-up opacity-0">
          Rij met vertrouwen.<br />
          Rij met <span class="text-blue-600 dark:text-blue-400">SafeWay</span>! 🚗
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 animate-fade-in opacity-0 [animation-delay:0.3s]">
          Zoek je rijlessen in <strong>Hoorn</strong> of <strong>Zaandam</strong>? Bij SafeWay krijg je persoonlijke en professionele begeleiding van een ervaren instructeur. We werken samen aan jouw rijbewijs op jouw tempo.
        </p>
        <div class="relative inline-block mb-6 animate-scale-up opacity-0 [animation-delay:0.5s]">
          <div class="absolute inset-0 bg-gradient-to-r from-yellow-300 to-red-400 rounded-lg blur-md opacity-70"></div>
          <div class="relative inline-block px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-md">
            <p class="text-xl font-bold text-white mb-2">
              🚗 Tijdelijk: <span class="underline">90 min rijles</span> voor <span class="text-yellow-200">€80</span>! 🎉
            </p>
            <a
              href="/contact"
              class="mt-2 inline-block bg-yellow-200 hover:bg-yellow-300 text-red-700 font-semibold px-4 py-2 rounded-lg text-sm shadow-sm transition transform hover:scale-105"
            >
              Start vandaag
            </a>
          </div>
        </div>
      </div>

      <!-- Visual Content -->
      <div class="lg:w-1/2 flex justify-center">
        <img
          src="assets/images/hero-driving.jpg"
          alt="Illustratie van rijlessen met SafeWay in Hoorn en Zaandam"
          class="w-full max-w-lg rounded-xl shadow-lg ring-2 ring-blue-100 dark:ring-blue-500 animate-image-zoom opacity-0 [animation-delay:0.7s]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// geen logica nodig
</script>

<style scoped>
@keyframes slide-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes scale-up {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes image-zoom {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-scale-up {
  animation: scale-up 0.6s ease-out forwards;
}

.animate-image-zoom {
  animation: image-zoom 0.8s ease-out forwards;
}
</style>