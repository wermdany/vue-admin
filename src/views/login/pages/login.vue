<template>
  <div class="login">
    <Button type="primary" @click="changeLang">{{ t("login.a") }}</Button>
    <DatePicker v-model:value="dateTime" />
    <C />
    <Carousel />
    <p v-for="(value, key) in lang" :key="value">{{ key + "-" + value }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Button, DatePicker, Carousel } from "ant-design-vue";
import { useI18n } from "vue-i18n";
import { useLocaleStore } from "@/store";
import { useLocaleApi } from "@/locales";
import dayjs from "dayjs";
import C from "./c";

const dateTime = ref(dayjs().add(4, "year"));
const { t } = useI18n();
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
</script>
