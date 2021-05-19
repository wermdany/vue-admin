import { Router } from "vue-router";

export function createLocalGuard(router: Router) {
  router.beforeEach(async () => {
    return true;
  });
}
