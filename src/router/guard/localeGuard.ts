import type { Router } from "vue-router";
import { useLocale } from "@/locales";
import { useLocaleStoreOut } from "@/store";
import { setI18nLocaleMessage } from "@/packages/vue-i18n/helper";
export function createLocalGuard(router: Router) {
  router.beforeEach(async to => {
    const { loadLangMessage } = useLocale();
    const { lang } = useLocaleStoreOut();
    const module = to.meta.module;
    const { data, hash } = await loadLangMessage(module, lang);
    data._HASH_ = hash;
    setI18nLocaleMessage(lang, { [module]: data });
    console.log(data);
    return true;
  });
}
