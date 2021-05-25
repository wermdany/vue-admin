import { createApp } from "vue";

import App from "@/App.vue";

import router, { setupVueRouter } from "@/router";
import { setupStore } from "@/store";
import { setupVueI18n } from "@/locales";
import { isDev, env as ENV } from "@/utils";

(async () => {
  const app = createApp(App);

  setupStore(app);

  setupVueI18n(app);

  setupVueRouter(app);

  await router.isReady();
  app.mount("#app");

  window.__ENV__ = ENV;

  //在开发环境启动调试
  if (isDev) {
    app.config.performance = true;
    window.__APP__ = app;
    console.log(window.__ENV__);
  }
})();
