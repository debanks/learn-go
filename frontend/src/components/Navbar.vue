<script setup>
import { ref, computed } from 'vue'
import Sidebar from 'primevue/sidebar';
import {useRoute} from 'vue-router'
import Button from 'primevue/button';

let show = ref(false);

const route = useRoute();
const name = computed(() =>route.name)
</script>

<template>
    <div class="navbar">
        <div class="logo"><a href="/"><img src="../assets/logo.svg" class="logo"/></a></div>
        <div class="nav-items">
            <a class="nav-item" v-scroll-to="'#plans'" v-if="name == 'home'">
                Plans
            </a>
            <a class="nav-item" v-scroll-to="'#updates'" v-if="name == 'home'">
                Updates
            </a>
            <a class="btn" href="">Coming Soon</a>
            <Button class="burger" icon="pi pi-bars" @click="show = true" />
        </div>
        <Sidebar v-model:visible="show" position="right">
            <div class="mobile-nav">
                <a class="nav-item" v-if="name == 'home'" v-scroll-to="{
                    el: '#plans',
                    onDone: () => show = false
                }">
                    Plans
                </a>
                <a class="nav-item" v-if="name == 'home'" v-scroll-to="{
                    el: '#updates',
                    onDone: () => show = false
                }">
                    Updates
                </a>
                <a class="btn" href="">Coming Soon</a>
            </div>
        </Sidebar>
    </div>
</template>

<style scoped lang="scss">
@import "../assets/base.css";
.p-sidebar-mask {
  filter: blur(5px) brightness(0.7);
}
.burger {
  color: var(--color-accent) !important;
  border: 1px solid var(--color-accent) !important;
  margin-top: 0px;
  vertical-align: middle;
  padding: 12px 24px !important;
  border-radius: 6px;
  text-decoration: none;
  margin-left: 10px;
  background: transparent;
  display: none;
}
.burger .pi {
  font-size: 24px !important;
}
.burger:hover {
  background: var(--button-hover) !important;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  padding: 25px 40px;
  z-index: 11;
  background-color: rgba(0, 17, 35, 0.7);
}
html:not([data-scroll='0']) .navbar {
  box-shadow: 0 10px 30px -10px rgba(0, 12, 25, 0.7);
  padding: 15px 40px;
  height: 75px;
}
.navbar .logo {
  height: 60px;
  width: 60px;
  display: inline-block;
  margin-top: -5px;
}
.navbar .nav-items {
  float: right;
  display: inline-block;
}
.navbar .nav-item {
  line-height: 50px;
  margin: 0 15px;
  cursor: pointer;
  font-size: 14px;
}
.nav-items .btn {
  color: var(--color-accent) !important;
  border: 1px solid var(--color-accent) !important;
  margin-top: -5px;
  vertical-align: middle;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  margin-left: 10px;
}
.nav-items .btn:hover {
  background: var(--button-hover);
}
.nav-item:hover {
  color: var(--color-accent);
}
.nav-item span {
  color: var(--color-accent);
}
.mobile-nav {
  margin: 100px 30px;
  vertical-align: middle;
  text-align: center;
}
.mobile-nav a {
  margin: 25px 0;
  display: block;
  font-size: 20px;
  cursor: pointer;
}
.mobile-nav a span {
  display: block;
}
.mobile-nav .btn {
  color: var(--color-accent) !important;
  border: 1px solid var(--color-accent) !important;
  margin-top: -5px;
  vertical-align: middle;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  margin-left: 10px;
  margin-top: 80px;
}
.mobile-nav .btn:hover {
  background: var(--button-hover);
}
@media (max-width: 780px) {
  .navbar .nav-item, .navbar .btn {
    display: none;
  }
  .burger {
    display: inline-flex;
  }
}
</style>