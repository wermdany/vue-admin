import { Router } from "vue-router";

import { onLaunch } from "./onLaunch";
import { createLocalGuard } from "./localGuard";

export function createGuard(router: Router) {
  onLaunch(router);
  createLocalGuard(router);
}
