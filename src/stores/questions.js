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

        const questions = _level.questions;

        this.questions = questions;
        this.level = level;
      } catch (error) {
        console.error("Error al obtener las preguntas:", error);
        return [];
      }
    },
  },
});
