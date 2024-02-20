<template>
  <div class="main">
    <ul>
      <li>
        <div @click="goIndex">
          <LogoImage logostyle="home" imgstyle="logo" />
        </div>
      </li>
      <div class="menu">
        <li>
          <router-link to="/home"
            ><button class="button-84">Home</button></router-link
          >
        </li>
        <li>
          <router-link to="/about"
            ><button class="button-84">About</button></router-link
          >
        </li>
      </div>
    </ul>
  </div>
</template>
<script setup>
import LogoImage from "./LogoImage.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goIndex = async function () {
  router.push("/");
};
</script>
<style scoped>
.main {
  width: 100vw;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}
ul {
  list-style: none;
  display: flex;
  padding: 5px;
}
.menu {
  position: absolute;
  right: 100px;
  display: flex;
  padding: 5px;
  justify-content: space-between;
}
.menu > li {
  padding: 10px;
}
.router-link-active {
  /* Add any custom styles you want to apply */
  text-decoration: none;
  color: inherit; /* Optionally inherit the color from the parent */
}

.button-84 {
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(#464d55, #25292e);
  border-radius: 8px;
  border-width: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  font-family: expo-brand-demi, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 18px;
  height: 52px;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0 32px;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-84:hover {
  box-shadow: rgba(0, 1, 0, 0.2) 0 2px 8px;
  opacity: 0.85;
}

.button-84:active {
  outline: 0;
}

.button-84:focus {
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 3px;
}

@media (max-width: 420px) {
  .button-84 {
    height: 48px;
  }
}
</style>