<template>
  <div>
    {{ organName }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  organName: String,
});
</script>