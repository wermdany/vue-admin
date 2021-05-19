import type { AvailableLocalesTypeValues } from "@/locales/config";
import type { Ref } from "vue";
import vueI18n from "./";

/** 获取当前某语言的国际化语言配置 */
export function getNowLocaleMessageByLang(lang: AvailableLocalesTypeValues) {
  return vueI18n.global.getLocaleMessage(lang);
}

/** 获取当前所有的国际化文案配置 */
export function getNowAllLocaleMessage() {
  return vueI18n.global.messages;
}

/** 向当前国际化中追加语言和翻译文案 */
export function setLocaleMessage<M extends Record<any, any>>(
  lang: AvailableLocalesTypeValues,
  message: M
) {
  vueI18n.global.setLocaleMessage(lang, message);
}

/** 合并某语言下的国际化翻译文案 */
export function mergeLocaleMessage<M extends Record<any, any>>(
  lang: AvailableLocalesTypeValues,
  message: M
) {
  vueI18n.global.mergeLocaleMessage(lang, message);
}

/**
 *切换当前使用的语言
 */
export function changeUseLocal(lang: AvailableLocalesTypeValues) {
  if (vueI18n.mode === "legacy") {
    vueI18n.global.locale = lang;
  } else {
    ((vueI18n.global.locale as unknown) as Ref<string>).value = lang;
  }
}
