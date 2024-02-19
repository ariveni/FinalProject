<template>
  <div class="symptom-container" :class="getClass" @click="SelectSymptom">
    <p class="symptom-text">{{ props.organName }}</p>
    <div></div>
  </div>
</template>
<script setup>
import { defineEmits, defineProps, ref, computed } from "vue";
const props = defineProps({
  organName: String,
});
const emit = defineEmits(["addSymptom"]);
const status = ref(false);
const getClass = computed(() => {
  if (status.value) {
    return "selected";
  }
  return "";
});
const SelectSymptom = function () {
  status.value = true;
  emit("addSymptom", props.organName);
};
</script>
<style scoped>
.symptom-container {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 15px;
  height: 50px;
  width: 200px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.selected {
  background-color: rgb(47, 228, 62);
}
.symptom-text {
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
</style>