import { createApp } from "vue";

import App from "@/App.vue";

import router, { setupVueRouter } from "@/router";
import { setupStore } from "@/store";
import { setupVueI18n } from "@/locales";
import { isDev } from "@/utils/env";

const app = createApp(App);

setupVueI18n(app);

setupVueRouter(app);

setupStore(app);

router.isReady().then(() => {
  app.mount("#app");
});

window.__ENV__ = process.env;

//在开发环境启动调试
if (isDev) {
  app.config.performance = true;
  window.__APP__ = app;
  console.log(window.__ENV__);
}
