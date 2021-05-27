import type { AvailableLocalesTypeValues } from "#/locales";
import type { Ref } from "vue";
import vueI18n from ".";

/** 获取当前某语言的国际化语言配置 */
function getI18nNowLocaleMessageByLang(lang: AvailableLocalesTypeValues) {
  return vueI18n.global.getLocaleMessage(lang);
}

/** 获取当前所有的国际化文案配置 */
function getI18nNowAllLocaleMessage() {
  return vueI18n.global.messages;
}

/** 获取当前加载的国际化语言列表 */
function getI18nNowLocaleList() {
  return vueI18n.global.availableLocales;
}

/** 向当前国际化中追加语言和翻译文案 */
function setI18nLocaleMessage<M extends Record<any, any>>(
  lang: AvailableLocalesTypeValues,
  message: M
) {
  vueI18n.global.setLocaleMessage(lang, message);
}

/** 合并某语言下的国际化翻译文案 */
function mergeI18nLocaleMessage<M extends Record<any, any>>(
  lang: AvailableLocalesTypeValues,
  message: M
) {
  vueI18n.global.mergeLocaleMessage(lang, message);
}

/**
 *切换当前使用的语言
 */
function changeI18nUseLocale(lang: AvailableLocalesTypeValues) {
  if (vueI18n.mode === "legacy") {
    vueI18n.global.locale = lang;
  } else {
    (vueI18n.global.locale as unknown as Ref<string>).value = lang;
  }
}

export function useI18nApi() {
  return {
    changeI18nUseLocale,
    mergeI18nLocaleMessage,
    setI18nLocaleMessage,
    getI18nNowAllLocaleMessage,
    getI18nNowLocaleMessageByLang,
    getI18nNowLocaleList
  };
}
