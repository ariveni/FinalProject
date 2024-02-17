<template>
  <div class="main-container">
    <div class="logo-container">
      <LogoImage logostyle="main" />
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
  display: flex;
  height: 100vh;
}
.logo-container {
  width: 40%;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-container {
  width: 60%;
  padding: 2rem;
}
</style>
