import { defineStore } from "pinia";
import { ref, Ref } from "vue";
interface UtilsStore {
  offset: Ref<{ x: string; y: string }>;
}

export const AutoStore = defineStore("AutoStore", {
  state: (): UtilsStore => ({
    offset: ref({
      y: "",
      x: "",
    }),
  }),
  actions: {
    setOffset(ox: { x: string; y: string }) {
      this.offset = ox;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
