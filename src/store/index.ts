import { createStore } from "vuex";
import type { App } from "vue";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

export default store;

export function setupVueStore(app: App) {
  app.use(store);
}
