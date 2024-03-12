<template>
  <div class="relative py-16">
    <div
      aria-hidden="true"
      class="absolute inset-0 h-max w-full m-auto lg:grid lg:grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div
        class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
      ></div>
      <div
        class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
      ></div>
    </div>
    <Container>
      <div class="relative">
        <div class="container mx-auto flex flex-col items-center mb-4 md:px-12">
          <h1 class="text-4xl font-semibold leadi text-center">Why us?</h1>
        </div>
        <div class="relative isolate overflow-hidden py-16 sm:py-24 lg:py-8">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto">
              <dl class="grid lg:grid-cols-4 gap-x-8 gap-y-10 lg:pt-2">
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <img src="../assets/symptoms.png" alt="" class="h-10 w-10" aria-hidden="true" />
                  </div>

                  <dt class="mt-4 font-semibold">Categorized Symptom Selection</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    Users can easily navigate through different categories of symptoms based on the
                    location they impact, making it simpler to find relevant symptoms without
                    overwhelming the user with a long list.
                  </dd>
                </div>
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <img src="../assets/selected.png" alt="" class="h-10 w-10" aria-hidden="true" />
                  </div>

                  <dt class="mt-4 font-semibold">Symptom Selection Interface</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    When a category is clicked or selected, display the symptoms belonging to that
                    category. This can be done in a separate panel or section of the interface.
                  </dd>
                </div>
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <img src="../assets/Display.png" alt="" class="h-10 w-10" aria-hidden="true" />
                  </div>

                  <dt class="mt-4 font-semibold">Selected Symptoms Display</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    Allow users to easily remove selected symptoms, either by clicking on them in
                    the "Selected Symptoms" panel or by using a clear "Remove" button next to each
                    selected symptom.
                  </dd>
                </div>
                <div class="flex flex-col items-start">
                  <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <img src="../assets/Nav.png" alt="" class="h-10 w-10" aria-hidden="true" />
                  </div>
                  <dt class="mt-4 font-semibold">Clear Navigation</dt>
                  <dd class="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                    Ensure that the interface is intuitive and easy to navigate. Use clear labels
                    and visual cues to guide users through the symptom selection process.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div
            class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from './Container.vue'
</script>
