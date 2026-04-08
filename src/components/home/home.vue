<script setup></script>

<template>
  <section class="hero">
    <div class="presentation">
      <div class="title"><h1>English Valley</h1></div>
      <div class="description">
        <p>
          ¡Bienvenido a <strong>English Valley</strong>! 👋 Tu plataforma 
          interactiva para fortalecer el inglés enfocado en tu carrera profesional. 
          Desde niveles básicos (A1) hasta avanzados (C2), aquí encontrarás el 
          contenido que necesitas para destacar en tu programa académico. 
          <br /><br />
          ¡Explora, aprende y contribuye a nuestra comunidad! 🚀✨
        </p>
      </div>
    </div>
    <div class="img">
      <img src="../../assets/images/tulua.jpg" alt="univalle-tulua" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1em;
  flex-wrap: wrap;
}

.presentation {
  width: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  max-width: 350px;
}

.title {
  font-size: 2.2rem;
  line-height: 1.2;
}

.img {
  width: 40%;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 10px;
  min-width: 350px;
}

.img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
