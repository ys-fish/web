import { defineStore } from "pinia";
import { Ref, ref } from "vue";
interface WebStore {
  webs: Ref<any>;
}

export const webStore = defineStore("webStore", {
  state: (): WebStore => ({
    webs: ref<any>(),
  }),
  actions: {
    setWeb(webs: any) {
      this.webs = webs;
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
