/**
 *页面首次加载
 *
 */
import { getUseLanguage } from "@/locales/localeHelper";
import { Router, START_LOCATION, RouteLocationNormalized } from "vue-router";
import { useLocaleApi } from "@/locales";
import { isDev } from "@/utils";

/**
 * 初始化系统语言
 */
function initUseLanguage(to: RouteLocationNormalized) {
  // 拿到应该使用的语言
  const lang = getUseLanguage(to);
  const { changeUseLocale } = useLocaleApi();
  // 切换系统语言
  changeUseLocale(lang);
}

export function createLaunchGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // 页面首次加载
    if (from === START_LOCATION) {
      isDev && console.log("onLaunch");
      //初始化系统语言
      initUseLanguage(to);
    }
    return next();
  });
}
