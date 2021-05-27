<template>
  <div class="login">
    <input type="text" v-model.number="system.num" />
    <a-button type="primary" @click="changeLang"
      >add{{ t("login.a") }}</a-button
    >
    <ul>
      <li v-for="item in system.num" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Button } from "ant-design-vue";
import { useI18n } from "vue-i18n";
import { useSystemStore, useLocaleStore } from "@/store";
import { useLocaleApi } from "@/locales";
export default defineComponent({
  name: "LOGIN",
  components: {
    [Button.name]: Button
  },
  setup() {
    const a = ref(1);
    const { t } = useI18n();
    const system = useSystemStore();
    const locale = useLocaleStore();
    const { manualChangeUseLocale } = useLocaleApi();
    const changeLang = () => {
      if (locale.lang == "zh_CN") {
        manualChangeUseLocale("en_US");
      } else {
        manualChangeUseLocale("zh_CN");
      }
    };
    return { a, t, system, locale, changeLang };
  }
});
</script>
