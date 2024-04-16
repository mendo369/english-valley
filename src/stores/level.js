import { defineStore } from "pinia";

export const level = defineStore({
  id: "level",
  state: () => {
    return { level: "A1" };
  },
  actions: {
    getQuestions(program, level) {
      try {
      } catch (error) {
        [];
      }
    },
  },
});
