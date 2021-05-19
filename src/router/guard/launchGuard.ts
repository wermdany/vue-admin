/**
 *页面首次加载
 *
 */
import { getUseLanguage } from "@/locales/helper";
import { Router, START_LOCATION } from "vue-router";

export function createLaunchGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (from === START_LOCATION) {
      console.log("onLaunch");
      console.log(getUseLanguage(to));
    }
    return next();
  });
}
