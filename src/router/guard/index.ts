import { Router } from "vue-router";

import { onLaunch } from "./onLaunch";
import { createLocalGuard } from "./localGuard";

export function createGuard(router: Router) {
  // 因为使用 push hooks 所以 onLaunch 必须放在第一个
  onLaunch(router);
  createLocalGuard(router);
}
