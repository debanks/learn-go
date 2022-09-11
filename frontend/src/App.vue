<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

document.documentElement.dataset.scroll = "0";

document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = "" + window.scrollY;
});
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
    margin: 0px auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
}
</style>
