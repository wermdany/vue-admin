import type { SelfRouteRecordRaw } from "#/route";

const route: Array<SelfRouteRecordRaw> = [
  {
    path: "/login",
    component: "LOGIN",
    name: "login",
    meta: {
      module: "login",
      title: "登录"
    }
  }
];

export default route;
