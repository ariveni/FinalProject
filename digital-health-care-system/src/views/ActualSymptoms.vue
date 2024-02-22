<template>
  <div>
    <div v-if="loading.value">
      <BaseSpinner />
    </div>
    <div class="sym-container" v-else>
      <section class="text-white-600 body-font">
        <div class="container px-2 py-24 mx-auto">
          <div
            class="flex flex-wrap w-full mb-5 flex-col items-center text-center"
          >
            <h1
              class="sm:text-5xl text-2xl font-medium title-font mb-2 text-white-100"
            >
              Symptoms
            </h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div class="p-4" v-for="symptom in symptoms" :key="symptom">
              <div class="border border-gray-200 p-6 rounded-lg">
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  <OrganSymptom
                    :organName="symptom"
                    @add-symptom="pushSymptom"
                    @remove-symptom="deleteSymptom"
                    :location="props.symptomLoc"
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
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
const emit = defineEmits(["addSymptom", "removeSymptom"]);
const store = useStore();
const symptoms = ref([]);
const loading = ref(false);
const pushSymptom = function (data) {
  emit("addSymptom", data);
};
const deleteSymptom = function (data) {
  emit("removeSymptom", data);
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