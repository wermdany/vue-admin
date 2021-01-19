const { getEnv, isDev } = require("./scripts/env");
const env = getEnv();

const devServer = require("./scripts/vue-cli/devServer");
const less = require("./scripts/vue-cli/less");
const plugins = require("./scripts/vue-cli/plugins");

console.log(env);

const publicPath = env.VUE_APP_PUBLIC_PATH;

module.exports = {
  publicPath: isDev ? "/" : publicPath,
  productionSourceMap: false,
  configureWebpack: {
    plugins,
    devtool: "source-map"
  },
  css: {
    loaderOptions: {
      less
    }
  },
  devServer: devServer
};
