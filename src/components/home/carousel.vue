<script setup></script>

<template>
  <div class="carousel">
    <h1 class="title">¡Encuentra temas de varias facultades 👩‍🏫!</h1>
    <ul class="programs">
      <li class="program"><h1>Artes Integradas</h1></li>
      <li class="program"><h1>Ciencias de la Administración</h1></li>
      <li class="program"><h1>Humanidades</h1></li>
      <li class="program"><h1>Ingeniería</h1></li>
      <li class="program"><h1>Salud</h1></li>
    </ul>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

.title {
  text-align: center;
  font-size: x-large;
}

.programs {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.program {
  cursor: pointer;
}

.program:hover {
  color: var(--red-univalle-color);
  transform: scale(1.1);
}
</style>
