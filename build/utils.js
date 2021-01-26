const dayjs = require("dayjs");

/**
 *获取当前时间 YYYY-MM-DD HH:mm:ss
 *
 * @date 20/01/2021
 * @param {string} [f="YYYY-MM-DD HH:mm:ss"]
 */
const getNow = (f = "YYYY-MM-DD HH:mm:ss") => dayjs().format(f);

/**
 *吧正常变量转化为 DefinePlugin 需要的格式
 *
 * @date 20/01/2021
 * @param {*} obj
 * @return {*}
 */
const ToEnvPrams = obj => {
  const prams = {};
  for (const key in obj) {
    prams[key] = JSON.stringify(obj[key]);
  }
  return prams;
};

module.exports = { getNow, ToEnvPrams };
