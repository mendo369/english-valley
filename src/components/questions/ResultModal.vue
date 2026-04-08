<script setup>
defineProps({
  show: Boolean,
  results: Array,
  score: Number,
  total: Number,
  hasNextLevel: Boolean
});

const emit = defineEmits(['close', 'retry', 'next']);
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Resultados del Test 📊</h2>
          <button class="close-btn" @click="emit('close')">×</button>
        </div>
        
        <div class="score-section">
          <div class="score-circle" :class="{ 'high-score': score / total >= 0.7 }">
            <span class="score-num">{{ score }}/{{ total }}</span>
          </div>
          <p class="score-text">
            {{ score / total >= 0.7 ? '¡Excelente trabajo! 🎉' : '¡Sigue practicando! 💪' }}
          </p>
        </div>

        <div class="results-list">
          <div v-for="(res, index) in results" :key="index" class="result-item" :class="res.isCorrect ? 'correct' : 'incorrect'">
            <div class="result-icon">
              {{ res.isCorrect ? '✅' : '❌' }}
            </div>
            <div class="result-info">
              <p class="result-question">{{ res.question }}</p>
              <p class="result-answer">
                Tu respuesta: <strong>{{ res.selected || 'Ninguna' }}</strong>
                <span v-if="!res.isCorrect"> (Correcta: {{ res.correct }})</span>
              </p>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button v-if="hasNextLevel && (score / total >= 0.7)" class="next-btn" @click="emit('next')">
            Siguiente Nivel 🚀
          </button>
          <button class="retry-btn" @click="emit('retry')">Reintentar</button>
          <button class="close-footer-btn" @click="emit('close')">Cerrar</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fdfdfd;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #999;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #333;
}

.score-section {
  padding: 2rem;
  text-align: center;
  background: #f9f9f9;
}

.score-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ffeded;
  border: 4px solid #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: all 0.3s;
}

.score-circle.high-score {
  background: #edfcf2;
  border-color: #22c55e;
}

.score-num {
  font-size: 1.8rem;
  font-weight: 800;
  color: #333;
}

.score-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #444;
  margin: 0;
}

.results-list {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.result-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #eee;
}

.result-item.correct {
  border-left: 6px solid #22c55e;
}

.result-item.incorrect {
  border-left: 6px solid #ef4444;
}

.result-icon {
  font-size: 1.2rem;
  padding-top: 0.2rem;
}

.result-info {
  flex: 1;
}

.result-question {
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.result-answer {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #eee;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.next-btn, .retry-btn, .close-footer-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.next-btn {
  background: #22c55e;
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.next-btn:hover {
  background: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(34, 197, 94, 0.4);
}

.retry-btn {
  background: var(--red-univalle-color);
  color: white;
  border: none;
}

.retry-btn:hover {
  background: #a81c2b;
  transform: translateY(-2px);
}

.close-footer-btn {
  background: white;
  border: 1px solid #ddd;
  color: #666;
}

.close-footer-btn:hover {
  background: #f5f5f5;
}

/* Animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content {
  animation: modal-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes modal-in {
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
