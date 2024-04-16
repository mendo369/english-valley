<script setup></script>

<template>
  <section class="hero">
    <div class="presentation">
      <div class="title"><h1>English Valley</h1></div>
      <div class="description">
        <p>
          ¡Hey, hola! 👋 Bienvenido a English Valley, una app para repasar
          inglés con varias preguntas de tu programa académico, bien sea que tu
          nivel sea A1 o C2, aquí puedes repasar un rato. <br />
          También puedes ayudar a crecer la aplicación con más preguntas 💪🔥
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
  width: 40%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
}

.title {
  font-size: xx-large;
}

.img {
  width: 40%;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 10px;
}

.img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
