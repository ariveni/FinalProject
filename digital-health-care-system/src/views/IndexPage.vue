<template>
  <div class="main-container">
    <div class="logo-container">
      <LogoImage logostyle="index-style" />
    </div>
    <div class="form-container">
      <DetailsForm />
    </div>
  </div>
</template>
<script setup>
import LogoImage from "../components/LogoImage.vue";
import DetailsForm from "./DetailsForm.vue";
</script>
<style scoped>
.main-container {
  margin: 0;
  width: 100%;
  height: 100vh;

  display: flex;
}
.logo-container {
  width: 40%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-container {
  width: 60%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
