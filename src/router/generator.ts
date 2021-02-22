/**
 * "./login/route/map.ts"
 */

import { SelfRouteMap, SelfRouteRaw } from "@/types/route";
import { RouteMapItem } from "@/types/route";
import { join } from "path";

type AllRouteMap = Map<string, SelfRouteMap>;
type AllRouteConfig = Map<string, SelfRouteRaw[]>;

/** 匹配映射模块名 */
const mapModuleNameReg = /^\.\/(\w+)\/route\/map\.ts$/;
/** 匹配路由配置 */
const RouteModuleNameReg = /^\.\/(\w+)\/route\/route\.ts$/;

/**
 *分模块获取所有的路由映射信息
 *
 * @date 25/01/2021
 * @export
 */
export function getAllRouteMap() {
  const readMap = require.context("@/views", true, /^\.\/\w+\/route\/map\.ts$/);

  const maps: AllRouteMap = readMap.keys().reduce((all, path) => {
    const moduleName = path.replace(mapModuleNameReg, "$1");
    if (readMap(path).default) {
      all.set(moduleName, readMap(path).default);
    } else {
      console.warn(
        `路由映射-模块[${moduleName}]文件为空。\n在 ${join("src", path)}`
      );
    }
    return all;
  }, new Map());
  return maps;
}

/**
 *分模块获取所有的路由配置信息
 *
 * @date 25/01/2021
 * @export
 */
export function getAllRouteConfig() {
  const readRouteConfig = require.context(
    "@/views",
    true,
    /^\.\/\w+\/route\/route\.ts$/
  );

  const allRouteConfig: AllRouteConfig = readRouteConfig
    .keys()
    .reduce((all, path) => {
      const moduleName = path.replace(RouteModuleNameReg, "$1");
      if (readRouteConfig(path).default) {
        all.set(moduleName, readRouteConfig(path).default);
      } else {
        console.warn(
          `路由配置-模块[${moduleName}]文件为空。\n在${join("src", path)}`
        );
      }
      return all;
    }, new Map());
  return allRouteConfig;
}

/**
 *获取所有的路由映射信息
 *
 * @date 25/01/2021
 * @export
 */
export function getUseRouteMap(routeMap: AllRouteMap) {
  const res = new Map<string, RouteMapItem>();
  for (const iterator of routeMap.values()) {
    for (const item in iterator) {
      res.set(item, iterator[item]);
    }
  }
  return res;
}

/**
 *获取所有的路由配置信息
 *
 * @date 25/01/2021
 * @export
 */
export function getUseRouteConfig(routeConfig: AllRouteConfig) {
  let res: SelfRouteRaw[] = [];
  for (const iterator of routeConfig.values()) {
    res = res.concat(iterator);
  }
  return res;
}

/**
 *根据自定的路由规则匹配上去对应的组件
 *
 * @export
 * @param {Map<string, RouteMapItem>} allMap
 * @param {SelfRouteRaw[]} useConfig
 */
export function giveRouteConfigUseComponent(
  allMap: Map<string, RouteMapItem>,
  useConfig: SelfRouteRaw[]
) {
  const res: SelfRouteRaw[] = [];
  useConfig.forEach(item => {
    const node = item;
    if (!allMap.has(<string>item.component)) {
      console.error(`缺少[${item.component}]的组件映射`);
    } else {
      node.name = item.component as string;
      node.component = allMap.get(<string>item.component)?.component;
    }
    res.push(node);
    if (node.children) {
      node.children = giveRouteConfigUseComponent(allMap, node.children);
    }
  });
  return res;
}
