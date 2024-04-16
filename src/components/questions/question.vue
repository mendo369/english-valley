<script setup>
defineProps({
  question: Object,
});
</script>

<template>
  <div class="question-c">
    <div class="question">{{ question.question }}</div>
    <div class="options">{{ question.options }}</div>
  </div>
</template>

<style scoped></style>
