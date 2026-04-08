<script setup></script>

<template>
  <section class="news-collaborators">
    <div class="title">
      <p>
        ¿Tienes preguntas que compartir? 💡 Ayúdanos a expandir este valle de 
        conocimiento. Si conoces temas clave de tu programa académico o niveles 
        específicos de inglés, ¡contáctanos y sé parte del crecimiento de 
        <strong>English Valley</strong>! 👩‍🚀👨‍🚀🚀
      </p>
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
