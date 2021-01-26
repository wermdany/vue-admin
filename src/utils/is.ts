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
  Promise = "Promise"
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
export function isNumber<T>($: T): boolean {
  return is($, TypeEnum.Number);
}

/** 是否是 NaN */
export function isNaN<T>($: T): boolean {
  return $ !== $;
}

/** 是否是 boolean */
export function isBoolean<T>($: T): boolean {
  return is($, TypeEnum.Boolean);
}

/** 是否是字符串类型 */
export function isString<T>($: T): boolean {
  return is($, TypeEnum.String);
}

/** 是否是对象类型 */
export function isObject<T>($: T): boolean {
  return is($, TypeEnum.Object);
}

/** 是否是数组类型 */
export function isArray<T>($: T): boolean {
  return is($, TypeEnum.Array);
}

/** 是否是函数类型 */
export function isFun<T>($: T): boolean {
  return is($, TypeEnum.Function);
}

/** 是否是 undefined */
export function isUndefined<T>($: T): boolean {
  return is($, TypeEnum.Undefined);
}

/** 是否是 null */
export function isNull<T>($: T): boolean {
  return is($, TypeEnum.Null);
}

/** 是否定义 */
export function isDef<T>($: T): boolean {
  return !isNull($) && !isUndefined($);
}

/** 是否是 blob 类型 */
export function isBlob<T>($: T): boolean {
  return is($, TypeEnum.Blob);
}

/** 是否是 file 类型 */
export function isFile<T>($: T): boolean {
  return is($, TypeEnum.File);
}

/** 是否是 map 类型 */
export function isMap<T>($: T): boolean {
  return is($, TypeEnum.Map);
}

/** 是否是 set 类型 */
export function isSet<T>($: T): boolean {
  return is($, TypeEnum.Set);
}

/** 是否是 formData 类型 */
export function isFormData<T>($: T): boolean {
  return is($, TypeEnum.FormData);
}

/** 是否是 Data 类型 */
export function isDate<T>($: T): boolean {
  return is($, TypeEnum.Date);
}

/** 是否是 RegExp 类型 */
export function isRegExp<T>($: T): boolean {
  return is($, TypeEnum.RegExp);
}

/** 是否是 Promise 类型 */
export function isPromise<T = any>($: any): $ is Promise<T> {
  return is($, TypeEnum.Promise) && isFun($.then) && isFun($.catch);
}
