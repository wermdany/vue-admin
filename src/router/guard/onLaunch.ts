/**
 *页面首次加载
 *
 */
import { getUseLanguage } from "@/locales/generator";
import { useLocal } from "@/locales/useLocal";
import { Router, START_LOCATION } from "vue-router";

export function onLaunch(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (from === START_LOCATION) {
      console.log("onLaunch");
      const { changeLocal } = useLocal();
      changeLocal(getUseLanguage(to));
    }
    return next();
  });
}
