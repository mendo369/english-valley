<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="carrers">
    <div class="title">
      <h1>Repasa los temas según tu carrera 🎓</h1>
    </div>
    <ul class="programs">
      <li
        class="program"
        id="admon"
        @click="() => router.push('/administracion')"
      >
        <h1>Administración</h1>
      </li>
      <li
        class="program"
        id="const"
        @click="() => router.push('/construccion')"
      >
        <h1>Construcción</h1>
      </li>
      <li class="program" id="cont" @click="() => router.push('/contaduria')">
        <h1>contaduría</h1>
      </li>
      <li
        class="program"
        id="ing-ali"
        @click="() => router.push('/ing-alimentos')"
      >
        <h1>Ing. Alimentos</h1>
      </li>
      <li
        class="program"
        id="ing-sis"
        @click="() => router.push('/ing-sistemas')"
      >
        <h1>Ing. Sistemas</h1>
      </li>
      <li class="program" id="nut" @click="() => router.push('/nutricion')">
        <h1>Nutrición</h1>
      </li>
      <li
        class="program"
        id="tec-ali"
        @click="() => router.push('/tec-alimentos')"
      >
        <h1>Tec. Alimentos</h1>
      </li>
      <li
        class="program"
        id="tec-des"
        @click="() => router.push('/desarrollo-software')"
      >
        <h1>Tec. Desarrollo de Software</h1>
      </li>
      <li
        class="program"
        id="tec-ele"
        @click="() => router.push('/tec-electronica')"
      >
        <h1>Tec. Electrónica</h1>
      </li>
      <li class="program" id="ts" @click="() => router.push('/trabajo-social')">
        <h1>Trabajo Social</h1>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.carrers {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

.title {
  text-align: center;
}

.title h1 {
  font-size: x-large;
}

.programs {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
}

.program {
  cursor: pointer;
  width: 200px;
  height: 250px;
  box-shadow: 2px 2px 2px rgb(202, 202, 202);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  /* background-color: var(); */
  background-size: cover;
  background-position: center;
  text-shadow: 1px 1px 2px black;
}

.program:hover {
  box-shadow: 3px 3px 3px rgb(194, 194, 194);
}

#admon {
  background-image: url("https://english-valley.netlify.app/admon.webp");
}

#const {
  background-image: url("https://english-valley.netlify.app/construccion.jpg");
}

#cont {
  background-image: url("https://english-valley.netlify.app/contaduria.png");
}

#ing-ali {
  background-image: url("https://english-valley.netlify.app/ing-alimentos.jpg");
}

#ing-sis {
  background-image: url("https://english-valley.netlify.app/ingenieria-de-sistemas.webp");
}

#nut {
  background-image: url("https://english-valley.netlify.app/nutricion.jpg");
}

#tec-ali {
  background-image: url("https://english-valley.netlify.app/tec-alimentos.webp");
}

#tec-des {
  background-image: url("https://english-valley.netlify.app/tec-desarrollo.jpg");
}

#tec-ele {
  background-image: url("https://english-valley.netlify.app/tec-electronica.jpg");
}

#ts {
  background-image: url("https://english-valley.netlify.app/ts.jpg");
}
</style>
