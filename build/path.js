const path = require("path");

const rootPath = path.resolve(__dirname, "../");

/**
 *相对于根目录的 resolve
 *
 * @param {*} file
 */
const resolve = file => path.resolve(rootPath, file);

/**
 *相对于根目录的 join
 *
 * @param {*} file
 */
const join = file => path.join(rootPath, file);

module.exports = {
  resolve,
  join,
  rootPath
};
