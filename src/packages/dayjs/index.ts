import type { AvailableLocalesTypeValues } from "#/locales";

import dayjs from "dayjs";

import en_US from "./lang/en_US";
import zh_CN from "./lang/zh_CN";

const localeList = {
  en_US,
  zh_CN
};
/**
 *改变 dayjs 的国际化
 * @param lang 语言
 */
export function changeDayjsUseLocale(lang: AvailableLocalesTypeValues) {
  dayjs.locale(localeList[lang]);
}
