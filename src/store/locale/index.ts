import { defineStore } from "pinia";

const useLocaleStore = defineStore({
  id: "locale",
  state: () => ({
    num: 1
  }),
  actions: {
    changeState() {
      this.num++;
    }
  }
});

export { useLocaleStore };
