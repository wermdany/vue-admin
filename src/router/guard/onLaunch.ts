/**
 *页面首次加载
 *
 */
import { getUseLanguage } from "@/locales/generator";
import { useLocal } from "@/locales/useLocal";
import { Router } from "vue-router";

export function onLaunch(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (from.matched.length === 0) {
      console.log("onLaunch");
      const { changeLocal } = useLocal();
      changeLocal(getUseLanguage(to));
    }
    return next();
  });
}
