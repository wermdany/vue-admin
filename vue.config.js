const { getEnv, isDev } = require("./build/env");
const env = getEnv();

const devServer = require("./build/vue-cli/devServer");
const less = require("./build/vue-cli/less");
const chainWebpack = require("./build/vue-cli/chainWebpack");

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
