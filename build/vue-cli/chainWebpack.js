const { isDev } = require("../env");

const plugins = require("./plugins");

const loader = require("./loader");

module.exports = config => {
  if (isDev) {
    config.devtool("source-map");
  }
  plugins(config);
  loader(config);
  // config.optimization.splitChunks({
  //   chunks: "all"
  // });
};
