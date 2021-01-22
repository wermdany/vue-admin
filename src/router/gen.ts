/**
 * "./login/route/map.ts"
 */

import { SelfRouteMap, SelfRouteRaw } from "@/types/global";
import { RouteRecordRaw } from "vue-router";

type AllRouteMap = Map<string, SelfRouteMap>;
type AllRouteConfig = Map<string, SelfRouteRaw[]>;

/** 匹配映射模块名 */
const mapModuleNameReg = /^\.\/(\w+)\/route\/map\.ts$/;
const RouteModuleNameReg = /^\.\/(\w+)\/route\/route\.ts$/;

export function getAllRouteMap() {
  const readMap = require.context("@/views", true, /^\.\/\w+\/route\/map\.ts$/);

  const maps: AllRouteMap = readMap.keys().reduce((all, path) => {
    const moduleName = path.replace(mapModuleNameReg, "$1");
    all.set(moduleName, readMap(path).default);
    return all;
  }, new Map());

  return maps;
}

export function getAllRouteConfig() {
  const readRoute = require.context(
    "@/views",
    true,
    /^\.\/\w+\/route\/route\.ts$/
  );

  const allRouteConfig: AllRouteConfig = readRoute
    .keys()
    .reduce((all, path) => {
      const moduleName = path.replace(RouteModuleNameReg, "$1");
      all.set(moduleName, readRoute(path).default);
      return all;
    }, new Map());

  return allRouteConfig;
}
export function getComponentName(component: any) {
  component().then((res: any) => {
    return res.default.name;
  });
  return name;
}

export function genRoutes(
  allRouteMap: AllRouteMap,
  allRouteConfig: AllRouteConfig
) {
  let genAllRoute: RouteRecordRaw[] = [];
  allRouteConfig.forEach((value, key) => {
    const routeItem = allRouteConfig.get(key);
    routeItem?.forEach(async item => {
      const component = <any>allRouteMap.get(key)?.[item.component].component;
      item.component = component;
    });
    genAllRoute = [].concat(routeItem as any);
  });
  return genAllRoute;
}
