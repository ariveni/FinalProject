<template>
  <div class="main">
    <h1>{{ props.symptomcount }}</h1>
    <img src="../assets/container.png" alt="" class="img" />
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
.main {
  position: fixed;
  right: 20px;
}
h1 {
  font-size: 2em;
  position: absolute;
  top: 96px;
  right: 47px;
  color: red;
}
.img {
  width: 150px;
  height: 150px;
}
</style>