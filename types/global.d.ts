import { defineComponent } from "vue";
/** 组件 */
export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

/** 空值类型 */
export type NullOrUndefined = undefined | null;
