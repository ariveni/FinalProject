<template>
  <AppLayout>
    <main class="space-y-10 mb-40">
      <HeroSection />
      <Features />
    </main>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import Features from '../components/Features.vue'
import HeroSection from '../components/HeroSection.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const store = useStore()
onMounted(async () => {
  await store.dispatch('symptoms/addData')
  await store.dispatch('patient/initializeData')
  toast('Welcome to Digital Health Care System', {
    type: 'success',
    autoClose: 2000,
    dangerouslyHTMLString: true,
    transition: 'zoom'
  })
})
</script>
