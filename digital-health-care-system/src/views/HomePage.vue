<template>
  <div class="app-container">
    <div class="nav-bar">
      <NavBar />
    </div>
    <div class="main-body">
      <div class="leftPart">
        <div class="home-body" v-for="loc in locations" :key="loc">
          <SymptomRegion
            :region="loc"
            :opted="active"
            @activate-location="selectedRegion"
          />
        </div>
      </div>
      <div class="middlePart">
        <ActualSymptomsVue :symptomLoc="active" />
      </div>
      <div class="rightPart"></div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import SymptomRegion from "./SymptomRegion.vue";
import ActualSymptomsVue from "./ActualSymptoms.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const locations = ref([]);
const active = ref("Brain/Nervous System");

const selectedRegion = function (data) {
  active.value = data;
};
onMounted(async () => {
  locations.value = await store.getters["symptoms/getLocations"];
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
}

.middlePart {
  width: 60%;
  margin: 0 10px; /* Adjust margin as needed */
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.rightPart {
  width: 20%;
  margin-left: 10px; /* Adjust margin as needed */
}
</style>
