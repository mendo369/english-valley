<script setup>
import { ref } from "vue";

defineProps({
  question: String,
  options: Array,
  correct: String,
});

const selectedAnswer = ref("");
let isCorrect = false;

const updateSelectedAnswer = (option) => {
  selectedAnswer.value = option;
};

const checkAnswer = (correct) => {
  if (selectedAnswer.value === "") {
    return;
  }
  isCorrect = selectedAnswer.value === correct;
  if (isCorrect) {
    alert("Good 👍");
  } else {
    alert("Ooops 😕");
  }
};
</script>

<template>
  <div class="question-c">
    <div class="question">{{ question }}</div>
    <div class="options">
      <div class="option" v-for="option in options" :key="option">
        <input
          type="radio"
          name="answer"
          :id="option"
          @change="updateSelectedAnswer(option)"
        />
        <label for="{{ option }}">{{ option }}</label>
      </div>
    </div>
    <div class="check">
      <button @click="checkAnswer(correct)">Check</button>
    </div>
  </div>
</template>

<style scoped>
.question-c {
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  box-shadow: 3px 3px 3px rgba(194, 194, 194, 0.74);
  border-radius: 10px;
  padding: 10px;
  background-color: black;
  color: white;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input {
  cursor: pointer;
}

.check {
  display: flex;
  align-items: center;
  justify-content: center;
}

.check button {
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: white;
  font-weight: bold;
}

.check button {
  background-color: #ffffff;
  border: 1px solid #ddd;
}

.check button.correct {
  background-color: green;
  border-color: green;
}

.check button.incorrect {
  background-color: red;
  border-color: red;
}
</style>
