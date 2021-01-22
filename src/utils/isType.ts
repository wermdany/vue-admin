/**
 * 类型判断
 */

const toString = Object.prototype.toString;

export const TypeMap = {
  Number: "[object Number]",
  String: "[object String]",
  Array: "[object Array]",
  Object: "[object Object]",
  Function: "[object Function]",
  Boolean: "[object Boolean]",
  Undefined: "[object Undefined]",
  Null: "[object Null]",
  Blob: "[object Blob]",
  File: "[object File]",
  Map: "[object Map]",
  Set: "[object Set]",
  FormData: "[object FormData]"
};

/** 获取类型 */
export function getType<T>($: T) {
  return toString.call($);
}

/** 是否是数字类型 */
export function isNumber<T>($: T): boolean {
  return getType($) === TypeMap["Number"];
}

/** 是否是 NaN */
export function isNaN<T>($: T): boolean {
  return $ !== $;
}

/** 是否是 boolean */
export function isBoolean<T>($: T): boolean {
  return getType($) === TypeMap["Boolean"];
}

/** 是否是字符串类型 */
export function isString<T>($: T): boolean {
  return getType($) === TypeMap["String"];
}

/** 是否是对象类型 */
export function isObject<T>($: T): boolean {
  return getType($) === TypeMap["Object"];
}

/** 是否是数组类型 */
export function isArray<T>($: T): boolean {
  return getType($) === TypeMap["Array"];
}

/** 是否是函数类型 */
export function isFun<T>($: T): boolean {
  return getType($) === TypeMap["Function"];
}

/** 是否是 undefined */
export function isUndefined<T>($: T): boolean {
  return getType($) === TypeMap["Undefined"];
}

/** 是否是 null */
export function isNull<T>($: T): boolean {
  return getType($) === TypeMap["Null"];
}

/** 是否定义 */
export function isDef<T>($: T): boolean {
  return !isNull($) && !isUndefined($);
}

/** 是否是 blob 类型 */
export function isBlob<T>($: T): boolean {
  return getType($) === TypeMap["Blob"];
}

/** 是否是 file 类型 */
export function isFile<T>($: T): boolean {
  return getType($) === TypeMap["File"];
}

/** 是否是 map 类型 */
export function isMap<T>($: T): boolean {
  return getType($) === TypeMap["Map"];
}

/** 是否是 set 类型 */
export function isSet<T>($: T): boolean {
  return getType($) === TypeMap["Set"];
}

/** 是否是 formData 类型 */
export function isFormData<T>($: T): boolean {
  return getType($) === TypeMap["FormData"];
}
