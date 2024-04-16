<script setup>
import Carousel from "../components/home/carousel.vue";
import Home from "../components/home/home.vue";
import Carrers from "../../src/components/home/carrers.vue";
</script>

<template>
  <section class="home">
    <Home />
    <Carousel />
    <Carrers />
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 3em;
}
</style>
