/**
 *与 解析转化 相关的方法
 *
 */

/** 验证是否是需要的语言代码格式 正则 */
export const systemUseLanguage = /^[a-z]{2}_[A-Z]{2}$/;
const lowerCaseLanguage = /^[a-z]{2}$/;
const anyCaseLanguage = /^[a-zA-Z]{2}$/;

/**
 *转化浏览器返回的语言为需要的格式
 *
 * zh-cn => zh_CN
 *
 * zh_cn => zh_CN
 *
 * zh    => zh
 * @export
 * @param {string} lang
 */
export function parseLanguage(lang: string) {
  if (systemUseLanguage.test(lang) || lowerCaseLanguage.test(lang)) {
    // 如果合法，直接返回
    return lang;
  }
  if (lang.indexOf("-") > -1 || lang.indexOf("_") > -1) {
    let index = lang.indexOf("-");
    if (index === -1) {
      index = lang.indexOf("_");
    }
    const prefix = lang.substr(0, 2);
    const suffix = lang.substr(index + 1, 2);
    if (!anyCaseLanguage.test(prefix)) {
      return "";
    }
    if (!anyCaseLanguage.test(suffix)) {
      return prefix.toLowerCase();
    }
    return `${prefix.toLowerCase()}_${suffix.toUpperCase()}`;
  }

  const prefix = lang.substr(0, 2);

  if (!anyCaseLanguage.test(prefix)) {
    return "";
  }
  return prefix.toLowerCase();
}
