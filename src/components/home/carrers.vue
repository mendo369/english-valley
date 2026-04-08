<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const careerList = [
  { id: "admon", name: "Administración", path: "/administracion" },
  { id: "agro", name: "Agroindustria", path: "/agroindustria" },
  { id: "const", name: "Construcción", path: "/construccion" },
  { id: "cont", name: "Contaduría", path: "/contaduria" },
  { id: "ing-ali", name: "Ing. Alimentos", path: "/ing-alimentos" },
  { id: "ing-sis", name: "Ing. Sistemas", path: "/ing-sistemas" },
  { id: "nut", name: "Nutrición", path: "/nutricion" },
  {
    id: "tec-des",
    name: "Tec. Desarrollo de Software",
    path: "/desarrollo-software",
  },
  { id: "tec-ele", name: "Tec. Electrónica", path: "/tec-electronica" },
  { id: "ts", name: "Trabajo Social", path: "/trabajo-social" },
];
</script>

<template>
  <div class="carrers">
    <div class="title">
      <h1>Repasa los temas según tu carrera 🎓</h1>
    </div>
    <ul class="programs">
      <li
        v-for="career in careerList"
        :key="career.id"
        :class="['program', career.id]"
        @click="() => router.push(career.path)"
      >
        <div class="program-content">
          <h1>{{ career.name }}</h1>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.carrers {
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  padding: 2rem 1rem;
}

.title {
  text-align: center;
}

.title h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
}

.programs {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.program {
  cursor: pointer;
  height: 280px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background-color: #f0f0f0;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* Pseudo-elemento para la imagen de fondo */
.program::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  z-index: 1;
}

/* Overlay para legibilidad */
.program::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
  z-index: 2;
  transition: opacity 0.3s ease;
}

.program:hover {
  /* transform: translateY(-5px); */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.program:hover::before {
  transform: scale(1.15);
}

.program-content {
  position: relative;
  z-index: 3;
  padding: 1.5rem;
  width: 100%;
}

.program-content h1 {
  color: white;
  font-size: 1.1rem; /* Letra más pequeña como se pidió */
  font-weight: 600;
  margin: 0;
  text-transform: capitalize;
  letter-spacing: 0.01em;
}

/* Background Images */
.admon::before {
  background-image: url("https://english-valley.netlify.app/admon.webp");
}
.agro::before {
  background-image: url("https://english-valley.netlify.app/agroindustria.jpg");
} /* Corregido ruta probable */
.const::before {
  background-image: url("https://english-valley.netlify.app/construccion.jpg");
}
.cont::before {
  background-image: url("https://english-valley.netlify.app/contaduria.png");
}
.ing-ali::before {
  background-image: url("https://english-valley.netlify.app/ing-alimentos.jpg");
}
.ing-sis::before {
  background-image: url("https://english-valley.netlify.app/ingenieria-de-sistemas.webp");
}
.nut::before {
  background-image: url("https://english-valley.netlify.app/nutricion.jpg");
}
.tec-des::before {
  background-image: url("https://english-valley.netlify.app/tec-desarrollo.jpg");
}
.tec-ele::before {
  background-image: url("https://english-valley.netlify.app/tec-electronica.jpg");
}
.ts::before {
  background-image: url("https://english-valley.netlify.app/ts.jpg");
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .programs {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }

  .program {
    height: 200px;
  }

  .program-content h1 {
    font-size: 0.95rem;
  }
}
</style>
