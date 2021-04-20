import type { RouteRecordRaw } from "vue-router";
import { __HOME_PAGE__, __NONE_PAGE__ } from "@/utils/symbol";

/** 默认首页 */
export const HOME_PAGE: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
    name: __HOME_PAGE__
  }
];

/** 全局后置匹配规则  */
export const NONE_PAGE: RouteRecordRaw[] = [
  {
    path: "/:_(.*)*",
    component: () => import("@/views/common/pages/404.vue"),
    name: __NONE_PAGE__
  }
];
