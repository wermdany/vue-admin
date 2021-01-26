/* eslint-disable prettier/prettier */
import type { RouteRecordRaw } from "vue-router";
import type { Component } from "./global"

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
}

/** 重定路由规则 */
export interface SelfRouteRaw extends Omit<RouteRecordRaw, "meta"> {
  name?: string;
  meta?: RouteMeta;
  component?: Component | string;
  children?: SelfRouteRaw[];
  props?: Recordable;
  fullPath?: string;
}
