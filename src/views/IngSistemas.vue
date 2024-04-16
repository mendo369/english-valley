<script setup>
import { storeToRefs } from "pinia";
import { questionsStore } from "../stores/questions";
import Question from "../components/questions/question.vue";

const { questions } = storeToRefs(questionsStore());

const { getQuestions } = questionsStore();

getQuestions("ING-SISTEMAS", "B1");
</script>

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
    <div class="questions">
      <Question
        v-for="question in questions"
        :key="question.question"
        :question="question.question"
        :options="question.options"
        :correct="question.correct"
      />
    </div>
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
../stores/questions
