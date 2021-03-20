import { App } from "vue";
import { EevOptions } from "./env";
declare global {
  declare interface Window {
    __APP__: App<Element>;
    __ENV__: EevOptions;
  }
}
