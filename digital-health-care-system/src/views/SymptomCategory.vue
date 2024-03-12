<template>
  <div x-data="setup()" x-init="$refs.loading.classList.add('hidden');">
    <div class="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <!-- Sidebar -->
      <div
        v-if="isSidebarOpen"
        x-transition:enter="transform transition-transform duration-300 ease-in-out"
        x-transition:enter-start="-translate-x-full"
        x-transition:enter-end="translate-x-0"
        x-transition:leave="transform transition-transform duration-300 ease-in-out"
        x-transition:leave-start="translate-x-0"
        x-transition:leave-end="-translate-x-full"
        x-show="isSidebarOpen"
        class="fixed inset-y-0 z-10 flex w-80"
      >
        <!-- Curvy shape -->
        <svg
          class="absolute inset-0 w-full h-full text-white"
          style="filter: drop-shadow(15px 0 15px #00000030)"
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
          />
        </svg>
        <!-- Sidebar content -->
        <div class="z-10 flex flex-col flex-1">
          <div class="flex items-center justify-between flex-shrink-0 w-64 p-4">
            <!-- Logo -->
            <div>
              <h1 class="text-3xl font-extrabold sm:text-2xl">
                <strong class="block font-extrabold text-green-700"> Symptom Categories </strong>
              </h1>
            </div>
            <!-- Close btn -->
            <button
              @click="changeSidebarStatus"
              class="p-1 rounded-lg focus:outline-none focus:ring"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav class="flex flex-col flex-1 w-64 p-4 mt-4">
            <div
              class="flex items-center space-x-4 p-1.5"
              v-for="loc in props.locations"
              :key="loc"
              @click="selectSymptomCategory(loc)"
            >
              <!-- <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg> -->
              <img :src="getIcon(loc)" alt="" class="w-6 h-6" aria-hidden="true" />
              <span :class="selectedLocation(loc)">{{ loc }}</span>
            </div>
          </nav>
        </div>
      </div>
      <main class="flex flex-col items-center justify-center flex-1 w-30">
        <!-- Page content -->
        <button
          @click="changeSidebarStatus"
          class="fixed p-2 text-white bg-black rounded-lg top-5 left-5"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span class="sr-only">Open menu</span>
        </button>
        <h1 class="sr-only">Home</h1>
        <div>
          <img src="../assets/symptoms.png" alt="" aria-hidden="true" class="w-20 h-auto" />
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  locations: Array,
  opted: String
})
const emit = defineEmits(['activateLocation'])
const isSidebarOpen = ref(false)
const changeSidebarStatus = function () {
  isSidebarOpen.value = !isSidebarOpen.value
}
const selectedLocation = (value) => {
  if (props.opted === value) {
    return 'block font-extrabold text-green-700'
  }
  return ''
}
const selectSymptomCategory = (value) => {
  isSidebarOpen.value = !isSidebarOpen.value
  emit('activateLocation', value)
}
const getIcon = (value) => {
  console.log('../assets/location/' + value + '.jpg')
  return '../assets/location/' + value + '.jpg'
}
</script>

<style scoped>
.sidebar-transition {
  transition: transform 0.3s ease;
}
</style>