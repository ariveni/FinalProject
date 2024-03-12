<template>
  <div>
    <h3>{{ props.symptomcount }}</h3>
    <img src="../assets/container.png" alt="" class="h-20 w-20" />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const props = defineProps({
  symptomcount: Number
})
const store = useStore()
const symptomsCount = ref(0)
const getCount = async () => {
  symptomsCount.value = await store.getters['patient/getSymptomsCount']
}
onMounted(() => {
  getCount()
})
</script>
<style scoped>
h3 {
  position: absolute;
  top: 92px;
  right: 170px;
  color: red;
}
</style>