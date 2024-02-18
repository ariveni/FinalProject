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
/* Main container */
/* Main container */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  background-image: linear-gradient(to bottom right, #ffffff, #f5f5f5);
}

/* Logo container */
.logo-container {
  margin-bottom: 20px;
}

/* Form container */
.form-container {
  width: 350px;
  padding: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Form container title */
.form-container h1 {
  margin-bottom: 30px;
  font-size: 24px;
  color: #333333;
  text-align: center;
}

/* Form control */
.form-control {
  margin-bottom: 20px;
}

/* Label */
label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  color: #666666;
}

/* Input */
input[type="text"],
input[type="number"],
input[type="radio"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Error message */
.error-message {
  margin-top: 5px;
  font-size: 14px;
  color: #ff0000;
}

/* Submit button */
button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333333;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #555555;
}
</style>
