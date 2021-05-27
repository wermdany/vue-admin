import type { RouteRecordSelf } from "vue-router";
import { _HOME_PAGE_, _NONE_PAGE_ } from "@/settings";

/** 默认首页 */
export const HOME_PAGE: RouteRecordSelf[] = [
  {
    path: "/",
    redirect: "/login",
    name: _HOME_PAGE_
  }
];

/** 全局后置匹配规则  */
export const NONE_PAGE: Array<RouteRecordSelf> = [
  {
    path: "/:_(.*)*",
    component: () => import("@/views/common/pages/404.vue"),
    name: _NONE_PAGE_,
    meta: {
      module: "common",
      title: "404"
    }
  }
];
