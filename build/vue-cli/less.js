const { getThemeVariables } = require("ant-design-vue/dist/theme");

const less = {
  javascriptEnabled: true,
  modifyVars: getThemeVariables()
};

module.exports = less;
