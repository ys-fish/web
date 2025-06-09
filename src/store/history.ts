import { defineStore } from "pinia";
import { type Ref, ref } from "vue";
interface History {
  history: Ref<any>;
}

export const useHistory = defineStore("historyStore", {
  state: (): History => ({
    history: ref<any>(),
  }),
  actions: {
    setHistory(history: any) {
      this.history = history;
    },
  },
});
