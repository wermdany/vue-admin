import type { RouteRecordRaw } from "vue-router";
import { _HOME_PAGE_, _NONE_PAGE_ } from "@/utils/symbol";

/** 默认首页 */
export const HOME_PAGE: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
    name: _HOME_PAGE_
  }
];

/** 全局后置匹配规则  */
export const NONE_PAGE: RouteRecordRaw[] = [
  {
    path: "/:_(.*)*",
    component: () => import("@/views/common/pages/404.vue"),
    name: _NONE_PAGE_
  }
];
