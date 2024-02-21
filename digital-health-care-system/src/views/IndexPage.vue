<template >
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
import { onBeforeMount } from "vue";
onBeforeMount(() => {
  //window.location.reload();
});
</script>
<style scoped>
/* Main container */
/* Main container */
.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  background-image: linear-gradient(to bottom right, #ffffff, #f5f5f5);
}

/* Logo container */
.logo-container {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 20px;
}

/* Form container */
.form-container {
  width: 60%;
  padding: 40px;
  border-radius: 20px;
}
</style>
