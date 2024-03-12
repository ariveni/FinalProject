<template>
  <!-- <div class="relative pt-20 ml-auto">
        <div class="lg:w-2/3 text-center mx-auto">
          <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
            Where technology <br />
            <span class="text-primary dark:text-white">meet healing!</span>
          </h1>
          <p class="mt-8 text-gray-700 dark:text-gray-300">
            Welcome to Digital Healthcare System. We are committed to revolutionizing healthcare
            through technology. Our goal is to provide accessible and efficient healthcare solutions
            to everyone, ensuring better health outcomes for all. With machine learning and digital
            tools we strive to make healthcare more convenient and personalized for our patients.
            Explore our services and get in touch with us to experience the future of healthcare
            today!!
          </p>
          <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <router-link
              to="/jobs"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span class="relative text-base font-semibold text-white">Get Started</span>
            </router-link>
          </div>
        </div>
      </div> -->
  <section class="relative bg-[url(src/assets/HomePage.jpg)] bg-cover bg-center bg-no-repeat">
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>

    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl justify-center text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          Where Technology

          <strong class="block font-extrabold text-green-700"> Meets Healing! </strong>
        </h1>

        <div class="mt-8 flex flex-wrap gap-4 justify-center text-center">
          <router-link
            to="/main"
            class="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Get Started
          </router-link>
        </div>
      </div>
      <div>
        <img src="../assets/Doctor.png" alt="" />
      </div>
    </div>
  </section>
</template>
<script setup>
import Container from './Container.vue'
</script>
