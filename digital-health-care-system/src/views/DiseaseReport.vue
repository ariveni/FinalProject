<template>
  <AppLayout>
    <div v-if="loading" class="relative flex justify-center items-center p-80">
      <div
        class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"
      ></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        class="rounded-full h-28 w-28"
      />
    </div>
    <main
      v-else
      class="space-y-10 mb-40 p-40 flex bg-[url(src/assets/HomePage.jpg)] bg-cover bg-center bg-no-repeat"
      refs="content"
    >
      <div>
        <img src="../assets/Doctor.png" alt="" class="img-css" />
      </div>
      <div
        class="img-css flex flex-col w-96 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      >
        <img
          class="w-full h-auto rounded-t-xl"
          src="../assets/diagnosis.jpg"
          alt="Image Description"
        />

        <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1 p-4">
          <h1 class="flex gap-3 items-center m-auto text-lg font-bold md:flex-col md:gap-2">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              ></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line></svg
            >{{ report.disease }}
          </h1>
          <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <li
              class="w-full bg-gray-100 p-3 rounded-md"
              v-for="id in report.prescription"
              :key="id"
            >
              {{ id.charAt(0).toUpperCase() + id.slice(1) }}
            </li>
          </ul>
        </div>
        <div v-if="0">
          <h4>{{ report.disease }}</h4>
          <ul>
            <li
              class="w-full bg-gray-100 p-3 rounded-md"
              v-for="id in report.prescription"
              :key="id"
            >
              {{ id.charAt(0).toUpperCase() + id.slice(1) }}
            </li>
          </ul>
          <h4>Reported by Digital Health care System</h4>
        </div>
        <button
          class="group inline-flex w-full items-center justify-center rounded-md bg-green-500 px-2 py-2 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-800"
          @click="download"
        >
          Download Report
        </button>
      </div>
    </main>
  </AppLayout>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
//import DownloadPdf from './DownloadPfd.vue'
import { useStore } from 'vuex'
import { onMounted, reactive, ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import jspdf from 'jspdf'
const report = reactive({
  disease: '',
  prescription: []
})
const store = useStore()
const loading = ref(false)
const download = () => {
  const pdf = new jspdf()
  const html = document.querySelector("[refs='content']").innerHTML // Change this line
  console.log(html)
  // html = this.$refs.content.innerHTML
  pdf.html(html, {
    x: -100,
    y: 10,

    callback: () => {
      pdf.save('report.pdf') // Ensure PDF is saved properly
    }
  })
  console.log(pdf)
}
const fetchData = async () => {
  loading.value = true
  const sympt = []
  for (const symptom of store.getters['patient/symptoms']) {
    sympt.push(symptom.name)
  }
  console.log('symp..........' + sympt)
  const res = await fetch('http://127.0.0.1:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      symptoms: sympt
    })
  })
  if (res.ok) {
    const data = await res.json()
    console.log(data.disease + 'api data')
    report.disease = data.disease
    report.prescription = data.prescription
  } else {
    console.log(' no api data')
  }
  setTimeout(() => {
    if (report.disease === '') {
      toast('Internal Server Error!', {
        type: 'error',
        autoClose: 3000,
        dangerouslyHTMLString: true
      })
      console.log('error')
    } else {
      toast('Disease Predicted Successfully!', {
        type: 'success',
        autoClose: 2000,
        dangerouslyHTMLString: true
      })
      loading.value = false
    }
  }, 2000)
  console.log('Disease Report')
  console.log(new Date())
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