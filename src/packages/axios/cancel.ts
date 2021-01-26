import { isFun } from "@/utils";
import { Canceler } from "axios";

export default class AxiosCancel {
  private cancelMap = new Map<object, Canceler>();
  /**
   *直接重置取消对象
   */
  reset() {
    this.cancelMap = new Map<object, Canceler>();
  }
  /**
   *先执行取消请求再清空所有
   */
  removeAllPending() {
    this.cancelMap.forEach(cancel => {
      cancel && isFun(cancel) && cancel();
    });
    this.cancelMap.clear();
  }
  addPending(config: any) {
    this.cancelMap.set(config, config);
  }
}
