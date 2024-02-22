<template>
  <section>
    <div class="card">
      <div class="main-container">
        <form class="form-submission" @submit.prevent="submitForm">
          <div class="input-text">
            <label for="fullname"><span>FullName</span></label>
            <input
              type="text"
              id="fullname"
              v-model.trim="user.fullname"
              @blur="fullnameClear"
            />

            <div class="bar"></div>
            <p v-if="!errors.fullname">FullName cannot be empty</p>
          </div>
          <div class="input-text">
            <label for="age">Age</label>
            <input
              type="text"
              id="age"
              v-model.trim="user.age"
              @blur="ageClear"
            />

            <div class="bar"></div>
            <p v-if="!errors.age">Age cannot be empty</p>
          </div>
          <div class="input-text">
            <Label>Gender</Label>
            <div class="radio">
              <label for="male">Male </label>
              <input
                type="radio"
                id="male"
                value="M"
                v-model="user.gender"
                @blur="genderClear"
              />
            </div>
            <div class="radio">
              <label for="female">Female</label>
              <input
                type="radio"
                id="female"
                value="F"
                v-model="user.gender"
                @blur="genderClear"
              />
            </div>
            <p v-if="!errors.gender">Must select any one of these</p>
          </div>

          <button class="button-82-pushable" role="button">
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text"> Get Started </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();
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
const submitForm = async function () {
  validateForm();
  if (errors.formIsValid === true) {
    await store.dispatch("patient/addPatient", user);
    router.push("/home");
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
  background: #ffffff;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */
.main-container {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80%;
  height: 80%;
}

/* Form styles */
.form-submission {
  max-width: 400px;
}

.input-text,
.form-control {
  margin-bottom: 20px;
}

.input-text input,
.form-control input,
.form-control label {
  display: block;
  width: 100%;
}

.input-text input,
.form-control input {
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  font-size: 16px;
  margin-top: 5px;
}

.input-text input:focus,
.form-control input:focus {
  outline: none;
  border-bottom-color: #007bff;
}

.input-text label,
.form-control label {
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.bar {
  position: relative;
  height: 2px;
  background-color: #333;
}

/* Error message styles */
p {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

/* Button styles */
.button-82-pushable {
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin-top: 20px;
}

.button-82-shadow,
.button-82-edge,
.button-82-front {
  display: inline-block;
  transition: all 0.3s;
}

.button-82-pushable:hover .button-82-shadow {
  transform: translateY(-50%);
}

.button-82-pushable:hover .button-82-front {
  transform: translateY(50%);
}

.button-82-pushable:hover .button-82-edge {
  transform: scaleX(1.2);
}

.button-82-shadow,
.button-82-edge,
.button-82-front {
  background-color: #007bff;
  border-radius: 5px;
}

.button-82-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0056b3;
  z-index: -1;
}

.button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #0056b3;
  z-index: -1;
}

.button-82-front {
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  z-index: 1;
}
.radio {
  display: flex;
}
</style>