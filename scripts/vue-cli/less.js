const { resolve } = require("../path");

const less = {
  javascriptEnabled: true,
  modifyVars: {
    hack: `true;@import "${resolve(
      "./src/styles/var/ant-design-vue/index.less"
    )}";`
    // @import "${resolve("./src/styles/var/ant-design-vue/dark.less")}";
  }
};

module.exports = less;
