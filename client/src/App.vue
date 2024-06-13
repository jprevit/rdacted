<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'


</script>

<template>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

main {
  background-color: #6C805D;
}

header {
  background-color: #6C805D;
}

button {
  background-color: #A2B990;
  border: none;
  height: 3em;
  clip-path: polygon(25% 0%, 85% 0%, 75% 100%, 15% 100%);
}
</style>
