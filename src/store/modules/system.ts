import { defineStore } from "pinia";
import Store from "@/store";

export interface SystemState {
  num: number;
}

const useSystemStore = defineStore({
  id: "system",
  state: (): SystemState => ({
    num: 0
  }),
  actions: {
    changeState() {
      this.num++;
    }
  }
});

export { useSystemStore };

/** 在非 setup 使用 */
export function useSystemStoreOut() {
  return useSystemStore(Store);
}
