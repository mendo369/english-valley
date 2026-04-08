<script setup>
import { ref, computed, nextTick } from "vue";
import { storeToRefs } from "pinia";
import { questionsStore } from "../../stores/questions";
import Question from "./question.vue";
import ResultModal from "./ResultModal.vue";

const props = defineProps({
  programId: String
});

const ALL_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const store = questionsStore();
const { questions, level } = storeToRefs(store);
const { getQuestions } = store;

const quizContentRef = ref(null);

getQuestions(props.programId, "A1");

const userAnswers = ref({});
const showModal = ref(false);
const testResults = ref([]);

const nextLevel = computed(() => {
  const index = ALL_LEVELS.indexOf(level.value);
  return index < ALL_LEVELS.length - 1 ? ALL_LEVELS[index + 1] : null;
});

const changeLevel = async (newLevel) => {
  userAnswers.value = {};
  getQuestions(props.programId, newLevel);
  
  // Scrollear al inicio
  await nextTick();
  if (quizContentRef.value) {
    quizContentRef.value.scrollTop = 0;
  }
};

const goToNextLevel = () => {
  if (nextLevel.value) {
    changeLevel(nextLevel.value);
    showModal.value = false;
  }
};

const checkAllResults = () => {
  testResults.value = questions.value.map((q) => ({
    question: q.question,
    selected: userAnswers.value[q.question],
    correct: q.correct,
    isCorrect: userAnswers.value[q.question] === q.correct
  }));
  showModal.value = true;
};

const score = computed(() => testResults.value.filter(r => r.isCorrect).length);

const retry = () => {
  showModal.value = false;
  userAnswers.value = {};
  getQuestions(props.programId, level.value);
};
</script>

<template>
  <section class="quiz-container">
    <div class="levels-sticky">
      <div class="levels">
        <ul>
          <li
            v-for="lvl in ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']"
            :key="lvl"
            class="level"
            @click="changeLevel(lvl)"
            :class="{ selected: level === lvl }"
          >
            {{ lvl }}
          </li>
        </ul>
      </div>
    </div>

    <div ref="quizContentRef" class="quiz-content">
      <div class="questions-list" v-if="questions.length > 0">
        <div class="list-wrapper">
          <Question
            v-for="question in questions"
            :key="question.question"
            :question="question.question"
            :options="question.options"
            :correct="question.correct"
            v-model="userAnswers[question.question]"
          />
        </div>
        
        <div class="submit-section">
          <button 
            class="submit-btn" 
            @click="checkAllResults"
            :disabled="Object.keys(userAnswers).length === 0"
          >
            Revisar mis respuestas
          </button>
        </div>
      </div>

      <div v-else class="no-questions">
        <div class="empty-state">
          <span class="emoji">🚀</span>
          <h3>Próximamente...</h3>
          <p>Estamos preparando preguntas increíbles para este nivel.</p>
        </div>
      </div>
    </div>

    <ResultModal
      :show="showModal"
      :results="testResults"
      :score="score"
      :total="questions.length"
      :hasNextLevel="!!nextLevel"
      @close="showModal = false"
      @retry="retry"
      @next="goToNextLevel"
    />
  </section>
</template>

<style scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f8f9fa;
  overflow: hidden;
}

.levels-sticky {
  flex-shrink: 0;
  z-index: 10;
  background: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.levels ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

.level {
  cursor: pointer;
  font-weight: 700;
  color: #666;
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #eee;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.level:hover {
  border-color: var(--red-univalle-color);
  color: var(--red-univalle-color);
  transform: translateY(-2px);
}

.level.selected {
  background-color: var(--red-univalle-color);
  color: white;
  border-color: var(--red-univalle-color);
  box-shadow: 0 4px 12px rgba(205, 31, 50, 0.3);
}

.quiz-content {
  flex: 1;
  overflow-y: auto;
  padding: 2rem 1rem;
  scrollbar-width: thin;
  display: flex;
  flex-direction: column;
}

.questions-list {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.submit-section {
  margin: 3rem 0 5rem;
  display: flex;
  justify-content: center;
}

.submit-btn {
  background-color: var(--red-univalle-color);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 8px 20px rgba(205, 31, 50, 0.2);
}

.submit-btn:hover:not(:disabled) {
  background-color: #a81c2b;
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(205, 31, 50, 0.3);
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  box-shadow: none;
}

.no-questions {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.empty-state {
  background: white;
  padding: 3rem;
  border-radius: 32px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
  max-width: 400px;
}

.emoji {
  font-size: 4rem;
  display: block;
  margin-bottom: 1.5rem;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.empty-state p {
  color: #777;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .level {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
}
</style>
