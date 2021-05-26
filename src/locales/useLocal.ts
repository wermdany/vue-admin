import type { AvailableLocalesTypeValues } from "#/locales";
import type { SystemModule } from "#/settings";

import axios from "axios";
import { useEnv } from "@/utils";

import { changeI18nUseLocale } from "@/packages/vue-i18n/helper";
import { useLocaleStoreOut } from "@/store";
import { changeHTMLUseLocale, pickLangMsgFileHash } from "@/utils";

const prefix = useEnv("VUE_APP_PUBLIC_PATH");

/**
 * 设置系统正在使用的语言
 * @param lang 需要设置的语言
 */
function changeUseLocale(lang: AvailableLocalesTypeValues) {
  // store hooks 必须在周期内调用，否则就会报错
  const { changeStoreUseLocale } = useLocaleStoreOut();
  // 设置 vue-i18n
  changeI18nUseLocale(lang);
  // 设置 store
  changeStoreUseLocale(lang);
  // 设置 HTML 标识
  changeHTMLUseLocale(lang);
  // TODO: 设置系统缓存
}

interface ReturnMessage {
  data: Record<string, any>;
  hash: string;
}

/**
 *根据模块和语言，动态加载国际化数据集
 * @param namespace 模块
 * @param lang 语言
 * @returns 模块下语言详细
 */
async function loadLangMessage(
  namespace: SystemModule,
  lang: AvailableLocalesTypeValues
): Promise<ReturnMessage> {
  const path = (
    await import(
      /* webpackMode: "lazy-once" */
      `@/views/${namespace}/lang/${lang}.json`
    )
  ).default as string;
  try {
    const data = await axios.get(path, { baseURL: prefix });
    console.log(data);
    const message = {
      data: data.data,
      hash: pickLangMsgFileHash(data.config.url)
    };
    return message;
  } catch (e) {
    // TODO: throw tips message
    return {
      data: {},
      hash: ""
    };
  }
}

export function useLocale() {
  return {
    changeUseLocale,
    loadLangMessage
  };
}
