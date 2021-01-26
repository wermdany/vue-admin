const { useLanguage } = require("./build/commitizen");

const configList = {
  zh: require("./build/commitizen/config-zh"),
  en: require("./build/commitizen/config-en")
};
module.exports = configList[useLanguage];
