<template>
  <div class="app-container">
    <div class="nav-bar">
      <NavBar />
    </div>
    <div class="main-body">
      <div class="leftPart">
        <ul class="menu bg-base-200 w-56 rounded-box">
          <li>
            <h1 class="menu-title">Symptom Categories</h1>
            <ul>
              <li v-for="loc in locations" :key="loc">
                <SymptomRegion
                  :region="loc"
                  :opted="active"
                  @activate-location="selectedRegion"
                />
              </li>
            </ul>
          </li>
        </ul>

        <div class="home-body" v-for="loc in locations" :key="loc"></div>
      </div>
      <div class="middlePart">
        <ActualSymptomsVue
          :symptomLoc="active"
          @add-symptom="pushSymptom"
          @remove-symptom="deleteSymptom"
        />
      </div>
      <div class="rightPart">
        <div class="subtitle">
          <div><h1>Choosen</h1></div>
        </div>
        <div class="home-body" v-for="sym in selectedSymptoms" :key="sym">
          <OptedSymptom :symptom="sym" />
        </div>
        <div v-if="count > 0" class="btn">
          <DiagnosisButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import SymptomRegion from "./SymptomRegion.vue";
import ActualSymptomsVue from "./ActualSymptoms.vue";
import OptedSymptom from "./OptedSymptoms.vue";
import DiagnosisButton from "@/components/DiagnosisButton.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const locations = ref([]);
const active = ref("Brain/Nervous System");
const selectedSymptoms = ref([]);
const count = ref(0);

const pushSymptom = async function (data) {
  console.log(data.name);
  await store.dispatch("patient/addSymptom", data.name);
  selectedSymptoms.value = await store.getters["patient/symptoms"];
  count.value += 1;
};
const deleteSymptom = async function (index) {
  selectedSymptoms.value = selectedSymptoms.value.filter(
    (id) => id.name != index
  );
  await store.dispatch("patient/dropSymptom", index);
  selectedSymptoms.value = await store.getters["patient/symptoms"];
  count.value -= 1;
};
const selectedRegion = function (data) {
  active.value = data;
};
onMounted(async () => {
  locations.value = await store.getters["symptoms/getLocations"];
  selectedSymptoms.value = await store.getters["patient/symptoms"];
  count.value = selectedSymptoms.value.length;
  if (locations.value.length === 0) {
    router.push("/");
  }
});
</script>

<style scoped>
.app-container {
  position: relative;
}

.nav-bar {
  position: sticky;
  top: 0;
  z-index: 1; /* Adjust as needed */
}

.main-body {
  display: flex;
}

.leftPart {
  width: 20%;
  margin-right: 10px; /* Adjust margin as needed */
  display: flex;
  justify-content: center;
}

.middlePart {
  width: 60%;
  margin: 0 10px; /* Adjust margin as needed */
  position: sticky;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.rightPart {
  width: 20%;
  margin-left: 10px; /* Adjust margin as needed */
}
.subtitle {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
