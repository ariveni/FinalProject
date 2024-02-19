<template>
  <div class="symptom-container">
    <p class="symptom-text">{{ props.symptom }}</p>
    <div></div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  symptom: String,
});
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
.symptom-text {
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
</style>