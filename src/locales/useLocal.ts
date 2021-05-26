import type { AvailableLocalesTypeValues } from "#/locales";
import type { SystemModule } from "#/settings";

import axios from "axios";
import { useEnv } from "@/utils";

import { useI18nHelper } from "@/packages/vue-i18n/useI18nHelper";
import { useLocaleStoreOut } from "@/store";
import { changeHTMLUseLocale, pickLangMsgFileHash } from "@/utils";
import { LOCALE_CACHE_MESSAGE_HASH_KEY } from "@/settings";

const prefix = useEnv("VUE_APP_PUBLIC_PATH");

/**
 * 设置系统正在使用的语言
 * @param lang 需要设置的语言
 */
function changeUseLocale(lang: AvailableLocalesTypeValues) {
  // store hooks 必须在周期内调用，否则就会报错
  const { changeStoreUseLocale } = useLocaleStoreOut();
  // 设置 vue-i18n
  const { changeI18nUseLocale } = useI18nHelper();
  changeI18nUseLocale(lang);
  // 设置 store
  changeStoreUseLocale(lang);
  // 设置 HTML 标识
  changeHTMLUseLocale(lang);
  // TODO: 设置系统缓存
}

/**
 *根据模块和语言，动态加载国际化文件路径
 * @param namespace 模块
 * @param lang 语言
 * @returns 模块下语言详细
 */
async function getLangPath(
  module: SystemModule,
  lang: AvailableLocalesTypeValues
) {
  const path = (
    await import(
      /* webpackMode: "lazy-once" */
      `@/views/${module}/lang/${lang}.json`
    )
  ).default as string;
  const hash = pickLangMsgFileHash(path);
  return {
    hash,
    path
  };
}

/**
 *根据模块和语言，动态加载国际化数据集
 * @param namespace 模块
 * @param lang 语言
 * @returns 模块下语言详细
 */
async function loadLangMessage(path: string): Promise<Record<string, any>> {
  try {
    const data = await axios.get(path, { baseURL: prefix });
    return data.data;
  } catch (e) {
    // TODO: throw tips message
    return {};
  }
}
/**
 *我可以加载这个国际化 message 吗？
 *
 * @param {AvailableLocalesTypeValues} lang 将要加载语言的标识
 * @param {string} hash 将要加载语言的 hash
 * @param {SystemModule} module 将要加载语言的模块
 * @returns {boolean}
 */
function canILoadMessage(
  lang: AvailableLocalesTypeValues,
  hash: string,
  module: SystemModule
): boolean {
  const { getI18nNowLocaleMessageByLang, getI18nNowLocaleList } =
    useI18nHelper();

  // 获取语言列表
  const useLocaleList = getI18nNowLocaleList();

  // 如果所需语言不在列表内
  if (!useLocaleList.includes(lang)) {
    return true;
  }
  // 拿到语言下所有加载过的 message
  const usingMessage = getI18nNowLocaleMessageByLang(lang);
  // 获取语言下已经加载的模块列表
  const moduleList = Object.keys(usingMessage);
  // 如果所需模块不在模块列表内
  if (!moduleList.includes(module)) {
    return true;
  }
  // 拿到需要加载语言 message 的 hash
  const usingHash = (usingMessage[module] as Record<string, any>)[
    LOCALE_CACHE_MESSAGE_HASH_KEY
  ] as string;
  // 如果 hash 不相同 (需要更新)
  if (usingHash !== hash) {
    return true;
  }
  // 其他不需要加载
  return false;
}

export function useLocale() {
  return {
    changeUseLocale,
    loadLangMessage,
    getLangPath,
    canILoadMessage
  };
}
