import type { AvailableLocalesTypeValues } from "#/locales";
import type { SystemModule } from "#/settings";
import type { RouteLocationNormalized } from "vue-router";

import axios from "axios";
import { useEnv } from "@/utils";

import { useI18nApi } from "@/packages/vue-i18n/useI18nApi";
import { useLocaleStore, useLocaleStoreOut } from "@/store";
import { changeHTMLUseLocale, pickLangMsgFileHash } from "@/utils";
import {
  ANTDV_LOCALES_MODULE_KEY,
  LOCALE_CACHE_MESSAGE_HASH_KEY
} from "@/settings";
import { availableLocales } from "@/locales/config";
import { useRouterApi } from "@/router";
import { computed, unref } from "vue";
import { useAntdvLocale } from "@/packages/ant-design-vue";
import { changeDayjsUseLocale } from "@/packages/dayjs";

const prefix = useEnv("VUE_APP_PUBLIC_PATH");

/**
 * 设置系统正在使用的语言
 * @param lang 需要设置的语言
 */
function changeUseLocale(lang: AvailableLocalesTypeValues) {
  // store hooks 必须在周期内调用，否则就会报错
  const { changeStoreUseLocale } = useLocaleStoreOut();
  const { changeI18nUseLocale } = useI18nApi();

  // 设置 vue-i18n
  changeI18nUseLocale(lang);
  // 设置 store
  changeStoreUseLocale(lang);
  // 设置 HTML 标识
  changeHTMLUseLocale(lang);
  // 设置 dayjs
  changeDayjsUseLocale(lang);
  // TODO: 设置系统缓存
}

/**
 *根据模块和语言，动态加载国际化文件路径
 * @param namespace 模块
 * @param lang 语言
 * @returns 模块下语言详细
 */
async function getLangPathAndHash(
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
  const { getI18nNowLocaleMessageByLang, getI18nNowLocaleList } = useI18nApi();

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

/**
 * 手动切换语言
 * @param lang 需要切换的语言
 */
async function manualChangeUseLocale(lang: AvailableLocalesTypeValues) {
  // 如果不在支持语言内
  if (!availableLocales.includes(lang)) {
    // TODO: 给出提示
    return;
  }
  // 拿到 vue-i18n 相关 api
  const { mergeI18nLocaleMessage } = useI18nApi();

  // 1. 尝试加载 antdv 国际化
  const antdv = ANTDV_LOCALES_MODULE_KEY;

  const { loadAntdvMessage } = useAntdvLocale();
  const antdvMessage = await loadAntdvMessage(lang);

  // 合并国际化语言
  mergeI18nLocaleMessage(lang, { [antdv]: antdvMessage });
  // 2. 尝试加载页面国际化
  // 拿到当前路由信息
  const { getCurrentRoute } = useRouterApi();
  // 获取 module
  const module = unref(getCurrentRoute()).meta.module;
  // 获取 hash 和 path
  const { hash, path } = await getLangPathAndHash(module, lang);
  // 是否需要加载 message
  if (!canILoadMessage(lang, hash, module)) {
    // 仅切换语言
    changeUseLocale(lang);
    return;
  }
  // 拿到 message
  const message = await loadLangMessage(path);
  // 注入 hash 用以缓存
  message[LOCALE_CACHE_MESSAGE_HASH_KEY] = hash;
  // 合并国际化语言
  mergeI18nLocaleMessage(lang, { [module]: message });
  // 切换语言
  changeUseLocale(lang);
}

/**
 *在路由切换时，自动加载所需的国际化语言
 * @param to 路由将要去的页面
 * @returns
 */
async function autoLoadLangMessage(to: RouteLocationNormalized) {
  const { loadLangMessage, getLangPathAndHash, canILoadMessage } =
    useLocaleApi();
  // 拿到 vue-i18n 相关 api
  const { mergeI18nLocaleMessage } = useI18nApi();
  // 拿到当前国际化语言标识
  const { lang } = useLocaleStoreOut();
  // 1. 尝试加载 antdv 国际化
  const antdv = ANTDV_LOCALES_MODULE_KEY;

  const { loadAntdvMessage } = useAntdvLocale();
  const antdvMessage = await loadAntdvMessage(lang);

  // 合并国际化语言
  mergeI18nLocaleMessage(lang, { [antdv]: antdvMessage });

  // 2. 尝试加载页面国际化
  // 拿到模块名
  const module = to.meta.module;
  if (!module) {
    return;
  }
  // 根据模块名和语言标识找到加载国际化语言文件的地址
  const { hash, path } = await getLangPathAndHash(module, lang);
  if (!canILoadMessage(lang, hash, module)) {
    return;
  }
  // 请求资源
  const message = await loadLangMessage(path);
  // 注入 hash 用以缓存
  message[LOCALE_CACHE_MESSAGE_HASH_KEY] = hash;

  // 合并国际化语言
  mergeI18nLocaleMessage(lang, { [module]: message });
}

function getAntdvLocales() {
  const localeStore = useLocaleStore();
  const { getI18nNowAllLocaleMessage } = useI18nApi();
  const message = getI18nNowAllLocaleMessage();
  console.log(message);
  return computed(() => {
    return unref(message)?.[localeStore.lang]?.[ANTDV_LOCALES_MODULE_KEY] ?? {};
  });
}

/**
 *对外部提供系统国际化 api
 */
export function useLocaleApi() {
  return {
    changeUseLocale,
    loadLangMessage,
    getLangPathAndHash,
    canILoadMessage,
    manualChangeUseLocale,
    autoLoadLangMessage,
    getAntdvLocales
  };
}
