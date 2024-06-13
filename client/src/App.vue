<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'


</script>

<template>
  <header>
    <Logo />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">

  </footer>
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

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
