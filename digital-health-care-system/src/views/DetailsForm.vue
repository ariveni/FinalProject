<template>
  <form @submit.prevent="start">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" class="form-control" />
    </div>
    <div class="form-group">
      <label for="age">Age</label>
      <input type="number" id="age" class="form-control" />
    </div>
    <div class="form-group">
      <label for="gender">Gender</label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked
        />
        <label class="form-check-label" for="male"> Male </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="female"
          name="gender"
          value="female"
        />
        <label class="form-check-label" for="female"> Female </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Get Started</button>
  </form>
</template>
<script setup>
</script>
<style scoped>
form {
  width: 30rem;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 1rem;
}
.form-control {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}
.form-check-input {
  margin-right: 0.5rem;
}
.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
</style>