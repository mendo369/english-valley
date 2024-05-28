<script setup></script>

<template>
  <section class="collaborators-s">
    <div class="title"><h1>Colaboradores en English Valley 💪</h1></div>
    <div class="collaborators">
      <div class="collaborator">
        <div class="img">
          <img src="../../assets/collaborators/dema.jpg" alt="Dema" />
        </div>
        <span class="name">Luis Mendoza</span>
      </div>
      <div class="collaborator">
        <div class="img">
          <img
            src="../../assets/collaborators/kevin_bejarano.jpg"
            alt="Kevin B"
          />
        </div>
        <span class="name">Kevin Bejarano</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.collaborators-s {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

.title {
  font-size: x-large;
  text-align: center;
}

.collaborators {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.collaborator {
  /* width: 100px;
  height: 120px; */
  overflow: hidden;
}

.collaborator .img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.collaborator .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* .img {
  filter: grayscale(1);
  transition: all 0.5s;
  cursor: pointer;
}

.img:hover {
  filter: grayscale(0);
} */

.name {
  font-weight: 500;
}
</style>
