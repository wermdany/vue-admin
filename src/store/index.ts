import { createStore } from "vuex";
import { App } from "vue";

const store = createStore({
  state: {
    a: 1
  },
  mutations: {},
  actions: {},
  modules: {}
});

export default store;

export function setupVueStore(app: App) {
  app.use(store);
}
