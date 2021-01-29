const { isDev } = require("../env");

const plugins = require("./plugins");

module.exports = config => {
  if (isDev) {
    config.devtool("source-map");
  }
  plugins(config);
  // config.optimization.splitChunks({
  //   chunks: "all"
  // });
};
