import { RouteLocationNormalized, useRoute } from "vue-router";
import {
  getLocalLanguage,
  parseLanguage,
  validateUseLanguageRegExp
} from "@/utils";
import localConfig from "./localConfig";

type FallbackLanguagesMapKey = keyof typeof localConfig.fallbackLanguagesMap;

/**
 *验证和转化语言
 *在真正使用外部拿到的语言前都需要转化一下
 *主要用途是把语言格式化为系统统一的格式并且在不合规范时尝试进行后备处理
 *
 * @param {string} lang
 */
function checkLanguage(lang: string) {
  const useLang = parseLanguage(lang);
  if (validateUseLanguageRegExp.test(useLang)) {
    if (localConfig.availableLocales.includes(useLang)) return useLang;
    return false;
  } else {
    if (useLang in localConfig.fallbackLanguagesMap) {
      return localConfig.fallbackLanguagesMap[
        (useLang as unknown) as FallbackLanguagesMapKey
      ];
    } else {
      return false;
    }
  }
}
/**
 *尝试使用 url 中指认的语言
 *
 */
function useUrlLanguage(RouteRecord: RouteLocationNormalized) {
  const { query } = RouteRecord ?? useRoute();
  if (localConfig.urlQueryKey in query) {
    let language = query[localConfig.urlQueryKey] as string;
    language = checkLanguage(language) as string;
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
function useSystemLanguage() {
  const language = getLocalLanguage();
  const checkedLanguage = checkLanguage(language);
  if (checkedLanguage) return checkedLanguage;
  return false;
}

/**
 *获取要使用的语言
 * 详细参见:
 */
export function getUseLanguage(routeRecord: RouteLocationNormalized) {
  let language: string | false = "";
  //获取 url 中的语言
  language = useUrlLanguage(routeRecord);
  // 使用系统默认语言
  if (!language) {
    language = useSystemLanguage();
  }
  //设为默认语言
  if (!language) {
    language = localConfig.locale;
  }
  return language;
}
