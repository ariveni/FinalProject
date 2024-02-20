<template>
  <div :class="logostyle">
    <img
      :class="imgstyle"
      src="../assets/Logo.png"
      alt="Digital Health Care System"
    />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  logostyle: String,
  imgstyle: String,
});
</script>
<style scoped>
.home {
  width: 50px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 200px;
  height: 100px;
  position: relative;
  left: 100%;
}
</style>