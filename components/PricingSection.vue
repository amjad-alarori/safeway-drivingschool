<template>
  <section id="tarieven" class="bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Kies jouw lespakket
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
        Persoonlijke rijlessen in Hoorn en Zaandam. Betaalbaar, betrouwbaar en afgestemd op jouw ervaring.
      </p>

      <!-- 🔥 Tijdelijke Aanbieding Card -->
      <div class="relative mx-auto mb-20 w-full max-w-xl">
        <div class="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 rounded-xl blur-lg opacity-75 animate-pulse"></div>
        <div class="relative z-10 px-8 py-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl border-2 border-blue-200 dark:border-blue-600 transform hover:scale-105 transition-transform duration-300">
          <div class="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-full shadow-md">
            🎉 TIJDELIJKE AANBIEDING
          </div>
          <p class="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">
            Start Jouw Rijavontuur! 🚗
          </p>
          <p class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
            <span class="text-3xl text-red-500 dark:text-red-400">€80</span> voor een <span class="underline">90-min</span> Rijles!
          </p>
          <a
            href="/contact"
            class="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Grijp Deze Deal Nu!
          </a>
          <p class="mt-3 text-sm text-gray-500 dark:text-gray-400 italic">
            Wees er snel bij, aanbieding eindigt binnenkort!
          </p>
        </div>
      </div>

      <!-- 📦 Pakketten Grid -->
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Comfort Pakket -->
        <div class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-start border-t-4 border-indigo-400 dark:border-indigo-500">
          <div class="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-full shadow-md animate-pulse">
            🎉 10% Korting
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Comfort Pakket</h3>
          <div class="flex items-baseline mb-4">
            <p class="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">€2475</p>
            <p class="text-lg text-gray-500 dark:text-gray-400 line-through ml-3">€2750</p>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">🚗🛡️ Voor wie extra zekerheid en een ontspannen tempo wil.</p>
          <ul class="space-y-2 text-left text-sm text-gray-700 dark:text-gray-300 flex-grow">
            <li>✅ 40 uren autorijles</li>
            <li>✅ Vaste instructeur</li>
            <li>✅ Warming-up voor examen</li>
            <li>✅ Praktijkexamen CBR</li>
            <li>✅ Gespreid betalen</li>
          </ul>
          <a
            href="/contact"
            class="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-300"
          >
            Kies Nu!
          </a>
        </div>

        <!-- Standaard Pakket -->
        <div class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-start border-t-4 border-blue-500 dark:border-blue-400">
          <div class="absolute top-2 right-4 text-xs bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100 px-2 py-1 rounded-full font-medium">
            Meest gekozen
          </div>
          <div class="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-full shadow-md animate-pulse">
            🎉 7.5% Korting
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Standaard Pakket</h3>
          <div class="flex items-baseline mb-4">
            <p class="text-4xl font-extrabold text-blue-600 dark:text-blue-400">€1989</p>
            <p class="text-lg text-gray-500 dark:text-gray-400 line-through ml-3">€2150</p>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">🚗🎯 De ideale keuze voor beginnende bestuurders.</p>
          <ul class="space-y-2 text-left text-sm text-gray-700 dark:text-gray-300 flex-grow">
            <li>✅ 30 uren autorijles</li>
            <li>✅ Vaste instructeur</li>
            <li>✅ Warming-up voor examen</li>
            <li>✅ Praktijkexamen CBR</li>
            <li>✅ Gespreid betalen</li>
          </ul>
          <a
            href="/contact"
            class="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-300"
          >
            Kies Nu!
          </a>
        </div>

        <!-- Ervaring Pakket -->
        <div class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-start border-t-4 border-green-400 dark:border-green-500">
          <div class="absolute -top-4 -left-4 bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-full shadow-md animate-pulse">
            🎉 5% Korting
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Ervaring Pakket</h3>
          <div class="flex items-baseline mb-4">
            <p class="text-4xl font-extrabold text-green-600 dark:text-green-400">€1188</p>
            <p class="text-lg text-gray-500 dark:text-gray-400 line-through ml-3">€1250</p>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">🚗✅ Perfect voor leerlingen met rijervaring.</p>
          <ul class="space-y-2 text-left text-sm text-gray-700 dark:text-gray-300 flex-grow">
            <li>✅ 15 uren autorijles</li>
            <li>✅ Vaste instructeur</li>
            <li>✅ Voor ervaren leerlingen</li>
            <li>✅ Praktijkexamen CBR</li>
            <li>✅ Gespreid betalen</li>
          </ul>
          <a
            href="/contact"
            class="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-300"
          >
            Kies Nu!
          </a>
        </div>

        <!-- Losse Les -->
        <div class="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-start border-t-4 border-yellow-400 dark:border-yellow-500">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Losse Les</h3>
          <div class="flex items-baseline mb-4">
            <p class="text-4xl font-extrabold text-yellow-600 dark:text-yellow-400">€60</p>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">🎓 Flexibele 60-minuten les voor elk niveau.</p>
          <ul class="space-y-2 text-left text-sm text-gray-700 dark:text-gray-300 flex-grow">
            <li>✅ 60 minuten autorijles</li>
            <li>✅ Vaste instructeur</li>
            <li>✅ In eigen tempo</li>
            <li>✅ Ideaal voor opfrissing</li>
            <li>✅ Direct in te plannen</li>
          </ul>
          <a
            href="/contact"
            class="mt-4 inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-2 rounded-lg text-sm shadow-md hover:shadow-lg transition-all duration-300"
          >
            Kies Nu!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>