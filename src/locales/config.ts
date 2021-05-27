import type { AvailableLocalesTypeValues } from "#/locales";

/** 本地语言，同时也是默认语言，在所有回退规则失效后，才会选择 */
export const defaultLocale = "zh_CN";

/** 回退语言，当语言下某个翻译不存在时，则会回退至此语言的翻译 */
export const fallbackLocale = "zh_CN";

/** 当前系统支持的语言列表 */
export const availableLocaleList = {
  zh_CN: "简体中文",
  en_US: "English (US)"
};

/** 当前系统支持的语言 */
export const availableLocales = Object.keys(
  availableLocaleList
) as Array<AvailableLocalesTypeValues>;

/** url中标志语言的 key */
export const urlQueryKey = "language";

/** 首选语言回退映射 */
export const fallbackLanguagesMap = {
  zh: "zh_CN",
  en: "en_US"
};
