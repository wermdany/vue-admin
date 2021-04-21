import type { App } from "vue";
import { createPinia } from "pinia";

const Store = createPinia();

export default Store;

export function setupStore(app: App) {
  app.use(Store);
}
