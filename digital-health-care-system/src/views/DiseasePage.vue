<template>
  <div>
    <div><NavBar /></div>
    <div>
      <div v-if="loading">
        <BaseSpinner />
        <div @click="fetchData">Get Diagnosis Reports</div>
      </div>
      <div v-else>{{ patient }}</div>
    </div>
  </div>
</template>
<script setup>
import NavBar from "@/components/NavBar.vue";
import BaseSpinner from "@/components/BaseSpinner.vue";
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const loading = ref(false);
const patient = reactive({
  fullname: "",
  age: null,
  gender: "",
  //symptoms: [],
  disease: "",
  //prescription: [],
});
const fetchData = async function () {
  const data = await store.getters["patient/patient"];
  patient.fullname = data.fullname;
  patient.age = data.age;
  patient.gender = data.gender;
  patient.disease = data.disease;
  loading.value = false;
};

onMounted(async () => {
  loading.value = true;

  await store.dispatch("patient/getDisease");
});
</script>