import type { Router } from "vue-router";
import { useLangMessage } from "@/locales/useLangMessage";
import { SystemModule } from "#/settings";

export function createLocalGuard(router: Router) {
  router.beforeEach(async to => {
    useLangMessage(to.meta.module as SystemModule, "zh_CN");
    return true;
  });
}
