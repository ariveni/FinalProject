<template>
  <section>
    <div class="card">
      <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !errors.fullname }">
          <label for="fullname">FullName</label>
          <input
            type="text"
            id="fullname"
            v-model.trim="user.fullname"
            @blur="fullnameClear"
          />
          <p v-if="!errors.fullname">FullName cannot be empty</p>
        </div>
        <div class="form-control" :class="{ invalid: !errors.age }">
          <label for="age">Age</label>
          <input
            type="text"
            id="age"
            v-model.trim="user.age"
            @blur="ageClear"
          />
          <p v-if="!errors.age">Age cannot be empty</p>
        </div>
        <div class="form-control" :class="{ invalid: !errors.gender }">
          <h3>Gender</h3>
          <div>
            <input
              type="radio"
              id="male"
              value="M"
              v-model="user.gender"
              @blur="genderClear"
            />
            <label for="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              value="F"
              v-model="user.gender"
              @blur="genderClear"
            />
            <label for="female">Female</label>
          </div>
          <p v-if="!errors.gender">Must select any one of these</p>
        </div>
        <p v-if="!errors.formIsValid">Enter proper details before submiting</p>
        <button>Get Started</button>
      </form>
    </div>
  </section>
</template>
<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();
const user = reactive({
  fullname: "",
  age: null,
  gender: "",
});
const errors = reactive({
  fullname: true,
  age: true,
  gender: true,
  formIsValid: true,
});
const fullnameClear = function () {
  errors.fullname = true;
};
const ageClear = function () {
  errors.age = true;
};
const genderClear = function () {
  errors.gender = true;
};
const validateForm = function () {
  errors.formIsValid = true;
  if (user.fullname === "") {
    errors.fullname = false;
    errors.formIsValid = false;
  }
  if (user.age === null) {
    errors.age = false;
    errors.formIsValid = false;
  }
  if (user.gender === "") {
    errors.gender = false;
    errors.formIsValid = false;
  }
};
const submitForm = function () {
  validateForm();
  if (errors.formIsValid === true) {
    store.dispatch("patient/addPatient", user);
  }
};
</script>
<style scoped>
section {
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 100%;
  height: 500px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
p {
  color: red;
}
</style>