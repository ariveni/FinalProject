<template>
  <div class="log-container">
    <img
      class="main-logo"
      src="../assets/ProjectLogo.png"
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
.logo-container {
  margin: 0;
  padding: 0;
  width: 30%;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-logo {
  width: 30%;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-logo {
  width: 100px;
  height: 100px;
}
.form-logo {
  width: 50px;
  height: 50px;
}
</style>