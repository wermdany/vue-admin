/**
 * webpack loader config
 */

module.exports = config => {
  config.module
    .rule("lang")
    .type("javascript/auto")
    .pre()
    .test(/\w+[\\/]lang[\\/][a-z]{2}_[A-Z]{2}\.json$/)
    .use("file-loader")
    .loader("file-loader")
    // .type("javascript/auto")
    .options({
      outputPath: "lang",
      regExp: /(\w+)[\\/]lang[\\/][a-z]{2}_[A-Z]{2}\.json/,
      name: "[1]-[name].[contenthash:8].[ext]"
    });
};
