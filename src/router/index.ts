import {
  createRouter,
  createWebHashHistory,
  RouteRecordName,
  RouteRecordRaw
} from "vue-router";

const aa = () => import("@/views/about.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: () => import("@/views/index.vue")
  },
  {
    path: "/about",
    name: Symbol("aa"),
    component: aa
  },
  {
    path: "/:all(.*)+",
    redirect: "/about"
  }
];

/** 初始化 router */
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition);
      return savedPosition;
    } else {
      return {
        top: 0,
        behavior: "smooth"
      };
    }
  }
});

/**
 *向 router 注入新的路由规则
 *
 * @date 21/01/2021
 * @export
 * @param {RouteRecordRaw} routes
 */
export function addRoutes(routes: RouteRecordRaw): void {
  router.addRoute(routes);
}
/**
 *根据路由名称删除一个路由
 *
 * @date 21/01/2021
 * @export
 * @param {RouteRecordName} name
 */
export function removeRoute(name: RouteRecordName) {
  router.removeRoute(name);
}

/**
 *获取当前全部路由信息
 *
 * @date 21/01/2021
 * @export
 */
export function getRoutes() {
  return router.getRoutes();
}

/**
 *根据根据路由名称判断是否在路由表中
 *
 * @date 21/01/2021
 * @export
 * @param {RouteRecordName} name
 */
export function hasRoute(name: RouteRecordName) {
  return router.hasRoute(name);
}

export default router;
