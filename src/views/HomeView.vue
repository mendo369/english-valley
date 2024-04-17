<script setup>
import Carousel from "../components/home/carousel.vue";
import Home from "../components/home/home.vue";
import Carrers from "../../src/components/home/carrers.vue";
import Collaborators from "../components/home/collaborators.vue";
import NewsCollaborators from "../components/home/newsCollaborators.vue";
</script>

<template>
  <section class="home">
    <Home />
    <Carousel />
    <Carrers />
    <Collaborators />
    <NewsCollaborators />
  </section>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 3em;
  margin-bottom: 3em;
}
</style>
