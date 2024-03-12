<template>
  <!-- <div class="p-10 max-w-2xl mt-10">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="flex items-center justify-between px-4 py-3 bg-gray-200">
        <h1 class="text-lg font-bold">Symptoms Facing</h1>
      </div>
      <div class="p-4">
        <div class="flex items-center mb-4" v-for="symptom in props.symptoms" :key="symptom">
           <img
            class="h-16 w-16 object-contain rounded-lg mr-4"
            src="https://picsum.photos/200/200"
            alt="Product"
          /> 
          <div class="flex-1">
            <h2 class="text-lg font-bold">{{ symptom }}</h2>
          </div>
          <button class="text-gray-600 hover:text-red-500">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-200">
        <button
          class="block w-full mt-4 bg-green-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Start Diagnosis
        </button>
      </div>
    </div>
  </div> -->
  <section class="h-screen py-10 sm:py-16 lg:py-20">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-center">
        <h1 class="text-2xl font-semibold text-gray-900">Symptoms Facing</h1>
      </div>

      <div class="mx-auto mt-8 max-w-md md:mt-12">
        <div class="rounded-3xl bg-white shadow-lg">
          <div class="px-4 py-6 sm:px-8 sm:py-10">
            <div class="flow-root">
              <ul class="-my-8">
                <li
                  class="flex flex-col space-y-1 py-2 text-left sm:flex-row sm:space-x-2 sm:space-y-0"
                  v-for="symptom in props.symptoms"
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
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  symptoms: Array
})

const emit = defineEmits(['removeSymptom'])
const removeSymptom = async (symptom) => {
  emit('removeSymptom', symptom)
}
</script>