const MomentToDayjsPlugin = require("antd-dayjs-webpack-plugin");
const WebPack = require("webpack");

const { useOtherEnv } = require("../env");
const { ToEnvPrams } = require("../utils");
module.exports = config => {
  // 把 moment 替换为 dayjs
  config.plugin("momentToDayjsPlugin").use(MomentToDayjsPlugin);
  //增加打包 banner
  config.plugin("banner").use(WebPack.BannerPlugin, [
    {
      banner: () => {
        let ban = "";
        for (const key in useOtherEnv) {
          ban += `${key}: ${useOtherEnv[key]} `;
        }
        return ban;
      }
    }
  ]);
  //注入其他环境变量
  config.plugin("define").tap(args => {
    const envs = args[0]["process.env"];
    const other = ToEnvPrams(useOtherEnv);
    for (const key in other) {
      envs[key] = other[key];
    }
    return args;
  });
  //增加打包文件信息
};
