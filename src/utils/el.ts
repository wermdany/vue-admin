/**
 *与 DOM 相关的方法
 *
 */

/**
 *在某个节点下查找某个标签名
 *
 * @date 01/02/2021
 * @export
 * @param {Element} element 需要查找的节点范围
 * @param {string} elementName 查找的节点名
 */
export function findElementByName(
  element: Element,
  elementName: keyof HTMLElementTagNameMap
) {
  return element.tagName.toLowerCase() === elementName.toLowerCase()
    ? element
    : element.querySelector(elementName);
}

/**
 *在某个元素上手动触发一个事件
 *
 * @date 01/02/2021
 * @export
 * @param {Element} element 需要触发事件的元素
 * @param {string} type 触发的事件名
 */
export function triggerEvent(
  element: Element,
  type: keyof HTMLElementEventMap,
  bubbles = true,
  cancelable = true
): void {
  const event = document.createEvent("HTMLEvents");
  event.initEvent(type, bubbles, cancelable);
  element.dispatchEvent(event);
}
