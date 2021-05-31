import type { AvailableLocalesTypeValues } from "#/locales";

import dayjs from "dayjs";

import en_US from "./lang/en_US";
import zh_CN from "./lang/zh_CN";

const localeList = {
  en_US,
  zh_CN
};

export function changeDayjsUseLocale(lang: AvailableLocalesTypeValues) {
  dayjs.locale(localeList[lang]);
}
