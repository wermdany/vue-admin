import { createStore } from "vuex";
import { App } from "vue";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

export default store;

export function useVueStore(app: App) {
  app.use(store);
}
