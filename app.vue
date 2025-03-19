<template>
  <div class="bg-white">
    <!-- Header -->
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">

        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm/6 font-semibold text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">

        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" @click="mobileMenuOpen = false">{{ item.name }}</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <main class="isolate">
      <!-- Home section -->
      <div class="relative isolate -z-10 overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
        <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
        <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">Rij met vertrouwen,<br>Rij met SafeWay! 🚗💨</h1>
            <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p class="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Als ervaren rijinstructeur help ik jou om zelfverzekerd en veilig de weg op te gaan. Bij SafeWay krijg je persoonlijke begeleiding, afgestemd op jouw tempo en leerstijl. Samen werken we aan jouw rijbewijs, zodat jij straks met vertrouwen achter het stuur zit!
              </p>            </div>
            <img src="https://images.unsplash.com/photo-1553782097-130fef5d3e27?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>

      <!-- Over mij section -->
      <div data-aos="fade-left" id="over-mij" class="mt-32 overflow-hidden sm:mt-40">
        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
            <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Over Rijschool Safeway</h2>
              <p class="mt-6 text-xl/8 text-gray-600">Bij Rijschool Safeway krijg je persoonlijke en professionele rijlessen van een ervaren instructeur. Mijn doel is om jou op een ontspannen en efficiënte manier klaar te stomen voor het rijexamen. Of je nu net begint of extra vertrouwen op de weg nodig hebt, ik pas de lessen aan op jouw tempo en leerstijl.</p>
              <p class="mt-6 text-base/7 text-gray-600">Met een moderne aanpak en duidelijke begeleiding help ik je niet alleen je rijbewijs te halen, maar ook een zelfverzekerde en veilige bestuurder te worden. 🚗💨 Rij met vertrouwen, rij met Safeway!</p>
            </div>
            <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img src="https://images.unsplash.com/photo-1516862523118-a3724eb136d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="aspect-7/5 w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                </div>
                <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img src="https://images.unsplash.com/photo-1478442231640-a78bbd3bcd62?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="aspect-7/5 w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover" />
                </div>
                <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img src="https://images.unsplash.com/photo-1562618817-4c48e063c39a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>


    <!-- Tarieven -->
    <div data-aos="fade-up" id="tarieven" class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8', tierIdx === 0 ? 'lg:rounded-r-none' : '', tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '', 'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10']">
          <div>
            <div class="flex items-center justify-between gap-x-4">
              <h3 :id="tier.id" :class="[tier.mostPopular ? 'text-indigo-600' : 'text-gray-900', 'text-lg/8 font-semibold']">{{ tier.name }}</h3>
              <p v-if="tier.mostPopular" class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">Meest gekozen</p>
            </div>
            <p class="mt-4 text-sm/6 text-gray-600">{{ tier.description }}</p>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-semibold tracking-tight text-gray-900">{{ tier.priceMonthly }}</span>
            </p>
            <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
              <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                <CheckIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- Footer -->
    <footer data-aos="zoom-in-left" id="contact" class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center gap-x-6 md:order-2">
        <a v-for="item in footerNavigation" :key="item.name" :href="item.href" class="text-gray-600 hover:text-gray-800">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="size-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">&copy; 2025 SafeWay, Inc. All rights reserved.</p>
    </div>
  </footer>

  </div>
</template>

<script setup>
import { defineComponent, h, ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/20/solid'


const navigation = [
  { name: 'Over mij', href: '#over-mij' },
  { name: 'Tarieven', href: '#tarieven' },
  { name: 'Contact', href: '#contact' },
]

const footerNavigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61574533254472',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/safeway_rijschool?igsh=dWNjMnZ4c2RjYjhx&utm_source=qr',
    icon: defineComponent({
      render: () =>
        h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', {
            'fill-rule': 'evenodd',
            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
            'clip-rule': 'evenodd',
          }),
        ]),
    }),
  },
]

const tiers = [
  {
    name: 'Ervaring Pakket',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '€1100',
    description: 'Perfect voor leerlingen met rijervaring die snel en doelgericht hun rijbewijs willen halen met efficiënte en gerichte begeleiding. 🚗✅',
    features: ['15 uren autorijles', 'Vaste instructeur', ' Voor ervaren leerlingen', 'Praktijkexamen CBR', 'Gespreid betalen'],
    mostPopular: false,
  },
  {
    name: 'Standaard Pakket',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '1750',
    description: 'De ideale keuze voor beginnende bestuurders die stap voor stap zelfverzekerd en goed voorbereid hun rijbewijs willen halen. 🚗🎯',
    features: [
      '30 uren autorijles',
      'Vaste instructeur',
      'Warming-up voor examen',
      'Praktijkexamen CBR',
      'Gespreid betalen'
    ],
    mostPopular: true,
  },
  {
    name: 'Comfort Pakket',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '€2250',
    description: 'Voor extra zekerheid en uitgebreide begeleiding, met voldoende tijd om alle rijvaardigheden op een ontspannen manier onder de knie te krijgen. 🚗🛡️',
    features: [
      '40 uren autorijles',
      'Vaste instructeur',
      'Warming-up voor examen',
      'Praktijkexamen CBR',
      'Gespreid betalen'
    ],
    mostPopular: false,
  },
]

const mobileMenuOpen = ref(false)

// Add smooth scrolling for anchor links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Call the function when the component is mounted
onMounted(() => {
  setupSmoothScrolling();
});

// Import onMounted at the top of the script
import { onMounted } from 'vue';
</script>