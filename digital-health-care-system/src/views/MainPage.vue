<template>
  <AppLayout>
    <main class="space-y-10 mb-40 flex">
      <SymptomCategory :locations="locations" :opted="active" @activate-location="selectedRegion" />
      <SymptomsPage :location="active" @add-symptom="pushSymptom" @remove-symptom="deleteSymptom" />
      <!-- <SelectedSymptoms
        v-if="count > 0"
        :symptoms="selectedSymptoms"
        @remove-symptom="clearSymptom"
      /> -->
      <!-- <div class="relative h-32 w-32 ...">
        <div class="absolute inset-y-0 right-0 w-16 ...">
          <SymptomCheck removesymptom />
        </div>
      </div> -->
      <CartPage :symptomcount="count" />
    </main>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../layouts/AppLayout.vue'
import SymptomCategory from './SymptomCategory.vue'
import SymptomsPage from './SymptomsPage.vue'
//import SelectedSymptoms from './SelectedSymptoms.vue'
import CartPage from './CartPage.vue'

//import SymptomCheck from './/SymptomCheck.vue'
import { reactive, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const locations = ref([])
const active = ref('Brain/Nervous System')
const selectedSymptoms = ref([])
const count = ref(0)
const pushSymptom = async function (data) {
  console.log('push symptom')
  console.log(data.name)
  const payload = reactive({
    category: active.value,
    name: data.name
  })
  await store.dispatch('patient/addSymptom', payload)

  selectedSymptoms.value = await store.getters['patient/symptoms']
  count.value += 1
}
const deleteSymptom = async function (index) {
  selectedSymptoms.value = selectedSymptoms.value.filter((id) => id.name != index.name)
  await store.dispatch('patient/dropSymptom', index.name)
  selectedSymptoms.value = await store.getters['patient/symptoms']
  count.value -= 1
}
const clearSymptom = async (data) => {
  const payload = reactive({
    category: data.category,
    symptom: data.name
  })
  await store.dispatch('symptoms/changeStatus', payload)
  selectedSymptoms.value = selectedSymptoms.value.filter((id) => id.name != data.name)
  await store.dispatch('patient/dropSymptom', data.name)
  selectedSymptoms.value = await store.getters['patient/symptoms']
  count.value -= 1
}
const selectedRegion = function (data) {
  active.value = data
}
onMounted(async () => {
  locations.value = await store.getters['symptoms/getLocations']
  console.log('locations.value')
  console.log(locations.value)
  selectedSymptoms.value = await store.getters['patient/symptoms']
  count.value = selectedSymptoms.value.length
  // if (locations.value.length === 0) {
  //   router.push('/')
  // }
})
</script>./CheckoutPage.Vue./SymptomCheck.vue