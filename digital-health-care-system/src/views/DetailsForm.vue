<template>
  <div>
    <form @submit.prevent="start">
      <div>
        <label for="name"> Name</label>
        <input type="text" id="name" /><br />
      </div>
      <div>
        <label for="age"> Age</label>
        <input type="number" id="age" /><br />
      </div>
      <div>
        <label for="gender">Gender</label>
        <input type="radio" id="gender" name="gender" value="male" checked />
        Male
        <input type="radio" id="gender" name="gender" value="female" />
        Female<br />
      </div>
      <router-link to="/home">Get Started</router-link>
    </form>
  </div>
</template>
<script setup>
</script>