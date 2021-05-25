import type { RouteRecordRaw } from "vue-router";
import type { Component } from "./global";
import type { SystemModule } from "./settings";
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
  title: string;
  module: SystemModule;
}

/** 重定路由规则 */
export interface SelfRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name?: string;
  meta?: SelfRouteMeta;
  component?: Component | string;
  children?: SelfRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}
