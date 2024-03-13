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
        <div class="p-4 md:p-5">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white">{{ report.disease }}</h2>

          <h3 class="font-bold">prescription:</h3>
          <ol>
            <li v-for="id in report.prescription" :key="id">{{ id }}</li>
          </ol>
        </div>
      </div>
    </main>
  </AppLayout>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
import { useStore } from 'vuex'
import { onMounted, reactive, ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
const report = reactive({
  disease: '',
  prescription: []
})
const store = useStore()
const loading = ref(false)
const fetchData = async () => {
  loading.value = true
  const sympt = []
  for (const symptom of store.getters['patient/symptoms']) {
    sympt.push(symptom.name)
  }
  console.log('symp' + sympt)
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
    const data = res.json()
    report.disease = data.disease
    report.prescription = data.prescription
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