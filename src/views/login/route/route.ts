import type { RouteRecordSelf } from "vue-router";
const route: Array<RouteRecordSelf> = [
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
