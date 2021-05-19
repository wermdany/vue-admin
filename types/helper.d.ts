/** 返回数组值的类型 */
export type ReturnArrayValues<T extends Array<any>> = T extends Array<infer P>
  ? P
  : never;
