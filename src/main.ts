import { createApp } from "vue";

import App from "@/App.vue";

import router, { useVueRouter } from "@/router";
import { useVueStore } from "@/store";
import { useVueI18n } from "@/locales";
import { isDev } from "@/var/env";

const app = createApp(App);

console.log(process.env);

useVueI18n(app);

useVueRouter(app);

useVueStore(app);

router.isReady().then(() => {
  app.mount("#app");
});

//在开发环境启动调试
if (isDev()) {
  app.config.performance = true;
  window.__APP__ = app;
}
