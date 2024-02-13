<template>
  <div class="main">
    <div class="logo">
      <LogoImage logostyle="main" />
    </div>
    <div class="userform">
      <DetailsForm />
    </div>
  </div>
</template>
<script setup>
import LogoImage from "../components/LogoImage.vue";
import DetailsForm from "./DetailsForm.vue";
</script>
<style scoped>
.main {
  display: flex;
}
.logo {
  height: 100vh;
  width: 50vw;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.userform {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
