<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

document.documentElement.dataset.scroll = "0";

document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = "" + window.scrollY;
});
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
