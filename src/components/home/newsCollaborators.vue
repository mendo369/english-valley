<script setup></script>

<template>
  <section class="news-collaborators">
    <div class="title">
      <h1>
        Si quieres ayudar a que la aplicación crezca, puedes ayudar enviando
        preguntas nuevas de cualquier porgrama académico y de cualquier nivel de
        inglés 👩‍🚀👨‍🚀🚀
      </h1>
    </div>
    <div class="networks">
      <a
        href="mailto:mendoza.luis@correounivalle.edu.co"
        class="net"
        target="_blank"
      >
        <img src="../../assets/icons/gmail.png" alt="Gmail" />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=573165711817"
        class="net"
        target="_blank"
      >
        <img src="../../assets/icons/wpp.png" alt="WhatsApp" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.news-collaborators {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: x-large;
  text-align: center;
  max-width: 600px;
}

.networks {
  display: flex;
  gap: 1em;
}

.net {
  cursor: pointer;
}
</style>
