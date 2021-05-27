import type { App } from "vue";

import vueI18n from "@/packages/vue-i18n";

export * from "./localeHelper";

export * from "./config";

export * from "./useLocalApi";

export function setupVueI18n(app: App) {
  app.use(vueI18n);
}
