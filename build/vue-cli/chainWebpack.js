const { isDev } = require("../env");

const plugins = require("./plugins");

const loader = require("./loader");

module.exports = config => {
  if (isDev) {
    config.devtool("source-map");
  }
  plugins(config);
  loader(config);
  config.resolve.alias.set("path", require.resolve("path-browserify"));

  // config.optimization.splitChunks({
  //   chunks: "all"
  // });
};
