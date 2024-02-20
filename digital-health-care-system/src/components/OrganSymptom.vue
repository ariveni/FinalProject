<template>
  <div
    class="symptom-container"
    :class="props.organName.status ? 'selected' : ''"
  >
    <button class="btn" v-if="!props.organName.status" @click="SelectSymptom">
      <i class="animation"></i>
      <p>{{ props.organName.name }}</p>
      <i class="animation"></i>
    </button>
    <button class="btn" v-else @click="DropSymptom">
      <i class="animation"></i>
      <span class="label">
        <img class="cancel" src="../assets/cancel.png" alt="" />
        <p>{{ props.organName.name }}</p>
      </span>
      <i class="animation"></i>
    </button>
    <div></div>
  </div>
</template>
<script setup>
import { defineEmits, defineProps, reactive } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  organName: Object,
  location: String,
});
const emit = defineEmits(["addSymptom", "removeSymptom"]);
const store = useStore();
const SelectSymptom = async function () {
  const payload = reactive({
    category: props.location,
    symptom: props.organName.name,
  });
  await store.dispatch("symptoms/changeStatus", payload);
  emit("addSymptom", props.organName);
};
const DropSymptom = async function () {
  const payload = reactive({
    category: props.location,
    symptom: props.organName.name,
  });
  await store.dispatch("symptoms/changeStatus", payload);
  emit("removeSymptom", props.organName.name);
};
</script>
<style scoped>
.symptom-container {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 15px;
  height: 100px;
  width: 200px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 50px 100px -20px rgba(50, 50, 93, 0.25),
    0px 30px 60px -30px rgba(0, 0, 0, 0.3),
    inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35);
}
.symptom-text {
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
.cancel {
  width: 50px;
}

.label {
  display: flex;
}
.btn {
  outline: 0;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: #40b3a2;
  min-width: 200px;
  max-width: 100%;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 16px 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.95;
}

.btn .animation {
  border-radius: 100%;
  animation: ripple 0.6s linear infinite;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1),
      0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1),
      0 0 0 60px rgba(255, 255, 255, 0.1);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1),
      0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1),
      0 0 0 80px rgba(255, 255, 255, 0);
  }
}
</style>