<template>
  <div class="login">
    <input type="text" v-model.number="system.num" />
    <Button type="primary" @click="changeLang">{{ t("login.a") }}</Button>
    <DatePicker v-model:value="dateTime" />
    <C />
    <p v-for="(value, key) in lang" :key="value">{{ key + "-" + value }}</p>
    <ul>
      <li v-for="item in system.num" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Button, DatePicker } from "ant-design-vue";
import { useI18n } from "vue-i18n";
import { useSystemStore, useLocaleStore } from "@/store";
import { useLocaleApi } from "@/locales";
import moment from "moment";
import C from "./c";

export default defineComponent({
  name: "login",
  components: {
    Button: Button,
    DatePicker,
    C
  },
  setup() {
    const dateTime = ref(moment().add(3, "weeks"));
    const { t } = useI18n();
    const system = useSystemStore();
    const locale = useLocaleStore();
    const { manualChangeUseLocale } = useLocaleApi();

    const lang = {
      zh_CN: "简体中文",
      en_US: "English (US)"
    };
    const changeLang = () => {
      if (locale.lang == "zh_CN") {
        manualChangeUseLocale("en_US");
      } else {
        manualChangeUseLocale("zh_CN");
      }
    };
    return { dateTime, t, system, locale, changeLang, lang };
  }
});
</script>
