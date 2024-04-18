<script setup></script>

<template>
  <div class="carousel">
    <h1 class="title">¡Encuentra temas de varias facultades 👩‍🏫!</h1>
    <div class="programs">
      <div class="program"><h1>Artes Integradas</h1></div>
      <div class="program"><h1>Ciencias de la Administración</h1></div>
      <div class="program"><h1>Humanidades</h1></div>
      <div class="program"><h1>Ingeniería</h1></div>
      <div class="program"><h1>Salud</h1></div>
      <!-- <div class="program"><h1>Artes Integradas</h1></div>
      <div class="program"><h1>Ciencias de la Administración</h1></div>
      <div class="program"><h1>Humanidades</h1></div>
      <div class="program"><h1>Ingeniería</h1></div>
      <div class="program"><h1>Salud</h1></div> -->
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  overflow: hidden;
  width: 100%;
}

.title {
  text-align: center;
  font-size: x-large;
}

.programs {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  /* -webkit-animation: scroll 30s linear infinite;
  animation: scroll 9s linear infinite; */
  /* width: 2000px; */
}

.program {
  cursor: pointer;
  /* width: 200px;
  height: 100px; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.program:hover {
  color: var(--red-univalle-color);
  transform: scale(1.1);
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  50% {
    -webkit-transform: translateX(-2000px);
    transform: translateX(-2000px);
  }
}
</style>
