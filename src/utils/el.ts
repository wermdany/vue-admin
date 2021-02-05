/**
 *与 HTML 相关的方法
 *
 */

type FindElementByNameReturn = Element | null;

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
  elementName: string
): FindElementByNameReturn {
  return element.tagName.toLowerCase() === elementName.toLowerCase()
    ? element
    : element.querySelector("elementName");
}

/**
 *在某个元素上手动触发一个事件
 *
 * @date 01/02/2021
 * @export
 * @param {Element} element 需要触发事件的元素
 * @param {string} type 触发的事件名
 */
export function triggerEvent(element: Element, type: string): void {
  const event = document.createEvent("HTMLEvents");
  event.initEvent(type, true, true);
  element.dispatchEvent(event);
}
