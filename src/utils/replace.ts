/** 转化语言格式 正则 */
export const parseLanguageRegExp = /^([a-zA-Z]{2})(-|_)?([a-zA-Z]{2})?$/;

/** 验证是否是需要的语言代码格式 正则 */
export const validateUseLanguageRegExp = /^[a-z]{2}_[A-Z]{2}$/;

const parseLanguageFun = (word: string, p1: string, p2: string, p3: string) =>
  p3 ? `${p1.toLowerCase()}_${p3.toUpperCase()}` : p1.toLowerCase();

/**
 *转化浏览器返回的语言为需要的格式
 * zh-cn => zh_CN
 * zh_cn => zh_CN
 * zh    => zh
 * @export
 * @param {string} lang
 */
export function parseLanguage(lang: string) {
  return lang.replace(parseLanguageRegExp, parseLanguageFun);
}
