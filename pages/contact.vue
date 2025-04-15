<template>
    <div class="bg-white">
      <!-- Header -->
      <Header />
  
      <main class="isolate">
        <!-- Contact Section -->
        <section class="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-12">
              <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                Neem Contact Op
              </h1>
              <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Heb je vragen over onze rijlessen in <strong>Hoorn</strong> of <strong>Zaandam</strong>? 
                Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met je op.
              </p>
            </div>
  
            <div class="flex flex-col lg:flex-row gap-12">
              <!-- Contact Form -->
              <div class="lg:w-2/3 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <form @submit.prevent="sendEmail" class="space-y-6">
                  <div v-if="formStatus.success" class="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6">
                    {{ formStatus.message }}
                  </div>
                  <div v-if="formStatus.error" class="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6">
                    {{ formStatus.message }}
                  </div>
  
                  <div>
                    <label for="naam" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Naam</label>
                    <input
                      type="text"
                      id="naam"
                      v-model="formData.naam"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
  
                  <div>
                    <label for="telefoonnummer" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefoonnummer</label>
                    <input
                      type="tel"
                      id="telefoonnummer"
                      v-model="formData.telefoonnummer"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
  
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      v-model="formData.email"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
  
                  <div>
                    <label for="onderwerp" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Onderwerp</label>
                    <select
                      id="onderwerp"
                      v-model="formData.onderwerp"
                      required
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="" disabled selected>Selecteer een onderwerp</option>
                      <option value="Informatie rijlessen">Informatie rijlessen</option>
                      <option value="Proefles aanvragen">Proefles aanvragen</option>
                      <option value="Pakketprijs">Pakketprijs</option>
                      <option value="Overig">Overig</option>
                    </select>
                  </div>
  
                  <div>
                    <label for="bericht" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bericht (optioneel)</label>
                    <textarea
                      id="bericht"
                      v-model="formData.bericht"
                      rows="4"
                      class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
  
                  <div class="flex items-center">
                    <input
                      id="privacy"
                      type="checkbox"
                      v-model="formData.privacy"
                      required
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label for="privacy" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      Ik ga akkoord met de verwerking van mijn gegevens
                    </label>
                  </div>
  
                  <div>
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span v-if="isSubmitting">Verzenden...</span>
                      <span v-else>Verstuur bericht</span>
                    </button>
                  </div>
                </form>
              </div>
  
              <!-- Contact Information -->
              <div class="lg:w-1/3 space-y-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Contactgegevens</h3>
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div class="ml-3 text-gray-600 dark:text-gray-300">
                        <p>+31 6 57157263</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div class="ml-3 text-gray-600 dark:text-gray-300">
                        <p>Lesgebieden:</p>
                        <p>Hoorn & Zaandam</p>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Openingstijden</h3>
                  <div class="space-y-2 text-gray-600 dark:text-gray-300">
                    <p class="flex justify-between">
                      <span>Maandag t/m Vrijdag</span>
                      <span>08:00 - 20:00</span>
                    </p>
                    <p class="flex justify-between">
                      <span>Zaterdag</span>
                      <span>09:00 - 17:00</span>
                    </p>
                    <p class="flex justify-between">
                      <span>Zondag</span>
                      <span>Gesloten</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from 'vue';
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  
  // EmailJS setup
  let emailjs;
  onMounted(async () => {
    // Dynamically import EmailJS only on client-side
    emailjs = await import('emailjs-com');
  });
  
  // Initial form data
  const formData = reactive({
    naam: '',
    telefoonnummer: '',
    email: '',
    onderwerp: '',
    bericht: '',
    privacy: false
  });
  
  const isSubmitting = ref(false);
  const formStatus = reactive({
    success: false,
    error: false,
    message: ''
  });
  
  // Import Vite environment variables
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;
  
  // Send email using EmailJS
  const sendEmail = async () => {
    try {
      isSubmitting.value = true;
      formStatus.success = false;
      formStatus.error = false;
      
      if (!emailjs) {
        throw new Error('EmailJS not loaded');
      }
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.naam,
        phone_number: formData.telefoonnummer,
        from_email: formData.email,
        subject: formData.onderwerp,
        message: formData.bericht || 'Geen bericht ingevoerd'
      };
      
      await emailjs.default.send(serviceID, templateID, templateParams, userID);
      
      // Reset form on success
      formStatus.success = true;
      formStatus.message = 'Bedankt! Je bericht is succesvol verzonden. We nemen zo snel mogelijk contact met je op.';
      
      // Reset form fields
      Object.keys(formData).forEach(key => {
        if (key === 'privacy') {
          formData[key] = false;
        } else {
          formData[key] = '';
        }
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      formStatus.error = true;
      formStatus.message = 'Er is iets misgegaan bij het verzenden van je bericht. Probeer het later nog eens of neem telefonisch contact op.';
    } finally {
      isSubmitting.value = false;
      
      // Scroll to top of form to show status message
      setTimeout(() => {
        const formElement = document.querySelector('form');
        if (formElement) {
          window.scrollTo({
            top: formElement.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };
  
  // Meta tags for SEO
  useHead({
  title: 'Contact - SafeWay Rijschool',
  meta: [
    { name: 'description', content: 'Neem contact op met SafeWay Rijschool voor rijlessen in Hoorn en Zaandam. Vul ons contactformulier in of bel ons direct.' },
    
    // OpenGraph meta tags
    { property: 'og:title', content: 'Neem contact op met SafeWay Rijschool' },
    { property: 'og:description', content: 'Contacteer ons voor rijlessen in Hoorn en Zaandam. Wij helpen je graag verder!' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.safeway-rijschool.nl/contact' }, // Change to your actual contact page URL
    { property: 'og:image', content: 'https://www.safeway-rijschool.nl/images/contact-og-image.jpg' },
    { property: 'og:image:alt', content: 'Neem contact op met SafeWay Rijschool' },
    { property: 'og:site_name', content: 'SafeWay Rijschool' },
    { property: 'og:locale', content: 'nl_NL' },
    { property: 'og:locale:alternate', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'ar_EG' },
    { property: 'og:site_name', content: 'SafeWay Rijschool' },
    { property: 'og:updated_time', content: new Date().toISOString() },
    // Twitter Card (optional)
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Neem contact op met SafeWay Rijschool' },
    { name: 'twitter:description', content: 'Contacteer ons voor rijlessen in Hoorn en Zaandam. Wij helpen je graag verder!' },
    { property: 'og:image', content: 'https://www.safeway-rijschool.nl/images/contact-og-image.jpg' },
    { name: 'twitter:image', content: 'https://www.safeway-rijschool.nl/images/contact-og-image.jpg' },
    { name: 'twitter:image:alt', content: 'Neem contact op met SafeWay Rijschool' },
    { name: 'twitter:site', content: '@safewayrijschool' },
    { name: 'twitter:creator', content: '@safewayrijschool' },
    { name: 'twitter:label1', content: 'Prijs' },
    { name: 'twitter:data1', content: '€70 voor 90 minuten' },
    { name: 'twitter:label2', content: 'Locatie' },
    { name: 'twitter:data2', content: 'Hoorn & Zaandam' },
    { name: 'twitter:label3', content: 'Contact' },
    { name: 'twitter:data3', content: '+31 6 57157263' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.safeway-rijschool.nl/contact' }
  ]
});

  </script>