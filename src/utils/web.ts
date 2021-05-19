import type { AvailableLocalesTypeValues } from "@/locales/config";

/**
 *获取本机语言
 *
 * @date 01/02/2021
 * @export
 */
export function getLocalLanguage() {
  return window.navigator.language;
}

/**
 *获取本机语言列表
 *
 * @export
 */
export function getLocalLanguages() {
  return window.navigator.languages;
}

/**
 *设置 HTML 标签的 lang
 * @param lang
 */
export function setHTMLLang<T extends AvailableLocalesTypeValues>(
  lang: T
): void {
  document.documentElement.lang = lang as string;
}
