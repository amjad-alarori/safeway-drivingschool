<template>
    <section class="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Leer Meer Over Veilig Rijden
          </h2>
          <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Handige links en informatie over rijlessen en examens.
          </p>
        </div>
        <ul class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li class="group transition transform hover:-translate-y-1 hover:shadow-lg rounded-xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700">
            <a
              href="https://www.rijksoverheid.nl/onderwerpen/rijbewijs"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-lg font-medium text-blue-600 dark:text-blue-400 group-hover:underline"
            >
              Overheidsinformatie over Rijbewijzen
            </a>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Alles wat je moet weten over rijbewijzen via de overheid.
            </p>
          </li>
          <li class="group transition transform hover:-translate-y-1 hover:shadow-lg rounded-xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700">
            <a
              href="https://www.anwb.nl/auto/rijbewijs/tips-auto"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-lg font-medium text-blue-600 dark:text-blue-400 group-hover:underline"
            >
              ANWB Tips voor Rijlessen
            </a>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Handige tips en adviezen van de ANWB voor beginnende bestuurders.
            </p>
          </li>
          <li class="group transition transform hover:-translate-y-1 hover:shadow-lg rounded-xl bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700">
            <a
              href="https://www.cbr.nl/"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-lg font-medium text-blue-600 dark:text-blue-400 group-hover:underline"
            >
              CBR - Nederlandse Rijexamens Autoriteit
            </a>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Officiële informatie over rijexamens, theorie en praktijk.
            </p>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
  useHead({
    title: 'SafeWay Rijschool - Rijlessen in Hoorn en Zaandam',
    meta: [
      { name: 'description', content: 'Ontdek nuttige informatie over rijlessen, rijexamens en veilig rijden in Nederland.' },
      { property: 'og:title', content: 'SafeWay Rijschool - Rijlessen in Hoorn en Zaandam' },
      { property: 'og:description', content: 'Links en tips over veilig rijden, rijexamens en meer.' }
    ]
  })
  </script>
  
  
  <style scoped>
  </style>
