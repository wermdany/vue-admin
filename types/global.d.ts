/** 组件 */
export { Component } from "vue";

/** 空值类型 */
export type NullOrUndefined = undefined | null;

export type Lazy<T> = () => Promise<T>;
