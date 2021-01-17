const devServer = require("./scripts/vue-cli/devServer");
const { getEnv, isDev } = require("./scripts/env");
const env = getEnv();

console.log(env);

const publicPath = env.VUE_APP_PUBLIC_PATH;

module.exports = {
  publicPath: isDev ? "/" : publicPath,
  productionSourceMap: false,
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: devServer
};
