const { useLanguage } = require("./scripts/commitizen");

const configList = {
  zh: require("./scripts/commitizen/config-zh"),
  en: require("./scripts/commitizen/config-en")
};
module.exports = configList[useLanguage];
