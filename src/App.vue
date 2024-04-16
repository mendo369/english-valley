<script setup>
import { RouterView } from "vue-router";
import Navbar from "../src/components/shared/nav.vue";
</script>

<template>
  <section class="app">
    <nav>
      <Navbar></Navbar>
    </nav>
    <section class="render">
      <RouterView></RouterView>
    </section>
  </section>
</template>

<style scoped>
.app {
  /* border: 4px solid green; */
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 10% 1fr;
}

.render {
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 10px;
}
</style>
