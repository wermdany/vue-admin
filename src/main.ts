import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import {
  getAllRouteMap,
  getAllRouteConfig,
  getUseRouteMap,
  getUseRouteConfig
} from "@/router/generator";

const Map = getAllRouteMap();

console.log(getUseRouteMap(Map));
const Config = getAllRouteConfig();
console.log(getUseRouteConfig(Config));

console.log(process.env);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
