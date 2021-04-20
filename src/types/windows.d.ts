import { App } from "vue";
import { EnvOptions } from "./env";
declare global {
  declare interface Window {
    __APP__: App<Element>;
    __ENV__: EnvOptions;
  }
}
