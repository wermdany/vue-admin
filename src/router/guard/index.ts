import { Router } from "vue-router";

import { createLaunchGuard } from "./launchGuard";
import { createLocalGuard } from "./localeGuard";

export function createGuard(router: Router) {
  // 因为使用 push hooks 所以 createLaunchGuard 必须放在第一个 才能保证首先执行
  createLaunchGuard(router);
  // 创建本地化
  createLocalGuard(router);
}
