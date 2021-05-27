import type { Router } from "vue-router";
import { useLocaleApi } from "@/locales";

export function createLocalGuard(router: Router) {
  router.beforeEach(async to => {
    const { autoLoadLangMessage } = useLocaleApi();
    await autoLoadLangMessage(to);
    return true;
  });
}
