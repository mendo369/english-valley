import { defineStore } from "pinia";
import Questions from "../questions/questions.json";

export const questionsStore = defineStore({
  id: "questions",
  state: () => {
    return { questions: [], level: "A1" };
  },
  actions: {
    getQuestions(program, level) {
      try {
        const _program = Questions.find((item) => item.program == program);
        const _level = _program.levels.find((l) => l.level == level);
        
        // Shuffle questions
        const shuffled = [..._level.questions].sort(() => Math.random() - 0.5);

        this.questions = shuffled;
        this.level = level;
      } catch (error) {
        this.questions = [];
        this.level = level;
      }
    },
  },
});
