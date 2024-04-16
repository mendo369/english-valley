<script setup>
defineProps({
  question: String,
  options: Array,
  correct: String,
});
</script>

<template>
  <div class="question-c">
    <div class="question">{{ question }}</div>
    <div class="options">{{ options }}</div>
  </div>
</template>

<style scoped>
.question-c {
}
</style>
