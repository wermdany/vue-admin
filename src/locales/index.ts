import type { App } from "vue";

import vueI18n from "@/packages/vue-i18n";

export * from "./helper";

export * from "./config";

export * from "./useLocal";

export function setupVueI18n(app: App) {
  app.use(vueI18n);
}
