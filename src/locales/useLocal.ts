import type { AvailableLocalesTypeValues } from "#/locales";

import { changeI18nUseLocale } from "@/packages/vue-i18n/helper";
import { useLocaleStoreOut } from "@/store/locale";
import { changeHTMLUseLocale } from "@/utils";
import { useLangMessage } from "./useLangMessage";

const { changeStoreUseLocale } = useLocaleStoreOut();

/**
 * 设置系统正在使用的语言
 * @param lang 需要设置的语言
 */
function changeUseLocale(lang: AvailableLocalesTypeValues) {
  // 设置 vue-i18n
  changeI18nUseLocale(lang);
  // 设置 store
  changeStoreUseLocale(lang);
  // 设置 HTML 标识
  changeHTMLUseLocale(lang);
  // TODO: 设置系统缓存
}

export function useLocale() {
  return {
    changeUseLocale,
    useLangMessage
  };
}
