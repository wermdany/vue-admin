import type { AvailableLocalesTypeValues } from "#/locales";

import { defineStore } from "pinia";
import Store from "@/store";

interface LocaleState {
  locale: AvailableLocalesTypeValues | "";
}

const useLocaleStore = defineStore({
  id: "locale",
  state: (): LocaleState => ({
    locale: ""
  }),
  actions: {
    /**
     *在 Store 中设置当前系统语言
     * @param lang 要设置的语言
     */
    changeStoreUseLocale(lang: AvailableLocalesTypeValues) {
      this.locale = lang;
    }
  }
});

export { useLocaleStore };

/** 在非 setup 使用 */
export function useLocaleStoreOut() {
  return useLocaleStore(Store);
}
