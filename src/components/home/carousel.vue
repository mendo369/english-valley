<script setup>
const programs = [
  'Artes Integradas',
  'Ciencias de la Administración',
  'Ciencias Naturales y Exactas',
  'Humanidades',
  'Ingeniería',
  'Salud',
]
</script>

<template>
  <div class="carousel">
    <h1 class="title">¡Encuentra temas de varias facultades 👩‍🏫!</h1>
    
    <div class="programs-wrapper">
      <div class="programs-track">
        <!-- Primer set -->
        <div v-for="(program, index) in programs" :key="'a' + index" class="program">
          <h1>{{ program }}</h1>
        </div>
        <!-- Segundo set para el loop infinito -->
        <div v-for="(program, index) in programs" :key="'b' + index" class="program">
          <h1>{{ program }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  padding: 4rem 0;
  width: 100%;
  background: transparent;
}

.title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}

.programs-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 1rem 0;
}

/* Efecto de desvanecimiento en los bordes */
.programs-wrapper::before,
.programs-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  width: 15rem;
  height: 100%;
  z-index: 2;
}

.programs-wrapper::before {
  left: 0;
  background: linear-gradient(to right, var(--white-univalle-color) 0%, transparent 100%);
}

.programs-wrapper::after {
  right: 0;
  background: linear-gradient(to left, var(--white-univalle-color) 0%, transparent 100%);
}

.programs-track {
  display: flex;
  gap: 4rem;
  width: max-content;
  animation: scroll 30s linear infinite;
  will-change: transform;
}

.programs-track:hover {
  animation-play-state: paused;
}

.program {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.program h1 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #4a4a4a;
  transition: color 0.3s ease;
}

.program:hover {
  transform: scale(1.05);
}

.program:hover h1 {
  color: var(--red-univalle-color);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 2rem)); /* Desplazamos la mitad (un set completo) + mitad del gap */
  }
}

/* Responsividad */
@media (max-width: 768px) {
  .title {
    font-size: 1.6rem;
    padding: 0 1rem;
  }
  
  .programs-wrapper::before,
  .programs-wrapper::after {
    width: 5rem;
  }
  
  .program h1 {
    font-size: 1.2rem;
  }
  
  .programs-track {
    gap: 2rem;
    animation-duration: 20s;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-50% - 1rem));
    }
  }
}
</style>
