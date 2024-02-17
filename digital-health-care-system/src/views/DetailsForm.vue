<template>
  <div class="main-container">
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
  </div>
</template>
<script setup>
</script>
<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 500px;
  height: 200px;
}
.form-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
  margin-bottom: 10px;
}

.form-group label {
  margin-bottom: 0;
}

.form-group .form-control {
  margin-left: 10px;
}
</style>