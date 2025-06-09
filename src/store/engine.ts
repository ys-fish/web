import { defineStore } from "pinia";
import { type Ref, ref } from "vue";
interface Engine {
  engine: Ref<any>;
}

export const useEngine = defineStore("engineStore", {
  state: (): Engine => ({
    engine: ref<any>(),
  }),
  actions: {
    setEngine(engine: any) {
      this.engine = engine;
    },
  },
});
