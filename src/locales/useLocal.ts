import { Ref } from "vue";
import { vueI18n } from "./index";

/**
 *切换语言
 *
 * @param {string} lang
 */
function changeLocal(lang: string) {
  if (vueI18n.mode === "legacy") {
    vueI18n.global.locale = lang;
  } else {
    ((vueI18n.global.locale as unknown) as Ref<string>).value = lang;
  }
}
/**
 *使用和国际化相关的 API
 *
 * @export
 */
export function useLocal() {
  return { changeLocal };
}
