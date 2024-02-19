<template>
  <div>
    <div v-if="loading.value">
      <BaseSpinner />
    </div>
    <div v-else v-for="symptom in symptoms" :key="symptom">
      <OrganSymptom :organName="symptom" />
    </div>
  </div>
</template>
<script setup>
import { defineProps, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import OrganSymptom from "@/components/OrganSymptom.vue";
import BaseSpinner from "../components/BaseSpinner.vue";
const props = defineProps({
  symptomLoc: String,
});
const store = useStore();
const symptoms = ref([]);
const loading = ref(false);

const fetchSymptoms = async () => {
  loading.value = true;
  await store.dispatch("symptoms/addLocation", props.symptomLoc);
  symptoms.value = await store.getters["symptoms/getSymptoms"];
  loading.value = false;
};
onMounted(fetchSymptoms);
watch(() => props.symptomLoc, fetchSymptoms);
</script>