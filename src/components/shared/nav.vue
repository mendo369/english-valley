<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="navbar">
    <div class="logo" @click="() => router.push('/')">English Valley</div>
    <div class="menu">Menú</div>
  </div>
</template>

<style scoped>
.navbar {
  height: 100%;
  background-color: var(--red-univalle-color);
  color: white;
  font-size: large;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  /* border-radius: 0px 0px 10px 10px; */
}

.logo {
  cursor: pointer;
}

.menu {
  visibility: hidden;
}
</style>
