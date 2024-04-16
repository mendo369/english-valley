<script setup></script>

<template>
  <section class="hero">
    <div class="presentation">
      <div class="title"><h1>English Valley</h1></div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          voluptas velit neque! Laborum accusantium ullam ducimus, sequi
          ratione, voluptatum deleniti quasi mollitia aut eaque aliquid culpa
          non asperiores cumque officiis.
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
