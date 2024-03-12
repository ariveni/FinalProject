<template>
  <section class="py-12 text-gray-100 sm:py-12 lg:py-16">
    <div class="px-4 mx-auto max-w-9xl sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
        <h1
          class="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-800"
        >
          Symptoms
        </h1>
      </div>
      <div
        class="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left"
      >
        <div class="relative" v-for="Symptom in symptoms" :key="Symptom">
          <div class="absolute -inset-1">
            <div
              class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"
            ></div>
          </div>
          <div class="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
            <div class="p-9">
              <!-- <svg
                class="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 8L20 8"
                  stroke="#111827"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M4 16L14 16"
                  stroke="#111827"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <ellipse
                  cx="7"
                  cy="8"
                  rx="3"
                  ry="3"
                  transform="rotate(90 7 8)"
                  stroke="#111827"
                  stroke-width="2"
                  stroke-linecap="round"
                ></ellipse>
                <ellipse
                  cx="17"
                  cy="16"
                  rx="3"
                  ry="3"
                  transform="rotate(90 17 16)"
                  stroke="#111827"
                  stroke-width="2"
                  stroke-linecap="round"
                ></ellipse>
              </svg> -->
              <div class="flex justify-between">
                <h3 :class="getBg(Symptom.status)">{{ Symptom.name }}</h3>
                <img
                  v-if="!Symptom.status"
                  src="../assets/add.png"
                  class="h-10 w-10"
                  aria-hidden="true"
                  @click="addSymptom(Symptom)"
                />
                <img
                  v-else
                  src="../assets/remove.png"
                  class="h-10 w-10"
                  aria-hidden="true"
                  @click="removeSymptom(Symptom)"
                />
              </div>
              <p class="mt-6 text-base text-gray-600">meaning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
const props = defineProps({
  location: String
})
const emit = defineEmits(['addSymptom', 'removeSymptom'])
const store = useStore()
const symptoms = ref([])
const getBg = (status) => {
  if (status) {
    return 'text-2xl font-bold text-green-700'
  }
  return 'text-2xl font-bold text-gray-900'
}
const addSymptom = async (data) => {
  const payload = reactive({
    category: props.location,
    symptom: data.name
  })

  await store.dispatch('symptoms/changeStatus', payload)
  emit('addSymptom', data)

  toast(data.name + ' Added Successfully', {
    type: 'success',
    autoClose: 1000,
    dangerouslyHTMLString: true
  })
}
const removeSymptom = async (data) => {
  const payload = reactive({
    category: props.location,
    symptom: data.name
  })

  await store.dispatch('symptoms/changeStatus', payload)
  emit('removeSymptom', data)

  toast(data.name + ' removed Successfully', {
    type: 'error',
    autoClose: 1000,
    dangerouslyHTMLString: true
  })
}
const fetchSymptoms = async () => {
  await store.dispatch('symptoms/addLocation', props.location)
  symptoms.value = await store.getters['symptoms/getSymptoms']
}

onMounted(fetchSymptoms)
watch(() => props.location, fetchSymptoms)
</script>
