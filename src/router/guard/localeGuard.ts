import type { Router } from "vue-router";
import { useLocale } from "@/locales";
import { useLocaleStoreOut } from "@/store";
import { useI18nHelper } from "@/packages/vue-i18n/useI18nHelper";
import { LOCALE_CACHE_MESSAGE_HASH_KEY } from "@/settings";

export function createLocalGuard(router: Router) {
  router.beforeEach(async to => {
    const { loadLangMessage, getLangPath, canILoadMessage } = useLocale();
    // 拿到当前国际化语言标识
    const { lang } = useLocaleStoreOut();
    // 拿到模块名
    const module = to.meta.module;
    if (!module) {
      return true;
    }
    // 根据模块名和语言标识找到加载国际化语言文件的地址
    const { hash, path } = await getLangPath(module, lang);
    if (!canILoadMessage(lang, hash, module)) {
      return true;
    }
    // 请求资源
    const data = await loadLangMessage(path);
    // 注入 hash 用以缓存
    data[LOCALE_CACHE_MESSAGE_HASH_KEY] = hash;
    // 设置国际化 message
    const { mergeI18nLocaleMessage } = useI18nHelper();
    mergeI18nLocaleMessage(lang, { [module]: data });
    return true;
  });
}
