import type { AvailableLocalesTypeValues } from "#/locales";
import type { SystemModule } from "#/settings";
import { useEnv } from "@/utils";
import axios from "axios";

const prefix = useEnv("VUE_APP_PUBLIC_PATH");

/**
 *根据模块和语言，动态加载国际化数据集
 * @param namespace 模块
 * @param lang 语言
 * @returns 模块下语言详细
 */
export async function useLangMessage(
  namespace: SystemModule,
  lang: AvailableLocalesTypeValues
): Promise<object> {
  const path = (
    await import(
      /* webpackMode: "lazy-once" */
      `@/views/${namespace}/lang/${lang}.json`
    )
  ).default as string;
  try {
    const message = await axios.get(path, { baseURL: prefix });
    return message.data;
  } catch (e) {
    // TODO: throw tips message
    return {};
  }
}
