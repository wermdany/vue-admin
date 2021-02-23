import { createApp } from "vue";

import App from "@/App.vue";

import router, { setupVueRouter } from "@/router";
import { setupVueStore } from "@/store";
import { setupVueI18n } from "@/locales";
import { isDev } from "@/var/env";

const app = createApp(App);

console.log(process.env);

setupVueI18n(app);

setupVueRouter(app);

setupVueStore(app);

router.isReady().then(() => {
  app.mount("#app");
});

//在开发环境启动调试
if (isDev()) {
  app.config.performance = true;
  window.__APP__ = app;
}
