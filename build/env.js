const { getNow } = require("./utils");
const gitRevisionPlugin = require("git-revision-webpack-plugin");

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
const getGitHash = function() {
  try {
    const git = new gitRevisionPlugin();
    return git.commithash();
    // eslint-disable-next-line no-empty
  } catch (e) {}
  return "unknown";
};

/** 非配置文件的环境变量  */
const useOtherEnv = {
  APP_VERSION: require("../package.json").version,
  BUILD_TIME: getNow(),
  GIT_HASH: getGitHash()
};

const isDev = env.NODE_ENV === "development";

const isProd = env.NODE_ENV === "production";

const isTest = env.NODE_ENV === "test";

module.exports = {
  getEnv,
  isDev,
  isProd,
  isTest,
  useOtherEnv
};
