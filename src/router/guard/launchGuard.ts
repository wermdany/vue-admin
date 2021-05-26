/**
 *页面首次加载
 *
 */
import { getUseLanguage } from "@/locales/useLang";
import { Router, START_LOCATION } from "vue-router";
import { useLocale } from "@/locales";
import { isDev } from "@/utils";

function initUseLanguage() {
  // 拿到应该使用的语言
  const lang = getUseLanguage();
  const { changeUseLocale } = useLocale();
  // 切换系统语言
  changeUseLocale(lang);
}

export function createLaunchGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // 页面首次加载
    if (from === START_LOCATION) {
      isDev && console.log("onLaunch");
      //初始化系统语言
      initUseLanguage();
    }
    return next();
  });
}
