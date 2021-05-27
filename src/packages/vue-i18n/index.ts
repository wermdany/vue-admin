import type { I18nOptions } from "vue-i18n";
import { createI18n } from "vue-i18n";

import { isDev } from "@/utils/env";

import { fallbackLocale } from "@/locales/config";

export * from "./useI18nApi";

export const vueI18nOptions: I18nOptions = {
  // 不使用传统的 api
  legacy: false,
  sync: true,
  // legacy 是否禁止失败时的警告 dev 开启
  silentTranslationWarn: isDev,
  // Composition API 本地化失败时是否禁止输出警告 dev 开启
  missingWarn: isDev,
  silentFallbackWarn: true,
  locale: "",
  fallbackLocale: fallbackLocale,
  messages: {}
};

const vueI18n = createI18n(vueI18nOptions);

export default vueI18n;
