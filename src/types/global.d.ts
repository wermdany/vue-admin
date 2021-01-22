import { RouteComponent, _RouteRecordBase } from "vue-router";

/** 组件映射结构 */
export interface SelfRouteMap {
  [key: string]: {
    /** 组件映射 */
    component: RouteComponent;

    /** 开发人员填写的描述 */
    describe: string;
  };
}

/** 路由元数据 */
export interface SelfRouteMeta {
  title: string;
}

/** 重定路由规则 */
export interface SelfRouteRaw extends _RouteRecordBase {
  /** 组件映射名 */
  component: string;
  meta?: SelfRouteMeta;
}
