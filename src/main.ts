import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { getAllRouteMap, getAllRouteConfig, genRoutes } from "./router/gen";

const Map = getAllRouteMap();

const Config = getAllRouteConfig();
console.log(genRoutes(Map, Config));

console.log(process.env);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
