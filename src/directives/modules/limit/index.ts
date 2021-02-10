import { isFun, isRegExp } from "@/utils";
import { findElementByName } from "@/utils/el";
import { ObjectDirective } from "vue";

function filter(regexp: RegExp) {
  return function(value: string) {
    return value.replace(new RegExp(regexp, "g"), "");
  };
}

const inputLimit: ObjectDirective = {
  mounted(el, binding) {
    let inputEl: typeof el = findElementByName(el, "input");
    if (!inputEl) {
      inputEl = findElementByName(el, "textarea");
    }
    if (!inputEl) {
      throw TypeError("元素中查找不到 input 或 textarea");
    }
    let filterFun: any = null;
    if (isRegExp(binding.value)) {
      filterFun = filter(binding.value);
    } else if (isFun(binding.value)) {
      filterFun = binding.value;
    } else {
      throw TypeError("构建过滤方法失败, value 既不是 Function 也不是 Regexp");
    }
    // 输入事件
    inputEl._input_ = function(e: any) {
      const wish = filterFun(e.target.value);
      //减少混合输入下input频繁触发，只有存在不合理的才会格式化，ios光标跳至最后
      if (!inputEl?._composing_ && e.target.value !== wish) {
        e.target.value = wish;
        setTimeout(function() {
          e.target.value = wish;
          e.target.dispatchEvent(new InputEvent("input"));
        });
      }
    };
    // 组合输入开始
    inputEl._compositionstart_ = function() {
      inputEl._composing_ = true;
    };
    inputEl._compositionend_ = function(e: any) {
      const wish = filter(e.target.value);
      inputEl._composing_ = false;
      //只有存在不合理的才会格式化，ios光标跳至最后
      if (e.target.value !== wish) {
        e.target.value = wish;
        setTimeout(function() {
          e.target.value = wish;
          e.target.dispatchEvent(new InputEvent("input"));
        });
      }
    };

    inputEl.addEventListener(
      "compositionstart",
      inputEl._compositionstart_,
      false
    );
    inputEl.addEventListener("compositionend", inputEl._compositionend_, false);
    inputEl.addEventListener("input", inputEl._input_, false);
  },
  beforeUnmount(el) {
    let inputEl: any = findElementByName(el, "input");
    if (!inputEl) {
      inputEl = findElementByName(el, "textarea");
    }
    inputEl.removeEventListener("compositionstart", inputEl._compositionstart_);
    inputEl.removeEventListener("compositionend", inputEl._compositionend_);
    inputEl.removeEventListener("input", inputEl._input_);
  }
};

export default inputLimit;
