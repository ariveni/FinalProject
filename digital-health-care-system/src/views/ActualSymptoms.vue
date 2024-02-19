<template>
  <div>
    <div v-if="loading.value">
      <BaseSpinner />
    </div>
    <div class="sym-container" v-else>
      <div class="sym-item" v-for="symptom in symptoms" :key="symptom">
        <OrganSymptom :organName="symptom" @add-symptom="pushSymptom" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, defineProps, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import OrganSymptom from "@/components/OrganSymptom.vue";
import BaseSpinner from "../components/BaseSpinner.vue";
const props = defineProps({
  symptomLoc: String,
});
const emit = defineEmits(["addSymptom"]);
const store = useStore();
const symptoms = ref([]);
const loading = ref(false);
const pushSymptom = function (data) {
  emit("addSymptom", data);
};
const fetchSymptoms = async () => {
  loading.value = true;
  await store.dispatch("symptoms/addLocation", props.symptomLoc);
  symptoms.value = await store.getters["symptoms/getSymptoms"];
  loading.value = false;
};
onMounted(fetchSymptoms);
watch(() => props.symptomLoc, fetchSymptoms);
</script>
<style scoped>
.sym-container {
  display: inline-grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}

.sym-item {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>