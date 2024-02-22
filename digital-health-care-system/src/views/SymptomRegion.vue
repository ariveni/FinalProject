<template>
  <div :class="select" @click="selectRegion">
    <p>{{ props.region }}</p>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, computed } from "vue";
const props = defineProps({
  region: String,
  opted: String,
});
const emit = defineEmits(["activateLocation"]);
const selectRegion = function () {
  emit("activateLocation", props.region);
};
const select = computed(() => {
  if (props.region === props.opted) {
    return "selected";
  }
  return "";
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
.selected {
  background-color: cadetblue;
}
.region-text {
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
</style>