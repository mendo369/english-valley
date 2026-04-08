<script setup>
const props = defineProps({
  question: String,
  options: Array,
  correct: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const selectOption = (option) => {
  emit("update:modelValue", option);
};
</script>

<template>
  <div class="question-wrapper">
    <div class="header">
      <div class="dot"></div>
      <h3 class="question-text">{{ question }}</h3>
    </div>

    <div class="options-grid">
      <div
        v-for="option in options"
        :key="option"
        class="option-card"
        :class="{ selected: modelValue === option }"
        @click="selectOption(option)"
      >
        <div class="radio-circle">
          <div class="inner-dot"></div>
        </div>
        <span class="option-text">{{ option }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-wrapper {
  max-width: 650px;
  width: 100%;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease;
  margin-bottom: 1.5rem;
}

.question-wrapper:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  background: var(--red-univalle-color);
  border-radius: 50%;
  margin-top: 0.6rem;
  flex-shrink: 0;
}

.question-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3436;
  line-height: 1.4;
  margin: 0;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.option-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 12px;
  background: #f8f9fa;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.option-card:hover {
  background: #fff;
  border-color: #eee;
  transform: translateX(5px);
}

.option-card.selected {
  background: #fff;
  border-color: var(--red-univalle-color);
  box-shadow: 0 5px 15px rgba(205, 31, 50, 0.1);
}

.radio-circle {
  width: 22px;
  height: 22px;
  border: 2px solid #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}

.option-card.selected .radio-circle {
  border-color: var(--red-univalle-color);
}

.inner-dot {
  width: 12px;
  height: 12px;
  background: var(--red-univalle-color);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46);
}

.option-card.selected .inner-dot {
  transform: scale(1);
}

.option-text {
  font-size: 1rem;
  color: #4b6584;
  font-weight: 500;
  transition: color 0.2s;
}

.option-card.selected .option-text {
  color: #2d3436;
  font-weight: 600;
}

@media (max-width: 600px) {
  .question-wrapper {
    padding: 1.5rem;
  }

  .question-text {
    font-size: 1.1rem;
  }

  .option-card {
    padding: 1rem;
  }
}
</style>
