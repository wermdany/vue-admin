import type { Lazy, Component } from "#/global";
import type { SystemModule } from "./settings";
import type { _RouteRecordBase, RouteLocationNormalized } from "vue-router";

/**
 * router 映射单项
 */
export interface RouteMapItem {
  /** 组件映射 */
  component: Component;
  /** 开发人员填写的描述 */
  describe: string;
}

/** 组件映射结构 */
export interface SelfRouteMap {
  /** 组件映射名 */
  [key: string]: RouteMapItem;
}
/** 路由元数据 */
export interface SelfRouteMeta {
  /** 页面标题 */
  title: string;
  /** 页面所属模块 */
  module: SystemModule;
}

/** 路由规则 */
interface RouteRecordRawSelf extends _RouteRecordBase {
  component?: Component | Lazy<Component> | string;
  children?: RouteRecordSelf[];
  components?: never;
  props?:
    | boolean
    | Record<string, any>
    | ((to: RouteLocationNormalized) => Record<string, any>);
}

declare module "vue-router" {
  /** 重定路由元数据规则 */
  export declare interface RouteMeta extends SelfRouteMeta {}
  /** 重定路由规则 */
  export declare type RouteRecordSelf = RouteRecordRawSelf;
}
