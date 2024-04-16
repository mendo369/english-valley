<script setup></script>

<template>
  <div class="carousel">
    <h1 class="title">¡Mira todas las opciones que tienes para repasar 👩‍🏫!</h1>
    <ul class="programs">
      <li class="program"><h1>Administración</h1></li>
      <li class="program"><h1>Construcción</h1></li>
      <li class="program"><h1>contaduría</h1></li>
      <li class="program"><h1>Ing. Alimentos</h1></li>
      <li class="program"><h1>Ing. Sistemas</h1></li>
      <li class="program"><h1>Nutrición</h1></li>
      <li class="program"><h1>Tec. Alimentos</h1></li>
      <li class="program"><h1>Tec. Desarrollo de Software</h1></li>
      <li class="program"><h1>Tec. Electrónica</h1></li>
      <li class="program"><h1>Trabajo Social</h1></li>
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
}

.program {
  cursor: pointer;
}

.program:hover {
  color: var(--red-univalle-color);
}
</style>
