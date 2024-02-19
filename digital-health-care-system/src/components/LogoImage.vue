<template>
  <div class="index-style">
    <img
      class="logo"
      src="../assets/Logo.png"
      alt="Digital Health Care System"
    />
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
}
</style>