<template>
  <AppLayout>
    <section
      class="h-screen flex py-10 sm:py-16 lg:py-20 bg-[url(src/assets/HomePage.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div>
        <img src="../assets/Doctor.png" alt="" class="img-css" />
      </div>
      <div class="p-10 px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center">
          <h1 class="text-2xl font-semibold text-gray-900">Symptoms Facing</h1>
        </div>

        <div class="mx-auto mt-8 max-w-md md:mt-12">
          <div class="rounded-3xl bg-white shadow-lg">
            <div class="px-4 py-6 sm:px-8 sm:py-10" v-if="symptoms.length">
              <div class="flow-root">
                <ul class="-my-8">
                  <li
                    class="flex flex-col space-y-2 py-5 text-left sm:flex-row sm:space-x-2 sm:space-y-0"
                    v-for="symptom in symptoms"
                    :key="symptom"
                  >
                    <div class="shrink-0 relative">
                      <!-- <img
                      class="h-24 w-24 max-w-full rounded-lg object-cover"
                      src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                      alt=""
                    /> -->
                    </div>

                    <div class="relative flex flex-1 flex-col justify-between">
                      <div class="sm:col-gap-1 sm:grid sm:grid-cols-2">
                        <div class="pr-5 sm:pr-2">
                          <p class="text-base font-semibold text-gray-900">{{ symptom.name }}</p>
                        </div>
                      </div>

                      <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button
                          type="button"
                          class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                          @click="removeSymptom(symptom)"
                        >
                          <svg
                            class="h-5 w-5"
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
                              class=""
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="mt-6 text-center">
                <router-link
                  to="/report"
                  class="group inline-flex w-full items-center justify-center rounded-md bg-green-500 px-2 py-2 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-800"
                >
                  Start Diagnosis
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
            <div v-else class="mt-6 text-center">
              <p>No Symptoms seleted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
import { onMounted, ref, reactive } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const symptoms = ref([])
const removeSymptom = async (symptom) => {
  const payload = reactive({
    category: symptom.category,
    symptom: symptom.name
  })
  await store.dispatch('symptoms/changeStatus', payload)
  symptoms.value = symptoms.value.filter((id) => id.name != symptom.name)
  await store.dispatch('patient/dropSymptom', symptom.name)
  symptoms.value = await store.getters['patient/symptoms']
}

const fetchData = async () => {
  symptoms.value = await store.getters['patient/symptoms']
}
onMounted(() => {
  fetchData()
})
</script>
<style scoped>
.img-css {
  filter: drop-shadow(10px 7px 10px black);
}
</style>