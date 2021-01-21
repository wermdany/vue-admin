const { getEnv, isDev } = require("./scripts/env");
const env = getEnv();

const devServer = require("./scripts/vue-cli/devServer");
const less = require("./scripts/vue-cli/less");
const chainWebpack = require("./scripts/vue-cli/chainWebpack");

console.log(env);

const publicPath = env.VUE_APP_PUBLIC_PATH;

module.exports = {
  publicPath: isDev ? "/" : publicPath,
  productionSourceMap: false,
  chainWebpack: chainWebpack,
  css: {
    loaderOptions: {
      less
    }
  },
  devServer: devServer
};
