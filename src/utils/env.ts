/**
 *与 环境变量 相关的方法
 *
 */

/** 环境变量 */
export const env = process.env;

type EnvType = typeof env;

/** 根据 key 获取环境变量的值 */
export const useEnv = <K extends keyof EnvType>(options: K): EnvType[K] =>
  env[options];

/** 是否是开发环境 */
export const isDev = useEnv("NODE_ENV") === "development";

/** 是否是生产 */
export const isProd = useEnv("NODE_ENV") === "production";

/** 是否是测试 */
export const isTest = useEnv("NODE_ENV") === "test";

/** 是否是 lint */
export const isLint = useEnv("NODE_ENV") === "lint";
