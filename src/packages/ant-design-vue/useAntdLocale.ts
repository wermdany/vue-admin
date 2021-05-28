import type { AvailableLocalesTypeValues } from "#/locales";
import { LOCALE_CACHE_MESSAGE_HASH_KEY } from "@/settings";
import { version } from "ant-design-vue/package.json";

/**
 *加载 ant-design-vue 国际化数据集
 * @param lang
 * @returns
 */
async function loadAntdvMessage(lang: AvailableLocalesTypeValues) {
  const message = (
    await import(
      /* webpackChunkName: "../lang/antdv-[request]" */
      `@/packages/ant-design-vue/lang/${lang}`
    )
  ).default as Record<string, any>;
  message[LOCALE_CACHE_MESSAGE_HASH_KEY] = version;
  return message;
}

/**
 * 对外部暴漏 antd 国际化相关 api
 * @returns
 */
export function useAntdvLocale() {
  return {
    loadAntdvMessage
  };
}
