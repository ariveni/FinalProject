<template>
  <div class="main">
    <div><NavBar /></div>
    <div>
      <div v-if="loading" class="loader">
        <div>
          <BaseSpinner />
          <div class="btn">
            <button class="learn-more" @click="fetchData">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Get Diagnosis Report</span>
            </button>
          </div>
        </div>
      </div>
      <div v-else class="main-body">
        <div class="card">
          <div class="card-image">
            <h1>{{ patient.disease }}</h1>
          </div>
          <p class="card-title">{{ patient.fullname }}</p>
          <div class="card-body">
            <h3>Age: {{ patient.age }}</h3>
            <h3>Gender: {{ patient.gender }}</h3>
            <div>
              <h2>prescription</h2>

              <ul>
                <li
                  v-for="prescription in patient.prescription"
                  :key="prescription"
                >
                  {{ prescription }}
                </li>
              </ul>
            </div>
          </div>
          <p class="footer">
            Report by <span class="by-name">Digital Health Care System</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import NavBar from "@/components/NavBar.vue";
//import LogoImage from "@/components/LogoImage.vue";
import BaseSpinner from "@/components/BaseSpinner.vue";
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const loading = ref(false);
const patient = reactive({
  fullname: "",
  age: null,
  gender: "",
  //symptoms: [],
  disease: "",
  prescription: [],
});
const fetchData = async function () {
  const data = await store.getters["patient/patient"];
  patient.fullname = data.fullname;
  patient.age = data.age;
  patient.gender = data.gender;
  patient.disease = data.disease;
  patient.prescription = data.prescription;
  loading.value = false;
  if (patient.fullname === "") {
    router.push("/");
  }
};

onMounted(async () => {
  loading.value = true;

  await store.dispatch("patient/getDisease");
});
</script>

<style scoped>
.main {
  background-color: white;
}
.main-body {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
}
.loader {
  height: 80vh;
}
.card {
  padding: 20px;
  width: 530px;
  min-height: 470px;
  border-radius: 20px;
  background: #e8e8e8;
  box-shadow: 5px 5px 6px #dadada, -5px -5px 6px #f6f6f6;
  transition: 0.4s;
}

.card:hover {
  translate: 0 -10px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #2e54a7;
  margin: 15px 0 0 10px;
}

.card-image {
  min-height: 170px;
  background-color: #c9c9c9;
  border-radius: 15px;
  box-shadow: inset 8px 8px 10px #c3c3c3, inset -8px -8px 10px #cfcfcf;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-body {
  margin: 13px 0 0 10px;
  color: rgb(31, 31, 31);
  font-size: 15px;
}

.footer {
  float: right;
  margin: 28px 0 0 18px;
  font-size: 13px;
  color: #636363;
}

.by-name {
  font-weight: 700;
}
.btn {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  border: none;
}
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}

button.learn-more {
  width: 20rem;
  height: auto;
}

button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #080808;
  border-radius: 1.625rem;
}

button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}

button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #0c0c0c;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}

button:hover .circle {
  width: 100%;
}

button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
}

button:hover .button-text {
  color: #fff;
}
</style>