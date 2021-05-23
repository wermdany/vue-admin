/**
 *与 web能力 相关的方法
 *
 */

/**
 *获取本机语言
 *
 * @date 01/02/2021
 * @export
 */
export function getLocalLanguage() {
  return window.navigator.language;
}

/**
 *获取本机语言列表
 *
 * @export
 */
export function getLocalLanguages() {
  return window.navigator.languages;
}
