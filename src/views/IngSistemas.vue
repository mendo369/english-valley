<script setup></script>

<template>
  <section class="ing-sistemas">
    <div class="levels">
      <ul>
        <li class="level">A1</li>
        -
        <li class="level">A2</li>
        -
        <li class="level">B1</li>
        -
        <li class="level">B2</li>
        -
        <li class="level">C1</li>
        -
        <li class="level">C2</li>
      </ul>
    </div>
    <div class="questions"></div>
  </section>
</template>

<style scoped>
.ing-sistemas {
  display: grid;
  grid-template-rows: 10% 1fr;
}

.levels {
}

.levels ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1em;
}

.level {
  cursor: pointer;
  font-weight: bold;
}
</style>
