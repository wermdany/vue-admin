/**
 * 类型判断
 */

const toString = Object.prototype.toString;

export enum TypeEnum {
  Number = "Number",
  String = "String",
  Array = "Array",
  Object = "Object",
  Function = "Function",
  Boolean = "Boolean",
  Undefined = "Undefined",
  Null = "Null",
  Blob = "Blob",
  File = "File",
  Map = "Map",
  Set = "Set",
  FormData = "FormData",
  Date = "Date",
  RegExp = "RegExp",
  Promise = "Promise",
  window = "window"
}

/** 获取类型 */
export function getType<T>($: T) {
  return toString.call($);
}
/** 判断当前类型是否是指定的类型 */
export function is<T>($: T, type: TypeEnum): boolean {
  return getType($) === `[object ${type}]`;
}

/** 是否是数字类型 */
export function isNumber($: unknown): $ is number {
  return is($, TypeEnum.Number);
}

/** 是否是 NaN */
export function isNaN<T>($: T): $ is T {
  return $ !== $;
}

/** 是否是 boolean */
export function isBool($: unknown): $ is boolean {
  return is($, TypeEnum.Boolean);
}

/** 是否是字符串类型 */
export function isString($: unknown): $ is string {
  return is($, TypeEnum.String);
}

/** 是否是对象类型 */
export function isObject($: any): $ is Record<any, any> {
  return is($, TypeEnum.Object);
}

/** 是否是数组类型 */
export function isArray($: any): $ is Array<any> {
  return is($, TypeEnum.Array);
}

/** 是否是函数类型 */
export function isFun($: unknown): $ is Function {
  return is($, TypeEnum.Function);
}

/** 是否是 undefined */
export function isUndefined($: unknown): $ is undefined {
  return is($, TypeEnum.Undefined);
}

/** 是否是 null */
export function isNull($: unknown): $ is null {
  return is($, TypeEnum.Null);
}

/** 是否定义 */
export function isDef($: unknown): $ is null | undefined {
  return !isNull($) && !isUndefined($);
}

/** 是否是 blob 类型 */
export function isBlob($: unknown): $ is Blob {
  return is($, TypeEnum.Blob);
}

/** 是否是 file 类型 */
export function isFile($: unknown): $ is File {
  return is($, TypeEnum.File);
}

/** 是否是 map 类型 */
export function isMap($: unknown): $ is Map<any, any> {
  return is($, TypeEnum.Map);
}

/** 是否是 set 类型 */
export function isSet($: unknown): $ is Set<any> {
  return is($, TypeEnum.Set);
}

/** 是否是 formData 类型 */
export function isFormData($: unknown): $ is FormData {
  return is($, TypeEnum.FormData);
}

/** 是否是 Data 类型 */
export function isDate($: unknown): $ is Date {
  return is($, TypeEnum.Date);
}

/** 是否是 RegExp 类型 */
export function isRegExp($: unknown): $ is RegExp {
  return is($, TypeEnum.RegExp);
}

/** 是否是 Promise 类型 */
export function isPromise<T = any>($: any): $ is Promise<T> {
  return (
    is($, TypeEnum.Promise) && isObject($) && isFun($.then) && isFun($.catch)
  );
}

/** 是否是 window 类型 */
export function isWindow($: any): $ is Window {
  return typeof window !== "undefined" && is($, TypeEnum.window);
}

/** 是否是 element 类型 */
export function isElement($: unknown): $ is Element {
  return isObject($) && !!$.tagName;
}

/** 是否是空 */
export function isEmpty<T = unknown>($: T): $ is T {
  if (isArray($) || isString($)) {
    return $.length === 0;
  }

  if (isSet($) || isMap($)) {
    return $.size === 0;
  }

  if (isObject($)) {
    return Object.keys($).length === 0;
  }

  return false;
}
