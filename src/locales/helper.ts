import { RouteLocationNormalized, useRoute } from "vue-router";
import type { AvailableLocalesTypeValues } from "#/locales";
import {
  getLocalLanguage,
  isBool,
  isUndefined,
  parseLanguage,
  systemUseLanguage
} from "@/utils";
import {
  fallbackLanguagesMap,
  availableLocales,
  urlQueryKey,
  defaultLocale
} from "./config";

type FallbackLanguagesMapKey = keyof typeof fallbackLanguagesMap;

/**
 *验证和转化语言
 *在真正使用外部拿到的语言前都需要转化一下
 *主要用途是把语言格式化为系统统一的格式并且在不合规范时尝试进行后备处理
 *
 */
function checkLanguage(lang: string) {
  if (isBool(lang)) {
    return false;
  }
  const useLang = parseLanguage(lang);
  if (!useLang) return false;
  if (
    systemUseLanguage.test(useLang) &&
    availableLocales.includes(useLang as AvailableLocalesTypeValues)
  ) {
    return useLang;
  } else {
    const prefix = useLang.substr(0, 2);
    if (prefix in fallbackLanguagesMap) {
      return fallbackLanguagesMap[prefix as FallbackLanguagesMapKey];
    } else {
      return false;
    }
  }
}
/**
 *尝试使用 url 中指认的语言
 *
 */
function useUrlQueryLanguage(RouteRecord: RouteLocationNormalized) {
  const { query } = RouteRecord ?? useRoute();
  if (urlQueryKey in query) {
    let language = query[urlQueryKey] as string | false;
    language = checkLanguage(language as string);
    if (language) return language;
    return false;
  } else {
    return false;
  }
}

/**
 *尝试使用浏览器默认语言
 *
 */
function useBrowserLanguage() {
  const language = getLocalLanguage();
  const checkedLanguage = checkLanguage(language);
  if (checkedLanguage) return checkedLanguage;
  return false;
}

/** 获取要使用的语言 */
export function getUseLanguage(routeRecord?: RouteLocationNormalized) {
  let language: string | false = "";

  //获取 url 中的语言
  if (!isUndefined(routeRecord)) {
    language = useUrlQueryLanguage(routeRecord);
  }

  // 使用系统默认语言
  if (!language) {
    language = useBrowserLanguage();
  }

  //设为默认语言
  if (!language) {
    language = defaultLocale;
  }

  return language as AvailableLocalesTypeValues;
}
