<template>
  <div class="region-container">
    <p class="region-text">{{ props.symptom.name }}</p>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  symptom: String,
});
</script>
<style scoped>
.region-container {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 15px;
  height: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.region-text {
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
</style>