import type { Router } from "vue-router";
import { useLangMessage } from "@/locales/useLangMessage";

export function createLocalGuard(router: Router) {
  router.beforeEach(async to => {
    console.log(to.meta);
    useLangMessage("common", "zh_CN");
    return true;
  });
}
