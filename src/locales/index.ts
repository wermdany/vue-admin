import { createI18n, I18n, I18nOptions } from "vue-i18n";
import { App } from "vue";
import { isDev } from "@/utils/env";
import localConfig from "./localConfig";
const vueI18nOptions: I18nOptions = {
  // 不使用传统的 api
  legacy: false,
  sync: true,
  // legacy 是否禁止失败时的警告 dev 开启
  silentTranslationWarn: isDev,
  // Composition API 本地化失败时是否禁止输出警告 dev 开启
  missingWarn: isDev,
  silentFallbackWarn: true,
  locale: "",
  fallbackLocale: localConfig.fallbackLocale,
  messages: {},
  availableLocales: localConfig.availableLocales
};

export let vueI18n: I18n;

export function setupVueI18n(app: App) {
  vueI18n = createI18n(vueI18nOptions) as I18n;
  app.use(vueI18n);
}
