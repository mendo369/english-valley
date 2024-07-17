<script setup>
import { storeToRefs } from "pinia";

import { questionsStore } from "../stores/questions";
import Question from "../components/questions/question.vue";

const { questions } = storeToRefs(questionsStore());
const { level } = storeToRefs(questionsStore());

const { getQuestions } = questionsStore();

getQuestions("TECNO-ALIMENTOS", "A1");

const changeLevel = (level) => {
  getQuestions("TECNO-ALIMENTOS", level);
};
</script>

<template>
  <section class="ing-sistemas">
    <div class="levels">
      <ul>
        <li
          class="level"
          @click="changeLevel('A1')"
          :class="{ selected: level === 'A1' }"
        >
          A1
        </li>

        <li
          class="level"
          @click="changeLevel('A2')"
          :class="{ selected: level === 'A2' }"
        >
          A2
        </li>

        <li
          class="level"
          @click="changeLevel('B1')"
          :class="{ selected: level === 'B1' }"
        >
          B1
        </li>

        <li
          class="level"
          @click="changeLevel('B2')"
          :class="{ selected: level === 'B2' }"
        >
          B2
        </li>

        <li
          class="level"
          @click="changeLevel('C1')"
          :class="{ selected: level === 'C1' }"
        >
          C1
        </li>

        <li
          class="level"
          @click="changeLevel('C2')"
          :class="{ selected: level === 'C2' }"
        >
          C2
        </li>
      </ul>
    </div>
    <div class="questions">
      <div v-if="questions.length < 1">No hay preguntas para mostrar 😕</div>
      <Question
        v-else
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
  gap: 2em;
  overflow-y: hidden;
  height: 100%;
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
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px rgba(202, 202, 202, 0.815);
}

.selected {
  width: 40px;
  height: 40px;
  background-color: var(--red-univalle-color);
  color: white;
}

.questions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  /* min-height: 1200px; */
  overflow-y: scroll;
  scrollbar-width: none;
}
</style>
