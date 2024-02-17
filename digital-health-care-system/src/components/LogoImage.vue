<template>
  <div class="home-style">
    <img src="../assets/Logo.png" alt="Digital Health Care System" />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  logostyle: String,
});
</script>
<style scoped>
.index-style {
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  background-color: #fe676e;
}
.home-style {
  width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
}
</style>