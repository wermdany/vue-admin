const env = process.env;
/**
 *获取环境变量
 *
 * @returns envs 环境变量
 */
const getEnv = function() {
  const envs = {
    NODE_ENV: env.NODE_ENV
  };
  for (const key in env) {
    if (/^VUE_APP/.test(key)) {
      envs[key] = env[key];
    }
  }
  return envs;
};

const isDev = env.NODE_ENV === "development";

const isProd = env.NODE_ENV === "production";

const isTest = env.NODE_ENV === "test";

module.exports = {
  getEnv,
  isDev,
  isProd,
  isTest
};
