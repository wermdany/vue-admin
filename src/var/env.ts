/** 环境变量 */
export const env = process.env;

type EnvKeys = typeof env;

/** 根据 key 获取 环境变量的值 */
export const getEnvOptions = (options: keyof EnvKeys) => env[options];

/** 是否是开发环境 */
export const isDev = () => getEnvOptions("NODE_ENV") === "development";

/** 是否是生产 */
export const isProd = () => getEnvOptions("NODE_ENV") === "production";

/** 是否是测试 */
export const isTest = () => getEnvOptions("NODE_ENV") === "test";

/** 是否是 lint */
export const isLint = () => getEnvOptions("NODE_ENV") === "lint";
